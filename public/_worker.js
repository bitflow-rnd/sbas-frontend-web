/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 * https://gist.github.com/cnych/361a221156a94b8445a28c7cce55f387
 */
export default {

	async fetch(req, env, ctx) {

		const url         = new URL(req.url)
		const search     = url.search?url.search:''
		const path       = url.pathname + search
		const host       = url.protocol + "//" + url.host
		const PRXY_URL_API= env.VITE_APP_API_URL + path

  if (path.startsWith('/api/')) {

			// 무단 API 사용 방지
			const headerClone = new Map(req.clone().headers)
			const origin  = headerClone.get('origin')
			const referer = headerClone.get('referer')
			const test    = headerClone.get('test')

      const newReq = new Request(req)
      newReq.headers.set('cf-continent',     req.cf.continent)
      newReq.headers.set('cf-country',       req.headers.get('cf-ipcountry'))
      newReq.headers.set('cf-region',        req.cf.region)
      newReq.headers.set('cf-city',          req.cf.city)
      newReq.headers.set('cf-host',          req.headers.get('host'))
      newReq.headers.set('cf-connecting-ip', req.cf['cf-connecting-ip'])
      newReq.headers.set('cf-timezone',      req.cf.timezone)
      newReq.headers.set('cf-referer',       req.headers.get('referer'))
      newReq.headers.set('x-real-ip',        req.headers.get('x-real-ip'))
      if (req.headers.get('sec-ch-ua-platform')) {
        newReq.headers.set('cf-platform',    req.headers.get('sec-ch-ua-platform').replace('\"', '').replace('\"', ''))
      }
      if (req.headers.get('accept-language')) {
        newReq.headers.set('cf-lang',        req.headers.get('accept-language').substring(0, 2))
      }

      console.log('PRXY_URL_API', PRXY_URL_API)
      return fetch(PRXY_URL_API, newReq)

		} else {

			try {
				return env.ASSETS.fetch(req)
			} catch (e) {
				let object = { }
				object['code'] = 404
				object['mesg'] = null
				object['rslt'] = null
				return Response.json(object)
			}
		}

	}
}

const AttributeRewriter = class {

	constructor(dataKey, contentAttr, metaMap) {
		this.attributeName = dataKey
		this.contentAttr = contentAttr
		this.metaMap = metaMap
	}
	element(element) {
		const attribute = element.getAttribute(this.attributeName)
		if (attribute) {
			if (element.tagName === "title") {
				element.setInnerContent(this.metaMap[attribute])
			} else {
				element.setAttribute(this.contentAttr, this.metaMap[attribute])
			}
		}
	}
}

const generateGuestToken = function() {
	// upn, group, claim,issuedAt, expiresAt
	// id, name, org, issur, isdtm, auth, grp
	try {
		const now = new Date()
		const token = jwt.sign({
			id: genSimpleRandomId()
			, name: genRandomName()
			, issur: 'gen8.id'
			, isdtm: Math.floor(now / 1000)
			, auth: 'guest@gen8.id'
			, grp: 'guest'
		}, CfConst.SCRT_JWT)
		const isValid = jwt.verify(token, CfConst.SCRT_JWT)
		if (isValid===true) {
			return token
		}
	} catch (e) {
		console.warn('e', e.message, e.description)
	}

}
