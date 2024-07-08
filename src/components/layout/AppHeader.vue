<template>
  <!--begin::Header-->
  <div
    id="kt_app_header"
    class="app-header"
    data-kt-sticky="true"
    data-kt-sticky-activate="{default: false, lg: true}"
    data-kt-sticky-name="app-header-sticky"
    data-kt-sticky-offset="{default: false, lg: '300px'}"
  >
    <!--begin::Header container-->
    <div
      class="app-container container-fluid d-flex align-items-stretch justify-content-between"
      id="kt_app_header_container"
    >
      <!--begin::Header logo-->
      <div class="app-header-logo d-flex align-items-center">
        <!--begin::Mobile toggle-->
        <div
          class="btn btn-icon btn-color-gray-500 btn-active-color-primary w-35px h-35px ms-n2 me-2 d-flex d-lg-none"
          id="kt_app_header_menu_toggle"
        >
          <!--begin::Svg Icon | path: icons/duotune/abstract/abs015.svg-->
          <span class="svg-icon svg-icon-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                fill="currentColor"
              />
              <path
                opacity="0.3"
                d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <!--end::Svg Icon-->
        </div>
        <!--end::Mobile toggle-->
        <!--begin::Logo image-->
        <a href="/dashbd" class="logo-area" aria-current="page"></a>
        <!--end::Logo image-->
      </div>
      <!--end::Header logo-->
      <!--begin::Header wrapper-->
      <div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
        <!--begin::Menu wrapper-->
        <div class="d-flex align-items-stretch" id="kt_app_header_menu_wrapper">
          <!--begin::Menu-->
          <div
            class="menu menu-top-rounded menu-column menu-lg-row menu-active-bg menu-title-gray-600 menu-state-dark menu-arrow-gray-400 fw-semibold fw-semibold fs-6 align-items-stretch my-5 my-lg-0 px-2 px-lg-0"
            id="kt_app_header_menu"
            data-kt-menu="true"
          >
            <router-link
              to="/dashbd"
              class="menu-item me-0 me-lg-1"
            >
              <span class="menu-link">
                <span class="menu-title">상황판</span>
              </span>
            </router-link>

            <router-link
              to="/user/bedasgn/list"
              @click="getBdList"
              class="menu-item me-0 me-lg-1"
            >
              <span class="menu-link">
                <span class="menu-title">병상배정</span>
              </span>
            </router-link>

            <router-link
              to="/user/patnt/list"
              @click="getPtList"
              class="menu-item me-0 me-lg-1"
            >
              <span class="menu-link">
                <span class="menu-title">환자관리</span>
              </span>
            </router-link>

            <router-link
              to="/user/cntc/list"
              @click="getUsersList"
              class="menu-item me-0 me-lg-1"
            >
              <span class="menu-link">
                <span class="menu-title">연락처/메시지</span>
              </span>
            </router-link>

            <router-link
              to="/user/svrt/list"
              class="menu-item me-0 me-lg-1"
            >
              <span class="menu-link">
                <span class="menu-title">중증환자모니터링</span>
              </span>
            </router-link>

            <router-link
              to="/user/medinst/list"
              class="menu-item me-0 me-lg-1"
            >
              <span class="menu-link">
                <span class="menu-title">의료기관 조회</span>
              </span>
            </router-link>

            <router-link
              v-show="userInfo.jobCd === JobCode.Sysa"
              to="/admin/user/list"
              @click="getUserList"
              class="menu-item me-0 me-lg-1"
            >
              <span class="menu-link">
                <span class="menu-title">시스템관리</span>
              </span>
            </router-link>

          </div>
          <!--end::Menu-->
        </div>
        <!--end::Menu wrapper-->

        <!--begin::Navbar-->
        <div class="app-navbar flex-shrink-0">
          <div class="app-navbar-item" id="kt_app_header_middle_wrapper">
            <a href="https://bitflow.notion.site/1-c386cb59de4440208ec146d6968bf877?pvs=4" target='_blank'
               class="btn btn-flex btn-sm btn-primary my-auto">
              <i class="fa-solid fa-triangle-exclamation" /> 사용자매뉴얼
            </a>
          </div>

          <!--begin::Activities-->
<!--          <div class="app-navbar-item ms-2 me-2 d-none d-xxl-flex">-->
            <!--begin::Drawer toggle-->
