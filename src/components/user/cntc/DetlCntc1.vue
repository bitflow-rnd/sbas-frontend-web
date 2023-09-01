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
              <li class="breadcrumb-item text-gray-500 mx-n1"><h1
                  class="page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-2 m-0">
                연락처/메시지</h1></li>
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

          <section class="cntc-dashboard">

            <section class="cntc-message-board">

              <div class="board-head-box">

                <div class="head-top-box">

                  <article class="tabs-list-layout1">
                    <div class="tabs-list">
                      <a href="javascript:void(0)" class="tabs-btn active">
                        <span class="txt">연락처</span>
                        <span class="cnt bg-primary">17</span>
                      </a>

                      <a href="javascript:void(0)" class="tabs-btn">
                        <span class="txt">메세지</span>
                      </a>
                    </div>
                  </article>

                </div>

                <div class="head-mid-box">

                  <div class="input-group-box d-flex flex-center">

                    <div class="option-box">

                      <article class="toggle-list-layout1">

                        <div class="toggle-list">

                          <label>
                            <input type="radio" name="toggle1" checked>
                            <span class="txt">내지역</span>
                          </label>

                          <label>
                            <input type="radio" name="toggle1">
                            <span class="txt">전국</span>
                          </label>

                        </div>

                      </article>

                    </div>
                    <div class="input-box">

                      <input type="text" placeholder="이름, 휴대폰번호 또는 소속기관명">
                      <a href="javascript:void(0)" class="input-btn">
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </a>
                    </div>
                  </div>

                </div>

                <div class="head-bottom-box">

                  <article class="check-list-layout1">
                    <div class="list-box">
                      <div class="item-box d-inline-flex flex-center justify-content-center">
                        <label>
                          <input type="checkbox">
                          <span class="txt">보건소</span>
                        </label>
                      </div>
                      <div class="item-box">
                        <label>
                          <input type="checkbox">
                          <span class="txt">병상배정반</span>
                        </label>
                      </div>
                      <div class="item-box">
                        <label>
                          <input type="checkbox">
                          <span class="txt">의료진</span>
                        </label>
                      </div>
                      <div class="item-box">
                        <label>
                          <input type="checkbox">
                          <span class="txt">구급대</span>
                        </label>
                      </div>
                      <div class="item-box">
                        <label>
                          <input type="checkbox">
                          <span class="txt">전산</span>
                        </label>
                      </div>

                    </div>

                  </article>


                </div>

              </div>


              <div class="board-body-box">

                <div class="list-wrap">

                  <div class="list-group-box">
                    <div class="list-head-box">

                      <a href="javascript:void(0)" class="head-box d-flex flex-center justify-content-between"
                         onclick="listToggle(this)">
                        <div class="head-tit-box">등록요청</div>
                        <i class="fa-solid fa-angle-down" style="color: #9fa1ab;"></i>
                        <i class="fa-solid fa-angle-up" style="color: #9fa1ab;"></i>
                      </a>

                    </div>

                    <div class="list-body-box">

                      <div class="item-box">

                        <div class="item-info-box">
                          <div class="profile-box">
                            <img src="/img/common/img_profile_default.svg" alt="이미지">
                          </div>

                          <div class="info-box">
                            <div class="subject-box">우상욱 팀장</div>
                            <div class="con-box">병상배정반 / 대구광역시</div>

                          </div>

                        </div>

                        <div class="item-option-box">
                          <article class="state-label-item">
                            <a href="javascript:popupOpen('state')"
                               class="state-label-box bg-danger text-white">승인/반려</a>
                          </article>
                        </div>

                      </div>


                    </div>
                  </div>

                  <div class="list-group-box">
                    <div class="list-head-box">

                      <a href="javascript:void(0)" class="head-box d-flex flex-center justify-content-between"
                         onclick="listToggle(this)">
                        <div class="head-tit-box">즐겨찾기</div>
                        <i class="fa-solid fa-angle-down" style="color: #9fa1ab;"></i>
                        <i class="fa-solid fa-angle-up" style="color: #9fa1ab;"></i>
                      </a>

                    </div>

                    <div class="list-body-box">

                      <div class="item-box">

                        <div class="item-info-box">
                          <div class="profile-box">
                            <img src="/img/common/img_profile_default.svg" alt="이미지">
                          </div>

                          <div class="info-box">
                            <div class="subject-box">김성준 소방교</div>
                            <div class="con-box">의료진 / 대구광역시 / 칠곡경북대학교병원</div>

                          </div>

                        </div>

                        <div class="item-option-box"></div>

                      </div>

                      <div class="item-box">

                        <div class="item-info-box">
                          <div class="profile-box">
                            <img src="/img/common/img_profile_default.svg" alt="이미지">
                          </div>

                          <div class="info-box">
                            <div class="subject-box">김성준 소방교</div>
                            <div class="con-box">의료진 / 대구광역시 / 칠곡경북대학교병원</div>

                          </div>

                        </div>

                        <div class="item-option-box"></div>

                      </div>


                    </div>
                  </div>

                  <div class="list-group-box">
                    <div class="list-head-box">

                      <a href="javascript:void(0)" class="head-box d-flex flex-center justify-content-between"
                         onclick="listToggle(this)">
                        <div class="head-tit-box">내 조직</div>
                        <i class="fa-solid fa-angle-down" style="color: #9fa1ab;"></i>
                        <i class="fa-solid fa-angle-up" style="color: #9fa1ab;"></i>
                      </a>

                    </div>

                    <div class="list-body-box">

                      <div class="item-box">

                        <div class="item-info-box">
                          <div class="profile-box">
                            <img src="/img/common/img_profile_default.svg" alt="이미지">
                          </div>

                          <div class="info-box">
                            <div class="subject-box">김성준 소방교</div>
                            <div class="con-box">의료진 / 대구광역시 / 칠곡경북대학교병원</div>

                          </div>

                        </div>

                        <div class="item-option-box"></div>

                      </div>

                    </div>
                  </div>

                  <div class="list-group-box">
                    <div class="list-head-box">

                      <a href="javascript:void(0)" class="head-box d-flex flex-center justify-content-between"
                         onclick="listToggle(this)">
                        <div class="head-tit-box">알 수도 있는 사람</div>
                        <i class="fa-solid fa-angle-down" style="color: #9fa1ab;"></i>
                        <i class="fa-solid fa-angle-up" style="color: #9fa1ab;"></i>
                      </a>

                    </div>

                    <div class="list-body-box">

                      <div class="item-box">

                        <div class="item-info-box">
                          <div class="profile-box">
                            <img src="/img/common/img_profile_default.svg" alt="이미지">
                          </div>

                          <div class="info-box">
                            <div class="subject-box">김성준 소방교</div>
                            <div class="con-box">의료진 / 대구광역시 / 칠곡경북대학교병원</div>

                          </div>

                        </div>

                        <div class="item-option-box"></div>

                      </div>

                    </div>
                  </div>


                </div>

                <div class="list-menu-box d-flex justify-content-center pt-8">
                  <a href="#none" class="btn btn-flex bg-primary text-white rounded-pill" data-bs-toggle="modal"
                     data-bs-target="#kt_modal_user_invite">사용자 초대</a>
                </div>

              </div>

            </section>

            <section class="cntc-info-view">


              <div class="view-head-box">

                <div class="view-img-box">
                  <img src="/img/common/img_dummy_item1.png" alt="이미지">
                </div>

                <div class="view-basic-box">

                  <div class="item-box">

                    <div class="item-info-box">
                      <div class="profile-box">
                        <img src="/img/common/img_profile_default.svg" alt="이미지">
                      </div>

                      <div class="info-box">
                        <div class="subject-box">
                          <div class="subject-txt"><b>김회숙</b> 대리</div>
                          <div class="label-txt text-primary">게스트</div>
                        </div>
                        <div class="con-box">의료진 / 대구광역시 / 칠곡경북대학교병원</div>

                      </div>

                    </div>

                    <div class="item-option-box">
                      <article class="like-btn">
                        <a href="javascript:void(0)" class="like-btn" onclick="likeToggle(this)">
                          <i class="fa-regular fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                        </a>
                      </article>
                    </div>


                  </div>

                </div>

              </div>

              <div class="view-body-box">

                <article class="list-layout1">

                  <div class="list-wrap">

                    <div class="list-row">

                      <div class="list-head-box">

                        <div class="head-box">업무처리현황</div>

                      </div>

                      <div class="list-body-box">

                        <div class="current-item-list">

                          <div class="current-item-box">
                            <div class="current-label-box">총</div>
                            <div class="current-con-box">143 건</div>
                          </div>

                          <div class="current-item-box">
                            <div class="current-label-box">완료</div>
                            <div class="current-con-box"><span class="text-primary">133</span> 건</div>
                          </div>

                          <div class="current-item-box">
                            <div class="current-label-box">미처리</div>
                            <div class="current-con-box"><span class="text-danger">133</span> 건</div>
                          </div>

                        </div>


                      </div>


                    </div>

                    <div class="list-row">

                      <div class="list-head-box">

                        <div class="head-box">상세정보</div>

                      </div>

                      <div class="list-body-box">

                        <div class="inner-item-list">

                          <div class="inner-item-box">
                            <div class="subject-box">주 담당지역</div>
                            <div class="con-box">대구광역시</div>
                          </div>

                          <div class="inner-item-box">
                            <div class="subject-box">연락처</div>
                            <div class="con-box">010-1234-2345</div>

                            <a href="javascript:void(0)" class="chat-btn"
                               style="background-image: url('/img/common/ic_floating_chat.svg');"></a>
                          </div>

                          <div class="inner-item-box">
                            <div class="subject-box">담당 환자유형</div>
                            <div class="con-box">#신생아 #임산부</div>
                          </div>

                          <div class="inner-item-box">
                            <div class="subject-box">최근 활동</div>
                            <div class="con-box">2023년 3월 10일, 오후 5시 30분</div>
                          </div>


                        </div>


                      </div>


                    </div>

                  </div>


                </article>


              </div>


            </section>

            <section class="cntc-activity">

              <div class="activity-head-box">

                <div class="head-top-box">

                  <article class="tabs-list-layout1">
                    <div class="tabs-list full">
                      <a href="javascript:tabsMove('tabs1')" class="tabs-btn active">
                        <span class="txt">개요</span>
                      </a>

                      <a href="javascript:tabsMove('tabs2')" class="tabs-btn">
                        <span class="txt">보안</span>
                      </a>

                      <a href="javascript:tabsMove('tabs3')" class="tabs-btn">
                        <span class="txt">접속기록</span>
                      </a>
                    </div>
                  </article>

                </div>

              </div>

              <div class="activity-body-box">

                <div class="tabs-group-box">

                  <div class="tabs-box" data-tabs="tabs1" style="">

                    <article class="activity-list-group">

                      <div class="list-head-box">

                        <div class="head-box">

                          <div class="subject-box">활동</div>
                          <div class="sub-box">총 143건</div>

                        </div>

                        <div class="option-box">
                          <article class="legend-layout1">
                            <div class="legend-label-box">범례 :</div>
                            <div class="legend-list-box">
                              <div class="legend-box">
                                <span class="dot dot-blue"></span>
                                <span class="legend-txt">미처리</span>
                              </div>

                              <div class="legend-box">
                                <span class="dot dot-gray"></span>
                                <span class="legend-txt">처리</span>
                              </div>
                            </div>

                          </article>
                        </div>


                      </div>

                      <div class="list-body-box">

                        <ul>
                          <li>
                            <a href="javascript:void(0)" class="item-box state-ing">

                              <div class="info-box">

                                <div class="state-box">
                                  <div class="state-txt type-ing">승인대기</div>
                                </div>

                                <div class="user-box">
                                  <div class="subject-box"><b>송진호</b> (남/43세/경북 포항시)</div>
                                  <div class="con-box">#투석 #음압격리 #임산부</div>
                                </div>

                              </div>

                              <div class="date-box">13시 43분</div>
                            </a>
                          </li>

                          <li>
                            <a href="javascript:void(0)" class="item-box state-ing">

                              <div class="info-box">

                                <div class="state-box">
                                  <div class="state-txt type-ing">승인대기</div>
                                </div>

                                <div class="user-box">
                                  <div class="subject-box"><b>송진호</b> (남/43세/경북 포항시)</div>
                                  <div class="con-box">#투석 #음압격리 #임산부</div>
                                </div>

                              </div>

                              <div class="date-box">2023년 3월 1일 13시 43분</div>
                            </a>
                          </li>

                          <li>
                            <a href="javascript:void(0)" class="item-box state-finish">

                              <div class="info-box">

                                <div class="state-box">
                                  <div class="state-txt type-finish">승인대기</div>
                                </div>

                                <div class="user-box">
                                  <div class="subject-box"><b>송진호</b> (여/23세/서울특별시 송파구)</div>
                                  <div class="con-box">#투석 #음압격리 #임산부</div>
                                </div>

                              </div>

                              <div class="date-box">2023년 3월 1일 13시 43분</div>
                            </a>
                          </li>

                          <li>
                            <a href="javascript:void(0)" class="item-box state-finish">

                              <div class="info-box">

                                <div class="state-box">
                                  <div class="state-txt type-finish">승인대기</div>
                                </div>

                                <div class="user-box">
                                  <div class="subject-box"><b>송진호</b> (여/23세/서울특별시 송파구)</div>
                                  <div class="con-box">#투석 #음압격리 #임산부</div>
                                </div>

                              </div>

                              <div class="date-box">2023년 3월 1일 13시 43분</div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" class="item-box state-finish">

                              <div class="info-box">

                                <div class="state-box">
                                  <div class="state-txt type-finish">승인대기</div>
                                </div>

                                <div class="user-box">
                                  <div class="subject-box"><b>송진호</b> (여/23세/서울특별시 송파구)</div>
                                  <div class="con-box">#투석 #음압격리 #임산부</div>
                                </div>

                              </div>

                              <div class="date-box">2023년 3월 1일 13시 43분</div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" class="item-box state-finish">

                              <div class="info-box">

                                <div class="state-box">
                                  <div class="state-txt type-finish">승인대기</div>
                                </div>

                                <div class="user-box">
                                  <div class="subject-box"><b>송진호</b> (여/23세/서울특별시 송파구)</div>
                                  <div class="con-box">#투석 #음압격리 #임산부</div>
                                </div>

                              </div>

                              <div class="date-box">2023년 3월 1일 13시 43분</div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" class="item-box state-finish">

                              <div class="info-box">

                                <div class="state-box">
                                  <div class="state-txt type-finish">승인대기</div>
                                </div>

                                <div class="user-box">
                                  <div class="subject-box"><b>송진호</b> (여/23세/서울특별시 송파구)</div>
                                  <div class="con-box">#투석 #음압격리 #임산부</div>
                                </div>

                              </div>

                              <div class="date-box">2023년 3월 1일 13시 43분</div>
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)" class="item-box state-finish">

                              <div class="info-box">

                                <div class="state-box">
                                  <div class="state-txt type-finish">승인대기</div>
                                </div>

                                <div class="user-box">
                                  <div class="subject-box"><b>송진호</b> (여/23세/서울특별시 송파구)</div>
                                  <div class="con-box">#투석 #음압격리 #임산부</div>
                                </div>

                              </div>

                              <div class="date-box">2023년 3월 1일 13시 43분</div>
                            </a>
                          </li>
                        </ul>

                      </div>

                    </article>

                  </div>

                  <div class="tabs-box" data-tabs="tabs2" style="display: none">

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
                              <th>아이디</th>
                              <td>
                                <div class="tbox">
                                  <input type="text" readonly value="kpga@khospital.com">
                                </div>
                              </td>
                            </tr>

                            <tr>
                              <th>비밀번호</th>
                              <td>
                                <article class="btn-layout">
                                  <a href="#none" class="btn d-flex small type-1">변경하기</a>
                                </article>
                              </td>
                            </tr>

                            <tr>
                              <th>휴대폰번호</th>
                              <td>
                                <article class="btn-layout">
                                  <a href="javascript:phoneChange()" class="btn d-flex small type-1">변경하기</a>
                                </article>
                              </td>
                            </tr>

                            <tr>
                              <th>소셜로그인</th>
                              <td>
                                <a href="#none" class="social-btn type-kakao">
                                  <i style="background: url('/img/common/ic_social_kakao.svg') no-repeat center / cover;)"></i>
                                  <span class="txt">카카오 인증 연동</span>
                                </a>

                                <a href="#none" class="social-btn type-kakao">
                                  <i style="background: url('/img/common/ic_social_kakao.svg') no-repeat center / cover;)"></i>
                                  <span class="txt">카카오 인증 사용중</span>
                                </a>
                              </td>
                            </tr>

                          </table>
                        </div>
                      </div>


                    </article>


                  </div>

                  <div class="tabs-box" data-tabs="tabs3" style="display: none">


                    <div class="activity-history-group">

                      <div class="history-box">
                        <article class="table-list-layout1">

                          <div class="table-head-box">
                            <div class="table-tit-box">1. 사용자 상태 변경 이력</div>
                          </div>
                          <div class="table-body-box">

                            <div class="table-box with-scroll" style="max-height: 250px">
                              <table>
                                <colgroup>
                                  <col style="width: 100px;">
                                  <col style="width: 150px;">
                                  <col style="width: 400px;">
                                  <col style="width: 200px;">
                                </colgroup>
                                <thead>
                                <tr>
                                  <th>순번</th>
                                  <th>상세</th>
                                  <th>처리자</th>
                                  <th>일시</th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr>
                                  <td>7</td>
                                  <td>탈퇴</td>
                                  <td>홍길동/실장/대구시 병상배정반</td>
                                  <td>2023-07-01</td>
                                </tr>

                                <tr>
                                  <td>7</td>
                                  <td>탈퇴</td>
                                  <td>홍길동/실장/대구시 병상배정반</td>
                                  <td>2023-07-01</td>
                                </tr>

                                <tr>
                                  <td>7</td>
                                  <td>탈퇴</td>
                                  <td>홍길동/실장/대구시 병상배정반</td>
                                  <td>2023-07-01</td>
                                </tr>

                                <tr>
                                  <td>7</td>
                                  <td>탈퇴</td>
                                  <td>홍길동/실장/대구시 병상배정반</td>
                                  <td>2023-07-01</td>
                                </tr>
                                </tbody>

                              </table>
                            </div>
                          </div>

                        </article>
                      </div>

                      <div class="history-box">
                        <article class="table-list-layout1">

                          <div class="table-head-box">
                            <div class="table-tit-box">2. 로그인 이력</div>
                          </div>
                          <div class="table-body-box">

                            <div class="table-box with-scroll" style="max-height: 250px">
                              <table>
                                <colgroup>
                                  <col style="width: 100px;">
                                  <col style="width: 150px;">
                                  <col style="width: 400px;">
                                  <col style="width: 200px;">
                                </colgroup>
                                <thead>
                                <tr>
                                  <th>순번</th>
                                  <th>IP</th>
                                  <th>장치</th>
                                  <th>일시</th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr>
                                  <td>7</td>
                                  <td>207.46.34.110</td>
                                  <td>Chome - Windows</td>
                                  <td>2023-07-01</td>
                                </tr>

                                <tr>
                                  <td>7</td>
                                  <td>207.46.34.110</td>
                                  <td>Safari - iOS</td>
                                  <td>2023-07-01</td>
                                </tr>

                                <tr>
                                  <td>7</td>
                                  <td>207.46.34.110</td>
                                  <td>Chome - Windows</td>
                                  <td>2023-07-01</td>
                                </tr>

                                <tr>
                                  <td>7</td>
                                  <td>207.46.34.110</td>
                                  <td>Chome - Windows</td>
                                  <td>2023-07-01</td>
                                </tr>

                                </tbody>

                              </table>
                            </div>
                          </div>

                        </article>
                      </div>

                      <div class="history-box">
                        <article class="table-list-layout1">

                          <div class="table-head-box">
                            <div class="table-tit-box">3. 활동 로그</div>
                          </div>
                          <div class="table-body-box">

                            <div class="table-box with-scroll" style="max-height: 250px">
                              <table>
                                <colgroup>
                                  <col style="width: 100px;">
                                  <col style="width: 150px;">
                                  <col style="width: 400px;">
                                  <col style="width: 200px;">
                                </colgroup>
                                <thead>
                                <tr>
                                  <th>순번</th>
                                  <th>STATE</th>
                                  <th>처리자</th>
                                  <th>일시</th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr>
                                  <td>7</td>
                                  <td>200</td>
                                  <td>
                                    <div class="web-method-box"><span class="web-method-label">GET</span><span
                                        class="web-method-url">/api/v1/hospitals</span></div>
                                  </td>
                                  <td>2023-07-01</td>
                                </tr>

                                <tr>
                                  <td>7</td>
                                  <td>300</td>
                                  <td>
                                    <div class="web-method-box"><span class="web-method-label">POST</span><span
                                        class="web-method-url">/api/v1/hospitals</span></div>
                                  </td>
                                  <td>2023-07-01</td>
                                </tr>

                                <tr>
                                  <td>7</td>
                                  <td>403</td>
                                  <td>
                                    <div class="web-method-box"><span class="web-method-label">GET</span><span
                                        class="web-method-url">/api/v1/hospitals</span></div>
                                  </td>
                                  <td>2023-07-01</td>
                                </tr>

                                <tr>
                                  <td>7</td>
                                  <td>200</td>
                                  <td>
                                    <div class="web-method-box"><span class="web-method-label">GET</span><span
                                        class="web-method-url">/api/v1/hospitals</span></div>
                                  </td>
                                  <td>2023-07-01</td>
                                </tr>

                                <tr>
                                  <td>7</td>
                                  <td>200</td>
                                  <td>
                                    <div class="web-method-box"><span class="web-method-label">GET</span><span
                                        class="web-method-url">/api/v1/hospitals</span></div>
                                  </td>
                                  <td>2023-07-01</td>
                                </tr>

                                <tr>
                                  <td>7</td>
                                  <td>200</td>
                                  <td>
                                    <div class="web-method-box"><span class="web-method-label">GET</span><span
                                        class="web-method-url">/api/v1/hospitals</span></div>
                                  </td>
                                  <td>2023-07-01</td>
                                </tr>

                                <tr>
                                  <td>7</td>
                                  <td>200</td>
                                  <td>
                                    <div class="web-method-box"><span class="web-method-label">GET</span><span
                                        class="web-method-url">/api/v1/hospitals</span></div>
                                  </td>
                                  <td>2023-07-01</td>
                                </tr>

                                <tr>
                                  <td>7</td>
                                  <td>200</td>
                                  <td>
                                    <div class="web-method-box"><span class="web-method-label">GET</span><span
                                        class="web-method-url">/api/v1/hospitals</span></div>
                                  </td>
                                  <td>2023-07-01</td>
                                </tr>


                                <tr>
                                  <td>7</td>
                                  <td>200</td>
                                  <td>
                                    <div class="web-method-box"><span class="web-method-label">GET</span><span
                                        class="web-method-url">/api/v1/hospitals</span></div>
                                  </td>
                                  <td>2023-07-01</td>
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

  <!--begin::Modal - 내정보-->
  <div class="modal fade" id="kt_modal_user_profile_view" tabindex="-1" aria-hidden="true">
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

          <article class="modal-profile-layout1">


            <div class="profile-card-box">
              <div class="profile-view-box">
                <img src="/img/common/img_profile_dummy.png" alt="이미지">
              </div>
              <div class="profile-info-box">

                <div class="row">
                  <div class="subject-box">아이디</div>
                  <div class="con-box">lemon2023@naver.com</div>

                  <a href="#none" class="profile-btn">
                    <img src="/img/common/img_profile_default.svg" alt="이미지">
                  </a>


                </div>

                <div class="row">
                  <div class="subject-box">이름</div>
                  <div class="con-box">김건우</div>
                </div>

                <div class="row">
                  <div class="subject-box">휴대폰번호</div>
                  <div class="con-box">010-1234-5678</div>
                </div>
              </div>
            </div>

            <div class="profile-table-box pt-8">
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
                        <th>주 담당지역</th>
                        <td>대구광역시 전체</td>
                      </tr>

                      <tr>
                        <th>소속기관 유형</th>
                        <td>의료진</td>
                      </tr>

                      <tr>
                        <th>소속기관</th>
                        <td>대구서울대병원</td>
                      </tr>

                      <tr>
                        <th>권한그룹</th>
                        <td>병상요청, 병상배정</td>
                      </tr>

                      <tr>
                        <th>세부권한</th>
                        <td>일반</td>
                      </tr>

                      <tr>
                        <th>직급</th>
                        <td>주임</td>
                      </tr>

                      <tr>
                        <th>담당환자 유형</th>
                        <td>투석, 신생아</td>
                      </tr>

                    </table>
                  </div>
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
  <!--end::Modal - 내정보-->

  <!--begin::Modal - 내정보 수정 -->
  <div class="modal fade" id="kt_modal_user_profile_modify" tabindex="-1" aria-hidden="true">
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

          <article class="modal-profile-layout1">

            <div class="profile-card-box">

              <div class="profile-edit-box">
                <img src="/img/common/img_profile_dummy.png" alt="이미지">

                <div class="upload-box">
                  <label>
                    <input type="file">
                    <img src="/img/common/ic_profile_upload.svg" alt="이미지">
                  </label>
                </div>

                <a href="javascript:profileImgRemove()" class="remove-btn"><img src="/img/common/ic_profile_remove.svg"
                                                                                alt="이미지"></a>
              </div>
              <div class="profile-info-box">

                <div class="row">
                  <div class="subject-box">아이디</div>
                  <div class="con-box">lemon2023@naver.com</div>
                </div>

                <div class="row">
                  <div class="subject-box">이름</div>
                  <div class="con-box">김건우</div>
                </div>

                <div class="row">
                  <div class="subject-box">휴대폰번호</div>
                  <div class="con-box">010-1234-5678</div>
                </div>
              </div>

              <div class="profile-note-box text-danger ">* 승인 필요 항목</div>
            </div>

            <div class="profile-table-box pt-8">
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
                                <input type="radio" name="belong"><i></i>
                                <span class="txt">보건소</span>
                              </label>
                            </div>

                            <div class="rbox ms-4">
                              <label>
                                <input type="radio" name="belong"><i></i>
                                <span class="txt">병상배정반</span>
                              </label>
                            </div>

                            <div class="rbox ms-4">
                              <label>
                                <input type="radio" name="belong"><i></i>
                                <span class="txt">의료진</span>
                              </label>
                            </div>

                            <div class="rbox ms-4">
                              <label>
                                <input type="radio" name="belong"><i></i>
                                <span class="txt">구급대</span>
                              </label>
                            </div>

                            <div class="rbox ms-4">
                              <label>
                                <input type="radio" name="belong"><i></i>
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
                              <input type="text" readonly placeholder="기관명 입력">
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
                                <input type="checkbox" name="permission"><i></i>
                                <span class="txt">병상요청</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="permission"><i></i>
                                <span class="txt">병상승인</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="permission"><i></i>
                                <span class="txt">병상배정</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="permission"><i></i>
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
                                <input type="radio" name="role"><i></i>
                                <span class="txt">일반</span>
                              </label>
                            </div>

                            <div class="rbox ms-4">
                              <label>
                                <input type="radio" name="role"><i></i>
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
                            <input type="text">
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>담당환자 유형</th>
                        <td>
                          <article class="check-list-layout1">
                            <div class="list-box">
                              <div class="item-box d-inline-flex flex-center justify-content-center">
                                <label>
                                  <input type="checkbox">
                                  <span class="txt">#투석</span>
                                </label>
                              </div>
                              <div class="item-box">
                                <label>
                                  <input type="checkbox">
                                  <span class="txt">#임산부</span>
                                </label>
                              </div>
                              <div class="item-box">
                                <label>
                                  <input type="checkbox">
                                  <span class="txt">#신생아</span>
                                </label>
                              </div>
                              <div class="item-box">
                                <label>
                                  <input type="checkbox">
                                  <span class="txt">#응급</span>
                                </label>
                              </div>

                            </div>

                          </article>


                        </td>
                      </tr>


                      <!--                                            </tr>-->

                    </table>
                  </div>

                </div>

                <div class="table-foot-box mt-10">

                  <article class="modal-menu-layout1">

                    <div class="modal-menu-list">
                      <a href="#none" class="modal-menu-btn menu-cancel" data-bs-dismiss="modal">취소</a>
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

  <!--begin::Modal - 내정보 수정 -->
  <div class="modal fade" id="kt_modal_user_phone" tabindex="-1" aria-hidden="true">
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-550px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>휴대폰번호 변경</h2>
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
                  <tr>
                    <th>휴대폰번호 <span class="text-primary">*</span></th>
                    <td>
                      <div class="item-row-box">
                        <div class="item-cell-box">
                          <div class="tbox full">
                            <input type="text" placeholder="휴대폰번호 입력">
                          </div>
                          <a href="javascript:phoneCertify();" class="btn btn-sm btn-primary h-30px ms-3 certify-btn"
                             style="min-width: 103px;">인증번호 발송</a>

                        </div>
                      </div>

                      <div class="item-row-box mt-3">
                        <div class="item-note-box">* 유효성 검사 문구</div>
                      </div>

                    </td>
                  </tr>

                  <tr class="certify-row" style="display: none;">
                    <th>인증번호 <span class="text-primary">*</span></th>
                    <td>
                      <div class="item-row-box">
                        <div class="item-cell-box">
                          <div class="tbox full">
                            <input type="text" placeholder="인증번호 6자리">
                          </div>

                          <div class="timer-box ms-3 text-danger" style="min-width: 103px">유효시간: <span class="timer">02:59</span>
                          </div>

                        </div>
                      </div>
                    </td>
                  </tr>


                  <!--                                    </tr>-->

                </table>
              </div>

            </div>

            <div class="table-foot-box mt-10">

              <article class="modal-menu-layout1">

                <div class="modal-menu-list">
                  <a href="javascript:alertPopupOpen('메시지 입력')" class="modal-menu-btn menu-primary">변경완료</a>
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

  <!--begin::Modal - 내정보 수정 -->
  <div class="modal fade" id="kt_modal_user_invite" tabindex="-1" aria-hidden="true">
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
                    <th>이름 <span class="text-primary">*</span></th>
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
                    <th>휴대폰번호 <span class="text-primary">*</span></th>
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


                  <!--                                    </tr>-->

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

  <!--begin::Modal - 내정보 수정 -->
  <div class="modal fade" id="kt_modal_user_approval" tabindex="-1" aria-hidden="true">
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-550px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>승인 처리</h2>
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

          <article class="table-form-layout2">

            <div class="form-head-box"></div>

            <div class="form-body-box">

              <div class="row">

                <div class="subject-box">승인/반려 여부</div>
                <div class="con-box">

                  <div class="item-cell-box">
                    <div class="rbox">
                      <label>
                        <input type="radio" name="approval"><i></i>
                        <span class="txt">승인</span>
                      </label>
                    </div>

                    <div class="rbox ms-4">
                      <label>
                        <input type="radio" name="approval"><i></i>
                        <span class="txt">반려</span>
                      </label>
                    </div>
                  </div>


                </div>

              </div>

              <div class="row">

                <div class="subject-box">메시지</div>
                <div class="con-box">

                  <div class="textbox">
                    <textarea onkeyup="limitTextarea(this,'textarea1',500)" maxlength="500"></textarea>
                    <div class="option-box d-flex justify-content-end">
                      <span id="textarea1">0</span>/500자

                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div class="form-foot-box pt-10">
              <article class="modal-menu-layout1">

                <div class="modal-menu-list">
                  <a href="javascript:confirmPopupOpen('$회원번호(회원명)$님을<br/>사용자로<br/>승인 하시겠습니까?')"
                     class="modal-menu-btn menu-primary">저장</a>
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
  components: {},
  name: 'DetlAncmt',
  props: {
    msg: String
  },
  mounted() {
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
