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
                            <li class="breadcrumb-item text-gray-500 mx-n1"><h1 class="page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-2 m-0">연락처/메세지</h1></li>
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
                <div class="card overflow-hidden">

                    <section class="cntc-dashboard h-100" style="">

                        <section class="cntc-message-board" style="border-right:1px solid #86898D">

                            <div class="board-head-box">

                                <div class="head-top-box">

                                    <article class="tabs-list-layout1">
                                        <div class="tabs-list">
                                            <a href="javascript:void(0)" class="tabs-btn">
                                                <span class="txt">연락처</span>
                                                <span class="cnt bg-primary">17</span>
                                            </a>

                                            <a href="javascript:void(0)" class="tabs-btn active">
                                                <span class="txt">메세지</span>
                                                <span class="cnt bg-primary">17</span>

                                            </a>
                                        </div>
                                    </article>

                                </div>

                            </div>


                            <div class="board-body-box">


                                <div class="chat-list-wrap">

                                    <a href="javascript:void(0)" class="item-box">

                                        <div class="item-info-box">
                                            <div class="profile-box">
                                                <img src="/img/common/img_profile_default.svg" alt="이미지">
                                            </div>

                                            <div class="info-box">
                                                <div class="subject-box fw-bold">우상욱 팀장 <span class="new bg-primary">N</span></div>
                                                <div class="con-box">사진을 보냈습니다.</div>
                                            </div>

                                        </div>

                                        <div class="item-option-box">
                                            <div class="time-box">2023년 3월 12일<br/>
                                                오후 3시 35분</div>
                                        </div>

                                    </a>

                                    <a href="javascript:void(0)" class="item-box">

                                        <div class="item-info-box">
                                            <div class="profile-box">
                                                <img src="/img/common/img_profile_default.svg" alt="이미지">
                                            </div>

                                            <div class="info-box">
                                                <div class="subject-box fw-bold">파티마병원 응급 <span class="new bg-primary">N</span></div>
                                                <div class="con-box">이수환(230204-3)님 재택승인 되셨습니다.</div>
                                            </div>

                                        </div>

                                        <div class="item-option-box">
                                            <div class="time-box">2023년 3월 12일<br/>
                                                오후 3시 35분</div>
                                        </div>

                                    </a>



                                </div>


                                <div class="list-menu-box d-flex justify-content-center pt-8" >
                                    <a href="#none" class="btn btn-flex bg-primary text-white rounded-pill" data-bs-toggle="modal" data-bs-target="#kt_modal_user_invite">사용자 초대</a>
                                </div>

                            </div>

                        </section>

                        <section class="cntc-msg-view">

                            <article class="chat-room-layout">

                                <div class="chat-message-group">

                                    <div class="message-head-box">
                                        <a href="javascript:void(0)" class="close-btn">
														<span class="svg-icon svg-icon-1">
														<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
															<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)"
                                    fill="currentColor"></rect>
															<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)"
                                    fill="currentColor"></rect>
														</svg>
													</span>
                                        </a>


                                    </div>

                                    <div class="message-body-box overflow-y-auto" style="max-height: 300px;">

                                        <div class="divide-box">
                                            <div class="date-box">2023.02.02 (목)</div>
                                        </div>

                                        <div class="message-box type-you">
                                            <div class="message-contents">

                                                <div class="profile-box">
                                                    <img src="/img/common/img_profile_default.svg" alt="이미지">
                                                </div>
                                                <div class="name-box">김현준 교수 (의료진/차병원)</div>
                                                <div class="msg-box">

                                                    <div class="msg-txt-box">https://www.e-gen.or.kr/egen/holiday_medical.do?searchType=general&lat=37.5100703&lon=126.8788276</div>

                                                    <div class="msg-date-box">오전 10:47</div>


                                                </div>


                                            </div>
                                            <div class="message-contents">

                                                <div class="profile-box">
                                                    <img src="/img/common/img_profile_default.svg" alt="이미지">
                                                </div>
                                                <div class="name-box">김현준 교수 (의료진/차병원)</div>
                                                <div class="msg-box">

                                                    <div class="msg-txt-box">https://www.e-gen.or.kr/egen/holiday_medical.do?searchType=general&lat=37.5100703&lon=126.8788276</div>

                                                    <div class="msg-date-box">오전 10:47</div>


                                                </div>


                                            </div>
                                        </div>

                                        <div class="message-box">
                                            <div class="message-contents">
                                                <div class="msg-box">
                                                    <div class="msg-date-box">오전 10:47</div>
                                                    <div class="msg-txt-box">https://www.e-gen.or.kr/egen/holiday_medical.do?searchType=general&lat=37.5100703&lon=126.8788276</div>
                                                </div>
                                            </div>

                                            <div class="message-contents">
                                                <div class="msg-box">
                                                    <div class="msg-date-box">오전 10:47</div>
                                                    <div class="msg-txt-box">
                                                        <article class="msg-file">
                                                            <a href="javascript:void(0)" class="img-file-box">
                                                                <div class="img-box">
                                                                    <img src="/img/common/img_file_img.svg" alt="이미지">
                                                                </div>
                                                                <div class="info-box">
                                                                    <div class="file-name-box">20230328_001234.jpg</div>
                                                                    <div class="file-size-box">2.3MB</div>
                                                                </div>

                                                            </a>
                                                        </article>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="message-contents">
                                                <div class="msg-box">
                                                    <div class="msg-date-box">오전 10:47</div>
                                                    <div class="msg-txt-box">
                                                        <article class="msg-file">
                                                            <a href="javascript:void(0)" class="video-file-box">
                                                                <div class="img-box">
                                                                    <img src="/img/common/img_file_video.svg" alt="이미지">
                                                                </div>
                                                                <div class="info-box">
                                                                    <div class="file-name-box">2023032823.mp4</div>
                                                                    <div class="file-size-box">2.3MB</div>
                                                                </div>

                                                            </a>
                                                        </article>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="message-contents">
                                                <div class="msg-box">
                                                    <div class="msg-date-box">오전 10:47</div>
                                                    <div class="msg-txt-box">
                                                        <article class="msg-file">
                                                            <div class="upload-file-box">
                                                                <div class="img-box">
                                                                    <img src="/img/common/img_file_upload_loading.svg" alt="이미지">
                                                                </div>
                                                                <div class="txt-box text-primary">업로드 중 입니다. (gif파일 요청)</div>

                                                            </div>
                                                        </article>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="message-box type-you">
                                            <div class="message-contents">

                                                <div class="profile-box">
                                                    <img src="/img/common/img_profile_default.svg" alt="이미지">
                                                </div>
                                                <div class="name-box">김현준 교수 (의료진/차병원)</div>
                                                <div class="msg-box">

                                                    <div class="msg-txt-box">https://www.e-gen.or.kr/egen/holiday_medical.do?searchType=general&lat=37.5100703&lon=126.8788276</div>

                                                    <div class="msg-date-box">오전 10:47</div>


                                                </div>


                                            </div>
                                            <div class="message-contents">

                                                <div class="profile-box">
                                                    <img src="/img/common/img_profile_default.svg" alt="이미지">
                                                </div>
                                                <div class="name-box">김현준 교수 (의료진/차병원)</div>
                                                <div class="msg-box">

                                                    <div class="msg-txt-box">https://www.e-gen.or.kr/egen/holiday_medical.do?searchType=general&lat=37.5100703&lon=126.8788276</div>

                                                    <div class="msg-date-box">오전 10:47</div>


                                                </div>


                                            </div>
                                        </div>



                                    </div>

                                </div>


                                <div class="chat-send-group">


                                    <div class="send-input-box">
                                        <textarea></textarea>
                                    </div>

                                    <div class="send-option-box">


                                        <div class="option-box">
                                            <div class="upload-btn-box">
                                                <label>
                                                    <input type="file">
                                                    <img src="/img/common/ic_chat_img_upload.svg">
                                                </label>
                                            </div>
                                        </div>
                                        <div class="option-box">

                                            <a href="#none" class="btn btn-flex bg-primary text-white" data-bs-toggle="modal" data-bs-target="#kt_modal_user_invite">전송</a>
                                        </div>


                                    </div>



                                </div>




                            </article>



                        </section>



                    </section>



                </div>
            </div>
            <!--end::Content-->
        </div>
        <!--end::Content wrapper-->
    </div>
  <!--end:::Main-->
  <!--begin::Modals-->

  <!--begin::Modal - 내정보 수정 -->
    <div class="modal fade" id="kt_modal_user_invite" tabindex="-1" aria-hidden="true" >
        <!--begin::Modal dialog-->
        <div class="modal-dialog mw-550px modal-dialog-centered">
            <!--begin::Modal content-->
            <div class="modal-content">
                <!--begin::Modal header-->
                <div class="modal-header px-10 py-5 d-flex justify-content-between">
                    <!--begin::Modal title-->
                    <h2>사용자 초대</h2>
                    <!--end::Modal title-->
                    <!--begin::Close-->
                    <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
                        <span class="svg-icon svg-icon-1">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"></rect>
									<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"></rect>
								</svg>
							</span>
                        <!--end::Svg Icon-->
                    </div>
                    <!--end::Close-->
                </div>

                <!--begin::Modal header-->
                <!--begin::Modal body-->
                <div class="modal-body scroll-y py-10 px-10">


                    <article class="table-form-layout1">

                        <div class="form-head-box">

                        </div>


                        <div class="form-body-box">

                            <div class="table-box">
                                <table>
                                    <colgroup>
                                        <col style="width: 168px;">
                                        <col style="width: auto;">
                                    </colgroup>
                                    <tr>
                                        <th>이름  <span class="text-primary">*</span></th>
                                        <td>
                                            <div class="item-row-box">
                                                <div class="item-cell-box full">
                                                    <div class="tbox full">
                                                        <input type="text" placeholder="휴대폰번호 입력">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="item-row-box mt-3">
                                                <div class="item-note-box">* 이름은 필수 입력입니다</div>
                                            </div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <th>휴대폰번호  <span class="text-primary">*</span></th>
                                        <td>
                                            <div class="item-row-box">
                                                <div class="item-cell-box full">
                                                    <div class="tbox full">
                                                        <input type="text" placeholder="휴대폰번호를 입력해주세요.">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="item-row-box mt-3">
                                                <div class="item-note-box">* 숫자만 입력 해주세요</div>
                                            </div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <th>내 조직으로 초대 <span class="text-primary">*</span></th>
                                        <td>
                                            <div class="item-row-box">
                                                <div class="item-cell-box full">

                                                    <div class="rbox">
                                                        <label>
                                                            <input type="radio" name="invite" checked><i></i>
                                                            <span class="txt text-black">내 조직</span>
                                                        </label>
                                                    </div>
                                                    <div class="rbox ms-4">
                                                        <label>
                                                            <input type="radio" name="invite"><i></i>
                                                            <span class="txt text-black">내 조직</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="item-row-box mt-3">
                                                <div class="item-note-box">* 숫자만 입력 해주세요</div>
                                            </div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <th>내 조직으로 초대 <span class="text-primary">*</span></th>
                                        <td>
                                            <div class="item-row-box">
                                                <div class="item-cell-box">
                                                    <div class="rbox">
                                                        <label>
                                                            <input type="radio" name="role" checked><i></i>
                                                            <span class="txt text-black">일반</span>
                                                        </label>
                                                    </div>

                                                    <div class="item-alarm-box ms-6">일반 업무처리 및 사용자 초대 권한</div>
                                                </div>

                                            </div>

                                            <div class="item-row-box mt-2">
                                                <div class="item-cell-box">
                                                    <div class="rbox">
                                                        <label>
                                                            <input type="radio" name="role" checked><i></i>
                                                            <span class="txt text-black">게스트</span>
                                                        </label>
                                                    </div>

                                                    <div class="item-alarm-box ms-6">업무조회만 가능</div>
                                                </div>


                                            </div>


                                        </td>
                                    </tr>

                                </table>
                            </div>

                        </div>

                        <div class="table-foot-box mt-10">

                            <article class="modal-menu-layout1">

                                <div class="modal-menu-list">
                                    <a href="javascript:void(0)" class="modal-menu-btn menu-primary">초대전송</a>
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
  <!--end::Modal - 내정보 수정 -->

  <!--end::Modals-->
</template>

<script>

export default {
    components: {

    },
    name: 'DetlAncmt',
    props: {
        msg: String
    },
    mounted() {
    },
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>