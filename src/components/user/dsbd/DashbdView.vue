<template>
  <!--begin::Main-->
  <div class='app-main flex-column flex-row-fluid' id='kt_app_main'>
    <!--begin::Content wrapper-->
    <div class='d-flex flex-column flex-column-fluid'>
      <!--begin::Toolbar-->
      <div id='kt_app_toolbar' class='app-toolbar'>
        <div class='app-toolbar-wrapper d-flex flex-stack flex-wrap gap-4 w-100'>
          <div class='page-title d-flex flex-column justify-content-center gap-1 me-3'>
            <ul class='breadcrumb breadcrumb-separatorless fw-semibold fs-base'>
              <li class='breadcrumb-item text-gray-500 mx-n1'><h1
                class='page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-2 m-0'>대시보드</h1>
              </li>
              <li class='breadcrumb-item ml-2'><span>&nbsp;병상배정 주요현황을 요약하여 확인 하실 수 있습니다</span></li>
            </ul>
          </div>
        </div>
      </div>
      <!--end::Toolbar-->

      <!--begin::Content-->
      <div id='kt_app_content' class='app-content flex-column-fluid'>
        <div class='card pb-5'>
          <!--begin:: Card header-->
          <div class='card-header border-0'>
            <!--begin::Card toolbar-->
            <div class='dashboard-header'>
              <div class='dashboard-head-box d-flex justify-content-between align-items-end pb-5'>

<!--                <div class='head-box'>-->
<!--                  <span class='text-black fs-3 fw-bold'>요약 현황</span> <span class='text-gray-600'>(집계기준 : 2023-08-01 00:00 ~ 2023-08-31 23:59)</span>-->
<!--                </div>-->

<!--                <div class='option-box d-inline-flex align-items-center'>-->
<!--                  <span class='text-gray-600 pe-2'>비교기준일</span>-->
<!--                  <article class='toggle-list-layout2'>-->

<!--                    <div class='toggle-list'>-->

<!--                      <label>-->
<!--                        <input type='radio' name='toggle1' checked=''>-->
<!--                        <span class='txt'>이틀 전</span>-->
<!--                      </label>-->

<!--                      <label>-->
<!--                        <input type='radio' name='toggle1'>-->
<!--                        <span class='txt'>지난 7일</span>-->
<!--                      </label>-->

<!--                      <label>-->
<!--                        <input type='radio' name='toggle1'>-->
<!--                        <span class='txt'>지난 14일</span>-->
<!--                      </label>-->

<!--                      <label>-->
<!--                        <input type='radio' name='toggle1'>-->
<!--                        <span class='txt'>지난 30일</span>-->
<!--                      </label>-->
<!--                    </div>-->
<!--                  </article>-->
<!--                </div>-->
              </div>

              <div class='dashboard-card-list'>
                <div class='card-list-wrap'>
                  <div class='card-box'>
                    <div class='top-box'>
                      <div class='subject-box'>
                        <div class='label-txt bg-primary'>전국</div>
                        <div class='subject-txt'>감염병 환자 현황</div>
                      </div>
                      <div class='remove-box'>
                        <a @click='openRemovePopup' role='button'>
                          <i class='fa-solid fa-circle-minus minus'></i>
                        </a>
                      </div>
                    </div>
                    <div class='bottom-box text-end pt-4'>
                      <div class='cnt-box'>
                        <span class='text-black fw-bold'>3,796&nbsp;</span>
                        <span class='text-black fw-bold' style='font-size: 20px;'>명</span>
                      </div>
                      <div class='rate-box'>
                        <span class='text-gray-600'>전 주 대비</span>
                        <span class='text-primary'>13.4% ▲</span>
                      </div>
                    </div>
                  </div>

                  <div class='card-box'>
                    <div class='top-box'>
                      <div class='subject-box'>
                        <div class='label-txt bg-primary'>최다</div>
                        <div class='subject-txt'>수용 지역</div>
                      </div>
