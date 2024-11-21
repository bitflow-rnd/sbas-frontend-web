<template>
  <div class='modal show' id='kt_modal_patnt_detail' tabindex='-1'>
    <div class='modal-dialog mw-1500px modal-dialog-centered'>
      <div class='modal-content'>
        <div class='modal-header px-10 pt-5 pb-0 d-flex justify-content-between'>
          <h2>환자 상세 정보</h2>

          <div class='btn-list'>
            <CloseButton @close="emits('closeModal')"/>
          </div>
        </div>

        <div class='modal-body scroll-y py-10 px-10'>
          <article v-if='ptDetail !== null' class='detail-layout1'>
            <div class='detail-wrap'>
              <div class='detail-info-box w-33'>
                <div class='detail-head-box px-10'>
                  <div class='head-box d-flex'>
                    <div class='head-txt-box'>환자정보</div>
                  </div>
                </div>

                <div class='detail-body-box ps-5'>
                  <article class='table-form-layout1'>
                    <div class='form-body-box overflow-y-auto'>
                      <div class='table-box'>
                        <table>
                          <colgroup>
                            <col style='width: 128px' />
                            <col style='width: auto' />
                          </colgroup>
                          <tbody>
                          <tr>
                            <th>환자ID</th>
                            <td>{{ ptDetail.ptId }}</td>
                          </tr>

                          <tr>
                            <th>이름</th>
                            <td>{{ ptDetail.ptNm }}</td>
                          </tr>

                          <tr>
                            <th>주민번호</th>
                            <td>{{ `${ptDetail.rrno1}-${ptDetail.rrno2.charAt(0)}******` }}</td>
                          </tr>

                          <tr>
                            <th>나이</th>
                            <td>{{ ptDetail.age }}세</td>
                          </tr>

                          <tr>
                            <th>성별</th>
                            <td>{{ ptDetail.gndr }}자</td>
                          </tr>

                          <tr>
                            <th>주소</th>
                            <td>
                              [{{ ptDetail.zip }}]<br />
                              {{ ptDetail.bascAddr }}&nbsp;{{ ptDetail.detlAddr }}
                            </td>
                          </tr>

                          <tr>
                            <th>사망여부</th>
                            <td>{{ ptDetail.dethYn === 'Y' ? '사망' : '생존' }}</td>
                          </tr>

                          <tr>
                            <th>국적</th>
                            <td>{{ ptDetail.natiNm }}</td>
                          </tr>

                          <tr>
                            <th>휴대전화번호</th>
                            <td>{{ getTelno(ptDetail.mpno) }}</td>
                          </tr>

                          <tr>
                            <th>전화번호</th>
                            <td>{{ ptDetail.telno ? ptDetail.telno : '-' }}</td>
                          </tr>

                          <tr>
                            <th>보호자 이름</th>
                            <td>{{ ptDetail.nokNm ? ptDetail.nokNm : '-' }}</td>
                          </tr>

                          <tr>
                            <th>직업</th>
                            <td>{{ ptDetail.job ? ptDetail.job : '-' }}</td>
                          </tr>
                          <tr>
                            <th>기저질환</th>
                            <td>{{ ptDs ? getTag(ptDs?.undrDsesNms || []) : '-' }}</td>
                          </tr>

                          <tr>
                            <th>환자유형</th>
                            <td>{{ ptDs ? getTag(ptDs?.ptTypeNms || []) : '-' }}</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>

                      <div class='table-img-box pt-4'></div>
                    </div>
                  </article>
                </div>

                <div class='detail-foot-box pb-5'>
                  <article class='modal-menu-layout1'>
                    <div class='modal-menu-list'>
                      <router-link
                          to=''
                          class='modal-menu-btn menu-primary'
                          @click='openSvrtInfoModal'
                      >관찰환자 생체정보
                      </router-link>
                      <router-link
                          to=''
                          data-bs-target='#kt_modal_patnt'
                          data-bs-toggle='modal'
                          class='modal-menu-btn menu-primary'
                          @click="openEditModal"
                      >환자 정보 수정
                      </router-link>
                    </div>
                  </article>
                </div>
              </div>

              <div v-if='bdasHisInfo !== undefined' class='detail-info-box'>
                <div class='detail-head-box px-10'>
                  <div class='head-box'>
                    <div class='head-txt-box'>병상배정 이력</div>
                  </div>

                  <div class='option-box'></div>
                </div>

                <div class='detail-body-box px-0'>
                  <article class='table-list-layout2'>
                    <div class='table-body-box overflow-y-auto'>
                      <div class='table-box'>

                        <table v-if='bdasHisInfo.items && bdasHisInfo.items.length>0'>
                          <colgroup>
                            <col style='width: 50px' />
                            <col style='width: auto' />
                          </colgroup>
                          <tr v-for='(item,i) in bdasHisInfo.items' :key='i'>
                            <td class='py-5 px-1 text-center text-gray-700 fw-medium fs-6'>
                              <div
                                  class='d-inline-flex align-items-center justify-content-center w-auto bg-primary w-40px h-20px text-white rounded-2'>
                                {{ item.order }}차
                              </div>
                            </td>
                            <td class='py-5 px-3'>
                              <div class='top-info-box d-flex align-items-center'>
                                <div
                                    class='d-inline-flex align-items-center justify-content-center w-auto bg-primary h-25px w-65px text-white rounded-2 px-0 w-auto'
                                    :class="{'bg-gray-500' : item.bedStatCdNm === '완료'}"
                                >
                                  {{ item.bedStatCdNm }}
                                </div>

                                <div class='eclipse-box mx-3'>{{ item.hospNm ? item.hospNm : '-' }}</div>
                                <div class='date-box text-gray-700 fw-regular'>
                                  {{ item.updttDttm ? getDt(item.updttDttm) : '' }}
                                </div>
                              </div>
                              <div class='bottom-info-box d-flex mt-2'>
                                <!--                                <div class="name-box">{{ item.hospNm ? item.hospNm : '-' }}</div>-->
                                <div class='tag-box text-primary ms-2'>{{
                                  item.tagList ? getTag(item.tagList) : '-'
                                  }}
                                </div>
                              </div>
                            </td>
                          </tr>
                        </table>

                        <div class='img-box' v-if='!bdasHisInfo.items || bdasHisInfo.items.length===0'>
                          <img src='/img/common/img_nodata.svg' alt='이미지'>
                          <h2 style='text-align: center'>최근 이력 없음</h2>
                        </div>

                      </div>
                    </div>
                  </article>
                  <svrt-chart-unit-no-title :pt-id='ptDetail.ptId' :rgst-seq='props.rgstSeq' class='svrt-chart'
                                            v-if='ptDetail.monitoring' />
                </div>

                <div class='detail-foot-box pb-5'>
                  <article class='modal-menu-layout1'>
                    <div class='modal-menu-list'>
                      <router-link
                          to=''
                          class='modal-menu-btn menu-primary'
                          @click='openBdasModal'
                      >병상요청
                      </router-link>
                    </div>
                  </article>
                </div>
              </div>

              <div class='detail-info-box w-44 full d-flex flex-column'>
                <div class='detail-head-box px-10 h-60px'>
                  <div class='head-box d-flex'>
                    <div class='head-txt-box' >타임라인</div>
                    <div v-if='timeline !== null && timeline !== undefined' class='head-sub-box mt-1'>
                      <div
                          class='d-inline-flex align-items-center justify-content-center w-auto bg-primary w-40px h-20px text-white rounded-2'
                      >
                        1차
                      </div>
                      <div
                          class='d-inline-flex align-items-center justify-content-center w-auto text-gray-700 ms-2'
                      >
                        {{ getTLDt(timeline.items[0].updtDttm, 0) }}
                      </div>
                    </div>
                  </div>
                </div>

                <div class='detail-body-box flex-root' style='min-height: 0'>
                  <article class='timeline-layout1 pb-5' style='height: 100%'>
                    <div
                        v-if='timeline !== null'
                        class='timeline-wrap overflow-y-auto ps-10'
                        style='height: 100%'
                    >
                      <ul>
                        <li
                            v-for='(item, idx) in timeline.items'
                            :key='idx'
                            :class="{
                              off: item.timeLineStatus === 'complete',
                              'custom-style':
                                idx < timeline.items.length - 1 &&
                                timeline.items[idx + 1].timeLineStatus === 'closed'
                            }"
                        >
                          <div class='ic-box' style='width: 50px' v-if="item.timeLineStatus !== 'closed'">
                            <img :src='getTLIcon(item, idx)' alt='이미지' class='timeline-img' />
                          </div>

                          <div
                              class='item-box'
                              :class="{ suspend: item.timeLineStatus === 'suspend' }"
                              v-if="item.timeLineStatus !== 'closed'"
                          >
                            <div class='top-item-box'>
                              <div class='state-box'>{{ item.title }}</div>
                              <div class='date-box'>
                                {{ item.updtDttm ? getTLDt(item.updtDttm, 1) : '' }}
                              </div>
                            </div>
                            <div class='mid-item-box'>{{ item.by }}</div>
                            <div class='bottom-item-box'>
                              <div class='item-img-group mb-4'>
                                <div class='img-list'></div>
                              </div>
                              <div class='msg-box' v-if='item.msg'>{{ item.msg }}</div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div v-if='timeline === null' class='img-box'><img
                        src='/img/common/img_nodata.svg' alt='이미지'>
                      <h2 style='text-align: center'>최근 이력 없음</h2></div>
                    <div class='detail-foot-box pb-5'>
                      <article class='msg-send-layout1'>
                        <div class='img-upload-result'>
                          <div class='img-list'></div>
                        </div>

