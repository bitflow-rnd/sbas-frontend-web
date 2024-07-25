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
              <li class="breadcrumb-item text-gray-700 fw-semibold lh-1 mx-n1 fs-6">병상배정</li>
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
                  병상배정 현황
                </h1>
              </li>
              <li class="breadcrumb-item ml-2 ms-5">
                <span>내 기관에 할당된 병상배정 업무 목록을 표시합니다</span>
              </li>
              <div @click='getBdList' style='cursor: pointer; margin-left: 30px;'>
                <a class="btn btn-flex btn-sm btn-outline btn-outline-light fs-7">
                  <i class="fa-solid fa-arrows-rotate"></i> 새로고침
                </a>
              </div>
              <!--end::Item-->
            </ul>
            <!--end::Breadcrumb-->
          </div>
          <!--end::Page title-->
          <!--begin::Actions-->
          <div class="d-flex align-items-center gap-2 gap-lg-3">
            <a
              @click="openModal(0)"
              class="btn btn-sm btn-flex btn-primary align-self-center px-3"
              data-bs-target='#kt_modal_request'
            >
              <i class="fa-solid fa-plus"></i> 신규병상요청
            </a>
          </div>
          <!--end::Actions-->
        </div>
        <!--end::Toolbar wrapper-->
      </div>
      <!--end::Toolbar-->
      <!--begin::Content-->
      <div id="kt_app_content" class="app-content flex-column-fluid">
        <div class="card">
          <!--begin::Card header-->
          <div class="card-header border-0 p-8">
            <!--begin::Card toolbar-->
            <article class="table-form-layout1">
              <div class="form-head-box"></div>

              <div class="form-body-box">
                <div class="table-form-toggle-box">
                  <a class="table-form-toggle-btn" @click="toggleTable" role="button">
                    <i class="fa-solid" :class="showTable ? 'fa-angle-up' : 'fa-angle-down'"></i>
                  </a>
                </div>

                <div class="table-box with-toggle">
                  <table>
                    <colgroup>
                      <col style="width: 100px" />
                      <col style="width: 190px" />
                      <col style="width: 190px" />
                      <col style="width: 190px" />
                      <col style="width: 120px" />
                      <col style="width: 170px" />
                      <col style="width: 120px" />
                      <col style="width: auto" />
                    </colgroup>
                    <tbody>
                    <tr data-toggle="false">
                      <th>배정상태</th>
                      <td colspan="3">
                        <div class="item-row-box">
                          <article class="toggle-list-layout1">
                            <div class="toggle-list">
                              <div class="toggle-list">
                                <label>
                                  <input type='radio' name='state' v-model='search.bedStatCd'
                                         :value='null'
                                         @change='searchBedAsgn' checked />
                                  <span class='txt'>전체</span>
                                </label>
                              </div>
                              <div v-for='(item, idx) in bedStatCount'
                                   :key='idx' class="toggle-list">
                                <label>
                                  <input
                                    type='radio'
                                    name='state'
                                    v-model='search.bedStatCd'
                                    :value='this.filter.selectedStates[idx]'
                                    @change='searchBedAsgn' /><i></i>
                                  <span class='txt'>{{ this.filter.states[idx].label }}
                                    <span class='cnt ms-1'
                                          style='color: rgb(255, 102, 110)'>
                                      &nbsp;&nbsp;&nbsp;{{ item.count }}
                                    </span>
                                  </span>
                                </label>
                              </div>
                            </div>
                          </article>
                        </div>
                      </td>

                      <td colspan="3" style='padding-left: 0'>
                        <div class="item-cell-box full">
                          <div class="tbox full with-btn">
                            <input
                              type="text"
                              v-model='search.kwd'
                              placeholder="환자이름, 생년월일6자리 또는 휴대폰번호"
                              @keyup.enter='searchBedAsgn'
                            />

                            <a @click='searchBedAsgn' role='button' class="input-btn">
                              <i class="fa-solid fa-magnifying-glass"></i>
                            </a>
                          </div>