<!--                      <div class='remove-box'>-->
<!--                        <a href='javascript:void(0)'>-->
<!--                          <i class='fa-solid fa-circle-minus minus'></i>-->
<!--                        </a>-->
<!--                      </div>-->
                    </div>
                    <div class='bottom-box text-end pt-4'>
                      <div class='cnt-box'><span class='text-black fw-bold'>대구광역시</span></div>
                      <div class='rate-box'>
                        <span class='text-gray-600'>전 주 대비</span>
                        <span class='text-primary'>13.4% ▲</span>
                      </div>
                    </div>
                  </div>

                  <div class='card-box'>
                    <div class='top-box'>
                      <div class='subject-box'>
                        <div class='label-txt bg-primary'>최다</div>
                        <div class='subject-txt'>수용 의료기관</div>
                      </div>
<!--                      <div class='remove-box'>-->
<!--                        <a href='javascript:void(0)'>-->
<!--                          <i class='fa-solid fa-circle-minus minus'></i>-->
<!--                        </a>-->
<!--                      </div>-->
                    </div>
                    <div class='bottom-box text-end pt-4'>
                      <div class='cnt-box'><span class='text-black fw-bold'>칠곡경북대병원</span></div>
                      <div class='rate-box'>
                        <span class='text-gray-600'>전 주 대비</span>
                        <span class='text-danger'>7.4% ▼</span>
                      </div>
                    </div>
                  </div>

                  <div class='card-box'>
                    <div class='top-box'>
                      <div class='subject-box'>
                        <div class='label-txt bg-primary'>월간</div>
                        <div class='subject-txt'>배정 Staff</div>
                      </div>
<!--                      <div class='remove-box'>-->
<!--                        <a href='javascript:void(0)'>-->
<!--                          <i class='fa-solid fa-circle-minus minus'></i>-->
<!--                        </a>-->
<!--                      </div>-->
                    </div>
                    <div class='bottom-box text-end pt-4'>
                      <div class='cnt-box'><span class='text-black fw-bold'>선*경&nbsp;</span>
                        <span class='text-black fw-bold' style='font-size: 20px;'>452명</span>
                      </div>
                      <div class='rate-box'>
                        <span class='text-gray-600'>전 주 대비</span>
                        <span class='text-primary'>13.4% ▲</span>
                      </div>
                    </div>
                  </div>

                  <div class='card-box'>
                    <div class='top-box'>
                      <div class='subject-box'>
                        <div class='label-txt bg-primary'>월간</div>
                        <div class='subject-txt'>배정요청 Staff</div>
                      </div>
<!--                      <div class='remove-box'>-->
<!--                        <a href='javascript:void(0)'>-->
<!--                          <i class='fa-solid fa-circle-minus minus'></i>-->
<!--                        </a>-->
<!--                      </div>-->
                    </div>
                    <div class='bottom-box text-end pt-4'>
                      <div class='cnt-box'><span class='text-black fw-bold'>함*호</span> <span class='text-black fw-bold'
                                                                                             style='font-size: 20px;'>395명</span>
                      </div>
                      <div class='rate-box'>
                        <span class='text-gray-600'>전 주 대비</span>
                        <span class='text-danger'>5.4% ▼</span>
                      </div>
                    </div>
                  </div>

                  <div class='card-box'>
                    <div class='top-box'>
                      <div class='subject-box'>
                        <div class='label-txt bg-primary'>월간</div>
                        <div class='subject-txt'>병상배정 현황</div>
                      </div>
<!--                      <div class='remove-box'>-->
<!--                        <a href='javascript:void(0)'>-->
<!--                          <i class='fa-solid fa-circle-minus minus'></i>-->
<!--                        </a>-->
<!--                      </div>-->
                    </div>
                    <div class='bottom-box text-end pt-4'>
                      <div class='cnt-box'><span class='text-black fw-bold'>812</span> <span class='text-black fw-bold'
                                                                                             style='font-size: 20px;'>건</span>
                      </div>
                      <div class='rate-box'>
                        <span class='text-gray-600'>전 주 대비</span>
                        <span class='text-danger'>2.4% ▼</span>
                      </div>
                    </div>
                  </div>

                  <div class='card-box'>
                    <div class='top-box'>
                      <div class='subject-box'>
                        <div class='label-txt bg-primary'>월간</div>
                        <div class='subject-txt'>이송/배차 현황</div>
                      </div>