<!--            <div-->
<!--              class="bell-wrapper btn btn-icon btn-custom w-35px h-35px w-md-40px h-md-40px position-relative"-->
<!--              data-kt-menu-trigger="{default: 'click', lg: 'hover'}"-->
<!--              data-kt-menu-attach="parent"-->
<!--              data-kt-menu-placement="bottom-end"-->
<!--            >-->
<!--              <img src='@/assets/img/ic-bell.webp' />-->
<!--              <div-->
<!--                class="badge-bell position-absolute top-0 start-100 translate-middle badge badge-sm rounded-pill mt-3 bg-primary"-->
<!--              >1-->
<!--              </div>-->
<!--            </div>-->
            <!--end::Drawer toggle-->
<!--          </div>-->
          <!--end::Activities-->

          <!--begin::User menu-->
          <div class="app-navbar-item ms-lg-3" id="kt_header_user_menu_toggle">
            <!--begin::Menu wrapper-->
            <div
              class="cursor-pointer symbol symbol-35px symbol-md-40px"
              @click='showUserDetail'
            >
              <img
                class="symbol symbol-35px symbol-md-40px"
                src="/img/avatars/ic-user-default.svg"
                alt="user"
              />
            </div>
            <!--begin::User account menu-->
            <div
              class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
              data-kt-menu="true"
            >
              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <div class="menu-content d-flex align-items-center px-3">
                  <!--begin::Avatar-->
                  <div class="symbol symbol-50px me-5">
                    <img alt="Logo" src="/img/avatars/ic-user-default.svg" />
                  </div>
                  <!--end::Avatar-->
                  <!--begin::Username-->
                  <div class="d-flex flex-column">
                    <div class="fw-bold d-flex align-items-center fs-3">
                      {{ userInfo.userNm }}
                      <span class="badge badge-light-success fw-bold fs-5 px-2 py-1 ms-2">
                        {{ userInfo.ocpCd }}그룹
                      </span>
                    </div>
                    <a class="user-id fw-semibold text-muted text-hover-primary fs-5">{{
                        userInfo.id
                      }}</a>
                  </div>
                  <!--end::Username-->
                </div>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu separator-->
              <div class="separator my-2"></div>
              <!--end::Menu separator-->
              <!--begin::Menu item-->
              <div class="menu-item px-5">
                <a
                  class="menu-link px-5"
                >내 정보</a
                >
              </div>
              <!--end::Menu item-->
              <!--begin::Menu item-->
              <div class="menu-item px-5">
                <a href="/" class="menu-link px-5">로그아웃</a>
              </div>
              <!--end::Menu item-->
            </div>
            <!--end::User account menu-->
            <!--end::Menu wrapper-->
          </div>
          <!--end::User menu-->

          <!--begin::Notifications-->
          <div class="app-navbar-item ms-3 ms-lg-2">
            <!--begin::Menu- wrapper-->
            <div class="h-35px h-md-40px" id="kt_activities_toggle">
              <p>{{ userInfo.userNm }}</p>
              <p class="text-truncate">{{ userInfo.instNm }}/{{ userInfo.ocpCd }}</p>
            </div>
            <!--end::Menu wrapper-->
          </div>
          <!--end::Notifications-->
        </div>
        <!--end::Navbar-->
      </div>
      <!--end::Header wrapper-->
    </div>
    <!--end::Header container-->
  </div>
  <!--end::Header-->

  <my-info-modal v-if="mode==='myinfo'" :isChrgInfo='false' :userInfo='userInfo'
                 @closeModal='closeModal' />

  <my-info-mod-modal v-if="mode==='myinfomod'" :userInfo='userInfo' @closeModal='closeModal' />

  <!--begin::Modal - 내정보 휴대폰번호 변경 -->
  <div class="modal fade" id="kt_modal_user_phone" tabindex="-1" aria-hidden="true"
       v-if='mode==="modphone"'>
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-550px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>휴대폰번호 변경</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
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
            <!--end::Svg Icon-->
          </div>
          <!--end::Close-->
        </div>

        <!--begin::Modal header-->
        <!--begin::Modal body-->

        <div class="modal-body scroll-y py-10 px-10">
          <article class="modal-head-layout1">
            <div class="modal-head-box pb-12">
              <div class="head-box">휴대폰번호 변경</div>
              <div class="sub-box">변경하실 휴대폰번호로 인증을 진행해 주세요.</div>
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
                  <tr>
                    <th>휴대폰번호 <span class="text-primary">*</span></th>
                    <td>
                      <div class="item-row-box">
                        <div class="item-cell-box">
                          <div class="tbox full">
                            <input type="text" placeholder="휴대폰번호 입력" />
                          </div>
                          <a
                            href="javascript:phoneCertify();"
                            class="btn btn-sm btn-primary h-30px ms-3 certify-btn"
                            style="min-width: 103px"
                          >인증번호 발송</a
                          >
                        </div>
                      </div>

                      <div class="item-row-box mt-3">
                        <div class="item-note-box">* 유효성 검사 문구</div>
                      </div>
                    </td>
                  </tr>

                  <tr class="certify-row" style="display: none">
                    <th>인증번호 <span class="text-primary">*</span></th>
                    <td>
                      <div class="item-row-box">
                        <div class="item-cell-box">
                          <div class="tbox full">
                            <input type="text" placeholder="인증번호 6자리" />
                          </div>

                          <div class="timer-box ms-3 text-danger" style="min-width: 103px">
                            유효시간: <span class="timer">02:59</span>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>

            <div class="table-foot-box mt-10">
              <article class="modal-menu-layout1">
                <div class="modal-menu-list">
                  <a
                    href="javascript:alertPopupOpen('메시지 입력')"
                    class="modal-menu-btn menu-primary"
                  >변경완료</a
                  >
                </div>
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
  <!--end::Modal - 내정보 수정 -->

  <!--begin::Modal - 사용자 초대 -->
  <div class="modal fade" id="kt_modal_user_invite" tabindex="-1" aria-hidden="true"
       v-if='mode==="invite"'>
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-550px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>사용자 초대</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
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
            <!--end::Svg Icon-->
          </div>
          <!--end::Close-->
        </div>

        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body scroll-y py-10 px-10">
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
                    <th>이름 <span class="text-primary">*</span></th>
                    <td>
                      <div class="item-row-box">
                        <div class="item-cell-box full">
                          <div class="tbox full">
                            <input type="text" placeholder="이름 입력" />
                          </div>
                        </div>
                      </div>

                      <div class="item-row-box mt-3">
                        <div class="item-note-box">* 이름은 필수 입력입니다</div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>휴대폰번호 <span class="text-primary">*</span></th>
                    <td>
                      <div class="item-row-box">
                        <div class="item-cell-box full">
                          <div class="tbox full">
                            <input type="text" placeholder="휴대폰번호를 입력해주세요." />
                          </div>
                        </div>
                      </div>

                      <div class="item-row-box mt-3">
                        <div class="item-note-box">* 숫자만 입력 해주세요</div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>내 조직으로 초대 <span class="text-primary">*</span></th>
                    <td>
                      <div class="item-row-box">
                        <div class="item-cell-box full">
                          <div class="rbox">
                            <label>
                              <input type="radio" name="invite" checked /><i></i>
                              <span class="txt text-black">내 조직</span>
                            </label>
                          </div>
                          <div class="rbox ms-4">
                            <label>
                              <input type="radio" name="invite" /><i></i>
                              <span class="txt text-black">다른 기관</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>사용 권한 <span class="text-primary">*</span></th>
                    <td>
                      <div class="item-row-box">
                        <div class="item-cell-box">
                          <div class="rbox">
                            <label>
                              <input type="radio" name="role" checked /><i></i>
                              <span class="txt text-black">일반</span>
                            </label>
                          </div>

                          <div class="item-alarm-box ms-6">일반 업무처리 및 사용자 초대 권한</div>
                        </div>
                      </div>

                      <div class="item-row-box mt-2">
                        <div class="item-cell-box">
                          <div class="rbox">
                            <label>
                              <input type="radio" name="role" checked /><i></i>
                              <span class="txt text-black">게스트</span>
                            </label>
                          </div>

                          <div class="item-alarm-box ms-6">업무조회만 가능</div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            </div>

            <div class="table-foot-box mt-10">
              <article class="modal-menu-layout1">
                <div class="modal-menu-list">
                  <a href="javascript:void(0)" class="modal-menu-btn menu-primary">초대전송</a>
                </div>
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
  <!--end::Modal - 내정보 수정 -->

  <!--begin::Modal - 사용자 승인 처리 -->
  <div class="modal fade" id="kt_modal_user_approval" tabindex="-1" aria-hidden="true"
       v-if='mode==="approval"'>
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-550px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>승인 처리</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
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
            <!--end::Svg Icon-->
          </div>
          <!--end::Close-->
        </div>

        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body scroll-y py-10 px-10">
          <article class="table-form-layout2">
            <div class="form-head-box"></div>

            <div class="form-body-box">
              <div class="row">
                <div class="subject-box">승인/반려 여부</div>
                <div class="con-box">
                  <div class="item-cell-box">
                    <div class="rbox">
                      <label>
                        <input type="radio" name="approval" /><i></i>
                        <span class="txt">승인</span>
                      </label>
                    </div>

                    <div class="rbox ms-4">
                      <label>
                        <input type="radio" name="approval" /><i></i>
                        <span class="txt">반려</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="subject-box">메시지</div>
                <div class="con-box">
                  <div class="textbox">
                    <textarea
                      onkeyup="limitTextarea(this,'textarea1',500)"
                      maxlength="500"
                    ></textarea>
                    <div class="option-box d-flex justify-content-end">
                      <span id="textarea1">0</span>/500자
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-foot-box pt-10">
              <article class="modal-menu-layout1">
                <div class="modal-menu-list">
                  <a
                    href="javascript:confirmPopupOpen('$회원번호(회원명)$님을<br/>사용자로<br/>승인 하시겠습니까?')"
                    class="modal-menu-btn menu-primary"
                  >저장</a
                  >
                </div>
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
  <!--end::Modal - 내정보 수정 -->

  <!--end::Modals-->
