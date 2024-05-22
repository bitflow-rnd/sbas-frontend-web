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
              <li class="breadcrumb-item text-gray-700 fw-semibold lh-1 mx-n1 fs-6">
                기관정보 관리
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
              <li class="breadcrumb-item text-gray-500 mx-n1">
                <h1
                    class="page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-2 m-0"
                >
                  의료기관 관리
                </h1>
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
                class="btn btn-flex btn-sm btn-outline btn-outline-light fs-7 d-none"
            ><i class="fa-regular fa-trash-can"></i> 삭제</a
            >
            <a
                href="#"
                class="btn btn-flex btn-sm btn-secondary fs-7"
            ><i class="fa-solid fa-download"></i> 엑셀다운로드</a
            >
            <a
                href="#"
                class="btn btn-sm btn-flex btn-primary align-self-center px-3 d-none"
            >
              <i class="fa-solid fa-plus"></i> 병상요청
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
              <div v-if="medinstList!== undefined" class="form-body-box">
                <div class="table-form-toggle-box">
                  <router-link to="" class="table-form-toggle-btn" @click="toggleTable">
                    <i class="fa-solid" :class="showTable ? 'fa-angle-up' : 'fa-angle-down'"></i>
                  </router-link>
                </div>

                <div class="table-box with-toggle">
                  <table>
                    <colgroup>
                      <col style="width: 168px"/>
                      <col style="width: auto"/>
                      <col style="width: 168px"/>
                      <col style="width: auto"/>
                    </colgroup>
                    <tbody>
                    <tr data-toggle="false">
                      <th>검색조건</th>
                      <td>
                        <div class="item-cell-box">
                          <div class="sbox w-175px" @click="getSido">
                            <select v-model="filterMedinst['dstr1Cd']"
                                    @change="changeDstrCd1()">
                              <option value="" id="null">시/도 전체</option>
                              <option v-for="(item,idx) in cmSido" :key="idx"
                                      :value="item['cdId']">{{ item['cdNm'] }}
                              </option>
                            </select>
                          </div>

                          <div class="sbox w-175px ms-2">
                            <select :disabled="enableSecondAddressPicker" v-model="filterMedinst['dstr2Cd']" @change="changeDstrCd2()">
                              <option value="" id="null">시/군/구 전체</option>
                              <option v-for="(item,idx) in cmGugun" :key="idx"
                                      :value="item['cdId']">{{ item['cdNm'] }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </td>
                      <td colspan="2">
                        <div class="tbox w-400px with-btn">
                          <input
                              v-model="filterMedinst['text']"
                              type="text"
                              placeholder="의료기관명 또는 ID 입력"
                              @keyup.enter="search"
                          />

                          <router-link to="" @click="search" class="input-btn">
                            <i class="fa-solid fa-magnifying-glass"></i>
                          </router-link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>기관분류</th>
                      <td colspan="3">
                        <div class="item-row-box">
                          <div class="item-cell-box">
                            <div class="cbox">
                              <label>
                                <input type="checkbox" name="state"/><i></i>
                                <span class="txt">상급종합병원</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="state"/><i></i>
                                <span class="txt">종합병원</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="state"/><i></i>
                                <span class="txt">병원</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="state"/><i></i>
                                <span class="txt">요양병원</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="state"/><i></i>
                                <span class="txt">의원</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="state"/><i></i>
                                <span class="txt">보건소</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="state"/><i></i>
                                <span class="txt">보건지소</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="state"/><i></i>
                                <span class="txt">보건진료소</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="state"/><i></i>
                                <span class="txt">보건의료원</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="state"/><i></i>
                                <span class="txt">치과병원</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="state"/><i></i>
                                <span class="txt">치과의원</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="state"/><i></i>
                                <span class="txt">한방병원</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="state"/><i></i>
                                <span class="txt">한의원</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr v-show="showTable">
                      <th>가용병상</th>
                      <td>
                        <div class="item-cell-box">
                          <div class="cbox">
                            <label>
                              <input type="checkbox" name="type1"/><i></i>
                              <span class="txt">읍압격리</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="type1"/><i></i>
                              <span class="txt">일반격리</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="type1"/><i></i>
                              <span class="txt">일반</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="type1"/><i></i>
                              <span class="txt">소아읍압격리</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="type1"/><i></i>
                              <span class="txt">소아일반격리</span>
                            </label>
                          </div>
                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="type1"/><i></i>
                              <span class="txt">소아</span>
                            </label>
                          </div>
                        </div>
                      </td>

                      <th>가용 중증병상</th>
                      <td>
                        <div class="item-cell-box">
                          <div class="cbox">
                            <label>
                              <input type="checkbox" name="type2"/><i></i>
                              <span class="txt">중환자</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="type2"/><i></i>
                              <span class="txt">중증</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="type2"/><i></i>
                              <span class="txt">준증증</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="type2"/><i></i>
                              <span class="txt">중등증</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="type2"/><i></i>
                              <span class="txt">기타</span>
                            </label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr v-show="showTable">
                      <th>가용장비</th>
                      <td colspan="3">
                        <div class="item-cell-box">
                          <div class="cbox">
                            <label>
                              <input type="checkbox" name="type3"/><i></i>
                              <span class="txt">인공호흡기 일반</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="type3"/><i></i>
                              <span class="txt">인공호흡기 조산아</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="type3"/><i></i>
                              <span class="txt">인큐베이터</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="type3"/><i></i>
                              <span class="txt">ECMO</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="type3"/><i></i>
                              <span class="txt">중심체온조절유도기</span>
                            </label>
                          </div>
                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="type3"/><i></i>
                              <span class="txt">고압산소치료기</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="type3"/><i></i>
                              <span class="txt">CT</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="type3"/><i></i>
                              <span class="txt">MRI</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="type3"/><i></i>
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

            <!--end::Card toolbar-->
          </div>
          <!--end::Card header-->
          <!--begin::Card body-->
          <div v-if='medinstList.items !== undefined' class="card-body p-8">
            <!--begin::Table-->
            <h5>
              검색결과<span class="position-absolute translate-middle rounded-pill bg-primary">{{
                medinstList['count']
              }}</span>
            </h5>

            <article class="table-list-layout1">
              <div class="table-body-box">
                <div v-if="medinstList.items.length === 0" class="table-nodata py-40">
                  <div class="img-box">
                    <img src="/img/common/img_nodata.svg" alt="이미지"/>
                  </div>

                  <div class="txt-box pt-10">조회 결과가 없습니다.</div>
                </div>
                <div v-if="medinstList.items.length !== 0" class="table-box with-scroll small">
                  <table class="list-table-hoverable">
                    <colgroup>
<!--                      <col style="width: 40px"/>-->
                      <col style="width: 60px"/>
                      <col style="width: 40px" class='d-none'/>
                      <col style="width: 190px"/>
                      <col style="width: 150px"/>
                      <col style="width: 60px"/>
                      <col style="width: 60px"/>
                      <col style="width: 60px"/>
                      <col style="width: 60px"/>
                      <col style="width: 60px"/>
                      <col style="width: 60px"/>
                      <col style="width: 60px"/>
                      <col style="width: 60px"/>
                      <col style="width: 60px"/>
                      <col style="width: 60px"/>
                      <col style="width: 60px"/>
                      <col style="width: 60px"/>
                      <col style="width: 60px"/>
                      <col style="width: 60px"/>
                      <col style="width: 60px"/>
                      <col style="width: 60px"/>
                      <col style="width: 60px"/>
                      <col style="width: 60px"/>
                      <col style="width: 60px"/>
                      <col style="width: 65px"/>
                      <col style="width: 70px"/>
                    </colgroup>
                    <thead>
                    <tr class="small">
<!--                      <th rowspan="2">-->
<!--                        <div class="cbox">-->
<!--                          <label> <input type="checkbox" class="all-chk"/><i></i> </label>-->
<!--                        </div>-->
<!--                      </th>-->
                      <th rowspan="2">순번</th>
                      <th rowspan="2" class='d-none'>이미지</th>
                      <th rowspan="2">의료기관명</th>
                      <th rowspan="2">
                        대표전화/<br/>
                        응급실
                      </th>
                      <th colspan="5">응급실 격리병상</th>
                      <th colspan="5">감염병 입원병상</th>
                      <th colspan="4">보유장비</th>
                      <th colspan="5">보유장비</th>
                      <th rowspan="2">
                        등록<br/>
                        의료진 수
                      </th>
                      <th rowspan="2">
                        업데이트
                      </th>
                    </tr>
                    <tr>
                      <th class="px-0">코호트<br/>격리</th>
                      <th class="px-0">음압<br/>격리</th>
                      <th class="px-0">일반<br/>격리</th>
                      <th class="px-0">소아<br/>음압격리</th>
                      <th class="px-0">소아<br/>일반격리</th>
                      <th class="px-0">중환자실</th>
                      <th class="px-0">중환자실내<br>음압격리</th>
                      <th class="px-0">중증</th>
                      <th class="px-0">준중증</th>
                      <th class="px-0">중등증</th>
                      <th class="px-0">인공<br/>호흡기</th>
                      <th class="px-0">인공호흡<br/>조산아</th>
                      <th class="px-0">인큐<br/>베이터</th>
                      <th class="px-0">ECMO</th>
                      <th class="px-0">고압<br/>산소</th>
                      <th class="px-0">CT</th>
                      <th class="px-0">MRI</th>
                      <th class="px-0">혈관<br/>촬영기</th>
                      <th class="px-0">
                        중심제온<br/>
                        조절유도
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, i) in medinstList.items" :key="i" @click="openMedInstDetail(item)">
<!--                      <td @click="toggleCheckbox">-->
<!--                        <div @click="toggleCheckbox" class="cbox d-flex justify-content-center">-->
<!--                          <label> <input type="checkbox" @click="toggleCheckbox"/><i></i> </label>-->
<!--                        </div>-->
<!--                      </td>-->
                      <td>{{ medinstList['count'] - i - startIndex }}</td>
                      <td class='d-none'>
                        <i
                            class="fa-regular fa-circle-check"
                            style="color: #74afeb; font-size: 20px"
                        ></i>
                      </td>
                      <td class="text-start" role='button'>
                        <div class="text-start text-black">{{ item.dutyName }}</div>
                        <div class="text-gray-600 fs-12px">
                          {{ item.dutyDivNam }}
                        </div>
                      </td>
                      <td role='button'>
                        {{ item.dutyTel1 }} /<br> {{ item.dutyTel3 }}
                      </td>
                      <td>
                        {{ item.cohtBed }}
                      </td>
                      <td>
                        {{ item.emrgncyNgtvIsltnBed + item.isltnMedAreaNgtvIsltnBed }}
                      </td>
                      <td>
                        {{ item.emrgncyNrmlIsltnBed + item.isltnMedAreaNrmlIsltnBed }}
                      </td>
                      <td>
                        {{ item.ngtvIsltnChild }}
                      </td>
                      <td>
                        {{ item.nrmlIsltnChild }}
                      </td>
                      <td>
                        {{ item.gnbdIcu }}
                      </td>
                      <td>
                        {{ item.npidIcu }}
                      </td>
                      <td>
                        {{ item.gnbdSvrt }}
                      </td>
                      <td>
                        {{ item.gnbdSmsv }}
                      </td>
                      <td>
                        {{ item.gnbdModr }}
                      </td>
                      <td>
                        <i v-if="item.ventilator === 'Y'"
                           class='fa-regular fa-circle-check'
                           style='color: #74afeb; font-size: 20px'
                        ></i>
                        <i v-else-if="item.ventilator === 'N'">-</i>
                      </td>
                      <td>
                        <i v-if="item.ventilatorPreemie === 'Y'"
                           class='fa-regular fa-circle-check'
                           style='color: #74afeb; font-size: 20px'
                        ></i>
                        <i v-else-if="item.ventilatorPreemie === 'N'">-</i>
                      </td>
                      <td>
                        <i v-if="item.incubator === 'Y'"
                           class='fa-regular fa-circle-check'
                           style='color: #74afeb; font-size: 20px'
                        ></i>
                        <i v-else-if="item.incubator === 'N'">-</i>
                      </td>
                      <td>
                        <i v-if="item.ecmo === 'Y'"
                           class='fa-regular fa-circle-check'
                           style='color: #74afeb; font-size: 20px'
                        ></i>
                        <i v-else-if="item.ecmo === 'N'">-</i>
                      </td>
                      <td>
                        <i v-if="item.highPressureOxygen === 'Y'"
                           class='fa-regular fa-circle-check'
                           style='color: #74afeb; font-size: 20px'
                        ></i>
                        <i v-else-if="item.highPressureOxygen === 'N'">-</i>
                      </td>
                      <td>
                        <i v-if="item.ct === 'Y'"
                           class='fa-regular fa-circle-check'
                           style='color: #74afeb; font-size: 20px'
                        ></i>
                        <i v-else-if="item.ct === 'N'">-</i>
                      </td>
                      <td>
                        <i v-if="item.mri === 'Y'"
                           class='fa-regular fa-circle-check'
                           style='color: #74afeb; font-size: 20px'
                        ></i>
                        <i v-else-if="item.mri === 'N'">-</i>
                      </td>
                      <td>
                        <i v-if="item.bloodVesselImaging === 'Y'"
                           class='fa-regular fa-circle-check'
                           style='color: #74afeb; font-size: 20px'
                        ></i>
                        <i v-else-if="item.bloodVesselImaging === 'N'">-</i>
                      </td>
                      <td>
                        <i v-if="item.bodyTemperatureControl === 'Y'"
                           class='fa-regular fa-circle-check'
                           style='color: #74afeb; font-size: 20px'
                        ></i>
                        <i v-else-if="item.bodyTemperatureControl === 'N'">-</i>
                      </td>
                      <td>{{ item.medicalStaffCount ?? '0' }}</td>
                      <td>
                        {{ getUpDt(item.updtDttm) }}
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
                :data-length="medinstList['count']"
            ></data-pagination>
            <!--end::Card body-->
          </div>
        </div>
        <!--end::Content-->
      </div>
      <!--end::Content wrapper-->
    </div>
    <!--end:::Main-->
    <!--begin::Modals-->
    <div
        v-show="showModal"
        class="modal fade"
        id="kt_modal_medinst_view"
        tabindex="-1"
        aria-hidden="false"
        :class="{'show' : showModal}"
    >
      <!--begin::Modal dialog-->
      <div v-if="medinstDetail !== undefined" class="modal-dialog mw-1500px modal-dialog-centered">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div class="modal-header px-10 py-5 d-flex justify-content-between">
            <!--begin::Modal title-->
            <h2>의료기관 세부 정보</h2>
            <!--end::Modal title-->
            <!--begin::Close-->
            <div class="btn btn-sm btn-icon btn-active-color-primary">
              <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
              <span @click="closeModal" class="svg-icon svg-icon-1">
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

            <article class="floating-organ-box">
              <div class="img-box">
                <img src="/img/common/ic_lnb_organ.svg" alt="이미지"/>
              </div>
              <div class="txt-box">{{ medinstDetail.hospBasicInfo.dutyName }}</div>
            </article>
          </div>

          <!--begin::Modal header-->
          <!--begin::Modal body-->
          <div class="modal-body scroll-y py-10 px-10">
            <article class="tabs-group-layout">
              <div class="tabs-nav-box">
                <router-link
                    to=""
                    @click="tabsMove(0)"
                    :class="{ active: tabidx === 0 }"
                    class="tabs-nav-btn"
                >기본정보
                </router-link
                >
                <router-link
                    to=""
                    @click="tabsMove(1)"
                    :class="{ active: tabidx === 1 }"
                    class="tabs-nav-btn"
                >세부현황
                </router-link
                >
                <router-link
                    to=""
                    @click="tabsMove(2)"
                    :class="{ active: tabidx === 2 }"
                    class="tabs-nav-btn"
                >병상배정시스템 등록 의료진 <span class="cnt">{{ medinstDetail.hospMedInfoCount }}</span></router-link
                >

              </div>
              <div class='addMediBtn' style='text-align: right;'>
                <a @click='openEditMedi' class="btn btn-sm btn-flex btn-primary align-self-center px-3 ms-2 addMedi">
                  <i class="fa-solid fa-plus"></i> 의료기관 정보 수정</a>
              </div>
              <div class="tabs-contents-box" style='padding-top:5px;'>
                <div class="tabs-box-list">
                  <div class="tabs-box" v-show="tabidx === 0" style="">
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
                              <th rowspan="6">의료기관<br/>이미지</th>
                              <td rowspan="6" class="text-start">
                                <article class="modal-profile-layout1">
                                  <div class="profile-card-box flex-column">
                                    <div
                                        class="profile-view-box"
                                        style="width: 220px; height: 220px"
                                    >
