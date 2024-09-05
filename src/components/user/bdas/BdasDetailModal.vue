<template>
  <div class='modal show' id='kt_modal_detail' tabindex='-1' style=''>
    <!--begin::Modal dialog-->
    <div class='modal-dialog mw-1500px modal-dialog-centered'>
      <!--begin::Modal content-->
      <div class='modal-content'>
        <!--begin::Modal header-->
        <div class='modal-header px-10 py-5 d-flex justify-content-between'>
          <!--begin::Modal title-->
          <h2>병상배정 세부내용 (<span style='color: #74AFEB'>{{ bdDetail?.bedStatCdNm ?? '' }}</span>)</h2>
          <!--end::Modal title-->

          <!--begin::Close-->
          <CloseButton @close='emits("closeModal")' />
          <!--end::Close-->
        </div>

        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class='modal-body scroll-y py-10 px-10'>
          <article class='detail-layout1'>
            <div class='detail-wrap'>
              <div class='detail-info-box'>
                <div class='detail-head-box px-10'>
                  <div class='head-box'>
                    <div class='head-txt-box'>환자정보</div>
                  </div>

                  <div class='option-box'>
                    <a class='option-btn'>
                      <i class='fa-solid fa-share-nodes text-black' style='font-size: 18px'></i>
                    </a>
                  </div>
                </div>

                <div v-if='ptDetail !== null && ptDs !== null' class='detail-body-box px-10'>
                  <article class='table-form-layout1'>
                    <div class='form-body-box overflow-y-auto mb-5'>
                      <div class='table-box pe-5'>
                        <table>
                          <colgroup>
                            <col style='width: 117px' />
                            <col style='width: auto' />
                          </colgroup>
                          <tbody>
                          <tr>
                            <th>진료과</th>
                            <td>
                              {{ ptDetail.ptNm }} ({{ ptDetail.gndr }}/{{ ptDetail.age }}세)
                            </td>
                          </tr>

                          <tr>
                            <th>주민등록번호</th>
                            <td>{{ ptDetail.rrno1 }}-{{ ptDetail.rrno2 }}*******</td>
                          </tr>

                          <tr>
                            <th>주소</th>
                            <td>{{ ptDetail.bascAddr }}</td>
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
                            <th>보호자 이름</th>
                            <td>{{ ptDetail.nokNm ? ptDetail.nokNm : '-' }}</td>
                          </tr>

                          <tr>
                            <th>전화번호</th>
                            <td>{{ ptDetail.telno ? ptDetail.telno : '-' }}</td>
                          </tr>

                          <tr>
                            <th>직업</th>
                            <td>{{ ptDetail.job ? ptDetail.job : '-' }}</td>
                          </tr>

                          <tr>
                            <th>
                              증상 ·징후<br />
                              / 검사결과
                            </th>
                            <td>{{ ptDs.diagNm ? ptDs.diagNm : '-' }} / {{ ptDs.dfdgExamRslt ? ptDs.dfdgExamRslt : '-'
                              }}
                            </td>
                          </tr>

                          <tr>
                            <th>기저질환</th>
                            <td>{{ getTag(ptDs.undrDsesNms) ? getTag(ptDs.undrDsesNms) : '-' }}</td>
                          </tr>

                          <tr>
                            <th>환자유형</th>
                            <td>{{ getTag(ptDs.ptTypeNms) ? getTag(ptDs.ptTypeNms) : '-' }}</td>
                          </tr>

                          <tr>
                            <th>
                              진료<br />
                              이미지·영상
                            </th>
                            <td>
                              <div class='table-img-box pt-4'>
                                <a href='javascript:void(0)' class='img-box'>
                                </a>
                              </div>
                            </td>
                          </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </article>
                </div>
              </div>

              <div class='detail-info-box full d-flex flex-column'>
                <div class='detail-head-box px-10 h-80px'>
                  <article class='tabs-list-layout1 w-100 px-10'>
                    <div class='tabs-list full'>
                      <router-link
                        to=''
                        @click='setActive(0)'
                        class='tabs-btn'
                        :class='{ active: model.tabIdx === 0 }'
                      >
                        <span class='txt'>타임라인</span>
                      </router-link>

                      <router-link
                        to=''
                        @click='setActive(1)'
                        class='tabs-btn'
                        :class='{ active: model.tabIdx === 1 }'
                      >
                        <span class='txt'>질병정보</span>
                      </router-link>

                      <router-link
                        to=''
                        @click='setActive(2)'
                        class='tabs-btn'
                        :class='{ active: model.tabIdx === 2 }'
                      >
                        <span class='txt'>출발·도착 정보</span>
                      </router-link>
                    </div>
                  </article>
                </div>

                <div class='detail-tabs-group' style='height: 100%; min-height: 0'>
                  <div class='tabs-box flex-root' v-show='model.tabIdx === 0' style=''>
                    <div
                      v-if='timeline !== null && timeline !== undefined'
                      class='detail-body-box pe-5 flex-root'
                      style='min-height: 0'
                    >
                      <article class='timeline-layout1 pb-5' style='height: 100%'>
                        <div class='timeline-wrap overflow-y-auto ps-10 pe-5' style='height: 100%'>
                          <div class='py-4 fw-bold d-flex' style='align-items: center;'>
                            <div class='timeline-date'>
                              {{ getTLDt(timeline.items[0].updtDttm, 0) }}
                            </div>
                            <div class="gap-2 gap-lg-3" style='margin-left: auto'>
                              <a
                                @click="toggleAll"
                                class="btn btn-sm btn-flex btn-primary px-2"
                              >
                                <i v-if='model.showAll' class="fa-regular fa-plus" style='font-size: 16px'>&nbsp;&nbsp;모두 열기</i>
                                <i v-if='!model.showAll' class="fa-regular fa-minus" style='font-size: 16px'>&nbsp;&nbsp;모두 닫기</i>
                              </a>
                            </div>
                          </div>

                          <ul>
                            <li v-for='(item, idx) in timeline.items' :key='idx'
                              :class="{
                                off: item.timeLineStatus === 'complete',
                                'custom-style':
                                  idx < timeline.items.length - 1 &&
                                  timeline.items[idx + 1].timeLineStatus === 'closed'
                              }"
                            >
                              <div class='ic-box' style='width: 50px' >
                                <img :src='getTLIcon(item, idx)' alt='이미지' class='timeline-img' />
                              </div>

                              <div
                                class='item-box'
                                :class="{ suspend: item.timeLineStatus === 'suspend' }"
                              >
                                <div class='top-item-box'>
                                  <div class='state-box'
                                       :class="{
                                        'state-rfse': item.title.includes('불가'),
                                        'state-closed': item.timeLineStatus === 'closed',
                                        }"
                                  >{{ item.title }}
                                  </div>
                                  <div class='date-box' v-if='item.by || item.updtDttm'>
                                    {{ getTLDt(item.updtDttm, 1) }}
                                    <i v-if='!model.showDetails[idx]' class='fa-solid fa-plus-square ms-2 icon-button' role='button' @click='toggleDetails(idx)'></i>
                                    <i v-if='model.showDetails[idx]' class='fa-solid fa-minus-square ms-2 icon-button' role='button' @click='toggleDetails(idx)'></i>
                                  </div>
                                </div>
                                <div class='mid-item-box'
                                     :class="{ 'mb-2': item.msg !== null && item.msg !== '' && item.msg !== undefined }"
                                     v-if='item.by && model.showDetails[idx]'>
                                  <span class='mid-item-box-text' @click='openChrgDetail(item.chrgUserId)' role='button'>{{ item.by }}</span>
                                </div>
                                <div class='bottom-item-box'>