<!--                        <div class='msg-group-box'>-->
<!--                          <div class='img-upload-box'>-->
<!--                            <label>-->
<!--                              <input type='file' />-->
<!--                              <img src='/img/common/ic_msg_img_upload.svg' alt='이미지' />-->
<!--                            </label>-->
<!--                          </div>-->
<!--                          <div class='msg-input-box'>-->
<!--                            <input type='text' placeholder='메시지 입력' />-->
<!--                          </div>-->
<!--                          <div class='msg-send-box'>-->
<!--                            <a href='#none' class='send-btn'>-->
<!--                              <img src='/img/common/ic_msg_send.svg' alt='이미지' />-->
<!--                            </a>-->
<!--                          </div>-->
<!--                        </div>-->
                      </article>
                    </div>
                  </article>
                </div>

              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>

  <svrt-info-modal v-if='model.showSvrtInfoModal' :exist-pt='props.ptDetail' :rgst-seq='props.rgstSeq' @closeModal='closeSvrtInfoModal()' />

  <patnt-reg-modal v-if='model.showEditModal' :exist-pt='props.ptDetail' @closeModal='closeEditModal()' />

  <SbasAlert :is-alert='model.confirmAlert' :err-msg='model.errMsg'
             @confirm-alert='closeAlert' />

