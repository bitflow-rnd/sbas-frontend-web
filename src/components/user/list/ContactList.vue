<template>
  <div class="board-body-box">
    <div class="list-wrap">
      <div class="list-group-box">

<!--        <div class="list-body-box" v-if="model.favUsersList">-->
<!--          <div-->
<!--            v-for="(user, idx) in model.favUsersList.items"-->
<!--            :key="idx"-->
<!--            role="button"-->
<!--            class="item-box"-->
<!--            @click="onSelectUser(user)"-->
<!--            :style="user === model.selectedUser ? { 'background-color': '#74AFEB22' } : {}"-->
<!--          >-->
<!--            <div class="item-info-box">-->
<!--              <div class="profile-box">-->
<!--                <img src="/img/common/img_profile_default.svg" alt="이미지" />-->
<!--              </div>-->

<!--              <div class="info-box">-->
<!--                <div class="subject-box">-->
<!--                  {{ user['userNm'] }}-->
<!--                  <div class="label-txt text-primary">{{ getPmgr(user['jobCd']) }}</div>-->
<!--                </div>-->
<!--                <div class="con-box">-->
<!--                  {{ getUserBelong(user) }}-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->

<!--            <div class="item-option-box"></div>-->
<!--          </div>-->
<!--        </div>-->

        <div class="list-body-box" v-if="model.organList">
          <div
            v-for="(user, idx) in model.organList"
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
                  <div class="label-txt text-primary">{{ user['jobCdNm'] ? user['jobCdNm'] : getPmgr(user['jobCd'])  }}</div>
                </div>
                <div class="con-box">
                  {{ getUserBelong(user) }}
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
        <div class="list-body-box" v-if="model.reqList">
          <div
              v-for="(user, idx) in model.reqList"
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
                  <div class="label-txt text-primary">{{ user['jobCdNm'] ? user['jobCdNm'] : getPmgr(user['jobCd']) }}</div>
                </div>
                <div class="con-box">
                  {{ getUserBelong(user) }}
                </div>
              </div>
            </div>

            <div class="item-option-box"></div>
          </div>
        </div>

        <div class="list-body-box"></div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { defineProps, defineEmits, onMounted, reactive, watch } from 'vue'
import { getPmgr } from '@/util/ui'

const store = useStore()
const emit = defineEmits(['onUserSelected'])
const props = defineProps({
  params: {
    type: Object,
    default: () => ({})
  },
})

const listBoxesHide = reactive({
  request: false,
  favourite: false,
  organization: false,
  mayKnow: false
})

const model = reactive({
  usersList: [],
  reqList:[],
  organList:[],
  favUsersList :[],
  selectedUser: null,
  userCnt : 0,
})

onMounted( () => {
  executeSearch()
})

watch(() => props.params, () => {
  executeSearch()
})

function executeSearch() {
  const params = { ...props.params }
  if (params.instTypeCd || params.search) {
    store.dispatch('user/getSearchUser',params).then((result)=>{
      model.reqList = result?.items?.filter((item) => item['userStatCd']==='URST0001')
      model.organList = result?.items?.filter((item) => item['userStatCd']==='URST0002')
    })
  } else {
    store.dispatch('user/getUsersListSync').then((result) => {
      model.reqList = result?.items?.filter((item) => item['userStatCd']==='URST0001')
      model.organList = result?.items?.filter((item) => item['userStatCd']==='URST0002')
    })
  }
  // store.dispatch('user/getFavUsersList').then((result2) => {
  //   model.favUsersList = result2
  // })
}

function onSelectUser(user) {
  model.selectedUser = user
  console.log(model.userCnt)
  emit('onUserSelected', user)
}

function getUserBelong(user) {
  if (user['ocpCd']) {
    return `${user['ocpCd']} / ${user['dutyDstr1CdNm']} / ${user['instNm']}`;
  } else {
    return `${user['dutyDstr1CdNm']} / ${user['instNm']}`;
  }
}
</script>

<style scoped>
.subject-box {
  font-size: 1.3rem;
}
.list-wrap {
  border-top: 1px solid #ccc;
}
.board-body-box {
  overflow-y: auto;
  height: 400px;
}
</style>