<!--                                      <img-->
<!--                                        v-if="medinstDetail.hospBasicInfo.attcId === null ||medinstDetail.hospBasicInfo.attcId === '' "-->
<!--                                        src='@/assets/img/img-no-img.webp' alt='이미지' />-->
<!--                                      <router-link to=''-->
<!--                                                   v-if="medinstDetail.hospBasicInfo.attcId !== null && medinstDetail.hospBasicInfo.attcId !== ''"-->
<!--                                                   @click='alertOpen(0)'-->
<!--                                                   class='remove-btn'>-->
<!--                                        <img src='/img/common/ic_profile_remove.svg' alt='이미지' />-->
<!--                                      </router-link>-->
                                      <img :src="imagePreview" alt="미리 보기 이미지" />
                                    </div>

                                    <div class="profile-upload-box d-flex align-items-center pt-4">
                                      <div class="upload-box">
                                        <label
                                            class="btn btn-flex justify-content-center btn-primary py-0 px-0 h-30px w-80px certify-btn rounded-1 btn-outline btn-outline-primary"
                                        >
                                          <input type="file" accept='image/jpeg, image/png' @change='uploadImage'/>
                                          수정
                                        </label>
                                      </div>

                                      <div class="ps-2">
                                        (권장) 512x512 픽셀의 정사각형 이미지를 준비해주세요
                                      </div>
                                    </div>
                                  </div>
                                </article>
                              </td>
                              <th>기관ID</th>
                              <td>{{ medinstDetail.hospBasicInfo.hpid }}</td>
                            </tr>

                            <tr>
                              <th>기관명</th>
                              <td>{{ medinstDetail.hospBasicInfo.dutyName }}</td>
                            </tr>

                            <tr>
                              <th>병원분류</th>
                              <td>{{ medinstDetail.hospBasicInfo.dutyDiv }}</td>
                            </tr>

                            <tr>
                              <th>병원분류명</th>
                              <td>{{ medinstDetail.hospBasicInfo.dutyDivNam }}</td>
                            </tr>

                            <tr>
                              <th>응급의료기관분류</th>
                              <td>{{ medinstDetail.hospBasicInfo.dutyEmcls }}</td>
                            </tr>

                            <tr>
                              <th>응급의료기관분류명</th>
                              <td>{{ medinstDetail.hospBasicInfo.dutyEmclsName }}</td>
                            </tr>

                            <tr>
                              <th rowspan="6">간이약도</th>
                              <td rowspan="6" class='map-wrapper'>
                                <div id='map'></div>
                              </td>
                            </tr>

                            <tr>
                              <th>대표전화</th>
                              <td>{{ medinstDetail.hospBasicInfo.dutyTel1 }}</td>
                            </tr>

                            <tr>
                              <th>응급실전화</th>
                              <td>{{ medinstDetail.hospBasicInfo.dutyTel3 }}</td>
                            </tr>

                            <tr>
                              <th>팩스번호</th>
                              <td>-</td>
                            </tr>

                            <tr>
                              <th>주소</th>
                              <td>
                                <div class="eclipse-line2-box">
                                  {{ medinstDetail.hospBasicInfo.dutyAddr }}
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <th>기관설명</th>
                              <td>{{ medinstDetail.hospBasicInfo.dutyInf ?? '-' }}</td>
                            </tr>

                            <tr>
                              <th>시작시간</th>
                              <td>{{ medinstDetail.hospBasicInfo.dutyTime1s ?? '-' }}</td>

                              <th>종료시간</th>
                              <td>{{ medinstDetail.hospBasicInfo.dutyTime1c ?? '-' }}</td>
                            </tr>

                            <tr>
                              <th>진료과목</th>
                              <td colspan="3">
                                <article class="item-list-layout1" style="max-width: 900px">
                                  <ul class="box-7">
                                    <li v-for='items in medinstDetail.hospBasicInfo.dgidIdNameList' v-bind:key='items'>
                                      <div class="item-box">{{ items }}</div>
                                    </li>
                                  </ul>
                                </article>
                              </td>
                            </tr>

                            <tr>
                              <th>진료시간</th>
                              <td colspan="3">
                                <article class="item-list-layout1" style="max-width: 500px">
                                  <ul class="box-4">
                                    <li>
                                      <div class='item-box'>
                                        월요일 <span v-if='medinstDetail.hospBasicInfo.dutyTime1s === null' class="text-gray-400 ps-1">없음</span>
                                        <span v-else>{{ medinstDetail.hospBasicInfo.dutyTime1s }}~{{ (medinstDetail.hospBasicInfo.dutyTime1c) }}</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div class='item-box'>
                                        화요일 <span v-if='medinstDetail.hospBasicInfo.dutyTime2s === null' class="text-gray-400 ps-1">없음</span>
                                        <span v-else>{{ medinstDetail.hospBasicInfo.dutyTime2s }}~{{ (medinstDetail.hospBasicInfo.dutyTime2c) }}</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div class='item-box'>
                                        수요일 <span v-if='medinstDetail.hospBasicInfo.dutyTime3s === null' class="text-gray-400 ps-1">없음</span>
                                        <span v-else>{{ medinstDetail.hospBasicInfo.dutyTime3s }}~{{ (medinstDetail.hospBasicInfo.dutyTime3c) }}</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div class='item-box'>
                                        목요일 <span v-if='medinstDetail.hospBasicInfo.dutyTime4s === null' class="text-gray-400 ps-1">없음</span>
                                        <span v-else>{{ medinstDetail.hospBasicInfo.dutyTime4s }}~{{ (medinstDetail.hospBasicInfo.dutyTime4c) }}</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div class='item-box'>
                                        금요일 <span v-if='medinstDetail.hospBasicInfo.dutyTime5s === null' class="text-gray-400 ps-1">없음</span>
                                        <span v-else>{{ medinstDetail.hospBasicInfo.dutyTime5s }}~{{ (medinstDetail.hospBasicInfo.dutyTime5c) }}</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="item-box">
                                        토요일 <span v-if='medinstDetail.hospBasicInfo.dutyTime6s === null' class="text-gray-400 ps-1">없음</span>
                                        <span v-else>{{ medinstDetail.hospBasicInfo.dutyTime6s }}~{{ (medinstDetail.hospBasicInfo.dutyTime6c) }}</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="item-box">
                                        일요일 <span v-if='medinstDetail.hospBasicInfo.dutyTime7s === null' class="text-gray-400 ps-1">없음</span>
                                        <span v-else>{{ medinstDetail.hospBasicInfo.dutyTime7s }}~{{ (medinstDetail.hospBasicInfo.dutyTime7c) }}</span>
                                      </div>
                                    </li>
                                    <li>
                                      <div class="item-box">
                                        공휴일 <span v-if='medinstDetail.hospBasicInfo.dutyTime8s === null' class="text-gray-400 ps-1">없음</span>
                                        <span v-else>{{ medinstDetail.hospBasicInfo.dutyTime8s }}~{{ (medinstDetail.hospBasicInfo.dutyTime8c) }}</span>
                                      </div>
                                    </li>
                                  </ul>
                                </article>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </div>

                        <div class="table-box">
                          <table>
                            <colgroup>
                              <col style="width: 168px"/>
                              <col style="width: auto"/>
                              <col style="width: 168px"/>
                              <col style="width: auto"/>

                              <col style="width: 168px"/>
                              <col style="width: auto"/>
                            </colgroup>
                            <tbody>
                            <tr>
                              <th>응급실운영여부</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.dutyEryn === '1'">운영중</i>
                                <i v-else>-</i>
                              </td>

                              <th>입원실가용여부</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.dutyHayn === '1'"
                                    class="fa-regular fa-circle-check"
                                    style="color: #74afeb; font-size: 20px"
                                ></i>
                                <i v-else>-</i>
                              </td>

                              <th>병상수</th>
                              <td>{{ medinstDetail.hospBasicInfo.dutyHano }}</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>

                        <div class="table-box">
                          <table>
                            <colgroup>
                              <col style="width: 168px"/>
                              <col style="width: auto"/>
                              <col style="width: 168px"/>
                              <col style="width: auto"/>

                              <col style="width: 168px"/>
                              <col style="width: auto"/>
                            </colgroup>
                            <tbody>
                            <tr>
                              <th>가용_응급실</th>
                              <td>{{ medinstDetail.hospBasicInfo.hvec ?? '-' }}</td>

                              <th>가용_입원실</th>
                              <td>{{ medinstDetail.hospBasicInfo.hvgc ?? '-' }}</td>

                              <th>가용_수술실</th>
                              <td>{{ medinstDetail.hospBasicInfo.hvoc ?? '-' }}</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>

                        <div class="table-box">
                          <table>
                            <colgroup>
                              <col style="width: 168px"/>
                              <col style="width: auto"/>
                              <col style="width: 168px"/>
                              <col style="width: auto"/>

                              <col style="width: 168px"/>
                              <col style="width: auto"/>
                            </colgroup>
                            <tbody>
                            <tr>
                              <th>기준_병상수</th>
                              <td>{{ medinstDetail.hospBasicInfo.hpbdn ?? '-' }}</td>

                              <th>기준_응급실</th>
                              <td>{{ medinstDetail.hospBasicInfo.hperyn ?? '-' }}</td>

                              <th>기준_입원실</th>
                              <td>{{ medinstDetail.hospBasicInfo.hpgryn ?? '-' }}</td>
                            </tr>

                            <tr>
                              <th>기준_수술실</th>
                              <td>{{ medinstDetail.hospBasicInfo.hpopyn ?? '-' }}</td>

                              <th>기준_신경중환자실</th>
                              <td>{{ medinstDetail.hospBasicInfo.hpcuyn ?? '-' }}</td>

                              <th>기준_신생아중환자실</th>
                              <td>{{ medinstDetail.hospBasicInfo.hpnicuyn ?? '-' }}</td>
                            </tr>

                            <tr>
                              <th>기준_흉부중환자실</th>
                              <td>{{ medinstDetail.hospBasicInfo.hpccuyn?? '-' }}</td>

                              <th>기준_일반중환자실</th>
                              <td colspan="3">{{ medinstDetail.hospBasicInfo.hpicuyn?? '-' }}</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>

                        <div class="table-box">
                          <table>
                            <colgroup>
                              <col style="width: 168px"/>
                              <col style="width: auto"/>
                              <col style="width: 168px"/>
                              <col style="width: auto"/>

                              <col style="width: 168px"/>
                              <col style="width: auto"/>
                            </colgroup>
                            <tbody>
                            <tr>
                              <th>중증_응급실</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.mkioskTy25 === 'Y'"
                                    class="fa-regular fa-circle-check"
                                    style="color: #74afeb; font-size: 20px"
                                ></i>
                                <i v-else>-</i>
                              </td>

                              <th>중증_뇌출혈수술</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.mkioskTy1 === 'Y'"
                                   class="fa-regular fa-circle-check"
                                   style="color: #74afeb; font-size: 20px"
                                ></i>
                                <i v-else>-</i>
                              </td>

                              <th>중증_뇌경색의재관류</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.mkioskTy2 === 'Y'"
                                   class="fa-regular fa-circle-check"
                                   style="color: #74afeb; font-size: 20px"
                                ></i>
                                <i v-else>-</i>
                              </td>
                            </tr>

                            <tr>
                              <th>중증_심근경색의재관류</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.mkioskTy3 === 'Y'"
                                   class="fa-regular fa-circle-check"
                                   style="color: #74afeb; font-size: 20px"
                                ></i>
                                <i v-else>-</i>
                              </td>

                              <th>중증_복부손상의수술</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.mkioskTy4 === 'Y'"
                                   class="fa-regular fa-circle-check"
                                   style="color: #74afeb; font-size: 20px"
                                ></i>
                                <i v-else>-</i>
                              </td>

                              <th>중증_사지접합의수술</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.mkioskTy5 === 'Y'"
                                   class="fa-regular fa-circle-check"
                                   style="color: #74afeb; font-size: 20px"
                                ></i>
                                <i v-else>-</i>
                              </td>
                            </tr>

                            <tr>
                              <th>중증_응급내시경</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.mkioskTy6 === 'Y'"
                                   class="fa-regular fa-circle-check"
                                   style="color: #74afeb; font-size: 20px"
                                ></i>
                                <i v-else>-</i>
                              </td>

                              <th>중증_응급투석</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.mkioskTy7 === 'Y'"
                                   class="fa-regular fa-circle-check"
                                   style="color: #74afeb; font-size: 20px"
                                ></i>
                                <i v-else>-</i>
                              </td>

                              <th>중증_조산산모</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.mkioskTy8 === 'Y'"
                                   class="fa-regular fa-circle-check"
                                   style="color: #74afeb; font-size: 20px"
                                ></i>
                                <i v-else>-</i>
                              </td>
                            </tr>

                            <tr>
                              <th>중증_정신질환자</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.mkioskTy9 === 'Y'"
                                   class="fa-regular fa-circle-check"
                                   style="color: #74afeb; font-size: 20px"
                                ></i>
                                <i v-else>-</i>
                              </td>

                              <th>중증_신생아</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.mkioskTy10 === 'Y'"
                                   class="fa-regular fa-circle-check"
                                   style="color: #74afeb; font-size: 20px"
                                ></i>
                                <i v-else>-</i>
                              </td>

                              <th>중증_중증화상</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.mkioskTy11 === 'Y'"
                                   class="fa-regular fa-circle-check"
                                   style="color: #74afeb; font-size: 20px"
                                ></i>
                                <i v-else>-</i>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </div>

                        <div class="table-box">
                          <table>
                            <colgroup>
                              <col style="width: 168px"/>
                              <col style="width: auto"/>
                              <col style="width: 168px"/>
                              <col style="width: auto"/>

                              <col style="width: 168px"/>
                              <col style="width: auto"/>
                            </colgroup>
                            <tbody>
                            <tr>
                              <th>가용_신경중환자</th>
                              <td>{{ medinstDetail.hospBasicInfo.hvcc ?? '-' }}</td>

                              <th>가용_신생중환자</th>
                              <td>{{ medinstDetail.hospBasicInfo.hvncc ?? '-' }}</td>

                              <th>가용_흉부중환자</th>
                              <td>{{ medinstDetail.hospBasicInfo.hvccc ?? '-' }}</td>
                            </tr>

                            <tr>
                              <th>가용_일반중환자</th>
                              <td>{{ medinstDetail.hospBasicInfo.hvicc ?? '-' }}</td>

                              <th>가용_응급실 일반병상</th>
                              <td>{{ medinstDetail.hospBasicInfo.o001 ?? '-' }}</td>

                              <th>가용_응급실 소아 병상</th>
                              <td>{{ medinstDetail.hospBasicInfo.o002 ?? '-' }}</td>
                            </tr>

                            <tr>
                              <th>가용_응급실 음압 격리 병상</th>
                              <td>{{ medinstDetail.hospBasicInfo.o003 ?? '-' }}</td>

                              <th>가용_응급실 일반 격리 병상</th>
                              <td>{{ medinstDetail.hospBasicInfo.o004 ?? '-' }}</td>

                              <th>가용_응급전용 중환자실</th>
                              <td>{{ medinstDetail.hospBasicInfo.o005 ?? '-' }}</td>
                            </tr>

                            <tr>
                              <th>가용_내과중환자실</th>
                              <td>{{ medinstDetail.hospBasicInfo.o006 ?? '-' }}</td>

                              <th>가용_외과중환자실</th>
                              <td>{{ medinstDetail.hospBasicInfo.o007 ?? '-' }}</td>

                              <th>가용_신생아중환자실</th>
                              <td>{{ medinstDetail.hospBasicInfo.o008 ?? '-' }}</td>
                            </tr>

                            <tr>
                              <th>가용_소아 중환자실</th>
                              <td>{{ medinstDetail.hospBasicInfo.o009 ?? '-' }}</td>

                              <th>가용_소아응급전용 중환자실 병상</th>
                              <td>{{ medinstDetail.hospBasicInfo.o010 ?? '-' }}</td>

                              <th>가용_신경과중환자실</th>
                              <td>{{ medinstDetail.hospBasicInfo.o011 ?? '-' }}</td>
                            </tr>

                            <tr>
                              <th>가용_신경외과중환자실</th>
                              <td>{{ medinstDetail.hospBasicInfo.o012 ?? '-' }}</td>

                              <th>가용_화상중환자실</th>
                              <td>{{ medinstDetail.hospBasicInfo.o013 ?? '-' }}</td>

                              <th>가용_외상중환자실</th>
                              <td>{{ medinstDetail.hospBasicInfo.o014 ?? '-' }}</td>
                            </tr>

                            <tr>
                              <th>가용_심장내과 중환자실</th>
                              <td>{{ medinstDetail.hospBasicInfo.o015 ?? '-' }}</td>

                              <th>가용_흉부외과 중환자실</th>
                              <td>{{ medinstDetail.hospBasicInfo.o016 ?? '-' }}</td>

                              <th>가용_일반 중환자실</th>
                              <td>{{ medinstDetail.hospBasicInfo.o017 ?? '-' }}</td>
                            </tr>

                            <tr>
                              <th>가용_중환자실 내 음압 격리 병상</th>
                              <td>{{ medinstDetail.hospBasicInfo.o018 ?? '-' }}</td>

                              <th>가용_응급전용 입원실</th>
                              <td>{{ medinstDetail.hospBasicInfo.o019 ?? '-' }}</td>

                              <th>가용_소아응급전용 입원 병상</th>
                              <td>{{ medinstDetail.hospBasicInfo.o020 ?? '-' }}</td>
                            </tr>

                            <tr>
                              <th>가용_외상전용 입원실</th>
                              <td>{{ medinstDetail.hospBasicInfo.o021 ?? '-' }}</td>

                              <th>가용_수술실</th>
                              <td>{{ medinstDetail.hospBasicInfo.o022 ?? '-' }}</td>

                              <th>가용_외상전용 수술실</th>
                              <td>{{ medinstDetail.hospBasicInfo.o023 ?? '-' }}</td>
                            </tr>

                            <tr>
                              <th>가용_정신과 폐쇄 병상</th>
                              <td>{{ medinstDetail.hospBasicInfo.o024 ?? '-' }}</td>

                              <th>가용_음압 격리 병상</th>
                              <td>{{ medinstDetail.hospBasicInfo.o025 ?? '-' }}</td>

                              <th>가용_분만실</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.o026 === 'Y'"
                                   class='fa-regular fa-circle-check'
                                   style='color: #74afeb; font-size: 20px'></i>
                                <i v-else>-</i>
                              </td>
                            </tr>

                            <tr>
                              <th>가용_CT</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.o027 === 'Y'"
                                     class='fa-regular fa-circle-check'
                                     style='color: #74afeb; font-size: 20px'></i>
                                <i v-else>-</i>
                              </td>

                              <th>가용_MRI</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.o028 === 'Y'"
                                   class='fa-regular fa-circle-check'
                                   style='color: #74afeb; font-size: 20px'></i>
                                <i v-else>-</i>
                              </td>

                              <th>가용_혈관촬영기</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.o029 === 'Y'"
                                   class='fa-regular fa-circle-check'
                                   style='color: #74afeb; font-size: 20px'></i>
                                <i v-else>-</i>
                              </td>
                            </tr>

                            <tr>
                              <th>가용_인공호흡기</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.o030 === 'Y'"
                                   class='fa-regular fa-circle-check'
                                   style='color: #74afeb; font-size: 20px'></i>
                                <i v-else>-</i>
                              </td>

                              <th>가용_인공호흡기(소아)</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.o031 === 'Y'"
                                   class='fa-regular fa-circle-check'
                                   style='color: #74afeb; font-size: 20px'></i>
                                <i v-else>-</i>
                              </td>

                              <th>가용_인큐베이터</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.o032 === 'Y'"
                                   class='fa-regular fa-circle-check'
                                   style='color: #74afeb; font-size: 20px'></i>
                                <i v-else>-</i>
                              </td>
                            </tr>

                            <tr>
                              <th>가용_CRRT</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.o033 === 'Y'"
                                   class='fa-regular fa-circle-check'
                                   style='color: #74afeb; font-size: 20px'></i>
                                <i v-else>-</i>
                              </td>

                              <th>가용_ECMO</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.o034 === 'Y'"
                                   class='fa-regular fa-circle-check'
                                   style='color: #74afeb; font-size: 20px'></i>
                                <i v-else>-</i>
                              </td>

                              <th>가용_치료적 저체온 요법</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.o035 === 'Y'"
                                   class='fa-regular fa-circle-check'
                                   style='color: #74afeb; font-size: 20px'></i>
                                <i v-else>-</i>
                              </td>
                            </tr>

                            <tr>
                              <th>가용_화상전용 처치실</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.o036 === 'Y'"
                                   class='fa-regular fa-circle-check'
                                   style='color: #74afeb; font-size: 20px'></i>
                                <i v-else>-</i>
                              </td>

                              <th>가용_고압산소치료기</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.o037 === 'Y'"
                                   class='fa-regular fa-circle-check'
                                   style='color: #74afeb; font-size: 20px'></i>
                                <i v-else>-</i>
                              </td>

                              <th>가용_일반입원실</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.o038 === 'Y'"
                                   class='fa-regular fa-circle-check'
                                   style='color: #74afeb; font-size: 20px'></i>
                                <i v-else>-</i>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div class="tabs-box" v-show="tabidx === 1" style="">
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

                              <col style="width: 168px"/>
                              <col style="width: auto"/>
                            </colgroup>
                            <tbody>
                            <tr>
                              <th>응급실전화</th>
                              <td>{{ medinstDetail.hospDetailInfo.dutytel3 ?? '-' }}</td>

                              <th>당직의</th>
                              <td>{{ medinstDetail.hospDetailInfo.hvdnm ?? '-' }}</td>

                              <th>당직의 직통연락처</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv1 ?? '-' }}</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>

                        <div class="table-box">
                          <table>
                            <colgroup>
                              <col style="width: 168px"/>
                              <col style="width: auto"/>
                              <col style="width: 168px"/>
                              <col style="width: auto"/>

                              <col style="width: 168px"/>
                              <col style="width: auto"/>
                              <col style="width: 168px"/>
                              <col style="width: auto"/>
                            </colgroup>
                            <tbody>
                            <tr>
                              <th>구급차</th>
                              <td>
                                <i v-if="medinstDetail.hospDetailInfo.hvamyn === 'Y'"
                                   class='fa-regular fa-circle-check'
                                   style='color: #74afeb; font-size: 20px'
                                ></i>
                                <i v-else>-</i>
                              </td>

                              <th>CT</th>
                              <td>
                                <i v-if="medinstDetail.hospDetailInfo.hvctayn === 'Y'"
                                   class='fa-regular fa-circle-check'
                                   style='color: #74afeb; font-size: 20px'
                                ></i>
                                <i v-else>-</i>
                              </td>

                              <th>MRI</th>
                              <td>
                                <i v-if="medinstDetail.hospDetailInfo.hvmriayn === 'Y'"
                                   class='fa-regular fa-circle-check'
                                   style='color: #74afeb; font-size: 20px'
                                ></i>
                                <i v-else>-</i>
                              </td>

                              <th>조영촬영기</th>
                              <td>
                                <i v-if="medinstDetail.hospDetailInfo.hvangioayn === 'Y'"
                                   class='fa-regular fa-circle-check'
                                   style='color: #74afeb; font-size: 20px'
                                ></i>
                                <i v-else>-</i>
                              </td>
                            </tr>

                            <tr>
                              <th>인공호흡기가용</th>
                              <td>
                                <i v-if="medinstDetail.hospDetailInfo.hvventiayn === 'Y'"
                                   class='fa-regular fa-circle-check'
                                   style='color: #74afeb; font-size: 20px'
                                ></i>
                                <i v-else>-</i>
                              </td>

                              <th>신경과입원실</th>
                              <td>
                                <i v-if="medinstDetail.hospDetailInfo.hv5 === 'Y'"
                                   class='fa-regular fa-circle-check'
                                   style='color: #74afeb; font-size: 20px'
                                ></i>
                                <i v-else>-</i>
                              </td>

                              <th>약물중환자</th>
                              <td>
                                <i v-if="medinstDetail.hospDetailInfo.hv7 === 'Y'"
                                   class='fa-regular fa-circle-check'
                                   style='color: #74afeb; font-size: 20px'
                                ></i>
                                <i v-else>-</i>
                              </td>

                              <th>VENTI(소아)</th>
                              <td>
                                <i v-if="medinstDetail.hospDetailInfo.hv10 === 'Y'"
                                   class='fa-regular fa-circle-check'
                                   style='color: #74afeb; font-size: 20px'
                                ></i>
                                <i v-else>-</i>
                              </td>
                            </tr>

                            <tr>
                              <th>인큐베이터(보육기)</th>
                              <td>
                                <i v-if="medinstDetail.hospDetailInfo.hv11 === 'Y'"
                                   class='fa-regular fa-circle-check'
                                   style='color: #74afeb; font-size: 20px'
                                ></i>
                                <i v-else>-</i>
                              </td>

                              <th>분만실</th>
                              <td colspan="5">
                                <i v-if="medinstDetail.hospDetailInfo.hv42 === 'Y'"
                                   class='fa-regular fa-circle-check'
                                   style='color: #74afeb; font-size: 20px'
                                ></i>
                                <i v-else>-</i>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </div>

                        <div class="table-box">
                          <table>
                            <colgroup>
                              <col style="width: 168px"/>
                              <col style="width: auto"/>
                              <col style="width: 168px"/>
                              <col style="width: auto"/>

                              <col style="width: 168px"/>
                              <col style="width: auto"/>
                              <col style="width: 168px"/>
                              <col style="width: auto"/>
                            </colgroup>
                            <tbody>
                            <tr>
                              <th>응급실</th>
                              <td>{{ medinstDetail.hospDetailInfo.hvec ?? '-' }}</td>

                              <th>수술실</th>
                              <td>{{ medinstDetail.hospDetailInfo.hvoc ?? '-' }}</td>

                              <th>신경중환자</th>
                              <td>{{ medinstDetail.hospDetailInfo.hvcc ?? '-' }}</td>

                              <th>신생중환자</th>
                              <td>{{ medinstDetail.hospDetailInfo.hvncc ?? '-' }}</td>
                            </tr>

                            <tr>
                              <th>흉부중환자</th>
                              <td>{{ medinstDetail.hospDetailInfo.hvccc ?? '-' }}</td>

                              <th>일반중환자</th>
                              <td>{{ medinstDetail.hospDetailInfo.hvicc ?? '-' }}</td>

                              <th>입원실</th>
                              <td>{{ medinstDetail.hospDetailInfo.hvgc ?? '-' }}</td>

                              <th>내과중환자실</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv2 ?? '-' }}</td>
                            </tr>

                            <tr>
                              <th>외과중환자실</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv3 ?? '-' }}</td>

                              <th>외과입원실</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv4 ?? '-' }}</td>

                              <th>신경외과중환자실</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv6 ?? '-' }}</td>

                              <th>화상중환자</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv8 ?? '-' }}</td>
                            </tr>

                            <tr>
                              <th>외상중환자</th>
                              <td colspan="5">{{ medinstDetail.hospDetailInfo.hv9 ?? '-' }}</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>

                        <div class="table-box">
                          <table>
                            <colgroup>
                              <col style="width: 168px"/>
                              <col style="width: auto"/>
                              <col style="width: 168px"/>
                              <col style="width: auto"/>

                              <col style="width: 168px"/>
                              <col style="width: auto"/>
                            </colgroup>
                            <tbody>
                            <tr>
                              <th>격리진료구역 음압격리 병상</th>
                              <td>
                                {{ medinstDetail.hospDetailInfo.hv13 ?? '-' }}
                              </td>

                              <th>격리진료구역 일반격리 병상</th>
                              <td>
                                {{ medinstDetail.hospDetailInfo.hv14 ?? '-' }}
                              </td>

                              <th>소아 음압격리병상</th>
                              <td>
                                {{ medinstDetail.hospDetailInfo.hv15 ?? '-' }}
                              </td>
                            </tr>

                            <tr>
                              <th>소아 일반격리병상</th>
                              <td>
                                {{ medinstDetail.hospDetailInfo.hv16 ?? '-' }}
                              </td>

                              <th>응급전용 중환자실 음압 격리병상</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv17 ?? '-' }}</td>

                              <th>응급전용 중환자실 일반 격리병상</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv18 ?? '-' }}</td>
                            </tr>

                            <tr>
                              <th>응급전용 입원실 음압 격리병상</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv19 ?? '-' }}</td>

                              <th>응급전용 입원실 일반격리 병상</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv21 ?? '-' }}</td>

                              <th>감염병 전담병상 중환자실</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv22 ?? '-' }}</td>
                            </tr>

                            <tr>
                              <th>감염병 전담병상 중환자실 내 음압격리병상</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv23 ?? '-' }}</td>

                              <th>감염병 전담병상 중증 일반병상</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv24 ?? '-' }}</td>

                              <th>감염병 전담병상 준-중증 일반병상</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv25 ?? '-' }}</td>
                            </tr>

                            <tr>
                              <th>감염병 전담병상 중등증 일반병상</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv26 ?? '-' }}</td>

                              <th>코호트 격리구역 병상</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv27 ?? '-' }}</td>

                              <th>응급실 소아 병상</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv28 ?? '-' }}</td>
                            </tr>

                            <tr>
                              <th>응급실 음압 격리 병상</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv29 ?? '-' }}</td>

                              <th>응급실 일반 격리 병상</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv30 ?? '-' }}</td>

                              <th>응급전용 중환자실</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv31 ?? '-' }}</td>
                            </tr>

                            <tr>
                              <th>소아 중환자실</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv32 ?? '-' }}</td>

                              <th>소아응급전용 중환자실 병상</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv33 ?? '-' }}</td>

                              <th>심장내과 중환자실</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv34 ?? '-' }}</td>
                            </tr>

                            <tr>
                              <th>중환자실 내 음압 격리 병상</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv35 ?? '-' }}</td>

                              <th>응급전용 입원실</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv36 ?? '-' }}</td>

                              <th>소아응급전용 입원 병상</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv37 ?? '-' }}</td>
                            </tr>

                            <tr>
                              <th>외상전용 입원실</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv38 ?? '-' }}</td>

                              <th>외상전용 수술실</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv39 ?? '-' }}</td>

                              <th>정신과 폐쇄 병상</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv40 ?? '-' }}</td>
                            </tr>

                            <tr>
                              <th>음압 격리 병상</th>
                              <td>{{ medinstDetail.hospDetailInfo.hv41 ?? '-' }}</td>

                              <th>화상전용 처치실</th>
                              <td colspan="3">{{ medinstDetail.hospDetailInfo.hv43 ?? '-' }}</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div class="tabs-box" v-show="tabidx === 2" style="">
                    <article class="table-list-layout1">
                      <div class="table-body-box">
                        <div class="table-box with-scroll small">
                          <table>
                            <colgroup>
                              <col style="width: 70px"/>
                              <col style="width: 120px"/>
                              <col style="width: 70px"/>
                              <col style="width: 70px"/>
                              <col style="width: 110px"/>
                              <col style="width: 110px"/>
                              <col style="width: 70px"/>
                              <col style="width: 100px"/>
                              <col style="width: 100px"/>
                              <col style="width: 100px"/>
                            </colgroup>
                            <thead>
                            <tr class="small">
                              <th>이미지</th>
                              <th>주 담당지역</th>
                              <th>직급</th>
                              <th>이름</th>
                              <th>담당 환자유형</th>
                              <th>역할</th>
                              <th>세부권한</th>
                              <th>가입일</th>
                              <th>최근접속일</th>
                              <th>사용자상태</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr v-for='items in medinstDetail.hospMedInfo' v-bind:key='items'>
                              <td>
                                <img src="/img/common/img_profile_default.svg" alt="이미지"/>
                              </td>
                              <td>{{ items.dutyDstr1Cd }}</td>
                              <td>{{ items.ocpCd }}</td>
                              <td>{{ items.userNm }}</td>
                              <td>{{ items.ptTypeCdNm }}</td>
                              <td>{{ items.jobCd }}</td>
                              <td>{{ items.authCd }}</td>
                              <td>{{ getUpDt(items.rgstDttm) }}</td>
                              <td>{{ getUpDt(items.updtDttm) }}</td>
                              <td>{{ items.userStatCdNm }}</td>
                            </tr>
                            </tbody>
                          </table>
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
    <div
      v-show="showEditMedi"
      class="modal fade"
      id="kt_modal_medinst_view"
      tabindex="-1"
      aria-hidden="false"
      :class="{'show' : showEditMedi}"
    >
      <!--begin::Modal dialog-->
      <div v-if="medinstDetail !== undefined" class="modal-dialog mw-1500px modal-dialog-centered">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div class="modal-header px-10 py-5 d-flex justify-content-between">
            <!--begin::Modal title-->
            <h2>의료기관 정보 수정</h2>
            <!--end::Modal title-->
            <!--begin::Close-->
            <div class="btn btn-sm btn-icon btn-active-color-primary">
              <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
              <span @click="closeModal" class="svg-icon svg-icon-1">
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

            <article class="floating-organ-box">
              <div class="img-box">
                <img src="/img/common/ic_lnb_organ.svg" alt="이미지"/>
              </div>
              <div class="txt-box">{{ medinstDetail.hospBasicInfo.dutyName }}</div>
            </article>
          </div>

          <!--begin::Modal header-->
          <!--begin::Modal body-->
          <div class="modal-body scroll-y py-10 px-10">
              <article class="table-form-layout1">
                <div class="form-head-box"></div>
                <div class="tabs-box" style="">
                    <article class="table-form-layout1">
                      <div class="form-head-box"></div>

                      <div class="form-body-box">

