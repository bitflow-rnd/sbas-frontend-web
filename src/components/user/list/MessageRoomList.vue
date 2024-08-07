<template>
  <div class="board-body-box">
    <div class="list-wrap">
      <div class="list-group-box">
        <div class="list-body-box" v-if="model.messageList">
          <div
            v-for="(item, idx) in model.messageList"
            :key="idx"
            role="button"
            class="item-box"
            @click="onSelectRoom(item)"
            :style="item === model.selectedRoom ? { 'background-color': '#74AFEB22' } : {}"
          >
            <div class="item-info-box">
              <div class="profile-box">
                <img src="/img/common/img_profile_default.svg" alt="이미지" />
              </div>

              <div class="info-box">
                <div class="subject-box">[{{ item['tkrmId'] }}] {{ item['tkrmNm'] }}</div>
                <div class="con-box">생성일시 {{ formatTimestampWithDot(item['updtDttm']) }}</div>
              </div>
            </div>

            <div class="item-option-box"></div>
          </div>
        </div>
      </div>
    </div>

    <!--
    <div class="list-menu-box d-flex justify-content-center pt-8">
      <a
        href="#none"
        class="btn btn-flex bg-primary text-white rounded-pill"
        data-bs-toggle="modal"
        data-bs-target="#kt_modal_user_invite"
        >사용자 초대</a
      >
    </div>
    -->
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { defineEmits, onMounted, reactive } from 'vue'
import { formatTimestampWithDot } from '@/util/ui'

const store = useStore()
const emit = defineEmits(['onRoomSelected'])

let model = reactive({
  messageList: [],
  selectedRoom: null
})

onMounted(() => {
  store.dispatch('user/getMessageRoomListSync').then((result) => {
    model.messageList = result
  })
})

function onSelectRoom(room) {
  model.selectedRoom = room
  emit('onRoomSelected', room)
}

</script>

<style scoped></style>
