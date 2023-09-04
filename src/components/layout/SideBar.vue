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
            <li class="depth1-box">
              <router-link
                to=""
                @click="handlefunc(getUserList, 0)"
                :class="{ active: tabidx === 0 }"
                class="depth1-btn"
                >사용자 관리</router-link
              >
            </li>
          </ul>
        </div>
        <div class="depth-head-box">
          <i class="fa-solid fa-sitemap"></i>&nbsp;&nbsp;&nbsp;&nbsp;
          <div class="head-txt-box">기관정보 관리</div>
        </div>
        <div class="depth-body-box">
          <ul class="depth1">
            <li class="depth1-box">
              <router-link
                to="#none"
                @click="setActive(5)"
                :class="{ active: tabidx === 5 }"
                class="depth1-btn"
                >병상배정반 관리</router-link
              >
            </li>
            <!--            <li class="depth1-box"><router-link to="#none" @click="setActive(6)" :class="{'active': tabidx === 6}" class="depth1-btn">보건소 관리</router-link></li>-->
            <li class="depth1-box">
              <router-link
                to="/admin/organ/medinst/list"
                @click="handlefunc(getMediList, 7)"
                :class="{ active: tabidx === 7 }"
                class="depth1-btn"
                >의료기관 관리</router-link
              >
            </li>
            <li class="depth1-box">
              <router-link
                to=""
                @click="handlefunc(getFireStatn, 8)"
                :class="{ active: tabidx === 8 }"
                class="depth1-btn"
                >구급대 관리</router-link
              >
            </li>
            <!--            <li class="depth1-box"><router-link to="#none" @click="setActive(9)" :class="{'active': tabidx === 9}" class="depth1-btn">전산담당 관리</router-link></li>-->
          </ul>
        </div>
        <div class="depth-head-box">
          <i class="fa-solid fa-computer"></i>&nbsp;&nbsp;&nbsp;&nbsp;
          <div class="head-txt-box">시스템 관리</div>
        </div>
        <div class="depth-body-box">
          <ul class="depth1">
            <li class="depth1-box">
              <router-link
                to="/admin/comm/cd/cdgrp/list"
                @click="setActive(1)"
                :class="{ active: tabidx === 1 }"
                class="depth1-btn"
                >공통코드 관리</router-link
              >
            </li>
            <li class="depth1-box">
              <router-link
                to="/admin/comm/ancmt/list"
                @click="setActive(2)"
                :class="{ active: tabidx === 2 }"
                class="depth1-btn"
                >공지사항 관리</router-link
              >
            </li>
            <li class="depth1-box">
              <router-link
                to="/admin/comm/usgterm/list"
                @click="setActive(3)"
                :class="{ active: tabidx === 3 }"
                class="depth1-btn"
                >약관/방침 관리</router-link
              >
            </li>
            <li class="depth1-box">
              <router-link
                to="#none"
                @click="setActive(4)"
                :class="{ active: tabidx === 4 }"
                class="depth1-btn"
                >App 버전 관리</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!--end::Sidebar-->
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      tabidx: 0
    }
  },
  methods: {
    handlefunc(fun, idx) {
      this.setActive(idx)
      fun()
    },
    setActive(idx) {
      this.tabidx = idx
    },
    getUserList() {
      this.$store.dispatch('admin/getUserList')
    },
    getFireStatn() {
      this.$store.dispatch('admin/getFireStatn')
    },
    getMediList() {
      this.$store.dispatch('admin/getMedinst', { dstrCd1: null, dstrCd2: null })
    }
  }
}
</script>

<style scoped>
.head-txt-box {
  font-size: 14px;
}
.depth-head-box > i {
  color: #3f90e2;
}
</style>