<!--                      <div class='remove-box'>-->
<!--                        <a href='javascript:void(0)'>-->
<!--                          <i class='fa-solid fa-circle-minus minus'></i>-->
<!--                        </a>-->
<!--                      </div>-->
                    </div>
                    <div class='bottom-box text-end pt-4'>
                      <div class='cnt-box'><span class='text-black fw-bold'>155</span> <span class='text-black fw-bold'
                                                                                             style='font-size: 20px;'>건</span>
                      </div>
                      <div class='rate-box'>
                        <span class='text-gray-600'>전 주 대비</span>
                        <span class='text-danger'>5.4% ▼</span>
                      </div>
                    </div>
                  </div>

                  <div class='card-box'>
                    <div class='top-box'>
                      <div class='subject-box'>
                        <div class='label-txt bg-primary'>월간</div>
                        <div class='subject-txt'>입/퇴원처리 현황</div>
                      </div>
<!--                      <div class='remove-box'>-->
<!--                        <a href='javascript:void(0)'>-->
<!--                          <i class='fa-solid fa-circle-minus minus'></i>-->
<!--                        </a>-->
<!--                      </div>-->
                    </div>
                    <div class='bottom-box text-end pt-4'>
                      <div class='cnt-box'><span class='text-black fw-bold'>255</span> <span class='text-black fw-bold'
                                                                                             style='font-size: 20px;'>건</span>
                      </div>
                      <div class='rate-box'>
                        <span class='text-gray-600'>전 주 대비</span>
                        <span class='text-danger'>5.4% ▼</span>
                      </div>
                    </div>
                  </div>

                  <div class='card-box'>
                    <div class='top-box'>
                      <div class='subject-box'>
                        <div class='label-txt bg-primary'>월간</div>
                        <div class='subject-txt'>완료 처리 현황</div>
                      </div>
<!--                      <div class='remove-box'>-->
<!--                        <a href='javascript:void(0)'>-->
<!--                          <i class='fa-solid fa-circle-minus minus'></i>-->
<!--                        </a>-->
<!--                      </div>-->
                    </div>
                    <div class='bottom-box text-end pt-4'>
                      <div class='cnt-box'><span class='text-black fw-bold'>301</span> <span class='text-black fw-bold'
                                                                                             style='font-size: 20px;'>건</span>
                      </div>
                      <div class='rate-box'>
                        <span class='text-gray-600'>전 주 대비</span>
                        <span class='text-primary'>5.4% ▲</span>
                      </div>
                    </div>
                  </div>

                  <div class='card-box'>
                    <div class='top-box'>
                      <div class='subject-box'>
                        <div class='label-txt bg-primary'>월간</div>
                        <div class='subject-txt'>배정승인 Staff</div>
                      </div>
<!--                      <div class='remove-box'>-->
<!--                        <a href='javascript:void(0)'>-->
<!--                          <i class='fa-solid fa-circle-minus minus'></i>-->
<!--                        </a>-->
<!--                      </div>-->
                    </div>
                    <div class='bottom-box text-end pt-4'>
                      <div class='cnt-box'><span class='text-black fw-bold'>홍*혜</span> <span class='text-black fw-bold'
                                                                                             style='font-size: 20px;'>395명</span>
                      </div>
                      <div class='rate-box'>
                        <span class='text-gray-600'>전 주 대비</span>
                        <span class='text-danger'>5.4% ▼</span>
                      </div>
                    </div>
                  </div>

                  <div class='card-box'>
                    <div class='top-box'>
                      <div class='subject-box'>
                        <div class='label-txt bg-primary'>월간</div>
                        <div class='subject-txt'>중증도 직접선택 현황</div>
                      </div>