<!--                                  <div class='item-img-group mb-4'>-->
<!--                                    <div class='img-list'>-->
<!--                                    </div>-->
<!--                                  </div>-->

                                  <div class='msg-box' v-if='item.msg && model.showDetails[idx]'>{{ item.msg }}</div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </article>
                    </div>

                    <div class='detail-foot-box pb-5'>
                      <article class='msg-send-layout1'>
                        <div class='img-upload-result'>
                          <div class='img-list'></div>
                        </div>

                        <div class='msg-menu-group-box'>
                          <div class='msg-group-box'>
                            <div class='img-upload-box'>
                              <label>
                                <input type='file' />
                                <img src='/img/common/ic_msg_img_upload.svg' alt='이미지' />
                              </label>
                            </div>
                            <div class='msg-input-box'>
                              <input type='text' placeholder='메시지 입력' />
                            </div>
                            <div class='msg-send-box'>
                              <a href='' class='send-btn'>
                                <img src='/img/common/ic_msg_send.svg' alt='이미지' />
                              </a>
                            </div>
                          </div>

                          <!-- 배정 관련 처리 버튼 그룹 -->
                          <div v-if='bdDetail !== null' class='menu-group-box'>
                            <article class='modal-menu-layout1'>
                              <div class='modal-menu-list'>
                                <!-- && this.chrgUserId.some(item=>item.chrgUserId===userInfo.id)) -->
                                <a v-show="
                                    (bdDetail.bedStatCd === 'BAST0003' &&
                                      ( userInfo.jobCd === JobCode.Aprv || userInfo.jobCd === JobCode.Sysa ))"
                                   @click='openRfsePopup'
                                   class='modal-menu-btn menu-primary-outline radius-0 big'
                                >배정 취소</a
                                >
                                <a v-show="
                                    (bdDetail.bedStatCd === 'BAST0004' &&
                                      ( userInfo.jobCd === JobCode.Meds || userInfo.jobCd === JobCode.Sysa ))"
                                   @click='openRfsePopup'
                                   class='modal-menu-btn menu-primary-outline radius-0 big'
                                >배정 불가</a
                                >
                                <div
                                  v-show="
                                    bdDetail.bedStatCd === 'BAST0003' &&
                                    ( userInfo.jobCd === JobCode.Aprv || userInfo.jobCd === JobCode.Sysa )
                                  "
                                  @click='openReqAprv'
                                  class='modal-menu-btn menu-primary radius-0 big'
                                >
                                  병상 요청 승인
                                </div>

                                <!-- && this.chrgUserId.some(item=>item.chrgUserId===userInfo.id -->
                                <div
                                  v-show="
                                    bdDetail.bedStatCd === 'BAST0004' &&
                                    ( userInfo.jobCd === JobCode.Meds || userInfo.jobCd === JobCode.Sysa )
                                  "
                                  @click='openAprvPopup'
                                  class='modal-menu-btn menu-primary radius-0 big'
                                >
                                  병상 배정 승인
                                </div>

                                <div
                                  v-show="
                                    bdDetail.bedStatCd === 'BAST0005' &&
                                    ( userInfo.jobCd === JobCode.Aprv || userInfo.jobCd === JobCode.Sysa )
                                  "
                                  @click='openTrnsModal'
                                  class='modal-menu-btn menu-primary radius-0 big'
                                >
                                  이송·배차 처리
                                </div>
                                <!-- this.chrgUserId.some(item=>item===userInfo.id) -->
                                <div
                                  v-show="
                                    bdDetail.bedStatCd === 'BAST0006'
                                    && ( userInfo.jobCd === JobCode.Meds || userInfo.jobCd === JobCode.Aprv
                                    || userInfo.jobCd === JobCode.Sysa )"
                                  @click='openAdmsModal'
                                  class='modal-menu-btn menu-primary radius-0 big'
                                >
                                  입 · 퇴원 처리
                                </div>
                              </div>
                            </article>
                          </div>
<!--                           배정 관련 처리 버튼 그룹-->
                        </div>
                      </article>
                    </div>
                  </div>

                  <div class='tabs-box flex-root' v-show='model.tabIdx === 1' style=''>
                    <div v-if='ptDs !== null' class='scroll-wrap px-5 mx-5 mb-5'>
                      <article class='table-form-layout1'>
                        <div class='form-head-box'></div>

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
                                <th>담당보건소</th>
                                <td>{{ ptDs.rcptPhc ? ptDs.rcptPhc : '-' }}</td>
                                <th>입원여부</th>
                                <td>{{ ptDs.admsYn ? ptDs.admsYn : '-' }}</td>
                              </tr>

                              <tr>
                                <th>코로나19증상 및 징후</th>
                                <td>{{ ptDs.diagNm ? ptDs.diagNm : '-' }}</td>
                                <th>확진검사결과</th>
                                <td>{{ ptDs.dfdgExamRslt ? ptDs.dfdgExamRslt : '-' }}</td>
                              </tr>

                              <tr>
                                <th>질병급</th>
                                <td>{{ ptDs.diagGrdept ? ptDs.diagGrdept : '-' }}</td>
                                <th>DNR 동의</th>
                                <td>{{ ptDs.dnrAgreYn === "DNRA0001" ? '동의' : '비동의' }}</td>
                              </tr>

                              <tr>
                                <th>기저질환</th>
                                <td colspan="3">{{ getTag(ptDs.undrDsesNms) ? getTag(ptDs.undrDsesNms) : '-' }}</td>
                              </tr>

                              <tr>
                                <th>환자유형</th>
                                <td colspan="3">{{ getTag(ptDs.ptTypeNms) ? getTag(ptDs.ptTypeNms) : '-' }}</td>
                              </tr>

                              <tr>
                                <th>중증도 분류</th>
                                <td colspan='3'>
                                  <!-- todo: 중증도 분석 AI 점수 데이터 받아오기 필요                                                                    -->
                                  <div class='item-cell-box full'>
                                    {{ ptDs.svrtTypeNms[0] ? ptDs.svrtTypeNms[0] : '-' }}
                                    <!--/ NEWS Score 13-->
                                  </div>
                                  <div v-if='ptDs.bdtp !== null' class='item-cell-box pt-3 full'>
                                    <article class='category-list-layout1'>
                                      <div class='category-item-box'>
                                        <div class='subject-box'>체온(℃)</div>
                                        <div class='con-box'>{{ ptDs.bdtp ? ptDs.bdtp : '-' }}</div>
                                      </div>

                                      <div class='category-item-box'>
                                        <div class='subject-box'>
                                          맥박<br />
                                          (회/분)
                                        </div>
                                        <div class='con-box'>{{ ptDs.hr ? ptDs.hr : '-' }}</div>
                                      </div>

                                      <div class='category-item-box'>
                                        <div class='subject-box'>
                                          분당호흡수<br />
                                          (회/분)
                                        </div>
                                        <div class='con-box'>{{ ptDs.resp ? ptDs.resp : '-' }}</div>
                                      </div>

                                      <div class='category-item-box'>
                                        <div class='subject-box'>
                                          산소포화도<br />
                                          (%)
                                        </div>
                                        <div class='con-box'>{{ ptDs.spo2 ? ptDs.spo2 : '-' }}</div>
                                      </div>

                                      <div class='category-item-box'>
                                        <div class='subject-box'>
                                          수축기혈압<br />
                                          (mmHg)
                                        </div>
                                        <div class='con-box'>{{ ptDs.sbp ? ptDs.sbp : '-' }}</div>
                                      </div>
                                    </article>
                                  </div>
                                </td>
                              </tr>

                              <tr>
                                <th>발병일 / 진단일 / 신고일</th>
                                <td colspan='3'>
                                  {{ ptDs.occrDt ? ptDs.occrDt : '- ' }} / {{ ptDs.diagDt ? ptDs.diagDt : ' - ' }} /
                                  {{ ptDs.rptDt ? ptDs.rptDt : ' -' }}
                                </td>
                              </tr>

                              <tr>
                                <th>요양기관 기호/명</th>
                                <td>{{ ptDs.instId ? ptDs.instId : '- ' }} / {{ ptDs.instNm ? ptDs.instNm : ' -' }}</td>
                                <th>요양기관 주소</th>
                                <td>{{ ptDs.instAddr ? ptDs.instAdd : '-' }}</td>
                              </tr>

                              <tr>
                                <th>요양기관 전화번호</th>
                                <td>{{ ptDs.instTelno ? ptDs.instTelno : '-' }}</td>
                                <th>진단의사 성명</th>
                                <td>{{ ptDs.diagDrNm ? ptDs.diagDrNm : '-' }}</td>
                              </tr>

                              <tr>
                                <th>신고기관장 성명</th>
                                <td>{{ ptDs.rptChfNm ? ptDs.rptChfNm : '-' }}</td>
                                <th>요청 병상유형</th>
                                <td>{{ ptDs.reqBedTypeNm ? ptDs.reqBedTypeNm : '-' }}</td>
                              </tr>

                              <tr>
                                <th>역학조사서 및 진료 이미지·영상</th>
                                <td colspan='3'>
                                  <article class='upload-form-layout1'>
                                    <div class='upload-result-wrap'>
                                      <div class='img-upload-result'>
                                        <div class='img-list'></div>
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
                    </div>
                  </div>

                  <div class='tabs-box flex-root' v-show='model.tabIdx === 2' style=''>
                    <div v-if='transInfo !== undefined && transInfo !== null' class='scroll-wrap px-5 mx-5 mb-5'>
                      <article class='table-form-layout1'>
                        <div v-if="bdDetail.bedStatCd==='BAST0006'" class='form-head-box fs-3 fw-bold pb-4'>
                          이송중 <span class='text-primary'>거리 2.3km, 예상 소요시간 25분</span>
                        </div>

                        <div class='form-body-box'>
                          <div class='table-box'>
                            <table>
                              <colgroup>
                                <col style='width: 370px' />
                                <col style='width: 168px' />
                                <col style='width: auto' />
                              </colgroup>
                              <tbody>
                              <tr>
                                <td class='p-0' rowspan='9'>
                                  <div id='map'></div>
                                </td>
                                <th class='bg-accent' colspan='2'>출발지 정보</th>
                              </tr>
                              <tr></tr>

                              <tr>
                                <th>배정 요청 지역</th>
                                <td>{{ transInfo.reqDstr1CdNm ? transInfo.reqDstr1CdNm : '-' }}</td>
                              </tr>

                              <tr>
                                <th>환자 출발지</th>
                                <td>{{ transInfo.dprtDstrTypeCdNm ? transInfo.dprtDstrTypeCdNm : '-' }}</td>
                              </tr>
                              <tr>
                                <th>주소</th>
                                <td>
                                  {{ transInfo.dprtDstrBascAddr ? transInfo.dprtDstrBascAddr : '-'
                                  }}&nbsp;{{ transInfo.dprtDstrDetlAddr ? transInfo.dprtDstrDetlAddr : '' }}
                                </td>
                              </tr>
                              <tr>
                                <th>위도, 경도</th>
                                <td>{{ transInfo.dprtDstrLat }}, {{ transInfo.dprtDstrLon }}</td>
                              </tr>
                              <tr>
                                <th>보호자 1 연락처</th>
                                <td>{{ transInfo.nok1Telno ? transInfo.nok1Telno : '-' }}</td>
                              </tr>
                              <tr>
                                <th>보호자 2 연락처</th>
                                <td>{{ transInfo.nok2Telno ? transInfo.nok2Telno : '-' }}</td>
                              </tr>
                              <tr>
                                <th>요청 메시지</th>
                                <td>{{ transInfo.msg ? transInfo.msg : '-' }}</td>
                              </tr>
                              </tbody>
                            </table>
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
                                <th colspan='4' class='bg-accent'>이송 정보</th>
                              </tr>
                              <tr v-if='!transCondition1'>
                                <td class='p-0' colspan='4'>
                                  <div
                                    class='d-flex align-items-center justify-content-center flex-column py-5'
                                  >
                                    <div class='img-box'>
                                      <img src='/img/common/ic_warning.svg' alt='이미지' />
                                    </div>
                                    <div class='txt-box text-gray-600 fw-bold pt-5'>
                                      환자 이송 전
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr v-else>
                                <th>구급대명</th>
                                <td>{{ transInfo.ambsNm ?? '-' }}</td>
                                <th>차량번호</th>
                                <td>{{ transInfo.vecno ?? '-' }}</td>
                              </tr>
                              <tr v-if='transCondition1'>
                                <th>대원 / 연락처</th>
                                <td colspan='3'>
                                  {{ trsfInfo.crewNm ?? '-' }} / {{ transInfo.chfTelno ?? '-' }}
                                </td>
                              </tr>

                              <tr>
                                <th colspan='4' class='bg-accent'>도착지 정보</th>
                              </tr>
                              <tr v-if='!transCondition2'>
                                <td class='p-0' colspan='4'>
                                  <div
                                    class='d-flex align-items-center justify-content-center flex-column py-5'
                                  >
                                    <div class='img-box'>
                                      <img src='/img/common/ic_warning.svg' alt='이미지' />
                                    </div>
                                    <div class='txt-box text-gray-600 fw-bold pt-5'>
                                      병상배정 전
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr v-if='transCondition2'>
                                <th>의료기관</th>
                                <td>{{ transInfo.destinationInfo?.hospNm ?? '-' }}</td>
                                <th>전화번호</th>
                                <td>{{ transInfo.destinationInfo?.chrgTelno ?? '-' }}</td>
                              </tr>

                              <tr v-if='transCondition2'>
                                <th>주소</th>
                                <td>{{ transInfo.destinationInfo?.hospAddr ?? '-' }}</td>
                                <th>위도, 경도</th>
                                <td>{{ transInfo.destinationInfo?.destinationLat }},
                                  {{ transInfo.destinationInfo?.destinationLon }}
                                </td>
                              </tr>

                              <tr v-if='transCondition2'>
                                <th>병실</th>
                                <td>{{ transInfo.destinationInfo?.roomNm ?? '-' }}</td>
                                <th>원내 배정 여부</th>
                                <td>{{ transInfo.inhpAsgnYn === 'Y' ? '원내배정' : '전원요청' }}</td>
                              </tr>

                              <tr v-if='transCondition2'>
                                <th>진료과</th>
                                <td>{{ transInfo.destinationInfo?.deptNm ?? '-' }}</td>
                              </tr>
                              <tr v-if='transCondition2'>
                                <th>담당의</th>
                                <td>{{ transInfo.destinationInfo?.spclNm ?? '-' }}</td>
                              </tr>
                              <tr v-if='transCondition2'>
                                <th>승인 메시지</th>
                                <td>{{ transInfo.destinationInfo?.msg ?? '-' }}</td>
                              </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </article>
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

  <!--병상요청승인 - 배정반 -->
  <BdasReqAprv v-if='model.popup === "reqAprv"' :bd-detail='props.bdDetail'
               :user-info='props.userInfo' :timeline='props.timeline'
                @closePopup='closePopup' @closeModal='emits("closeModal")' />

  <!--  배정반 배정 취소  -->
  <BdasRfse v-if='model.popup === "refuse"' :bd-detail='props.bdDetail'
            :user-info='props.userInfo' :timeline='props.timeline'
            @close-popup='closePopup' @closeModal='emits("closeModal")' />

  <!--  병상배정 승인 - 의료진  -->
  <BdasAprv v-if='model.popup === "aprv"' :bd-detail='props.bdDetail'
            :user-info='props.userInfo' :timeline='props.timeline'
            @close-popup='closePopup' @closeModal='emits("closeModal")' />

  <!--  이송 배차 처리 3 -->
  <BdasTrnsModal v-if='model.popup === "trns"' :bd-detail='bdDetail' :pt-detail='ptDetail'
                 @closeModal='emits("closeModal")' />

  <!--  입퇴원처리 4 -->
  <BdasAdmsModal v-if='model.popup === "adms"' :bd-detail='bdDetail' :pt-detail='ptDetail'
                 :trans-info='transInfo'
                 @closeModal='emits("closeModal")' />

  <my-info-modal v-if="model.popup==='chrgInfo'" :isChrgInfo='true' :userInfo='model.chrgInfo' @closeModal='closePopup' />

</template>

<script setup>
import { defineProps, defineEmits, reactive, ref, onMounted } from 'vue'
import CloseButton from '@/components/common/CloseButton.vue'
import { getTag, getTelno, getTLDt, getTLIcon } from '@/util/ui'
import { JobCode } from '@/util/sbas_cnst'
import BdasReqAprv from '@/components/user/bdas/BdasReqAprv.vue'
import BdasRfse from '@/components/user/bdas/BdasRfse.vue'
import BdasAprv from '@/components/user/bdas/BdasAprv.vue'
import BdasAdmsModal from '@/components/user/bdas/BdasAdmsModal.vue'
import BdasTrnsModal from '@/components/user/bdas/BdasTrnsModal.vue'
import MyInfoModal from '@/components/user/modal/MyInfoModal.vue'
import { useStore } from 'vuex'

const props = defineProps({
  bdDetail: Object,
  ptDetail: Object,
  ptDs: Object,
  timeline: Object,
  transInfo: Object,
  trsfInfo: Object,
  userInfo: Object,
  transCondition1: false,
  transCondition2: false,
})
const emits = defineEmits(['closeModal', 'openRcmdHospModal'])

const model = reactive({
  tabIdx: 0,
  popup: '',
  chrgInfo: null,
  showDetails: [],
  showAll: true,
})
const store = useStore()

onMounted(() => {
  const filteredItems = props.timeline.items.filter(item => item.by !== undefined);
  model.showDetails = Array.from({ length: filteredItems.length }, () => {
    return false
  })
})

function setActive(idx) {
  model.tabIdx = idx
  if (idx === 2) {
    loadNaverMapAsync()
  }
}

function loadNaverMapAsync() {
  // 네이버 지도 생성 // 35.9561644!4d128.5653029
  let lat = props.transInfo.dprtDstrLat ?? '-'
  let lon = props.transInfo.dprtDstrLon ?? '-'
  const map = new window.naver.maps.Map('map', {
    center: new window.naver.maps.LatLng(lat, lon),
    zoom: 15,
    zoomControlOptions: {
      style: window.naver.maps.ZoomControlStyle.SMALL,
      position: window.naver.maps.Position.TOP_RIGHT
    }
  })
  new window.naver.maps.Marker({
    position: new window.naver.maps.LatLng(lat, lon),
    map: map
  })
}

function openReqAprv() {
  if (props.bdDetail.inhpAsgnYn === 'Y') {
    model.popup = 'reqAprv'
  } else {
    emits('openRcmdHospModal')
  }
}

function openRfsePopup() {
  model.popup = 'refuse'
}

function openAprvPopup() {
  model.popup = 'aprv'
}

function openTrnsModal() {
  model.popup = 'trns'
}

function openAdmsModal() {
  model.popup = 'adms'
}

function openChrgDetail(chrgId) {
  model.popup = 'chrgInfo'
  store.dispatch('user/getChrgUserInfo', chrgId)
  model.chrgInfo = store.getters['user/getChrgUserInfo']
}

function closePopup() {
  model.popup = ''
}

function toggleDetails(idx) {
  // 항목의 열림 상태를 반전
  model.showDetails[idx] = !model.showDetails[idx];
  // 모든 항목이 닫혀 있는지 확인
  const allClosed = model.showDetails.every(item => item === false);

  // 모든 항목이 열려 있는지 확인
  const allOpened = model.showDetails.every(item => item === true);

  if (allClosed) {
    model.showAll = true
  } else if (allOpened) {
    model.showAll = false
  } else {
    model.showAll = true
  }
}

function toggleAll() {
  if (model.showAll) {
    // 현재 상태에서 모든 항목을 여는 경우
    model.showDetails = model.showDetails.map(() => true)
  } else {
    // 현재 상태에서 모든 항목을 닫는 경우
    model.showDetails = model.showDetails.map(() => false)
  }
  // `showAll` 상태를 반전시킵니다.
  model.showAll = !model.showAll
}



</script>

<style scoped>
.modal.show {
  background-color: rgba(0, 0, 0, 0.4);
  display: block;
}

.detail-layout1, detail-wrap {
  height: 100%;
}

.item-box.suspend {
  border: 3px solid #74afeb !important;
  background-color: #74afeb33;
}

.list-table-hoverable tr {
  cursor: pointer;
}

.list-table-hoverable tr:hover td {
  background-color: #74afeb22;
}

#map {
  position: absolute !important;
  width: 370px;
  height: 328px;
  margin: 0;
  padding: 0;
  top: 0;
  border-top: 1px solid #555;
}

li.custom-style::before {
  border: 1px dotted #838693 !important;
}

.timeline-img {
  width: 150%;
  height: 150%;
  max-height: 150%;
  max-width: 150%;
}

.state-rfse {
  color: #FF666EFF !important;
}

.state-closed {
  color: #838693 !important;
}

.mid-item-box-text:hover {
  color: #74afeb !important;
}

.icon-button {
  font-size: 24px;
  vertical-align: middle;
  cursor: pointer;
}

.timeline-date {
  font-size: 1.15rem;
  flex-grow: 1; /* 텍스트가 가능한 많은 공간을 차지하도록 함 */
  text-align: center; /* 텍스트 중앙 정렬 */
}

</style>