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
                <div class="con-box">생성일시 {{ TimestampToDateWithDot(item['rgstDttm']) }}</div>
              </div>
            </div>

            <div class="item-option-box"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="list-menu-box d-flex justify-content-center pt-8">
      <a
        class="btn btn-flex bg-primary text-white rounded-pill"
        @click='openModal()'
        >대화방 생성</a
      >
    </div>
  </div>

  <ChatRoomRegModal v-if='model.showChatRoomRegModal' @closeModal='closeModal()' />

</template>

<script setup>
import { useStore } from 'vuex'
import { defineEmits, onMounted, reactive } from 'vue'
import { TimestampToDateWithDot } from '@/util/ui'
import ChatRoomRegModal from '@/components/user/modal/ChatRoomRegModal.vue'

const store = useStore()
const emit = defineEmits(['onRoomSelected'])

let model = reactive({
  messageList: [],
  selectedRoom: null,
  showChatRoomRegModal: false,
})

onMounted(() => {
  store.dispatch('user/getMessageMyRoomListSync').then((result) => {
    model.messageList = result
  })
})

function onSelectRoom(room) {
  model.selectedRoom = room
  emit('onRoomSelected', room)
}

function openModal() {
  model.showChatRoomRegModal = true
}

function closeModal() {
  model.showChatRoomRegModal = false
}

</script>

<style scoped></style>
