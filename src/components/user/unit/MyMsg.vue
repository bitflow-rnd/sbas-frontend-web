<template>
  <!--begin::Message(out)-->
  <div class="d-flex flex-column align-items-end mb-10">
    <div class="d-flex align-items-center mb-2">
      <div class="me-3">
        <span class="text-muted fs-7 mb-1">{{ getDate(props.item.rgstDttm) }}</span>
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
      {{ props.item.msg }}
    </div>
  </div>
  <!--end::Message(out)-->
</template>

<script setup>

const props = defineProps(['item'] )

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
