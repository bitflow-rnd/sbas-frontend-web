<template>
  <div class="flex-lg-row-fluid">
    <!--begin::Messenger-->
    <div id="kt_chat_messenger">
      <!--begin::Card header-->
      <div class="card-header" id="kt_chat_messenger_header">
        <!--begin::Title-->
        <div class="card-title">
          <!--begin::Room name-->
          <h2 class="text-start"><i class="fa-regular fa-comment-dots"></i> {{ model.roomInfo ? model.roomInfo.tkrmNm : '' }}</h2>
          <!--begin::Room name-->
        </div>
        <!--end::Title-->
      </div>
      <!--end::Card header-->
      <!--begin::Card body-->
      <div class="card-body" ref='chatRoomScroll' id='chatRoomScroll'>
        <!--begin::Messages-->
        <div class="scroll-y me-n5 pe-5 mx-3 h-300px h-lg-auto message-room-in" ref='messageRoomIn'
          v-if="model.messageList && model.messageList.length > 0">
          <template v-for="(item, idx) in model.messageList" :key="idx">
            <my-msg v-if="item.rgstUserId === 'TEST-APR-1'" :item="item" />
            <other-msg v-if="item.rgstUserId !== 'TEST-APR-1'" :item="item" />
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
              <input ref='messageTxt' type="text" placeholder="메시지를 입력해주세요" @input='onMessageChange'
                v-model='model.messageTxt' @keyup.enter='sendMessage' />
            </div>
            <div class="msg-send-box">
              <a @click='sendMessage' ref='btnSend' class="send-btn" role='button'>
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
import { ref, inject } from 'vue'
import { onMessage, onOpen, onClose, onError } from 'vue3-websocket'

const store = useStore()
const chatRoomScroll = ref()
const btnSend = ref()
const messageTxt = ref()
const messageRoomIn = ref()
const socket = inject('socket')

const props = defineProps({
  roomInfo: {
    type: Object,
    required: true
  }
})

let model = reactive({
  roomInfo: null,
  messageList: [],
  messageTxt: ''
})

watch(
  () => props.roomInfo,
  (first, second) => {
    console.log('first second', first, second)
    loadMessages()
    console.log('scroll', chatRoomScroll.value.scrollHeight)
    // chatRoomScroll.value.scrollIntoView({ behavior: 'smooth' })
  }
)

onMounted(() => {
  loadMessages()
})

function addMyMsg(msg) {
  const myMsg = new MyMsg({
    propsData: {
      rgstUserId: 'TEST-APR-1',
      msg: msg
    }
  }).$mount();
  messageRoomIn.value.appendChild(myMsg.$el);
}

function loadMessages() {
  console.log('roomInfo', JSON.stringify(model.roomInfo))
  model.roomInfo = props.roomInfo
  store.dispatch('user/getChatMessageListSync', model.roomInfo.tkrmId).then((result) => {
    // console.log('getChatMessageListSync', JSON.stringify(result))
    model.messageList = result
    setTimeout(function() {
      chatRoomScroll.value.scrollTop = chatRoomScroll.value.scrollHeight
    }, 100)
  })
}

function onMessageChange() {
  if (model.messageTxt.length>0) {
    btnSend.value.classList.add('on')
  } else {
    btnSend.value.classList.remove('on')
  }
}

function sendMessage() {
  console.log('sendMessage', messageTxt.value.value)
  socket.value.send(messageTxt.value.value)
  addMyMsg(messageTxt.value.value)
  model.messageTxt = ''
  // loadMessages()
}

onOpen(() => {
  console.log('WS connection is stable! ~uWu~')
})

onMessage(message => {
  console.log('Got a message from the WS: ', message)
  loadMessages()
})

onClose(() => {
  console.log('No way, connection has been closed 😥')
})

onError(error => {
  console.error('Error: ', error)
})
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
  background-color: white;
}
article.msg-send-layout1 .msg-group-box .msg-send-box .send-btn {
  background-color: lightgray;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
article.msg-send-layout1 .msg-group-box .msg-send-box .send-btn.on { background-color: #74afeb; }
h2 > i { margin-right: 6px }
#chatRoomScroll { scroll-behavior: smooth; background-color: #f3f8f8; }
</style>