<!--                        <div class="table-box">
                          <table>
                            <colgroup>
                              <col style="width: 168px"/>
                              <col style="width: auto"/>
                              <col style="width: 168px"/>
                              <col style="width: auto"/>

                              <col style="width: 168px"/>
                              <col style="width: auto"/>
                            </colgroup>
                            <tbody>
                            <tr>
                              <th>응급실운영여부</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.dutyEryn === '1'">운영중</i>
                                <i v-else>-</i>
                              </td>

                              <th>입원실가용여부</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.dutyHayn === '1'"
                                   class="fa-regular fa-circle-check"
                                   style="color: #74afeb; font-size: 20px"
                                ></i>
                                <i v-else>-</i>
                              </td>

                              <th>병상수</th>
                              <td>{{ medinstDetail.hospBasicInfo.dutyHano }}</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>-->

<!--                        <div class="table-box">
                          <table>
                            <colgroup>
                              <col style="width: 168px"/>
                              <col style="width: auto"/>
                              <col style="width: 168px"/>
                              <col style="width: auto"/>

                              <col style="width: 168px"/>
                              <col style="width: auto"/>
                            </colgroup>
                            <tbody>
                            <tr>
                              <th>가용_응급실</th>
                              <td>{{ medinstDetail.hospBasicInfo.hvec ?? '-' }}</td>

                              <th>가용_입원실</th>
                              <td>{{ medinstDetail.hospBasicInfo.hvgc ?? '-' }}</td>

                              <th>가용_수술실</th>
                              <td>{{ medinstDetail.hospBasicInfo.hvoc ?? '-' }}</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>-->

