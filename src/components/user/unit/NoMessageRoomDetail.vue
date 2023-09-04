<template>
  <div class="flex-lg-row-fluid ms-lg-7 ms-xl-10">
    <!--begin::Messenger-->
    <div id="kt_chat_messenger">
      <!--begin::Card header-->
      <div class="card-header" id="kt_chat_messenger_header">
        <!--begin::Title-->
        <div class="card-title">
          <!--begin::Room name-->
          <h2 class="text-start">메시지 채널</h2>
          <!--begin::Room name-->
        </div>
        <!--end::Title-->
      </div>
      <!--end::Card header-->
      <!--begin::Card body-->
      <div class="card-body" id="kt_chat_messenger_body">
        <div class="img-box text-center">
          <img src="/img/common/img_nodata.svg" alt="이미지" />
          <h2>대화 채널을 선택해주세요</h2>
        </div>
      </div>
      <!--end::Card footer-->
    </div>
    <!--end::Messenger-->
  </div>
</template>

<script setup></script>

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
  position: relative;
  height: 100%;
}
.img-box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.img-box > h2 {
  margin-top: 12px;
}
#kt_chat_messenger {
  height: 100%;
}
</style>