<!--                      <div class='remove-box'>-->
<!--                        <a href='javascript:void(0)'>-->
<!--                          <i class='fa-solid fa-circle-minus minus'></i>-->
<!--                        </a>-->
<!--                      </div>-->
                    </div>
                    <div class='bottom-box text-end pt-4'>
                      <div class='cnt-box'><span class='text-black fw-bold'>123</span> <span class='text-black fw-bold'
                                                                                             style='font-size: 20px;'>건</span>
                      </div>
                      <div class='rate-box'>
                        <span class='text-gray-600'>전 주 대비</span>
                        <span class='text-danger'>5.4% ▼</span>
                      </div>
                    </div>
                  </div>

                  <div class='card-box'>
                    <div class='top-box'>
                      <div class='subject-box'>
                        <div class='label-txt bg-primary'>월간</div>
                        <div class='subject-txt'>중증도 중증 현황</div>
                      </div>
<!--                      <div class='remove-box'>-->
<!--                        <a href='javascript:void(0)'>-->
<!--                          <i class='fa-solid fa-circle-minus minus'></i>-->
<!--                        </a>-->
<!--                      </div>-->
                    </div>
                    <div class='bottom-box text-end pt-4'>
                      <div class='cnt-box'><span class='text-black fw-bold'>241</span> <span class='text-black fw-bold'
                                                                                             style='font-size: 20px;'>건</span>
                      </div>
                      <div class='rate-box'>
                        <span class='text-gray-600'>전 주 대비</span>
                        <span class='text-danger'>12.4% ▼</span>
                      </div>
                    </div>
                  </div>

                  <div class='card-box'>
                    <div class='top-box'>
                      <div class='subject-box'>
                        <div class='label-txt bg-primary'>월간</div>
                        <div class='subject-txt'>중증도 준중증 현황</div>
                      </div>
<!--                      <div class='remove-box'>-->
<!--                        <a href='javascript:void(0)'>-->
<!--                          <i class='fa-solid fa-circle-minus minus'></i>-->
<!--                        </a>-->
<!--                      </div>-->
                    </div>
                    <div class='bottom-box text-end pt-4'>
                      <div class='cnt-box'><span class='text-black fw-bold'>32</span> <span class='text-black fw-bold'
                                                                                            style='font-size: 20px;'>건</span>
                      </div>
                      <div class='rate-box'>
                        <span class='text-gray-600'>전 주 대비</span>
                        <span class='text-danger'>9.7% ▼</span>
                      </div>
                    </div>
                  </div>

                  <div class='card-box'>
                    <div class='top-box'>
                      <div class='subject-box'>
                        <div class='label-txt bg-primary'>월간</div>
                        <div class='subject-txt'>중증도 중등증 현황</div>
                      </div>
<!--                      <div class='remove-box'>-->
<!--                        <a href='javascript:void(0)'>-->
<!--                          <i class='fa-solid fa-circle-minus minus'></i>-->
<!--                        </a>-->
<!--                      </div>-->
                    </div>
                    <div class='bottom-box text-end pt-4'>
                      <div class='cnt-box'><span class='text-black fw-bold'>452</span> <span class='text-black fw-bold'
                                                                                             style='font-size: 20px;'>건</span>
                      </div>
                      <div class='rate-box'>
                        <span class='text-gray-600'>전 주 대비</span>
                        <span class='text-primary'>8.7% ▲</span>
                      </div>
                    </div>
                  </div>

                  <div class='card-box'>
                    <div class='top-box'>
                      <div class='subject-box'>
                        <div class='label-txt bg-primary'>월간</div>
                        <div class='subject-txt'>중증도 일반 현황</div>
                      </div>