<!--                          <div class="sbox w-150px ms-5">-->
<!--                            <select v-model='search.period' @change="searchBedAsgn">-->
<!--                              <option value=''>전체</option>-->
<!--                              <option value='7'>최근 1주</option>-->
<!--                              <option value='30'>최근 1개월</option>-->
<!--                              <option value='90'>최근 3개월</option>-->
<!--                              <option value='180'>최근 6개월</option>-->
<!--                              <option value='365'>최근 1년</option>-->
<!--                            </select>-->
<!--                          </div>-->
                        </div>
                      </td>
                    </tr>

                    <tr v-show="showTable">
                      <th>환자유형</th>
                      <td colspan="3">
                        <div class="item-row-box">
                          <div class="item-cell-box">
                            <div class="cbox">
                              <label>
                                <input v-model='search.ptTypeCd' value='PTTP0001' type="checkbox" name="type2" /><i></i>
                                <span class="txt">일반</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.ptTypeCd' value='PTTP0002' type="checkbox" name="type2"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">소아</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.ptTypeCd' value='PTTP0004' type="checkbox" name="type2"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">임산부</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.ptTypeCd' value='PTTP0003' type="checkbox" name="type2"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">투석</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.ptTypeCd' value='PTTP0006' type="checkbox" name="type2"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">인공호흡기</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.ptTypeCd' value='PTTP0005' type="checkbox" name="type2"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">수술</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.ptTypeCd' value='PTTP0007' type="checkbox" name="type2"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">적극적 치료요청</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.ptTypeCd' value='PTTP0008' type="checkbox" name="type2"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">신생아</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </td>

                      <th>중증도</th>
                      <td colspan="3">
                        <div class="item-row-box">
                          <div class="item-cell-box">
                            <div class="cbox" :class='{"ms-4": idx > 0 }' v-for='(item, idx) in svrtTypeCd' :key='idx'>
                              <label>
                                <input v-model='search.svrtTypeCd' :value='item.cdId' type="checkbox"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">{{ item.cdNm }}</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr v-show="showTable">
                      <th>병상유형</th>
                      <td colspan="3">
                        <div class="item-row-box">
                          <div class="item-cell-box">
                            <div class="cbox">
                              <label>
                                <input v-model='search.reqBedTypeCd' value='BDTP0003' type="checkbox" name="type2"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">음압격리</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.reqBedTypeCd' value='BDTP0002' type="checkbox" name="type2"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">일반격리</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.reqBedTypeCd' value='BDTP0006' type="checkbox" name="type2"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">일반</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.reqBedTypeCd' value='BDTP0005' type="checkbox" name="type2"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">소아음압격리</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.reqBedTypeCd' value='BDTP0004' type="checkbox" name="type2"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">소아일반격리</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.reqBedTypeCd' value='BDTP0007' type="checkbox" name="type2"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">소아</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </td>

                      <th>성별</th>
                      <td>
                        <div class="item-row-box">
                          <div class="item-cell-box">
                            <div class="cbox">
                              <label>
                                <input v-model='search.gndr' value='남' type="checkbox" name="type3"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">남자</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.gndr' value='여' type="checkbox" name="type3"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">여자</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </td>

                      <th>나이 (만)</th>
                      <td>
                        <div class="item-row-box">
                          <div class="item-cell-box">
                            <div class="tbox w-50px me-2">
                              <input v-model='search.toAge' type="text" class="px-2 text-center" placeholder="숫자"
                                     @input="searchBedAsgn" />
                            </div>
                            <span class="text-gray-600">이상 ~</span>
                            <div class="tbox w-50px mx-2">
                              <input v-model='search.fromAge' type="text" class="px-2 text-center" placeholder="숫자"
                                     @input="searchBedAsgn" />
                            </div>
                            <span class="text-gray-600">이하</span>
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
            <h5 class="d-flex">
              <div class="flex-grow-1 d-flex fs-16px">
                <div>검색결과</div>
                <div class="badge ms-2 rounded-pill bg-primary fs-14px px-2">
                  {{ bdListWeb.count }}
                </div>
              </div>
            </h5>

            <article v-if="bdListWeb === []" class="table-list-layout1">
              <div class="table-body-box">
                <div class="table-nodata py-40">
                  <div class="img-box">
                    <img src="/img/common/img_nodata.svg" alt="이미지" />
                  </div>

                  <div class="txt-box pt-10">조회 결과가 없습니다.</div>
                </div>
              </div>
            </article>
            <article v-if="bdListWeb !== []" class="table-list-layout1">
              <div class="table-body-box">
                <div class="table-box with-scroll small">
                  <table class="list-table-hoverable">
                    <colgroup>
                      <col style="width: 100px" />
                      <col style="width: 100px" />
                      <col style="width: 100px" />
                      <col style="width: 100px" />
                      <col style="width: 100px" />
                      <col style="width: 100px" />
                      <col style="width: 100px" />
                      <col style="width: 100px" />
                      <col style="width: 300px" />
                      <col style="width: 140px" />
                      <col style="width: 100px" />
                    </colgroup>
                    <thead>
                    <tr class="small" style='cursor:default !important'>
                      <th>배정상태</th>
                      <th>환자이름</th>
                      <th>성별</th>
                      <th>나이</th>
                      <th>진단명</th>
                      <th>중증도</th>
                      <th>병상유형</th>
                      <th>환자유형</th>
                      <th>주소</th>
                      <th>업데이트일시</th>
                      <th>작업</th>
                    </tr>
                    </thead>

                    <tbody v-if="bdListWeb.count === 0">
                    <tr>
                      <td colspan="15">내역이 없습니다</td>
                    </tr>
                    </tbody>

                    <tbody v-if="bdListWeb.count !== 0">
                    <tr v-for="(item, i) in bdListWeb.items" :key="i" @click='openBedMod(item)'>
                      <td>{{ item.bedStatCdNm }}</td>
                      <td>{{ maskingNm(item.ptNm) }}</td>
                      <td>{{ item.gndr }}자</td>
                      <td>
                        {{ item.rrno1 ? item.rrno1.slice(0, 2) + '.' + item.rrno1.slice(2, 4) + '.' + item.rrno1.slice(4) : '-' }}
                      </td>
                      <td>{{ item.diagNm ? item.diagNm : '-' }}</td>
                      <td>{{ item.svrtTypeCdNm ? item.svrtTypeCdNm : '-' }}</td>
                      <td>{{ reqBedType[item.reqBedTypeCd] }}</td>
                      <td>{{ getTag(item.ptTypeCdNmTagList) }}</td>
                      <td class="text-start">{{ item.bascAddr }}</td>
                      <td v-html='getDtBlue(item.updtDttm)'></td>
                      <td>
                        <a v-if="!(item.bedStatCd==='BAST0007' || item.bedStatCd==='BAST0008')"
                          class="btn btn-flex btn-xs btn-outline btn-outline-primary justify-content-center"
                          :style="{color: getBtnColor(item.bedStatCd)}"
                        >{{ getBtn(item.bedStatCd)[0] }}</a
                        >
                        <div v-if="item.bedStatCd==='BAST0007' || item.bedStatCd==='BAST0008'">
                          {{ getBtn(item.bedStatCd)[0] }}
                        </div>
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
              :data-length="bdListWeb.count"
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

  <!--begin::Modals-->
  <!--  신규병상요청 0  -->
  <div class="modal fade" id="kt_modal_request" tabindex="-1" aria-hidden="true" :class="{'show' : showModal===0}"
       v-show="showModal===0">
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-1500px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--    Progress Loader      -->
        <div class="d-flex justify-content-center m-5 spinner" v-if="isSpinner===1">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <h2>병상요청</h2>
          <CloseButton @close="closeModal(0)" />

          <article class="floating-request-box">
            <div class="img-box">
              <img src="/img/common/ic_request_patient.svg" alt="이미지" />
            </div>
            <div v-show="ptBI === null && rptInfo === null" class="txt-box">신규 환자 등록</div>
            <div v-if="newPt.mpno" class="txt-box">
              {{ newPt.ptNm }}
              <span class="text-gray-600 fw-normal"
              >({{ newPt.gndr }} / {{ getAge(newPt.rrno1, newPt.rrno2) }}세 /
                {{ newPt.bascAddr }} / {{ getTelno(newPt.mpno) }})</span
              >
            </div>
            <div v-show="tab !== 1 && undrDsesCdArr !== []" class="txt-box">
              <span class="text-primary">{{ showUdrDses(undrDsesCdArr) }}</span>
            </div>
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
                    환자정보 입력,<br />
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
                            <col style="width: 363px" />
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
                                    <img v-if="preRpt===null" src='@/assets/img/img-no-img.webp' class="no-img" />
                                    <img v-if='preRpt !== null' :src="preRpt?preRpt:'/img/img-no-img.webp'" class="has-img" @click='showImageLightBox' onerror="this.src='/img/img-no-img.webp'"/>

                                    <a @click="alertOpen(9)" class="remove-btn">
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
                                        <input type="file" @change="uploadRpt" />
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
                            <col style="width: 168px" />
                            <col style="width: auto" />
                            <col style="width: 168px" />
                            <col style="width: auto" />
                          </colgroup>
                          <tbody>
                          <tr>
                            <th>환자이름 <span class="text-primary">*</span></th>
                            <td>
                              <div class="item-cell-box">
                                <div class="tbox">
                                  <input type="text" v-model="newPt.ptNm" placeholder='환자이름 입력' />
                                </div>
                              </div>
                              <div v-if="false" class="item-cell-box full">
                                <div class="text-danger pt-2 fs-12px">
                                  ※ 이름 유효성 확인 문구
                                </div>
                              </div>
                            </td>
                            <th>성별</th>
                            <td v-if="newPt.rrno2 !== undefined">{{ getGndr(newPt.rrno2) }}</td>
                          </tr>

                          <tr>
                            <th>주민등록번호 <span class="text-primary">*</span></th>
                            <td>
                              <div class="item-row-box">
                                <div class="item-cell-box">
                                  <div class="tbox">
                                    <input @input="validateInput(2)" type="text" v-model="newPt.rrno1" maxlength="6" />
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
                              <div v-if="false" class="item-row-box">
                                <div class="text-danger pt-2 fs-12px">* 주민등록번호 입력</div>
                              </div>
                            </td>
                            <th>나이 (만)</th>
                            <td v-if="newPt.rrno1 !== undefined && newPt.rrno2 !== undefined">
                              {{ getAge(newPt.rrno1, newPt.rrno2) }}
                            </td>
                          </tr>

                          <tr>
                            <th rowspan="3">주소 <span class="text-primary">*</span></th>
                            <td rowspan="3">
                              <div class="item-row-box">
                                <div class="item-cell-box full">
                                  <div class="tbox full">
                                    <input type="text" v-model="newPt.zip" readonly />
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
                                    <input type="text" v-model="newPt.bascAddr" />
                                  </div>
                                  <div class="item-note-box flex-shrink-0 ms-2 text-black"></div>
                                </div>
                              </div>

                              <div class="item-row-box">
                                <div class="item-cell-box full">
                                  <div class="tbox full">
                                    <input type="text" v-model="newPt.detlAddr" />
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
                                  <input
                                    type="text"
                                    @input="validateInput(1)"
                                    v-model="newPt.mpno"
                                    maxlength="11"
                                  />
                                </div>
                              </div>
                              <div v-if="false" class="item-cell-box full">
                                <div class="text-danger pt-2 fs-12px">
                                  ※ 전화번호 유효성 확인 문구
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>보호자 이름</th>
                            <td>
                              <div class="item-cell-box full">
                                <div class="tbox full">
                                  <input type="text" v-model="newPt.nokNm" />
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>전화번호</th>
                            <td>
                              <div class="item-cell-box full">
                                <div class="tbox full">
                                  <input
                                    type="text"
                                    @input="validateInput(1)"
                                    v-model="newPt.telno"
                                  />
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
                                  <input type="text" v-model="newPt.job" />
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
                          </tbody>
                        </table>
                      </form>
                    </div>
                  </article>
                </div>
              </div>

              <article class="modal-menu-layout1 pt-10">
                <div class="modal-menu-list">
                  <a @click="openPopup(0)" class="modal-menu-btn menu-primary">다음</a>
                </div>
              </article>
            </div>

            <div class="tabs-box" v-show="tab === 1" style="display: none">
              <div class="d-flex justify-content-end text-danger pb-2">* 필수 입력 항목</div>

              <article class="table-form-layout1">
                <div class="form-head-box"></div>

                <div class="form-body-box">
                  <form class="table-box">
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
                                <select v-model="medinstInfo.dstr1Cd" @change="getMedInst"
                                        :disabled='dsInfo.rcptPhc===1'>
                                  <option value=''>지역 선택</option>
                                  <option v-for='(item,i) in cmSido' :key='i' :value='item.cdId'>{{ item.cdNm }}
                                  </option>
                                </select>
                              </div>
                              <div class="sbox ms-3" style="width: 170px">
                                <select v-model="dsInfo.rcptPhc" :disabled="medinstInfo.dstr1Cd===''">
                                  <option value='0'>보건소 선택</option>
                                  <option v-for="(item,i) in organMedi" :key="i"
                                          :value='item.instNm'>{{ item.instNm }}
                                  </option>
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
                            <div class="upload-result-wrap">
                              <div class="img-upload-result">
                                <div class="img-list"></div>
                              </div>
                            </div>

                            <div class="upload-form-wrap" style="height: 70px">
                              <div class="no-file-box">
                                <div class="img-box">
                                  <img src="/img/common/ic_img_upload.svg" alt="이미지" />
                                </div>
                                <div class="txt-box">첨부할 파일들을 여기로 끌어 놓으세요</div>
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
                  <router-link to="" @click="backBtn(0)" class="modal-menu-btn menu-cancel"
                  >이전
                  </router-link
                  >
                  <router-link to="" @click="goAsgn(2)" class="modal-menu-btn menu-primary"
                  >다음
                  </router-link
                  >
                </div>
              </article>
            </div>

            <div class="tabs-box" v-show="tab === 2" style="display: none">
              <div class="d-flex justify-content-end text-danger pb-2">* 필수 입력 항목</div>

              <article class="table-form-layout1">
                <div class="form-head-box"></div>

                <div class="form-body-box">
                  <form class="table-box">
                    <table>
                      <colgroup>
                        <col style="width: 168px" />
                        <col style="width: 168px" />
                        <col style="width: auto" />
                        <col style="width: 168px" />
                        <col style="width: auto" />
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
                                  value="PTTP0001"
                                  v-model="svInfo.ptTypeCd"
                                /><i></i>
                                <span class="txt">일반</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input
                                  type="checkbox"
                                  name="type2_2"
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
                                    v-model="undrDsesCdArr"
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
                                    v-model="undrDsesCdArr"
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
                                    v-model="undrDsesCdArr"
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
                                    v-model="undrDsesCdArr"
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
                                    v-model="undrDsesCdArr"
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
                                    v-model="undrDsesCdArr"
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
                                    v-model="undrDsesCdArr"
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
                                    v-model="undrDsesCdArr"
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
                                    v-model="undrDsesCdArr"
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
                                    v-model="undrDsesCdArr"
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
                                    v-model="undrDsesCdArr"
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
                                    v-model="undrDsesCdArr"
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
                                    v-model="undrDsesCdArr"
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
                                      v-model="undrDsesCdArr"
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
                          <div v-if='validateInput(3)' class="item-cell-box full">
                            <div class='text-danger pt-2 fs-12px'>
                              * 요청 병상 유형을 선택해주세요
                            </div>
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
                          <div v-if='validateInput(4)' class="item-cell-box full">
                            <div class='text-danger pt-2 fs-12px'>
                              * DNR 동의여부를 선택해주세요
                            </div>
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
                          <div v-if='validateInput(5)' class="item-cell-box full">
                            <div class='text-danger pt-2 fs-12px'>
                              * 중증 정보를 선택해주세요
                            </div>
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
                              <input type="number" placeholder="" v-model="bioAnlys.bdTemp" />
                            </div>
                          </div>
                        </td>
                        <th>맥박(회/분)</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input type="number" placeholder="" v-model="bioAnlys.pulse" />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr v-show="svInfo.svrtIptTypeCd === 'SVIP0002'">
                        <th>분당호흡수(회/분)</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input type="number" placeholder="" v-model="bioAnlys.breath" />
                            </div>
                          </div>
                        </td>
                        <th>산소포화도(%)</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input type="number" placeholder="" v-model="bioAnlys.spo2" />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr v-show="svInfo.svrtIptTypeCd === 'SVIP0002'">
                        <th>수축기혈압(mmHg)</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input type="number" placeholder="" v-model="bioAnlys.sbp" />
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
                  <form class="table-box">
                    <table>
                      <colgroup>
                        <col style="width: 168px" />
                        <col style="width: auto" />
                        <col style="width: 168px" />
                        <col style="width: auto" />
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
                                @input="validateInput(0)"
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
                                @input="validateInput(0)"
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
                                @input="validateInput(0)"
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
                  </router-link>

                  <router-link to="" @click="goAsgn(5)" class="modal-menu-btn menu-primary"
                  >병상요청완료
                  </router-link>
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

  <!--  추천병원선택 1  -->
  <RcmdHospModal v-if='this.showRcmdHospModal' :bd-detail='this.bdDetail'
                @closeModal='closeRcmdHospModal()' @returnToList='returnToList()' />

  <!--  병상배정 세부 내용 2 -->
  <BdasDetailModal v-if='this.showModal === 2' :bd-detail='this.bdDetail' :pt-detail='this.ptDetail'
                   :pt-ds='ptDs' :timeline='this.timeline' :trans-info='this.transInfo' :trsfInfo='this.trsfInfo'
                   :trans-condition1='transCondition1' :trans-condition2='transCondition2' :user-info='userInfo'
                   @open-rcmd-hosp-modal='openRcmdHospModal()'
                   @close-modal='closeModal(2)' />

  <!--  alert창  -->
  <article v-show="isAlert" class="popup popup-confirm" style="z-index: 1600">
    <div class="popup-wrapper">
      <div class="popup-contents py-10 px-10" style="width: 300px">
        <article class="modal-alert-layout pb-10">
          <div class="alert-view-box pb-6">
            <img src="/img/common/ic_alert.svg" alt="이미지" />
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

  <!--  역학조사서 비교   -->
  <article v-show="popup === 1" class="popup popup-update-check">
    <div class="popup-wrapper">
      <div class="popup-contents py-10 px-10" style="width: 300px">
        <article class="modal-alert-layout pb-10">
          <div class="alert-view-box pb-6"><img src="/img/common/ic_alert.svg" alt="이미지" /></div>
          <div class="alert-msg-box">
            등록된 환자의 이름 또는 주민등록번호가<br />역학조사서의 내용과 다릅니다.<br />내용을
            확인해주세요.
          </div>
        </article>
        <article class="modal-menu-layout1">
          <div class="modal-menu-list">
            <a
              href="javascript:popupClose('update-check')"
              class="modal-menu-btn menu-cancel"
              data-type="cancel"
            >이전</a
            >
            <a
              href="javascript:popupClose('update-check'); popupClose('exist'); alertPopupOpen('환자 정보가</br>등록되었습니다.')"
              class="modal-menu-btn menu-primary"
              data-type="success"
            >신규등록</a
            >
          </div>
        </article>
      </div>
    </div>
  </article>

