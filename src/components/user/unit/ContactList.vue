<template>
  <div class="board-body-box">
    <div class="list-wrap">
      <div class="list-group-box">
        <div class="list-head-box" :class="{ hide: listBoxesHide['organization'] }">
          <a
            href="javascript:void(0)"
            class="head-box d-flex flex-center justify-content-between"
            @click="listBoxesHide['organization'] = !listBoxesHide['organization']"
          >
            <div class="head-tit-box">내 연락처</div>
            <!-- 내 조직 -->
            <i class="fa-solid fa-angle-down" style="color: #9fa1ab"></i>
            <i class="fa-solid fa-angle-up" style="color: #9fa1ab"></i>
          </a>
        </div>

        <div class="list-body-box" v-if="model.usersList">
          <div
            v-for="(user, idx) in model.usersList.items?.filter((item) => item['userStatCd'] === 'URST0001')"
            :key="idx"
            role="button"
            class="item-box"
            @click="onSelectUser(user)"
            :style="user === model.selectedUser ? { 'background-color': '#74AFEB22' } : {}"
          >
            <div class="item-info-box">
              <div class="profile-box">
                <img src="/img/common/img_profile_default.svg" alt="이미지" />
              </div>

              <div class="info-box">
                <div class="subject-box">
                  {{ user['userNm'] }}
                  <div class="label-txt text-primary">{{ user['jobCd'] }}</div>
                </div>
                <div class="con-box">
                  {{ `${user['ocpCd']} / ${user['dutyDstr1Cd']} / ${user['instNm']}` }}
                </div>
              </div>
            </div>

            <div class="item-option-box"></div>
          </div>
        </div>
      </div>

      <div class="list-group-box">
        <div class="list-head-box" :class="{ hide: listBoxesHide['request'] }">
          <a
            href="javascript:void(0)"
            class="head-box d-flex flex-center justify-content-between"
            @click="listBoxesHide['request'] = !listBoxesHide['request']"
          >
            <div class="head-tit-box">등록요청</div>
            <i class="fa-solid fa-angle-down" style="color: #9fa1ab"></i>
            <i class="fa-solid fa-angle-up" style="color: #9fa1ab"></i>
          </a>
        </div>
        <div class="list-body-box" v-if="model.usersList">
          <div
              v-for="(user, idx) in model.usersList.items?.filter((item) => item['userStatCd'] === 'URST0002')"
              :key="idx"
              role="button"
              class="item-box"
              @click="onSelectUser(user)"
              :style="user === model.selectedUser ? { 'background-color': '#74AFEB22' } : {}"
          >
            <div class="item-info-box">
              <div class="profile-box">
                <img src="/img/common/img_profile_default.svg" alt="이미지" />
              </div>

              <div class="info-box">
                <div class="subject-box">
                  {{ user['userNm'] }}
                  <div class="label-txt text-primary">{{ user['jobCd'] }}</div>
                </div>
                <div class="con-box">
                  {{ `${user['ocpCd']} / ${user['dutyDstr1Cd']} / ${user['instNm']}` }}
                </div>
              </div>
            </div>

            <div class="item-option-box"></div>
          </div>
        </div>
        <div class="list-head-box" :class="{ hide: listBoxesHide['favourite'] }">
          <a
            href="javascript:void(0)"
            class="head-box d-flex flex-center justify-content-between"
            @click="listBoxesHide['favourite'] = !listBoxesHide['favourite']"
          >
            <div class="head-tit-box">즐겨찾기</div>
            <i class="fa-solid fa-angle-down" style="color: #9fa1ab"></i>
            <i class="fa-solid fa-angle-up" style="color: #9fa1ab"></i>
          </a>
        </div>
        <div class="list-head-box" :class="{ hide: listBoxesHide['mayKnow'] }">
          <a
            href="javascript:void(0)"
            class="head-box d-flex flex-center justify-content-between"
            @click="listBoxesHide['mayKnow'] = !listBoxesHide['mayKnow']"
          >
            <div class="head-tit-box">알 수도 있는 사람</div>
            <i class="fa-solid fa-angle-down" style="color: #9fa1ab"></i>
            <i class="fa-solid fa-angle-up" style="color: #9fa1ab"></i>
          </a>
        </div>

        <div class="list-body-box"></div>
      </div>
    </div>

    <div class="list-menu-box d-flex justify-content-center pt-8">
      <a
        @click="$emit('showUserInvite')"
        class="btn btn-flex bg-primary text-white rounded-pill"
        >사용자 초대</a
      >
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { defineEmits, onMounted, reactive } from 'vue'

const store = useStore()
const emit = defineEmits('onUserSelected')
let listBoxesHide = reactive({
  request: false,
  favourite: false,
  organization: false,
  mayKnow: false
})
let model = reactive({
  usersList: [],
  selectedUser: null
})

onMounted(() => {
  store.dispatch('user/getUsersListSync').then((result) => {
    model.usersList = result
  })
})

function onSelectUser(user) {
  model.selectedUser = user
  emit('onUserSelected', user)
}
</script>

<style scoped>
.subject-box {
  font-size: 1.3rem;
}
</style>
