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
import AppHeader from "@/components/layout/AppHeader";

export default {
  components: {
    AppHeader,
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