</template>

<script>
import DataPagination from '@/components/user/cpnt/DataPagination.vue'
import { mapState, useStore } from 'vuex'
import { ref } from 'vue'
import {
  getAge,
  getDtBlue,
  getGndr,
  getSido,
  getTag,
  getTelno,
  getUndrDses,
  goAsgn,
  maskingNm,
  openAddressFinder,
  openPopup,
  regNewPt,
  reqBedType
} from '@/util/ui'
import user from '@/store/modules/user'
import MyInfoModal from '@/components/user/modal/MyInfoModal.vue'
import CloseButton from '@/components/common/CloseButton.vue'
import BdasDetailModal from '@/components/user/bdas/BdasDetailModal.vue'
import RcmdHospModal from '@/components/user/bdas/RcmdHospModal.vue'

export default {
  components: { RcmdHospModal, BdasDetailModal, CloseButton, MyInfoModal, DataPagination },
  name: 'ListBed',
  props: {},

  created() {
    this.getBdList()
    this.initNewPt = JSON.parse(JSON.stringify(this.newPt))
    this.initDsInfo = JSON.parse(JSON.stringify(this.dsInfo))
    this.initSvInfo = JSON.parse(JSON.stringify(this.svInfo))
    this.initSpInfo = JSON.parse(JSON.stringify(this.spInfo))
    this.initSearch = JSON.parse(JSON.stringify(this.search))
  },
  mounted() {
    this.initNaverMap()
  },
  setup() {
    const showTable = ref(false)
    const trsfArr = ref([false, false, false, false])
    const toggleTable = function() {
      showTable.value = !showTable.value
    }
    const isAlert = ref(false)
    const cncBtn = ref(false)
    const errMsg = ''
    const store = useStore()
    return {
      showTable,
      trsfArr,
      isAlert,
      errMsg,
      cncBtn /* alert 취소버튼 유무 */,
      toggleTable,
      store
    }
  },
  watch: {},
  data() {
    return {
      sortedList: [],
      reqBedType,
      displayChangePageButtonsCount: 10,
      previousPageButtonsCount: 4,
      nextPageButtonsCount: 4,
      displayRowsCount: 15,
      page: 1,
      showModal: null,
      transCondition1: false,
      transCondition2: false,
      allChked: false,
      mode: '',
      filter: {
        states: [
          { label: '승인대기', value: 'BAST0003' },
          { label: '배정대기', value: 'BAST0004' },
          { label: '이송대기', value: 'BAST0005' },
          { label: '이송중', value: 'BAST0006' },
          { label: '완료', value: 'BAST0007,BAST0008' },
        ],
        selectedStates: ['BAST0003', 'BAST0004', 'BAST0005', 'BAST0006', 'BAST0007,BAST0008'],
        selectedRow: 0
      },
      search: {
        kwd: '',
        period: '',
        reqBedTypeCd: [],
        ptTypeCd: [],
        svrtTypeCd: [],
        fromAge: null,
        toAge: null,
        gndr: [],
        page: 1,
        bedStatCd: null
      },
      svrtTypeCd: this.store.getters['common/getSeverityType'],
      preRpt: null,
      selectedFile: true,
      imgUrl: null,
      tab: 0 /* 병상요청 */,
      tabidx: 0 /* 세부내용*/,
      popup: 100 /* 팝업창 */,
      alertIdx: 100 /* alert창 확인버튼 */,
      rptYn: false /* 역조서 유무 */,
      medinstInfo: {
        dstr1Cd: ''
      },
      newPt: {
        ptNm: '',
        rrno1: '',
        rrno2: '',
        gndr: '',
        zip: '',
        bascAddr: '',
        detlAddr: '',
        natiCd: '',
        picaVer: null,
        natiNm: '대한민국',
        attcId: null,
        dethYn: '',
        mpno: '',
        telno: ''
      },
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
        rcptPhc: 0
      },
      svInfo: {
        ptId: '',
        ptTypeCd: [],
        svrtIptTypeCd: 'SVIP0001',
        svrtTypeCd: null,
        undrsesCd: [],
        dnrAgreYn: null,
        reqBedTypeCd: null
      },
      showErrorMessage: null,
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
      trsfInfo: {
        instId: '',
        chfTelno: '',
        ptId: '',
        bdasSeq: '',
        ambsNm: '',
        crew1Id: '구급대원',
        crew2Id: '구급대원',
        crew3Id: '구급대원'
      },
      chrgUserId: [],
      undrDsesCdArr: [],
      visibleRef: false,
      imgsRef: '',
      indexRef: 0,
      showRcmdHospModal: false,
    }
  },
  computed: {
    user() {
      return user
    },
    ...mapState('bedasgn', [
      'bdList',
      'bdListWeb',
      'bdCnt',
      'bdDetail',
      'newPtInfo',
      'ptDs',
      'ptSv',
      'ptBio',
      'timeline',
      'rcmdModal',
      'rcmdHp',
      'transInfo',
      'bedStatCount',
    ]),
    ...mapState('patnt', ['existPt', 'ptBI', 'ptDetail', 'rptInfo', 'zip', 'isSpinner']),
    ...mapState('user', ['userInfo', 'chrgInfo']),
    ...mapState('admin', ['firestatnList', 'firemenList', 'medinstList', 'organMedi', 'cmSido']),
    filterData() {
      let params = {}
      if (this.search['kwd']) params = { ...params, ptNm: this.search['kwd'] }
      if (this.search['kwd']) params = { ...params, rrno1: this.search['kwd'] }
      if (this.search['kwd']) params = { ...params, mpno: this.search['kwd'] }
      if (this.search['period']) params = { ...params, period: this.search['period'] }
      if (this.search['fromAge']) params = { ...params, fromAge: this.search['fromAge'] }
      if (this.search['toAge']) params = { ...params, toAge: this.search['toAge'] }
      if (this.search['ptTypeCd'].length) params = { ...params, ptTypeCd: this.search['ptTypeCd'].join(',') }
      if (this.search['svrtTypeCd'].length) params = { ...params, svrtTypeCd: this.search['svrtTypeCd'].join(',') }
      if (this.search['reqBedTypeCd'].length) params = {
        ...params,
        reqBedTypeCd: this.search['reqBedTypeCd'].join(',')
      }
      if (this.search['gndr'].length) params = { ...params, gndr: this.search['gndr'].join(',') }
      params = { ...params, bedStatCd: this.search['bedStatCd'] }
      return params
    }
  },
  methods: {
    getSido,
    changePage(newPage) {
      this.$store.dispatch('bedasgn/getBdListWeb', {
        ...this.filterData,
        page: newPage
      })
      this.page = newPage
    },
    openModal(idx) {
      this.showModal = null
      this.showModal = idx
    },
    closeModal(idx) {
      if (idx === 0) {
        console.log(this.initNewPt, +'닫기')
        this.showModal = null
        this.setNull()
      } else if (idx === 2) {
        /*세부내용 모달*/
        this.showModal = null
        this.tabidx = 0
        this.$store.commit('bedasgn/setDisesInfo', null)
        this.$store.commit('bedasgn/setTimeline', null)
        this.$store.commit('patnt/setBasicInfo', null)
        this.$store.commit('patnt/setRpt', null)
        this.newPt = this.initNewPt
        this.dsInfo = this.initDsInfo
      } else {
        this.showModal = null
        this.getBdList()
      }
    },
    getBdList() {
      //this.search = this.initSearch
      this.$store.dispatch('bedasgn/getBdListWeb')
      this.$store.dispatch('bedasgn/getBedStatCount')
      console.log(this.bedStatCount)
    },
    searchBedAsgn() {
      this.$store.dispatch('bedasgn/getBdListWeb', this.filterData)
      this.page = 1
    },
    getMedInst() {
      let data = this.medinstInfo
      data['instTypeCd'] = 'ORGN0003'
      this.$store.dispatch('admin/getOrganMedi', data)
    },
    allChk() {
      this.sortedBdList.forEach((bdList) => {
        bdList.chked = this.allChked
      })
    },
    initNaverMap() {
      // 네이버 지도 API 로드
      const script = document.createElement('script')
      script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=1ewyt3v33o'
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    },
    getStrType() {
      console.log(this.dsInfo.admsYn)
      if (this.dsInfo.admsYn === '재택' || this.dsInfo.admsYn === '자택') {
        return 'DPTP0001'
      } else if (this.dsInfo.admsYn === '기타') {
        return 'DPTP0003'
      } else {
        return 'DPTP0002'
      }
    },
    showUdrDses(arr) {
      if (this.undrDsesCdArr.length !== 0) {
        const data = {
          'UDDS0001': '고혈압',
          'UDDS0002': '당뇨',
          'UDDS0003': '고지혈증',
          'UDDS0004': '심혈관',
          'UDDS0005': '뇌혈관',
          'UDDS0006': '암',
          'UDDS0007': '만성폐질환',
          'UDDS0008': '폐럼',
          'UDDS0009': '신장질환',
          'UDDS0010': '정신질환',
          'UDDS0011': '결핵',
          'UDDS0012': '천식 등 알레르기',
          'UDDS0013': '면역력저하자',
          'UDDS0014': '기타'
        }
        const res = []
        arr.forEach((key) => {
          if (Object.prototype.hasOwnProperty.call(data, key)) {
            res.push(data[key])
          }
        })
        return res
      } else return ''
    },
    getTelno,
    setNull() {
      console.log('실행' + this.initNewPt)
      this.tab = 0
      this.tabidx = 0
      this.popup = 100
      this.alertIdx = 100
      this.rptYn = false
      this.newPt = JSON.parse(JSON.stringify(this.initNewPt))
      this.dsInfo = JSON.parse(JSON.stringify(this.initDsInfo))
      this.svInfo = this.initSvInfo
      this.spInfo = this.initSpInfo
      this.$store.commit('patnt/setRpt', null)
      this.preRpt = null
      this.undrDsesCdArr = []
    },
    async alertOpen(idx) {
      this.cncBtn = false
      if (idx === 0) {
        this.errMsg = '병상을 요청하시겠습니까?'
        this.cncBtn = true
        this.isAlert = true
        this.alertIdx = 0
      } else if (idx === 1) {
        this.svInfo.undrDsesCd = this.getUndrDses(this.undrDsesCdArr)
        const data = { svrInfo: this.svInfo, dprtInfo: this.spInfo }
        console.log(data)
        this.$store.dispatch('bedasgn/regBedassign', data)
        this.isAlert = false
        this.errMsg = '요청되었습니다.'
        this.isAlert = true
        this.alertIdx = 1
      } else if (idx === 2) {
        this.alertClose()
        this.closeModal()
        this.preRpt = null
        this.undrDsesCdArr = []
        this.setNull()
        /*신규병상요청 끝*/
        this.getBdList()
      } else if (idx === 3) {
        this.errMsg = '환자 정보가\n등록되었습니다.'
        this.isAlert = true
        this.alertIdx = 3
        if (this.popup === 0) {
          this.popup = 100
        }
      } else if (idx === 4) {
        /*역조서 파싱 */
        this.errMsg =
          '역학조사서 파일 기반으로\n환자정보를 자동입력 하였습니다.\n내용을 확인해주세요.'
        this.isAlert = true
        this.newPt = { ...this.rptInfo, bascAddr: this.rptInfo.baseAddr }
        if (this.rptInfo !== null) {
          /*역조서 입력 시*/
          if (this.rptInfo.instAddr !== null) {
            await this.$store.dispatch('patnt/geoCoding', [1, this.rptInfo.instAddr])
          }
          this.dsInfo = this.rptInfo
          console.log(this.dsInfo.rcptPhc)
          if (this.rptInfo.rcptPhc !== null) {
            this.dsInfo.rcptPhc = 1
            this.medinstInfo.rcptPhc = this.rptInfo.rcptPhc
          }
          console.log(this.dsInfo.ptId)
        }
        this.alertIdx = 4
      } else if (idx === 9) {
        /*역조서 삭제*/
        this.errMsg = '역학조사서 이미지를\n삭제하시겠습니까?'
        this.cncBtn = true
        this.isAlert = true
        this.alertIdx = 9
      } else if (idx === 10) {
        this.errMsg = '역학조사서가\n삭제되었습니다.'
        this.isAlert = true
        this.alertIdx = 10
      }
    },
    async cfrmAl(res) {
      if (res === 0) {
        console.log(0)
        this.alertOpen(1)
      } else if (res === 1) {
        console.log('1')
        this.alertOpen(2)
      } else if (res === 3) {
        console.log('3')
        this.alertClose()
        this.tab = 1
      } else if (res === 4) {
        console.log('역학조사서 확인')
        this.alertClose()
      } else if (res === 9) {
        this.removeRpt()
        this.newPt = this.initNewPt
        this.dsInfo = this.initDsInfo
        this.alertClose()
        this.alertOpen(10)
      } else if (res === 10) {
        this.alertClose()
      }
      console.log(res)
    },
    alertClose() {
      this.errMsg = ''
      this.cncBtn = false
      this.isAlert = false
      this.alertIdx = 100
    },
    openPopup,
    closePopup(idx) {
      if (idx === 0) {
        this.popup = 100
      }
    },
    getUndrDses,
    goAsgn,
    maskingNm,
    getDtBlue,
    getTag,
    getGndr,
    getAge,
    openAddressFinder,
    cmpExist(idx) {
      const isMatch = (a, b) => a === b
      const res1 = ['일치', 'bg-primary']
      const res2 = ['불일치', 'bg-gray-400']

      switch (idx) {
        case 0:
          return isMatch(this.existPt.ptNm, this.newPt.ptNm) ? res1 : res2
        case 1:
          return isMatch(this.existPt.rrno1, this.newPt.rrno1) &&
          isMatch(this.existPt.rrno2, this.newPt.rrno2)
            ? res1
            : res2
        case 2:
          return isMatch(this.existPt.bascAddr, this.newPt.bascAddr) ? res1 : res2
        default:
          return isMatch(this.existPt.mpno, this.newPt.mpno) ? res1 : res2
      }
    },
    regNewPt,
    async uploadRpt(event) {
      const fileInput = event.target
      const file = fileInput.files[0]
      console.log(file)
      const formData = new FormData()
      formData.append('param1', 'edidemreport')
      formData.append('param2', file)
      await this.$store.dispatch('patnt/uploadRpt', formData)
      if (this.rptInfo !== null) {
        console.log('실행')
        this.alertOpen(4)
      }
      //역조서 이미지 미리보기 만들기
      const reader = new FileReader()
      reader.onload = (e) => {
        this.preRpt = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeRpt() {
      /*역조서 삭제*/
      this.$store.dispatch('patnt/removeRpt', this.rptInfo.attcId)
      this.preRpt = null
    },
    dsDtSame() {
      this.dsInfo.diagDt = this.dsInfo.occrDt
      this.dsInfo.rptDt = this.dsInfo.occrDt
    },
    regBioAnlys() {
      this.$store.dispatch('patnt/regBioAnlys', this.bioAnlys)
    },
    setSpAddr(idx) {
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
    validateInput(idx) {
      if (idx === 0) {
        this.spInfo.nok1Telno = this.spInfo.nok1Telno.replace(/[^0-9]/g, '')
        this.spInfo.nok2Telno = this.spInfo.nok2Telno.replace(/[^0-9]/g, '')
        this.spInfo.chrgTelno = this.spInfo.chrgTelno.replace(/[^0-9]/g, '')
      } else if (idx === 1) {
        this.newPt.mpno = this.newPt.mpno.replace(/[^0-9]/g, '')
        this.newPt.telno = this.newPt.telno.replace(/[^0-9]/g, '')
      } else if (idx === 2) {
        this.newPt.rrno1 = this.newPt.rrno1.replace(/[^0-9]/g, '')
        this.newPt.rrno2 = this.newPt.rrno2.replace(/[^0-9]/g, '')
      } else if (idx === 3) {
        return this.svInfo.reqBedTypeCd === null && this.showErrorMessage
      } else if (idx === 4) {
        return this.svInfo.dnrAgreYn === null && this.showErrorMessage
      } else if (idx === 5) {
        return this.svInfo.svrtTypeCd === null && this.showErrorMessage
      }
    },
    getBtn(sts) {
      if (sts === 'BAST0001') {
        return ['배정 없음', '']
      } else if (sts === 'BAST0002') {
        return ['역학조사 중', '']
      } else if (sts === 'BAST0003') {
        return ['승인 대기', '#kt_modal_detail']
      } else if (sts === 'BAST0004') {
        return ['배정 대기', '#kt_modal_dispatch']
      } else if (sts === 'BAST0005') {
        return ['이송·배차 처리', '#kt_modal_dispatch']
      } else if (sts === 'BAST0006') {
        return ['입·퇴원 처리', '#kt_modal_hospitalization']
      } else if (sts === 'BAST0007') {
        return ['완료', '#kt_modal_detail']
      } else if (sts === 0) {
        //추천병원 모달 띄우기
        return ['완료', '#kt_modal_recommend']
      } else {
        return ['완료', '#kt_modal_detail']
      }
    },
    getBtnColor(sts) {
      if (sts === 'BAST0001') {
        return ''
      } else if (sts === 'BAST0002') {
        return '#67CCAAFF'
      } else if (sts === 'BAST0003') {
        return '#67CCAAFF'
      } else if (sts === 'BAST0004') {
        return '#4CAFF1FF'
      } else if (sts === 'BAST0005') {
        return '#4CAFF1FF'
      } else if (sts === 'BAST0006') {
        return '#4CAFF1FF'
      } else if (sts === 'BAST0007' || sts === 'BAST0008') {
        return '#FF666EFF'
      }
    },
    async openBedMod(data) {
      this.$store.commit('bedasgn/setbdDetail', data)
      this.$store.dispatch('patnt/getBasicInfo', data)
      await this.$store.dispatch('bedasgn/getTimeline', data)
      this.$store.dispatch('bedasgn/getDSInfo', data)
      this.$store.dispatch('bedasgn/getTransInfo', data)
      this.transCondition1 = this.bdDetail.bedStatCd === 'BAST0006' || this.bdDetail.bedStatCd === 'BAST0007'
      this.transCondition2 = this.bdDetail.bedStatCd === 'BAST0005' || this.bdDetail.bedStatCd === 'BAST0006' || this.bdDetail.bedStatCd === 'BAST0007'
      this.getChrgId()
      this.openModal(2)
    },
    getChrgId() {
      if (this.timeline !== null) {
        this.chrgUserId = []
        this.timeline.items.forEach((item) => {
          if (item.timeLineStatus === 'suspend') {
            if (item.asgnReqSeq) {
              console.log('의료진 배정')
              this.chrgUserId.push({ chrgUserId: item.chrgUserId, asgnReqSeq: item.asgnReqSeq })
              console.log(this.chrgUserId)
            } else if (item.chrgUserId) {
              console.log('해당')
              this.chrgUserId.push(item.chrgUserId)
              console.log(this.chrgUserId)
            }
          }
        })
      }
    },
    backBtn(idx) {
      this.tab = idx
      this.popup = 100
    },
    showImageLightBox() {
      this.imgsRef = this.preRpt
      this.visibleRef = true
    },
    onHide() {
      this.visibleRef = false
    },
    closeRcmdHospModal() {
      this.showRcmdHospModal = false
      this.showModal = 2
    },
    openRcmdHospModal() {
      this.showRcmdHospModal = true
      this.showModal = 1
    },
    returnToList() {
      this.showRcmdHospModal = false
      this.getBdList()
    }
  }
}
</script>

<style scoped>
.modal.show {
  background-color: rgba(0, 0, 0, 0.4);
  display: block;
}

.popup {
  display: block;
}

.btn.btn-outline.btn-outline-primary {
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  min-width: 100px;
}

.list-table-hoverable tr {
  cursor: pointer;
}

.list-table-hoverable tr:hover td {
  background-color: #74afeb22;
}

.spinner {
  position: fixed;
  left: calc(50% - 32px);
  top: calc(50% - 32px);
}

article.toggle-list-layout1 .toggle-list label input:checked ~ .txt {
  padding: 0 13px;
}

article.toggle-list-layout1 .toggle-list label .txt {
  padding: 0 13px;
}

</style>
