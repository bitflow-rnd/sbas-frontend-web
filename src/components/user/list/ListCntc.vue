<template>
  <!--begin::Main-->
  <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
    <!--begin::Content wrapper-->
    <div class="d-flex flex-column flex-column-fluid">
      <!--begin::Toolbar-->
      <div id="kt_app_toolbar" class="app-toolbar">
        <!--begin::Toolbar wrapper-->
        <div class="app-toolbar-wrapper d-flex flex-stack flex-wrap gap-4 w-100">
          <!--begin::Page title-->
          <div class="page-title d-flex flex-column justify-content-center gap-1 me-3">
            <!--begin::Breadcrumb-->
            <ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-base">
              <!--begin::Item-->
              <li class="breadcrumb-item text-gray-700 fw-bold lh-1 mx-n1">
                <router-link to="/dashbd" class="text-hover-primary">
                  <i class="fa-solid fa-house"></i>
                </router-link>
              </li>
              <!--end::Item-->
              <!--begin::Item-->
              <li class="breadcrumb-item">
                <!--begin::Svg Icon | path: icons/duotune/arrows/arr071.svg-->
                <span class="svg-icon svg-icon-4 mx-n1">
                  <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                        fill="currentColor"
                    />
                  </svg>
                </span>
                <!--end::Svg Icon-->
              </li>
              <!--end::Item-->
              <!--begin::Item-->
              <li class="breadcrumb-item text-gray-700 fw-semibold lh-1 mx-n1 fs-6">연락처</li>
              <li class="breadcrumb-item">
                <!--begin::Svg Icon | path: icons/duotune/arrows/arr071.svg-->
                <span class="svg-icon svg-icon-4 mx-n1">
                  <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                        fill="currentColor"
                    />
                  </svg>
                </span>
                <!--end::Svg Icon-->
              </li>
              <!--end::Item-->
              <!--begin::Item-->
              <li class="breadcrumb-item text-gray-500 mx-n1">
                <h1
                    class="page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-2 m-0"
                >
                  연락처/메시지
                </h1>
              </li>
              <li class="breadcrumb-item ml-2 ms-5">
                <span>내 지역의 병상배정 유관기관과 연락할 수 있습니다</span>
              </li>
              <!--end::Item-->
            </ul>
            <!--end::Breadcrumb-->
            <!--begin::Title-->
            <!--end::Title-->
          </div>
          <!--end::Page title-->
        </div>
        <!--end::Toolbar wrapper-->
      </div>
      <!--end::Toolbar-->

      <!--begin::Content-->
      <div id="kt_app_content" class="app-content flex-column-fluid">
        <div class="card overflow-hidden">
          <section class="cntc-dashboard">
            <section class="cntc-message-board">
              <div class="board-head-box">
                <div class="head-top-box">
                  <article class="tabs-list-layout1">
                    <div class="tabs-list">
                      <a @click="onTabSelected(0)" class="tabs-btn active" role="button" ref="tab1">
                        <span class="txt">연락처</span>
                        <span class="cnt bg-primary">{{ model.userCnt }}</span>
                      </a>
                      <a @click="onTabSelected(1)" class="tabs-btn" role="button" ref="tab2">
                        <span class="txt">메시지</span>
                      </a>
                    </div>
                  </article>
                </div>

                <div class="head-mid-box" v-if="model.mode === 'contact'">
                  <div class="input-group-box d-flex flex-center">
                    <div class="option-box">
                      <article class="toggle-list-layout1">
                        <div class="toggle-list">
                          <label>
                            <input type="radio" name="toggle1" checked />
                            <span class="txt">내지역</span>
                          </label>

                          <label>
                            <input type="radio" name="toggle1" />
                            <span class="txt">전국</span>
                          </label>
                        </div>
                      </article>
                    </div>
                    <div class="input-box">
                      <input type="text" v-model='kwd' @keyup.enter='searchCntc' placeholder="이름,휴대폰번호,기관명" />
                      <a class="input-btn">
                        <i @click='searchCntc' role='button' class="fa-solid fa-magnifying-glass"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="head-bottom-box" v-if="model.mode === 'contact'">
                  <article class="check-list-layout1">
                    <div class="list-box">
                      <div class="item-box">
                        <label>
                          <input v-model='model.instTypeCd' value='ORGN0001' type="checkbox" @change='searchCntc' />
                          <span class="txt">배정반</span>
                        </label>
                      </div>
                      <div class="item-box">
                        <label>
                          <input v-model='model.instTypeCd' value='ORGN0002' type="checkbox" @change='searchCntc' />
                          <span class="txt">구급대</span>
                        </label>
                      </div>
                      <div class="item-box">
                        <label>
                          <input v-model='model.instTypeCd' value='ORGN0003' type="checkbox" @change='searchCntc' />
                          <span class="txt">보건소</span>
                        </label>
                      </div>
                      <div class="item-box">
                        <label>
                          <input v-model='model.instTypeCd' value='ORGN0004' type="checkbox" @change='searchCntc' />
                          <span class="txt">의료진</span>
                        </label>
                      </div>
                      <div class="item-box">
                        <label>
                          <input v-model='model.instTypeCd' value='ORGN0005' type="checkbox" @change='searchCntc' />
                          <span class="txt">전산</span>
                        </label>
                      </div>
                      <div class="item-box btn-invite-wrap">
                        <a
                          @click="$emit('showUserInvite')"
                          class="btn btn-flex bg-primary text-white rounded-pill"
                        >+ 사용자초대</a
                        >
                      </div>
                    </div>
                  </article>
                </div>
              </div>

              <contact-list v-if="model.mode === 'contact'" @onUserSelected="onUserSelected" :params='model.params' />
              <message-room-list v-if="model.mode === 'message'" @onRoomSelected="onRoomSelected" />

            </section>

            <template v-if="model.mode === 'contact'">
              <!-- contact detail -->
              <no-contact-detail-unit v-if="!model.selectedUser" />
              <contact-detail-unit
                v-if="model.selectedUser"
                :user="model.selectedUser"
                @openChatRoom='openChatRoom()'
              />
              <!-- contact detail -->

              <!-- contact detail right -->
              <no-contact-detail-right-unit
                v-if="!model.selectedUser || model.historyList === null" />
              <contact-detail-right-unit
                v-if="model.selectedUser && model.historyList !== null"
                :history-list='model.historyList' />
              <!-- contact detail right -->
            </template>

            <template v-if="model.mode === 'message'">
              <no-message-room-detail v-if="!model.roomInfo" />
              <message-room-detail
                v-if="model.roomInfo"
                :roomInfo="model.roomInfo"
              />
            </template>

          </section>
        </div>
      </div>
      <!--end::Content-->
    </div>
    <!--end::Content wrapper-->
  </div>
  <!--end:::Main-->
