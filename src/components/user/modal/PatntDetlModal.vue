<template>
  <!--  환자 상세 정보  -->
  <div class="modal show" tabindex="-1" aria-hidden="true" id="modal-patient-detail">
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-1500px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <h2>환자 상세 정보</h2>
          <div class="btn-list">
            <div class="btn btn-sm btn-icon btn-active-color-primary" @click="closeModal">
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
        </div>

        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body scroll-y py-10 px-10">
          <article v-if="model.ptDetail" class="detail-layout1">
            <div class="detail-wrap">
              <div class="detail-info-box">
                <div class="detail-head-box px-10">
                  <div class="head-box">
                    <div class="head-txt-box">환자정보</div>
                  </div>

                  <div class="option-box">
                    <a href="#none" class="option-btn">
                      <i class="fa-solid fa-share-nodes text-black" style="font-size: 18px"></i>
                    </a>
                  </div>
                </div>

                <div class="detail-body-box px-10">
                  <article class="table-form-layout1">
                    <div class="form-body-box overflow-y-auto">
                      <div class="table-box pe-5">
                        <table>
                          <colgroup>
                            <col style="width: 128px" />
                            <col style="width: auto" />
                          </colgroup>
                          <tbody>
                            <tr>
                              <th>환자ID</th>
                              <td>{{ model.ptDetail.ptId }}</td>
                            </tr>

                            <tr>
                              <th>이름</th>
                              <td>{{ model.ptDetail.ptNm }}</td>
                            </tr>

                            <tr>
                              <th>주민번호</th>
                              <td>{{ `${model.ptDetail.rrno1}-${model.ptDetail.rrno2}******` }}</td>
                            </tr>

                            <tr>
                              <th>나이</th>
                              <td>{{ model.ptDetail.age }}세</td>
                            </tr>

                            <tr>
                              <th>성별</th>
                              <td>{{ model.ptDetail.gndr }}자</td>
                            </tr>

                            <tr>
                              <th>주소</th>
                              <td>
                                {{ model.ptDetail.zip?'['+model.ptDetail.zip+']\n':'' }}
                                {{ model.ptDetail.bascAddr }}&nbsp;{{ model.ptDetail.detlAddr }}
                              </td>
                            </tr>

                            <tr>
                              <th>사망여부</th>
                              <td>{{ model.ptDetail.dethYn === 'Y' ? '사망' : '생존' }}</td>
                            </tr>

                            <tr>
                              <th>국적</th>
                              <td>{{ model.ptDetail.natiNm }}</td>
                            </tr>

                            <tr>
                              <th>휴대전화번호</th>
                              <td>
                                {{
                                  model.ptDetail.mpno && model.ptDetail.mpno !== ''
                                    ? getTelno(model.ptDetail.mpno)
                                    : '-'
                                }}
                              </td>
                            </tr>

                            <tr>
                              <th>전화번호</th>
                              <td>{{ model.ptDetail.telno ? model.ptDetail.telno : '-' }}</td>
                            </tr>

                            <tr>
                              <th>보호자 이름</th>
                              <td>{{ model.ptDetail.nokNm ? model.ptDetail.nokNm : '-' }}</td>
                            </tr>

                            <tr>
                              <th>직업</th>
                              <td>{{ model.ptDetail.job ? model.ptDetail.job : '-' }}</td>
                            </tr>

                            <tr>
                              <th>기저질환</th>
                              <td>{{ getTag(model.ptDs?.undrDsesNms || []) }}</td>
                            </tr>

                            <tr>
                              <th>환자유형</th>
                              <td>{{ getTag(model.ptDs?.ptTypeNms || []) }}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div class="table-img-box pt-4"></div>
                    </div>
                  </article>
                </div>

                <div class="detail-foot-box">
                  <article class="modal-menu-layout1 py-10">
                    <div class="modal-menu-list">
                      <a
                        href='javascript:void(0)'
                        class="modal-menu-btn menu-primary"
                      >관찰환자 등록
                      </a>
                      <a href='javascript:void(0)'
                        class="modal-menu-btn menu-primary"
                        >수정
                      </a>
                    </div>
                  </article>
                </div>
              </div>

              <div class="detail-info-box">
                <div class="detail-head-box px-10">
                  <div class="head-box">
                    <div class="head-txt-box">병상배정 이력</div>
                  </div>

                  <div class="option-box"></div>
                </div>

                <div class="detail-body-box px-10">
                  <article class="table-list-layout2">
                    <div class="table-body-box overflow-y-auto">
                      <div class="table-box pe-5">
                        <table>
                          <colgroup>
                            <col style="width: 50px" />
                            <col style="width: auto" />
                          </colgroup>
                          <tr>
                            <td class="py-5 px-3 text-center text-gray-700 fw-medium fs-6">1차</td>
                            <td class="py-5 px-3">
                              <div class="top-info-box d-flex align-items-center">
                                <div
                                  class="d-inline-flex align-items-center justify-content-center w-auto bg-gray-500 h-25px w-65px text-white rounded-2 px-0 w-auto"
                                >
                                  완료
                                </div>

                                <div class="eclipse-box mx-3">{{ model.ptDetail.ptNm }}</div>
                                <div class="date-box text-gray-700 fw-regular">2023-03-11</div>
                              </div>
                              <div class="bottom-info-box d-flex mt-2">
                                <div class="name-box">칠곡경북대병원</div>
                                <div class="tag-box text-primary ms-2">#중증 #투석</div>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </article>
                </div>

                <div class="detail-foot-box">
                  <article class="modal-menu-layout1 py-10">
                    <div class="modal-menu-list">
                      <router-link
                        to=""
                        data-bs-target="#kt_modal_request"
                        data-bs-toggle="modal"
                        class="modal-menu-btn menu-primary"
                        >병상요청
                      </router-link>
                    </div>
                  </article>
                </div>
              </div>

              <div class="detail-info-box full d-flex flex-column">
                <div class="detail-head-box px-10 h-80px">
                  <div class="head-box">
                    <div class="head-txt-box">타임라인</div>
                    <div v-if="model.timeline" class="head-sub-box mt-2 d-flex">
                      <div
                        class="d-inline-flex align-items-center justify-content-center w-auto bg-primary w-40px h-20px text-white rounded-2"
                      >
                        1차
                      </div>

                      <div
                        class="d-inline-flex align-items-center justify-content-center w-auto text-gray-700 ms-2"
                      >
                        2023년 2월 28일 (수)
                      </div>
                    </div>
                  </div>

                  <div class="option-box">
                    <a href="#none" class="option-btn">
                      <i class="fa-solid fa-share-nodes text-black" style="font-size: 18px"></i>
                    </a>
                  </div>
                </div>

                <div class="detail-body-box pe-5 flex-root" style="min-height: 0">
                  <article class="timeline-layout1 pb-5" style="height: 100%">
                    <div
                      v-if="model.timeline"
                      class="timeline-wrap overflow-y-auto ps-10 pe-5"
                      style="height: 100%"
                    >
                      <div class="text-center py-4 fw-bold">
                        {{ getTLDt(model.timeline.items[0].updtDttm, 0) }}
                      </div>

                      <ul>
                        <li
                          v-for="(item, idx) in model.timeline.items"
                          :key="idx"
                          :class="{ off: item.timeLineStatus === 'complete' }"
                        >
                          <div class="ic-box">
                            <img :src="getTLIcon(item, idx)" alt="이미지" />
                          </div>

                          <div
                            class="item-box"
                            :class="{ suspend: item.timeLineStatus === 'suspend' }"
                          >
                            <div class="top-item-box">
                              <div class="state-box">{{ item.title }}</div>
                              <div class="date-box">{{ getTLDt(item.updtDttm, 1) }}</div>
                            </div>
                            <div class="mid-item-box">{{ item.by }}</div>
                            <div class="bottom-item-box">
                              <!--todo: timeline에서 받아오는 img 파일이 없는데-->
                              <div class="item-img-group mb-4">
                                <div class="img-list"></div>
                              </div>
                              <div class="msg-box" v-show="item.msg !== null">{{ item.msg }}</div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div v-if="!model.timeline" class="timeline-wrap overflow-y-auto ps-10 pe-5">
                      병상배정 이력이 없습니다
                    </div>
                  </article>
                </div>

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

<script setup>
import { reactive, defineProps, onMounted, defineEmits } from 'vue'
import { getTag, getTelno, getTLDt, getTLIcon } from '@/util/ui'
import { useStore } from 'vuex'

const emit = defineEmits(['closeModal'])
const props = defineProps({
  ptDetail: {
    type: Object,
    required: true
  }
})
const store = useStore()

let model = reactive({
  ptDetail: props.ptDetail,
  timeline: store.getters['bedasgn/getTimeline'],
  ptDs: store.getters['bedasgn/getPtDs']
})

// const ptBI = store.getters['patnt/ptBI']
// const existPt = store.getters['patnt/existPt']
// const rptInfo = store.getters['patnt/rptInfo']
// const attcRpt = store.getters['patnt/attcRpt']
// const severityData = store.getters['severity/severityData']

onMounted(() => {
  console.log('ptDetail', JSON.stringify(props.ptDetail))
})

function closeModal() {
  store.commit('bedasgn/setTimeline', null)
  store.commit('bedasgn/setDisesInfo', null)
  emit('closeModal')
}
</script>

<style scoped>
.modal {
  display: block;
}
.detail-info-box {
  position: relative;
}
.detail-foot-box {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.detail-layout1, .detail-wrap { height: 100%; }
</style>
