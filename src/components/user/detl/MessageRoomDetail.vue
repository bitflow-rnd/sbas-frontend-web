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
      <div class="detail-foot-box pb-5" style='width: 75%'>
        <article class="msg-send-layout1">
          <div class="img-upload-result">
            <div class="img-list"></div>
          </div>

          <div class="msg-group-box">
            <div class="img-upload-box">
              <label>
                <input type="file" @change='onFileChange' accept='image/*' />
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
import { API_PROD } from '@/util/constantURL'
import { isLoading } from '@/util/axios_cstm'
import axios from 'axios'

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

    // 기존 소켓이 있을 경우 닫음
    if (socket) {
      console.log('이전 방 소켓 닫기');
      socket.close();
    }
    // 새로운 방 정보로 소켓 연결
    connectWebsocket();
    console.log('방', props.roomInfo)
    model.roomInfo = second
    loadMessages()
    socket.onmessage = (event) => {
      loadMessages()
    }
  }
)

onMounted(() => {
  console.warn('room', JSON.stringify(props.roomInfo))
  model.userInfo = store.getters['user/getUserInfo']
  connectWebsocket()
  socket.onmessage = (event) => {
    loadMessages()
  }
})

function connectWebsocket() {
  let webSocket = import.meta.env.VITE_APP_CHAT_URL
  socket = new WebSocket(`${webSocket}/room/` + props.roomInfo.tkrmId);
  socket.onopen = function () {
    console.log('websocket connected')
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
  if (messageTxt.value.value.length === 0) {
    return
  }
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

function onFileChange(event) {
  const fileInput = event.target
  const file = fileInput.files[0]

  const formData = new FormData()
  formData.append('param1', 'chat-image')
  formData.append('param2', file)

  const url = `${API_PROD}/api/v1/private/common/upload`
  const headers = {}
  const token = sessionStorage.getItem('userToken')
  headers.Authorization = `Bearer ${token}`
  isLoading.value = true
  axios({
    method: 'post',
    url: url,
    data: formData,
    headers: headers,
  }).then((response) => {
    const data = response.data
    if (data.code === '00') {
      const attcGrpId = data.result.attcGrpId
      socket.send(`${model.userInfo.id}|attcId:${attcGrpId}|${messageTxt.value.value}`)
    }
  }).catch((e) => {
    console.log(e)
  }).finally(() => {
    isLoading.value = false
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

article.msg-send-layout1 .msg-group-box .msg-send-box .send-btn {
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
