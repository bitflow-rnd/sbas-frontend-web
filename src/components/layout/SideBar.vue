<template>
  <!--begin::Sidebar-->
  <section class="app-lnb">
    <div class="lnb-wrap">
      <div class="depth-group">
        <div class="depth-head-box">
          <i class="fa-solid fa-users"></i>&nbsp;&nbsp;&nbsp;&nbsp;
          <div class="head-txt-box">사용자 관리</div>
        </div>
        <div class="depth-body-box">
          <ul class="depth1">
            <li class="depth1-box"><router-link to="/admin/user/list" @click="setActive(0)" :class="{'': tabidx === 0}" class="depth1-btn">사용자 관리</router-link></li>
          </ul>
        </div>
        <div class="depth-head-box">
          <i class="fa-solid fa-computer"></i>&nbsp;&nbsp;&nbsp;&nbsp;
          <div class="head-txt-box">시스템 관리</div>
        </div>
        <div class="depth-body-box">
          <ul class="depth1">
            <li class="depth1-box"><router-link to="#none" @click="setActive(1)" :class="{'': tabidx === 1}" class="depth1-btn">공통코드 관리</router-link></li>
            <li class="depth1-box"><router-link to="/admin/comm/ancmt/list" @click="setActive(2)" :class="{'': tabidx === 2}" class="depth1-btn">공지사항 관리</router-link></li>
            <li class="depth1-box"><router-link to="/admin/comm/usgterm/list" @click="setActive(3)" :class="{'': tabidx === 3}" class="depth1-btn">약관/방침 관리</router-link></li>
            <li class="depth1-box"><router-link to="#none" @click="setActive(4)" :class="{'': tabidx === 4}" class="depth1-btn">App 버전 관리</router-link></li>
          </ul>
        </div>
        <div class="depth-head-box">
          <i class="fa-solid fa-sitemap"></i>&nbsp;&nbsp;&nbsp;&nbsp;
          <div class="head-txt-box">기관정보 관리</div>
        </div>
        <div class="depth-body-box">
          <ul class="depth1">
            <li class="depth1-box"><router-link to="#none" @click="setActive(5)" :class="{'': tabidx === 5}" class="depth1-btn">병상배정반 관리</router-link></li>
            <li class="depth1-box"><router-link to="#none" @click="setActive(6)" :class="{'': tabidx === 6}" class="depth1-btn">보건소 관리</router-link></li>
            <li class="depth1-box"><router-link to="#none" @click="setActive(7)" :class="{'': tabidx === 7}" class="depth1-btn active">의료기관 관리</router-link></li>
            <li class="depth1-box"><router-link to="/admin/organ/firestatn/list" @click="setActive(8)" :class="{'': tabidx === 8}" class="depth1-btn">구급대 관리</router-link></li>
            <li class="depth1-box"><router-link to="#none" @click="setActive(9)" :class="{'': tabidx === 9}" class="depth1-btn">전산담당 관리</router-link></li>
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
.head-txt-box { font-size: 14px; }
.depth-head-box > i {
  color: #3F90E2;
}
</style>
