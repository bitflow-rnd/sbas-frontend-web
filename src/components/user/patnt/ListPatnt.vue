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
                <a href="/index.html" class="text-hover-primary">
                  <i class="fa-solid fa-house"></i>
                </a>
              </li>
              <!--end::Item-->
              <!--begin::Item-->
              <li class="breadcrumb-item">
                <!--begin::Svg Icon | path: icons/duotune/arrows/arr071.svg-->
                <span class="svg-icon svg-icon-4 mx-n1">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
                              d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                              fill="currentColor"/>
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
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
                              d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                              fill="currentColor"/>
												</svg>
											</span>
                <!--end::Svg Icon-->
              </li>
              <!--end::Item-->
              <!--begin::Item-->
              <li class="breadcrumb-item text-gray-500 mx-n1"><h1
                  class="page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-2 m-0">환자
                정보 관리</h1></li>
              <li class="breadcrumb-item ml-2"><span>&nbsp;설명란</span></li>
              <!--end::Item-->
            </ul>
            <!--end::Breadcrumb-->
            <!--begin::Title-->
            <!--end::Title-->
          </div>
          <!--end::Page title-->
          <!--begin::Actions-->
          <div class="d-flex align-items-center gap-2 gap-lg-3">
            <a href="#" class="btn btn-flex btn-sm btn-secondary fs-7" data-bs-toggle="modal"
               data-bs-target="#kt_modal_view_users"><i class="fa-solid fa-download"></i> 엑셀다운로드</a>
            <a @click="showValue()" class="btn btn-sm btn-flex btn-primary align-self-center px-3"
               data-bs-toggle="modal"
               data-bs-target="#kt_modal_user_profile_view">
              <i class="fa-solid fa-plus"></i> 등록
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

              <div class="form-head-box">

              </div>


              <div class="form-body-box">

                <div class="table-box">
                  <table>
                    <colgroup>
                      <col style="width: 168px;">
                      <col style="width: auto;">
                      <col style="width: 168px;">
                      <col style="width: auto;">
                    </colgroup>
                    <tbody>
                    <tr>
                      <th>주 담당지역 <span class="text-primary">*</span></th>
                      <td>
                        <div class="item-cell-box" v-for="(gender, idx) in genders" :key="idx">

                          <div class="cbox me-4">
                            <label>
                              <input v-model="filterPatient['gender']" type="checkbox" name="gender"
                                     :value="gender"><i></i>
                              <span class="txt">{{ gender }}</span>
                            </label>
                          </div>

                        </div>
                      </td>
                      <th>국적</th>
                      <td>
                        <div class="item-cell-box">
                          <div class="sbox w-175px">
                            <select v-model="filterPatient['nationality']">
                              <option>전체</option>
                              <option>대한민국</option>
                              <option>외국인</option>
                              <option>정보미등록</option>
                            </select>
                          </div>

                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>지역</th>
                      <td>
                        <div class="item-cell-box">
                          <div class="sbox w-175px">
                            <select>
                              <option>시/도 전체</option>
                            </select>
                          </div>

                          <div class="sbox w-175px ms-2">
                            <select>
                              <option>시/군/구 전체</option>
                            </select>
                          </div>
                        </div>
                      </td>
                      <th>배정병원</th>
                      <td>
                        <div class="item-cell-box">
                          <div class="sbox w-175px">
                            <select disabled>
                              <option>병원 전체</option>
                            </select>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>배정상태</th>
                      <td colspan="3">
                        <div class="item-cell-box" v-for="(status, idx) in assignmentStatuses" :key="idx">

                          <div class="cbox me-4">
                            <label>
                              <input type="checkbox" v-model="filterPatient['assignmentStatus']" name="state"
                                     :value="status"><i></i>
                              <span class="txt">{{ status }}</span>
                            </label>
                          </div>

                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>기간검색</th>
                      <td colspan="3">
                        <div class="item-cell-box">
                          <div class="sbox w-175px me-5">
                            <select v-model="filterPatient['searchDateField']">
                              <option>등록일</option>
                            </select>
                          </div>
                          <template v-for="(range, idx) in dateRanges" :key="idx">
                            <div class="rbox me-4">
                              <label>
                                <input type="radio" v-model="filterPatient['searchDateRange']" :value="range"
                                       name="range"><i></i>
                                <span class="txt">{{ range }}</span>
                              </label>
                            </div>
                          </template>
                          <div class="tbox w-150px ms-10 with-calendar">
                            <input type="text" :disabled="enableDatePicker" class="date-picker"
                                   placeholder="2023-01-23">
                          </div>
                          <div class="unit-box ms-2 text-gray-600">~</div>
                          <div class="tbox w-150px ms-2 with-calendar">
                            <input type="text" :disabled="enableDatePicker" class="date-picker"
                                   placeholder="2023-01-23">
                          </div>
                        </div>

                      </td>
                    </tr>

                    <tr>
                      <th>검색어</th>
                      <td colspan="3">
                        <div class="item-cell-box">

                          <div class="sbox w-175px me-5">
                            <select v-model="filterPatient['searchField']">
                              <option>환자이름</option>
                            </select>
                          </div>

                          <div class="tbox w-400px with-btn">
                            <input type="text" v-model="filterPatient['searchText']" placeholder="검색어 입력">

                            <a @click="search()" class="input-btn">
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
            <h5>검색결과<span class="position-absolute translate-middle rounded-pill bg-primary">99+</span></h5>

            <article class="table-list-layout1">

              <div class="table-body-box">

                <div class="table-box with-scroll small">
                  <table>
                    <colgroup>
                      <col style="width: 70px;">
                      <col style="width: 50px;">
                      <col style="width: 100px;">
                      <col style="width: 100px;">
                      <col style="width: 100px;">
                      <col style="width: 100px;">
                      <col style="width: 100px;">
                      <col style="width: 100px;">
                      <col style="width: 100px;">
                      <col style="width: 100px;">
                      <col style="width: 100px;">
                      <col style="width: 100px;">
                      <col style="width: 100px;">

                    </colgroup>
                    <thead>
                    <tr class="small">
                      <th>순번</th>
                      <th>
                        <div class="cbox">
                          <label>
                            <input @change="allCodesChangeState()" type="checkbox"
                                   class="all-chk" v-model="allPatientsSelected"
                                   :disabled="patientData.length === 0"><i></i>
                          </label>
                        </div>
                      </th>
                      <th>이름</th>
                      <th>나이</th>
                      <th>성별</th>
                      <th>질병명</th>
                      <th>연락처</th>
                      <th>국적</th>
                      <th>거주지</th>
                      <th>배정병원</th>
                      <th>배정상태</th>
                      <th>최근 업데이트일</th>
                      <th>작업</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr v-for="(patient, idx) in paginatedPatientData" :key="idx">
                      <td>{{ filteredPatientData.findIndex(v => v === patient) + 1 }}</td>
                      <td>
                        <div class="cbox d-flex justify-content-center">
                          <label>
                            <input type="checkbox" :value="patient" v-model="checkedPatients"><i></i>
                          </label>
                        </div>
                      </td>
                      <td>{{ patient['ptNm'] }}</td>
                      <td>{{ patient['age'] }}</td>
                      <td>{{ patient['gndr'] }}</td>
                      <td>{{ patient['tagList'].join(', ') }}</td>
                      <td>{{ patient['mpno'] }}</td>
                      <td>{{ patient['natiCd'] }}</td>
                      <td>{{ `${patient['dstr1CdNm']} ${patient['dstr2CdNm'] || ''}` }}</td>
                      <td>{{ patient['hospNm'] }}</td>
                      <td>{{ patient['statCdNm'] }}</td>
                      <td>{{ new Date(patient['updtDttm']).toDateString() }}</td>
                      <td>
                        <!--                        <a @click="edit()" class="btn btn-flex btn-xs btn-outline btn-outline-primary"-->
                        <!--                           data-bs-toggle="modal" data-bs-target="#kt_modal_user_profile_view">수정</a>-->
                        <a @click="selectPatient(patient)" class="btn btn-flex btn-xs btn-outline btn-outline-primary"
                           data-bs-target="#kt_modal_bedasgn_detail" data-bs-toggle="modal"
                        >수정</a>
                      </td>
                    </tr>
                    </tbody>

                  </table>

                </div>
              </div>

            </article>

            <data-pagination @change="changePage" :next-page-buttons-count="nextPageButtonsCount"
                             :previous-page-buttons-count="previousPageButtonsCount"
                             :display-change-page-buttons-count="displayChangePageButtonsCount"
                             :display-rows-count="displayRowsCount"
                             :data-length="filteredPatientData.length"></data-pagination>


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

  <div class="modal fade" id="kt_modal_user_profile_view" tabindex="-1" aria-hidden="true" style="">
    <!--begin::Modal dialog-->
    <div class="modal-dialog col-lg-3 modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>환자 등록/수정</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
            <span class="svg-icon svg-icon-1">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)"
                        fill="currentColor"></rect>
									<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)"
                        fill="currentColor"></rect>
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
            <div class="table-view-box" style="width:363px;">

              <article class="table-form-layout1 h-100">

                <div class="form-head-box">

                </div>


                <div class="form-body-box h-100">

                  <div class="table-box h-100">
                    <table class="h-100">
                      <colgroup>
                        <col style="width: 363px;">
                      </colgroup>
                      <tbody>
                      <tr>
                        <th>업로드</th>
                      </tr>
                      <tr>
                        <td>
                          <article class="modal-profile-layout1">

                            <div class="profile-card-box flex-column mx-auto" style="width: 264px;">
                              <div class="profile-view-box " style="width: 100%; height: 264px;">
                                <img src="/img/common/img_profile_dummy.png" alt="이미지">
                                <a class="remove-btn"><img src="/img/common/ic_profile_remove.svg" alt="이미지"></a>
                              </div>

                              <div class="profile-upload-box">

                                <div class="upload-box">
                                  <label
                                      class="btn btn-flex justify-content-center btn-primary py-0 px-0 h-30px w-80px certify-btn rounded-1 mt-2 btn-outline btn-outline-primary ">
                                    <input type="file">
                                    수정하기
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

                <div class="form-head-box">

                </div>


                <div class="form-body-box">

                  <div class="table-box">
                    <table>
                      <colgroup>
                        <col style="width: 168px;">
                        <col style="width: auto;">
                        <col style="width: 168px;">
                        <col style="width: auto;">
                      </colgroup>
                      <tbody>
                      <tr>
                        <th>환자이름 <span class="text-primary">*</span></th>
                        <td>
                          <div class="item-cell-box">
                            <div class="tbox">
                              <input type="text" :value="selectedPatient?.['ptNm']">
                            </div>
                          </div>
                        </td>
                        <th>성별</th>
                        <td>{{ selectedPatient?.['gndr'] }}</td>
                      </tr>

                      <tr>
                        <th>주민등록번호 <span class="text-primary">*</span></th>
                        <td>
                          <div class="item-row-box">
                            <div class="item-cell-box">
                              <div class="tbox">
                                <input type="text" value="이름">
                              </div>
                              <div class="unit-box mx-2 text-gray-600">-</div>
                              <div class="tbox w-30px" style="min-width: 30px;">
                                <input type="password" value="*" class="p-0 text-center fs-3x" maxlength="1">
                              </div>
                              <div class="unit-box ms-2" style="line-height: 30px;">●●●●●●</div>

                            </div>
                          </div>
                          <div class="item-row-box">
                            <div class="item-note-box">* 주민등록번호 입력</div>
                          </div>

                        </td>
                        <th>나이 (만)</th>
                        <td>{{ selectedPatient?.['age'] }}</td>
                      </tr>

                      <tr>
                        <th rowspan="3">주소 <span class="text-primary">*</span></th>
                        <td rowspan="3">
                          <div class="item-row-box">
                            <div class="item-cell-box full">
                              <div class="tbox full">
                                <input type="text" value="03672" readonly>
                              </div>
                              <a href="javascript:void(0);"
                                 class="btn btn-flex justify-content-center btn-primary py-0 px-0 h-30px w-80px ms-3 certify-btn rounded-1"
                                 style="min-width: 80px;">주소검색</a>
                            </div>
                          </div>

                          <div class="item-row-box">
                            <div class="item-cell-box full">
                              <div class="tbox full">
                                <input type="text" value="경상북도 칠곡군 왜관읍 중앙로">
                              </div>
                              <div class="item-note-box flex-shrink-0 ms-2 text-black">
                                위도 192.1680001111
                              </div>
                            </div>
                          </div>

                          <div class="item-row-box">
                            <div class="item-cell-box full">
                              <div class="tbox full">
                                <input type="text" value="118 110동 101호">
                              </div>
                              <div class="item-note-box flex-shrink-0 ms-2 text-black">
                                경도 38.2431245
                              </div>
                            </div>
                          </div>

                          <div class="item-row-box">
                            <div class="item-cell-box">
                              <div class="item-note-box">* 기본주소 입력</div>
                            </div>
                          </div>


                        </td>

                        <th>휴대전화번호</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input type="text" value="010-7579-1591">
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>보호자 이름</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input type="text" value="성민호">
                            </div>
                          </div>
                        </td>
                      </tr>


                      <tr>
                        <th>전화번호</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input type="text" value="010-7579-1591">
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
                                  <input type="radio" name="toggle1" checked="">
                                  <span class="txt">생존</span>
                                </label>

                                <label>
                                  <input type="radio" name="toggle1">
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
                              <input type="text" value="회사원">
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
                                    <input type="radio" name="nation" checked="">
                                    <span class="txt">대한민국</span>
                                  </label>

                                  <label>
                                    <input type="radio" name="nation">
                                    <span class="txt">알수없음</span>
                                  </label>

                                  <label>
                                    <input type="radio" name="nation" value="input">
                                    <span class="txt">직접입력</span>
                                  </label>


                                </div>

                              </article>

                              <div class="item-note-box">* 국적 선택</div>
                            </div>
                          </div>

                          <div class="item-row-box">
                            <div class="tbox" style="width: 211px;">
                              <input type="text" value="" placeholder="국가명 입력" readonly class="nation-input">
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
                                  <input type="checkbox" name="disease"><i></i>
                                  <span class="txt">고혈압</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"><i></i>
                                  <span class="txt">당뇨</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"><i></i>
                                  <span class="txt">고지혈증</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"><i></i>
                                  <span class="txt">심혈관</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"><i></i>
                                  <span class="txt">뇌혈관</span>
                                </label>
                              </div>

                            </div>

                            <div class="cbox-row">

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"><i></i>
                                  <span class="txt">암</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"><i></i>
                                  <span class="txt">만성폐질환</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"><i></i>
                                  <span class="txt">신장질환</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"><i></i>
                                  <span class="txt">정신질환</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"><i></i>
                                  <span class="txt">결핵</span>
                                </label>
                              </div>

                            </div>

                            <div class="cbox-row">

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"><i></i>
                                  <span class="txt">천식 등 알레르기</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"><i></i>
                                  <span class="txt">면역력저하자</span>
                                </label>
                              </div>

                            </div>

                            <div class="cbox-row">


                              <div class="d-inline-flex">


                                <div class="cbox w-auto">
                                  <label>
                                    <input type="checkbox" name="disease"><i></i>
                                    <span class="txt">기타</span>
                                  </label>
                                </div>

                                <div class="tbox d-inline-flex ms-4 w-300px">
                                  <input type="text" placeholder="직접 입력">
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
          </div>

          <article class="modal-menu-layout1 pt-40">

            <div class="modal-menu-list pt-5">
              <a href="javascript:alertPopupOpen('메시지 입력')" class="modal-menu-btn menu-cancel">이전</a>


              <a href="javascript:popupOpen('exist')" class="modal-menu-btn menu-primary">다음</a>
            </div>


          </article>
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <div class="modal fade" id="kt_modal_bedasgn_detail" tabindex="-1" aria-hidden="true" style="">
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-1500px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>병상배정 세부내용</h2>
          <!--end::Modal title-->
          <!--begin::Close-->

          <div class="btn-list">
            <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
              <i class="fa-solid fa-share-nodes text-black" style="font-size:18px;"></i>
            </div>

            <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
              <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
              <span class="svg-icon svg-icon-1">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)"
                        fill="currentColor"></rect>
									<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)"
                        fill="currentColor"></rect>
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

                    <a href="#none" class="option-btn">
                      <i class="fa-solid fa-share-nodes text-black" style="font-size:18px;"></i>
                    </a>
                  </div>

                </div>

                <div class="detail-body-box px-10">

                  <article class="table-form-layout1">

                    <div class="form-body-box overflow-y-auto" style="height:500px">

                      <div class="table-box pe-5">
                        <table>
                          <colgroup>
                            <col style="width: 168px;">
                            <col style="width: auto;">
                          </colgroup>
                          <tbody>
                          <tr>
                            <th>환자ID</th>
                            <td>{{ selectedPatientBasicInfo?.['ptId'] }}</td>
                          </tr>

                          <tr>
                            <th>이름</th>
                            <td>{{ selectedPatientBasicInfo?.['ptNm'] }}</td>
                          </tr>

                          <tr>
                            <th>주민번호</th>
                            <td>{{
                                `${selectedPatientBasicInfo?.['rrno1']}-${selectedPatientBasicInfo?.['rrno2']}******`
                              }}
                            </td>
                          </tr>

                          <tr>
                            <th>나이</th>
                            <td>{{ selectedPatientBasicInfo?.['age'] }}</td>
                          </tr>

                          <tr>
                            <th>성별</th>
                            <td>{{ selectedPatientBasicInfo?.['gndr'] }}</td>
                          </tr>

                          <tr>
                            <th>주소</th>
                            <td>
                              [zipCode]<br/>
                              {{ selectedPatientBasicInfo?.['bascAddr'] }}<br/>
                              {{ selectedPatientBasicInfo?.['detlAddr'] }}
                            </td>
                          </tr>

                          <tr>
                            <th>사망여부</th>
                            <td>{{ selectedPatientBasicInfo?.['dethYn'] }}</td>
                          </tr>

                          <tr>
                            <th>국적</th>
                            <td>{{ selectedPatientBasicInfo?.['natiNm'] }}</td>
                          </tr>

                          <tr>
                            <th>휴대전화번호</th>
                            <td>{{ selectedPatientBasicInfo?.['mpno'] }}</td>
                          </tr>

                          <tr>
                            <th>전화번호</th>
                            <td>{{ selectedPatientBasicInfo?.['telno'] }}</td>
                          </tr>

                          <tr>
                            <th>보호자 이름</th>
                            <td>{{ selectedPatientBasicInfo?.['nokNm'] }}</td>
                          </tr>

                          <tr>
                            <th>직업</th>
                            <td>{{ selectedPatientBasicInfo?.['job'] }}</td>
                          </tr>

                          <tr>
                            <th>기저질환</th>
                            <td>{{ selectedPatientDiseaseInfo?.['undrDsesNms'].join(', ') }}</td>
                          </tr>

                          <tr>
                            <th>환자유형</th>
                            <td>{{
                                selectedPatient?.['tagList'] ? `#${selectedPatient['tagList'].join(', #')}` : ''
                              }}
                            </td>
                          </tr>


                          </tbody>
                        </table>
                      </div>

                      <div class="table-img-box pt-4">

                        <a href="javascript:void(0)" class="img-box">
                          <img src="/img/common/img_dummy_item1.png" alt="이미지">
                        </a>

                        <a href="javascript:void(0)" class="img-box">
                          <img src="/img/common/img_dummy_item1.png" alt="이미지">
                        </a>

                        <a href="javascript:void(0)" class="img-box">
                          <img src="/img/common/img_dummy_item1.png" alt="이미지">
                        </a>

                        <a href="javascript:void(0)" class="img-box">
                          <div class="cnt-box">+5</div>
                          <img src="/img/common/img_dummy_item1.png" alt="이미지">
                        </a>

                      </div>

                    </div>

                  </article>


                </div>

                <div class="detail-foot-box">
                  <article class="modal-menu-layout1 py-10">

                    <div class="modal-menu-list">
                      <a href="javascript:alertPopupOpen('메시지 입력')" class="modal-menu-btn menu-primary">수정</a>
                    </div>


                  </article>
                </div>

              </div>

              <div class="detail-info-box">

                <div class="detail-head-box px-10">

                  <div class="head-box">
                    <div class="head-txt-box">병상배정 이력</div>
                  </div>

                  <div class="option-box">
                  </div>

                </div>

                <div class="detail-body-box px-10">


                  <article class="table-list-layout2">

                    <div class="table-body-box overflow-y-auto" style="height: 500px;">

                      <div class="table-box pe-5">
                        <table>
                          <colgroup>
                            <col style="width: 50px;">
                            <col style="width: auto;">
                          </colgroup>
                          <tr>
                            <td class="py-5 px-3 text-center text-gray-700 fw-medium fs-6">3차</td>
                            <td class="py-5 px-3">
                              <div class="top-info-box d-flex align-items-center">

                                <div
                                    class="d-inline-flex align-items-center justify-content-center w-auto bg-primary h-25px w-65px text-white rounded-2 px-0 w-auto">
                                  병상요청
                                </div>

                                <div class="eclipse-box mx-3">asdf</div>
                                <div class="date-box text-gray-700 fw-regular">2023-03-11</div>

                              </div>
                              <div class="bottom-info-box d-flex mt-2">
                                <div class="name-box">칠곡경북대병원</div>
                                <div class="tag-box text-primary ms-2">#중증 #투석</div>

                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td class="py-5 px-3 text-center text-gray-700 fw-medium fs-6">3차</td>
                            <td class="py-5 px-3">
                              <div class="top-info-box d-flex align-items-center">

                                <div
                                    class="d-inline-flex align-items-center justify-content-center w-auto bg-primary h-25px w-65px text-white rounded-2 px-0 w-auto">
                                  병상요청
                                </div>

                                <div class="eclipse-box mx-3">asdf</div>
                                <div class="date-box text-gray-700 fw-regular">2023-03-11</div>

                              </div>
                              <div class="bottom-info-box d-flex mt-2">
                                <div class="name-box">칠곡경북대병원</div>
                                <div class="tag-box text-primary ms-2">#중증 #투석</div>

                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td class="py-5 px-3 text-center text-gray-700 fw-medium fs-6">3차</td>
                            <td class="py-5 px-3">
                              <div class="top-info-box d-flex align-items-center">

                                <div
                                    class="d-inline-flex align-items-center justify-content-center w-auto bg-gray-500 h-25px w-65px text-white rounded-2 px-0 w-auto">
                                  완료
                                </div>

                                <div class="eclipse-box mx-3">코로나바이러스감염증-19 코로나바이러스감염증-19</div>
                                <div class="date-box text-gray-700 fw-regular">2023-03-11</div>

                              </div>
                              <div class="bottom-info-box d-flex mt-2">
                                <div class="name-box">칠곡경북대병원</div>
                                <div class="tag-box text-primary ms-2">#중증 #투석</div>

                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td class="py-5 px-3 text-center text-gray-700 fw-medium fs-6">3차</td>
                            <td class="py-5 px-3">
                              <div class="top-info-box d-flex align-items-center">

                                <div
                                    class="d-inline-flex align-items-center justify-content-center w-auto bg-gray-500 h-25px w-65px text-white rounded-2 px-0 w-auto">
                                  완료
                                </div>

                                <div class="eclipse-box mx-3">코로나바이러스감염증-19 코로나바이러스감염증-19</div>
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
                      <a href="javascript:alertPopupOpen('메시지 입력')" class="modal-menu-btn menu-primary">병상요청</a>
                    </div>


                  </article>
                </div>

              </div>


              <div class="detail-info-box full d-flex flex-column" style="height: 665px;">

                <div class="detail-head-box px-10 h-80px">

                  <div class="head-box">
                    <div class="head-txt-box">타임라인</div>
                    <div class="head-sub-box mt-2 d-flex">
                      <div
                          class="d-inline-flex align-items-center justify-content-center w-auto bg-primary w-40px h-20px text-white rounded-2">
                        1차
                      </div>

                      <div class="d-inline-flex align-items-center justify-content-center w-auto text-gray-700 ms-2">
                        2023년 2월 28일 (수)
                      </div>

                    </div>
                  </div>

                  <div class="option-box">

                    <a href="#none" class="option-btn">
                      <i class="fa-solid fa-share-nodes text-black" style="font-size:18px;"></i>
                    </a>
                  </div>

                </div>

                <div class="detail-body-box pe-5 flex-root" style="min-height: 0;">

                  <article class="timeline-layout1 pb-5" style="height: 100%;">

                    <div class="timeline-wrap overflow-y-auto ps-10 pe-5 pt-5" style="height:100%;">

                      <ul>

                        <li>
                          <div class="ic-box">
                            <img src="/img/common/ic_timeline_state1.svg" alt="이미지">
                          </div>

                          <div class="item-box">
                            <div class="top-item-box">
                              <div class="state-box">승인</div>
                              <div class="date-box">오후 2시 23분</div>
                            </div>
                            <div class="mid-item-box">대구광역시 병상배정반 / 팀장 / 홍성수</div>
                            <div class="bottom-item-box">
                              <div class="msg-box">승인합니다. 가용 병상 확인 해주세요.</div>

                            </div>

                          </div>
                        </li>

                        <li>
                          <div class="ic-box">
                            <img src="/img/common/ic_timeline_state2.svg" alt="이미지">
                          </div>

                          <div class="item-box">
                            <div class="top-item-box">
                              <div class="state-box">배정거절</div>
                              <div class="date-box">오후 2시 23분</div>
                            </div>
                            <div class="mid-item-box">대구광역시 병상배정반 / 팀장 / 홍성수</div>
                            <div class="bottom-item-box">
                              <div class="msg-box">승인합니다. 가용 병상 확인 해주세요.</div>

                            </div>

                          </div>
                        </li>

                        <li>
                          <div class="ic-box">
                            <img src="/img/common/ic_timeline_state2.svg" alt="이미지">
                          </div>

                          <div class="item-box">
                            <div class="top-item-box">
                              <div class="state-box">배정완료</div>
                              <div class="date-box">오후 2시 23분</div>
                            </div>
                            <div class="mid-item-box">대구광역시 병상배정반 / 팀장 / 홍성수</div>
                            <div class="bottom-item-box">

                              <div class="msg-box">도착 5분전 전화 주시면 나가 있겠습니다.</div>

                            </div>

                          </div>
                        </li>

                        <li>
                          <div class="ic-box">
                            <img src="/img/common/ic_timeline_state3.svg" alt="이미지">
                          </div>

                          <div class="item-box">
                            <div class="top-item-box">
                              <div class="state-box">이송완료</div>
                              <div class="date-box">오후 2시 23분</div>
                            </div>
                            <div class="mid-item-box">대구광역시 중부 대명 구급 / 신채호 외 2명</div>
                            <div class="bottom-item-box">

                              <div class="item-img-group mb-4">
                                <div class="img-list">
                                  <a href="javascript:void(0)" class="img-box">
                                    <img src="/img/common/img_dummy_item1.png" alt="이미지">
                                  </a>

                                  <a href="javascript:void(0)" class="img-box">
                                    <img src="/img/common/img_dummy_item1.png" alt="이미지">
                                  </a>
                                </div>

                              </div>

                              <div class="msg-box">승인합니다. 가용 병상 확인 해주세요.</div>

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
                      <div class="img-list">
                        <div href="javascript:void(0)" class="img-box">
                          <img src="/img/common/img_dummy_item1.png" alt="이미지">
                          <a href="javascript:void(0)" class="remove-btn"
                             onclick="$(this).parents('.img-box').remove();">
                            <img src="/img/common/ic_profile_remove.svg" alt="이미지">
                          </a>
                        </div>

                        <div href="javascript:void(0)" class="img-box">
                          <img src="/img/common/img_dummy_item1.png" alt="이미지">
                          <a href="javascript:void(0)" class="remove-btn"
                             onclick="$(this).parents('.img-box').remove();">
                            <img src="/img/common/ic_profile_remove.svg" alt="이미지">
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="msg-group-box">

                      <div class="img-upload-box">
                        <label>
                          <input type="file">
                          <img src="/img/common/ic_msg_img_upload.svg" alt="이미지">
                        </label>
                      </div>
                      <div class="msg-input-box">
                        <input type="text" placeholder="메세지 입력">
                      </div>
                      <div class="msg-send-box">
                        <a href="#none" class="send-btn">
                          <img src="/img/common/ic_msg_send.svg" alt="이미지">
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

