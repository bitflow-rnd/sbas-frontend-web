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
          <span class="text-muted fs-7 mb-1">{{ formatTimestampWithDot(props.item.rgstDttm) }}</span>
        </div>
        <!--end::Details-->
      </div>
      <!--end::User-->
      <!--begin::Text-->
      <div
        class="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
        data-kt-element="message-text" v-html="props.item.msg.split('\n').join('<br />')"
      >
      </div>
      <!--end::Text-->
    </div>
    <!--end::Wrapper-->
  </div>
  <!--end::Message(in)-->
</template>

<script setup>
import { defineProps } from 'vue'
import { formatTimestampWithDot } from '@/util/ui'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

</script>

<style scoped></style>
