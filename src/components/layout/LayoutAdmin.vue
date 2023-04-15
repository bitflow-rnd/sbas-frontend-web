<template>
  <!--begin::Page-->
  <div class="app-page flex-column flex-column-fluid" id="kt_app_page">
    <!--begin::Header-->
    <AppHeader></AppHeader>
    <!--end::Header-->
    <!--begin::Wrapper-->
    <div class="app-wrapper d-flex" id="kt_app_wrapper">
      <!--begin::Wrapper container-->
      <div class="app-container container-fluid d-flex">
        <!--begin::Sidebar-->
        <!-- sidebar start -->
        <SideBar></SideBar>
        <!-- sidebar end -->
        <!-- tab contents start -->
        <router-view></router-view>
        <!-- tab contents end -->
      </div>
      <!--end::Wrapper container-->
    </div>
    <!--end::Wrapper-->
  </div>
  <!--end::Page-->

</template>

<script>
import SideBar from "@/components/layout/SideBar";
import AppHeader from "@/components/layout/AppHeader";

export default {
  components: {
    AppHeader,
    SideBar,
  },
  props: {
    name: String
  },
  setup() {
    return {
    }
  },
  mounted(){
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
