<template>
  <!--begin::Header-->
  <div id="kt_app_header" class="app-header" data-kt-sticky="true" data-kt-sticky-activate="{default: false, lg: true}" data-kt-sticky-name="app-header-sticky" data-kt-sticky-offset="{default: false, lg: '300px'}">
    <!--begin::Header container-->
    <div class="app-container container-fluid d-flex align-items-stretch justify-content-between" id="kt_app_header_container">
      <!--begin::Header logo-->
      <div class="app-header-logo d-flex align-items-center">
        <!--begin::Mobile toggle-->
        <div class="btn btn-icon btn-color-gray-500 btn-active-color-primary w-35px h-35px ms-n2 me-2 d-flex d-lg-none" id="kt_app_header_menu_toggle">
          <!--begin::Svg Icon | path: icons/duotune/abstract/abs015.svg-->
          <span class="svg-icon svg-icon-2">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="currentColor" />
								<path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="currentColor" />
							</svg>
						</span>
          <!--end::Svg Icon-->
        </div>
        <!--end::Mobile toggle-->
        <!--begin::Logo image-->
        <router-link to="/dashbd">
          <img alt="Logo" src="/img/logos/title-bar.webp" class="theme-light-show" />
          <img alt="Logo" src="/media/logos/demo44-dark.svg" class="h-25px theme-dark-show" />
        </router-link>
        <!--end::Logo image-->
      </div>
      <!--end::Header logo-->
      <!--begin::Header wrapper-->
      <div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
        <!--begin::Menu wrapper-->
        <div class="d-flex align-items-stretch" id="kt_app_header_menu_wrapper">
          <!--begin::Menu-->
          <div class="menu menu-top-rounded menu-column menu-lg-row menu-active-bg menu-title-gray-600 menu-state-dark menu-arrow-gray-400 fw-semibold fw-semibold fs-6 align-items-stretch my-5 my-lg-0 px-2 px-lg-0" id="kt_app_header_menu" data-kt-menu="true">
            <!--begin:Menu item-->
            <router-link to="/dashbd" @click="setActive(0)" :class="{'here': tabidx === 0}" class="menu-item me-0 me-lg-1">
              <!--begin:Menu link-->
              <span class="menu-link">
                <span class="menu-title">상황판</span>
              </span>
              <!--end:Menu link-->
            </router-link>
            <!--end:Menu item-->
            <!--begin:Menu item-->
            <router-link to="/user/bedasgn/list" @click="setActive(1)" :class="{'here': tabidx === 1}" class="menu-item me-0 me-lg-1">
              <!--begin:Menu link-->
              <span class="menu-link">
                <span class="menu-title">병상배정</span>
              </span>
              <!--end:Menu link-->
            </router-link>
            <!--end:Menu item-->
            <!--begin:Menu item-->
            <router-link to="/user/patnt/list" @click="setActive(2)" :class="{'here': tabidx === 2}" class="menu-item me-0 me-lg-1">
              <!--begin:Menu link-->
              <span class="menu-link">
                <span class="menu-title">환자관리</span>
              </span>
              <!--end:Menu link-->
            </router-link>
            <!--end:Menu item-->
            <!--begin:Menu item-->
            <router-link to="/user/cntc/list" @click="setActive(3)" :class="{'here': tabidx === 3}" class="menu-item me-0 me-lg-1">
              <!--begin:Menu link-->
              <span class="menu-link">
                <span class="menu-title">연락처/메시지</span>
              </span>
              <!--end:Menu link-->
            </router-link>
            <!--end:Menu item-->
            <!--begin:Menu item-->
            <router-link to="/user/severe" @click="setActive(4)" :class="{'here': tabidx === 4}" class="menu-item me-0 me-lg-1">
              <!--begin:Menu link-->
              <span class="menu-link">
                <span class="menu-title">중증환자모니터링</span>
              </span>
              <!--end:Menu link-->
            </router-link>
            <!--end:Menu item-->
            <!--begin:Menu item-->
            <router-link to="" @click="handlefunc(getUserList,5)" :class="{'here': tabidx === 5}" class="menu-item me-0 me-lg-1">
              <!--begin:Menu link-->
              <span class="menu-link">
                <span class="menu-title">시스템관리</span>
              </span>
              <!--end:Menu link-->
            </router-link>
            <!--end:Menu item-->
          </div>
          <!--end::Menu-->
        </div>
        <!--end::Menu wrapper-->

        <!--begin::Navbar-->
        <div class="app-navbar flex-shrink-0">

          <div class="app-navbar-item" id="kt_app_header_middle_wrapper">
            <a href="#" class="btn btn-flex btn-sm btn-danger my-auto fs-5"><i class="fa-solid fa-triangle-exclamation fs-4"></i> 병상요청</a>
          </div>

          <!--begin::User menu-->
          <div class="app-navbar-item" id="kt_header_user_menu_toggle">
            <!--begin::Menu wrapper-->
            <div class="cursor-pointer symbol symbol-35px symbol-md-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
              <img class="symbol symbol-35px symbol-md-40px" src="/img/avatars/ic-user-default.svg" alt="user" />
            </div>
            <!--begin::User account menu-->
            <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px" data-kt-menu="true">
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
                    <div class="fw-bold d-flex align-items-center fs-3">홍길동
                      <span class="badge badge-light-success fw-bold fs-5 px-2 py-1 ms-2">주임</span>
                    </div>
                    <a class="fw-semibold text-muted text-hover-primary fs-5">hosptpro</a>
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
                <a href="/account/overview.html" class="menu-link px-5">내 정보</a>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu item-->
              <div class="menu-item px-5">
                <a href="/authentication/layouts/corporate/sign-in.html" class="menu-link px-5">로그아웃</a>
              </div>
              <!--end::Menu item-->
            </div>
            <!--end::User account menu-->
            <!--end::Menu wrapper-->
          </div>
          <!--end::User menu-->

          <!--begin::Activities-->
          <div class="app-navbar-item ms-3 d-none d-xxl-flex">
            <!--begin::Drawer toggle-->
            <div class="h-35px h-md-40px" id="kt_activities_toggle">
              <p>홍길동 주임</p>
              <p class="text-truncate">칠곡경북대병원</p>
            </div>
            <!--end::Drawer toggle-->
          </div>
          <!--end::Activities-->

          <!--begin::Notifications-->
          <div class="app-navbar-item ms-3 ms-lg-4">
            <!--begin::Menu- wrapper-->
            <div class="btn btn-icon btn-custom w-35px h-35px w-md-40px h-md-40px position-relative" data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
              <i class="fa-regular fa-bell"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge badge-sm rounded-pill mt-3 bg-primary">99+</span>
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
</template>

<script>
export default {
  name: "AppHeader",
  data () {
    return {
      tabidx: 0
    }
  },
  methods: {
    setActive(idx) {
      this.tabidx = idx;
    },
    handlefunc(fun,idx){
        this.setActive(idx);
        fun();
    },
    getUserList() {
        this.$store.dispatch('admin/getUserList')
    }
  }
}
</script>

<style scoped>
</style>
