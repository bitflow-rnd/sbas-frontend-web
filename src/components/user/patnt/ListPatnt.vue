<template>
  <!--begin::Main-->
  <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
    <!--begin::Content wrapper-->
    <div class="d-flex flex-column flex-column-fluid">
      <!--begin::Toolbar-->
      <div id="kt_app_toolbar" class="app-toolbar">
        <!--begin::Toolbar wrapper-->
        <div class="app-toolbar-wrapper d-flex flex-stack flex-wrap gap-4 w-100">
          <!--begin::Page title-->
          <div class="page-title d-flex flex-column justify-content-center gap-1 me-3">
            <!--begin::Breadcrumb-->
            <ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-base">
              <!--begin::Item-->
              <li class="breadcrumb-item text-gray-700 fw-bold lh-1 mx-n1">
                <router-link to="/dashbd" class="text-hover-primary">
                  <i class="fa-solid fa-house"></i>
                </router-link>
              </li>
              <!--end::Item-->
              <!--begin::Item-->
              <li class="breadcrumb-item">
                <!--begin::Svg Icon | path: icons/duotune/arrows/arr071.svg-->
                <span class="svg-icon svg-icon-4 mx-n1">
                  <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                        fill="currentColor"
                    />
                  </svg>
                </span>
                <!--end::Svg Icon-->
              </li>
              <!--end::Item-->
              <!--begin::Item-->
              <li class="breadcrumb-item text-gray-700 fw-semibold lh-1 mx-n1 fs-6">환자관리</li>
              <!--end::Item-->
              <!--begin::Item-->
              <li class="breadcrumb-item">
                <!--begin::Svg Icon | path: icons/duotune/arrows/arr071.svg-->
                <span class="svg-icon svg-icon-4 mx-n1">
                  <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                        fill="currentColor"
                    />
                  </svg>
                </span>
                <!--end::Svg Icon-->
              </li>
              <!--end::Item-->
              <!--begin::Item-->
              <li class="breadcrumb-item text-gray-500 mx-n1">
                <h1
                    class="page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-2 m-0"
                >
                  환자 정보 관리
                </h1>
              </li>
              <li class="breadcrumb-item ml-2">
                <span>&nbsp;병상배정 이력이 있거나, 배정 예정 중인 환자 목록입니다.</span>
              </li>
              <!--end::Item-->
            </ul>
            <!--end::Breadcrumb-->
            <!--begin::Title-->
            <!--end::Title-->
          </div>
          <!--end::Page title-->
          <!--begin::Actions-->
          <div class="d-flex align-items-center gap-2 gap-lg-3">
            <a
                href="#"
                class="btn btn-flex btn-sm btn-secondary fs-7"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_view_users"
            ><i class="fa-solid fa-download"></i> 엑셀다운로드</a
            >
            <a
                @click="clearNewPt()"
                class="btn btn-sm btn-flex btn-primary align-self-center px-3"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_patnt"
            >
              <i class="fa-solid fa-plus"></i> 환자등록
            </a>
          </div>
          <!--end::Actions-->
        </div>
        <!--end::Toolbar wrapper-->
      </div>
      <!--end::Toolbar-->
      <!--begin::Content-->
      <div v-if="ptList !== null" id="kt_app_content" class="app-content flex-column-fluid">
        <div class="card">
          <!--begin::Card header-->
          <div class="card-header border-0 p-8">
            <!--begin::Card toolbar-->
            <article class="table-form-layout1">
              <div class="form-head-box"></div>

              <div class="form-body-box">
                <div class="table-box">
                  <table>
                    <colgroup>
                      <col style="width: 168px"/>
                      <col style="width: auto"/>
                      <col style="width: 168px"/>
                      <col style="width: auto"/>
                    </colgroup>
                    <tbody>
                    <tr>
                      <th>지역</th>
                      <td>
                        <div class="item-cell-box">
                          <div class="sbox w-175px">
                            <select v-model="filterPatient['address']['first']"
                                    @change="changeDstrCd1()">
                              <option value="" id="null">시/도 전체</option>
                              <option v-for="(item,idx) in cmSido" :key="idx"
                                      :value="item['cdId']">{{ item['cdNm'] }}
                              </option>
                            </select>
                          </div>

                          <div class="sbox w-175px ms-2">
                            <select :disabled="enableSecondAddressPicker" v-model="filterPatient['address']['second']" @change="changeDstrCd2()">
                              <option value="" id="null">시/군/구 전체</option>
                              <option v-for="(item,idx) in cmGugun" :key="idx"
                                      :value="item['cdId']">{{ item['cdNm'] }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </td>
                      <th>배정병원</th>
                      <td>
                        <div class="item-cell-box">
                          <div class="sbox w-175px">
                            <select :disabled="enableHospitalPicker" v-model="filterPatient['hospitalName']"
                                    @change="search()">
                              <option :value="null" id="null">병원 전체</option>
                              <option v-for="(item,idx) in hospList" :key="idx"
                                      :value="item">{{ item }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>배정상태</th>
                      <td>
                        <div
                            class="item-cell-box"
                            v-for="(status, idx) in Object.entries(assignmentStatuses)"
                            :key="idx"
                        >
                          <div class="cbox me-4">
                            <label>
                              <input
                                  type="checkbox"
                                  v-model="filterPatient['assignmentStatus']"
                                  name="state"
                                  :value="status[1]"
                                  @change="search"
                              /><i></i>
                              <span class="txt">{{ status[0] }}</span>
                            </label>
                          </div>
                        </div>
                        <div class="item-cell-box">
                          <div class="cbox me-4">
                            <label>
                              <input
                                  type="checkbox"
                                  v-model="filterPatient['monitoring']"
                                  :value="true"
                                  @change="search"
                              /><i></i>
                              <span class="txt">관찰 환자</span>
                            </label>
                          </div>
                        </div>
                      </td>
                      <th>검색어</th>
                      <td>
                        <div class="item-cell-box">
                          <div class="tbox w-400px with-btn">
                            <input
                                type="text"
                                v-model="filterPatient['searchText']"
                                placeholder="환자 이름, 생년월일 6자리 또는 휴대폰번호 입력"
                                @keyup.enter="search"
                            />

                            <a @click="search" class="input-btn" role="button">
                              <i class="fa-solid fa-magnifying-glass"></i>
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </article>
            <!--end::Card toolbar-->
          </div>
          <!--end::Card header-->
          <!--begin::Card body-->
          <div class="card-body p-8">
            <!--begin::Table-->
            <h5>
              검색결과<span class="position-absolute translate-middle rounded-pill bg-primary">{{
                ptList.count
              }}</span>
            </h5>

            <article class="table-list-layout1">
              <div class="table-body-box">
                <div class="table-box with-scroll small">
                  <table class="list-table-hoverable">
                    <colgroup>
<!--                      <col style="width: 35px"/>-->
                      <col style="width: 70px"/>
                      <col style="width: 100px"/>
                      <col style="width: 100px"/>
                      <col style="width: 100px"/>
                      <col style="width: 100px"/>
                      <col style="width: 100px"/>
                      <col style="width: 100px"/>
                      <col style="width: 100px"/>
                      <col style="width: 100px"/>
                      <col style="width: 100px"/>
                      <col style="width: 100px"/>
                      <col style="width: 100px"/>
                    </colgroup>
                    <thead>
                    <tr class="small" style='cursor:default !important'>
<!--                      <th>-->
<!--                        <div class="cbox">-->
<!--                          <label>-->
<!--                            <input-->
<!--                                @change="allCodesChangeState()"-->
<!--                                type="checkbox"-->
<!--                                class="all-chk"-->
<!--                                v-model="allPatientsSelected"-->
<!--                                :disabled="ptList.count === 0"-->
<!--                            /><i></i>-->
<!--                          </label>-->
<!--                        </div>-->
<!--                      </th>-->
                      <th>순번</th>
                      <th>배정상태</th>
                      <th>이름</th>
                      <th>생년월일</th>
                      <th>성별</th>
                      <th>질병명</th>
                      <th>연락처</th>
                      <th>국적</th>
                      <th>거주지</th>
                      <th>배정병원</th>
                      <th>최근 업데이트일</th>
                      <th>작업</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr
                        v-for="(pt, idx) in ptList['items']"
                        :key="idx"
                        @click="selectPatient(pt)"
                    >
<!--                      <td>-->
<!--                        <div class="cbox d-flex justify-content-center">-->
<!--                          <label>-->
<!--                            <input type="checkbox" :value="pt" v-model="checkedPatients"/><i></i>-->
<!--                          </label>-->
<!--                        </div>-->
<!--                      </td>-->
                      <td>{{ ptList['count'] - idx - startIndex }}</td>
                      <td>{{ pt['bedStatCdNm'] ? pt['bedStatCdNm'] : '환자정보등록' }}</td>
                      <td>
                        <div class='d-inline-flex text-center'>
                          <div class='pt-nm'>{{
                              pt['ptNm'].length > 1 ? (pt['ptNm'].substring(0, 1) + '*' + pt['ptNm'].substring(2, pt['ptNm'].length)) : pt['ptNm']
                            }}
                          </div>
                          <div class="btn-primary-outline" v-if="pt.monitoring">※
                            관찰환자
                          </div>
                        </div>
                      </td>
                      <td>{{ pt['rrno1'] ? pt['rrno1'].slice(0,2) + '.' + pt['rrno1'].slice(2,4) + '.' + pt['rrno1'].slice(4) : '-'}}</td>
                      <td>{{ pt['gndr'] }}자</td>
                      <td>{{ pt['tagList'].length > 0 ? pt['tagList'].join(', ') : '-' }}</td>
                      <td>{{ pt['mpno'] ? pt['mpno'] : '-' }}</td>
                      <td>{{ pt['natiCdNm'] ? pt['natiCdNm'] : '-' }}</td>
                      <td>{{ `${pt['dstr1CdNm']} ${pt['dstr2CdNm'] || ''}` }}</td>
                      <td>{{ pt['hospNm'] ? pt['hospNm'] : '-' }}</td>
                      <td>{{ getDate(pt['updtDttm']) }}</td>
                      <td
                          @click='toggleCheckbox()'
                        ><a @click.stop='showPatntModal(pt,2)'
                          class='btn btn-flex btn-xs btn-outline btn-outline-primary'
                          >수정</a>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </article>

            <data-pagination
                @change="changePage"
                :next-page-buttons-count="nextPageButtonsCount"
                :previous-page-buttons-count="previousPageButtonsCount"
                :display-change-page-buttons-count="displayChangePageButtonsCount"
                :display-rows-count="displayRowsCount"
                :data-length="ptList['count']"
            ></data-pagination>

            <!--end::Table-->
          </div>
          <!--end::Card body-->
        </div>
      </div>
      <!--end::Content-->
    </div>
    <!--end::Content wrapper-->
  </div>
  <!--end:::Main-->

  <!--환자등록/수정 -->
  <div v-show='showModal === 2' class="modal fade" :class='{"show" : showModal === 2 }' id="kt_modal_patnt" tabindex="-1" aria-hidden="true" style="">
    <!--begin::Modal dialog-->
    <div class="modal-dialog col-lg-3 modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>환자 등록/수정</h2>
          <div
              class="btn btn-sm btn-icon btn-active-color-primary"
              @click="closeModal(0)"
              data-bs-dismiss="modal"
          >
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
          <!--end::Close-->
        </div>

        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body scroll-y py-10 px-10">
          <div class="d-flex">
            <div class="table-view-box" style="width: 363px">
              <article class="table-form-layout1 h-100">
                <div class="form-head-box"></div>

                <div class="form-body-box h-100">
                  <div class="table-box h-100">
                    <table class="h-100">
                      <colgroup>
                        <col style="width: 363px"/>
                      </colgroup>
                      <tbody>
                      <tr>
                        <th>역학조사서 업로드</th>
                      </tr>
                      <tr>
                        <td>
                          <article class="modal-profile-layout1">
                            <div
                                class="profile-card-box flex-column mx-auto"
                                style="width: 264px"
                            >
                              <div class="profile-view-box" style="width: 100%; height: 264px">
                                <img
                                  v-if="newPt.attcId === null || newPt.attcId === ''"
                                  src='@/assets/img/img-no-img.webp'/>
                                <img v-else :src='this.epidReportImage' @click='showImageLightBox' />
                                <a v-if="newPt.attcId !== null || newPt.attcId === ''" @click="alertOpen(9)" class="remove-btn">
                                  <img src="/img/common/ic_profile_remove.svg" alt="이미지" />
                                </a>
                                <vue-easy-lightbox
                                  :visible="visibleRef"
                                  :imgs="imgsRef"
                                  :index="indexRef"
                                  @hide="onHide"
                                ></vue-easy-lightbox>
                              </div>

                              <div class="profile-upload-box">
                                <div class="upload-box">
                                  <label
                                      class="btn btn-flex justify-content-center btn-primary py-0 px-0 h-30px w-80px certify-btn rounded-1 mt-2 btn-outline btn-outline-primary"
                                  >
                                    <input type="file" @change="uploadRpt" :value="reportFile"/>
                                    수정
                                  </label>
                                </div>
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
            <div class="table-info-box">
              <article class="table-form-layout1">
                <div class="form-head-box"></div>

                <div class="form-body-box">
                  <form @submit="regNewPt" class="table-box">
                    <table>
                      <colgroup>
                        <col style="width: 168px"/>
                        <col style="width: auto"/>
                        <col style="width: 168px"/>
                        <col style="width: auto"/>
                      </colgroup>
                      <tbody>
                      <tr>
                        <th>환자이름 <span class="text-primary">*</span></th>
                        <td>
                          <div class="item-cell-box">
                            <div class="tbox">
                              <input type="text" v-model="newPt.ptNm"/>
                            </div>
                          </div>
                        </td>
                        <th>성별</th>
                        <td v-if="newPt.rrno2 !== null && newPt.rrno2 !== ''">{{ getGndr(newPt.rrno2) }}자</td>
                      </tr>

                      <tr>
                        <th>주민등록번호 <span class="text-primary">*</span></th>
                        <td>
                          <div class="item-row-box">
                            <div class="item-cell-box">
                              <div class="tbox">
                                <input type="text" v-model="newPt.rrno1"/>
                              </div>
                              <div class="unit-box mx-2 text-gray-600">-</div>
                              <div class="tbox" style="min-width: 20px">
                                <input
                                  type="text"
                                  @input="validateInput(2)"
                                  v-model="newPt.rrno2"
                                  maxlength=7
                                />
                              </div>
                              <!--                                  <div v-if='this.rptInfo !== null' class="unit-box ms-2" style="line-height: 30px">
                                                                  ●●●●●●
                                                                </div>-->
                            </div>
                          </div>
                          <div class="item-row-box">
                            <div class="item-note-box">* 주민등록번호 입력</div>
                          </div>
                        </td>
                        <th>나이 (만)</th>
                        <td v-if="newPt.rrno1 !== null && newPt.rrno1 !== '' && newPt.rrno2 !== null && newPt.rrno2 !== ''">
                          {{ getAge(newPt.rrno1, newPt.rrno2) }}세
                        </td>
                      </tr>

                      <tr>
                        <th rowspan="3">주소 <span class="text-primary">*</span></th>
                        <td rowspan="3">
                          <div class="item-row-box">
                            <div class="item-cell-box full">
                              <div class="tbox full">
                                <input type="text" v-model="newPt.zip" readonly/>
                              </div>
                              <a
                                  @click="openAddressFinder(0)"
                                  class="btn btn-flex justify-content-center btn-primary py-0 px-0 h-30px w-80px ms-3 certify-btn rounded-1"
                                  style="min-width: 80px"
                              >주소검색</a
                              >
                            </div>
                          </div>

                          <div class="item-row-box">
                            <div class="item-cell-box full">
                              <div class="tbox full">
                                <input type="text" v-model="newPt.bascAddr"/>
                              </div>
                            </div>
                          </div>

                          <div class="item-row-box">
                            <div class="item-cell-box full">
                              <div class="tbox full">
                                <input type="text" v-model="newPt.detlAddr"/>
                              </div>
                            </div>
                          </div>

                          <div class="item-row-box">
                            <div class="item-cell-box">
                              <div class="item-note-box">* 상세주소 입력</div>
                            </div>
                          </div>
                        </td>

                        <th>휴대전화번호</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input type="text" v-model="newPt.mpno"/>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>보호자 이름</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input type="text" v-model="newPt.nokNm"/>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>전화번호</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input type="text" v-model="newPt.telno"/>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>사망여부 <span class="text-primary">*</span></th>
                        <td>
                          <div class="item-cell-box full justify-content-between">
                            <article class="toggle-list-layout2">
                              <div class="toggle-list">
                                <label>
                                  <input
                                      type="radio"
                                      name="toggle1"
                                      value="N"
                                      v-model="newPt.dethYn"
                                  />
                                  <span class="txt">생존</span>
                                </label>

                                <label>
                                  <input
                                      type="radio"
                                      name="toggle1"
                                      value="Y"
                                      v-model="newPt.dethYn"
                                  />
                                  <span class="txt">사망</span>
                                </label>
                              </div>
                            </article>

                            <div class="item-note-box">* 사망여부 선택</div>
                          </div>
                        </td>

                        <th>직업</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input type="text" v-model="newPt.job"/>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>국적 <span class="text-primary">*</span></th>
                        <td>
                          <div class="item-row-box">
                            <div class="item-cell-box full justify-content-between">
                              <article class="toggle-list-layout2">
                                <div class="toggle-list">
                                  <label>
                                    <input
                                        type="radio"
                                        name="nation"
                                        value="NATI0001"
                                        v-model="newPt.natiCd"
                                    />
                                    <span class="txt">대한민국</span>
                                  </label>

                                  <label>
                                    <input
                                        type="radio"
                                        name="nation"
                                        value="NATI0003"
                                        v-model="newPt.natiCd"
                                    />
                                    <span class="txt">알수없음</span>
                                  </label>

                                  <label>
                                    <input
                                        type="radio"
                                        name="nation"
                                        value="NATI0002"
                                        v-model="newPt.natiCd"
                                    />
                                    <span class="txt">직접입력</span>
                                  </label>
                                </div>
                              </article>

                            </div>
                          </div>

                          <div class="item-row-box">
                            <div class="tbox" style="width: 211px">
                              <input
                                  type="text"
                                  placeholder="국가명 입력"
                                  v-model="newPt.natiNm"
                                  :readonly="newPt.natiCd !== 'NATI0002'"
                                  class="nation-input"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>기저질환 (다중선택)</th>
                        <td colspan="3">
                          <article class="cbox-list-layout">
                            <div class="cbox-row">
                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"
                                         value='UDDS0001'
                                         v-model='newPt.undrDsesCd'/><i></i>
                                  <span class="txt">고혈압</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"
                                         value='UDDS0002'
                                         v-model='newPt.undrDsesCd' /><i></i>
                                  <span class="txt">당뇨</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"
                                         value='UDDS0003'
                                         v-model='newPt.undrDsesCd' /><i></i>
                                  <span class="txt">고지혈증</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"
                                         value='UDDS0004'
                                         v-model='newPt.undrDsesCd' /><i></i>
                                  <span class="txt">심혈관</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"
                                         value='UDDS0005'
                                         v-model='newPt.undrDsesCd' /><i></i>
                                  <span class="txt">뇌혈관</span>
                                </label>
                              </div>
                            </div>

                            <div class="cbox-row">
                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"
                                         value='UDDS0006'
                                         v-model='newPt.undrDsesCd' /><i></i>
                                  <span class="txt">암</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"
                                         value='UDDS0007'
                                         v-model='newPt.undrDsesCd' /><i></i>
                                  <span class="txt">만성폐질환</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"
                                         value='UDDS0008'
                                         v-model='newPt.undrDsesCd' /><i></i>
                                  <span class="txt">폐렴</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"
                                         value='UDDS0009'
                                         v-model='newPt.undrDsesCd' /><i></i>
                                  <span class="txt">신장질환</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"
                                         value='UDDS0010'
                                         v-model='newPt.undrDsesCd' /><i></i>
                                  <span class="txt">정신질환</span>
                                </label>
                              </div>
                            </div>

                            <div class="cbox-row">
                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"
                                         value='UDDS0011'
                                         v-model='newPt.undrDsesCd' /><i></i>
                                  <span class="txt">결핵</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"
                                         value='UDDS0012'
                                         v-model='newPt.undrDsesCd' /><i></i>
                                  <span class="txt">천식 등 알레르기</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"
                                         value='UDDS0013'
                                         v-model='newPt.undrDsesCd' /><i></i>
                                  <span class="txt">면역력저하자</span>
                                </label>
                              </div>
                            </div>

                            <div class="cbox-row">
                              <div class="d-inline-flex">
                                <div class="cbox w-auto">
                                  <label>
                                    <input type="checkbox" name="disease"
                                           value='UDDS0014'
                                           v-model='newPt.undrDsesCd' /><i></i>
                                    <span class="txt">기타</span>
                                  </label>
                                </div>

                                <div class="tbox d-inline-flex ms-4 w-300px">
                                  <input type="text" v-model='newPt.undrDsesEtc' placeholder="직접 입력"/>
                                </div>
                              </div>
                            </div>
                          </article>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </article>
            </div>
          </div>

          <article class="modal-menu-layout1 pt-40">
            <div class="modal-menu-list pt-5">
              <!--              <a href="javascript:alertPopupOpen('메시지 입력')" class="modal-menu-btn menu-cancel">이전</a>-->

              <a @click="openPopup(0)" class="modal-menu-btn menu-primary">다음</a>
            </div>
          </article>
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--  환자 상세 정보  -->
  <div v-show='showModal === 1' class="modal fade" :class="{'show' : showModal === 1}" id="kt_modal_patnt_detail" tabindex="-1" aria-hidden="true" style="">
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-1500px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>환자 상세 정보</h2>
          <!--end::Modal title-->
          <!--begin::Close-->

          <div class="btn-list">
            <!--
            <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
              <i class="fa-solid fa-share-nodes text-black" style="font-size:18px;"></i>
            </div>
            -->
            <div
              class="btn btn-sm btn-icon btn-active-color-primary"
              @click="closeModal(0)"
              data-bs-dismiss="modal"
            >
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

        <!--begin::Modal body-->
        <div class="modal-body scroll-y py-10 px-10">
          <article v-if="ptDetail !== null" class="detail-layout1">
            <div class="detail-wrap">
              <div class="detail-info-box">
                <div class="detail-head-box px-10">
                  <div class="head-box d-flex">
                    <div class="head-txt-box">환자정보</div>
                    <div class="btn-primary-outline"
                         v-if="ptDetail.ptId==='PT00000085' || ptDetail.ptId==='PT00000086'">※ 관찰환자
                    </div>
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
                            <col style="width: 128px"/>
                            <col style="width: auto"/>
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
                            <td>{{ `${ptDetail.rrno1}-${ptDetail.rrno2}******` }}</td>
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
                              [{{ ptDetail.zip }}]<br/>
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

                      <div class="table-img-box pt-4"></div>
                    </div>

                    <svrt-chart-unit-no-title :pt-id="ptDetail.ptId" class='mt-5'
                                              v-if="monitorPatntsList?.includes(ptDetail.ptId)"/>

                  </article>
                </div>

                <div class="detail-foot-box">
                  <article class="modal-menu-layout1 pb-5">
                    <div class="modal-menu-list">
                      <a
                          href='javascript:void(0)'
                          class="modal-menu-btn menu-primary-outline"
                      >관찰환자 등록
                      </a>
                      <router-link
                          to=""
                          data-bs-target="#kt_modal_patnt"
                          data-bs-toggle="modal"
                          class="modal-menu-btn menu-primary"
                          @click='showPatntModal(ptDetail,2)'
                      >수정
                      </router-link>
                    </div>
                  </article>
                </div>
              </div>

              <div v-if="bdasHis !== undefined" class="detail-info-box">
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

                        <table v-if='bdasHis.items && bdasHis.items.length>0'>
                          <colgroup>
                            <col style="width: 50px"/>
                            <col style="width: auto"/>
                          </colgroup>
                          <tr v-for="(item,i) in bdasHis.items" :key="i">
                            <td class="py-5 px-3 text-center text-gray-700 fw-medium fs-6">{{ item.order }}차</td>
                            <td class="py-5 px-3">
                              <div class="top-info-box d-flex align-items-center">
                                <div
                                    class="d-inline-flex align-items-center justify-content-center w-auto bg-primary h-25px w-65px text-white rounded-2 px-0 w-auto"
                                    :class="{'bg-gray-500' : item.bedStatCdNm === '완료'}"
                                >
                                  {{ item.bedStatCdNm }}
                                </div>

                                <div class="eclipse-box mx-3">{{ item.hospNm ? item.hospNm : '-' }}</div>
                                <div class="date-box text-gray-700 fw-regular">
                                  {{ item.updttDttm ? getDt(item.updtDttm) : '' }}
                                </div>
                              </div>
                              <div class="bottom-info-box d-flex mt-2">
                                <!--                                <div class="name-box">{{ item.hospNm ? item.hospNm : '-' }}</div>-->
                                <div class="tag-box text-primary ms-2">{{
                                    item.tagList ? getTag(item.tagList) : '-'
                                  }}
                                </div>
                              </div>
                            </td>
                          </tr>
                        </table>

                        <div class="img-box" v-if='!bdasHis.items || bdasHis.items.length===0'>
                          <img src="/img/common/img_nodata.svg" alt="이미지">
                          <h2 data-v-70fc8ce7="">최근 이력 없음</h2>
                        </div>

                      </div>
                    </div>
                  </article>
                </div>

                <div class="detail-foot-box">
                  <article class="modal-menu-layout1 pb-5">
                    <div class="modal-menu-list">
                      <router-link
                          to=""
                          class="modal-menu-btn menu-primary"
                          @click='showPatntModal(ptDetail,1)'
                      >병상요청
                      </router-link>
                    </div>
                  </article>
                </div>
              </div>

              <div class="detail-info-box full d-flex flex-column">
                <div class="detail-head-box px-10 h-80px">

                  <div class="head-box d-flex">

                    <div class="head-txt-box" @click='timelineSection' role='button'>타임라인</div>

                    <div v-if="timeline !== null && timeline !== undefined" class="head-sub-box mt-1">
                      <div
                          class="d-inline-flex align-items-center justify-content-center w-auto bg-primary w-40px h-20px text-white rounded-2"
                      >
                        1차
                      </div>
                      <div
                          class="d-inline-flex align-items-center justify-content-center w-auto text-gray-700 ms-2"
                      >
                        {{ getTLDt(timeline.items[0].updtDttm, 0) }}
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
                        v-if="timeline !== null"
                        class="timeline-wrap overflow-y-auto ps-10 pe-5"
                        style="height: 100%"
                    >
                      <ul>
                        <li
                            v-for="(item, idx) in timeline.items"
                            :key="idx"
                            :class="{
                              off: item.timeLineStatus === 'complete',
                              'custom-style':
                                idx < timeline.items.length - 1 &&
                                timeline.items[idx + 1].timeLineStatus === 'closed'
                            }"
                        >
                          <div class="ic-box" v-if="item.timeLineStatus !== 'closed'">
                            <img :src="getTLIcon(item, idx)" alt="이미지"/>
                          </div>

                          <div
                              class="item-box"
                              :class="{ suspend: item.timeLineStatus === 'suspend' }"
                              v-if="item.timeLineStatus !== 'closed'"
                          >
                            <div class="top-item-box">
                              <div class="state-box">{{ item.title }}</div>
                              <div class="date-box">
                                {{ item.updtDttm ? getTLDt(item.updtDttm, 1) : '' }}
                              </div>
                            </div>
                            <div class="mid-item-box">{{ item.by }}</div>
                            <div class="bottom-item-box">
                              <div class="item-img-group mb-4">
                                <div class="img-list"></div>
                              </div>
                              <div class="msg-box" v-if="item.msg">{{ item.msg }}</div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div v-if="timeline === null" class="img-box" data-v-70fc8ce7=""><img
                        src="/img/common/img_nodata.svg" alt="이미지" data-v-70fc8ce7="">
                      <h2 data-v-70fc8ce7="">최근 이력 없음</h2></div>
                    <div class="detail-foot-box">
                      <article class="msg-send-layout1">
                        <div class="img-upload-result">
                          <div class="img-list"></div>
                        </div>

                        <div class="msg-group-box">
                          <div class="img-upload-box">
                            <label>
                              <input type="file"/>
                              <img src="/img/common/ic_msg_img_upload.svg" alt="이미지"/>
                            </label>
                          </div>
                          <div class="msg-input-box">
                            <input type="text" placeholder="메시지 입력"/>
                          </div>
                          <div class="msg-send-box">
                            <a href="#none" class="send-btn">
                              <img src="/img/common/ic_msg_send.svg" alt="이미지"/>
                            </a>
                          </div>
                        </div>
                      </article>
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

  <!-- Todo: replace this model with BedRequestModal.vue -->
  <!--  신규병상요청   -->
  <div class="modal" id="kt_modal_request" v-show='this.showPatnt' tabindex="-1" aria-hidden="true">
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-1500px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>병상요청</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div
              id="reqest_exit"
              class="btn btn-sm btn-icon btn-active-color-primary"
              data-bs-dismiss="modal"
          >
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
            <span class="svg-icon svg-icon-1" @click = 'closePatntRequest'>
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
          <!--end::Close-->

          <article class="floating-request-box d-none">
            <div class="img-box">
              <img src="/img/common/ic_request_patient.svg" alt="이미지"/>
            </div>
            <div v-if="newPt.mpno" class="txt-box">
              {{ newPt.ptNm }}
              <span class="text-gray-600 fw-normal"
              >({{ newPt.gndr }} / {{ getAge(newPt.rrno1, newPt.rrno2) }}세 /
                {{ newPt.bascAddr }} / {{ getTelno(newPt.mpno) }})</span
              >
            </div>
<!--            <div v-show="tab !== 1 && svInfo.undrDsesCd !== []" class="txt-box">
              <span class="text-primary">{{ getTag(svInfo.undrDsesCd) }}</span>
            </div>-->
          </article>
        </div>

        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body scroll-y py-10 px-10">
          <article class="request-step-layout">
            <div class="step-list">
              <div class="step-box" :class="{ active: tab === 0 }">
                <div class="order-box">1</div>
                <div class="info-box">
                  <div class="subject-box">1단계</div>
                  <div class="con-box">
                    환자정보 입력,<br/>
                    역학조사서 업로드
                  </div>
                </div>
              </div>

              <div class="step-box" :class="{ active: tab === 1 }">
                <div class="order-box">2</div>
                <div class="info-box">
                  <div class="subject-box">2단계</div>
                  <div class="con-box">질병정보 입력</div>
                </div>
              </div>

              <div class="step-box" :class="{ active: tab === 2 }">
                <div class="order-box">3</div>
                <div class="info-box">
                  <div class="subject-box">3단계</div>
                  <div class="con-box">중증정보 입력</div>
                </div>
              </div>

              <div class="step-box" :class="{ active: tab === 3 }">
                <div class="order-box">4</div>
                <div class="info-box">
                  <div class="subject-box">4단계</div>
                  <div class="con-box">출발지·요청내용 입력</div>
                </div>
              </div>
            </div>
          </article>

          <article class="tabs-group-list-layout">
            <div class="tabs-box" v-show="tab === 0" style="">
              <div class="d-flex justify-content-end text-danger pb-2">* 필수 입력 항목</div>

              <div class="d-flex">
                <div class="table-view-box" style="width: 363px">
                  <article class="table-form-layout1 h-100">
                    <div class="form-head-box"></div>

                    <div class="form-body-box h-100">
                      <div class="table-box h-100">
                        <table class="h-100">
                          <colgroup>
                            <col style="width: 363px"/>
                          </colgroup>
                          <tbody>
                          <tr>
                            <th>역학조사서 업로드 (선택)</th>
                          </tr>
                          <tr>
                            <td>
                              <article class="modal-profile-layout1">
                                <div
                                    class="profile-card-box flex-column mx-auto"
                                    style="width: 264px"
                                >
                                  <div
                                      class="profile-view-box"
                                      style="width: 100%; height: 264px"
                                  >
                                    <img
                                      v-if="newPt.attcId === null || newPt.attcId === ''"
                                      src='@/assets/img/img-no-img.webp' />
                                    <img v-else :src='this.epidReportImage' @click='showImageLightBox' />
                                    <a v-if="newPt.attcId !== null || newPt.attcId === ''" @click="alertOpen(9)" class="remove-btn"
                                    ><img src="/img/common/ic_profile_remove.svg" alt="이미지"
                                    /></a>
                                    <vue-easy-lightbox
                                      :visible="visibleRef"
                                      :imgs="imgsRef"
                                      :index="indexRef"
                                      @hide="onHide"
                                    ></vue-easy-lightbox>
                                  </div>

                                  <div class="profile-upload-box">
                                    <div class="upload-box">
                                      <label
                                        class="btn btn-flex justify-content-center btn-primary py-0 px-0 h-30px w-80px certify-btn rounded-1 mt-2 btn-outline btn-outline-primary"
                                      >
                                        <input type="file" @change="uploadRpt" :value="reportFile"/>
                                        수정
                                      </label>
                                    </div>
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
                <div class="table-info-box">
                  <article class="table-form-layout1">
                    <div class="form-head-box"></div>

                    <div class="form-body-box">
                      <form @submit="regNewPt" class="table-box">
                        <table>
                          <colgroup>
                            <col style="width: 168px"/>
                            <col style="width: auto"/>
                            <col style="width: 168px"/>
                            <col style="width: auto"/>
                          </colgroup>
                          <tbody>
                          <tr>
                            <th>환자이름 <span class="text-primary">*</span></th>
                            <td>
                              <div class="item-cell-box">
                                <div class="tbox">
                                  <input type="text" v-model="newPt.ptNm" placeholder='환자이름 입력'/>
                                </div>
                              </div>
                            </td>
                            <th>성별</th>
                            <td v-if="newPt.rrno2 !== null || newPt.rrno2 !== ''">{{ getGndr(newPt.rrno2) }}자</td>
                          </tr>

                          <tr>
                            <th>주민등록번호 <span class="text-primary">*</span></th>
                            <td>
                              <div class="item-row-box">
                                <div class="item-cell-box">
                                  <div class="tbox">
                                    <input type="text" v-model="newPt.rrno1"/>
                                  </div>
                                  <div class="unit-box mx-2 text-gray-600">-</div>
                                  <div class="tbox" style="min-width: 20px">
                                    <input
                                      type="text"
                                      @input="validateInput(2)"
                                      v-model="newPt.rrno2"
                                      maxlength=7
                                    />
                                  </div>
<!--                                  <div v-if='this.rptInfo !== null' class="unit-box ms-2" style="line-height: 30px">
                                    ●●●●●●
                                  </div>-->
                                </div>
                              </div>
                              <div class="item-row-box">
                                <div class="item-note-box">* 주민등록번호 입력</div>
                              </div>
                            </td>
                            <th>나이 (만)</th>
                            <td v-if="newPt.rrno1 !== undefined && newPt.rrno2 !== undefined">
                              {{ getAge(newPt.rrno1, newPt.rrno2) }}세
                            </td>
                          </tr>

                          <tr>
                            <th rowspan="3">주소 <span class="text-primary">*</span></th>
                            <td rowspan="3">
                              <div class="item-row-box">
                                <div class="item-cell-box full">
                                  <div class="tbox full">
                                    <input type="text" v-model="newPt.zip" readonly/>
                                  </div>
                                  <a
                                      @click="openAddressFinder(0)"
                                      class="btn btn-flex justify-content-center btn-primary py-0 px-0 h-30px w-80px ms-3 certify-btn rounded-1"
                                      style="min-width: 80px"
                                  >주소검색</a
                                  >
                                </div>
                              </div>

                              <div class="item-row-box">
                                <div class="item-cell-box full">
                                  <div class="tbox full">
                                    <input type="text" v-model="newPt.bascAddr"/>
                                  </div>
                                  <div class="item-note-box flex-shrink-0 ms-2 text-black"></div>
                                </div>
                              </div>

                              <div class="item-row-box">
                                <div class="item-cell-box full">
                                  <div class="tbox full">
                                    <input type="text" v-model="newPt.detlAddr"/>
                                  </div>
                                  <div class="item-note-box flex-shrink-0 ms-2 text-black"></div>
                                </div>
                              </div>

                              <div class="item-row-box">
                                <div class="item-cell-box">
                                  <div class="item-note-box">* 상세주소 입력</div>
                                </div>
                              </div>
                            </td>

                            <th>휴대전화번호</th>
                            <td>
                              <div class="item-cell-box full">
                                <div class="tbox full">
                                  <input type="text" v-model="newPt.mpno"/>
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>보호자 이름</th>
                            <td>
                              <div class="item-cell-box full">
                                <div class="tbox full">
                                  <input type="text" v-model="newPt.nokNm"/>
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>전화번호</th>
                            <td>
                              <div class="item-cell-box full">
                                <div class="tbox full">
                                  <input type="text" v-model="newPt.telno"/>
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>사망여부 <span class="text-primary">*</span></th>
                            <td>
                              <div class="item-cell-box full justify-content-between">
                                <article class="toggle-list-layout2">
                                  <div class="toggle-list">
                                    <label>
                                      <input
                                          type="radio"
                                          name="toggle1"
                                          value="N"
                                          v-model="newPt.dethYn"
                                      />
                                      <span class="txt">생존</span>
                                    </label>

                                    <label>
                                      <input
                                          type="radio"
                                          name="toggle1"
                                          value="Y"
                                          v-model="newPt.dethYn"
                                      />
                                      <span class="txt">사망</span>
                                    </label>
                                  </div>
                                </article>

                                <div class="item-note-box">* 사망여부 선택</div>
                              </div>
                            </td>

                            <th>직업</th>
                            <td>
                              <div class="item-cell-box full">
                                <div class="tbox full">
                                  <input type="text" v-model="newPt.job"/>
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>국적 <span class="text-primary">*</span></th>
                            <td>
                              <div class="item-row-box">
                                <div class="item-cell-box full justify-content-between">
                                  <article class="toggle-list-layout2">
                                    <div class="toggle-list">
                                      <label>
                                        <input
                                            type="radio"
                                            name="nation"
                                            value="NATI0001"
                                            v-model="newPt.natiCd"
                                        />
                                        <span class="txt">대한민국</span>
                                      </label>

                                      <label>
                                        <input
                                            type="radio"
                                            name="nation"
                                            value="NATI0003"
                                            v-model="newPt.natiCd"
                                        />
                                        <span class="txt">알수없음</span>
                                      </label>

                                      <label>
                                        <input
                                            type="radio"
                                            name="nation"
                                            value="NATI0002"
                                            v-model="newPt.natiCd"
                                        />
                                        <span class="txt">직접입력</span>
                                      </label>
                                    </div>
                                  </article>

                                  <div class="item-note-box">* 국적 선택</div>
                                </div>
                              </div>

                              <div class="item-row-box">
                                <div class="tbox" style="width: 211px">
                                  <input
                                      type="text"
                                      placeholder="국가명 입력"
                                      v-model="newPt.natiNm"
                                      :readonly="newPt.natiCd !== 'NATI0002'"
                                      class="nation-input"
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                          </tbody>
                        </table>
                      </form>
                    </div>
                  </article>
                </div>
              </div>

              <article class="modal-menu-layout1 pt-10">
                <div class="modal-menu-list">
                  <!--								<a href="javascript:requestTabMove(2)" class="modal-menu-btn menu-primary">다음</a>-->
                  <a @click="openPopup(4)" class="modal-menu-btn menu-primary">다음</a>
                </div>
              </article>
            </div>

            <div class="tabs-box" v-show="tab === 1" style="display: none">
              <div class="d-flex justify-content-end text-danger pb-2">* 필수 입력 항목</div>

              <article class="table-form-layout1">
                <div class="form-head-box"></div>

                <div class="form-body-box">
                  <div class="table-box">
                    <table>
                      <colgroup>
                        <col style="width: 168px" />
                        <col style="width: auto" />
                        <col style="width: 168px" />
                        <col style="width: auto" />
                      </colgroup>
                      <tbody>
                      <tr>
                        <!-- 의료기관 목록 getMedinst dutyDivNams== 보건소로 둠                                              -->
                        <th>담당보건소</th>
                        <td>
                          <div class="item-row-box">
                            <div class="item-cell-box">
                              <div class="sbox" style="width: 170px">
                                <select v-model="medinstInfo.dstr1Cd" @change="getMedInst" :disabled='dsInfo.rcptPhc===1'>
                                  <option value=''>지역 선택</option>
                                  <option v-for='(item,i) in cmSido' :key='i' :value='item.cdId'>{{item.cdNm}}</option>
                                </select>
                              </div>
                              <div class="sbox ms-3" style="width: 170px">
                                <select v-model="dsInfo.rcptPhc" :disabled="medinstInfo.dstr1Cd===''">
                                  <option value='0'>보건소 선택</option>
                                  <option v-for="(item,i) in organMedi" :key="i"
                                          :value='item.instNm'>{{ item.instNm }}</option>
                                  <option value='1'>직접입력</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div class="item-row-box">
                            <div class="item-cell-box">
                              <div class="tbox w-350px">
                                <input type="text"
                                       placeholder="보건소명 직접 입력"
                                       v-model="medinstInfo.rcptPhc" :readonly="dsInfo.rcptPhc!=='1'"
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <th>코로나19 증상 및 증후</th>
                        <td>
                          <div class="textbox">
                              <textarea
                                  style="height: 66px"
                                  class="py-2 px-4"
                                  v-model="dsInfo.cv19Symp"
                              ></textarea>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>질병명</th>
                        <td>
                          <div class="item-cell-box">
                            <div class="tbox w-350px">
                              <input
                                  type="text"
                                  v-model="dsInfo.diagNm"
                                  placeholder="질병명 입력"
                              />
                            </div>
                          </div>
                        </td>
                        <th>확진검사결과</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input
                                  type="text"
                                  placeholder="검사결과 입력 예) 양성"
                                  v-model="dsInfo.dfdgExamRslt"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>질병급</th>
                        <td>
                          <div class="item-cell-box">
                            <div class="tbox w-350px">
                              <input
                                  type="text"
                                  placeholder="질병급 입력"
                                  v-model="dsInfo.diagGrde"
                              />
                            </div>
                          </div>
                        </td>
                        <th>발병일 / 진단일 / 신고일</th>
                        <td>
                          <div class="item-cell-box">
                            <div class="tbox" style="width: 110px">
                              <input
                                  type="text"
                                  placeholder="YYYY-MM-DD"
                                  v-model="dsInfo.occrDt"
                              />
                            </div>

                            <a
                                @click="dsDtSame"
                                class="btn btn-flex justify-content-center btn-primary py-0 px-0 h-30px w-80px ms-3 certify-btn rounded-1"
                                style="min-width: 80px; line-height: 1.2"
                            >전체동일</a
                            >

                            <div class="tbox ms-3" style="width: 110px">
                              <input
                                  type="text"
                                  placeholder="YYYY-MM-DD"
                                  v-model="dsInfo.diagDt"
                              />
                            </div>
                            <div class="tbox ms-3" style="width: 110px">
                              <input
                                  type="text"
                                  placeholder="YYYY-MM-DD"
                                  v-model="dsInfo.rptDt"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>환자등분류</th>
                        <td>
                          <div class="item-cell-box">
                            <div class="tbox w-350px">
                              <input
                                  type="text"
                                  placeholder="환자등분류 입력"
                                  v-model="dsInfo.ptCatg"
                              />
                            </div>
                          </div>
                        </td>
                        <th>비고</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input
                                  type="text"
                                  placeholder="PCR 등 검사방법 외"
                                  v-model="dsInfo.rmk"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>입원여부 <span class="text-primary">*</span></th>
                        <td>
                          <div class="item-cell-box full justify-content-between">
                            <article class="toggle-list-layout2">
                              <div class="toggle-list">
                                <label>
                                  <input
                                      type="radio"
                                      name="toggle2-1"
                                      value="입원"
                                      v-model="dsInfo.admsYn"
                                  />
                                  <span class="txt">입원</span>
                                </label>

                                <label>
                                  <input
                                      type="radio"
                                      name="toggle2-1"
                                      value="외래"
                                      v-model="dsInfo.admsYn"
                                  />
                                  <span class="txt">외래</span>
                                </label>

                                <label>
                                  <input
                                      type="radio"
                                      name="toggle2-1"
                                      value="재택"
                                      v-model="dsInfo.admsYn"
                                  />
                                  <span class="txt">재택</span>
                                </label>

                                <label>
                                  <input
                                      type="radio"
                                      name="toggle2-1"
                                      value="기타"
                                      v-model="dsInfo.admsYn"
                                  />
                                  <span class="txt">기타</span>
                                </label>
                              </div>
                            </article>

                            <div class="item-note-box">* 입원여부 선택</div>
                          </div>
                        </td>
                        <th>요양기관 기호 / 이름</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox" style="min-width: 205px">
                              <input
                                  type="text"
                                  placeholder="요양기관기호 입력"
                                  v-model="dsInfo.instId"
                              />
                            </div>

                            <div class="tbox full ms-3">
                              <input
                                  type="text"
                                  placeholder="요양기관명 입력"
                                  v-model="dsInfo.instNm"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th rowspan="3">요양기관 주소 <span class="text-primary">*</span></th>
                        <td rowspan="3">
                          <div class="item-row-box">
                            <div class="item-cell-box full">
                              <div class="tbox full">
                                <input
                                    type="text"
                                    readonly
                                    v-model="dsInfo.instZip"
                                    placeholder="우편번호"
                                />
                              </div>
                              <a
                                  @click="openAddressFinder(1)"
                                  class="btn btn-flex justify-content-center btn-primary py-0 px-0 h-30px w-80px ms-3 certify-btn rounded-1"
                                  style="min-width: 80px"
                              >주소검색</a
                              >
                            </div>
                          </div>

                          <div class="item-row-box">
                            <div class="item-cell-box full">
                              <div class="tbox full">
                                <input
                                    type="text"
                                    v-model="dsInfo.instBascAddr"
                                    placeholder="기본주소 입력"
                                />
                              </div>
                            </div>
                          </div>

                          <div class="item-row-box">
                            <div class="item-cell-box full">
                              <div class="tbox full">
                                <input
                                    type="text"
                                    v-model="dsInfo.instDetlAddr"
                                    placeholder="상세주소 입력 (선택)"
                                />
                              </div>
                            </div>
                          </div>

                          <div class="item-row-box">
                            <div class="item-cell-box">
                              <div class="item-note-box">* 기본주소 입력</div>
                            </div>
                          </div>
                        </td>

                        <th>요양기관 전화번호</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input
                                  type="text"
                                  v-model="dsInfo.instTelno"
                                  placeholder="요양기관 전화번호 입력"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>진단의사 성명</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input
                                  type="text"
                                  v-model="dsInfo.diagDrNm"
                                  placeholder="진단의사 성명 입력"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>신고기관장 성명</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input
                                  type="text"
                                  v-model="dsInfo.rptChfNm"
                                  placeholder="신고기관장 성명 입력"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>기타 진단 이미지·영상</th>
                        <td colspan="3">
                          <article class="upload-form-layout1">
                            <div class="upload-result-wrap d-none">
                              <div class="img-upload-result">
                                <div class="img-list">
                                  <div href="javascript:void(0)" class="img-box">
                                    <img src="/img/common/img_dummy_item1.png" alt="이미지"/>
                                    <a
                                        href="javascript:void(0)"
                                        class="remove-btn"
                                        onclick="$(this).parents('.img-box').remove();"
                                    >
                                      <img src="/img/common/ic_profile_remove.svg" alt="이미지"/>
                                    </a>
                                  </div>

                                  <div href="javascript:void(0)" class="img-box">
                                    <img src="/img/common/img_dummy_item1.png" alt="이미지"/>
                                    <a
                                        href="javascript:void(0)"
                                        class="remove-btn"
                                        onclick="$(this).parents('.img-box').remove();"
                                    >
                                      <img src="/img/common/ic_profile_remove.svg" alt="이미지"/>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="upload-form-wrap" style="height: 70px">
                              <div class="no-file-box">
                                <div class="img-box">
                                  <img src="/img/common/ic_img_upload.svg" alt="이미지"/>
                                </div>
                                <div class="txt-box">첨부할 파일들을 여기로 끌어 놓으세요</div>
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
              <article class="modal-menu-layout1 pt-10">
                <div class="modal-menu-list">
                  <router-link to="" @click="backBtn(0)" class="modal-menu-btn menu-cancel">이전
                  </router-link>
                  <router-link to="" @click="goAsgn(2)" class="modal-menu-btn menu-primary">다음
                  </router-link>
                </div>
              </article>
            </div>

            <div class="tabs-box" v-show="tab === 2" style="display: none">
              <div class="d-flex justify-content-end text-danger pb-2">* 필수 입력 항목</div>

              <article class="table-form-layout1">
                <div class="form-head-box"></div>

                <div class="form-body-box">
                  <form @submit="regSvInfo" class="table-box">
                    <table>
                      <colgroup>
                        <col style="width: 168px"/>
                        <col style="width: 168px"/>
                        <col style="width: auto"/>
                        <col style="width: 168px"/>
                        <col style="width: auto"/>
                      </colgroup>
                      <tbody>
                      <tr>
                        <th>환자유형</th>
                        <td colspan="4">
                          <div class="item-cell-box">
                            <div class="cbox">
                              <label>
                                <input
                                    type="checkbox"
                                    name="type2_1"
                                    value="PTTP0003"
                                    v-model="svInfo.ptTypeCd"
                                /><i></i>
                                <span class="txt">투석</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input
                                    type="checkbox"
                                    name="type2_2"
                                    value="PTTP0004"
                                    v-model="svInfo.ptTypeCd"
                                /><i></i>
                                <span class="txt">임산부</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input
                                    type="checkbox"
                                    name="type2_3"
                                    value="PTTP0005"
                                    v-model="svInfo.ptTypeCd"
                                /><i></i>
                                <span class="txt">수술</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input
                                    type="checkbox"
                                    name="type2_4"
                                    value="PTTP0008"
                                    v-model="svInfo.ptTypeCd"
                                /><i></i>
                                <span class="txt">신생아</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input
                                    type="checkbox"
                                    name="type2_5"
                                    value="PTTP0002"
                                    v-model="svInfo.ptTypeCd"
                                /><i></i>
                                <span class="txt">소아</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input
                                    type="checkbox"
                                    name="type2_6"
                                    value="PTTP0006"
                                    v-model="svInfo.ptTypeCd"
                                /><i></i>
                                <span class="txt">인공호흡기 사용</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input
                                    type="checkbox"
                                    name="type2_7"
                                    value="PTTP0007"
                                    v-model="svInfo.ptTypeCd"
                                /><i></i>
                                <span class="txt">적극적 치료요청</span>
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>기저질환</th>
                        <td colspan="4">
                          <article class="cbox-list-layout">
                            <div class="cbox-row">
                              <div class="cbox">
                                <label>
                                  <input
                                      type="checkbox"
                                      name="disease"
                                      value="UDDS0001"
                                      v-model="svInfo.undrDsesCd"
                                  /><i></i>
                                  <span class="txt">고혈압</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input
                                      type="checkbox"
                                      name="disease"
                                      value="UDDS0002"
                                      v-model="svInfo.undrDsesCd"
                                  /><i></i>
                                  <span class="txt">당뇨</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input
                                      type="checkbox"
                                      name="disease"
                                      value="UDDS0003"
                                      v-model="svInfo.undrDsesCd"
                                  /><i></i>
                                  <span class="txt">고지혈증</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input
                                      type="checkbox"
                                      name="disease"
                                      value="UDDS0004"
                                      v-model="svInfo.undrDsesCd"
                                  /><i></i>
                                  <span class="txt">심혈관</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input
                                      type="checkbox"
                                      name="disease"
                                      value="UDDS0005"
                                      v-model="svInfo.undrDsesCd"
                                  /><i></i>
                                  <span class="txt">뇌혈관</span>
                                </label>
                              </div>
                            </div>

                            <div class="cbox-row">
                              <div class="cbox">
                                <label>
                                  <input
                                      type="checkbox"
                                      name="disease"
                                      value="UDDS0006"
                                      v-model="svInfo.undrDsesCd"
                                  /><i></i>
                                  <span class="txt">암</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input
                                      type="checkbox"
                                      name="disease"
                                      value="UDDS0007"
                                      v-model="svInfo.undrDsesCd"
                                  /><i></i>
                                  <span class="txt">만성폐질환</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input
                                      type="checkbox"
                                      name="disease"
                                      value="UDDS0008"
                                      v-model="svInfo.undrDsesCd"
                                  /><i></i>
                                  <span class="txt">폐렴</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input
                                      type="checkbox"
                                      name="disease"
                                      value="UDDS0009"
                                      v-model="svInfo.undrDsesCd"
                                  /><i></i>
                                  <span class="txt">신장질환</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input
                                      type="checkbox"
                                      name="disease"
                                      value="UDDS0010"
                                      v-model="svInfo.undrDsesCd"
                                  /><i></i>
                                  <span class="txt">정신질환</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input
                                      type="checkbox"
                                      name="disease"
                                      value="UDDS0011"
                                      v-model="svInfo.undrDsesCd"
                                  /><i></i>
                                  <span class="txt">결핵</span>
                                </label>
                              </div>
                            </div>

                            <div class="cbox-row">
                              <div class="cbox">
                                <label>
                                  <input
                                      type="checkbox"
                                      name="disease"
                                      value="UDDS0012"
                                      v-model="svInfo.undrDsesCd"
                                  /><i></i>
                                  <span class="txt">천식 등 알레르기</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input
                                      type="checkbox"
                                      name="disease"
                                      value="UDDS0013"
                                      v-model="svInfo.undrDsesCd"
                                  /><i></i>
                                  <span class="txt">면역력저하자</span>
                                </label>
                              </div>
                            </div>

                            <div class="cbox-row">
                              <div class="d-inline-flex">
                                <div class="cbox w-auto">
                                  <label>
                                    <input
                                        type="checkbox"
                                        name="disease"
                                        value="UDDS0014"
                                        v-model="svInfo.undrDsesCd"
                                    /><i></i>
                                    <span class="txt">기타</span>
                                  </label>
                                </div>

                                <div class="tbox d-inline-flex ms-4 w-300px">
                                  <input
                                      type="text"
                                      placeholder="직접 입력"
                                      v-model="svInfo.undrDsesEtc"
                                  />
                                </div>
                              </div>
                            </div>
                          </article>
                        </td>
                      </tr>

                      <tr>
                        <th>요청 병상 유형 <span class="text-primary">*</span></th>
                        <td colspan="4">
                          <div class="item-cell-box full justify-content-between">
                            <article class="toggle-list-layout2">
                              <div class="toggle-list">
                                <label>
                                  <input
                                      type="radio"
                                      name="toggle3-1"
                                      value="BDTP0003"
                                      v-model="svInfo.reqBedTypeCd"
                                  />
                                  <span class="txt">음압격리</span>
                                </label>

                                <label>
                                  <input
                                      type="radio"
                                      name="toggle3-1"
                                      value="BDTP0002"
                                      v-model="svInfo.reqBedTypeCd"
                                  />
                                  <span class="txt">일반격리</span>
                                </label>

                                <label>
                                  <input
                                      type="radio"
                                      name="toggle3-1"
                                      value="BDTP0005"
                                      v-model="svInfo.reqBedTypeCd"
                                  />
                                  <span class="txt">소아음압격리</span>
                                </label>

                                <label>
                                  <input
                                      type="radio"
                                      name="toggle3-1"
                                      value="BDTP0004"
                                      v-model="svInfo.reqBedTypeCd"
                                  />
                                  <span class="txt">소아일반격리</span>
                                </label>

                                <label>
                                  <input
                                      type="radio"
                                      name="toggle3-1"
                                      value="BDTP0007"
                                      v-model="svInfo.reqBedTypeCd"
                                  />
                                  <span class="txt">소아</span>
                                </label>

                                <label>
                                  <input
                                      type="radio"
                                      name="toggle3-1"
                                      value="BDTP0006"
                                      v-model="svInfo.reqBedTypeCd"
                                  />
                                  <span class="txt">일반</span>
                                </label>
                              </div>
                            </article>
                          </div>
                          <div
                              class="item-cell-box pt-2"
                              style="font-size: 12px; letter-spacing: -0.05em; color: #696971"
                          >
                            * 요청 병상 유형을 선택해주세요
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>DNR 동의 여부 <span class="text-primary">*</span></th>
                        <td colspan="4">
                          <div class="item-cell-box full justify-content-between">
                            <article class="toggle-list-layout2">
                              <div class="toggle-list">
                                <label>
                                  <input
                                      type="radio"
                                      name="toggle4-1"
                                      value="DNRA0001"
                                      v-model="svInfo.dnrAgreYn"
                                  />
                                  <span class="txt">동의</span>
                                </label>

                                <label>
                                  <input
                                      type="radio"
                                      name="toggle4-1"
                                      value="DNRA0002"
                                      v-model="svInfo.dnrAgreYn"
                                  />
                                  <span class="txt">비동의</span>
                                </label>

                                <label>
                                  <input
                                      type="radio"
                                      name="toggle4-1"
                                      value="DNRA0003"
                                      v-model="svInfo.dnrAgreYn"
                                  />
                                  <span class="txt">해당없음</span>
                                </label>
                              </div>
                            </article>
                          </div>
                          <div
                              class="item-cell-box pt-2"
                              style="font-size: 12px; letter-spacing: -0.05em; color: #696971"
                          >
                            * DNR 동의여부를 선택해주세요
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th rowspan="6">중증도분류 <span class="text-primary">*</span></th>
                        <td colspan="4">
                          <div class="item-cell-box full justify-content-between">
                            <article class="toggle-list-layout2">
                              <div class="toggle-list">
                                <label @click="svInfo.svrtIptTypeCd = 'SVIP0001'">
                                  <input
                                      type="radio"
                                      name="toggle5-1"
                                      value="SVTP0006"
                                      v-model="svInfo.svrtTypeCd"
                                  />
                                  <span class="txt">중환자</span>
                                </label>

                                <label @click="svInfo.svrtIptTypeCd = 'SVIP0001'">
                                  <input
                                      type="radio"
                                      name="toggle5-1"
                                      value="SVTP0005"
                                      v-model="svInfo.svrtTypeCd"
                                  />
                                  <span class="txt">중증</span>
                                </label>

                                <label @click="svInfo.svrtIptTypeCd = 'SVIP0001'">
                                  <input
                                      type="radio"
                                      name="toggle5-1"
                                      value="SVTP0004"
                                      v-model="svInfo.svrtTypeCd"
                                  />
                                  <span class="txt">준증증</span>
                                </label>

                                <label @click="svInfo.svrtIptTypeCd = 'SVIP0001'">
                                  <input
                                      type="radio"
                                      name="toggle5-1"
                                      value="SVTP0003"
                                      v-model="svInfo.svrtTypeCd"
                                  />
                                  <span class="txt">중등증</span>
                                </label>

                                <label @click="svInfo.svrtIptTypeCd = 'SVIP0001'">
                                  <input
                                      type="radio"
                                      name="toggle5-1"
                                      value="SVTP0001"
                                      v-model="svInfo.svrtTypeCd"
                                  />
                                  <span class="txt">일반</span>
                                </label>

                                <label @click="svInfo.svrtTypeCd = ''">
                                  <input
                                      type="radio"
                                      name="toggle5-1"
                                      value="SVIP0002"
                                      v-model="svInfo.svrtIptTypeCd"
                                  />
                                  <span class="txt">생체정보AI분석</span>
                                </label>
                              </div>
                            </article>
                          </div>
                          <div
                              class="item-cell-box pt-2"
                              style="font-size: 12px; letter-spacing: -0.05em; color: #696971"
                          >
                            * 중증 정보를 선택해주세요
                          </div>
                        </td>
                      </tr>

                      <tr v-show="svInfo.svrtIptTypeCd === 'SVIP0002'">
                        <th>의식상태</th>
                        <td>
                          <div class="item-cell-box full justify-content-between">
                            <article class="toggle-list-layout2">
                              <div class="toggle-list">
                                <label>
                                  <input
                                      type="radio"
                                      name="toggle3-6"
                                      value="A"
                                      v-model="bioAnlys.avpu"
                                  />
                                  <span class="txt">명료</span>
                                </label>

                                <label>
                                  <input
                                      type="radio"
                                      name="toggle3-6"
                                      value="V"
                                      v-model="bioAnlys.avpu"
                                  />
                                  <span class="txt">비명료</span>
                                </label>
                              </div>
                            </article>
                          </div>
                        </td>
                        <th>산소 투여 여부</th>
                        <td>
                          <div class="item-cell-box full justify-content-between">
                            <article class="toggle-list-layout2">
                              <div class="toggle-list">
                                <label>
                                  <input
                                      type="radio"
                                      name="toggle3-7"
                                      value="Y"
                                      v-model="bioAnlys.o2Apply"
                                  />
                                  <span class="txt">투여</span>
                                </label>

                                <label>
                                  <input
                                      type="radio"
                                      name="toggle3-7"
                                      value="N"
                                      v-model="bioAnlys.o2Apply"
                                  />
                                  <span class="txt">비투여</span>
                                </label>
                              </div>
                            </article>
                          </div>
                        </td>
                      </tr>

                      <tr v-show="svInfo.svrtIptTypeCd === 'SVIP0002'">
                        <th>체온(℃)</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input type="number" placeholder="" v-model="bioAnlys.bdTemp"/>
                            </div>
                          </div>
                        </td>
                        <th>맥박(회/분)</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input type="number" placeholder="" v-model="bioAnlys.pulse"/>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr v-show="svInfo.svrtIptTypeCd === 'SVIP0002'">
                        <th>분당호흡수(회/분)</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input type="number" placeholder="" v-model="bioAnlys.breath"/>
                            </div>
                          </div>
                        </td>
                        <th>산소포화도(%)</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input type="number" placeholder="" v-model="bioAnlys.spo2"/>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr v-show="svInfo.svrtIptTypeCd === 'SVIP0002'">
                        <th>수축기혈압(mmHg)</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input type="number" placeholder="" v-model="bioAnlys.sbp"/>
                            </div>
                          </div>
                        </td>
                        <td colspan="2"></td>
                      </tr>

                      <tr v-show="svInfo.svrtIptTypeCd === 'SVIP0002'">
                        <td colspan="4">
                          <article class="analysis-layout1">
                            <div class="analysis-submit-box">
                              <a @click="regBioAnlys" class="analysis-submit-btn">분석</a>
                              <div class="submit-note-box">
                                * 생체정보를 모두 입력하신 경우 AI 분석이 가능합니다
                              </div>
                            </div>

                            <div class="analysis-result-box">
                              <div class="result-box">
                                <div class="subject-box">중증도 분석 결과 :</div>
                                <div class="con-box text-primary">중증</div>
                              </div>

                              <div class="result-box">
                                <div class="subject-box">NEWs Score :</div>
                                <div class="con-box text-primary">20</div>
                              </div>
                            </div>

                            <div class="analysis-note-box">
                              <div
                                  class="pt-2"
                                  style="font-size: 12px; letter-spacing: -0.05em; color: #696971"
                              >
                                * 중증도 분석 A.I 시스템의 분석 값 입니다
                              </div>
                            </div>
                          </article>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </article>

              <article class="modal-menu-layout1 pt-10">
                <div class="modal-menu-list">
                  <router-link to="" @click="backBtn(1)" class="modal-menu-btn menu-cancel"
                  >이전
                  </router-link
                  >
                  <router-link to="" @click="goAsgn(4)" class="modal-menu-btn menu-primary"
                  >다음
                  </router-link
                  >
                </div>
              </article>
            </div>

            <div class="tabs-box" v-show="tab === 3" style="display: none">
              <div class="d-flex justify-content-end text-danger pb-2">* 필수 입력 항목</div>

              <article class="table-form-layout1">
                <div class="form-head-box"></div>

                <div class="form-body-box">
                  <form @submit="regStrtPoint" class="table-box">
                    <table>
                      <colgroup>
                        <col style="width: 168px"/>
                        <col style="width: auto"/>
                        <col style="width: 168px"/>
                        <col style="width: auto"/>
                      </colgroup>
                      <tbody>
                      <tr>
                        <th :rowspan="spInfo.dprtDstrTypeCd === 'DPTP0002' ? 2 : 1">
                          배정요청 지역 <span class="text-primary">*</span>
                        </th>
                        <td :rowspan="spInfo.dprtDstrTypeCd === 'DPTP0002' ? 2 : 1">
                          <div class="item-cell-box full" style="">
                            <div class="sbox w-350px">
                              <select>
                                <option>대구광역시</option>
                              </select>
                            </div>
                          </div>
                          <div
                              class="item-cell-box pt-2"
                              style="font-size: 12px; letter-spacing: -0.05em; color: #696971"
                          >
                            * 병상배정 지자체를 선택해주세요
                          </div>
                        </td>

                        <th v-show="spInfo.dprtDstrTypeCd !== 'DPTP0002'" style="">
                          보호자 1 연락처
                        </th>
                        <td v-show="spInfo.dprtDstrTypeCd !== 'DPTP0002'" style="">
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input
                                  type="text"
                                  placeholder="보호자1 연락처 입력"
                                  @input="validateInput"
                                  v-model="spInfo.nok1Telno"
                              />
                            </div>
                          </div>
                        </td>

                        <th v-show="spInfo.dprtDstrTypeCd === 'DPTP0002'">
                          원내배정 여부 <span class="text-primary">*</span>
                        </th>
                        <td v-show="spInfo.dprtDstrTypeCd === 'DPTP0002'">
                          <div class="item-cell-box full justify-content-between">
                            <article class="toggle-list-layout2">
                              <div class="toggle-list">
                                <label>
                                  <input
                                      type="radio"
                                      name="toggle4-1"
                                      value="N"
                                      v-model="spInfo.inhpAsgnYn"
                                  />
                                  <span class="txt">전원요청</span>
                                </label>

                                <label>
                                  <input
                                      type="radio"
                                      name="toggle4-1"
                                      value="Y"
                                      v-model="spInfo.inhpAsgnYn"
                                  />
                                  <span class="txt">원내배정</span>
                                </label>
                              </div>
                            </article>
                          </div>
                          <div
                              class="item-cell-box pt-2"
                              style="font-size: 12px; letter-spacing: -0.05em; color: #696971"
                          >
                            * 원내배정 여부 선택
                          </div>
                        </td>
                      </tr>
                      <tr v-if="spInfo.dprtDstrTypeCd === 'DPTP0002'">
                        <!-- 출발지 병원 -->
                        <th>진료과</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input
                                  type="text"
                                  placeholder="진료과 입력"
                                  v-model="spInfo.deptNm"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th
                            :rowspan="spInfo.dprtDstrTypeCd === 'DPTP0002' ? 2 : 1"
                            data-type="dynamic"
                        >
                          환자 출발지<span class="text-primary">*</span>
                        </th>
                        <td
                            :rowspan="spInfo.dprtDstrTypeCd === 'DPTP0002' ? 2 : 1"
                            data-type="dynamic"
                            style="vertical-align: top"
                        >
                          <div class="item-cell-box full justify-content-between">
                            <article class="toggle-list-layout2">
                              <div class="toggle-list">
                                <label @click="setSpAddr(0)">
                                  <input
                                      type="radio"
                                      name="toggle4-2"
                                      value="DPTP0001"
                                      v-model="spInfo.dprtDstrTypeCd"
                                  />
                                  <span class="txt">자택</span>
                                </label>

                                <label @click="setSpAddr(1)">
                                  <input
                                      type="radio"
                                      name="toggle4-2"
                                      value="DPTP0002"
                                      v-model="spInfo.dprtDstrTypeCd"
                                  />
                                  <span class="txt">병원</span>
                                </label>

                                <label @click="setSpAddr(2)">
                                  <input
                                      type="radio"
                                      name="toggle4-2"
                                      value="DPTP0003"
                                      v-model="spInfo.dprtDstrTypeCd"
                                  />
                                  <span class="txt">기타지역</span>
                                </label>
                              </div>
                            </article>
                          </div>
                          <div
                              class="item-cell-box pt-2"
                              style="font-size: 12px; letter-spacing: -0.05em; color: #696971"
                          >
                            * 유효성 검사 문구
                          </div>
                        </td>
                        <th v-show="spInfo.dprtDstrTypeCd !== 'DPTP0002'">보호자 2 연락처</th>
                        <td v-show="spInfo.dprtDstrTypeCd !== 'DPTP0002'">
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input
                                  type="text"
                                  placeholder="보호자 2 연락처 입력"
                                  @input="validateInput"
                                  v-model="spInfo.nok2Telno"
                              />
                            </div>
                          </div>
                        </td>
                        <!-- 출발지 병원 -->
                        <th v-show="spInfo.dprtDstrTypeCd === 'DPTP0002'">담당의</th>
                        <td v-show="spInfo.dprtDstrTypeCd === 'DPTP0002'">
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input
                                  type="text"
                                  placeholder="담당의 이름 입력"
                                  v-model="spInfo.spclNm"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <!-- 출발지 병원 -->
                      <tr v-if="spInfo.dprtDstrTypeCd === 'DPTP0002'">
                        <th>전화번호</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input
                                  type="text"
                                  placeholder="연락 전화번호 입력"
                                  @input="validateInput"
                                  v-model="spInfo.chrgTelno"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>출발지 주소</th>
                        <td>
                          <div class="item-row-box">
                            <div class="item-cell-box full">
                              <div class="tbox full">
                                <input
                                    type="text"
                                    v-model="spInfo.dprtDstrZip"
                                    readonly
                                    placeholder="우편번호"
                                />
                              </div>
                              <a
                                  @click="openAddressFinder(3)"
                                  class="btn btn-flex justify-content-center btn-primary py-0 px-0 h-30px w-80px ms-3 certify-btn rounded-1"
                                  style="min-width: 80px"
                              >주소검색</a
                              >
                            </div>
                          </div>

                          <div class="item-row-box">
                            <div class="item-cell-box full">
                              <div class="tbox full">
                                <input
                                    type="text"
                                    placeholder="기본주소 입력"
                                    v-model="spInfo.dprtDstrBascAddr"
                                    readonly
                                />
                              </div>
                            </div>
                          </div>

                          <div class="item-row-box">
                            <div class="item-cell-box full">
                              <div class="tbox full">
                                <input
                                    type="text"
                                    placeholder="상세주소 입력 (선택)"
                                    v-model="spInfo.dprtDstrDetlAddr"
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <th>요청 메시지</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="textbox full">
                                <textarea
                                    style="height: 85px"
                                    class="py-2 px-4"
                                    v-model="spInfo.msg"
                                ></textarea>
                            </div>
                          </div>
                          <div
                              class="item-cell-box full pt-2 justify-content-end"
                              style="font-size: 12px; letter-spacing: -0.05em; color: #696971"
                          >
                            * 유효성 검사 문구
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </article>
              <article class="modal-menu-layout1 pt-10">
                <div class="modal-menu-list">
                  <router-link to="" @click="backBtn(2)" class="modal-menu-btn menu-cancel"
                  >이전
                  </router-link
                  >

                  <router-link to="" @click="goAsgn(5)" class="modal-menu-btn menu-primary"
                  >병상요청완료
                  </router-link
                  >
                </div>
              </article>
            </div>
          </article>
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>

  <!--  alert창  -->
  <article v-show="isAlert" class="popup popup-confirm" style="z-index: 1600">
    <div class="popup-wrapper">
      <div class="popup-contents py-10 px-10" style="width: 300px">
        <article class="modal-alert-layout pb-10">
          <div class="alert-view-box pb-6">
            <img src="/img/common/ic_alert.svg" alt="이미지"/>
          </div>
          <div class="alert-msg-box">{{ errMsg }}</div>
        </article>
        <article class="modal-menu-layout1">
          <div class="modal-menu-list">
            <router-link
                to=""
                @click="cfrmAl(alertIdx)"
                class="modal-menu-btn menu-primary"
                data-type="success"
            >확인
            </router-link>
            <router-link
                v-show="cncBtn"
                to=""
                @click="alertClose"
                class="modal-menu-btn menu-cancel"
                data-type="cancel"
            >
              취소
            </router-link>
          </div>
        </article>
      </div>
    </div>
  </article>
  <!--환자정보 존재 -->
  <article v-if="existPt !== null" v-show="popup === 0" class="popup popup-exist" style="">
    <div class="popup-wrapper">
      <div class="popup-contents">
        <div class="popup-head-box py-5 px-10">
          <div class="head-tit-box">환자정보 존재</div>

          <div class="head-option-box">
            <div @click="closePopup(0)" class="popup-close-btn">
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
            </div>
          </div>
        </div>

        <div class="popup-body-box py-5 px-10">
          <div class="patient-exist-box">
            <div class="exist-box d-flex align-items-center">
              <div
                  class="d-inline-flex align-items-center justify-content-center w-auto h-30px w-50px text-white rounded-4 px-0"
                  :class="cmpExist(0)[1]"
              >
                {{ cmpExist(0)[0] }}
              </div>
              <div class="d-inline-flex w-auto ms-3">
                이름 : {{ existPt.ptNm }} ({{ existPt.gndr }}/{{
                  getAge(existPt.rrno1, existPt.rrno2)
                }}세)
              </div>
            </div>

            <div class="exist-box d-flex align-items-center mt-3">
              <div
                  class="d-inline-flex align-items-center justify-content-center w-auto h-30px w-50px text-white rounded-4 px-0"
                  :class="cmpExist(1)[1]"
              >
                {{ cmpExist(1)[0] }}
              </div>
              <div class="d-inline-flex w-auto ms-3">
                주민등록번호 : {{ existPt.rrno1 }}-{{ existPt.rrno2 }}******
              </div>
            </div>

            <div class="exist-box d-flex align-items-center mt-3">
              <div
                  class="d-inline-flex align-items-center justify-content-center w-auto h-30px w-50px text-white rounded-4 px-0"
                  :class="cmpExist(2)[1]"
              >
                {{ cmpExist(2)[0] }}
              </div>
              <div class="d-inline-flex w-auto ms-3">주소 : {{ existPt.dstr1CdNm }} {{ existPt.dstr2CdNm }}</div>
            </div>

            <div class="exist-box d-flex align-items-center mt-3">
              <div
                  class="d-inline-flex align-items-center justify-content-center w-auto h-30px w-50px text-white rounded-4 px-0"
                  :class="cmpExist(3)[1]"
              >
                {{ cmpExist(3)[0] }}
              </div>
              <div class="d-inline-flex w-auto ms-3">연락처 : {{ getTelno(existPt.mpno) }}</div>
            </div>

            <div class="exist-box d-flex align-items-center mt-6">
              <div class="text-gray-800">※ 동명이인 여부를 확인해주세요.</div>
            </div>
          </div>
        </div>

        <div class="popup-foot-box py-5 px-10">
          <article class="modal-menu-layout1">
            <div class="modal-menu-list">
              <a @click="updateExistPt" class="modal-menu-btn menu-primary">기존정보 업데이트</a>
              <a @click="regNewPt" v-show='existPt === null' class="modal-menu-btn menu-primary-outline">신규등록</a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import DataPagination from '@/components/user/unit/DataPagination.vue'
import {mapState} from 'vuex'
import SvrtChartUnitNoTitle from '@/components/user/unit/SvrtChartUnitNoTitle.vue'
import {
  backBtn,
  getAge, getDt,
  getGndr,
  getTag,
  getTelno,
  getTLDt,
  getTLIcon,
  goAsgn,
  openAddressFinder,
  regNewPt,
  openPopup, getUndrDses, toggleCheckbox
} from '@/util/ui'
import {ref, reactive} from 'vue'

export default {
  components: {
    DataPagination,
    SvrtChartUnitNoTitle
  },
  name: 'ListPatnt',
  props: {
    msg: String
  },
  created() {
  },
  mounted() {
    this.initNewPt = this.newPt
    this.initDsInfo = this.dsInfo
    this.setDefaultDstr1Cd()
  },
  setup() {
    const isAlert = ref(false)
    const cncBtn = ref(false)
    const errMsg = ''
    let model = reactive({
      timeline: ''
    })

    return {
      isAlert,
      errMsg,
      cncBtn, /* alert 취소버튼 유무 */
      model
    }
  },
  data() {
    return {
      showModal: 0,
      tab: 0 /* 병상요청 */,
      alertIdx: 100 /* alert창 확인버튼 */,
      popup: 100 /* 팝업창 */,
      rptYn: false /* 역조서 유무 */,
      preRpt: null /*역조서 이미지 링크*/,
      reportFile: null,
      newPt: {
        ptNm: '', gndr: null, rrno1: null, rrno2: null,
        dethYn: '', natiCd: '', natiNm: '대한민국',
        dstr1Cd: '', dstr2Cd: '', telno: '', picaVer: null,
        nokNm: '', mpno: '', job: '', attcId: null,
        bascAddr: '', detlAddr: '', zip: '',
        undrDsesCd: [], undrDsesEtc: null,
      },
      epidReportImage: '',
      dsInfo: {
        ptId: '',
        occrDt: '',
        diagDt: '',
        rptDt: '',
        instZip: '',
        instBascAddr: '',
        instDetlAddr: '',
        esvyAttcId: null,
        rptType: null,
        diagAttcId: null,
        diagDrNm: '',
        instId: '',
        rcptPhc:0,
      },
      svInfo: {
        ptId: '',
        ptTypeCd: [],
        svrtIptTypeCd: 'SVIP0001',
        svrtTypeCd: '',
        undrDsesCd: []
      },
      bioAnlys: {},
      spInfo: {
        ptId: '',
        dprtDstrTypeCd: '',
        dprtDstrBascAddr: '',
        dprtDstrDetlAddr: '',
        dprtDstrZip: '',
        nok1Telno: '',
        nok2Telno: '',
        chrgTelno: '',
        spclNm: '',
        dprtHospId: '',
        inhpAsgnYn: 'N',
        reqDstr1Cd: '27',
        reqDstr2Cd: null
      },
      assignmentStatuses: {
        '병상요청': 'BAST0003',
        '병상배정': 'BAST0004',
        '이송·배차': 'BAST0005',
        '입·퇴원처리': 'BAST0006',
        '완료': 'BAST0007,BAST0008',
        '환자등록': 'BAST0001'
      },
      d: '관찰 환자',
      genders: ['남', '여'],
      dateRanges: ['1개월', '3개월', '6개월', '1년', '전체', '직접지정'],
      selectedPatient: null,
      selectedPatientBasicInfo: null,
      selectedPatientDiseaseInfo: null,
      patientData: [],
      patientBasicInfo: [],
      patientDiseaseInfo: [],
      displayRowsCount: 15,
      displayChangePageButtonsCount: 10,
      previousPageButtonsCount: 4,
      nextPageButtonsCount: 4,
      page: 1,
      checkedPatients: [],
      allPatientsSelected: false,
      filterPatient: {
        address: {
          first: '',
          second: ''
        },
        hospitalName: null,
        monitoring: null,
        assignmentStatus: [],
        searchText: ''
      },
      image: 'assets/logo.png',
      visibleRef: false,
      imgsRef: '',
      indexRef: 0,
      medinstInfo:{
        dstr1Cd: '',
      },
      showPatnt: false,
    }
  },
  computed: {
    ...mapState('user',['userInfo']),
    ...mapState('admin', ['cmSido', 'cmGugun','organMedi']),
    ...mapState('bedasgn', ['timeline', 'ptDs', 'bdasHis']),
    ...mapState('patnt', ['ptDetail', 'ptBI', 'existPt', 'ptList', 'severPts', 'severPtList', 'hospList', 'rptInfo', 'attcRpt']),
    ...mapState('severity', ['severityData']),
    startIndex() {
      return (this.page - 1) * this.displayRowsCount;
    },
    endIndex() {
      return this.page * this.displayRowsCount;
    },
    filterData() {
      let params = {};
      if (this.filterPatient['searchText']) params = {...params, ptNm: this.filterPatient['searchText']};
      if (this.filterPatient['searchText']) params = {...params, rrno1: this.filterPatient['searchText']};
      if (this.filterPatient['searchText']) params = {...params, mpno: this.filterPatient['searchText']};
      if (this.filterPatient['address']['first']) params = {...params, dstr1Cd: this.filterPatient['address']['first']};
      if (this.filterPatient['address']['second']) params = {...params, dstr2Cd: this.filterPatient['address']['second']};
      if (this.filterPatient['hospitalName']) params = {...params, hospNm: this.filterPatient['hospitalName']};
      if (this.filterPatient['monitoring']) params = {...params, sever: this.filterPatient['monitoring']};
      if (this.filterPatient['assignmentStatus']) params = {...params, bedStatCd: this.filterPatient['assignmentStatus'].length ? this.filterPatient['assignmentStatus'].toString() : null};

      return params
    },
    enableHospitalPicker() {
      return this.filterPatient['address']['second'] === "";
    },
    enableSecondAddressPicker() {
      return this.filterPatient['address']['first'] === "";
    },
    monitorPatntsList() {
      return this.ptList.items.filter( x => x.monitoring).map( x => x.ptId);
    },
  },
  //정예준
  watch: {
    checkedPatients() {
      this.allPatientsSelected = this.checkedPatients.length === this.patientData.length;
      if (!this.patientData.length) {
        this.allPatientsSelected = false;
      }
    },
    severPts(newValue) {
        this.filterPatient.monitoring = newValue;
    },
    'newPt.natiCd': function (newNatiCd) {
      if (newNatiCd === 'NATI0001') {
        this.newPt.natiNm = '대한민국';
      } else {
        this.newPt.natiNm = null;
      }
    }
  },
  methods: {
    toggleCheckbox,
    getDt,
    backBtn,
    goAsgn,
    getAge,
    getGndr,
    openPopup,
    getTag,
    getTelno,
    getTLDt,
    getTLIcon,
    openAddressFinder,
    regNewPt,
    validateInput(idx) {
      if (idx === 0) {
        this.spInfo.nok1Telno = this.spInfo.nok1Telno.replace(/[^0-9]/g, '')
        this.spInfo.nok2Telno = this.spInfo.nok2Telno.replace(/[^0-9]/g, '')
        this.spInfo.chrgTelno = this.spInfo.chrgTelno.replace(/[^0-9]/g, '')
      } else if (idx === 1) {
        this.newPt.mpno = this.newPt.mpno.replace(/[^0-9]/g, '')
        this.newPt.telno = this.newPt.telno.replace(/[^0-9]/g, '')
      } else if (idx === 2){
        this.newPt.rrno1 = this.newPt.rrno1.replace(/[^0-9]/g, '')
        this.newPt.rrno2 = this.newPt.rrno2.replace(/[^0-9]/g, '')
      }
    },
    getSecondAddress(address) {
      if (address) {
        this.$store.dispatch('admin/getGuGun', address);
      }
    },
    regStrtPoint(){
      console.log(this.spInfo)
    },
    getMedInst(){
      let data = this.medinstInfo
      data['instTypeCd'] = 'ORGN0003'
      this.$store.dispatch('admin/getOrganMedi',data)
    },
    setSpAddr(idx) {
      console.log(this.spInfo )
      console.log(this.dsInfo)
      console.log(this.newPt)
      if (idx === 0) {
        /* 자택 주소*/

        this.spInfo.dprtDstrZip = this.newPt.zip
        this.spInfo.dprtDstrBascAddr = this.newPt.bascAddr
        this.spInfo.dprtDstrDetlAddr = this.newPt.detlAddr
      } else if (idx === 1) {
        /*병원 주소 */
        this.spInfo.dprtDstrZip = this.dsInfo.instZip
        this.spInfo.dprtDstrBascAddr = this.dsInfo.instBascAddr
        this.spInfo.dprtDstrDetlAddr = this.dsInfo.instDetlAddr
      } else {
        /*기타*/
        this.spInfo.dprtDstrZip = ''
        this.spInfo.dprtDstrBascAddr = ''
        this.spInfo.dprtDstrDetlAddr = ''
      }
    },
    changeDstrCd1() {
      this.getSecondAddress(this.filterPatient['address']['first']);
      this.filterPatient['address']['second'] = '';
      this.filterPatient['hospitalName'] = null;
      this.search();
    },
    changeDstrCd2() {
      this.getHospList();
      this.filterPatient['hospitalName'] = null;
      this.search();
    },
    getHospList() {
      this.$store.dispatch('patnt/getHospList', this.filterData);
      console.log(this.hospList)
    },
    async updateExistPt() {
      const data = {ptId: this.existPt.ptId, newPt: this.newPt};
      await this.$store.dispatch('patnt/modiPtInfo', data);
      this.closePopup(0);
      this.tab = 1;
      this.showModal=0
      this.closeModal(0)
      //this.clearNewPt()
    },
    getDate(data) {
      const dData = new Date(data);
      const dYear = dData.getFullYear();
      let dMonth = dData.getMonth() + 1;
      let dDate = dData.getDate();

      if (dMonth < 10) {
        dMonth = '0' + dMonth;
      }
      if (dDate < 10) {
        dDate = '0' + dDate;
      }
      return dYear + '.' + dMonth + '.' + dDate;
    },
    getUndrDses,
    alertOpen(idx) {
      this.cncBtn = false
      if (idx === 0) {
        this.errMsg = '병상을 요청하시겠습니까?'
        this.cncBtn = true
        this.isAlert = true
        this.alertIdx = 0
      } else if (idx === 1) {
        this.svInfo.undrDsesCd = this.getUndrDses(this.svInfo.undrDsesCd)
        const data = { svrInfo: this.svInfo, dprtInfo: this.spInfo }
        console.log(data)
        this.$store.dispatch('bedasgn/regBedassign', data)
        this.isAlert = false
        this.errMsg = '요청되었습니다.'
        this.isAlert = true
        this.alertIdx = 1
      } else if (idx === 2) {
        this.alertClose()
        this.showPatnt = false
        this.closeModal(0)
        this.preRpt=null
        //this.undrDsesCdArr=[]
        this.setNull()
        /*신규병상요청 끝*/
        //this.getBdList()
      } else if (idx === 3) {
        this.errMsg = '환자 정보가\n등록되었습니다.';
        this.isAlert = true;
        this.alertIdx = 3;
      } else if (idx === 4) {
        /*역조서 파싱 */
        this.errMsg =
            '역학조사서 파일 기반으로\n환자정보를 자동입력 하였습니다.\n내용을 확인해주세요.';
        this.isAlert = true;
        this.newPt = {...this.rptInfo, bascAddr: this.rptInfo.baseAddr, undrDsesCd: [], undrDsesEtc: null}
        console.log(this.newPt)
        this.alertIdx = 4;
      } else if (idx === 9) {
        /*역조서 삭제*/
        this.errMsg = '역학조사서 이미지를\n삭제하시겠습니까?';
        this.cncBtn = true;
        this.isAlert = true;
        this.alertIdx = 9;
      } else if (idx === 10) {
        this.errMsg = '역학조사서가\n삭제되었습니다.';
        this.isAlert = true;
        this.alertIdx = 10;
      }
    },
    setNull() {
      console.log('실행' +this.initNewPt)
      this.tab = 0
      this.tabidx = 0
      this.popup = 100
      this.alertIdx = 100
      this.rptYn = false
      this.newPt = JSON.parse(JSON.stringify(this.initNewPt));
      this.dsInfo = JSON.parse(JSON.stringify(this.initDsInfo));
      //this.svInfo = this.initSvInfo
      //this.spInfo =  this.initSpInfo
      this.$store.commit('patnt/setRpt',null)
      this.preRpt=null
      this.undrDsesCdArr=[]
    },
    cfrmAl(res) { if (res === 0) {
      console.log(0)
      this.alertOpen(1)
    } else if (res === 1) {
      console.log('1')
      this.alertOpen(2)
    } else if (res === 3) {
        this.alertClose();
      } else if (res === 4) {
        this.alertClose();
      } else if (res === 9) {
        this.removeRpt();
        this.newPt = this.initNewPt;
        this.dsInfo = this.initDsInfo;
        this.alertClose();
        this.alertOpen(10);
      } else if (res === 10) {
        this.alertClose();
      }
    },
    closePopup(idx) {
      if (idx === 0) {
        this.popup = 100;
        this.content = '';
        this.characterCount = 0;
      }
    },
    closeModal(idx) {
      if (idx === 0) {
        /*세부내용 모달*/
        this.showModal = 0
        {
          this.$store.commit('bedasgn/setDisesInfo', null)
          this.$store.commit('bedasgn/setTimeline', null)
          this.$store.commit('patnt/setBasicInfo', null)
          this.$store.commit('patnt/setRpt', null)
          this.reportFile = null
        }
      }
    },
    alertClose() {
      this.errMsg = '';
      this.cncBtn = false;
      this.isAlert = false;
      this.alertIdx = 100;
    },
    async uploadRpt(event) {
      const fileInput = event.target;
      const file = fileInput.files[0];

      console.log(file);
      const formData = new FormData();
      formData.append('param1', 'edidemreport');
      formData.append('param2', file);

      await this.$store.dispatch('patnt/uploadRpt', formData);
      if (this.rptInfo !== null) {
        // console.log('실행')
        this.alertOpen(4);
      }
      //역조서 이미지 미리보기 만들기
      await this.showImage(this.rptInfo.attcId)
    },
    removeRpt() {
      /*역조서 삭제*/
      this.$store.dispatch('patnt/removeRpt', this.rptInfo.attcId);
      this.preRpt = null;
    },
    cmpExist(idx) {
      const isMatch = (a, b) => a === b;
      const res1 = ['일치', 'bg-primary'];
      const res2 = ['불일치', 'bg-gray-400'];

      switch (idx) {
        case 0:
          return isMatch(this.existPt.ptNm, this.newPt.ptNm) ? res1 : res2;
        case 1:
          return isMatch(this.existPt.rrno1, this.newPt.rrno1) &&
          isMatch(this.existPt.rrno2, this.newPt.rrno2) ? res1 : res2;
        case 2:
          return isMatch(this.existPt.dstr1Cd, this.newPt.dstr1Cd) &&
            isMatch(this.existPt.dstr2Cd, this.newPt.dstr2Cd)? res1 : res2;
        default:
          return isMatch(this.existPt.mpno, this.newPt.mpno) ? res1 : res2;
      }
    },
    async selectPatient(patient) {
      if (patient['bdasSeq']) {
        await this.$store.dispatch('bedasgn/getTimeline', patient);
        await this.$store.dispatch('bedasgn/getDSInfo', patient);
      } else {
        this.$store.commit('bedasgn/setTimeline', null);
        this.$store.commit('bedasgn/setDisesInfo', null);
      }
      await this.$store.dispatch('patnt/getBasicInfo', patient);
      await this.$store.dispatch('bedasgn/getBdasHisInfo', patient);

      if (this.ptDetail !== null) {
        this.newPt = this.ptDetail;
      }
      if (this.ptDs !== null) {
        this.dsInfo = this.ptDs;
      }
      this.preRpt = this.attcRpt;

      this.showModal = 1;
    },
    changePage(newPage) {
      this.$store.dispatch('patnt/getPatntList', {
        ...this.filterData,
        page: newPage
      });
      this.page = newPage;
    },
    edit() {
      console.log(this.patientData);
    },
    allCodesChangeState() {
      if (this.allPatientsSelected) {
        this.checkedPatients = [];
        this.patientData.forEach((patient) => this.checkedPatients.push(patient));
      } else {
        this.checkedPatients = [];
      }
    },
    search() {
      console.log(this.filterPatient['assignmentStatus']);
      this.$store.dispatch('patnt/getPatntList', this.filterData);
      this.page = 1;
    },
    async showPatntModal(patient,idx) {
      await this.$store.dispatch('patnt/getBasicInfo', patient);
      if (this.ptDetail !== null) {
        this.newPt = this.ptDetail;
        console.log(this.newPt)
      }
      await this.showImage(this.newPt.attcId)
      if(idx === 2){
        this.showModal = idx
      } else {
        this.showPatnt = true
      }
    },
    async showImage(attcId) {
      if (attcId === null || attcId === '') {
        this.epidReportImage = '';
      } else {
        await this.$store.dispatch('user/readPrivateImage', attcId)
          .then((result) => {
            const blob = new Blob([result], { type: 'image/jpeg' })
            this.epidReportImage = URL.createObjectURL(blob)
          })
          .catch((error) => {
            console.error("An error occurred while fetching the image:", error);
          })
      }
    },
    closePatntRequest(){
      this.showPatnt = false
    },
    clearNewPt() {
      this.newPt = {
        ptNm: '', gndr: null, rrno1: null, rrno2: null,
        dethYn: '', natiCd: '', natiNm: '대한민국',
        dstr1Cd: '', dstr2Cd: '', telno: '', picaVer: null,
        nokNm: '', mpno: '', job: '', attcId: null,
        bascAddr: '', detlAddr: '', zip: '',
        undrDsesCd: [], undrDsesEtc: null,
      }
      this.preRpt = null;
      this.epidReportImage = '';
    },
    timelineSection() {
      this.model.mode = 'timeline';
    },
    showImageLightBox() {
      this.imgsRef = this.epidReportImage
      this.visibleRef = true
    },
    onHide() {
      this.visibleRef = false
    },
    setDefaultDstr1Cd() {
      this.filterPatient.address.first = this.userInfo.dutyDstr1Cd
      if (this.userInfo.dutyDstr1Cd) {
        this.getSecondAddress(this.userInfo.dutyDstr1Cd);
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal {
  --bs-modal-width: 98%;
    display: block;
}
.modal.show {
    background-color: rgba(0,0,0,0.4);
    display: block;
}
.item-box.suspend {
  border: 3px solid #74afeb !important;
  background-color: #74afeb33;
}

.popup {
  display: block;
}

.chart-container {
  min-height: initial;
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

.detail-foot-box {
  position: absolute;
  bottom: 0;
  width: 100%;
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

.btn-primary-outline {
  border: 1px solid #82b7ed;
  color: #82b7ed;
  background-color: #fff;
  margin-left: 12px;
  border-radius: 19px;
  padding: 4px 9px 4px 6px;
}

td > .btn-primary-outline {
  width: 85px;
}

.pt-nm {
  line-height: 24px;
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

.chart-apex {
  width: 100%;
  position: absolute;
  left: 0;
  top: 100px;
  height: 350px;
  background-color: white;
}
</style>
