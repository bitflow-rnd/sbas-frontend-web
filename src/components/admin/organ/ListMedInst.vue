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
													<path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor" />
												</svg>
											</span>
                                <!--end::Svg Icon-->
                            </li>
                            <!--end::Item-->
                            <!--begin::Item-->
                            <li class="breadcrumb-item text-gray-700 fw-semibold lh-1 mx-n1 fs-6">기관정보 관리</li>
                            <!--end::Item-->
                            <!--begin::Item-->
                            <li class="breadcrumb-item">
                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr071.svg-->
                                <span class="svg-icon svg-icon-4 mx-n1">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor" />
												</svg>
											</span>
                                <!--end::Svg Icon-->
                            </li>
                            <!--end::Item-->
                            <!--begin::Item-->
                            <li class="breadcrumb-item text-gray-500 mx-n1"><h1 class="page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-2 m-0">의료기관 관리</h1></li>
                            <!--end::Item-->
                        </ul>
                        <!--end::Breadcrumb-->
                        <!--begin::Title-->
                        <!--end::Title-->
                    </div>
                    <!--end::Page title-->
                    <!--begin::Actions-->
                    <div class="d-flex align-items-center gap-2 gap-lg-3">
                        <a href="#" class="btn btn-flex btn-sm btn-outline btn-outline-light fs-7" data-bs-toggle="modal" data-bs-target="#kt_modal_view_users"><i class="fa-regular fa-trash-can"></i> 삭제</a>
                        <a href="#" class="btn btn-flex btn-sm btn-secondary fs-7" data-bs-toggle="modal" data-bs-target="#kt_modal_view_users"><i class="fa-solid fa-download"></i> 엑셀다운로드</a>
                        <a href="#" class="btn btn-sm btn-flex btn-primary align-self-center px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">
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

                            <div class="form-head-box">

                            </div>

                            <div class="form-body-box">

                                <div class="table-form-toggle-box">
                                    <router-link to="" class="table-form-toggle-btn" @click="toggleTable">
                                        <i class="fa-solid" :class="showTable ? 'fa-angle-up' : 'fa-angle-down'"></i>
                                    </router-link>
                                </div>

                                <div class="table-box with-toggle">
                                    <table>
                                        <colgroup>
                                            <col style="width: 168px;">
                                            <col style="width: auto;">
                                            <col style="width: 168px;">
                                            <col style="width: auto;">
                                        </colgroup>
                                        <tbody>
                                        <tr data-toggle="false">
                                            <th>검색조건</th>
                                            <td>
                                                <div class="item-cell-box">
                                                    <div class="sbox w-175px" @click="getSido">
                                                        <select v-model="search.dstrCd1" @change="getGugun(search.dstrCd1)">
                                                            <option value="null">시/도 전체</option>
                                                            <option v-for="(item,i) in cmSido" :key="i"
                                                                    :value="item.cdId">{{ item.cdNm }}</option>
                                                        </select>
                                                    </div>

                                                    <div class="sbox w-175px ms-2">
                                                        <select v-model="search.dstrCd2">
                                                            <option value="null">시/군/구 전체</option>
                                                            <option v-for="(item,i) in cmGugun" :key="i"
                                                                    :value="item.cdId">{{item.cdNm}}</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </td>
                                            <td colspan="2" class="border-left-1 border-color-gray">
                                                <div class="tbox w-400px with-btn">
                                                    <input v-model="inputValue" @input="handleChange" type="text" placeholder="의료기관명 또는 ID 입력">

                                                    <router-link to="" @click="getMedinst" class="input-btn">
                                                        <i class="fa-solid fa-magnifying-glass"></i>
                                                    </router-link>
                                                </div>
                                            </td>
                                        </tr>

                            <!--           todo 검색필터                             -->
                                        <tr>
                                            <th>기관분류</th>
                                            <td colspan="3">

                                                <div class="item-row-box">

                                                    <div class="item-cell-box">
                                                        <div class="cbox">
                                                            <label>
                                                                <input type="checkbox" name="state"><i></i>
                                                                <span class="txt">상급종합병원</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="state"><i></i>
                                                                <span class="txt">종합병원</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="state"><i></i>
                                                                <span class="txt">병원</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="state"><i></i>
                                                                <span class="txt">요양병원</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="state"><i></i>
                                                                <span class="txt">의원</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="state"><i></i>
                                                                <span class="txt">보건소</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="state"><i></i>
                                                                <span class="txt">보건지소</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="state"><i></i>
                                                                <span class="txt">보건진료소</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="state"><i></i>
                                                                <span class="txt">보건의료원</span>
                                                            </label>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div class="item-row-box">
                                                    <div class="item-cell-box">

                                                        <div class="cbox">
                                                            <label>
                                                                <input type="checkbox" name="state"><i></i>
                                                                <span class="txt">치과병원</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="state"><i></i>
                                                                <span class="txt">치과의원</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="state"><i></i>
                                                                <span class="txt">한방병원</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="state"><i></i>
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
                                                            <input type="checkbox" name="type1"><i></i>
                                                            <span class="txt">읍압격리</span>
                                                        </label>
                                                    </div>

                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="type1"><i></i>
                                                            <span class="txt">일반격리</span>
                                                        </label>
                                                    </div>

                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="type1"><i></i>
                                                            <span class="txt">일반</span>
                                                        </label>
                                                    </div>

                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="type1"><i></i>
                                                            <span class="txt">소아읍압격리</span>
                                                        </label>
                                                    </div>

                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="type1"><i></i>
                                                            <span class="txt">소아일반격리</span>
                                                        </label>
                                                    </div>
                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="type1"><i></i>
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
                                                            <input type="checkbox" name="type2"><i></i>
                                                            <span class="txt">중환자</span>
                                                        </label>
                                                    </div>

                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="type2"><i></i>
                                                            <span class="txt">중증</span>
                                                        </label>
                                                    </div>

                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="type2"><i></i>
                                                            <span class="txt">준증증</span>
                                                        </label>
                                                    </div>

                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="type2"><i></i>
                                                            <span class="txt">중등증</span>
                                                        </label>
                                                    </div>

                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="type2"><i></i>
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
                                                            <input type="checkbox" name="type3"><i></i>
                                                            <span class="txt">인공호흡기 일반</span>
                                                        </label>
                                                    </div>

                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="type3"><i></i>
                                                            <span class="txt">인공호흡기 조산아</span>
                                                        </label>
                                                    </div>

                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="type3"><i></i>
                                                            <span class="txt">인큐베이터</span>
                                                        </label>
                                                    </div>

                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="type3"><i></i>
                                                            <span class="txt">ECMO</span>
                                                        </label>
                                                    </div>

                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="type3"><i></i>
                                                            <span class="txt">중심체온조절유도기</span>
                                                        </label>
                                                    </div>
                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="type3"><i></i>
                                                            <span class="txt">고압산소치료기</span>
                                                        </label>
                                                    </div>

                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="type3"><i></i>
                                                            <span class="txt">CT</span>
                                                        </label>
                                                    </div>

                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="type3"><i></i>
                                                            <span class="txt">MRI</span>
                                                        </label>
                                                    </div>

                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="type3"><i></i>
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
                    <div class="card-body p-8">
                        <!--begin::Table-->
                        <h5>검색결과<span class="position-absolute translate-middle rounded-pill bg-primary">{{medinstList.length}}</span></h5>

                        <article class="table-list-layout1">

                            <div class="table-body-box">

                                <div v-if="medinstList.length===0" class="table-nodata py-40">

                                    <div class="img-box">
                                        <img src="/img/common/img_nodata.svg" alt="이미지">
                                    </div>

                                    <div class="txt-box pt-10">조회 결과가 없습니다.</div>

                                </div>
                                <div v-if="medinstList.length !==0" class="table-box with-scroll small">
                                    <table>
                                        <colgroup>
                                            <col style="width: 70px;">
                                            <col style="width: 50px;">
                                            <col style="width: 70px;">
                                            <col style="width: 150px;">
                                            <col style="width: 100px;">
                                            <col style="width: 60px;">
                                            <col style="width: 60px;">
                                            <col style="width: 60px;">
                                            <col style="width: 60px;">
                                            <col style="width: 60px;">
                                            <col style="width: 60px;">
                                            <col style="width: 60px;">
                                            <col style="width: 60px;">
                                            <col style="width: 60px;">
                                            <col style="width: 60px;">
                                            <col style="width: 60px;">
                                            <col style="width: 60px;">
                                            <col style="width: 60px;">
                                            <col style="width: 60px;">
                                            <col style="width: 60px;">
                                            <col style="width: 60px;">
                                            <col style="width: 60px;">
                                            <col style="width: 60px;">
                                            <col style="width: 90px;">
                                            <col style="width: 90px;">

                                        </colgroup>
                                        <thead>
                                        <tr class="small">
                                            <th rowspan="2">순번</th>
                                            <th rowspan="2">
                                                <div class="cbox">
                                                    <label>
                                                        <input type="checkbox" class="all-chk"><i></i>
                                                    </label>
                                                </div>
                                            </th>
                                            <th rowspan="2">이미지</th>
                                            <th rowspan="2">의료기관명</th>
                                            <th rowspan="2">대표전화/<br/>
                                                응급실전화</th>
                                            <th colspan="5">감염병 격리병상</th>
                                            <th colspan="4">중환자 병상</th>
                                            <th colspan="4">보유장비</th>
                                            <th colspan="5">보유장비</th>
                                            <th rowspan="2">등록<br/>
                                                의료진 수</th>
                                            <th rowspan="2">동기화<br/>
                                                일시</th>
                                        </tr>
                                        <tr>
                                            <th class="px-0">음압<br/>격리</th>
                                            <th class="px-0">일반<br/>격리</th>
                                            <th class="px-0">일반</th>
                                            <th class="px-0">소아<br/>음압</th>
                                            <th class="px-0">소아<br/>일반</th>
                                            <th class="px-0">중환자</th>
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
                                            <th class="px-0">중심제온<br/>
                                                조절유도</th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        <tr v-for="(item,i) in medinstList" :key="i">
                                            <td>{{i+1}}</td>
                                            <td>
                                                <div class="cbox d-flex justify-content-center">
                                                    <label>
                                                        <input type="checkbox"><i></i>
                                                    </label>
                                                </div>
                                            </td>
                                            <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                            <td data-bs-toggle="modal" data-bs-target="#kt_modal_medinst_view" class="text-start">
                                                <div class="text-start text-black">{{ item.dutyName }}</div>
                                                <div class="text-gray-600 fs-12px">{{ item.dstrCd1 }} {{ item.dstrCd2 }}/
                                                    {{ item.dutyDivNam }}</div>
                                            </td>
                                            <td>
                                                {{ item.dutyTel1 }}
                                            </td>
                                            <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                            <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                            <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                            <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                            <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                            <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                            <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                            <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                            <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                            <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                            <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                            <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                            <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                            <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                            <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                            <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                            <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                            <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                            <td>12</td>
                                            <td>
                                                {{ getUpDt(item.updtDttm)}}
                                            </td>
                                        </tr>

                                        </tbody>

                                    </table>
                                </div>
                            </div>

                        </article>

                        <div class="row mt-10">
                            <div
                                    class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"></div>
                            <div class="col-12 d-flex align-items-center justify-content-center">
                                <div class="dataTables_paginate paging_simple_numbers" id="kt_table_users_paginate">
                                    <ul class="pagination">
                                        <li class="paginate_button page-item previous disabled" id="kt_table_users_previous"><a
                                                href="#" aria-controls="kt_table_users" data-dt-idx="0" tabindex="0" class="page-link"><i
                                                class="previous"></i></a></li>
                                        <li class="paginate_button page-item active"><a href="#" aria-controls="kt_table_users"
                                                                                        data-dt-idx="1" tabindex="0"
                                                                                        class="page-link">1</a></li>
                                        <li class="paginate_button page-item "><a href="#" aria-controls="kt_table_users"
                                                                                  data-dt-idx="2" tabindex="0" class="page-link">2</a>
                                        </li>
                                        <li class="paginate_button page-item "><a href="#" aria-controls="kt_table_users"
                                                                                  data-dt-idx="3" tabindex="0" class="page-link">3</a>
                                        </li>
                                        <li class="paginate_button page-item next" id="kt_table_users_next"><a href="#"
                                                                                                               aria-controls="kt_table_users"
                                                                                                               data-dt-idx="4"
                                                                                                               tabindex="0"
                                                                                                               class="page-link"><i
                                                class="next"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>



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
    <div v-show="openModal" class="modal fade" id="kt_modal_medinst_view" tabindex="-1" aria-hidden="true" style="">
        <!--begin::Modal dialog-->
        <div class="modal-dialog mw-1500px modal-dialog-centered">
            <!--begin::Modal content-->
            <div class="modal-content">
                <!--begin::Modal header-->
                <div class="modal-header px-10 py-5 d-flex justify-content-between">
                    <!--begin::Modal title-->
                    <h2>의료기관 세부 정보</h2>
                    <!--end::Modal title-->
                    <!--begin::Close-->
                    <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
                        <span @click="toggleModal" class="svg-icon svg-icon-1">
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

                    <article class="floating-organ-box">

                        <div class="img-box">
                            <img src="/img/common/ic_lnb_organ.svg" alt="이미지">
                        </div>
                        <div class="txt-box">칠곡경북대학교병원</div>

                    </article>
                </div>

                <!--begin::Modal header-->
                <!--begin::Modal body-->
                <div class="modal-body scroll-y py-10 px-10">


                    <article class="tabs-group-layout">

                        <div class="tabs-nav-box">
                            <router-link to="" @click="tabsMove(0)" :class="{'active': tabidx === 0}" class="tabs-nav-btn">기본정보</router-link>
                            <router-link to=""  @click="tabsMove(1)" :class="{'active': tabidx === 1}" class="tabs-nav-btn ">세부현황</router-link>
                            <router-link to=""  @click="tabsMove(2)" :class="{'active': tabidx === 2}" class="tabs-nav-btn">병상배정시스템 등록 의료진 <span class="cnt">0</span></router-link>
                        </div>

                        <div class="tabs-contents-box">

                            <div class="tabs-box-list">
                                <div class="tabs-box" v-show="tabidx===0"  style=";">


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
                                                        <th rowspan="6">의료기관<br/>이미지</th>
                                                        <td rowspan="6" class="text-start">
                                                            <article class="modal-profile-layout1">

                                                                <div class="profile-card-box flex-column">
                                                                    <div class="profile-view-box " style="width: 220px; height: 220px;">
                                                                        <img src="/img/common/img_profile_dummy.png" alt="이미지">
                                                                        <a href="javascript:confirmPopupOpen('기관 이미지를<br/>삭제하시겠습니까?',
                                                                        function() { profileImgRemove();confirmPopupClose();alertPopupOpen('기관 이미지가<br/>삭제되었습니다.');})"
                                                                           class="remove-btn"><img src="/img/common/ic_profile_remove.svg" alt="이미지"></a>
                                                                    </div>

                                                                    <div class="profile-upload-box d-flex align-items-center pt-4">

                                                                        <div class="upload-box">
                                                                            <label class="btn btn-flex justify-content-center btn-primary py-0 px-0 h-30px w-80px certify-btn rounded-1 btn-outline btn-outline-primary ">
                                                                                <input type="file">
                                                                                수정하기
                                                                            </label>
                                                                        </div>

                                                                        <div class="ps-2">(권장) 512x512 픽셀의 정사각형 이미지를 준비해주세요</div>

                                                                    </div>
                                                                </div>
                                                            </article>
                                                        </td>
                                                        <th>기관ID (구ID)</th>
                                                        <td>A1300010 (11100109)</td>
                                                    </tr>

                                                    <tr>
                                                        <th>기관명</th>
                                                        <td>칠곡경북대학교병원</td>
                                                    </tr>

                                                    <tr>
                                                        <th>병원분류</th>
                                                        <td>상급종합병원</td>
                                                    </tr>

                                                    <tr>
                                                        <th>병원분류명</th>
                                                        <td>상급종합병원</td>
                                                    </tr>

                                                    <tr>
                                                        <th>응급의료기관분류</th>
                                                        <td>지역응급의료센터</td>
                                                    </tr>


                                                    <tr>
                                                        <th>응급의료기관분류명</th>
                                                        <td>지역응급의료센터</td>
                                                    </tr>

                                                    <tr>
                                                        <th rowspan="6">간이약도</th>
                                                        <td rowspan="6">


                                                            <div class="" style="max-width:300px;">


                                                                <div class="h-200px" style="">지도 영역</div>


                                                                <div class="pt-4 text-center">위도 : 37.5327845 / 경도 : 126.859536</div>
                                                            </div>

                                                        </td>
                                                        <th>대표전화</th>
                                                        <td>1533-8888</td>
                                                    </tr>


                                                    <tr>
                                                        <th>응급의료기관분류명</th>
                                                        <td>지역응급의료센터</td>
                                                    </tr>


                                                    <tr>
                                                        <th>응급실전화</th>
                                                        <td>053-200-2000</td>
                                                    </tr>


                                                    <tr>
                                                        <th>팩스번호</th>
                                                        <td>053-200-2004</td>
                                                    </tr>


                                                    <tr>
                                                        <th>주소</th>
                                                        <td>
                                                            <div class="eclipse-line2-box">(41404) 대구광역시 북구 호국로 807, 칠곡경북대학교병원(임상실습동 1~11층 포함) (학정동) 주소
                                                                최대 2줄 표시</div>
                                                        </td>
                                                    </tr>


                                                    <tr>
                                                        <th>기관설명</th>
                                                        <td>-</td>
                                                    </tr>

                                                    <tr>
                                                        <th>시작시간</th>
                                                        <td>00:00</td>

                                                        <th>종료시간</th>
                                                        <td>24:00</td>
                                                    </tr>

                                                    <tr>
                                                        <th>진료과목</th>
                                                        <td colspan="3">

                                                            <article class="item-list-layout1" style="max-width:900px;">
                                                                <ul class="box-7">
                                                                    <li><div class="item-box">가정의학과</div></li>
                                                                    <li><div class="item-box">내과</div></li>
                                                                    <li><div class="item-box">마취통증의학과</div></li>
                                                                    <li><div class="item-box">병리과</div></li>
                                                                    <li><div class="item-box">비뇨의학과</div></li>
                                                                    <li><div class="item-box">산부인과</div></li>
                                                                    <li><div class="item-box">성형외과</div></li>
                                                                    <li><div class="item-box">소아청소년과</div></li>
                                                                    <li><div class="item-box">신경과</div></li>
                                                                    <li><div class="item-box">신경외과</div></li>
                                                                    <li><div class="item-box">안과</div></li>
                                                                    <li><div class="item-box">영상의학과</div></li>
                                                                    <li><div class="item-box">외과</div></li>
                                                                    <li><div class="item-box">응급의학과</div></li>
                                                                    <li><div class="item-box">이비인후과</div></li>
                                                                    <li><div class="item-box">재활의학과</div></li>
                                                                    <li><div class="item-box">정신건강의학과</div></li>
                                                                    <li><div class="item-box">정형외과</div></li>
                                                                    <li><div class="item-box">진단검사의학과</div></li>
                                                                    <li><div class="item-box">치과</div></li>
                                                                    <li><div class="item-box">피부과</div></li>
                                                                    <li><div class="item-box">핵의학과</div></li>
                                                                    <li><div class="item-box">흉부외과</div></li>
                                                                </ul>

                                                            </article>

                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th>진료시간</th>
                                                        <td colspan="3">

                                                            <article class="item-list-layout1" style="max-width:500px;">
                                                                <ul class="box-4">
                                                                    <li><div class="item-box">월요일 09:00~17:00</div></li>
                                                                    <li><div class="item-box">화요일 09:00~17:00</div></li>
                                                                    <li><div class="item-box">수요일 09:00~17:00</div></li>
                                                                    <li><div class="item-box">목요일 09:00~17:00</div></li>
                                                                    <li><div class="item-box">금요일 09:00~17:00</div></li>
                                                                    <li><div class="item-box">토요일 <span class="text-gray-400 ps-1">없음</span></div></li>
                                                                    <li><div class="item-box">일요일 <span class="text-gray-400 ps-1">없음</span></div></li>
                                                                    <li><div class="item-box">공휴일일 <span class="text-gray-400 ps-1">없음</span></div></li>
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
                                                        <col style="width: 168px;">
                                                        <col style="width: auto;">
                                                        <col style="width: 168px;">
                                                        <col style="width: auto;">

                                                        <col style="width: 168px;">
                                                        <col style="width: auto;">
                                                    </colgroup>
                                                    <tbody>

                                                    <tr>
                                                        <th>응급실운영여부</th>
                                                        <td>운영중</td>

                                                        <th>입원실가용여부</th>
                                                        <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>

                                                        <th>병상수</th>
                                                        <td>1,070</td>
                                                    </tr>


                                                    </tbody>
                                                </table>
                                            </div>

                                            <div class="table-box">
                                                <table>
                                                    <colgroup>
                                                        <col style="width: 168px;">
                                                        <col style="width: auto;">
                                                        <col style="width: 168px;">
                                                        <col style="width: auto;">

                                                        <col style="width: 168px;">
                                                        <col style="width: auto;">
                                                    </colgroup>
                                                    <tbody>

                                                    <tr>
                                                        <th>가용_응급실</th>
                                                        <td>10</td>

                                                        <th>가용_입원실</th>
                                                        <td>99</td>

                                                        <th>가용_수술실</th>
                                                        <td>5</td>
                                                    </tr>


                                                    </tbody>
                                                </table>
                                            </div>

                                            <div class="table-box">
                                                <table>
                                                    <colgroup>
                                                        <col style="width: 168px;">
                                                        <col style="width: auto;">
                                                        <col style="width: 168px;">
                                                        <col style="width: auto;">

                                                        <col style="width: 168px;">
                                                        <col style="width: auto;">
                                                    </colgroup>
                                                    <tbody>

                                                    <tr>
                                                        <th>기준_병상수</th>
                                                        <td>10</td>

                                                        <th>기준_응급실</th>
                                                        <td>99</td>

                                                        <th>가용_수술실</th>
                                                        <td>5</td>
                                                    </tr>

                                                    <tr>
                                                        <th>기준_수술실</th>
                                                        <td>10</td>

                                                        <th>기준_신경중환자실</th>
                                                        <td>99</td>

                                                        <th>기준_신생아중환자실</th>
                                                        <td>5</td>
                                                    </tr>

                                                    <tr>
                                                        <th>기준_흉부중환자실</th>
                                                        <td>10</td>

                                                        <th>기준_일반중환자실</th>
                                                        <td colspan="3">99</td>

                                                    </tr>


                                                    </tbody>
                                                </table>
                                            </div>

                                            <div class="table-box">
                                                <table>
                                                    <colgroup>
                                                        <col style="width: 168px;">
                                                        <col style="width: auto;">
                                                        <col style="width: 168px;">
                                                        <col style="width: auto;">

                                                        <col style="width: 168px;">
                                                        <col style="width: auto;">
                                                    </colgroup>
                                                    <tbody>

                                                    <tr>
                                                        <th>중증_응급실</th>
                                                        <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>

                                                        <th>중증_뇌출혈수술</th>
                                                        <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>

                                                        <th>중증_뇌경색의재관류</th>
                                                        <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                                    </tr>

                                                    <tr>
                                                        <th>중증_심근경색의재관류</th>
                                                        <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>

                                                        <th>중증_복부손상의수술</th>
                                                        <td>-</td>

                                                        <th>중증_사지접합의수술</th>
                                                        <td>-</td>
                                                    </tr>

                                                    <tr>
                                                        <th>중증_응급실</th>
                                                        <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>

                                                        <th>중증_뇌출혈수술</th>
                                                        <td ><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>

                                                        <th>중증_뇌경색의재관류</th>
                                                        <td ><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                                    </tr>

                                                    <tr>
                                                        <th>중증_응급내시경</th>
                                                        <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>

                                                        <th>중증_응급투석</th>
                                                        <td >-</td>

                                                        <th>중증_조산산모</th>
                                                        <td ><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                                    </tr>

                                                    <tr>
                                                        <th>중증_정신질환자</th>
                                                        <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>

                                                        <th>중증_신생아</th>
                                                        <td ><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>

                                                        <th>중증_중증화상</th>
                                                        <td ><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                                    </tr>


                                                    </tbody>
                                                </table>
                                            </div>

                                            <div class="table-box">
                                                <table>
                                                    <colgroup>
                                                        <col style="width: 168px;">
                                                        <col style="width: auto;">
                                                        <col style="width: 168px;">
                                                        <col style="width: auto;">

                                                        <col style="width: 168px;">
                                                        <col style="width: auto;">
                                                    </colgroup>
                                                    <tbody>

                                                    <tr>
                                                        <th>가용_신경중환자</th>
                                                        <td>10</td>

                                                        <th>가용_신생중환자</th>
                                                        <td>99</td>

                                                        <th>가용_흉부중환자</th>
                                                        <td>5</td>
                                                    </tr>

                                                    <tr>
                                                        <th>가용_일반중환자</th>
                                                        <td>10</td>

                                                        <th>가용_응급실 일반병상</th>
                                                        <td>99</td>

                                                        <th>가용_응급실 소아 병상</th>
                                                        <td>5</td>
                                                    </tr>

                                                    <tr>
                                                        <th>가용_응급실 음압 격리
                                                            병상</th>
                                                        <td>10</td>

                                                        <th>가용_응급실 일반 격리
                                                            병상</th>
                                                        <td>10</td>

                                                        <th>가용_응급전용 중환자실</th>
                                                        <td>18</td>

                                                    </tr>


                                                    <tr>
                                                        <th>가용_내과중환자실</th>
                                                        <td>10</td>

                                                        <th>가용_외과중환자실</th>
                                                        <td>99</td>

                                                        <th>가용_신생아중환자실</th>
                                                        <td>5</td>
                                                    </tr>


                                                    <tr>
                                                        <th>가용_소아 중환자실</th>
                                                        <td>10</td>

                                                        <th>가용_소아응급전용
                                                            중환자실 병상</th>
                                                        <td>99</td>

                                                        <th>가용_신경과중환자실</th>
                                                        <td>5</td>
                                                    </tr>


                                                    <tr>
                                                        <th>가용_신경외과중환자실</th>
                                                        <td>10</td>

                                                        <th>가용_화상중환자실</th>
                                                        <td>99</td>

                                                        <th>가용_외상중환자실</th>
                                                        <td>-</td>
                                                    </tr>

                                                    <tr>
                                                        <th>가용_심장내과 중환자실</th>
                                                        <td>10</td>

                                                        <th>가용_흉부외과 중환자실</th>
                                                        <td>99</td>

                                                        <th>가용_일반 중환자실</th>
                                                        <td>5</td>
                                                    </tr>

                                                    <tr>
                                                        <th>가용_중환자실 내 음압
                                                            격리 병상</th>
                                                        <td>10</td>

                                                        <th>가용_응급전용 입원실</th>
                                                        <td>99</td>

                                                        <th>가용_소아응급전용 입원
                                                            병상</th>
                                                        <td>5</td>
                                                    </tr>

                                                    <tr>
                                                        <th>가용_외상전용 입원실</th>
                                                        <td>10</td>

                                                        <th>가용_수술실</th>
                                                        <td>99</td>

                                                        <th>가용_외상전용 수술실</th>
                                                        <td>5</td>
                                                    </tr>

                                                    <tr>
                                                        <th>가용_정신과 폐쇄 병상</th>
                                                        <td>10</td>

                                                        <th>가용_음압 격리 병상</th>
                                                        <td>99</td>

                                                        <th>가용_분만실</th>
                                                        <td>5</td>
                                                    </tr>

                                                    <tr>
                                                        <th>가용_CT</th>
                                                        <td>10</td>

                                                        <th>가용_MRI</th>
                                                        <td>99</td>

                                                        <th>가용_혈관촬영기</th>
                                                        <td>5</td>
                                                    </tr>

                                                    <tr>
                                                        <th>가용_인공호흡기</th>
                                                        <td>10</td>

                                                        <th>가용_인공호흡기(소아)</th>
                                                        <td>99</td>

                                                        <th>가용_인큐베이터</th>
                                                        <td>5</td>
                                                    </tr>

                                                    <tr>
                                                        <th>가용_CRRT</th>
                                                        <td>10</td>

                                                        <th>가용_ECMO</th>
                                                        <td>99</td>

                                                        <th>가용_치료적 저체온 요법</th>
                                                        <td>5</td>
                                                    </tr>

                                                    <tr>
                                                        <th>가용_화상전용 처치실</th>
                                                        <td>10</td>

                                                        <th>가용_고압산소치료기</th>
                                                        <td>99</td>

                                                        <th>가용_일반입원실</th>
                                                        <td>5</td>
                                                    </tr>



                                                    </tbody>
                                                </table>
                                            </div>


                                        </div>


                                    </article>



                                </div>

                                <div class="tabs-box" v-show="tabidx===1"  style="">


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

                                                        <col style="width: 168px;">
                                                        <col style="width: auto;">
                                                    </colgroup>
                                                    <tbody>

                                                    <tr>
                                                        <th>응급실전화</th>
                                                        <td>1533-8888</td>

                                                        <th>당직의</th>
                                                        <td>홍기용</td>

                                                        <th>당직의 직통연락처</th>
                                                        <td>010-2222-3333</td>
                                                    </tr>


                                                    </tbody>
                                                </table>
                                            </div>

                                            <div class="table-box">
                                                <table>
                                                    <colgroup>
                                                        <col style="width: 168px;">
                                                        <col style="width: auto;">
                                                        <col style="width: 168px;">
                                                        <col style="width: auto;">

                                                        <col style="width: 168px;">
                                                        <col style="width: auto;">
                                                        <col style="width: 168px;">
                                                        <col style="width: auto;">
                                                    </colgroup>
                                                    <tbody>

                                                    <tr>
                                                        <th>구급차</th>
                                                        <td>-</td>

                                                        <th>CT</th>
                                                        <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>

                                                        <th>MRI</th>
                                                        <td>-</td>

                                                        <th>조영촬영기</th>
                                                        <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                                    </tr>

                                                    <tr>
                                                        <th>인공호흡기가용</th>
                                                        <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>

                                                        <th>신경과입원실</th>
                                                        <td>-</td>

                                                        <th>약물중환자</th>
                                                        <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>

                                                        <th>VENTI(소아)</th>
                                                        <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                                    </tr>

                                                    <tr>
                                                        <th>인큐베이터(보육기)</th>
                                                        <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>

                                                        <th>분만실</th>
                                                        <td colspan="5">-</td>

                                                    </tr>


                                                    </tbody>
                                                </table>
                                            </div>

                                            <div class="table-box">
                                                <table>
                                                    <colgroup>
                                                        <col style="width: 168px;">
                                                        <col style="width: auto;">
                                                        <col style="width: 168px;">
                                                        <col style="width: auto;">

                                                        <col style="width: 168px;">
                                                        <col style="width: auto;">
                                                        <col style="width: 168px;">
                                                        <col style="width: auto;">
                                                    </colgroup>
                                                    <tbody>

                                                    <tr>
                                                        <th>응급실</th>
                                                        <td>+</td>

                                                        <th>수술실</th>
                                                        <td>12</td>

                                                        <th>신경중환자</th>
                                                        <td>-</td>

                                                        <th>신생중환자</th>
                                                        <td>-</td>
                                                    </tr>

                                                    <tr>
                                                        <th>흉부중환자</th>
                                                        <td>-</td>

                                                        <th>일반중환자</th>
                                                        <td>-</td>

                                                        <th>입원실</th>
                                                        <td>5</td>

                                                        <th>내과중환자실</th>
                                                        <td>5</td>
                                                    </tr>

                                                    <tr>
                                                        <th>외과중환자실</th>
                                                        <td>10</td>

                                                        <th>외과입원실</th>
                                                        <td>10</td>

                                                        <th>신경외과중환자실</th>
                                                        <td>10</td>

                                                        <th>화상중환자</th>
                                                        <td>-</td>
                                                    </tr>

                                                    <tr>
                                                        <th>외상중환자</th>
                                                        <td colspan="5">-</td>


                                                    </tr>


                                                    </tbody>
                                                </table>
                                            </div>

                                            <div class="table-box">
                                                <table>
                                                    <colgroup>
                                                        <col style="width: 168px;">
                                                        <col style="width: auto;">
                                                        <col style="width: 168px;">
                                                        <col style="width: auto;">

                                                        <col style="width: 168px;">
                                                        <col style="width: auto;">
                                                    </colgroup>
                                                    <tbody>

                                                    <tr>
                                                        <th>격리진료구역 음압격리
                                                            병상</th>
                                                        <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>

                                                        <th>격리진료구역 일반격리
                                                            병상 </th>
                                                        <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>

                                                        <th>소아 음압격리병상</th>
                                                        <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                                    </tr>

                                                    <tr>
                                                        <th>소아 일반격리병상</th>
                                                        <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>

                                                        <th>응급전용 중환자실 음압
                                                            격리병상</th>
                                                        <td>-</td>

                                                        <th>응급전용 중환자실 일반
                                                            격리병상</th>
                                                        <td>-</td>
                                                    </tr>

                                                    <tr>
                                                        <th>응급전용 입원실 음압
                                                            격리병상</th>
                                                        <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>

                                                        <th>응급전용 입원실 일반격리
                                                            병상</th>
                                                        <td ><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>

                                                        <th>감염병 전담병상 중환자실</th>
                                                        <td ><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                                    </tr>

                                                    <tr>
                                                        <th>감염병 전담병상 중환자실
                                                            내 음압격리병상</th>
                                                        <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>

                                                        <th>감염병 전담병상 중증
                                                            일반병상</th>
                                                        <td >-</td>

                                                        <th>감염병 전담병상 준-중증
                                                            일반병상</th>
                                                        <td ><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                                    </tr>

                                                    <tr>
                                                        <th>감염병 전담병상 중등증
                                                            일반병상</th>
                                                        <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>

                                                        <th>코호트 격리구역 병상</th>
                                                        <td ><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>

                                                        <th>응급실 소아 병상</th>
                                                        <td ><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                                    </tr>

                                                    <tr>
                                                        <th>응급실 음압 격리 병상</th>
                                                        <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>

                                                        <th>응급실 일반 격리 병상</th>
                                                        <td ><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>

                                                        <th>응급전용 중환자실</th>
                                                        <td ><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                                    </tr>

                                                    <tr>
                                                        <th>응급전용 중환자실</th>
                                                        <td>-</td>

                                                        <th>소아응급전용 중환자실
                                                            병상</th>
                                                        <td>-</td>

                                                        <th>심장내과 중환자실</th>
                                                        <td>-</td>
                                                    </tr>

                                                    <tr>
                                                        <th>중환자실 내 음압 격리
                                                            병상</th>
                                                        <td>-</td>

                                                        <th>응급전용 입원실</th>
                                                        <td>-</td>

                                                        <th>소아응급전용 입원 병상</th>
                                                        <td>-</td>
                                                    </tr>

                                                    <tr>
                                                        <th>외상전용 입원실</th>
                                                        <td>-</td>

                                                        <th>외상전용 수술실</th>
                                                        <td>-</td>

                                                        <th>정신과 폐쇄 병상</th>
                                                        <td>-</td>
                                                    </tr>

                                                    <tr>
                                                        <th>음압 격리 병상</th>
                                                        <td>-</td>

                                                        <th>화상전용 처치실</th>
                                                        <td colspan="3">-</td>

                                                    </tr>


                                                    </tbody>
                                                </table>
                                            </div>



                                        </div>


                                    </article>



                                </div>

                                <div class="tabs-box" v-show="tabidx===2"  style="">


                                    <article class="table-list-layout1">

                                        <div class="table-body-box">

                                            <div class="table-box with-scroll small">
                                                <table>
                                                    <colgroup>
                                                        <col style="width: 70px;">
                                                        <col style="width: 120px;">
                                                        <col style="width: 70px;">
                                                        <col style="width: 70px;">
                                                        <col style="width: 110px;">
                                                        <col style="width: 110px;">
                                                        <col style="width: 70px;">
                                                        <col style="width: 100px;">
                                                        <col style="width: 100px;">
                                                        <col style="width: 100px;">

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
                                                    <tr>
                                                        <td>
                                                            <img src="/img/common/img_profile_default.svg" alt="이미지">
                                                        </td>
                                                        <td>서울특별시</td>
                                                        <td>주임</td>
                                                        <td>김*선</td>
                                                        <td>투석, 임산부</td>
                                                        <td>병상요청, 병상배정</td>
                                                        <td>게스트</td>
                                                        <td>2022.12.31</td>
                                                        <td>2022.12.31</td>
                                                        <td>등록요청</td>
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

    <!--end::Modals-->



