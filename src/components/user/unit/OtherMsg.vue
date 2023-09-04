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
          <span class="text-muted fs-7 mb-1">{{ getDate(props.item.rgstDttm) }}</span>
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
      </div>
      <!--end::Text-->
    </div>
    <!--end::Wrapper-->
  </div>
  <!--end::Message(in)-->
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

function getDate(data) {
  const dData = new Date(data)
  const dYear = dData.getFullYear()
  let dMonth = dData.getMonth() + 1
  let dDate = dData.getDate()

  if (dMonth < 10) {
    dMonth = '0' + dMonth
  }
  if (dDate < 10) {
    dDate = '0' + dDate
  }
  return dYear + '.' + dMonth + '.' + dDate
}
</script>

<style scoped></style>