</template>

<script setup>
import ContactDetailUnit from '@/components/user/unit/ContactDetailUnit.vue'
import NoContactDetailUnit from '@/components/user/unit/NoContactDetailUnit.vue'
import NoContactDetailRightUnit from '@/components/user/unit/NoContactDetailRightUnit.vue'
import ContactDetailRightUnit from '@/components/user/unit/ContactDetailRightUnit.vue'
import ContactList from '@/components/user/list/ContactList.vue'
import MessageRoomList from '@/components/user/list/MessageRoomList.vue'
import { onMounted, reactive, ref } from 'vue'
import MessageRoomDetail from '@/components/user/detl/MessageRoomDetail.vue'
import NoMessageRoomDetail from '@/components/user/detl/NoMessageRoomDetail.vue'
import { axios_cstm } from '@/util/axios_cstm'
import { API_PROD } from '@/util/constantURL'
import { useStore } from 'vuex'

const tab1 = ref()
const tab2 = ref()

let kwd = ''
let model = reactive({
  mode: 'contact',
  selectedUser: null,
  roomInfo: null,
  historyList: null,
  search: null,
  instTypeCd: [],
  userCnt: 0,
  params: null,
})
const store = useStore()

onMounted(() => {

})

function onUserSelected(user) {
  model.selectedUser = user
  getActivityHistory(user.id)
}

function onRoomSelected(room) {
  console.log('room', JSON.stringify(room))
  model.roomInfo = room
}

function onTabSelected(idx) {
  if (idx === 0) {
    model.mode = 'contact'
    tab2.value.classList.remove('active')
    tab1.value.classList.add('active')
  } else {
    model.mode = 'message'
    tab1.value.classList.remove('active')
    tab2.value.classList.add('active')
  }
}

function openChatRoom() {
  const myInfo = store.getters['user/getUserInfo']
  const url = `${API_PROD}/api/v1/private/talk/personal`
  const data = {
    id: myInfo.id,
    userId: model.selectedUser.id,
    userNm: model.selectedUser.userNm
  }

  axios_cstm().post(url, data)
    .then((response) => {
      model.mode = 'message'
      tab1.value.classList.remove('active')
      tab2.value.classList.add('active')
    })
    .catch((error) => {
      console.log(error)
    })
}

function searchCntc() {
  if (kwd !== '') model.search = kwd
  let params = {}
  if (model.search) params = { ...params, search: model.search }
  if (model.instTypeCd && model.instTypeCd.length !== 0) params = { ...params, instTypeCd: model.instTypeCd.join(',') }

  model.params = params
}

function getActivityHistory(userId) {
  store.dispatch('user/getActivityHistory', userId).then((result) => {
    if (result.count === 0) {
      model.historyList = null
    } else {
      model.historyList = result.items
    }
  })
}

</script>

<style scoped>
.cntc-message-board .item-box:hover {
  background-color: #74afeb22;
}
.cntc-dashboard > section {
  width: 25%;
  position: relative;
}

.cntc-message-board {
  border-right: 1px dashed #999;
}

.cntc-dashboard {
  height: 100%;
  position: absolute;
  width: 100%;
}

.view-img-box img {
  height: 450px;
}

.btn-invite-wrap {
  flex-grow: 1;
  text-align: right;
}
</style>