<!--                        <div class="table-box">
                          <table>
                            <colgroup>
                              <col style="width: 168px"/>
                              <col style="width: auto"/>
                              <col style="width: 168px"/>
                              <col style="width: auto"/>

                              <col style="width: 168px"/>
                              <col style="width: auto"/>
                            </colgroup>
                            <tbody>
                            <tr>
                              <th>기준_병상수</th>
                              <td>{{ medinstDetail.hospBasicInfo.hpbdn ?? '-' }}</td>

                              <th>기준_응급실</th>
                              <td>{{ medinstDetail.hospBasicInfo.hperyn ?? '-' }}</td>

                              <th>기준_입원실</th>
                              <td>{{ medinstDetail.hospBasicInfo.hpgryn ?? '-' }}</td>
                            </tr>

                            <tr>
                              <th>기준_수술실</th>
                              <td>{{ medinstDetail.hospBasicInfo.hpopyn ?? '-' }}</td>

                              <th>기준_신경중환자실</th>
                              <td>{{ medinstDetail.hospBasicInfo.hpcuyn ?? '-' }}</td>

                              <th>기준_신생아중환자실</th>
                              <td>{{ medinstDetail.hospBasicInfo.hpnicuyn ?? '-' }}</td>
                            </tr>

                            <tr>
                              <th>기준_흉부중환자실</th>
                              <td>{{ medinstDetail.hospBasicInfo.hpccuyn?? '-' }}</td>

                              <th>기준_일반중환자실</th>
                              <td colspan="3">{{ medinstDetail.hospBasicInfo.hpicuyn?? '-' }}</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>-->

