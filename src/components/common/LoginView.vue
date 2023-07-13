<template>
    <div class="container" style="padding:0; max-width:100%;">

        <section class="login">


            <div class="login-wrap">

                <div class="login-bg">
                    <img src="/img/common/img_login_bg_item.png" alt="이미지">
                </div>

                <div class="login-contents">

                    <div class="con-head-box">
                        <div class="main-box">로그인</div>
                        <div class="sub-box">감염병 스마트 병상배정 시스템</div>
                    </div>

                    <div class="con-body-box">

                        <form
                            @submit.prevent="onSubmit"
                             class="input-form-box">

                            <div class="row-list">
                                <div class="row">
                                    <div class="input-box">
                                        <input
                                            name="id"
                                            v-model="id"
                                            type="text"
                                            maxlength="20"
                                            placeholder="아이디"
                                            @input="validateInput(0)"
                                        />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="input-box">
                                        <input
                                            name="pw"
                                            v-model="pw"
                                            type="password"
                                            maxlength="32"
                                            placeholder="비밀번호"
                                        />
                                    </div>
                                </div>

                            </div>


                            <div class="login-btn-box">
                                <button
                                    type="submit" class="login-btn">로그인</button>
                            </div>

                        </form>

                        <div class="login-option-box">

<!--                            <vue-recaptcha ref="recaptcha" @verify="onRecaptchaVerified" sitekey="" class="captcha-box"></vue-recaptcha>-->

                            <div class="option-list">
                            <!--                 모달인지 새 페이지인지 확인 필요               -->
                                <a @click="openFindId" class="option-btn">아이디찾기</a> / <a @click="openInitPw" class="option-btn">비밀번호 초기화</a>
                            </div>

                        </div>

                        <div class="login-note-box">

                            <div class="note-wrap">
                                <div class="row">감염병 스마트 병상배정 시스템입니다.</div>
                                <div class="row">불법 사용시 법적 제재를 받을 수 있습니다.</div>
                                <div class="row">접속문의 : master@lemonhealth.com / 1577-1577</div>
                            </div>

                        </div>

                        <div class="login-request-box">

                            <router-link to="" @click="toggleUserEditModal" class="request-btn">
                                <span class="txt">사용자 등록 요청</span>
                                <i class="ic ic-link"></i>
                            </router-link>

                        </div>
                    </div>

                </div>




            </div>

            <div class="login-bottom"></div>

        </section>



    </div>

  <!--begin::Modals-->
  <!--begin::Modal - 내정보-->
    <div v-show="userEditModal" class="modal fade " id="kt_modal_edit_user" tabindex="-1" aria-hidden="true" style=";">
        <!--begin::Modal dialog-->
        <div class="modal-dialog mw-1500px modal-dialog-centered">
            <!--begin::Modal content-->
            <div class="modal-content">
                <!--begin::Modal header-->
                <div class="modal-header px-10 py-5 d-flex justify-content-between">
                    <!--begin::Modal title-->
                    <h2>사용자 정보 등록</h2>
                    <!--end::Modal title-->
                    <!--begin::Close-->
                    <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
                        <span @click="toggleUserEditModal" class="svg-icon svg-icon-1">
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
                <form @submit.prevent="onEnter" class="modal-body scroll-y py-10 px-10">

                    <article class="table-form-layout1">
                        <div class="form-head-box">

                            <div class="head-box">
                                <div class="head-txt-box fs-16px fw-bold pb-5">사용자 기본 정보</div>
                            </div>

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
                                        <th>아이디 <span class="text-primary">*</span></th>
                                        <td class="vertical-top">
                                            <div class="item-cell-box full">
                                                <div class="tbox full">
                                                    <input type="text" v-model="id" >
                                                </div>
                                            </div>
                                            <div v-if="validateInput(3)" class="item-cell-box full">
                                                <div class="text-danger pt-2 fs-12px">※ 아이디 유효성 확인 문구</div>
                                            </div>
                                        </td>
                                        <th>비밀번호 <span class="text-primary">*</span></th>
                                        <td class="vertical-top">
                                            <div class="item-cell-box full">
                                                <div class="tbox full">
                                                    <input type="password" v-model="pw">
                                                </div>
                                            </div>
                                            <div v-if="validateInput(4)" class="item-cell-box full">
                                                <div class="text-danger pt-2 fs-12px">※ 비밀번호 유효성 확인 문구</div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>휴대폰번호 <span class="text-primary">*</span></th>
                                        <td class="vertical-top">
                                            <div class="item-cell-box full">
                                                <router-link to="" @click="openCertify" class="btn btn-flex w-100 btn-sm btn-secondary fs-7 justify-content-center"> 본인인증</router-link>
                                            </div>
                                        </td>
                                        <th>비밀번호 확인 <span class="text-primary">*</span></th>
                                        <td class="vertical-top">
                                            <div class="item-cell-box full">
                                                <div class="tbox full">
                                                    <input type="password" v-model="valPw">
                                                </div>
                                            </div>
                                            <div v-if="validateInput(5)" class="item-cell-box full">
                                                <div class="text-danger pt-2 fs-12px">※ 비밀번호와 비밀번호 확인 일치 확인 문구</div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>이름 <span class="text-primary">*</span></th>
                                        <td class="vertical-top">
                                            <div class="item-cell-box full">
                                                <div class="tbox full">
                                                    <input type="text" v-model="userNm">
                                                </div>
                                            </div>
                                            <div v-if="validateInput(6)" class="item-cell-box full">
                                                <div class="text-danger pt-2 fs-12px">※ 이름 유효성 확인 문구</div>
                                            </div>
                                        </td>
                                        <th>생년월일 <span class="text-primary">*</span></th>
                                        <td class="vertical-top">
                                            <div class="item-cell-box full">
                                                <div class="tbox full">
                                                    <input type="text" v-model="btDt">
                                                </div>
                                            </div>
                                            <div v-if="validateInput(7)" class="item-cell-box full">
                                                <div class="text-danger pt-2 fs-12px">※ 생년월일 유효성 확인 문구</div>
                                            </div>
                                        </td>
                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </article>

                    <article class="table-form-layout1 mt-10">
                        <div class="form-head-box">

                            <div class="head-box">
                                <div class="head-txt-box fs-16px fw-bold pb-5">업무 역할</div>
                            </div>

                        </div>
                        <div class="form-body-box">

                            <div class="table-box">
                                <table>
                                    <colgroup>
                                        <col style="width: 168px;">
                                        <col style="width: auto;">
                                    </colgroup>
                                    <tbody>
                                    <tr>
                                        <th>소속기관 유형 <span class="text-primary">*</span></th>
                                        <td>
                                            <div class="item-cell-box full">
                                                <div class="rbox">
                                                    <label>
                                                        <input type="radio" name="public" value="3" v-model="instTypeCd" checked>
                                                        <i></i><span class="txt">보건소</span>
                                                    </label>
                                                </div>

                                                <div class="rbox ms-4">
                                                    <label>
                                                        <input type="radio" name="public" value="1" v-model="instTypeCd">
                                                        <i></i><span class="txt">병상배정반</span>
                                                    </label>
                                                </div>

                                                <div class="rbox ms-4">
                                                    <label>
                                                        <input type="radio" name="public" value="4" v-model="instTypeCd">
                                                        <i></i><span class="txt">의료진</span>
                                                    </label>
                                                </div>

                                                <div class="rbox ms-4">
                                                    <label>
                                                        <input type="radio" name="public" value="2" v-model="instTypeCd">
                                                        <i></i><span class="txt">구급대</span>
                                                    </label>
                                                </div>

                                                <div class="rbox ms-4">
                                                    <label>
                                                        <input type="radio" name="public" value="5" v-model="instTypeCd">
                                                        <i></i><span class="txt">전산담당</span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div v-if="validateInput(8)" class="item-cell-box full">
                                                <div class="text-danger pt-2 fs-12px">※ 소속기관 선택여부 확인 문구</div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>권한 그룹 선택 <span class="text-primary">*</span></th>
                                        <td>
                                            <div class="item-cell-box full">

                                                <article class="permission-selector-layout">

                                                    <label class="selector-box">
                                                        <input type="radio" name="t1" value="1" v-model="authCd">
                                                        <div class="selector-wrap">
                                                            <div class="img-box">
                                                                <img src="/img/common/img_permission_item1.svg" alt="이미지" class="on">
                                                                <img src="/img/common/img_permission_item1_off.svg" alt="이미지" class="off">
                                                            </div>
                                                            <div class="info-box">
                                                                <div class="main-box">병상요청그룹</div>
                                                                <div class="sub-box">보건소, 병상배정반, 의료진</div>

                                                            </div>
                                                        </div>
                                                    </label>

                                                    <label class="selector-box">
                                                        <input type="radio" name="t1" value="2" v-model="authCd">
                                                        <div class="selector-wrap">
                                                            <div class="img-box">
                                                                <img src="/img/common/img_permission_item2.svg" alt="이미지" class="on">
                                                                <img src="/img/common/img_permission_item2_off.svg" alt="이미지" class="off">
                                                            </div>
                                                            <div class="info-box">
                                                                <div class="main-box">병상승인그룹</div>
                                                                <div class="sub-box">병상배정반</div>

                                                            </div>
                                                        </div>
                                                    </label>

                                                    <label class="selector-box">
                                                        <input type="radio" name="t1" value="3" v-model="authCd">
                                                        <div class="selector-wrap">
                                                            <div class="img-box">
                                                                <img src="/img/common/img_permission_item3.svg" alt="이미지" class="on">
                                                                <img src="/img/common/img_permission_item3_off.svg" alt="이미지" class="off">
                                                            </div>
                                                            <div class="info-box">
                                                                <div class="main-box">병상배정그룹</div>
                                                                <div class="sub-box">의료진</div>

                                                            </div>
                                                        </div>
                                                    </label>

                                                    <label class="selector-box">
                                                        <input type="radio" name="t1" value="4" v-model="authCd">
                                                        <div class="selector-wrap">
                                                            <div class="img-box">
                                                                <img src="/img/common/img_permission_item4.svg" alt="이미지" class="on">
                                                                <img src="/img/common/img_permission_item4_off.svg" alt="이미지" class="off">
                                                            </div>
                                                            <div class="info-box">
                                                                <div class="main-box">시스템 관리자</div>
                                                                <div class="sub-box">전산운영</div>

                                                            </div>
                                                        </div>
                                                    </label>


                                                </article>

                                            </div>
                                            <div v-if="validateInput(9)" class="item-cell-box full">
                                                <div class="text-danger pt-2 fs-12px">※ 권한그룹 선택여부 확인 문구</div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>세부 권한 선택 <span class="text-primary">*</span></th>
                                        <td>
                                            <div class="item-cell-box full">
                                                <div class="rbox">
                                                    <label>
                                                        <input type="radio" name="permission" checked>
                                                        <i></i><span class="txt text-black">일반 <span class="fw-normal text-gray-600 ps-2">일반 업무처리 및 사용자 초대 권한</span></span>
                                                    </label>
                                                </div>

                                                <div class="rbox ms-4">
                                                    <label>
                                                        <input type="radio" name="permission">
                                                        <i></i><span class="txt text-black">게스트 <span
                                                            class="fw-normal text-gray-600 ps-2">업무조회만 가능</span></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div v-if="validateInput(10)" class="item-cell-box full">
                                                <div class="text-danger pt-2 fs-12px">※ 세부권한 선택여부 확인 문구</div>
                                            </div>
                                        </td>

                                    </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </article>

                    <article class="table-form-layout1 mt-10">
                        <div class="form-head-box">

                            <div class="head-box">
                                <div class="head-txt-box fs-16px fw-bold pb-5">소속기관</div>
                            </div>

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
                                        <th>담당/근무지역 <span class="text-primary">*</span></th>
                                        <td colspan="3" class="vertical-top">
                                            <div class="item-cell-box full">
                                                <div class="sbox w-175px">
                                                    <select>
                                                        <option>대구광역시</option>
                                                        <option>서울특별시</option>
                                                    </select>
                                                </div>

                                                <div class="sbox w-175px ms-2">
                                                    <select>
                                                        <option>전체</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div v-if="validateInput(11)" class="item-cell-box full">
                                                <div class="text-danger pt-2 fs-12px">※ 주 담당지역 선택여부 확인 문구</div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>소속기관 <span class="text-primary">*</span></th>
                                        <td class="vertical-top">
                                            <div class="item-cell-box full">
                                                <div class="sbox w-175px">
                                                    <select>
                                                        <option>소속기관 선택</option>
                                                        <option>국립암센터</option>
                                                    </select>
                                                </div>
                                                <div class="tbox full ms-2">
                                                    <input type="text" value="소속기관명 직접 입력" readonly>
                                                </div>
                                            </div>
                                            <div v-if="validateInput(12)" class="item-cell-box full">
                                                <div class="text-danger pt-2 fs-12px">※ 비밀번호와 비밀번호 확인 일치 확인 문구</div>
                                            </div>

                                        </td>
                                        <th>직급 <span class="text-primary">*</span></th>
                                        <td class="vertical-top">
                                            <div class="item-cell-box full">
                                                <div class="tbox full">
                                                    <input type="text" value="" placeholder="직급, 직무 또는 직위 입력">
                                                </div>
                                            </div>
                                            <div v-if="validateInput(13)" class="item-cell-box full">
                                                <div class="text-danger pt-2 fs-12px">※ 직급 입력 여부 확인 문구</div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>담당환자 유형 <span class="text-primary">*</span></th>
                                        <td colspan="3">
                                            <div class="item-cell-box">

                                                <div class="cbox">
                                                    <label>
                                                        <input type="checkbox" name="state"><i></i>
                                                        <span class="txt">해당없음</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="state"><i></i>
                                                        <span class="txt">투석</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="state"><i></i>
                                                        <span class="txt">임산부</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="state"><i></i>
                                                        <span class="txt">신생아</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="state"><i></i>
                                                        <span class="txt">소아</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="state"><i></i>
                                                        <span class="txt">응급</span>
                                                    </label>
                                                </div>

                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>소속 증명 정보</th>
                                        <td class="vertical-top" colspan="3">
                                            <div class="item-cell-box full">
                                                <article class="img-upload-layout">

                                                    <div class="upload-box">

                                                        <label>
                                                            <input type="file" @change="onFileChange">
                                                            <span class="upload-btn-box">
															<img src="/img/common/img_upload_img.svg" alt="이미지">
															<span @click="uploadImg" class="txt">클릭하여 업로드</span>
														</span>
                                                        </label>

                                                    </div>

                                                    <div class="result-list">
                                                        <div class="result-box">
                                                            <img :src="imgUrl" alt="이미지">

                                                            <router-link to="" class="remove-btn" @click="imgRemove"><img
                                                                src="/img/common/ic_profile_remove.svg" alt="이미지"></router-link>

                                                        </div>

                                                    </div>


                                                </article>

                                            </div>
                                            <div class="item-cell-box full">
                                                <div class="text-danger pt-2 fs-12px">※ 빠른 승인처리를 위해 해당 기관 소속임을 증명할 수 있는 명함, 또는 신분증 사진을 업로드 해주세요.
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
                            <button to="" type="submit" class="modal-menu-btn menu-primary">등록 요청 완료</button>
                        </div>


                    </article>
                </form>
                <!--end::Modal body-->
            </div>
            <!--end::Modal content-->
        </div>
        <!--end::Modal dialog-->
    </div>
  <!--end::Modal - 내정보-->

    <article v-show="showCertify" class="popup popup-certify" style="">
        <div class="popup-wrapper">
            <div class="popup-contents">

                <div class="popup-head-box py-5 px-10">

                    <div class="head-tit-box">환자정보 존재</div>

                    <div class="head-option-box">
                        <router-link to="" @click="openCertify" class="popup-close-btn">
						<span class="svg-icon svg-icon-1">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)"
                        fill="currentColor"></rect>
									<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)"
                        fill="currentColor"></rect>
								</svg>
							</span>
                        </router-link>
                    </div>

                </div>


                <div class="popup-body-box py-5 px-10">

                    <article class="modal-head-layout1">

                        <div class="modal-head-box pb-12">
                            <div class="head-box">휴대폰번호 변경</div>
                            <div class="sub-box">변경하실 휴대폰번호로 인증을 진행해 주세요.</div>

                        </div>

                    </article>

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
                                    <tbody>

                                    <tr>
                                        <th>휴대폰번호  <span class="text-primary">*</span></th>
                                        <td>
                                            <div class="item-row-box">
                                                <div class="item-cell-box">
                                                    010-****-1234
                                                    <router-link to="" @click="phoneCertify" class="btn btn-sm btn-primary h-30px ms-3 certify-btn" style="min-width: 103px;">인증번호 발송</router-link>

                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr class="certify-row" style="display: none;">
                                        <th>인증번호  <span class="text-primary">*</span></th>
                                        <td>
                                            <div class="item-row-box">
                                                <div class="item-cell-box">
                                                    <div class="tbox full">
                                                        <input type="text" v-model.trim="crtfNo" placeholder="인증번호 6자리">
                                                    </div>

                                                    <div class="timer-box ms-3 text-danger" style="min-width: 103px">유효시간: <span class="timer">03:00</span></div>

                                                </div>
                                            </div>
                                        </td>
                                    </tr>


                                    </tbody></table>
                            </div>

                        </div>


                    </article>



                </div>

                <div class="popup-foot-box py-5 px-10">
                    <article class="modal-menu-layout1">

                        <div class="modal-menu-list">
                            <router-link to="" @click="certifyNo(crtfNo)" class="modal-menu-btn menu-primary">확인</router-link>
                        </div>
                    </article>
                </div>

            </div>

        </div>
    </article>
    <article v-show="isAlert" class="popup popup-alert">
        <div class="popup-wrapper">
            <div class="popup-contents py-10 px-10" style="width: 300px;">
                <article class="modal-alert-layout pb-10">
                    <div class="alert-view-box pb-6">
                        <img src="/img/common/ic_alert.svg" alt="이미지">
                    </div>
                    <div class="alert-msg-box">{{this.errMsg}}</div>
                </article>
                <article class="modal-menu-layout1">
                    <div class="modal-menu-list">
                        <router-link to="" @click="alertClose" class="modal-menu-btn menu-primary">확인</router-link>
                    </div>
                </article>
            </div>
        </div>
    </article>


  <!--end::Modals-->
