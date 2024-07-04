<template>
  <div class="popup-wrapper">
    <div class="popup-contents">
      <div class="popup-head-box py-5 px-10">
        <div class="head-tit-box">아이디 찾기</div>
        <div class="btn btn-sm btn-icon btn-active-color-primary">
          <router-link to="" @click="emit('openFindId')" class="popup-close-btn">
          <span class="svg-icon svg-icon-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.5"
                  x="6"
                  y="17.3137"
                  width="16"
                  height="2"
                  rx="1"
                  transform="rotate(-45 6 17.3137)"
                  fill="currentColor"
                ></rect>
                <rect
                  x="7.41422"
                  y="6"
                  width="16"
                  height="2"
                  rx="1"
                  transform="rotate(45 7.41422 6)"
                  fill="currentColor"
                ></rect>
              </svg>
            </span>
          </router-link>
        </div>
      </div>

      <div class="popup-body-box py-5 px-10">
        <article class="table-form-layout1">
          <div class="form-body-box">
            <div class="table-box">
              <table>
                <colgroup>
                  <col style="width: 168px"/>
                  <col style="width: auto"/>
                </colgroup>
                <tbody>
                <tr>
                  <th>이름 <span class="text-primary">*</span></th>
                  <td class="vertical-top">
                    <div class="item-cell-box full">
                      <div class="tbox full">
                        <input type="text" v-model="model.name" maxlength="15"/>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>휴대폰번호 <span class="text-primary">*</span></th>
                  <td class="vertical-top">
                    <div class="item-cell-box full">
                      <!--                          <div class="tbox full">-->
                      <!--                            <input type="text" v-model="form.telno" @input='removeHyphens'/>-->
                      <!--                          </div>-->
                      <button
                        @click="openCertify"
                        class="btn btn-flex w-100 btn-sm btn-secondary fs-7 justify-content-center"
                        :disabled='model.isCertified'
                      >
                        본인인증
                      </button>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </article>

        <div style="margin-top:10px">
        <article class="modal-menu-layout1">
          <div class="modal-menu-list">
            <router-link to="" class="modal-menu-btn menu-primary" @click="check">
              아이디 찾기
            </router-link>
          </div>
        </article>
        </div>
      </div>

      <article v-show="model.showCertify" class="popup popup-certify">
        <cert-modal :form="model.form" :crtfNo="model.crtfNo" @openCertify="openCertify"
                    @phone-certify="phoneCertify" @remove-hyphens="removeHyphens" @certify-no="certifyNo"
                    @update:crtfNo="value => model.crtfNo = value" />
      </article>

    </div>
  </div>

  <article v-show="model.isAlert" class="popup popup-alert">
    <div class="popup-wrapper">
      <div class="popup-contents py-10 px-10" style="width: 300px">
        <article class="modal-alert-layout pb-10">
          <div class="alert-view-box pb-6">
            <img src="/img/common/ic_alert.svg" alt="이미지" />
          </div>
          <div class="alert-msg-box" v-html='formatErrMsg()'></div>
        </article>
        <article class="modal-menu-layout1">
          <div class="modal-menu-list">
            <router-link to="" @click="alertClose" class="modal-menu-btn menu-primary"
            >확인
            </router-link
            >
          </div>
        </article>
      </div>
    </div>
  </article>
</template>

<script setup>
import { reactive } from 'vue'
import CertModal from '@/components/common/modal/CertModal.vue'
import store from '@/store/store.js'
import { axios_cstm } from '@/util/axios_cstm'
import { API_PROD } from '@/util/constantURL'

const emit = defineEmits(['openFindId'])

const model = reactive({
  name: '',
  showCertify: false,
  isCertified: false,
  form: {
    telno: ''
  },
  crtfNo: '',
  timer: null,
  errMsg: '',
  isAlert: false,
  didFind: false,
})

function openCertify() {
  model.showCertify = !model.showCertify
}

function phoneCertify() {
  const certifyRows = document.querySelectorAll('.certify-row')
  const certifyBtns = document.querySelectorAll('.certify-btn')

  certifyRows.forEach((row) => {
    row.style.display = 'table-row'
  })

  certifyBtns.forEach((btn) => {
    btn.textContent = '재발송'
  })
  const num = model.form.telno
  store.dispatch('user/sendSms', num)
  timerStart()
}

function timerStart() {
  let time = 179 // 기준시간 작성
  let min = '' // 분
  let sec = '' // 초

  if (model.timer) {
    clearInterval(model.timer)
  }

  model.timer = setInterval(() => {
    min = parseInt(time / 60) // 몫을 계산
    sec = time % 60 // 나머지를 계산

    if (min.toString().length === 1) {
      min = '0' + min.toString()
    }

    if (sec.toString().length === 1) {
      sec = '0' + sec.toString()
    }

    document.querySelector('.timer').textContent = min + ':' + sec

    time--

    if (time < 0) {
      clearInterval(model.timer) // setInterval() 실행을 끝냄
    }
  }, 1000)
}

function removeHyphens() {
  model.form.telno = model.form.telno.replace(/-/g, '')
}

function certifyNo(num) {
  console.log(num)
  if (num === '') {
    alertOpen('인증번호를 입력해 주세요.')
  } else if (num.length !== 6) {
    alertOpen('인증번호를 6자리로\n' + '입력해 주세요.')
  } else {
    store.dispatch('user/confirmSms', { phoneNo: model.form.telno, certNo: num }).then((result) => {
      if (result) {
        alertOpen('인증이 완료되었습니다.')
        /* todo 본인확인Flag Y로저장 */
        model.isCertified = true
        model.crtfNo = ''
        openCertify()
      } else {
        alertOpen('인증번호가 일치하지 않습니다.\n' + '다시 입력해 주세요.')
      }
    })
  }
}

function alertOpen(msg) {
  model.errMsg = msg
  model.isAlert = true
}

function formatErrMsg() {
  return model.errMsg.replace(/\n/g, '<br>')
}

function alertClose() {
  console.log('실행')
  model.isAlert = !model.isAlert
  if(model.didFind) emit('openFindId')
}

function check() {
  if(!model.isCertified || !model.form.telno){
    alertOpen('본인인증을 먼저 진행해 주세요.')
    return
  }
  const url = `${API_PROD}/api/v1/public/user/find-id`
  const request = {
    userNm: model.name,
    telno: model.form.telno,
  }

  axios_cstm().post(url, request).then( (response) => {
    const data = response.data

    if(data.code === '00') {
      alertOpen(`회원님의 ID는 ${data.result}입니다.`)
    }else if(data.code === '01') {
      alertOpen(data.msg)
    }
  })
}
</script>
