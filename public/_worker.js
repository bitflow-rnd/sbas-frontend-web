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
      console.log('PRXY_URL_API', PRXY_URL_API)
      return fetch(PRXY_URL_API, req)
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
