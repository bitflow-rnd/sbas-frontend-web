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
              class="menu-item me-0 me-lg-1"
            >
              <span class="menu-link">
                <span class="menu-title">병상배정</span>
              </span>
            </router-link>

            <router-link
              to="/user/patnt/list"
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
              @click="getMediList"
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
          <div class="app-navbar-item ms-2 me-2 d-none d-xxl-flex">
            <!--begin::Drawer toggle-->
            <div class='bell-wrapper btn btn-icon btn-custom w-35px h-35px w-md-40px h-md-40px position-relative'
                 @click='openNotificationList' >
              <img src='@/assets/img/ic-bell.webp' />
              <div class="badge-bell position-absolute top-0 start-100 translate-middle badge badge-sm rounded-pill mt-3 bg-primary"
                   style='font-size: 0.85rem'>
                {{ this.notificationCount }}
              </div>
            </div>
          <!--end::Drawer toggle-->
          </div>
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

  <NotificationModal v-if='this.mode==="notification"' @closePopup='closeModal' />

</template>

<script>
import { mapState } from 'vuex'
import MyInfoModal from '@/components/user/modal/MyInfoModal.vue'
import MyInfoModModal from '@/components/user/modal/MyInfoModModal.vue'
import { JobCode } from '@/util/sbas_cnst'
import NotificationModal from '@/components/user/modal/NotificationModal.vue'
import { axios_cstm } from '@/util/axios_cstm'
import { API_PROD } from '@/util/constantURL'

export default {
  name: 'AppHeader',
  components: { NotificationModal, MyInfoModModal, MyInfoModal },
  created() {
    this.$store.dispatch('admin/getSido')
  },
  data() {
    return {
      tabidx: 0,
      mode: '',
      JobCode,
      notificationCount: 0,
    }
  },
  mounted() {
    this.getNotificationCount()
  },
  watch: {
    '$route': 'getNotificationCount',
  },
  computed: {
    ...mapState('user', ['userInfo']),
  },
  methods: {
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
    closeModal() {
      this.mode = ''
      this.getNotificationCount()
    },
    openNotificationList() {
      this.mode = 'notification'
    },
    getNotificationCount() {
      const url = `${API_PROD}/api/v1/private/user/alarm-count`
      axios_cstm().get(url)
        .then((response) => {
          const data = response.data
          if (data.code === '00') {
            this.notificationCount = data.result
          }
        })
        .catch((e) => {
          console.log(e)
        })
    },
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

.router-link-active {
  background-color: rgb(116, 175, 235);
}
.router-link-active .menu-title {
  color: white !important;
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

</style>
