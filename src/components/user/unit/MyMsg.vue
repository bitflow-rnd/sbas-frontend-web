<template>
  <!--begin::Message(out)-->
  <div class="d-flex flex-column align-items-end mb-10">
    <div class="d-flex align-items-center mb-2">
      <div class="me-3">
        <span class="text-muted fs-7 mb-1">{{ TimestampToDateWithDot(props.item.rgstDttm) }}</span>
        <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">나</a>
      </div>
      <div class="symbol symbol-35px symbol-circle">
        <img alt="Pic" src="/img/avatars/ic-user-default.svg" />
      </div>
    </div>
    <div
      class="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end"
      data-kt-element="message-text"
    >
      <span v-html="convertNewLines(props.item.msg)"></span>
      <div>
        <img class='chat-img' v-if='props.item.attcId && model.imgUrl' :src='model.imgUrl' alt='이미지' @click='showImageLightBox' />
      </div>
    </div>
  </div>

  <vue-easy-lightbox
    v-if='props.item.attcId'
    :visible='model.visibleRef'
    :imgs='model.imgsRef'
    :index='model.indexRef'
    @hide='onHide'
  ></vue-easy-lightbox>

  <!--end::Message(out)-->
</template>

<script setup>
import { TimestampToDateWithDot } from '@/util/ui'
import { API_PROD } from '@/util/constantURL'
import axios from 'axios'
import { onMounted, reactive } from 'vue'

const props = defineProps(['item'] )
const model = reactive({
  imgUrl: null,
  visibleRef: false,
  imgsRef: '',
  indexRef: 0,
})

onMounted(() => {
  if (props.item.attcId) {
    getImage()
  }
})

function getImage() {
  const url = `${API_PROD}/api/v1/private/common/image/${props.item.attcId}`
  axios({
    method: 'get',
    url: url,
    responseType: 'arraybuffer'
  }).then((response) => {
    const blob = new Blob([response.data], { type: 'image/jpeg' })
    model.imgUrl = URL.createObjectURL(blob)
  })
}

function showImageLightBox() {
  model.imgsRef = model.imgUrl
  model.visibleRef = true
}

function onHide() {
  model.visibleRef = false
}

function convertNewLines(text) {
  return text ? text.replace(/\n/g, '<br>') : '';  // \n을 <br>로 변환
}

</script>

<style scoped>
.chat-img {
  width: 40%;
  height: 40%;
}
</style>
