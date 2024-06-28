<template>
  <div class='modal show' tabindex='-1' aria-hidden='true'>
    <!--begin::Modal dialog-->
    <div v-if='usrDetail!==null' class='modal-dialog mw-1500px modal-dialog-centered'>
      <!--begin::Modal content-->
      <div class='modal-content'>
        <!--begin::Modal header-->
        <div class='modal-header px-10 py-5 d-flex justify-content-between'>
          <!--begin::Modal title-->
          <h2>사용자 상세 정보</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div class='btn btn-sm btn-icon btn-active-color-primary' @click='closeModal'>
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
            <span class='svg-icon svg-icon-1'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  opacity='0.5'
                  x='6'
                  y='17.3137'
                  width='16'
                  height='2'
                  rx='1'
                  transform='rotate(-45 6 17.3137)'
                  fill='currentColor'
                ></rect>
                <rect
                  x='7.41422'
                  y='6'
                  width='16'
                  height='2'
                  rx='1'
                  transform='rotate(45 7.41422 6)'
                  fill='currentColor'
                ></rect>
              </svg>
            </span>
            <!--end::Svg Icon-->
          </div>
          <!--end::Close-->
        </div>

        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class='modal-body scroll-y py-10 px-10'>
          <div class='tabs-head-box' style='max-width: 460px; margin: 0 auto'>
            <article class='tabs-list-layout1 w-100'>
              <div class='tabs-list full'>
                <router-link
                  to=''
                  @click='detailTabsMove()'
                  class='tabs-btn'
                  :class='{ active: model.showUserInfo === true }'
                >
                  <span class='txt'>개요</span>
                </router-link>

                <router-link
                  to=''
                  @click='detailTabsMove()'
                  class='tabs-btn'
                  :class='{ active: model.showAccessLog === true }'
                >
                  <span class='txt'>접속기록</span>
                </router-link>
              </div>
            </article>
          </div>

          <div class='tabs-group flex-root'>
            <div v-show='model.showUserInfo' class='tabs-box'>
              <article class='table-form-layout1'>
                <div class='form-head-box'>
                  <div class='head-box'>
                    <div class='head-txt-box fs-16px fw-bold pb-5'>사용자 기본 정보</div>
                  </div>
                </div>
                <div class='form-body-box'>
                  <div class='table-box'>
                    <table>
                      <colgroup>
                        <col style='width: 168px' />
                        <col style='width: 168px' />
                        <col style='width: auto' />
                        <col style='width: 168px' />
                        <col style='width: auto' />
                      </colgroup>
                      <tbody>
                      <tr>
                        <td rowspan='4' class='p-0'>
                          <img class='profile-img' src="../../assets/img/img-no-img.webp" alt="이미지" />
                        </td>
                        <th>아이디</th>
                        <td>{{ props.usrDetail.id }}</td>
                      </tr>
                      <tr>
                        <th>이름</th>
                        <td>{{ props.usrDetail.userNm }}</td>
                        <th>휴대전화번호</th>
                        <td>{{ getTelno(props.usrDetail.telno) }}</td>
                      </tr>
                      <tr>
                        <th>생년월일</th>
                        <td>{{ getbtDt(props.usrDetail.btDt) }}</td>
                        <th>성별</th>
                        <td>{{ '남' }}</td>
                      </tr>
                      <tr>
                        <th>소셜로그인 사용</th>
                        <td colspan='3'>사용 - 수정</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </article>

              <article class='table-form-layout1 mt-10'>
                <div class='form-head-box'>
                  <div class='head-box'>
                    <div class='head-txt-box fs-16px fw-bold pb-5'>업무역할</div>
                  </div>
                </div>
                <div class='form-body-box'>
                  <div class='table-box'>
                    <table>
                      <colgroup>
                        <col style='width: 168px' />
                        <col style='width: auto' />
                        <col style='width: 168px' />
                        <col style='width: auto' />
                      </colgroup>
                      <tbody>
                      <tr>
                        <th>소속기관 유형</th>
                        <td>{{ getInstType(props.usrDetail.instTypeCd) }}</td>
                        <th>직급</th>
                        <td>{{ props.usrDetail.ocpCd }}</td>
                      </tr>

                      <tr>
                        <th>권한그룹</th>
                        <td>
                          <div class='item-cell-box full'>
                            <article class='permission-selector-layout'>
                              <div class='selector-box' style='cursor: default'>
                                <div v-if='getPmgr(props.usrDetail.jobCd) === 1'
                                     class='selector-wrap'
                                >
                                  <div class='img-box'>
                                    <img
                                      src='/img/common/img_permission_item1.svg'
                                      alt='이미지'
                                      class='on'
                                    />
                                  </div>
                                  <div class='info-box'>
                                    <div class='main-box'>병상요청그룹</div>
                                    <div class='sub-box'>보건소, 병상배정반, 의료진</div>
                                  </div>
                                </div>
                                <div v-else-if='getPmgr(props.usrDetail.jobCd) === 2'
                                     class='selector-wrap'
                                >
                                  <div class='img-box'>
                                    <img
                                      src='/img/common/img_permission_item2.svg'
                                      alt='이미지'
                                      class='on'
                                    />
                                  </div>
                                  <div class='info-box'>
                                    <div class='main-box'>병상승인그룹</div>
                                    <div class='sub-box'>보건소, 병상배정반, 의료진</div>
                                  </div>
                                </div>
                                <div v-else-if='getPmgr(props.usrDetail.jobCd) === 3'
                                     class='selector-wrap'
                                >
                                  <div class='img-box'>
                                    <img
                                      src='/img/common/img_permission_item3.svg'
                                      alt='이미지'
                                      class='on'
                                    />
                                  </div>
                                  <div class='info-box'>
                                    <div class='main-box'>병상배정그룹</div>
                                    <div class='sub-box'>보건소, 병상배정반, 의료진</div>
                                  </div>
                                </div>
                                <div v-else-if='getPmgr(props.usrDetail.jobCd) === 4'
                                     class='selector-wrap'
                                >
                                  <div class='img-box'>
                                    <img
                                      src='/img/common/img_permission_item4.svg'
                                      alt='이미지'
                                      class='on'
                                    />
                                  </div>
                                  <div class='info-box'>
                                    <div class='main-box'>시스템관리그룹</div>
                                    <div class='sub-box'>보건소, 병상배정반, 의료진</div>
                                  </div>
                                </div>
                              </div>
                            </article>
                          </div>
                        </td>
                        <th>세부권한</th>
                        <td>{{ getAuthCd(props.usrDetail.authCd) }}</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </article>

              <article class='table-form-layout1 mt-10'>
                <div class='form-head-box'>
                  <div class='head-box'>
                    <div class='head-txt-box fs-16px fw-bold pb-5'>소속기관</div>
                  </div>
                </div>
                <div class='form-body-box'>
                  <div class='table-box'>
                    <table>
                      <colgroup>
                        <col style='width: 168px' />
                        <col style='width: auto' />
                        <col style='width: 168px' />
                        <col style='width: auto' />
                      </colgroup>
                      <tbody>
                      <tr>
                        <th>주 담당지역</th>
                        <td>{{ props.usrDetail.dutyDstr1CdNm ?? '-' }}</td>

                        <th>소속기관</th>
                        <td>{{ props.usrDetail.instNm }}</td>
                      </tr>

                      <tr>
                        <th>담당환자 유형</th>
                        <td colspan='3'>{{ getPtType(props.usrDetail.ptTypeCd) }}</td>
                      </tr>

                      <tr>
                        <th>소속 증명 정보</th>
                        <td colspan='3'>
                          <article class='img-upload-layout'>
                            <div class='result-list'>
                              <div class='result-box'>
                                <img src="/img/common/img_profile_dummy.png" alt="이미지">
                              </div>
                            </div>
                          </article>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </article>

              <article class='table-form-layout1 mt-10'>
                <div class='form-head-box'>
                  <div class='head-box'>
                    <div class='head-txt-box fs-16px fw-bold pb-5'>기타정보</div>
                  </div>
                </div>
                <div class='form-body-box'>
                  <div class='table-box'>
                    <table>
                      <colgroup>
                        <col style='width: 168px' />
                        <col style='width: auto' />
                        <col style='width: 168px' />
                        <col style='width: auto' />
                      </colgroup>
                      <tbody>
                      <tr>
                        <th>사용자 상태</th>
                        <td>{{ props.usrDetail.userStatCdNm }}</td>

                        <th>등록일 / 최근접속일</th>
                        <td>{{ getDt(props.usrDetail.rgstDttm) }} / 2023-03-11</td>
                      </tr>

                      <tr>
                        <th>승인(초대) 일자</th>
                        <td>{{ props.usrDetail.aprvDttm === null ? '-' : getDt(props.usrDetail.aprvDttm) }}</td>

                        <th>승인(초대)자</th>
                        <td>정현오/서울특별시/라임헬스케어/수석</td>
                      </tr>
                      <tr>
                        <th>임시비밀번호</th>
                        <td>
                          <a
                            href="javascript:confirmPopupOpen('$회원번호(회원명)$님에게<br/> 임시비밀번호를 발급하시겠습니까?',function()
                                                    {confirmPopupClose();alertPopupOpen('휴대폰으로 임시비밀번호가<br/>전송 되었습니다.');});"
                            class='btn btn-sm btn-flex btn-primary align-self-center px-3'
                          >임시비밀번호 발급</a
                          >
                        </td>

                        <th>사용자 탈퇴처리</th>
                        <td>
                          <router-link
                            to=''
                            @click='toggleModal'
                            class='btn btn-sm btn-flex btn-primary align-self-center px-3'
                          >탈퇴처리
                          </router-link
                          >
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </article>

