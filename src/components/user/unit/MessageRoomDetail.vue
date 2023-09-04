<template>
  <div class="flex-lg-row-fluid ms-lg-7 ms-xl-10">
    <!--begin::Messenger-->
    <div id="kt_chat_messenger">
      <!--begin::Card header-->
      <div class="card-header" id="kt_chat_messenger_header">
        <!--begin::Title-->
        <div class="card-title">
          <!--begin::Room name-->
          <h2 class="text-start">{{ model.roomInfo ? model.roomInfo.tkrmNm : '' }}</h2>
          <!--begin::Room name-->
        </div>
        <!--end::Title-->
      </div>
      <!--end::Card header-->
      <!--begin::Card body-->
      <div class="card-body" id="kt_chat_messenger_body">
        <!--begin::Messages-->
        <div
          class="scroll-y me-n5 pe-5 h-300px h-lg-auto"
          data-kt-element="messages"
          data-kt-scroll="true"
          data-kt-scroll-activate="{default: false, lg: true}"
          data-kt-scroll-max-height="auto"
          data-kt-scroll-dependencies="#kt_header, #kt_app_header, #kt_app_toolbar, #kt_toolbar, #kt_footer, #kt_app_footer, #kt_chat_messenger_header, #kt_chat_messenger_footer"
          data-kt-scroll-wrappers="#kt_content, #kt_app_content, #kt_chat_messenger_body"
          data-kt-scroll-offset="5px"
          v-if="model.messageList && model.messageList.length > 0"
        >
          <template v-for="(item, idx) in model.messageList" :key="idx">
            <my-msg v-if="item.rgstUserId === 'jiseong12'" :item="item" />
            <other-msg v-if="item.rgstUserId !== 'jiseong12'" :item="item" />
          </template>
        </div>
        <!--end::Messages-->
      </div>
      <!--end::Card body-->
      <!--begin::Card footer-->
      <div class="detail-foot-box">
        <article class="msg-send-layout1">
          <div class="img-upload-result">
            <div class="img-list"></div>
          </div>

          <div class="msg-group-box">
            <div class="img-upload-box">
              <label>
                <input type="file" />
                <img src="/img/common/ic_msg_img_upload.svg" alt="이미지" />
              </label>
            </div>
            <div class="msg-input-box">
              <input type="text" placeholder="메시지 입력" />
            </div>
            <div class="msg-send-box">
              <a href="#none" class="send-btn">
                <img src="/img/common/ic_msg_send.svg" alt="이미지" />
              </a>
            </div>
          </div>
        </article>
      </div>
      <!--end::Card footer-->
    </div>
    <!--end::Messenger-->
  </div>
</template>

<script setup>
import { defineProps, onMounted, reactive, watch } from 'vue'
import { useStore } from 'vuex'
import MyMsg from '@/components/user/unit/MyMsg'
import OtherMsg from '@/components/user/unit/OtherMsg'

const store = useStore()
// const emit = defineEmits('onUserSelected')

const props = defineProps({
  roomInfo: {
    type: Object,
    required: true
  }
})

let model = reactive({
  roomInfo: null,
  messageList: []
})

watch(
  () => props.roomInfo,
  (first, second) => {
    console.log('first second', first, second)
    loadMessages()
  }
)

onMounted(() => {
  loadMessages()
})

function loadMessages() {
  console.log('roomInfo', JSON.stringify(model.roomInfo))
  model.roomInfo = props.roomInfo
  store.dispatch('user/getChatMessageListSync', model.roomInfo.tkrmId).then((result) => {
    // console.log('getChatMessageListSync', JSON.stringify(result))
    model.messageList = result
  })
}
</script>

<style scoped>
h2 {
  font-size: 1.7rem;
  color: #666;
  font-weight: normal;
  text-align: center;
  line-height: 50px;
}
.card-header {
  padding-bottom: 0;
}
.card-title {
  height: 50px;
}
.card-body {
  overflow-y: scroll;
  max-height: 855px;
}
.card-body > .scroll-y > div + div {
  margin-top: 24px;
}
.detail-foot-box {
  position: absolute;
  bottom: 0;
  width: -webkit-fill-available;
}
</style>
