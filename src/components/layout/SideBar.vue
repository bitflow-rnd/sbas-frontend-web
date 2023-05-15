<template>
  <!--begin::Sidebar-->
  <section class="app-lnb">
    <div class="lnb-wrap">
      <div class="depth-group">
        <div class="depth-head-box">
          <img src="/img/common/ic_lnb_organ.svg" alt="이미지">
          <div class="head-txt-box">사용자 관리 </div>
        </div>
        <div class="depth-body-box">
          <ul class="depth1">
            <li class="depth1-box"><a href="#none" class="depth1-btn">사용자 관리</a></li>
          </ul>
        </div>
        <div class="depth-head-box">
          <img src="/img/common/ic_lnb_organ.svg" alt="이미지">
          <div class="head-txt-box">시스템 관리 </div>
        </div>
        <div class="depth-body-box">
          <ul class="depth1">
            <li class="depth1-box"><a href="#none" class="depth1-btn">공지사항 관리</a></li>
            <li class="depth1-box"><a href="#none" class="depth1-btn">약관/방침 관리</a></li>
            <li class="depth1-box"><a href="#none" class="depth1-btn">App 버전 관리</a></li>
          </ul>
        </div>
        <div class="depth-head-box">
          <img src="/img/common/ic_lnb_organ.svg" alt="이미지">
          <div class="head-txt-box">기관 정보 관리 </div>
        </div>
        <div class="depth-body-box">
          <ul class="depth1">
            <li class="depth1-box"><a href="#none" class="depth1-btn">병상배정반 관리</a></li>
            <li class="depth1-box"><a href="#none" class="depth1-btn">보건소 관리</a></li>
            <li class="depth1-box"><a href="#none" class="depth1-btn active">의료기관 관리</a></li>
            <li class="depth1-box"><a href="#none" class="depth1-btn">구급대 관리</a></li>
            <li class="depth1-box"><a href="#none" class="depth1-btn">전산담당 관리</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!--end::Sidebar-->
</template>

<script>
export default {
  name: "SideBar",
  data () {
    return {
      tabidx: 0
    }
  },
  methods: {
    setActive(idx) {
      this.tabidx = idx;
    }
  }
}
</script>

<style scoped>
</style>