<!--                      <div class='remove-box'>-->
<!--                        <a href='javascript:void(0)'>-->
<!--                          <i class='fa-solid fa-circle-minus minus'></i>-->
<!--                        </a>-->
<!--                      </div>-->
                    </div>
                    <div class='bottom-box text-end pt-4'>
                      <div class='cnt-box'><span class='text-black fw-bold'>1,212</span> <span
                        class='text-black fw-bold' style='font-size: 20px;'>건</span></div>
                      <div class='rate-box'>
                        <span class='text-gray-600'>전 주 대비</span>
                        <span class='text-danger'>5.4% ▼</span>
                      </div>
                    </div>
                  </div>

                  <div class='card-box'>
                    <div class='top-box'>
                      <div class='subject-box'>
                        <div class='label-txt bg-primary'>월간</div>
                        <div class='subject-txt'>일반격리 가용 병상 현황</div>
                      </div>
<!--                      <div class='remove-box'>-->
<!--                        <a href='javascript:void(0)'>-->
<!--                          <i class='fa-solid fa-circle-minus minus'></i>-->
<!--                        </a>-->
<!--                      </div>-->
                    </div>
                    <div class='bottom-box text-end pt-4'>
                      <div class='cnt-box'><span class='text-black fw-bold'>213</span> <span class='text-black fw-bold'
                                                                                             style='font-size: 20px;'>개</span>
                      </div>
                      <div class='rate-box'>
                        <span class='text-gray-600'>전 주 대비</span>
                        <span class='text-danger'>5.4% ▼</span>
                      </div>
                    </div>
                  </div>

                  <div class='card-box'>
                    <div class='top-box'>
                      <div class='subject-box'>
                        <div class='label-txt bg-primary'>월간</div>
                        <div class='subject-txt'>음압격리 가용 병상 현황</div>
                      </div>
<!--                      <div class='remove-box'>-->
<!--                        <a href='javascript:void(0)'>-->
<!--                          <i class='fa-solid fa-circle-minus minus'></i>-->
<!--                        </a>-->
<!--                      </div>-->
                    </div>
                    <div class='bottom-box text-end pt-4'>
                      <div class='cnt-box'><span class='text-black fw-bold'>113</span> <span class='text-black fw-bold'
                                                                                             style='font-size: 20px;'>개</span>
                      </div>
                      <div class='rate-box'>
                        <span class='text-gray-600'>전 주 대비</span>
                        <span class='text-danger'>4.5% ▼</span>
                      </div>
                    </div>
                  </div>
                  <a class="card-box" role='button' @click='openSelectPopup'>
                      <div class="card-add-btn-box">
                          <img src="/img/common/ic_dashboard_add.svg" alt="이미지">
                          <div class="text-primary fs-6 pt-4">추가하기</div>
                      </div>
                  </a>
                </div>
              </div>
            </div>
            <!--end::Card toolbar-->
          </div>
          <!--end::Card header-->
        </div>
      </div>
      <!--end::Content-->
    </div>
    <!--end::Content wrapper-->
  </div>
  <!--end:::Main-->

  <!-- 현황카드 삭제 -->
  <DsbdCardRemove v-if='model.removePopup' @closePopup='closePopup' />

  <!-- 현황카드 항목선택 -->
  <DsbdCardSelect v-if='model.selectPopup' @closePopup='closePopup' />

</template>

<script setup>
import DsbdCardSelect from '@/components/user/dsbd/DsbdCardSelect.vue'
import DsbdCardRemove from '@/components/user/dsbd/DsbdCardRemove.vue'
import { reactive } from 'vue'

const model = reactive({
  selectPopup: false,
  removePopup: false
})

function openSelectPopup() {
  model.selectPopup = true
}

function openRemovePopup() {
  model.removePopup = true
}

function closePopup() {
  model.selectPopup = false
  model.removePopup = false
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-content > .card {
  background-image: url('@/assets/img/img-staff.webp');
  background-position: right 0 bottom 0;
  background-repeat: no-repeat;
}

.app-content > .card {
  height: fit-content;
}

.card-box {
  background-color: rgba(255, 255, 255, 0.6);
}

.cnt-box {
  font-size: 2rem;
}

.label-txt.bg-primary {
  margin-right: 9px;
}

.rate-box > span:first-child {
  margin-right: 7px;
}
</style>
