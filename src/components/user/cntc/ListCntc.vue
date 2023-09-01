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
                  class="page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-2 m-0">병상배정
                현황</h1></li>
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
                    <div class="list-head-box" :class="{'hide': listBoxesHide['request']}">

                      <a href="javascript:void(0)" class="head-box d-flex flex-center justify-content-between"
                         @click="listBoxesHide['request'] = !listBoxesHide['request']">
                        <div class="head-tit-box">등록요청</div>
                        <i class="fa-solid fa-angle-down" style="color: #9fa1ab;"></i>
                        <i class="fa-solid fa-angle-up" style="color: #9fa1ab;"></i>
                      </a>

                    </div>

                    <div class="list-body-box">

                      <!--                      <div class="item-box">-->

                      <!--                        <div class="item-info-box">-->
                      <!--                          <div class="profile-box">-->
                      <!--                            <img src="/img/common/img_profile_default.svg" alt="이미지">-->
                      <!--                          </div>-->

                      <!--                          <div class="info-box">-->
                      <!--                            <div class="subject-box">우상욱 팀장</div>-->
                      <!--                            <div class="con-box">병상배정반 / 대구광역시</div>-->

                      <!--                          </div>-->

                      <!--                        </div>-->

                      <!--                        <div class="item-option-box">-->
                      <!--                          <article class="state-label-item">-->
                      <!--                            <a href="javascript:popupOpen('state')"-->
                      <!--                               class="state-label-box bg-danger text-white">승인/반려</a>-->
                      <!--                          </article>-->
                      <!--                        </div>-->

                      <!--                      </div>-->


                    </div>
                  </div>

                  <div class="list-group-box">
                    <div class="list-head-box" :class="{'hide': listBoxesHide['favourite']}">

                      <a href="javascript:void(0)" class="head-box d-flex flex-center justify-content-between"
                         @click="listBoxesHide['favourite'] = !listBoxesHide['favourite']">
                        <div class="head-tit-box">즐겨찾기</div>
                        <i class="fa-solid fa-angle-down" style="color: #9fa1ab;"></i>
                        <i class="fa-solid fa-angle-up" style="color: #9fa1ab;"></i>
                      </a>

                    </div>

                    <div class="list-body-box">

                      <!--                      <div class="item-box">-->

                      <!--                        <div class="item-info-box">-->
                      <!--                          <div class="profile-box">-->
                      <!--                            <img src="/img/common/img_profile_default.svg" alt="이미지">-->
                      <!--                          </div>-->

                      <!--                          <div class="info-box">-->
                      <!--                            <div class="subject-box">김성준 소방교</div>-->
                      <!--                            <div class="con-box">의료진 / 대구광역시 / 칠곡경북대학교병원</div>-->

                      <!--                          </div>-->

                      <!--                        </div>-->

                      <!--                        <div class="item-option-box"></div>-->

                      <!--                      </div>-->

                    </div>
                  </div>

                  <div class="list-group-box">
                    <div class="list-head-box" :class="{'hide': listBoxesHide['organization']}">

                      <a href="javascript:void(0)" class="head-box d-flex flex-center justify-content-between"
                         @click="listBoxesHide['organization'] = !listBoxesHide['organization']">
                        <div class="head-tit-box">내 조직</div>
                        <i class="fa-solid fa-angle-down" style="color: #9fa1ab;"></i>
                        <i class="fa-solid fa-angle-up" style="color: #9fa1ab;"></i>
                      </a>

                    </div>

                    <div class="list-body-box">

                      <div v-for="(user, idx) in usersList.items" :key="idx" class="item-box">
                        <div class="item-info-box">
                          <div class="profile-box">
                            <img src="/img/common/img_profile_default.svg" alt="이미지">
                          </div>

                          <div class="info-box">
                            <div class="subject-box">{{ `${user['userNm']} ${user['ocpCd']}` }}</div>
                            <div class="con-box">{{
                                `${user['jobCd']} / ${user['dutyDstr1Cd']} / ${user['instNm']}`
                              }}
                            </div>

                          </div>

                        </div>

                        <div class="item-option-box"></div>
                      </div>

                      <!--                      <div class="item-box">-->

                      <!--                        <div class="item-info-box">-->
                      <!--                          <div class="profile-box">-->
                      <!--                            <img src="/img/common/img_profile_default.svg" alt="이미지">-->
                      <!--                          </div>-->

                      <!--                          <div class="info-box">-->
                      <!--                            <div class="subject-box">김성준 소방교</div>-->
                      <!--                            <div class="con-box">의료진 / 대구광역시 / 칠곡경북대학교병원</div>-->

                      <!--                          </div>-->

                      <!--                        </div>-->

                      <!--                        <div class="item-option-box"></div>-->

                      <!--                      </div>-->

                    </div>
                  </div>

                  <div class="list-group-box">
                    <div class="list-head-box" :class="{'hide': listBoxesHide['mayKnow']}">

                      <a href="javascript:void(0)" class="head-box d-flex flex-center justify-content-between"
                         @click="listBoxesHide['mayKnow'] = !listBoxesHide['mayKnow']">
                        <div class="head-tit-box">알 수도 있는 사람</div>
                        <i class="fa-solid fa-angle-down" style="color: #9fa1ab;"></i>
                        <i class="fa-solid fa-angle-up" style="color: #9fa1ab;"></i>
                      </a>

                    </div>

                    <div class="list-body-box">

                      <!--                      <div class="item-box">-->

                      <!--                        <div class="item-info-box">-->
                      <!--                          <div class="profile-box">-->
                      <!--                            <img src="/img/common/img_profile_default.svg" alt="이미지">-->
                      <!--                          </div>-->

                      <!--                          <div class="info-box">-->
                      <!--                            <div class="subject-box">김성준 소방교</div>-->
                      <!--                            <div class="con-box">의료진 / 대구광역시 / 칠곡경북대학교병원</div>-->

                      <!--                          </div>-->

                      <!--                        </div>-->

                      <!--                        <div class="item-option-box"></div>-->

                      <!--                      </div>-->

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

</template>

<script>

import {mapState} from "vuex";

export default {
  components: {},
  name: 'ListCntc',
  props: {
    msg: String
  },
  mounted() {
  },
  data() {
    return {
      listBoxesHide: {
        request: false,
        favourite: false,
        organization: false,
        mayKnow: false
      }
    }
  },
  computed: {
    ...mapState('user', ['usersList']),
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>