<!--                        <div class="table-box">
                          <table>
                            <colgroup>
                              <col style="width: 168px"/>
                              <col style="width: auto"/>
                              <col style="width: 168px"/>
                              <col style="width: auto"/>

                              <col style="width: 168px"/>
                              <col style="width: auto"/>
                            </colgroup>
                            <tbody>
                            <tr>
                              <th>중증_응급실</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.mkioskTy25 === 'Y'"
                                   class="fa-regular fa-circle-check"
                                   style="color: #74afeb; font-size: 20px"
                                ></i>
                                <i v-else>-</i>
                              </td>

                              <th>중증_뇌출혈수술</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.mkioskTy1 === 'Y'"
                                   class="fa-regular fa-circle-check"
                                   style="color: #74afeb; font-size: 20px"
                                ></i>
                                <i v-else>-</i>
                              </td>

                              <th>중증_뇌경색의재관류</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.mkioskTy2 === 'Y'"
                                   class="fa-regular fa-circle-check"
                                   style="color: #74afeb; font-size: 20px"
                                ></i>
                                <i v-else>-</i>
                              </td>
                            </tr>

                            <tr>
                              <th>중증_심근경색의재관류</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.mkioskTy3 === 'Y'"
                                   class="fa-regular fa-circle-check"
                                   style="color: #74afeb; font-size: 20px"
                                ></i>
                                <i v-else>-</i>
                              </td>

                              <th>중증_복부손상의수술</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.mkioskTy4 === 'Y'"
                                   class="fa-regular fa-circle-check"
                                   style="color: #74afeb; font-size: 20px"
                                ></i>
                                <i v-else>-</i>
                              </td>

                              <th>중증_사지접합의수술</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.mkioskTy5 === 'Y'"
                                   class="fa-regular fa-circle-check"
                                   style="color: #74afeb; font-size: 20px"
                                ></i>
                                <i v-else>-</i>
                              </td>
                            </tr>

                            <tr>
                              <th>중증_응급내시경</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.mkioskTy6 === 'Y'"
                                   class="fa-regular fa-circle-check"
                                   style="color: #74afeb; font-size: 20px"
                                ></i>
                                <i v-else>-</i>
                              </td>

                              <th>중증_응급투석</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.mkioskTy7 === 'Y'"
                                   class="fa-regular fa-circle-check"
                                   style="color: #74afeb; font-size: 20px"
                                ></i>
                                <i v-else>-</i>
                              </td>

                              <th>중증_조산산모</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.mkioskTy8 === 'Y'"
                                   class="fa-regular fa-circle-check"
                                   style="color: #74afeb; font-size: 20px"
                                ></i>
                                <i v-else>-</i>
                              </td>
                            </tr>

                            <tr>
                              <th>중증_정신질환자</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.mkioskTy9 === 'Y'"
                                   class="fa-regular fa-circle-check"
                                   style="color: #74afeb; font-size: 20px"
                                ></i>
                                <i v-else>-</i>
                              </td>

                              <th>중증_신생아</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.mkioskTy10 === 'Y'"
                                   class="fa-regular fa-circle-check"
                                   style="color: #74afeb; font-size: 20px"
                                ></i>
                                <i v-else>-</i>
                              </td>

                              <th>중증_중증화상</th>
                              <td>
                                <i v-if="medinstDetail.hospBasicInfo.mkioskTy11 === 'Y'"
                                   class="fa-regular fa-circle-check"
                                   style="color: #74afeb; font-size: 20px"
                                ></i>
                                <i v-else>-</i>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </div>-->

                        <div class="table-box">
                          <table>
                            <colgroup>
                              <col style="width: 100px"/>
                              <col style="width: auto"/>
                              <col style="width: auto"/>
                            </colgroup>
                            <thead>
                            <tr>
                              <th>보유 여부</th>
                              <th>시설</th>
                              <th>의료진 수</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <td><input class='editMedi' type='checkbox' :checked='this.modMedinst.childBirthYn' v-model='this.modMedinst.childBirthYn'></td>
                              <td> 감염병 전용 분만 시설</td>
                              <td><input type='text' v-show='this.modMedinst.childBirthYn' v-model="this.modMedinst.childBirthMed"></td>
                            </tr>
                            <tr>
                              <td><input class='editMedi' type='checkbox' :checked='this.modMedinst.dialysisYn' v-model='this.modMedinst.dialysisYn'></td>
                              <td>감염병 전용 투석 시설</td>
                              <td><input type='text' v-show='this.modMedinst.dialysisYn' v-model='this.modMedinst.dialysisMed'  ></td>
                            </tr>
                            <tr>
                              <td><input class='editMedi' type='checkbox' :checked='this.modMedinst.childYn' v-model='this.modMedinst.childYn'></td>
                              <td>감염병 전용 소아 시설</td>
                              <td><input type='text' v-show='this.modMedinst.childYn' v-model=" this.modMedinst.childMed"></td>
                            </tr>
                            <tr>
                              <td><input class='editMedi' type='checkbox' :checked='this.modMedinst.nursingHospitalYn' v-model='this.modMedinst.nursingHospitalYn'></td>
                              <td>감염병 전용 요양병원 시설</td>
                              <td><input type='text' v-show='this.modMedinst.nursingHospitalYn' v-model="this.modMedinst.nursingHospitalMed"></td>
                            </tr>
                            <tr>
                              <td><input class='editMedi' type='checkbox' :checked='this.modMedinst.mentalPatientYn' v-model='this.modMedinst.mentalPatientYn'></td>
                              <td>감염병 전용 정신질환자 시설</td>
                              <td><input type='text' v-show='this.modMedinst.mentalPatientYn' v-model="this.modMedinst.mentalPatientMed"></td>
                            </tr>
                            <tr>
                              <td><input class='editMedi' type='checkbox' :checked='this.modMedinst.negativePressureRoomYn' v-model='this.modMedinst.negativePressureRoomYn'></td>
                              <td>감염병 전용 음압격리 시설</td>
                              <td></td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </article>
                  </div>
            </article>
            <article class="modal-menu-layout1 pt-10">
              <div class="modal-menu-list">
                <a @click="closeModal" class="modal-menu-btn menu-primary">취소</a>
                <a @click='editMedInstEtc' class="modal-menu-btn menu-primary">수정</a>
              </div>
            </article>
          </div>
          <!--end::Modal body-->
        </div>
        <!--end::Modal content-->
      </div>
      <!--end::Modal dialog-->
    </div>

  </div>
  <div v-show="showModal" class="modal-backdrop fade"></div>
  <!--end::Modals-->
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
                @click="alertOpen(alertIdx)"
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
</template>

