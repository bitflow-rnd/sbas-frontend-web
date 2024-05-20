<template>
  <!--begin::Modal - 내정보 수정 -->
  <div
    class="modal fade"
    id="kt_modal_user_profile_modify"
    tabindex="-1"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-750px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>내 정보</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
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
          <article class="modal-profile-layout1">
            <div class="profile-card-box">
              <div class="profile-edit-box">
                <img src="/img/common/img_profile_dummy.png" alt="이미지" />

                <div class="upload-box">
                  <label>
                    <input type="file" />
                    <img src="/img/common/ic_profile_upload.svg" alt="이미지" />
                  </label>
                </div>

                <a href="javascript:profileImgRemove()" class="remove-btn"
                ><img src="/img/common/ic_profile_remove.svg" alt="이미지"
                /></a>
              </div>
              <div class="profile-info-box">
                <div class="row">
                  <div class="subject-box">아이디</div>
                  <div class="con-box">{{ userInfo.updtUserId }}</div>
                </div>

                <div class="row">
                  <div class="subject-box">이름</div>
                  <div class="con-box">{{ userInfo.userNm }}</div>
                </div>

                <div class="row">
                  <div class="subject-box">휴대폰번호</div>
                  <div class="con-box">{{ getTelno(userInfo.telno) }}</div>
                </div>
              </div>

              <div class="profile-note-box text-danger">* 승인 필요 항목</div>
            </div>

            <div class="profile-table-box pt-8">
              <article class="table-form-layout1">
                <div class="form-head-box"></div>

                <div class="form-body-box">
                  <div class="table-box">
                    <table>
                      <colgroup>
                        <col style="width: 168px" />
                        <col style="width: auto" />
                      </colgroup>
                      <tr>
                        <th>주 담당지역 <span class="text-primary">*</span></th>
                        <td>
                          <div class="item-cell-box">
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
                        </td>
                      </tr>

                      <tr>
                        <th>소속기관 유형 <span class="text-primary">*</span></th>
                        <td>
                          <div class="item-cell-box">
                            <div class="rbox">
                              <label>
                                <input type="radio" name="belong" /><i></i>
                                <span class="txt">보건소</span>
                              </label>
                            </div>

                            <div class="rbox ms-4">
                              <label>
                                <input type="radio" name="belong" /><i></i>
                                <span class="txt">병상배정반</span>
                              </label>
                            </div>

                            <div class="rbox ms-4">
                              <label>
                                <input type="radio" name="belong" /><i></i>
                                <span class="txt">의료진</span>
                              </label>
                            </div>

                            <div class="rbox ms-4">
                              <label>
                                <input type="radio" name="belong" /><i></i>
                                <span class="txt">구급대</span>
                              </label>
                            </div>

                            <div class="rbox ms-4">
                              <label>
                                <input type="radio" name="belong" /><i></i>
                                <span class="txt">전산담당</span>
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>소속기관 <span class="text-primary">*</span></th>
                        <td>
                          <div class="item-cell-box">
                            <div class="sbox w-175px">
                              <select>
                                <option>중구 보건소</option>
                              </select>
                            </div>

                            <div class="tbox w-175px ms-2">
                              <input type="text" readonly placeholder="기관명 입력" />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>권한그룹 <span class="text-primary">*</span></th>
                        <td>
                          <div class="item-cell-box">
                            <div class="cbox">
                              <label>
                                <input type="checkbox" name="permission" /><i></i>
                                <span class="txt">병상요청</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="permission" /><i></i>
                                <span class="txt">병상승인</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="permission" /><i></i>
                                <span class="txt">병상배정</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="permission" /><i></i>
                                <span class="txt">시스템관리</span>
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>세부권한 <span class="text-primary">*</span></th>
                        <td>
                          <div class="item-cell-box">
                            <div class="rbox">
                              <label>
                                <input type="radio" name="role" /><i></i>
                                <span class="txt">일반</span>
                              </label>
                            </div>

                            <div class="rbox ms-4">
                              <label>
                                <input type="radio" name="role" /><i></i>
                                <span class="txt">게스트</span>
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>직급</th>
                        <td>
                          <div class="tbox w-175px">
                            <input type="text" />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>담당환자 유형</th>
                        <td>
                          <article class="check-list-layout1">
                            <div class="list-box">
                              <div
                                class="item-box d-inline-flex flex-center justify-content-center"
                              >
                                <label>
                                  <input type="checkbox" />
                                  <span class="txt">#투석</span>
                                </label>
                              </div>
                              <div class="item-box">
                                <label>
                                  <input type="checkbox" />
                                  <span class="txt">#임산부</span>
                                </label>
                              </div>
                              <div class="item-box">
                                <label>
                                  <input type="checkbox" />
                                  <span class="txt">#신생아</span>
                                </label>
                              </div>
                              <div class="item-box">
                                <label>
                                  <input type="checkbox" />
                                  <span class="txt">#응급</span>
                                </label>
                              </div>
                            </div>
                          </article>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>

                <div class="table-foot-box mt-10">
                  <article class="modal-menu-layout1">
                    <div class="modal-menu-list">
                      <a href="#none" class="modal-menu-btn menu-cancel" data-bs-dismiss="modal"
                      >취소</a
                      >
                      <a href="#none" class="modal-menu-btn menu-primary ms-4">수정완료</a>
                    </div>
                  </article>
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
</template>
