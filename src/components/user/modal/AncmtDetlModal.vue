<template>
  <!--  detail  -->
  <div class="modal show" id="kt_modal_board_view" tabindex="-1">
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-1500px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>시스템 공지사항 상세</h2>
          <!--end::Modal title-->
          <!--begin::Close-->

          <div class="btn-list">
            <div class="btn btn-sm btn-icon btn-active-color-primary" @click="$emit('closeModal')">
              <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
              <span class="svg-icon svg-icon-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.5"
                    x="6"
                    y="17.3137"
                    width="16"
                    height="2"
                    rx="1"
                    transform="rotate(-45 6 17.3137)"
                    fill="currentColor"
                  ></rect>
                  <rect
                    x="7.41422"
                    y="6"
                    width="16"
                    height="2"
                    rx="1"
                    transform="rotate(45 7.41422 6)"
                    fill="currentColor"
                  ></rect>
                </svg>
              </span>
              <!--end::Svg Icon-->
            </div>
          </div>

          <!--end::Close-->
        </div>

        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body scroll-y py-10 px-10">
          <article class="board-view-layout1">
            <div class="view-head-box py-6 px-6">
              <div class="head-main-box">
                <div class="label-box me-2">
                  <span class="rounded-pill bg-primary text-white px-2">공지</span>
                </div>
                <div class="subject-box">병상배정 시스템 프로젝트 오픈 공지</div>
              </div>

              <div class="head-sub-box pt-3">
                <span class="sub-txt text-gray-600">등록일 : 2023-04-05</span>
                <span class="sub-txt text-gray-600">등록자 : 홍길동</span>
              </div>
            </div>

            <div class="view-body-box py-8 px-6">
              <div class="view-contents">
                [시스템 유지보수 안내] 보다 안정화된 서비스 제공을 위해 아래와 같이 시스템 유지보수
                및 점검을 진행할 예정입니다. 점검시간 중 홈페이지 서비스 제공이 일시 중지될
                예정이오니 양해 부탁드립니다.<br />1. 점검 시간: 2023. 6. 9.(금) 20:00 ~ 6. 10.(토)
                12:00 <br />2. 중단 서비스: 스마트 감염병 병상배정 시스템<br />3. 점검 내용: 시스템
                백업<br />※ 점검 시간은 작업 진행에 따라 변경될 수 있습니다.
              </div>
            </div>

            <div class="view-foot-box">
              <div class="foot-row-box py-4">
                <div class="subject-box">첨부파일</div>

                <div class="con-box">
                  <div class="file-upload-list">
                    <div class="file-upload-item">
                      <span class="txt">Project Notice.jpg</span>
                      <a href="javascript:void(0)" onclick="fileRemove(this)">
                        <i class="fa-solid fa-xmark" style="color: #74afeb"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
</template>

<script setup></script>

<style scoped></style>