<script>
import DataPagination from '@/components/user/unit/DataPagination.vue'
import {ref} from 'vue'
import {mapState} from 'vuex'
import {getGugun, getSido, toggleCheckbox} from '@/util/ui'
import store from '@/store/store'

export default {
  components: {DataPagination},
  name: 'DetlAncmtListMedInst',
  props: {
    msg: String
  },
  computed: {
    ...mapState('admin', ['cmSido', 'cmGugun', 'medinstList', 'medinstDetail','hpId','medInstEtc']
                , 'user', ['userInfo']),

    startIndex() {
      return (this.page - 1) * this.displayRowsCount;
    },
    endIndex() {
      return this.page * this.displayRowsCount;
    },
    filterData() {
      let params = {};
      if (this.filterMedinst['text']) {
        if (/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(this.filterMedinst['text'])) {
          params = {...params, dutyName: this.filterMedinst['text']};
        } else {
          params = {...params, hospId: this.filterMedinst['text']};
        }
      }
      if (this.filterMedinst['dstr1Cd']) params = {...params, dstr1Cd: this.filterMedinst['dstr1Cd']};
      if (this.filterMedinst['dstr2Cd']) params = {...params, dstr2Cd: this.filterMedinst['dstr2Cd']};

      return params
    },
    enableSecondAddressPicker() {
      return this.filterMedinst['dstr1Cd'] === "";
    }
  },
  mounted() {
    this.initNaverMap()
    this.setDefaultDstr1Cd()
  },

  setup() {
    const showTable = ref(false)

    const toggleTable = function () {
      showTable.value = !showTable.value
    }

    const isAlert = ref(false)
    const cncBtn = ref(false)
    const errMsg = ''

    return {
      showTable,
      toggleTable,
      isAlert,
      errMsg,
      cncBtn /* alert 취소버튼 유무 */


    }
  },
  data() {
    return {
      showModal: false,
      showEditMedi: false,
      tabidx: 0,
      displayRowsCount: 15,
      page: 1,
      alertIdx: 100,
      doctorCount: 0, // 의료진 수
      filterMedinst: {
        dutyDivNam: [],
        dstr1Cd: '',
        dstr2Cd: '',
        text: '',
      },
      inputValue: null,
      modMedinst:{
        hospId: '',
        childBirthYn: false,
        dialysisYn: false,
        childYn:false,
        nursingHospitalYn: false,
        mentalPatientYn: false,
        negativePressureRoomYn: false,
      },
      imagePreview: '',
    }
  },
  methods: {
    getSecondAddress(address) {
      if (address) {
        this.$store.dispatch('admin/getGuGun', address);
      }
    },
    changeDstrCd1() {
      this.getSecondAddress(this.filterMedinst['dstr1Cd']);
      this.filterMedinst['dstr2Cd'] = '';
      this.search();
    },
    changeDstrCd2() {
      this.search();
    },
    search() {
      this.$store.dispatch('admin/getMedinst', this.filterData);
      this.page = 1;
    },
    changePage(newPage) {
      this.$store.dispatch('admin/getMedinst', {
        ...this.filterData,
        page: newPage
      });
      this.page = newPage;
    },
    async openMedInstDetail(data) {
      await this.$store.dispatch('admin/getMedinstDetail', data)
      this.showModal = true
      if (this.medinstDetail !== undefined) {
        this.loadNaverMapAsync()
      }
    },
    closeModal() {
      console.log('실행')
      this.showModal = false
      this.showEditMedi = false
      this.tabidx = 0
    },
    openEditMedi(){
      this.showEditMedi = true
      this.getMediInstEtc()
    },
    alertOpen(idx) {

      this.cncBtn = false
      if (idx === 0) {
        /*기관이미지 삭제*/
        this.errMsg = '기관 이미지를 삭제하시겠습니까?'
        this.cncBtn = true
        this.isAlert = true
        this.alertIdx = 0
      } else if (idx === 1) {
        this.errMsg = '기관 이미지가 삭제되었습니다.'
        this.isAlert = true
        this.alertIdx = 1
      }
    },
    cfrmAl(res) {
      if (res === 0) {
        console.log(0)
        this.removeInstImg()
        this.alertOpen(1)
      } else if (res === 1) {
        console.log('1')
        this.alertClose()
      }
    },
    alertClose() {
      this.errMsg = ''
      this.cncBtn = false
      this.isAlert = false
      this.alertIdx = 100
    },
    toggleCheckbox,
    getGugun,
    getSido,
    tabsMove(idx) {
      this.tabidx = idx
    },
    getMedinst() {
      console.log(this.filterMedinst)
      this.$store.dispatch('admin/getMedinst', this.filterMedinst)
    },
    removeInstImg() {
      this.$store.dispatch('admin/removeMedinstImg', this.medinstDetail)
    },
    getUpDt(date) {
      if (date !== null && date !== undefined) {
        return (
            date.slice(0, 4) +
            '\n' +
            date.slice(5, 7) +
            '.' +
            date.slice(8, 10)
        )
      } else return ''
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
      const map = new window.naver.maps.Map('map', {
        center: new window.naver.maps.LatLng(this.medinstDetail.hospBasicInfo.wgs84Lat, this.medinstDetail.hospBasicInfo.wgs84Lon),
        zoom: 15,
        zoomControlOptions: {
          style: window.naver.maps.ZoomControlStyle.SMALL,
          position: window.naver.maps.Position.TOP_RIGHT
        }
      })
      new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(this.mdinstDetail.hospBasicInfo.wgs84Lat, this.medinstDetail.hospBasicInfo.wgs84Lon),
        map: map
      })
    },
    async getMediInstEtc(){
      if(this.hpId !== ''){
        await this.$store.dispatch('admin/getMedInstEtc',this.hpId)
      }
      if(this.medInstEtc !== null){
        this.modMedinst = this.medInstEtc
      }
      console.log(this.modMedinst)
    },
    uploadImage(event) {
      const input = event.target;
      if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = (e) => {
          this.imagePreview = e.target.result;
        };
        console.log(input.files[0]);
        reader.readAsDataURL(input.files[0]);
      } else {
        this.imagePreview = '';
      }
    },
    chkYn(data){
      if(data !== null){
        data = !data
        console.log(data)
      }
    },
    editMedInstEtc(){
      this.modMedinst.hospId = this.hospId
      console.log(this.modMedinst)
      this.$store.dispatch('admin/editMedInstEtc',this.modMedinst)
      this.getMediInstEtc()
    },
    setDefaultDstr1Cd() {
      const userInfo = store.getters['user/getUserInfo']
      if (userInfo.dutyDstr1Cd) {
        this.filterMedinst['dstr1Cd'] = userInfo.dutyDstr1Cd;
        this.getSecondAddress(userInfo.dutyDstr1Cd);
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
article.tabs-group-layout .tabs-contents-box .tabs-box-list .tabs-box {
  display: block;
}


.modal.show {
  background-color: rgba(0, 0, 0, 0.4);
  display: block;
}

.modal-dialog {
  margin-top: 50px;
  margin-bottom: 50px;
}

.modal-backdrop .fade {
  opacity: 0.4 !important;
  display: block !important;
}

.map-wrapper {
  padding: 0;
  height: 400px;
  position: relative;
}

#map {
  position: relative !important;
  width: 480px;
  //width: -webkit-fill-available;
  height: 400px;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  border: 1px solid #555;
}

.popup {
  display: block;
}
.addMedi {
    margin-top: 5px;
}
.editMedi {
    margin-right: 7px;
    padding-left: 3px;
}
</style>
