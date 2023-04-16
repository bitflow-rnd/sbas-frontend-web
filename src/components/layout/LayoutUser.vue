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
        <!-- sidebar start -->
        <SideBar v-if="isadminpage"></SideBar>
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
import AppHeader from "@/components/layout/AppHeader";
import SideBar from "@/components/layout/SideBar";
import { useRoute } from 'vue-router';
import { watch } from "vue";

export default {
  components: {
    AppHeader,
    SideBar
  },
  props: {
    name: String
  },
  data() {
    return {
      isadminpage: false
    }
  },
  setup() {
    return {
    }
  },
  mounted(){
    const route = useRoute()
    watch(route, (to) => {
      this.isadminpage = to.path.startsWith("/admin");
      console.log("isadminpage " + this.isadminpage);
    }, {flush: 'pre', immediate: true, deep: false})
    // }, {flush: 'pre', immediate: true, deep: true})
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
