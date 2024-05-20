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
        <div class="me-n5 pe-5 mx-3 h-300px h-lg-auto message-room-in" ref='messageRoomIn'
          v-if="model.messageList && model.messageList.length > 0">
          <template v-for="(item, idx) in model.messageList" :key="idx">
            <my-msg v-if="item.updtUserId === model.userInfo.id" :item="item" />
            <other-msg v-if="item.updtUserId !== model.userInfo.id" :item="item" />
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
import { defineProps, onBeforeUnmount, onMounted, reactive, watch } from 'vue'
import { useStore } from 'vuex'
import MyMsg from '@/components/user/unit/MyMsg.vue'
import OtherMsg from '@/components/user/unit/OtherMsg.vue'
import { ref } from 'vue'

const store = useStore()
const chatRoomScroll = ref()
const btnSend = ref()
const messageTxt = ref()
const messageRoomIn = ref()
// const socket = inject('socket')

const props = defineProps({
  roomInfo: {
    type: Object,
    required: true
  }
})

let model = reactive({
  roomInfo: null,
  messageList: [],
  messageTxt: '',
  userInfo: null
})

let socket

watch(
  () => props.roomInfo,
  (first, second) => {
    console.log('first second', first, second)
    console.log('scroll', chatRoomScroll.value.scrollHeight)
    model.roomInfo = second
    loadMessages()
  }
)

onMounted(() => {
  console.warn('room', JSON.stringify(props.roomInfo))
  model.userInfo = store.getters['user/getUserInfo']
  console.log('userInfo', JSON.stringify(model.userInfo))
  connectWebsocket()
  socket.onmessage = (event) => {
    try {
      const msgs = JSON.parse(event.data)
      console.log('type', typeof(msgs))
      if (typeof(msgs)==='object' && msgs.length>0) {
        console.log('messageList', msgs[0])
        model.messageList = msgs[0]
      } else {
        loadMessages()
      }
    } catch (e) {
      console.log('event.data', event.data)
      loadMessages()
    }
   }
})

function connectWebsocket() {
  socket = new WebSocket('ws://dev.smartbas.org/chat-rooms/room/'
    + props.roomInfo.tkrmId);
  socket.onopen = function () {
    socket.send("hello|" + model.userInfo.id)
  }
}
onBeforeUnmount(() => {
  socket.close()
})

function loadMessages() {
  console.log(`room ${props.roomInfo.tkrmNm} refresh`)
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
  try {
    socket.send(model.userInfo.id + "|" + messageTxt.value.value)
  } catch (e) {
    connectWebsocket()
    socket.send(model.userInfo.id + "|" + messageTxt.value.value)
  }
  // addMyMsg(messageTxt.value.value)
  model.messageTxt = ''
  // loadMessages()
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
  background-color: white;
}
article.msg-send-layout1 .msg-group-box .msg-send-box .send-btn {
  background-color: lightgray;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
article.msg-send-layout1 .msg-group-box .msg-send-box .send-btn.on { background-color: #74afeb; }
h2 > i { margin-right: 6px }
#chatRoomScroll::-webkit-scrollbar {
  width: 20px;
}
#chatRoomScroll::-webkit-scrollbar-thumb {
  background-color: #74AFEB;
  border-radius: 10px;
  background-clip: padding-box;
  border: 1px solid #595959;
  width: 12px
}
#chatRoomScroll::-webkit-scrollbar-track {
  background-color: lightgray;
  border-left: 1px solid #aaa;
  box-shadow: inset 0 0 5px white;
}
#chatRoomScroll { scroll-behavior: smooth; background-color: #f3f8f8; }
</style>