</template>

<script>
import { mapState } from 'vuex'
import { getTelno, ptType } from '@/util/ui'
import MyInfoModal from '@/components/user/modal/MyInfoModal.vue'
import MyInfoModModal from '@/components/user/modal/MyInfoModModal.vue'
import { JobCode } from '@/util/sbas_cnst'

export default {
  name: 'AppHeader',
  components: { MyInfoModModal, MyInfoModal },
  created() {
    this.$store.dispatch('user/getSido')
  },
  data() {
    return {
      tabidx: 0,
      mode: '',
      ptType,
      JobCode
    }
  },
  computed: {
    ...mapState('user', ['userInfo']),
  },
  methods: {
    getTelno,
    getUserList() {
      this.$store.dispatch('admin/getSido')
      this.$store.dispatch('admin/getUserList')
    },
    getUsersList() {
      this.$store.dispatch('user/getUsersList')
    },
    getBdList() {
      console.log('리로드')
      this.$store.dispatch('bedasgn/getBdListWeb')
      this.$store.dispatch('bedasgn/getBedStatCount')
    },
    getPtList() {
      // 대구로 설정
      const dutyDstr1Cd = '27'
      // const { dutyDstr1Cd } = this.userInfo
      if (dutyDstr1Cd) {
        const data = { dstr1Cd: dutyDstr1Cd }
        this.$store.dispatch('patnt/getPatntList', data)
      } else {
        this.$store.dispatch('patnt/getPatntList')
      }
      this.$store.dispatch('admin/getSido')
    },
    // getSvrtPtList() {
    //   const dutyDstr1Cd = '27'
    //   if (dutyDstr1Cd) {
    //     const data = { dstr1Cd: dutyDstr1Cd, sever: true }
    //     this.$store.dispatch('patnt/getPatntList', data)
    //   }
    //   this.$store.dispatch('admin/getSido')
    // },
    getMediList() {
      // 대구로 설정
      const dutyDstr1Cd = '27'
      // const { dutyDstr1Cd } = this.userInfo
      if (dutyDstr1Cd) {
        this.$store.dispatch('admin/getMedinst', { dstr1Cd: dutyDstr1Cd })
      } else {
        this.$store.dispatch('admin/getMedinst')
      }
    },
    showUserDetail() {
      this.mode = 'myinfo'
    },
    showUserInvite() {
      this.mode = 'invite'
    },
    closeModal() {
      this.mode = ''
    }
  }
}
</script>

<style scoped>
.logo-area {
  background-image: url('@/assets/img/title-bar.webp');
  width: 120px;
  height: 100%;
  background-size: 150px;
  background-repeat: no-repeat;
  background-position: center;
}
.fs-5 {
  font-size: 0.85rem !important;
}

.router-link-active {
  background-color: rgb(116, 175, 235);
}
.router-link-active .menu-title {
  color: white !important;
}

.user-id {
  margin-top: 12px;
}

.profile-view-box > img {
  opacity: 0.7;
}

.bell-wrapper {
  position: relative;
}

.badge-bell {
  padding: 2px 0 3px 4px;
}

.modal {
  display: block;
}
</style>