<script>

import DataPagination from "@/components/layout/DataPagination";

export default {
  components: {
    DataPagination
  },
  name: 'ListPatnt',
  props: {
    msg: String
  },
  async created() {
    await this.$store.dispatch("user/loadPatientData").then(res => this.patientData = res.data['result']['items'])
  },
  data() {
    return {
      assignmentStatuses: ["병상요청", "병상배정", "이송/배차", "입·퇴원처리", "완료", '해당없음'],
      genders: ["남", "여"],
      dateRanges: ["1개월", "3개월", "6개월", "1년", "전체", "직접지정"],
      selectedPatient: null,
      selectedPatientBasicInfo: null,
      selectedPatientDiseaseInfo: null,
      patientData: [],
      patientBasicInfo: [],
      patientDiseaseInfo: [],
      displayRowsCount: 10,
      displayChangePageButtonsCount: 10,
      previousPageButtonsCount: 4,
      nextPageButtonsCount: 4,
      page: 1,
      checkedPatients: [],
      allPatientsSelected: false,
      filterPatient: {
        gender: [],
        nationality: '전체',
        address: {
          first: '',
          second: ''
        },
        assignmentStatus: [],
        searchDateField: '등록일',
        searchDateFieldMap: {
          등록일: 'updtDttm'
        },
        searchDateRange: '전체',
        searchDateFrom: '',
        searchDateTo: '',
        searchField: '환자이름',
        searchFieldMap: {
          환자이름: 'ptNm'
        },
        searchText: ''
      },
    }
  },
  computed: {
    startIndex() {
      return (this.page - 1) * this.displayRowsCount;
    },
    endIndex() {
      return this.page * this.displayRowsCount;
    },
    paginatedPatientData() {
      return this.filteredPatientData.slice(this.startIndex, this.endIndex)
    },
    enableDatePicker() {
      return this.filterPatient['searchDateRange'] !== '직접지정'
    },
    // TODO: address, hospital, date
    filteredPatientData() {
      return this.patientData.filter((pt) => {
        const gender = this.filterPatient['gender'].length === 0
            ? true : this.filterPatient['gender'].some(x => pt['gndr'].includes(x))
        const nationality = this.filterPatient['nationality'] === '전체'
            ? true : pt['natiCd'] === this.filterPatient['nationality']
        const address = true
        const hospital = true
        const status = this.filterPatient['assignmentStatus'].length === 0
            ? true : this.filterPatient['assignmentStatus'].some(x => pt['statCdNm'].includes(x))
        const date = this.filterPatient['searchDateRange'] === '전체'
            ? true : false
        const text = pt[this.filterPatient['searchFieldMap'][this.filterPatient['searchField']]]
            .includes(this.filterPatient['searchText'])
        return gender && nationality && address && hospital && status && date && text
      })
    }
  },
  //정예준
  watch: {
    checkedPatients() {
      this.allPatientsSelected = this.checkedPatients.length === this.patientData.length;
      if (!this.patientData.length) {
        this.allPatientsSelected = false
      }
    }
  },
  methods: {
    async selectPatient(patient) {
      this.selectedPatient = patient
      const basicInfoIndex = this.patientBasicInfo.findIndex(pt => pt['ptId'] === patient['ptId'])
      const diseaseInfoIndex = this.patientDiseaseInfo.findIndex(pt => pt['ptId'] === patient['ptId'])
      if (basicInfoIndex === -1) {
        await this.$store.dispatch("user/loadPatientBasicInfo", patient['ptId']).then(
            res => {
              this.patientBasicInfo.push(res.data['result'])
              this.selectedPatientBasicInfo = res.data['result']
            }
        )
      } else {
        this.selectedPatientBasicInfo = this.patientBasicInfo[basicInfoIndex]
      }
      if (diseaseInfoIndex === -1) {
        await this.$store.dispatch("user/loadPatientDiseaseInfo", patient['ptId']).then(
            res => {
              this.patientDiseaseInfo.push(res.data['result'])
              this.selectedPatientDiseaseInfo = res.data['result']
            }
        )
      } else {
        this.selectedPatientDiseaseInfo = this.patientBasicInfo[diseaseInfoIndex]
      }
      console.log(this.selectedPatientBasicInfo)
      console.log(this.selectedPatientDiseaseInfo)
      console.log(this.selectedPatient)
    },
    changePage(newPage) {
      this.page = newPage
    },
    edit() {
      console.log(this.patientData)
    },
    allCodesChangeState() {
      if (this.allPatientsSelected) {
        this.checkedPatients = []
        this.patientData.forEach(patient => this.checkedPatients.push(patient))
      } else {
        this.checkedPatients = []
      }
    },
    search() {

    },
    showValue() {
      console.log(this.patientData)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.modal {
  --bs-modal-width: 98%;
}
</style>
