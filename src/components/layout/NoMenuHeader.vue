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
        <router-link to="/dashbd">
          <img alt="Logo" src="/img/logos/title-bar.webp" class="theme-light-show" />
          <img alt="Logo" src="/img/logos/demo44-dark.svg" class="h-25px theme-dark-show" />
        </router-link>
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
            {{ props.title }}
          </div>
          <!--end::Menu-->
        </div>
        <!--end::Menu wrapper-->

        <!--begin::Navbar-->
        <div class="app-navbar flex-shrink-0">

          <div class="app-navbar-item" id="kt_app_header_middle_wrapper">

          </div>


          <!--begin::Activities-->
          <div class="app-navbar-item ms-2 me-2 d-none d-xxl-flex">

          </div>
          <!--end::Activities-->


          <!--begin::User menu-->
          <div class="app-navbar-item ms-lg-3" id="kt_header_user_menu_toggle">

          </div>
          <!--end::User menu-->

          <!--begin::Notifications-->
          <div class="app-navbar-item ms-3 ms-lg-2">

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

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.fs-5 {
  font-size: 0.85rem !important;
}
.user-id {
  margin-top: 12px;
}
.profile-view-box > img {
  opacity: 0.7;
}
.bell-wrapper { position: relative; }
.badge-bell { padding: 2px 0 3px 4px; }
.modal { display: block; }
</style>