<!--              TODO: 버튼 작동   -->
              <article class='modal-menu-layout1 pt-10'>
                <div class='modal-menu-list'>
                  <router-link to='' @click='closeModal' class='modal-menu-btn menu-cancel'
                  >취소</router-link>
                  <a
                    @click='closeModal'
                    class='modal-menu-btn menu-primary-outline'
                  >수정</a>
                  <router-link
                    v-show="props.usrDetail.userStatCd === 'URST0001'"
                    to=''
                    @click='toggleModal'
                    class='modal-menu-btn menu-primary'
                  >승인/반려
                  </router-link>
                </div>
              </article>
            </div>

            <div v-show='model.showAccessLog' class='tabs-box'>
              <div class='d-flex pt-6'>
                <div class='table-wrap'>
                  <article class='table-list-layout1'>
                    <div class='table-head-box pb-4'>
                      <div class='head-box'>
                        <div class='head-txt-box'>1. 사용자 상태 변경 이력</div>
                      </div>
                    </div>

                    <div class='table-body-box'>
                      <div class='table-box with-scroll small'>
                        <table class='table-layout-fixed'>
                          <colgroup>
                            <col style='width: 70px' />
                            <col style='width: 100px' />
                            <col style='width: 100px' />
                            <col style='width: 100px' />
                          </colgroup>
                          <thead>
                          <tr class='small'>
                            <th>순번</th>
                            <th>작업</th>
                            <th>처리자</th>
                            <th>일자</th>
                          </tr>
                          </thead>

                          <tbody>
                          <tr>
                            <td>7</td>
                            <td>비밀번호 재발급</td>
                            <td>본인</td>
                            <td>2023.07.01</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </article>
                  <div class='row mt-10'>
                    <div
                      class='col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'
                    ></div>
                    <div class='col-12 d-flex align-items-center justify-content-center'>
                      <div class='dataTables_paginate paging_simple_numbers' id=''>
                        <ul class='pagination'>
                          <li class='paginate_button page-item previous disabled' id=''>
                            <a
                              href='#'
                              aria-controls='kt_table_users'
                              data-dt-idx='0'
                              tabindex='0'
                              class='page-link'
                            ><i class='previous'></i
                            ></a>
                          </li>
                          <li class='paginate_button page-item active'>
                            <a
                              href='#'
                              aria-controls='kt_table_users'
                              data-dt-idx='1'
                              tabindex='0'
                              class='page-link'
                            >1</a
                            >
                          </li>
                          <li class='paginate_button page-item'>
                            <a
                              href='#'
                              aria-controls='kt_table_users'
                              data-dt-idx='2'
                              tabindex='0'
                              class='page-link'
                            >2</a
                            >
                          </li>
                          <li class='paginate_button page-item'>
                            <a
                              href='#'
                              aria-controls='kt_table_users'
                              data-dt-idx='3'
                              tabindex='0'
                              class='page-link'
                            >3</a
                            >
                          </li>
                          <li class='paginate_button page-item next' id=''>
                            <a
                              href='#'
                              aria-controls='kt_table_users'
                              data-dt-idx='4'
                              tabindex='0'
                              class='page-link'
                            ><i class='next'></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class='table-wrap ms-8'>
                  <article class='table-list-layout1'>
                    <div class='table-head-box pb-4'>
                      <div class='head-box'>
                        <div class='head-txt-box'>2. 로그인 이력</div>
                      </div>
                    </div>

                    <div class='table-body-box'>
                      <div class='table-box with-scroll small'>
                        <table class='table-layout-fixed'>
                          <colgroup>
                            <col style='width: 70px' />
                            <col style='width: 100px' />
                            <col style='width: 150px' />
                            <col style='width: 100px' />
                          </colgroup>
                          <thead>
                          <tr class='small'>
                            <th>순번</th>
                            <th>IP</th>
                            <th>장치</th>
                            <th>일자</th>
                          </tr>
                          </thead>

                          <tbody>
                          <tr>
                            <td>7</td>
                            <td>207.46.34.110</td>
                            <td>Chome - Windows</td>
                            <td>2023.07.01</td>
                          </tr>
                          <tr>
                            <td>7</td>
                            <td>207.46.34.110</td>
                            <td>Chome - Windows</td>
                            <td>2023.07.01</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </article>
                  <div class='row mt-10'>
                    <div
                      class='col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'
                    ></div>
                    <div class='col-12 d-flex align-items-center justify-content-center'>
                      <div class='dataTables_paginate paging_simple_numbers' id=''>
                        <ul class='pagination'>
                          <li class='paginate_button page-item previous disabled' id=''>
                            <a
                              href='#'
                              aria-controls='kt_table_users'
                              data-dt-idx='0'
                              tabindex='0'
                              class='page-link'
                            ><i class='previous'></i
                            ></a>
                          </li>
                          <li class='paginate_button page-item active'>
                            <a
                              href='#'
                              aria-controls='kt_table_users'
                              data-dt-idx='1'
                              tabindex='0'
                              class='page-link'
                            >1</a
                            >
                          </li>
                          <li class='paginate_button page-item'>
                            <a
                              href='#'
                              aria-controls='kt_table_users'
                              data-dt-idx='2'
                              tabindex='0'
                              class='page-link'
                            >2</a
                            >
                          </li>
                          <li class='paginate_button page-item'>
                            <a
                              href='#'
                              aria-controls='kt_table_users'
                              data-dt-idx='3'
                              tabindex='0'
                              class='page-link'
                            >3</a
                            >
                          </li>
                          <li class='paginate_button page-item next' id=''>
                            <a
                              href='#'
                              aria-controls='kt_table_users'
                              data-dt-idx='4'
                              tabindex='0'
                              class='page-link'
                            ><i class='next'></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class='table-wrap ms-8'>
                  <article class='table-list-layout1'>
                    <div class='table-head-box pb-4'>
                      <div class='head-box'>
                        <div class='head-txt-box'>3. 활동 로그</div>
                      </div>
                    </div>

                    <div class='table-body-box'>
                      <div class='table-box with-scroll small'>
                        <table class='table-layout-fixed'>
                          <colgroup>
                            <col style='width: 70px' />
                            <col style='width: 100px' />
                            <col style='width: 300px' />
                            <col style='width: 100px' />
                          </colgroup>
                          <thead>
                          <tr class='small'>
                            <th>순번</th>
                            <th>STATUS</th>
                            <th>URL</th>
                            <th>일자</th>
                          </tr>
                          </thead>

                          <tbody>
                          <tr>
                            <td>7</td>
                            <td>200</td>
                            <td class='left'>/api/v1/hospitals</td>
                            <td>2023.07.01</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </article>
                  <div class='row mt-10'>
                    <div
                      class='col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'
                    ></div>
                    <div class='col-12 d-flex align-items-center justify-content-center'>
                      <div class='dataTables_paginate paging_simple_numbers' id=''>
                        <ul class='pagination'>
                          <li class='paginate_button page-item previous disabled' id=''>
                            <a
                              href='#'
                              aria-controls='kt_table_users'
                              data-dt-idx='0'
                              tabindex='0'
                              class='page-link'
                            ><i class='previous'></i
                            ></a>
                          </li>
                          <li class='paginate_button page-item active'>
                            <a
                              href='#'
                              aria-controls='kt_table_users'
                              data-dt-idx='1'
                              tabindex='0'
                              class='page-link'
                            >1</a
                            >
                          </li>
                          <li class='paginate_button page-item'>
                            <a
                              href='#'
                              aria-controls='kt_table_users'
                              data-dt-idx='2'
                              tabindex='0'
                              class='page-link'
                            >2</a
                            >
                          </li>
                          <li class='paginate_button page-item'>
                            <a
                              href='#'
                              aria-controls='kt_table_users'
                              data-dt-idx='3'
                              tabindex='0'
                              class='page-link'
                            >3</a
                            >
                          </li>
                          <li class='paginate_button page-item next' id=''>
                            <a
                              href='#'
                              aria-controls='kt_table_users'
                              data-dt-idx='4'
                              tabindex='0'
                              class='page-link'
                            ><i class='next'></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
