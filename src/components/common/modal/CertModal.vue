<template>
  <div class="popup-wrapper">
    <div class="popup-contents">
      <div class="popup-head-box py-5 px-10">
        <div class="head-tit-box">본인인증</div>
        <div class="head-option-box">
          <router-link to="" @click="$emit('openCertify')" class="popup-close-btn">
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
        <article class="modal-head-layout1">
          <div class="modal-head-box pb-12">
            <div class="head-box">본인인증</div>
            <div class="sub-box">입력하신 휴대폰번호로 인증을 진행해 주세요.</div>
          </div>
        </article>

        <article class="table-form-layout1">
          <div class="form-head-box"></div>
          <div class="form-body-box">
            <div class="table-box">
              <table>
                <colgroup>
                  <col style="width: 168px" />
                  <col style="width: auto" />
                </colgroup>
                <tbody>
                <tr>
                  <th>휴대폰번호 <span class="text-primary">*</span></th>
                  <td style="padding: 10px;">
                    <div class="item-row-box">
                      <div class="item-cell-box">
                        <div class="tbox short">
                          <input type="text" v-model="form.telno" @input="$emit('removeHyphens')"/>
                        </div>
                        <router-link
                          to=""
                          @click="$emit('phoneCertify')"
                          class="btn btn-sm btn-primary h-30px ms-3 certify-btn"
                          style="min-width: 103px"
                        >인증번호 발송</router-link>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr class="certify-row" style="display: none">
                  <th>인증번호 <span class="text-primary">*</span></th>
                  <td style="padding: 10px;">
                    <div class="item-row-box">
                      <div class="item-cell-box">
                        <div class="tbox short">
                          <input
                            type="text"
                            :value="crtfNo"
                            @input="$emit('update:crtfNo', $event.target.value)"
                            placeholder="인증번호 6자리"
                          />
                        </div>
                        <div class="timer-box ms-3 text-danger" style="min-width: 103px">
                          유효시간: <span class="timer">03:00</span>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </article>
      </div>

      <div class="popup-foot-box py-5 px-10">
        <article class="modal-menu-layout1">
          <div class="modal-menu-list">
            <router-link to="" @click="$emit('certifyNo', crtfNo)" class="modal-menu-btn menu-primary">확인</router-link>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['form', 'crtfNo'])
const emit = defineEmits(['openCertify', 'removeHyphens', 'phoneCertify', 'certifyNo', 'update:crtfNo'])
</script>

<style scoped>
/* Add your styles here */
</style>
