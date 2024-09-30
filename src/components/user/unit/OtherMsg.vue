<template>
  <!--begin::Message(in)-->
  <div class="d-flex justify-content-start mb-10">
    <!--begin::Wrapper-->
    <div class="d-flex flex-column align-items-start">
      <!--begin::User-->
      <div class="d-flex align-items-center mb-2">
        <!--begin::Avatar-->
        <div class="symbol symbol-35px symbol-circle">
          <img alt="Pic" src="/img/avatars/ic-user-default.svg" />
        </div>
        <!--end::Avatar-->
        <!--begin::Details-->
        <div class="ms-3">
          <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary me-1">{{
            props.item.rgstUserId
          }}</a>
          <span class="text-muted fs-7 mb-1">{{ TimestampToDateWithDot(props.item.rgstDttm) }}</span>
        </div>
        <!--end::Details-->
      </div>
      <!--end::User-->
      <!--begin::Text-->
      <div
        class="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
        data-kt-element="message-text"
      >
        {{ props.item.msg }}
        <div>
          <img class='chat-img' v-if='props.item.attcId' :src='model.imgUrl' alt='이미지' @click='showImageLightBox' />
        </div>
      </div>
      <!--end::Text-->
    </div>
    <!--end::Wrapper-->
  </div>

  <vue-easy-lightbox
    v-if='props.item.attcId'
    :visible='model.visibleRef'
    :imgs='model.imgsRef'
    :index='model.indexRef'
    @hide='onHide'
  ></vue-easy-lightbox>

  <!--end::Message(in)-->
</template>

<script setup>
import { defineProps, onMounted, reactive } from 'vue'
import { TimestampToDateWithDot } from '@/util/ui'
import { API_PROD } from '@/util/constantURL'
import axios from 'axios'

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

</script>

<style scoped>
.chat-img {
  width: 40%;
  height: 40%;
}
</style>