</template>

<script>

import {ref} from "vue";
import {mapState} from "vuex";
import {getGugun, getSido} from "@/util/ui";

export default {
    components: {

    },
    name: 'DetlAncmtListMedInst',
    props: {
        msg: String
    },
    computed: {
        ...mapState('admin',['cmSido','cmGugun','medinstList'])
    },
    mounted() {
    },

    setup(){

      const showTable = ref(false);
      const openModal = ref(false);
      const toggleModal = function(){
          openModal.value = !openModal.value
      }
      const toggleTable = function(){
          showTable.value = !showTable.value
      }

      return {
          showTable,
          toggleTable,
          openModal,
          toggleModal,
      }
    },
    data() {
        return{
            tabidx: 0,
            doctorCount: 0, // 의료진 수
            search:{
                dutyDivNam:[],
                dstrCd1:null,
                dstrCd2:null
            },
            inputValue: null,
        }
    },
    methods: {
        getGugun,
        getSido,
        tabsMove(idx) {
            this.tabidx = idx;
        },
        getMedinst(){
            console.log(this.search)
            this.$store.dispatch('admin/getMedinst',this.search)
        },
        getUpDt(date){
            return date.slice(0,4)+'.'+date.slice(5,7)+'.'+date.slice(8,10)+'\n'
            +date.slice(11,16)
        },
        handleChange(){
            if(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(this.inputValue)) {
                this.search.dutyName = this.inputValue
            } else {
                this.search.hospId = this.inputValue
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
</style>

