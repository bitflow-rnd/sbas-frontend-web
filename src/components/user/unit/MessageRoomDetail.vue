<template>
  <div class="flex-lg-row-fluid ms-lg-7 ms-xl-10">
    <!--begin::Messenger-->
    <div id="kt_chat_messenger">
      <!--begin::Card header-->
      <div class="card-header" id="kt_chat_messenger_header">
        <!--begin::Title-->
        <div class="card-title">
          <!--begin::Room name-->
          <h2 class="text-start">투석업무 채널</h2>
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
        >
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
                  <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                    >Brian Cox</a
                  >
                  <span class="text-muted fs-7 mb-1">2 mins</span>
                </div>
                <!--end::Details-->
              </div>
              <!--end::User-->
              <!--begin::Text-->
              <div
                class="p-5 rounded bg-light-info text-dark fw-semibold mw-lg-400px text-start"
                data-kt-element="message-text"
              >
                How likely are you to recommend our company to your friends and family ?
              </div>
              <!--end::Text-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Message(in)-->

          <!--begin::Message(out)-->
          <div class="d-flex justify-content-end mb-10">
            <!--begin::Wrapper-->
            <div class="d-flex flex-column align-items-end">
              <!--begin::User-->
              <div class="d-flex align-items-center mb-2">
                <!--begin::Details-->
                <div class="me-3">
                  <span class="text-muted fs-7 mb-1">5분전</span>
                  <a href="#" class="fs-5 fw-bold text-gray-900 text-hover-primary ms-1">나</a>
                </div>
                <!--end::Details-->
                <!--begin::Avatar-->
                <div class="symbol symbol-35px symbol-circle">
                  <img alt="Pic" src="/img/avatars/ic-user-default.svg" />
                </div>
                <!--end::Avatar-->
              </div>
              <!--end::User-->
              <!--begin::Text-->
              <div
                class="p-5 rounded bg-light-primary text-dark fw-semibold mw-lg-400px text-end"
                data-kt-element="message-text"
              >
                Hey there, we’re just writing to let you know that you’ve been subscribed to a
                repository on GitHub.
              </div>
              <!--end::Text-->
            </div>
            <!--end::Wrapper-->
          </div>
          <!--end::Message(out)-->
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

<script setup></script>

<style scoped>
h2 {
  font-size: 1.7rem;
  color: #666;
  font-weight: normal;
  text-align: center;
}
.card-header {
  padding-bottom: 0;
}
.card-title {
  height: 50px;
}
.detail-foot-box {
  position: absolute;
  bottom: 0;
  width: -webkit-fill-available;
}
</style>