</template>

<script setup>
import { defineProps, defineEmits, reactive } from 'vue'
import { JobCode } from '@/util/sbas_cnst'
import { getAuthCd, getDt, getPtType, getTelno } from '@/util/ui'

const props = defineProps({
  usrDetail: {
    type: Object,
    required: true
  },
})

const emits = defineEmits(['getTelno', 'closeModal'])

const model = reactive({
  showUserInfo: true,
  showAccessLog: false,
  showActivityLog: false,
})

function closeModal() {
  emits('closeModal')
}

function detailTabsMove() {
  model.showUserInfo = !model.showUserInfo
  model.showAccessLog = !model.showAccessLog
}

function getbtDt(dt) {
  const year = dt.substring(0, 4)
  const month = dt.substring(4, 6)
  const day = dt.substring(6)
  return `${year}.${month}.${day}`
}

function getPmgr(code) {
  if (code === JobCode.Rqst) {
    return 1
  } else if (code === JobCode.Aprv) {
    return 2
  } else if (code === JobCode.Meds) {
    return 3
  } else if (code === JobCode.Sysa) {
    return 4
  }
}

function getInstType(code) {
  if (code === 'ORGN0001') {
    return '지방자치단체'
  } else if (code === 'ORGN0002') {
    return '구급대'
  } else if (code === 'ORGN0003') {
    return '보건소'
  } else if (code === 'ORGN0004') {
    return '의료기관'
  } else {
    return '전산담당'
  }
}

</script>
<style>
.modal.show {
  background-color: rgba(0, 0, 0, 0.4);
  display: block;
}

.modal-dialog {
  margin-top: 50px;
  margin-bottom: 50px;
}

.profile-img {
  width: 168px;
  height: auto;
  display: block;
}
</style>