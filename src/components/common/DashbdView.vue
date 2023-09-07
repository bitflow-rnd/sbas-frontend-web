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
                            <li class="breadcrumb-item text-gray-500 mx-n1"><h1 class="page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-2 m-0">대시보드</h1></li>
                            <li class="breadcrumb-item ml-2"><span>&nbsp;병상배정 주요현황을 요약하여 확인 하실 수 있습니다</span></li>
                            <!--end::Item-->
                        </ul>
                        <!--end::Breadcrumb-->
                        <!--begin::Title-->
                        <!--end::Title-->
                    </div>
                    <!--end::Page title-->
                </div>
                <!--end::Toolbar wrapper-->
            </div>
            <!--end::Toolbar-->
            <!--begin::Content-->
            <div id="kt_app_content" class="app-content flex-column-fluid">
                <div class="card">
                    <!--begin:: Cardheader-->
                    <div class="card-header border-0 p-8">
                        <!--begin::Card toolbar-->

                        <div class="dashboard-header">

                            <div class="dashboard-head-box d-flex justify-content-between align-items-end pb-5">

                                <div class="head-box">
                                    <span class="text-black fs-3 fw-bold">요약 현황</span> <span class="text-gray-600">(집계기준 : 2023-08-01 00:00 ~ 2023-08-31 23:59)</span>
                                </div>

                                <div class="option-box d-inline-flex align-items-center">
                                    <span class="text-gray-600 pe-2">비교기준일</span>
                                    <article class="toggle-list-layout2">

                                        <div class="toggle-list">

                                            <label>
                                                <input type="radio" name="toggle1" checked="">
                                                <span class="txt">이틀 전</span>
                                            </label>

                                            <label>
                                                <input type="radio" name="toggle1">
                                                <span class="txt">지난 7일</span>
                                            </label>

                                            <label>
                                                <input type="radio" name="toggle1">
                                                <span class="txt">지난 14일</span>
                                            </label>

                                            <label>
                                                <input type="radio" name="toggle1">
                                                <span class="txt">지난 30일</span>
                                            </label>


                                        </div>

                                    </article>
                                </div>

                            </div>


                            <div class="dashboard-card-list">

                                <div class="card-list-wrap">

                                    <div class="card-box">

                                        <div class="top-box">
                                            <div class="subject-box">
                                                <div class="label-txt bg-primary">전국</div>
                                                <div class="subject-txt">감염병 환자 현황</div>
                                            </div>
                                            <div class="remove-box">
                                                <a href="javascript:void(0)">
                                                    <i class="fa-solid fa-circle-minus minus"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <div class="bottom-box text-end pt-4">

                                            <div class="cnt-box"><span class="text-black fw-bold" style="font-size: 34px;">3,796</span> <span class="text-black fw-bold" style="font-size: 20px;">명</span></div>
                                            <div class="rate-box">
                                                <span class="text-gray-600">전 주 대비</span>
                                                <span class="text-primary">13.4% ▲</span>
                                            </div>

                                        </div>

                                    </div>

                                    <div class="card-box">

                                        <div class="top-box">
                                            <div class="subject-box">
                                              <div class="label-txt bg-primary">최다</div>
                                              <div class="subject-txt">수용 지역</div>
                                            </div>
                                            <div class="remove-box">
                                                <a href="javascript:void(0)">
                                                    <i class="fa-solid fa-circle-minus minus"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <div class="bottom-box text-end pt-4">

                                            <div class="cnt-box"><span class="text-black fw-bold" style="font-size: 34px;">대구광역시</span></div>
                                            <div class="rate-box">
                                                <span class="text-gray-600">전 주 대비</span>
                                                <span class="text-primary">13.4% ▲</span>
                                            </div>

                                        </div>

                                    </div>

                                    <div class="card-box">

                                        <div class="top-box">
                                            <div class="subject-box">
                                                <div class="label-txt bg-primary">최다</div>
                                                <div class="subject-txt">수용 의료기관</div>
                                            </div>
                                            <div class="remove-box">
                                                <a href="javascript:void(0)">
                                                    <i class="fa-solid fa-circle-minus minus"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <div class="bottom-box text-end pt-4">

                                            <div class="cnt-box"><span class="text-black fw-bold" style="font-size: 34px;">칠곡경북대병원</span></div>
                                            <div class="rate-box">
                                                <span class="text-gray-600">전 주 대비</span>
                                                <span class="text-danger">7.4% ▲</span>
                                            </div>

                                        </div>

                                    </div>

                                    <div class="card-box">

                                        <div class="top-box">
                                            <div class="subject-box">
                                              <div class="label-txt bg-primary">월간</div>
                                              <div class="subject-txt">배정 Staff</div>
                                            </div>
                                            <div class="remove-box">
                                                <a href="javascript:void(0)">
                                                    <i class="fa-solid fa-circle-minus minus"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <div class="bottom-box text-end pt-4">

                                            <div class="cnt-box"><span class="text-black fw-bold" style="font-size: 34px;">선*경</span> <span class="text-black fw-bold" style="font-size: 20px;">452명</span></div>
                                            <div class="rate-box">
                                                <span class="text-gray-600">전 주 대비</span>
                                                <span class="text-primary">13.4% ▲</span>
                                            </div>

                                        </div>

                                    </div>

                                    <div class="card-box">

                                      <div class="top-box">
                                        <div class="subject-box">
                                          <div class="label-txt bg-primary">월간</div>
                                          <div class="subject-txt">배정요청 Staff</div>
                                        </div>
                                        <div class="remove-box">
                                          <a href="javascript:void(0)">
                                            <i class="fa-solid fa-circle-minus minus"></i>
                                          </a>
                                        </div>
                                      </div>

                                        <div class="bottom-box text-end pt-4">

                                            <div class="cnt-box"><span class="text-black fw-bold" style="font-size: 34px;">함*호</span> <span class="text-black fw-bold" style="font-size: 20px;">395명</span></div>
                                            <div class="rate-box">
                                                <span class="text-gray-600">전 주 대비</span>
                                                <span class="text-danger">5.4% ▼</span>
                                            </div>

                                        </div>

                                    </div>

                                    <a href="javascript:void(0);" class="card-box">

                                        <div class="card-add-btn-box">
                                            <img src="/img/common/ic_dashboard_add.svg" alt="이미지">
                                            <div class="text-primary fs-6 pt-4">추가하기</div>
                                        </div>

                                    </a>

                                </div>

                            </div>

                        </div>

                        <!--end::Card toolbar-->
                    </div>
                    <!--end::Card header-->
                    <!--begin::Card body-->
                    <div class="card-body p-8">
                        <!--begin::Table-->


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
  <!-- 현황카드 삭제 -->
    <article class="popup popup-card-remove" style="display: none;">
        <div class="popup-wrapper">
            <div class="popup-contents py-10 px-10" style="width: 300px;">
                <article class="modal-alert-layout pb-10">
                    <div class="alert-view-box pb-6">
                        <img src="/img/common/ic_alert.svg" alt="이미지">
                    </div>
                    <div class="alert-msg-box text-black">해당 현황카드 항목을<br/>
                        삭제 하시겠습니까?</div>
                    <div class="alert-sub-box text-gray-600 pt-3 text-center fs-12px">삭제 후 현황카드 관리 기능에서<br/> 추가 가능합니다.</div>
                </article>
                <article class="modal-menu-layout1">
                    <input type="hidden" name="cardIdx">
                    <div class="modal-menu-list">
                        <a href="javascript:confirmPopupClose()" class="modal-menu-btn menu-cancel" data-type=cancel>취소</a>
                        <a href="javascript:popupClose('card-remove'); cardRemoveProc()" class="modal-menu-btn menu-primary" data-type=success>확인</a>
                    </div>
                </article>
            </div>
        </div>
    </article>

  <!-- 현황카드 항목선택 -->
    <article class="popup popup-card-select" style="display:none;">
        <div class="popup-wrapper">
            <div class="popup-contents">

                <div class="popup-head-box py-5 px-10">

                    <div class="head-tit-box">현황카드 항목선택</div>

                    <div class="head-option-box">
                        <a href="javascript:popupClose('card-select')" class="popup-close-btn">
						<span class="svg-icon svg-icon-1">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"></rect>
									<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"></rect>
								</svg>
							</span>
                        </a>
                    </div>

                </div>

                <div class="popup-body-box py-5 px-10">

                    <div class="d-flex flex-column pb-6">

                        <div class="border border-bottom-1 border-top-0 border-left-0 border-right-0 border-gray-300 pb-3 all-check-box">
                            <div class="cbox">
                                <label>
                                    <input type="checkbox"><i></i>
                                    <span class="txt">전체 선택</span>
                                </label>
                            </div>
                        </div>

                        <div class="pt-1 check-list">

                            <div class="row mt-3">
                                <div class="cbox">
                                    <label>
                                        <input type="checkbox"><i></i>
                                        <span class="txt">코로나19 감염환자 현황</span>
                                    </label>
                                </div>
                            </div>

                            <div class="row mt-4">
                                <div class="cbox">
                                    <label>
                                        <input type="checkbox"><i></i>
                                        <span class="txt">병상요청 현황</span>
                                    </label>
                                </div>
                            </div>

                            <div class="row mt-4">
                                <div class="cbox">
                                    <label>
                                        <input type="checkbox"><i></i>
                                        <span class="txt">병상배정 현황</span>
                                    </label>
                                </div>
                            </div>

                            <div class="row mt-4">
                                <div class="cbox">
                                    <label>
                                        <input type="checkbox"><i></i>
                                        <span class="txt">이송/배차 현황</span>
                                    </label>
                                </div>
                            </div>

                            <div class="row mt-4">
                                <div class="cbox">
                                    <label>
                                        <input type="checkbox"><i></i>
                                        <span class="txt">입/퇴원처리 현황</span>
                                    </label>
                                </div>
                            </div>

                            <div class="row mt-4">
                                <div class="cbox">
                                    <label>
                                        <input type="checkbox"><i></i>
                                        <span class="txt">완료 처리 현황</span>
                                    </label>
                                </div>
                            </div>

                        </div>

                    </div>




                </div>


            </div>

        </div>
    </article>
</template>

<script setup>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-content > .card { background-image: url('@/assets/img/img-staff.webp');
  background-position: right 0 bottom 0;
  background-repeat: no-repeat;
}
.label-txt.bg-primary { margin-right: 9px;}
.rate-box > span:first-child { margin-right: 7px; }
</style>
