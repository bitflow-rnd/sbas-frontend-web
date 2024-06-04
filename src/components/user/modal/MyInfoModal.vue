<template>
  <!--begin::Modal - 내정보-->
  <div
    class="modal show"
    id="kt_modal_user_profile_view"
    tabindex="-1"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-750px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2 v-show='!props.isChrgInfo'>내 정보</h2>
          <h2 v-show='props.isChrgInfo'>담당자 정보</h2>

          <!--end::Modal title-->
          <!--begin::Close-->
          <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
            <span class="svg-icon svg-icon-1" @click='$emit("closeModal")'>
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
            <!--end::Svg Icon-->
          </div>
          <!--end::Close-->
        </div>

        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body scroll-y py-10 px-10">
          <article class="modal-profile-layout1">
            <div class="profile-card-box">
              <div class="profile-view-box">
                <img
                  v-if="props.userInfo.attcId === null || props.userInfo.attcId === '' "
                  src='@/assets/img/img-no-img.webp' />
                <img v-else :src='model.myImage' />
              </div>
              <div class="profile-info-box">
                <div class="row">
                  <div class="subject-box">아이디</div>
                  <div class="con-box">{{ props.userInfo.id }}</div>

                  <a href="#none" class="profile-btn">
                    <img src="/img/common/img_profile_default.svg" alt="이미지" />
                  </a>
                </div>

                <div class="row">
                  <div class="subject-box">이름</div>
                  <div class="con-box">{{ props.userInfo.userNm }}</div>
                </div>

                <div class="row">
                  <div class="subject-box">휴대폰번호</div>
                  <div class="con-box">{{ getTelno(props.userInfo.telno) }}</div>
                </div>
              </div>
            </div>

            <div class="profile-table-box pt-8">
              <article class="table-form-layout1">
                <div class="form-head-box"></div>

                <div class="form-body-box">
                  <div class="table-box">
                    <table>
                      <colgroup>
                        <col style="width: 168px" />
                        <col style="width: auto" />
                      </colgroup>

                      <tr>
                        <th>소속기관</th>
                        <td>{{ props.userInfo.instNm }}</td>
                      </tr>

                      <tr>
                        <th>주 담당지역</th>
                        <td>{{ props.userInfo.dutyDstr1CdNm }} {{ props.userInfo.dutyDstr2CdNm ?? '전체' }}</td> <!-- {{ props.userInfo.dutyDstr1Cd }} {{ props.userInfo.dutyDstr2Cd }} -->
                      </tr>

                      <tr>
                        <th>소속기관 유형</th>
                        <td>{{ props.userInfo.instTypeCdNm }}</td>
                      </tr>

                      <tr>
                        <th>권한그룹</th>
                        <td>{{ getPmgr(props.userInfo.jobCdNm) }}</td>
                      </tr>

                      <tr>
                        <th>세부권한</th>
                        <td>{{ props.userInfo.authCdNm }}</td>
                      </tr>

                      <tr>
                        <th>직급</th>
                        <td>{{ props.userInfo.ocpCd }}</td>
                      </tr>

                      <tr>
                        <th>담당환자 유형</th>
                        <td>{{ getPtType(props.userInfo.ptTypeCd) }}</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <!--begin::Menu item-->
                <div v-show='!props.isChrgInfo' class="modal-menu-list text-end">
                  <a href="/" class="modal-menu-btn menu-primary" id="logoutLink">로그아웃</a>
                </div>
                <!--end::Menu item-->
              </article>
            </div>
          </article>
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - 내정보-->
</template>

<script setup>
import { defineProps, onMounted, reactive, ref } from 'vue'
import { getPmgr, getPtType, getTelno } from '@/util/ui'
import { useStore } from 'vuex'

const store = useStore()
const props = defineProps({
  userInfo: {
    type: Object,
    required: true
  },
  isChrgInfo:{
    type: Boolean,
    required: true
  }
})

let model = reactive({
  myImage: '',
})

const logoutLink = ref(null);

onMounted(() => {
  logoutLink.value = document.getElementById('logoutLink')
  if (logoutLink.value) {
    logoutLink.value.addEventListener('click', handleLogout)
  }
  store.dispatch('user/readPrivateImage', props.userInfo.attcId).then((result) => {
    const blob = new Blob([result], { type: 'image/jpeg' })
    model.myImage = URL.createObjectURL(blob)
  })
})

const handleLogout = () => {
  sessionStorage.removeItem('userToken');
};

</script>

<style scoped>
.modal-content { max-height: 800px; }
.modal-menu-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1.2;
  height: 40px;
  max-width: 152px;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.05em;
  border-radius: 100px;
  border: 1px solid transparent;
  cursor: pointer;
  color: #fff;
  background-color: #82b7ed;
  margin-top: 20px;
}
</style>