</template>

<script setup>
import { defineProps, defineEmits, reactive, onMounted } from 'vue'
import CloseButton from '@/components/common/CloseButton.vue'
import SvrtChartUnitNoTitle from '@/components/user/unit/SvrtChartUnitNoTitle.vue'
import { getDt, getTag, getTelno, getTLDt, getTLIcon } from '@/util/ui'
import SvrtInfoModal from '@/components/user/modal/SvrtInfoModal.vue'
import PatntRegModal from '@/components/user/modal/PatntRegModal.vue'
import SbasAlert from '@/components/common/SbasAlert.vue'

const props = defineProps({
  ptDetail: Object,
  bdasHisInfo: Object,
  timeline: Object,
  ptDs: Object,
  rgstSeq: null,
})
const emits = defineEmits(['closeModal', 'openBdasModal'])

const model = reactive({
  showSvrtInfoModal: false,
  showEditModal: false,
  confirmAlert: false,
  errMsg: '',
})

onMounted(() => {
  console.log('ptDetail', props.rgstSeq)
})

function openBdasModal() {
  if (props.bdasHisInfo.count === 0) {
    emits('openBdasModal')
  } else {
    let bedStatCd = props.bdasHisInfo.items[0].bedStatCd
    if (bedStatCd === 'BAST0007' || bedStatCd === 'BAST0008') {
      emits('openBdasModal')
    } else {
      model.confirmAlert = true
      model.errMsg = '병상배정이 진행중입니다.'
    }
  }
}

function closeAlert() {
  model.confirmAlert = false
}

function openEditModal() {
  model.showEditModal = true
}

function closeEditModal() {
  model.showEditModal = false
}

function openSvrtInfoModal() {
  model.showSvrtInfoModal = true
}

function closeSvrtInfoModal() {
  model.showSvrtInfoModal = false
}

</script>

<style scoped>
.modal {
  --bs-modal-width: 98%;
  display: block;
}

.modal.show {
  background-color: rgba(0, 0, 0, 0.4);
  display: block;
}

.item-box.suspend {
  border: 3px solid #74afeb !important;
  background-color: #74afeb33;
}

.head-sub-box {
  margin-left: 12px;
}

.detail-info-box {
  position: relative;
}

.detail-layout1,
.detail-wrap {
  height: 100%;
}

li.custom-style::before {
  display: none;
}

.bg-gray-500 {
  --bs-bg-rgb-color: var(--bs-gray-500-rgb);
  background-color: var(--bs-gray-500) !important;
}

article.detail-layout1 .detail-wrap .detail-head-box .head-box .head-txt-box {
  line-height: 28px;
}

.img-box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.img-box > h2 {
  color: #595959;
  font-weight: normal;
  margin-top: 12px;
}

.detail-info-box.w-44 {
  width: 44% !important;
}

.detail-info-box + .detail-info-box {
  border-left: 1px dashed #ccc;
}

.img-upload-box {
  z-index: 400;
  background-color: white;
}

.svrt-chart {
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(100% - 1rem);
  padding-bottom: 55px;
}

.timeline-img {
  width: 150%;
  height: 150%;
  max-height: 150%;
  max-width: 150%;
}

</style>