</template>

<script>
import {mapState} from "vuex";
//import {Form} from "vee-validate";
import * as yup from "yup";
import {ref} from "vue";
//import router from "@/router/router";

//import {API_PROD} from "@/util/constantURL";
//import axios from "axios";


export default {
    name: "LoginView",
    components:{

    },
    computed:{
      ...mapState(['smsCrtfSuccess'])
    },
    props: {},
    data(){
        const schema = yup.object({
            id: yup
                .string()
                .required("유효성검사"),
            pw: yup
                .string()
                .required("유효성검사"),
        })
        return {
            schema,
            id:'',
            pw:'',
            crtfNo:'',
            /*todo 본인확인코드 선언하고 3step - 기존/발송버튼누른후/Y로 나누기*/
            selectedFile:true,
            imgUrl:null,
        }
    },
    setup(){

      const userEditModal = ref(false);
      const showCertify = ref(false);
      const isAlert = ref(false);
      const errMsg = '';
      let timer = null;
      const toggleUserEditModal = function(){
          //console.log(userEditModal)
          userEditModal.value = !userEditModal.value
          //document.getElementById("kt_modal_edit_user").modal('show');
      }
      const openCertify = function (){
          showCertify.value = !showCertify.value
      }
      const alertOpen = function (msg){
          this.errMsg = msg
          this.isAlert = true;
      }
      const alertClose = function(){
            console.log("실행")
            isAlert.value= !isAlert.value
      }
        const timerStart = () => {
            let time = 179; // 기준시간 작성
            let min = ''; // 분
            let sec = ''; // 초

            if(timer){
                clearInterval(timer);
            }

             timer = setInterval(() => {
                min = parseInt(time / 60); // 몫을 계산
                sec = time % 60; // 나머지를 계산

                if (min.toString().length === 1) {
                    min = '0' + min.toString();
                }

                if (sec.toString().length === 1) {
                    sec = '0' + sec.toString();
                }

                document.querySelector('.timer').textContent = min + ':' + sec;

                time--;

                if (time < 0) {
                    clearInterval(timer); // setInterval() 실행을 끝냄
                }
            }, 1000);
        }
      return{
          userEditModal,
          showCertify,
          isAlert,
          errMsg,
          toggleUserEditModal,
          alertOpen,
          alertClose,
          openCertify,
          timerStart
      }

    },
    methods: {
        validateInput(idx){
          if(idx===0){
              this.id = this.id.replace(/[^a-z0-9]/g, '');
          }
          return false
        },
        onRecaptchaVerified(response){
            console.log('reCAPTCHA verified:', response);
        },
        onSubmit(){
            //let newData ={}
            //const recaptchaToken = this.$refs.recaptcha.getResponse();
            const recaptchaToken = true;
            if(recaptchaToken){
                if(this.id===''){
                    this.alertOpen("아이디를 입력해 주세요.")
                } else if(this.pw===''){
                    this.alertOpen("비밀번호를 입력해 주세요.")
                } else{
                    const values = {
                        id: this.id,
                        pw: this.pw
                    }
                    console.log('제출' + values)
                    this.$store.dispatch("user/login",values)
                }

            } else{
                console.log('reCAPTCHA 안함');
            }
        },
        onFileChange(event) {
            console.log('이벤트')
            this.selectedFile = event.target.files[0];

            if(this.selectedFile){
                this.uploadImg();
            }
            console.log(localStorage.getItem('imgData'))
        },
        uploadImg(){
            console.log('이미지')
          if(this.selectedFile){
              const reader = new FileReader();
              const blob = new Blob([this.selectedFile]);
              reader.onload = (event) => {

                  this.$store.commit('setAttcId',event.target.result);
                  this.imgUrl = event.target.result;
              }
              reader.readAsDataURL(blob);

              //console.log(localStorage.getItem('imgData'))
          }
        },
        imgRemove(){
          this.$store.commit('setAttcId',null);
          this.imgUrl='';
        },
        onEnter(value){
            console.log('가입')
            const value2 = value
            this.$store.dispatch("user/signup",value2)
        },
        openFindId(){
            console.log('아이디 찾기')
        },
        openInitPw(){
            console.log('비번 찾기')
        },
        phoneCertify(){
            const certifyRows = document.querySelectorAll('.certify-row');
            const certifyBtns = document.querySelectorAll('.certify-btn');

            certifyRows.forEach((row) => {
                row.style.display = 'table-row';
            });

            certifyBtns.forEach((btn) => {
                btn.textContent = '재발송';
            });
            const num="01082072505"
            this.$store.dispatch("user/sendSms",num);
            this.timerStart();
        },
        certifyNo(num){
            console.log(num);
            if(num ===''){
                this.alertOpen('인증번호를 입력해 주세요.')
            }
            else if(num.length!==6){
                this.alertOpen('인증번호를 6자리로\n'+ '입력해 주세요.');
            }
            else{
                this.$store.dispatch('user/confirmSms',num)
                    .then((result)=>{
                        console.log(this.$store.state.smsCrtfSuccess)
                        if(result) {
                            this.openCertify();
                            this.crtfNo='';
                            /* todo 본인확인Flag Y로저장 */
                        } else{
                            this.alertOpen('인증번호가 일치하지 않습니다.\n'+'다시 입력해 주세요.');
                        }
                    })
            }

        },
    },
    mounted() {
        this.emitter.on('toggleUserEditModal',this.toggleUserEditModal)

        const storedImg = localStorage.getItem('imgData');
        if(storedImg) {
            this.imgUrl = storedImg;
        }
    }
}
</script>

<style scoped>
.login-wrapper {
  background-image: url('/public/img/bg/bg-login.png');
  background-size: contain;
  background-position-y: bottom;
  background-repeat: no-repeat;
  height: 100%;
}
/*
[data-bs-theme="dark"] body {
  background-image: url('/public/img/bg/bg-login.svg');
}
 */
.fade{
    opacity: 100;
}
.modal, .popup{
    display: inline-block;
    --bs-modal-width: 1000px;
}
.modal-dialog{
    margin-top: 50px;
    margin-bottom: 50px;
}
</style>