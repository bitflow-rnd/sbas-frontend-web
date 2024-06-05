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
            <!--begin::Title-->
            <!--end::Title-->
          </div>
          <!--end::Page title-->
          <!--begin::Actions-->
          <div class="d-flex align-items-center gap-2 gap-lg-3">
            <a
              href="javascript:void(0);"
              class="btn btn-flex btn-sm btn-outline btn-outline-light fs-7"
            ><i class="fa-regular fa-trash-can"></i> 삭제</a
            >
            <!-- data-bs-toggle="modal" -->
            <a
              href="#"
              class="btn btn-flex btn-sm btn-secondary fs-7"
            ><i class="fa-solid fa-download"></i> 엑셀다운로드</a
            >
            <!-- data-bs-toggle="modal" -->
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
                              <div v-for='(item, idx) in bdList2'
                                   :key='idx' class="toggle-list">
                                <label>
                                  <input
                                    type='radio'
                                    name='state'
                                    v-model='search.bedStatCd'
                                    :value='this.filter.selectedStates[idx]'
                                    @change='searchBedAsgn' /><i></i>
                                  <span class='txt'>{{ item.title }}
                                      <span class='cnt ms-1'
                                            style='color: rgb(255, 102, 110)'>&nbsp;&nbsp;&nbsp;{{ item.count }}</span>
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

                          <div class="sbox w-150px ms-5">
                            <select v-model='search.period' @change="searchBedAsgn">
                              <option value=''>전체</option>
                              <option value='7'>최근 1주</option>
                              <option value='30'>최근 1개월</option>
                              <option value='90'>최근 3개월</option>
                              <option value='180'>최근 6개월</option>
                              <option value='365'>최근 1년</option>
                            </select>
                          </div>
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
                            <div class="cbox">
                              <label>
                                <input v-model='search.svrtTypeCd' value='SVTP0006' type="checkbox" name="type3"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">위중증</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.svrtTypeCd' value='SVTP0005' type="checkbox" name="type3"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">중증</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.svrtTypeCd' value='SVTP0004' type="checkbox" name="type3"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">준증증</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.svrtTypeCd' value='SVTP0003' type="checkbox" name="type3"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">중등증</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.svrtTypeCd' value='SVTP0002' type="checkbox" name="type3"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">경증</span>
                              </label>
                            </div>


                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.svrtTypeCd' value='SVTP0001' type="checkbox" name="type3"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">기타</span>
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
                                <span class="txt">읍압격리</span>
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
                                <span class="txt">소아읍압격리</span>
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
                                <input v-model='search.gndr' value='여' type="checkbox" name="type3"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">여자</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.gndr' value='남' type="checkbox" name="type3"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">남자</span>
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
            <h5 v-if='bdListWeb!==[]'>
              검색결과<span class="position-absolute translate-middle rounded-pill bg-primary">
              {{ bdListWeb.count }}</span>
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
          <!--begin::Modal title-->
          <h2>병상요청</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div
            id="reqest_exit"
            class="btn btn-sm btn-icon btn-active-color-primary"
          >
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
            <span @click="closeModal(0)" class="svg-icon svg-icon-1" data-bs-dismiss="modal">
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
                  <form @submit="regDsInfo" class="table-box">
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
                  <form @submit="regSvInfo" class="table-box">
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
                  <form @submit="regStrtPoint" class="table-box">
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
  <div
    v-if="bdDetail !== null && ptDetail !== null"
    class="modal fade"
    id="kt_modal_recommend"
    tabindex="-1"
    aria-hidden="true"
    style=""
    :class="{'show' : showModal===1}" v-show="showModal===1"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-1500px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>추천병원 선택</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div class="btn btn-sm btn-icon btn-active-color-primary" @click="closeModal(1)">
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

          <article class="floating-request-box">
            <div class="img-box">
              <img src="/img/common/ic_request_patient.svg" alt="이미지" />
            </div>
            <div class="txt-box">
              {{ bdDetail.ptNm }}
              <span class="text-gray-600 fw-normal"
              >({{ bdDetail.gndr }} / {{ bdDetail.age }}세 / {{ getAddr(bdDetail.bascAddr) }} {{ ptDetail.mpno ? ('/ ' + getTelno(ptDetail.mpno)) : '' }})</span
              >
            </div>
            <div class="txt-box" v-if="bdDetail.tagList && bdDetail.tagList.length>0">
              <span class="text-primary">{{ getTag(bdDetail.tagList) }}</span>
            </div>
          </article>
        </div>

        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div v-if="rcmdHp !== null" class="modal-body scroll-y py-10 px-10">
          <article class="table-form-layout1 pb-4">
            <div class="form-head-box"></div>

            <div class="form-body-box">
              <div class="table-box">
                <table>
                  <colgroup>
                    <col style="width: 90px" />
                    <col style="width: 400px" />
                    <col style="width: 90px" />
                    <col style="width: auto" />
                  </colgroup>
                  <tbody>
                  <tr>
                    <th rowspan="2">출발지</th>
                    <td rowspan="2">
                      <div class="item-cell-box rcmd">
                        <div class="rbox">
                          <label>
                            <input type="radio" name="permission" /><i></i>
                            <span style='width: 100px' class="txt">위치지정</span>
                          </label>
                          <div class="tbox full">
                            <input
                              style="margin-left: 1px"
                              type="text"
                              v-model="newPt.zip"
                              readonly
                            />
                          </div>
                          <a
                            @click="openAddressFinder(0)"
                            class="btn btn-flex justify-content-center btn-primary py-0 px-0 h-30px w-80px ms-3 certify-btn rounded-1"
                            style="min-width: 80px"
                          >주소검색</a
                          >
                        </div>
                      </div>
                      <div class="item-cell-box rcmd">
                        <div class="rbox">
                          <label>
                            <input type="radio" name="permission" /><i></i>
                            <span class="txt">시/도지정</span>
                          </label>
                        </div>
                      </div>
                    </td>
                    <th>병상유형</th>
                    <td>
                      <div class="item-cell-box">
                        <div class="cbox">
                          <label>
                            <input type="checkbox" name="permission" /><i></i>
                            <span class="txt">음압격리</span>
                          </label>
                        </div>

                        <div class="cbox ms-4">
                          <label>
                            <input type="checkbox" name="permission" /><i></i>
                            <span class="txt">중증일반격리</span>
                          </label>
                        </div>

                        <div class="cbox ms-4">
                          <label>
                            <input type="checkbox" name="permission" /><i></i>
                            <span class="txt">소아음압격리</span>
                          </label>
                        </div>

                        <div class="cbox ms-4">
                          <label>
                            <input type="checkbox" name="permission" /><i></i>
                            <span class="txt">소아일반격리</span>
                          </label>
                        </div>

                        <div class="cbox ms-4">
                          <label>
                            <input type="checkbox" name="permission" /><i></i>
                            <span class="txt">소아</span>
                          </label>
                        </div>

                        <div class="cbox ms-4">
                          <label>
                            <input type="checkbox" name="permission" /><i></i>
                            <span class="txt">일반</span>
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>중등도</th>
                    <td>
                      <div class="item-cell-box">
                        <div class="cbox">
                          <label>
                            <input type="checkbox" name="permission" /><i></i>
                            <span class="txt">중환자</span>
                          </label>
                        </div>

                        <div class="cbox ms-4">
                          <label>
                            <input type="checkbox" name="permission" /><i></i>
                            <span class="txt">중증</span>
                          </label>
                        </div>

                        <div class="cbox ms-4">
                          <label>
                            <input type="checkbox" name="permission" /><i></i>
                            <span class="txt">준증증</span>
                          </label>
                        </div>

                        <div class="cbox ms-4">
                          <label>
                            <input type="checkbox" name="permission" /><i></i>
                            <span class="txt">중등증</span>
                          </label>
                        </div>

                        <div class="cbox ms-4">
                          <label>
                            <input type="checkbox" name="permission" /><i></i>
                            <span class="txt">일반</span>
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>

                    <th>환자유형</th>
                    <td colspan="3">

                      <div class="d-flex">

                        <div class="item-cell-box ptnt-type full d-flex flex-grow-1">

                          <div class="cbox">
                            <label>
                              <input type="checkbox" name="permission" /><i></i>
                              <span class="txt">임산부</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="permission" /><i></i>
                              <span class="txt">투석</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="permission" /><i></i>
                              <span class="txt">수술</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="permission" /><i></i>
                              <span class="txt">신생아</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="permission" /><i></i>
                              <span class="txt">소아</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="permission" /><i></i>
                              <span class="txt">인공호흡기</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="permission" /><i></i>
                              <span class="txt">적극적치료요청</span>
                            </label>
                          </div>

                        </div>

                        <div class="tbox w-400px with-btn ms-5">
                          <input type="text" placeholder="의료기관명 검색" />

                          <a href="javascript:void(0)" class="input-btn">
                            <i class="fa-solid fa-magnifying-glass"></i>
                          </a>
                        </div>

                      </div>

                    </td>
                  </tr>

                  <tr>
                    <th>장비정보</th>
                    <td colspan="3">
                      <div class="item-cell-box">
                        <div class="cbox">
                          <label>
                            <input type="checkbox" name="type3" /><i></i>
                            <span class="txt">인공호흡기 일반</span>
                          </label>
                        </div>

                        <div class="cbox ms-4">
                          <label>
                            <input type="checkbox" name="type3" /><i></i>
                            <span class="txt">인공호흡기 조산아</span>
                          </label>
                        </div>

                        <div class="cbox ms-4">
                          <label>
                            <input type="checkbox" name="type3" /><i></i>
                            <span class="txt">인큐베이터</span>
                          </label>
                        </div>

                        <div class="cbox ms-4">
                          <label>
                            <input type="checkbox" name="type3" /><i></i>
                            <span class="txt">ECMO</span>
                          </label>
                        </div>

                        <div class="cbox ms-4">
                          <label>
                            <input type="checkbox" name="type3" /><i></i>
                            <span class="txt">중심체온조절유도기</span>
                          </label>
                        </div>
                        <div class="cbox ms-4">
                          <label>
                            <input type="checkbox" name="type3" /><i></i>
                            <span class="txt">고압산소치료기</span>
                          </label>
                        </div>

                        <div class="cbox ms-4">
                          <label>
                            <input type="checkbox" name="type3" /><i></i>
                            <span class="txt">CT</span>
                          </label>
                        </div>

                        <div class="cbox ms-4">
                          <label>
                            <input type="checkbox" name="type3" /><i></i>
                            <span class="txt">MRI</span>
                          </label>
                        </div>

                        <div class="cbox ms-4">
                          <label>
                            <input type="checkbox" name="type3" /><i></i>
                            <span class="txt">혈관촬영기</span>
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          <article class="table-list-layout1">
            <div class="table-head-box pb-4">
              <div class="head-box">
                <div class="head-txt-box">
                  검색결과
                  <span class="rounded-pill bg-primary text-white px-2 ms-2">{{
                      rcmdHp.count
                    }}</span>
                </div>
              </div>

              <div class="option-box">

                <!--
                <div class="option-item-box d-flex align-items-center">
                  <div class="option-label-box pe-4">목록표시</div>

                  <article class="toggle-list-layout2">
                    <div class="toggle-list">
                      <label>
                        <input type="radio" name="toggle1" checked="" />
                        <span class="txt">10행</span>
                      </label>

                      <label>
                        <input type="radio" name="toggle1" />
                        <span class="txt">25행</span>
                      </label>

                      <label>
                        <input type="radio" name="toggle1" />
                        <span class="txt">50행</span>
                      </label>
                    </div>
                  </article>
                </div>
                -->

                <div class="option-item-box d-flex align-items-center ms-8">
                  <div class="option-label-box pe-4">목록표시</div>

                  <article class="toggle-list-layout2">
                    <div class="toggle-list">
                      <label>
                        <input type="radio" name="toggle" checked="" />
                        <span class="txt">거리순</span>
                      </label>

                      <label>
                        <input type="radio" name="toggle" />
                        <span class="txt">추천순</span>
                      </label>
                    </div>
                  </article>
                </div>
              </div>
            </div>

            <div v-if="rcmdHp.count !== 0" class="table-body-box">
              <div class="table-box with-scroll small">
                <table>
                  <colgroup>
                    <col style="width: 50px" />
                    <col style="width: 70px" />
                    <col style="width: 200px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 90px" />
                    <col style="width: 90px" />
                  </colgroup>
                  <thead>
                  <tr class="small">
                    <th>
                      <div class="cbox">
                        <label> <input type="checkbox" class="all-chk" /><i></i> </label>
                      </div>
                    </th>
                    <th>이미지</th>
                    <th>병원명</th>
                    <th>중환자</th>
                    <th>중증</th>
                    <th>준중증</th>
                    <th>중등증</th>
                    <th>일반</th>
                    <th>분만</th>
                    <th>투석</th>
                    <th>소아</th>
                    <th>인공 호흡</th>
                    <th>인공호흡 (조산아)</th>
                    <th>인큐 베이터</th>
                    <th>ECMO</th>
                    <th>중심체온 조절유도기</th>
                    <th>고압 산소</th>
                    <th>CT</th>
                    <th>MRI</th>
                    <th>거리</th>
                  </tr>
                  </thead>

                  <tbody>
                  <tr v-for="(item, i) in rcmdHp.items" :key="i">
                    <td>
                      <div class="cbox d-flex justify-content-center">
                        <label>
                          <input
                            v-model="aprv.reqHospIdList"
                            type="checkbox"
                            :value="item.hospId"
                          /><i></i>
                        </label>
                      </div>
                    </td>
                    <td>
                      <div class="img-box w-50px h-50px m-auto">
                        <img
                          src="/img/common/img_profile_dummy.png"
                          alt="이미지"
                          class="w-100 h-100 thum-hspt"
                        />
                      </div>
                    </td>
                    <td class="text-start">
                      <div class="d-flex align-items-center">
                        <div class="text-start text-black" style="">{{ item.hospNm }}</div>
                      </div>

                      <div class="text-gray-600 fs-12px pt-2">
                        {{ getTag(item.tagList) }}
                      </div>
                    </td>
                    <td><span class="text-black">{{ item.gnbdIcu }}</span></td>
                    <td><span class="text-black">{{ item.gnbdSvrt }}</span></td>
                    <td><span class="text-black">{{ item.gnbdSmsv }}</span></td>
                    <td><span class="text-black">{{ item.gnbdModr }}</span></td>
                    <td><span class="text-primary">13</span>/55</td>
                    <td><span class="text-primary">13</span>/55</td>
                    <td><span class="text-primary">13</span>/55</td>
                    <td><span class="text-danger">0</span>/1</td>

                    <td><span :class="{'text-danger': item.ventilator === 'N'}" class="text-primary">{{ item.ventilator
                      }}</span></td>
                    <td><span :class="{'text-danger': item.ventilatorPreemie === 'N'}"
                              class="text-primary">{{ item.ventilatorPreemie }}</span></td>
                    <td><span :class="{'text-danger': item.incubator === 'N'}" class="text-primary">{{ item.incubator
                      }}</span></td>
                    <td><span :class="{'text-danger': item.ecmo === 'N'}" class="text-primary">{{ item.ecmo }}</span>
                    </td>
                    <td><span :class="{'text-danger': item.bodyTemperatureControl === 'N'}"
                              class="text-primary">{{ item.bodyTemperatureControl }}</span></td>
                    <td><span :class="{'text-danger': item.highPressureOxygen === 'N'}"
                              class="text-primary">{{ item.highPressureOxygen }}</span></td>
                    <td><span :class="{'text-danger': item.ct === 'N'}" class="text-primary">{{ item.ct }}</span></td>
                    <td><span :class="{'text-danger': item.mri === 'N'}" class="text-primary">{{ item.mri }}</span></td>
                    <td>{{ item.distance }}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          <div class="row mt-10">
            <div
              class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"
            ></div>
            <div class="col-12 d-flex align-items-center justify-content-center">
              <div class="dataTables_paginate paging_simple_numbers">
                <ul class="pagination">
                  <li class="paginate_button page-item previous disabled">
                    <a
                      href="#"
                      aria-controls="kt_table_users"
                      data-dt-idx="0"
                      tabindex="0"
                      class="page-link"
                    ><i class="previous"></i
                    ></a>
                  </li>
                  <li class="paginate_button page-item active">
                    <a
                      href="#"
                      aria-controls="kt_table_users"
                      data-dt-idx="1"
                      tabindex="0"
                      class="page-link"
                    >1</a
                    >
                  </li>
                  <li class="paginate_button page-item">
                    <a
                      href="#"
                      aria-controls="kt_table_users"
                      data-dt-idx="2"
                      tabindex="0"
                      class="page-link"
                    >2</a
                    >
                  </li>
                  <li class="paginate_button page-item">
                    <a
                      href="#"
                      aria-controls="kt_table_users"
                      data-dt-idx="3"
                      tabindex="0"
                      class="page-link"
                    >3</a
                    >
                  </li>
                  <li class="paginate_button page-item next">
                    <a
                      href="#"
                      aria-controls="kt_table_users"
                      data-dt-idx="4"
                      tabindex="0"
                      class="page-link"
                    ><i class="next"></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <article class="modal-menu-layout1 pt-10">
            <div class="modal-menu-list">
              <!--								<a href="javascript:requestTabMove(2)" class="modal-menu-btn menu-primary">다음</a>-->
              <router-link
                to=""
                @click="openModal(2)"
                class="modal-menu-btn menu-cancel"
              >이전
              </router-link>
              <router-link to="" @click="openPopup(1)" class="modal-menu-btn menu-primary-outline"
              >배정불가
              </router-link
              >
              <router-link to="" @click="openPopup(3)" class="modal-menu-btn menu-primary"
              >배정요청
              </router-link
              >
            </div>
          </article>
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>

  <!--  병상배정 세부 내용 2 -->
  <div class="modal fade" id="kt_modal_detail" tabindex="-1" aria-hidden="true" style=""
       :class="{'show' : showModal===2}" v-show="showModal===2">
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-1500px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>병상배정 세부내용 (<span style='color: #74AFEB'>{{ bdDetail?.bedStatCdNm ?? '' }}</span>)</h2>
          <!--end::Modal title-->
          <!--begin::Close-->

          <div class="btn-list">
            <div class="btn btn-sm btn-icon btn-active-color-primary" @click="closeModal(2)">
              <i class="fa-solid fa-share-nodes text-black" style="font-size: 18px"></i>
            </div>

            <div
              class="btn btn-sm btn-icon btn-active-color-primary"
              id="asgnDetail-exist"
              @click="closeModal(2)"
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

        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body scroll-y py-10 px-10">
          <article class="detail-layout1">
            <div class="detail-wrap">
              <div class="detail-info-box">
                <div class="detail-head-box px-10">
                  <div class="head-box">
                    <div class="head-txt-box">환자정보</div>
                  </div>

                  <div class="option-box">
                    <a class="option-btn">
                      <i class="fa-solid fa-share-nodes text-black" style="font-size: 18px"></i>
                    </a>
                  </div>
                </div>

                <div v-if="ptDetail !== null && ptDs !== null" class="detail-body-box px-10">
                  <article class="table-form-layout1">
                    <div class="form-body-box overflow-y-auto mb-5">
                      <div class="table-box pe-5">
                        <table>
                          <colgroup>
                            <col style="width: 117px" />
                            <col style="width: auto" />
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
                              <div class="table-img-box pt-4">
                                <a href="javascript:void(0)" class="img-box">
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

              <div class="detail-info-box full d-flex flex-column">
                <div class="detail-head-box px-10 h-80px">
                  <article class="tabs-list-layout1 w-100 px-10">
                    <div class="tabs-list full">
                      <router-link
                        to=""
                        @click="setActive(0)"
                        class="tabs-btn"
                        :class="{ active: tabidx === 0 }"
                      >
                        <span class="txt">타임라인</span>
                      </router-link>

                      <router-link
                        to=""
                        @click="setActive(1)"
                        class="tabs-btn"
                        :class="{ active: tabidx === 1 }"
                      >
                        <span class="txt">질병정보</span>
                      </router-link>

                      <router-link
                        to=""
                        @click="setActive(2)"
                        class="tabs-btn"
                        :class="{ active: tabidx === 2 }"
                      >
                        <span class="txt">출발·도착 정보</span>
                      </router-link>
                    </div>
                  </article>
                </div>

                <div class="detail-tabs-group" style="height: 100%; min-height: 0">
                  <div class="tabs-box flex-root" v-show="this.tabidx === 0" style="">
                    <div
                      v-if="timeline !== null && timeline !== undefined"
                      class="detail-body-box pe-5 flex-root"
                      style="min-height: 0"
                    >
                      <article class="timeline-layout1 pb-5" style="height: 100%">
                        <div class="timeline-wrap overflow-y-auto ps-10 pe-5" style="height: 100%">
                          <div class="text-center py-4 fw-bold">
                            {{ getTLDt(timeline.items[0].updtDttm, 0) }}
                          </div>

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
                                <img :src="getTLIcon(item, idx)" alt="이미지" />
                              </div>

                              <div
                                class="item-box"
                                :class="{ suspend: item.timeLineStatus === 'suspend' }"
                                v-if="item.timeLineStatus !== 'closed'"
                              >
                                <div class="top-item-box">
                                  <div class="state-box">{{ item.title }}</div>
                                  <div class="date-box" v-if="item.updtDttm">
                                    {{ getTLDt(item.updtDttm, 1) }}
                                  </div>
                                </div>
                                <div class="mid-item-box" v-if="item.by" @click='showChrgDetail(item.chrgUserId)'
                                     role='button'>{{ item.by }}
                                </div>
                                <div class="bottom-item-box">
                                  <div class="item-img-group mb-4">
                                    <div class="img-list">
                                    </div>
                                  </div>

                                  <div class="msg-box" v-if="item.msg">{{ item.msg }}</div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </article>
                    </div>

                    <div class="detail-foot-box">
                      <article class="msg-send-layout1">
                        <div class="img-upload-result">
                          <div class="img-list"></div>
                        </div>

                        <div class="msg-menu-group-box">
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
                              <a href="" class="send-btn">
                                <img src="/img/common/ic_msg_send.svg" alt="이미지" />
                              </a>
                            </div>
                          </div>

                          <!-- 배정 관련 처리 버튼 그룹 -->
                          <div v-if="bdDetail !== null" class="menu-group-box">
                            <article class="modal-menu-layout1">
                              <div class="modal-menu-list">
                                <!-- && this.chrgUserId.some(item=>item.chrgUserId===userInfo.id)) -->
                                <a v-show="
                                    (bdDetail.bedStatCd === 'BAST0003' &&
                                      ( userInfo.jobCd === JobCode.Aprv || userInfo.jobCd === JobCode.Sysa )) ||
                                    (bdDetail.bedStatCd === 'BAST0004' &&
                                      ( userInfo.jobCd === JobCode.Meds || userInfo.jobCd === JobCode.Sysa ))"
                                  @click="openPopup(1)"
                                  class="modal-menu-btn menu-primary-outline radius-0 big"
                                >배정 불가</a
                                >
                                <div
                                  v-show="
                                    bdDetail.bedStatCd === 'BAST0003' &&
                                    ( userInfo.jobCd === JobCode.Aprv || userInfo.jobCd === JobCode.Sysa )
                                  "
                                  @click="openPopup(2)"
                                  class="modal-menu-btn menu-primary radius-0 big"
                                >
                                  병상요청 승인
                                </div>

                                <!-- && this.chrgUserId.some(item=>item.chrgUserId===userInfo.id -->
                                <div
                                  v-show="
                                    bdDetail.bedStatCd === 'BAST0004' &&
                                    ( userInfo.jobCd === JobCode.Meds || userInfo.jobCd === JobCode.Sysa )
                                  "
                                  @click="openPopup(2)"
                                  class="modal-menu-btn menu-primary radius-0 big"
                                >
                                  병상요청 승인
                                </div>

                                <div
                                  v-show="
                                    bdDetail.bedStatCd === 'BAST0005' &&
                                    ( userInfo.jobCd === JobCode.Aprv || userInfo.jobCd === JobCode.Sysa )
                                  "
                                  @click="loadTrnsfInfo(this.transInfo.reqDstr1Cd)"
                                  class="modal-menu-btn menu-primary radius-0 big"
                                >
                                  이송·배차 처리
                                </div>
                                <!-- this.chrgUserId.some(item=>item===userInfo.id) -->
                                <div
                                  v-show="
                                    bdDetail.bedStatCd === 'BAST0006'
                                    && ( userInfo.jobCd === JobCode.Meds || userInfo.jobCd === JobCode.Aprv
                                    || userInfo.jobCd === JobCode.Sysa )"
                                  @click="openModal(4)"
                                  class="modal-menu-btn menu-primary radius-0 big"
                                >
                                  입 · 퇴원 처리
                                </div>
                              </div>
                            </article>
                          </div>
                          <!-- 배정 관련 처리 버튼 그룹 -->

                        </div>
                      </article>
                    </div>
                  </div>

                  <div class="tabs-box flex-root" v-show="this.tabidx === 1" style="">
                    <div v-if="ptDs !== null" class="scroll-wrap px-5 mx-5 mb-5">
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
                                <td>{{ ptDs.diagGrdept ? Ds.diagGrde : '-' }}</td>
                                <th>DNR 동의</th>
                                <td>{{ ptDs.dnrAgreYn ? ptDs.dnrAgreYn : '-' }}</td>
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
                                <td colspan="3">
                                  <!-- todo: 중증도 분석 AI 점수 데이터 받아오기 필요                                                                    -->
                                  <div class="item-cell-box full">
                                    {{ ptDs.svrtTypeNms[0] ? ptDs.svrtTypeNms[0] : '-' }}
                                    <!--/ NEWS Score 13-->
                                  </div>
                                  <div v-if="ptDs.bdtp !== null" class="item-cell-box pt-3 full">
                                    <article class="category-list-layout1">
                                      <div class="category-item-box">
                                        <div class="subject-box">체온(℃)</div>
                                        <div class="con-box">{{ ptDs.bdtp ? ptDs.bdtp : '-' }}</div>
                                      </div>

                                      <div class="category-item-box">
                                        <div class="subject-box">
                                          맥박<br />
                                          (회/분)
                                        </div>
                                        <div class="con-box">{{ ptDs.hr ? ptDs.hr : '-' }}</div>
                                      </div>

                                      <div class="category-item-box">
                                        <div class="subject-box">
                                          분당호흡수<br />
                                          (회/분)
                                        </div>
                                        <div class="con-box">{{ ptDs.resp ? ptDs.resp : '-' }}</div>
                                      </div>

                                      <div class="category-item-box">
                                        <div class="subject-box">
                                          산소포화도<br />
                                          (%)
                                        </div>
                                        <div class="con-box">{{ ptDs.spo2 ? ptDs.spo2 : '-' }}</div>
                                      </div>

                                      <div class="category-item-box">
                                        <div class="subject-box">
                                          수축기혈압<br />
                                          (mmHg)
                                        </div>
                                        <div class="con-box">{{ ptDs.sbp ? ptDs.sbp : '-' }}</div>
                                      </div>
                                    </article>
                                  </div>
                                </td>
                              </tr>

                              <tr>
                                <th>발병일 / 진단일 / 신고일</th>
                                <td colspan="3">
                                  {{ ptDs.occrDt ? ptDs.occrDt : '- ' }}/ {{ ptDs.diagDt ? ptDs.diagDt : ' - ' }} /
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
                                <td colspan="3">
                                  <article class="upload-form-layout1">
                                    <div class="upload-result-wrap">
                                      <div class="img-upload-result">
                                        <div class="img-list"></div>
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

                  <div class="tabs-box flex-root" v-show="this.tabidx === 2" style="">
                    <div v-if="transInfo !== undefined && transInfo !== null" class="scroll-wrap px-5 mx-5 mb-5">
                      <article class="table-form-layout1">
                        <div v-if="bdDetail.bedStatCd==='BAST0006'" class="form-head-box fs-3 fw-bold pb-4">
                          이송중 <span class="text-primary">거리 2.3km, 예상 소요시간 25분</span>
                        </div>

                        <div class="form-body-box">
                          <div class="table-box">
                            <table>
                              <colgroup>
                                <col style="width: 369px" />
                                <col style="width: 168px" />
                                <col style="width: auto" />
                              </colgroup>
                              <tbody>
                              <tr>
                                <td class="p-0" rowspan="9">
                                  <div id="map"></div>
                                </td>
                                <th class="bg-accent" colspan="2">출발지 정보</th>
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
                                <th colspan="4" class="bg-accent">이송 정보</th>
                              </tr>
                              <tr v-if="!transCondition1">
                                <td class="p-0" colspan="4">
                                  <div
                                    class="d-flex align-items-center justify-content-center flex-column py-5"
                                  >
                                    <div class="img-box">
                                      <img src="/img/common/ic_warning.svg" alt="이미지" />
                                    </div>
                                    <div class="txt-box text-gray-600 fw-bold pt-5">
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
                              <tr v-if="transCondition1">
                                <th>대원 / 연락처</th>
                                <td colspan="3">
                                  {{ trsfInfo.crewNm ?? '-' }} / {{ transInfo.chfTelno ?? '-' }}
                                </td>
                              </tr>

                              <tr>
                                <th colspan="4" class="bg-accent">도착지 정보</th>
                              </tr>
                              <tr v-if="!transCondition2">
                                <td class="p-0" colspan="4">
                                  <div
                                    class="d-flex align-items-center justify-content-center flex-column py-5"
                                  >
                                    <div class="img-box">
                                      <img src="/img/common/ic_warning.svg" alt="이미지" />
                                    </div>
                                    <div class="txt-box text-gray-600 fw-bold pt-5">
                                      병상배정 전
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr v-if="transCondition2">
                                <th>의료기관</th>
                                <td>{{ transInfo.destinationInfo?.hospNm ?? '-' }}</td>
                                <th>전화번호</th>
                                <td>{{ transInfo.destinationInfo?.chrgTelno ?? '-' }}</td>
                              </tr>

                              <tr v-if="transCondition2">
                                <th>주소</th>
                                <td>{{ transInfo.destinationInfo?.hospAddr ?? '-' }}</td>
                                <th>위도, 경도</th>
                                <td>{{ transInfo.destinationInfo?.destinationLat }},
                                  {{ transInfo.destinationInfo?.destinationLon }}
                                </td>
                              </tr>

                              <tr v-if="transCondition2">
                                <th>병실</th>
                                <td>{{ transInfo.destinationInfo?.roomNm ?? '-' }}</td>
                                <th>원내 배정 여부</th>
                                <td>{{ transInfo.inhpAsgnYn === 'Y' ? '원내배정' : '전원요청' }}</td>
                              </tr>

                              <tr v-if="transCondition2">
                                <th>진료과</th>
                                <td>{{ transInfo.destinationInfo?.deptNm ?? '-' }}</td>
                              </tr>
                              <tr v-if="transCondition2">
                                <th>담당의</th>
                                <td>{{ transInfo.destinationInfo?.spclNm ?? '-' }}</td>
                              </tr>
                              <tr v-if="transCondition2">
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

  <!--  이송 배차 처리 3 -->
  <div
    v-if="bdDetail !== null && ptDetail !== null"
    class="modal fade"
    id="kt_modal_dispatch"
    tabindex="-1"
    aria-hidden="true"
    style=""
    :class="{'show' : showModal===3}" v-show="showModal===3"
  >
    <!--begin::Modal dialog-->
    <div
      class="modal-dialog mw-1500px modal-dialog-centered"
    >
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>이송·배차 처리</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div class="btn btn-sm btn-icon btn-active-color-primary" @click="closeModal(3)">
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

          <article class="floating-request-box">
            <div class="img-box">
              <img src="/img/common/ic_request_patient.svg" alt="이미지" />
            </div>
            <div class="txt-box">
              {{ bdDetail.ptNm }}
              <span class="text-gray-600 fw-normal"
              >({{ bdDetail.gndr }} / {{ bdDetail.age }}세 / {{ getAddr(bdDetail.bascAddr) }} /
                {{ getTelno(ptDetail.mpno) }})</span
              >
            </div>
            <div class="txt-box">
              <span class="text-primary">{{ getTag(bdDetail.tagList) }}</span>
            </div>
          </article>
        </div>

        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body scroll-y py-10 px-10">
          <article class="table-form-layout1">
            <div class="form-head-box"></div>

            <div v-if="firestatnList !== null" class="form-body-box">
              <div v-if='firestatnList.items' class="table-box">
                <table v-if='firestatnList.items.length!==0'>
                  <colgroup>
                    <col style="width: 168px" />
                    <col style="width: 46px" />
                    <col style="width: auto" />
                    <col style="width: 168px" />
                    <col style="width: auto" />
                  </colgroup>
                  <tbody>
                  <tr>
                    <th>출발지</th>
                    <td colspan="4">
                      <div class="item-cell-box">
                        <div class="sbox w-175px">
                          <select>
                            <option>{{ firestatnList.items[0].dstr1Cd }}</option>
                          </select>
                        </div>

                        <div class="sbox w-175px ms-3">
                          <select v-model="selectedInst" @change="getFiremen(selectedInst)">
                            <option value='구급대'>구급대 선택</option>
                            <option v-for="(item, i) in firestatnList.items" :key="i" :value="item">
                              {{ item.instNm }}
                            </option>
                            <option value='직접입력'>직접입력</option>
                          </select>
                        </div>

                        <div class="tbox w-175px ms-3">
                          <input
                            v-if="selectedInst === '직접입력'"
                            v-model="trsfInfo.ambsNm"
                            placeholder="구급대명 직접 입력"
                          />
                          <input
                            v-else
                            placeholder="구급대명 직접 입력"
                            readonly
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th rowspan="3">탑승대원 및 의료진</th>
                    <th>#1</th>
                    <td colspan="3">
                      <div class="item-cell-box">
                        <div v-if="firemenList.items" class="sbox" style="width: 128px">
                          <select v-model="selectedFm1" @change="fillFiremen(selectedFm1, 1)">
                            <option value="구급대원">구급대원 선택</option>
                            <option
                              v-for="(item, i) in firemenList.items"
                              :key="i" :value='item'
                            >
                              {{ item.crewNm }}
                            </option>
                            <option value='직접입력'>직접입력</option>
                          </select>
                        </div>

                        <div class="tbox w-175px ms-3">
                          <input
                            v-if="selectedFm1 === '직접입력'"
                            v-model="trsfInfo.crew1Pstn"
                            placeholder="직급 입력"
                          />
                          <input
                            v-else
                            placeholder="직급 입력"
                            readonly
                          />
                        </div>
                        <div class="tbox w-175px ms-3">
                          <input
                            v-if="selectedFm1 === '직접입력'"
                            v-model="trsfInfo.crew1Nm"
                            placeholder=" 이름 입력"
                          />
                          <input
                            v-else
                            placeholder=" 이름 입력"
                            readonly
                          />
                        </div>
                        <div class="tbox w-175px ms-3">
                          <input
                            v-if="selectedFm1 === '직접입력'"
                            v-model="trsfInfo.crew1Telno"
                            placeholder=" 전화번호 입력"
                          />
                          <input
                            v-else
                            placeholder=" 전화번호 입력"
                            readonly
                          />
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>#2</th>
                    <td colspan="3">
                      <div class="item-cell-box">
                        <div v-if="firemenList.items" class="sbox" style="width: 128px">
                          <select v-model="selectedFm2">
                            <option value="구급대원">구급대원 선택</option>
                            <option
                              v-for="(item, i) in firemenList.items"
                              :key="i"
                              @change="fillFiremen(item, 2)"
                              :value='item'
                            >
                              {{ item.crewNm }}
                            </option>
                            <option value='직접입력'>직접입력</option>
                          </select>
                        </div>

                        <div class="tbox w-175px ms-3">
                          <input
                            v-if="selectedFm2 === '직접입력'"
                            v-model="trsfInfo.crew2Pstn"
                            placeholder="직급 입력"
                          />
                          <input
                            v-else
                            placeholder="직급 입력"
                            readonly
                          />
                        </div>
                        <div class="tbox w-175px ms-3">
                          <input
                            v-if="selectedFm2 === '직접입력'"
                            v-model="trsfInfo.crew2Nm"
                            placeholder=" 이름 입력"
                          />
                          <input
                            v-else
                            placeholder=" 이름 입력"
                            readonly
                          />
                        </div>
                        <div class="tbox w-175px ms-3">
                          <input
                            v-if="selectedFm2 === '직접입력'"
                            v-model="trsfInfo.crew2Telno"
                            placeholder=" 전화번호 입력"
                          />
                          <input
                            v-else
                            placeholder=" 전화번호 입력"
                            readonly
                          />
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>#3</th>
                    <td colspan="3">
                      <div class="item-cell-box">
                        <div v-if="firemenList.items !== null && firemenList.items !== undefined" class="sbox"
                             style="width: 128px">
                          <select v-model="selectedFm3">
                            <option value="구급대원">구급대원 선택</option>
                            <option
                              v-for="(item, i) in firemenList.items"
                              :key="i"
                              @change="fillFiremen(item, 3)"
                              :value='selectedFm3'
                            >
                              {{ item.crewNm }}
                            </option>
                            <option value='직접입력'>직접입력</option>
                          </select>
                        </div>

                        <div class="tbox w-175px ms-3">
                          <input
                            v-if="selectedFm3 === '직접입력'"
                            v-model="trsfInfo.crew3Pstn"
                            placeholder="직급 입력"
                          />
                          <input
                            v-else
                            placeholder="직급 입력"
                            readonly
                          />
                        </div>
                        <div class="tbox w-175px ms-3">
                          <input
                            v-if="selectedFm3 === '직접입력'"
                            v-model="trsfInfo.crew3Nm"
                            placeholder=" 이름 입력"
                          />
                          <input
                            v-else
                            placeholder=" 이름 입력"
                            readonly
                          />
                        </div>
                        <div class="tbox w-175px ms-3">
                          <input
                            v-if="selectedFm3 === '직접입력'"
                            v-model="trsfInfo.crew3Telno"
                            placeholder=" 전화번호 입력"
                          />
                          <input
                            v-else
                            placeholder=" 전화번호 입력"
                            readonly
                          />
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>대표 연락처</th>
                    <td colspan="2">
                      <article class="toggle-list-layout2">
                        <div class="toggle-list">
                          <label>
                            <input
                              v-model="trsfInfo.chfTelno"
                              :value="trsfInfo.crew1Telno"
                              type="radio"
                              name="nation"
                            />
                            <span class="txt">대원#1 </span>
                          </label>

                          <label>
                            <input
                              v-model="trsfInfo.chfTelno"
                              :value="trsfInfo.crew2Telno"
                              type="radio"
                              name="nation"
                            />
                            <span class="txt">대원#2</span>
                          </label>

                          <label>
                            <input
                              v-model="trsfInfo.chfTelno"
                              :value="trsfInfo.crew3Telno"
                              type="radio"
                              name="nation"
                            />
                            <span class="txt">대원#3</span>
                          </label>
                        </div>
                      </article>
                    </td>
                    <th>배차정보</th>
                    <td>
                      <div class="item-cell-box full">
                        <div class="tbox">
                          <input
                            v-model="trsfInfo.vecno"
                            type="text"
                            placeholder="차량번호 입력"
                          />
                        </div>

                        <div class="ms-3 d-flex">
                          <div class="px-3 py-2 text-white bg-primary rounded-4" role="button" @click="trsfInfo.vecno='54노1234'">54노1234</div>
                          <div class="px-3 py-2 text-white bg-primary rounded-4 ms-3" role="button" @click="trsfInfo.vecno='129하8864'">129하8864</div>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>전달 메시지</th>
                    <td colspan="4">
                      <div class="item-cell-box full">
                        <div class="textbox full">
                            <textarea
                              @input="updateCharacterCount(3)"
                              maxlength="500"
                              placeholder="메시지 입력"
                              style="height: 120px"
                              v-model="trsfInfo.msg"
                            ></textarea>
                          <div class="limit-box">
                              <span id="textarea1">{{ characterCount }}</span
                              >/500자
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>
          <article class="modal-menu-layout1 pt-10">
            <div class="modal-menu-list">
              <a @click="alertOpen(11)" class="modal-menu-btn menu-primary">이송처리 완료</a>
            </div>
          </article>
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>

  <!--  입퇴원처리 4 -->
  <div
    v-if="bdDetail !== null && ptDetail !== null"
    class="modal fade"
    id="kt_modal_hospitalization"
    tabindex="-1"
    aria-hidden="true"
    style=""
    :class="{'show' : showModal===4}" v-show="showModal===4"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-1500px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>입·퇴원 처리</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div class="btn btn-sm btn-icon btn-active-color-primary" @click="closeModal(4)">
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

          <article class="floating-request-box">
            <div class="img-box">
              <img src="/img/common/ic_request_patient.svg" alt="이미지" />
            </div>
            <div class="txt-box">
              {{ bdDetail.ptNm }}
              <span class="text-gray-600 fw-normal"
              >({{ bdDetail.gndr }} / {{ bdDetail.age }}세 / {{ getAddr(bdDetail.bascAddr) }} /
                {{ getTelno(ptDetail.mpno) }})</span
              >
            </div>
            <div class="txt-box">
              <span class="text-primary">{{ getTag(bdDetail.tagList) }}</span>
            </div>
          </article>
        </div>

        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body scroll-y py-10 px-10">
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
                    <th>병원명</th>
                    <td colspan="3">{{ timeline ? getChrgTL(timeline.items, 0) : '' }}</td>
                  </tr>

                  <tr>
                    <th>처리 유형</th>
                    <td>
                      <div class="item-cell-box full justify-content-between">
                        <article class="toggle-list-layout2">
                          <div class="toggle-list">
                            <label @click="setHosptlzdiscg(1)">
                              <input
                                type="radio"
                                name="toggle4-3"
                                value="IOST0001"
                                v-model="hosptlzdiscg.admsStatCd"
                              />
                              <span class="txt">입원</span>
                            </label>

                            <label @click="setHosptlzdiscg(2)">
                              <input
                                type="radio"
                                name="toggle4-3"
                                value="IOST0002"
                                v-model="hosptlzdiscg.admsStatCd"
                              />
                              <span class="txt">퇴원</span>
                            </label>

                            <label @click="setHosptlzdiscg(3)">
                              <input
                                type="radio"
                                name="toggle4-3"
                                value="IOST0003"
                                v-model="hosptlzdiscg.admsStatCd"
                              />
                              <span class="txt">재택회송</span>
                            </label>
                          </div>
                        </article>
                      </div>
                    </td>
                  </tr>
                  <tr v-if="hosptlzdiscg.admsStatCd === 'IOST0002'">
                    <th>퇴원 사유</th>
                    <td>
                      <div class="item-cell-box full justify-content-between">
                        <article class="toggle-list-layout2">
                          <div class="toggle-list">
                            <label>
                              <input
                                type="radio"
                                name="toggle4-4"
                                value="DCRN0001"
                                v-model="hosptlzdiscg.dschRsnCd"
                              />
                              <span class="txt">입원 불필요</span>
                            </label>

                            <label>
                              <input
                                type="radio"
                                name="toggle4-4"
                                value="DCRN0002"
                                v-model="hosptlzdiscg.dschRsnCd"
                              />
                              <span class="txt">입원 거부</span>
                            </label>

                            <label @click="setHosptlzdiscg(3)">
                              <input
                                type="radio"
                                name="toggle4-4"
                                value="DCRN0003"
                                v-model="hosptlzdiscg.dschRsnCd"
                              />
                              <span class="txt">재택 승인</span>
                            </label>
                          </div>
                        </article>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>진료과</th>
                    <td>
                      <div class="tbox full">
                        <input v-model="hosptlzdiscg.deptNm" placeholder="진료과 입력" />
                      </div>
                    </td>
                    <th>병실</th>
                    <td>
                      <div class="tbox full">
                        <input v-model="hosptlzdiscg.wardNm" placeholder="병실번호 입력" />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>담당의</th>
                    <td>
                      <div class="tbox full">
                        <input v-model="hosptlzdiscg.spclNm" placeholder="담당의 이름 입력" />
                      </div>
                    </td>
                    <th>연락처</th>
                    <td>
                      <div class="tbox full">
                        <input
                          v-model="hosptlzdiscg.chrgTelno"
                          placeholder="의료진 연락처 입력"
                          maxlength="14"
                        />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>전달사항</th>
                    <td colspan="3">
                      <div class="item-cell-box full">
                        <div class="textbox full">
                            <textarea
                              @input="updateCharacterCount(2)"
                              maxlength="500"
                              placeholder="입원 / 퇴원 / 회송 사유 등 전달 메시지 입력"
                              style="height: 120px"
                              v-model="hosptlzdiscg.msg"
                            ></textarea>
                          <div class="limit-box">
                              <span id="textarea1">{{ characterCount }}</span
                              >/500자
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          <article class="modal-menu-layout1 pt-10">
            <div class="modal-menu-list">
              <router-link
                to=""
                @click="alertClose"
                class="modal-menu-btn menu-cancel"
              >이전
              </router-link>
              <router-link to="" @click="alertOpen(14)" class="modal-menu-btn menu-primary-outline"
              >처리
              </router-link
              >
            </div>
          </article>
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>

  <my-info-modal v-if="mode==='chrgInfo'" :isChrgInfo='true' :userInfo='chrgInfo' @closeModal='closeChrgDetail' />

  <!--end::Modals-->
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
              <div class="d-inline-flex w-auto ms-3">주소 : {{ existPt.bascAddr }}</div>
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
              <a @click="regNewPt" class="modal-menu-btn menu-primary-outline">신규등록</a>
              <a @click="goAsgn(3)" class="modal-menu-btn menu-primary">기존정보 업데이트</a>
            </div>
          </article>
        </div>
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

  <!--병상요청승인 - 배정반 -->
  <article v-show="popup === 2" class="popup popup-assignment-request1" style="">
    <div class="popup-wrapper">
      <div class="popup-contents">
        <div class="popup-head-box py-5 px-10">
          <div class="head-tit-box">병상요청 승인</div>

          <div @click="closePopup(0)" class="head-option-box">
            <a class="popup-close-btn">
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
            </a>
          </div>
        </div>

        <div class="popup-body-box py-5 px-10">
          <div>
            <div>
              <div class="textbox">
                <textarea
                  @input="updateCharacterCount(0)"
                  maxlength="500"
                  placeholder="메시지 입력"
                  style="height: 120px"
                  v-model="aprv.msg"
                ></textarea>
                <div class="limit-box">
                  <span id="textarea1">{{ characterCount }}</span
                  >/500자
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="popup-foot-box py-5 px-10">
          <article class="modal-menu-layout1">
            <div class="modal-menu-list">
              <router-link to="" @click="alertOpen(7)" class="modal-menu-btn menu-primary"
              >승인완료
              </router-link>
            </div>
          </article>
        </div>
      </div>
    </div>
  </article>

  <!--  병상배정 승인 - 의료진  -->
  <article v-show="popup === 3" class="popup popup-assignment-request2" style="">
    <div class="popup-wrapper">
      <div class="popup-contents">
        <div class="popup-head-box py-5 px-10">
          <div class="head-tit-box">병상배정 승인</div>

          <div @click="closePopup(0)" class="head-option-box">
            <a class="popup-close-btn">
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
            </a>
          </div>
        </div>

        <div class="popup-body-box py-5 px-10">
          <div class="d-flex flex-column pb-6">
            <div class="fw-medium fs-16px text-black pb-4">배정정보 입력</div>

            <div class="">
              <article class="table-form-layout1">
                <div class="form-head-box"></div>

                <div class="form-body-box">
                  <div class="table-box">
                    <table>
                      <colgroup>
                        <col style="width: 127px" />
                        <col style="width: auto" />
                      </colgroup>
                      <tbody>
                      <tr>
                        <th>병실 (선택)</th>
                        <td>
                          <div class="tbox full">
                            <input v-model="mediConfirm.roomNm" placeholder="병실번호 입력" />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>진료과 (선택)</th>
                        <td>
                          <div class="tbox full">
                            <input v-model="mediConfirm.deptNm" placeholder="진료과 입력" />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>담당의 (선택)</th>
                        <td>
                          <div class="tbox full">
                            <input v-model="mediConfirm.spclNm" placeholder="담당의 입력" />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>연락처 (선택)</th>
                        <td>
                          <div class="tbox full">
                            <input v-model="mediConfirm.chrgTelno" placeholder="연락처 입력" />
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

          <div>
            <div class="fw-medium fs-16px text-black pb-4">승인관련 메시지 입력</div>

            <div>
              <div class="textbox">
                <textarea
                  @input="updateCharacterCount(1)"
                  maxlength="500"
                  placeholder="메시지 입력"
                  style="height: 120px"
                  v-model="mediConfirm.msg"
                ></textarea>
                <div class="limit-box">
                  <span id="textarea1">{{ characterCount }}</span
                  >/500자
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="popup-foot-box py-5 px-10">
          <article class="modal-menu-layout1">
            <div class="modal-menu-list">
              <router-link to="" @click="alertOpen(12)" class="modal-menu-btn menu-primary"
              >승인완료
              </router-link>
            </div>
          </article>
        </div>
      </div>
    </div>
  </article>

  <!--  배정 불가  -->
  <article v-show="popup === 4" class="popup popup-assignment-cancel" tabindex="-3" style="">
    <div class="popup-wrapper">
      <div class="popup-contents">
        <div class="popup-head-box py-5 px-10">
          <div class="head-tit-box">배정 불가</div>

          <div @click="closePopup(0)" class="head-option-box">
            <a class="popup-close-btn">
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
            </a>
          </div>
        </div>

        <div class="popup-body-box py-5 px-10">
          <div class="d-flex flex-column pb-6">
            <div class="fw-medium fs-16px text-black pb-4">미수용 사유를 선택해주세요.</div>

            <div class="">
              <article class="toggle-list-layout3">
                <div class="toggle-list">
                  <label>
                    <input type="radio" name="toggle1" value="BNRN0001" v-model="aprv.negCd" />
                    <span class="txt">중환자실 부족</span>
                  </label>

                  <label>
                    <input type="radio" name="toggle1-1" value="BNRN0002" v-model="aprv.negCd" />
                    <span class="txt">일반병실 부족</span>
                  </label>

                  <label>
                    <input type="radio" name="toggle1-1" value="BNRN0003" v-model="aprv.negCd" />
                    <span class="txt">응급수술 불가</span>
                  </label>

                  <label>
                    <input type="radio" name="toggle1-1" value="BNRN0004" v-model="aprv.negCd" />
                    <span class="txt">의료인 부족</span>
                  </label>

                  <label>
                    <input type="radio" name="toggle1-1" value="BNRN0005" v-model="aprv.negCd" />
                    <span class="txt">응급실 과밀화</span>
                  </label>

                  <label>
                    <input type="radio" name="toggle1-1" value="BNRN0006" v-model="aprv.negCd" />
                    <span class="txt">장비 부족</span>
                  </label>

                  <label>
                    <input type="radio" name="toggle1-1" value="BNRN0007" v-model="aprv.negCd" />
                    <span class="txt">기타</span>
                  </label>
                </div>
              </article>
            </div>
          </div>

          <div>
            <div class="fw-medium fs-16px text-black pb-4">상세 사유 입력</div>

            <div>
              <div class="textbox">
                <textarea id="deniedAsgn"
                          @input="updateCharacterCount(0)"
                          maxlength="500"
                          placeholder="메시지 입력"
                          style="height: 120px"
                          v-model="aprv.msg"
                ></textarea>
                <div class="limit-box">
                  <span id="textarea1">{{ characterCount }}</span
                  >/500자
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="popup-foot-box py-5 px-10">
          <article class="modal-menu-layout1">
            <div class="modal-menu-list">
              <router-link to="" @click="alertOpen(5)" class="modal-menu-btn menu-primary"
              >미수용 처리
              </router-link>
            </div>
          </article>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import DataPagination from '@/components/user/cpnt/DataPagination.vue'
import { mapState } from 'vuex'
import { ref } from 'vue'
import {
  backBtn,
  getAge,
  getDt,
  getDtBlue,
  getGndr,
  getTag,
  getTelno,
  getTLDt,
  getTLIcon,
  goAsgn,
  maskingNm,
  openAddressFinder,
  regNewPt,
  openPopup, reqBedType, toggleCheckbox, getUndrDses
} from '@/util/ui'
import user from '@/store/modules/user'
import { JobCode } from '@/util/sbas_cnst'
import MyInfoModal from '@/components/user/modal/MyInfoModal.vue'


export default {

  components: { MyInfoModal, DataPagination },
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

    return {
      showTable,
      trsfArr,
      isAlert,
      errMsg,
      cncBtn /* alert 취소버튼 유무 */,
      toggleTable
    }
  },
  watch: {},
  data() {
    return {
      JobCode,
      sortedList: [],
      reqBedType,
      displayRowsCount: 15,
      page: 1,
      showModal: null,
      transCondition1: false,
      transCondition2: false,
      allChked: false,
      mode: '',
      filter: {
        states: [
          { label: '병상요청', value: 'BAST0003' },
          { label: '병상배정', value: 'BAST0004' },
          { label: '이송 · 배차', value: 'BAST0005' },
          { label: '입 ·퇴원 처리', value: 'BAST0006' },
          { label: '완료', value: 'BAST0007' },
          { label: '완료', value: 'BAST0008' }
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
      preRpt: null,
      content: '',
      characterCount: 0,
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
      aprv: {
        ptId: '',
        bdasSeq: '',
        aprvYn: 'Y',
        negCd: null,
        msg: '',
        reqHospIdList: []
      },
      selectedInst: '구급대',
      selectedFm1: '구급대원',
      selectedFm2: '구급대원',
      selectedFm3: '구급대원',
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
      mediConfirm: {
        ptId: '',
        aprvYn: 'Y',
        hospId: '',
        negCd: '',
        asgnReqSeq: null
      },
      hosptlzdiscg: {
        ptId: '',
        bdasSeq: '',
        hospId: '',
        msg: '',
        admsStatCd: 'IOST0001',
        dschRsnCd: ''
      },
      chrgUserId: [],
      undrDsesCdArr: [],
      visibleRef: false,
      imgsRef: '',
      indexRef: 0
    }
  },
  computed: {
    user() {
      return user
    },
    ...mapState('bedasgn', [
      'bdList',
      'bdList2',
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
      'transInfo'
    ]),
    ...mapState('patnt', ['existPt', 'ptBI', 'ptDetail', 'rptInfo', 'zip', 'isSpinner']),
    ...mapState('user', ['userInfo', 'cmSido', 'chrgInfo']),
    ...mapState('admin', ['firestatnList', 'firemenList', 'medinstList', 'organMedi']),

    startIndex() {
      return (this.page - 1) * this.displayRowsCount
    },
    endIndex() {
      return this.page * this.displayRowsCount
    },
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
    /*sortedBdList() {
      let list = []
      if (this.bdList2 !== null && this.bdList2 !== undefined) {
        list = this.bdList2.reduce((acc, item, idx) => {
          return acc.concat(
            item.items.map((innerItem) => {
              innerItem.state = idx
              this.sortedList = innerItem
              return innerItem
            })
          )
        }, [])
      }
      if (this.filter.selectedStates.length === 0) {
        //this.sortedList = list
        return list
      } else {
        //this.sortedList = list.filter((item) => this.filter.selectedStates.includes(item.state))
        return list.filter((item) => this.filter.selectedStates.includes(item.state))
      }
    }*/
  },
  methods: {
    toggleCheckbox,
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
      }
      this.getBdList()
    },
    showChrgDetail(chrgId) {
      this.$store.dispatch('user/getChrgUserInfo', chrgId)
      this.mode = 'chrgInfo'
      //console.log('showChrgDetail', JSON.stringify(this.chrgInfo))
    },
    closeChrgDetail() {
      this.mode = ''
    },
    getBdList() {
      //this.search = this.initSearch
      this.$store.dispatch('bedasgn/getBdListWeb')
    },
    /*countBdList() {
      if (this.filter.selectedStates.length === 0) {
        return this.bdCnt.reduce((i, count) => i + count, 0)
      } else {
        return this.filter.selectedStates.reduce((i, state) => i + this.bdCnt[state], 0)
      }
    },*/
    parseIntAge(age) {
      if (age !== null) {
        return parseInt(age)
      } else {
        return null
      }
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
        /*삭제기능 있는지 확인*/
        this.setDelBdList(bdList)
      })
    },
    setDelBdList(data) {
      console.log(data)
    },
    initNaverMap() {
      // 네이버 지도 API 로드
      const script = document.createElement('script')
      script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=1ewyt3v33o'
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    },
    loadNaverMapAsync() {
      // 네이버 지도 생성 // 35.9561644!4d128.5653029
      let lat = this.transInfo.dprtDstrLat ?? '-'
      let lon = this.transInfo.dprtDstrLon ?? '-'
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
      } else if (idx === 5) {
        /* 승인배정반 불가 alert*/
        this.errMsg = '배정불가 처리 하시겠습니까?'
        this.cncBtn = true
        this.isAlert = true
        if (this.userInfo.jobCd === JobCode.Aprv || this.userInfo.jobCd === JobCode.Sysa) {
          this.alertIdx = 5
        } else if (this.userInfo.jobCd === JobCode.Meds) {
          this.alertIdx = 14
        }
      } else if (idx === 6) {
        /*승인불가 후 alert*/
        this.errMsg = '배정불가 처리 되었습니다'
        this.isAlert = true
        this.alertIdx = 6
      } else if (idx === 7) {
        /*배정반 원내승인 */
        this.errMsg = '병상요청을\n승인 하시겠습니까?'
        this.cncBtn = true
        this.isAlert = true
        this.alertIdx = 7
      } else if (idx === 8) {
        /*배정반 원내승인 후 alert*/
        this.errMsg = '승인 되었습니다.'
        this.isAlert = true
        this.alertIdx = 8
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
      } else if (idx === 11) {
        this.errMsg = '이송처리하겠습니까?'
        this.isAlert = true
        this.alertIdx = 11
      } else if (idx === 12) {
        /*의료진 승인*/
        this.errMsg = '병상요청을 승인 하시겠습니까?'
        this.cncBtn = true
        this.isAlert = true
        this.alertIdx = 12
      } else if (idx === 13) {
        this.errMsg = '승인 되었습니다.'
        this.isAlert = true
        this.alertIdx = 13
      } else if (idx === 14) {
        this.errMsg = '입/퇴원 처리하시겠습니까?'
        this.isAlert = true
        this.cncBtn = true
        this.alertIdx = 15
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
      } else if (res === 5) {
        this.aprv.aprvYn = 'N'
        this.aprv.ptId = this.bdDetail.ptId
        this.aprv.bdasSeq = this.bdDetail.bdasSeq
        this.$store.dispatch('bedasgn/aprvBedAsgn', this.aprv)
        this.alertClose()
        this.alertOpen(6)
      } else if (res === 6) {
        this.alertClose()
        this.setNull()
      } else if (res === 7) {
        this.aprv.ptId = this.bdDetail.ptId
        this.aprv.bdasSeq = this.bdDetail.bdasSeq
        this.$store.dispatch('bedasgn/aprvBedAsgn', this.aprv)
        this.alertClose()
        this.alertOpen(8)
      } else if (res === 8) {
        this.alertClose()
        this.closeModal()
        this.setNull()
      } else if (res === 9) {
        this.removeRpt()
        this.newPt = this.initNewPt
        this.dsInfo = this.initDsInfo
        this.alertClose()
        this.alertOpen(10)
      } else if (res === 10) {
        this.alertClose()
      } else if (res === 11) {
        this.trsfInfo.bdasSeq = this.bdDetail.bdasSeq
        this.trsfInfo.ptId = this.bdDetail.ptId
        console.log(this.trsfInfo)
        await this.$store.dispatch('bedasgn/cfmTrsf', this.trsfInfo)
        this.alertClose()
        this.popup = 100
        this.closeModal()
      } else if (res === 12) {
        // Todo 전산이 승인하면 담당 병원정보 없어서 에러발생
        this.mediConfirm.ptId = this.bdDetail.ptId
        this.mediConfirm.bdasSeq = this.bdDetail.bdasSeq
        this.mediConfirm.hospId = this.userInfo.instId
        this.mediConfirm.asgnReqSeq = this.getAsgnReqSeq()
        console.log(this.mediConfirm)
        this.$store.dispatch('bedasgn/cfmMedi', this.mediConfirm)
        this.alertClose()
        this.alertOpen(13)
      } else if (res === 13) {
        this.alertClose()
        this.popup = 100
        this.closeModal()
        this.tab = 0
      } else if (res === 14) {
        this.mediConfirm.ptId = this.bdDetail.ptId
        this.mediConfirm.bdasSeq = this.bdDetail.bdasSeq
        this.mediConfirm.hospId = this.userInfo.instId
        this.mediConfirm.asgnReqSeq = this.getAsgnReqSeq()
        this.mediConfirm.negCd = this.aprv.negCd
        this.mediConfirm.aprvYn = 'N'
        console.log(this.mediConfirm)
        this.$store.dispatch('bedasgn/cfmMedi', this.mediConfirm)
        this.alertClose()
        this.alertOpen(13)
      } else if (res === 15) {
        this.hosptlzdiscg.bdasSeq = this.bdDetail.bdasSeq
        this.hosptlzdiscg.ptId = this.bdDetail.ptId
        this.hosptlzdiscg.roomNm = this.hosptlzdiscg.wardNm
        this.hosptlzdiscg.hospId = this.getChrgTL(this.timeline.items, 1)
        console.log(this.hosptlzdiscg)
        this.$store.dispatch('bedasgn/cfmHosp', this.hosptlzdiscg)
        this.alertClose()
        this.alertOpen(13)
      }
      console.log(res)
    },
    alertClose() {
      this.errMsg = ''
      this.cncBtn = false
      this.isAlert = false
      this.alertIdx = 100
    },
    setActive(idx) {
      this.tabidx = idx
      if (idx === 2) {
        this.loadNaverMapAsync()
      }
    },
    openPopup,
    getTLDt,
    getTLIcon,
    closePopup(idx) {
      if (idx === 0) {
        this.popup = 100
        this.content = ''
        this.characterCount = 0
      }
    },
    backBtn,
    getUndrDses,
    goAsgn,
    maskingNm,
    getDt,
    getDtBlue,
    getTag,
    updateCharacterCount(idx) {
      const messageProps = [this.aprv, this.mediConfirm, this.hosptlzdiscg, this.trsfInfo]
      const currentMessage = messageProps[idx].msg
      if (currentMessage === null || currentMessage === '' || currentMessage === undefined) {
        this.characterCount = this.content.length
      } else {
        this.characterCount = currentMessage.length
      }
    },
    getGndr,
    getAge,
    getAddr(txt) {
      const words = txt.split(' ')

      if (words.length >= 2) {
        return words.slice(0, 2).join(' ')
      } else words
    },
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
    regDsInfo() {
      console.log(this.ptBI)
    },
    regSvInfo() {
      console.log(this.ptSv)
    },
    regStrtPoint() {
      console.log(this.spInfo)
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
    getAsgnReqSeq() {
      let asgnReqSeq
      this.chrgUserId.forEach((item) => {
        if (item.chrgUserId === this.userInfo.id) {
          asgnReqSeq = item.asgnReqSeq
        }
      })
      return asgnReqSeq
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
    loadTrnsfInfo(num) {
      /*요청자 지역코드 받아와야 됨*/
      const data = { dstr1Cd: num }
      this.$store.dispatch('admin/getFireStatn', data)
      this.openModal(3)
    },
    getFiremen(data) {
      /*구급대원*/
      console.log(data)
      this.trsfInfo.instId = data.instId
      this.trsfInfo.ambsNm = data.instNm
      this.$store.dispatch('admin/getFiremen', data)
    },
    fillFiremen(data, idx) {
      console.log('실행?' + data)
      this.trsfInfo[`crew${idx}Id`] = data.crewId
      this.trsfInfo[`crew${idx}Pstn`] = data.pstn
      this.trsfInfo[`crew${idx}Nm`] = data.crewNm
      this.trsfInfo[`crew${idx}Telno`] = data.telno
      console.log(this.trsfInfo)
    },
    getChrgTL(data, idx) {
      if (data.length !== 0) {
        const result = data.find((item) => item.title.includes('입원'))

        if (result) {
          switch (idx) {
            case 0:
              return result.chrgInstNm
            case 1:
              return result.chrgInstId
          }
        }
      }
    },
    setHosptlzdiscg(idx) {
      switch (idx) {
        case 1:
          this.hosptlzdiscg.admsStatCd = 'IOST0001'
          break
        case 2:
          this.hosptlzdiscg.admsStatCd = 'IOST0002'
          break
        case 3:
          this.hosptlzdiscg.admsStatCd = 'IOST0003'
          break
      }
    },
    showImageLightBox() {
      this.imgsRef = this.preRpt
      this.visibleRef = true
    },
    onHide() {
      this.visibleRef = false
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
.modal.show {
  background-color: rgba(0, 0, 0, 0.4);
  display: block;
}
.detail-layout1, detail-wrap {
  height: 100%;
}

.popup {
  display: block;
}

.item-box.suspend {
  border: 3px solid #74afeb !important;
  background-color: #74afeb33;
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

#map {
  position: absolute !important;
  width: 368px;
  height: 100%;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  border-top: 1px solid #555;
}

li.custom-style::before {
  display: none;
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
.thum-hspt {
  border: 1px solid gray;
  filter: grayscale(1);
  border-radius: 6px;
}

.ptnt-type {
  padding-top: 8px;
}

</style>
