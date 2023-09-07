<template>
  <!--  신규병상요청   -->
  <div class="modal show" tabindex="-1">
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-1500px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>병상요청</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div
            id="reqest_exit"
            class="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
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
          <!--end::Close-->

          <article class="floating-request-box">
            <div class="img-box">
              <img src="/img/common/ic_request_patient.svg" alt="이미지" />
            </div>
            <div v-if="newPt.mpno" class="txt-box">
              {{ newPt.ptNm }}
              <span class="text-gray-600 fw-normal"
                >({{ newPt.gndr }} / {{ getAge(newPt.rrno1, newPt.rrno2) }}세 /
                {{ newPt.bascAddr }} / {{ getTelno(newPt.mpno) }})</span
              >
            </div>
            <div v-show="tab !== 1 && svInfo.undrDsesCd !== []" class="txt-box">
              <span class="text-primary">{{ getTag(svInfo.undrDsesCd) }}</span>
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
                                      <img
                                        v-if="preRpt === null"
                                        src="/img/common/img_upload_img.svg"
                                        alt="이미지"
                                      />
                                      <img v-if="preRpt !== null" :src="preRpt" alt="이미지" />
                                      <a
                                        v-if="preRpt !== null"
                                        @click="alertOpen(9)"
                                        class="remove-btn"
                                        ><img src="/img/common/ic_profile_remove.svg" alt="이미지"
                                      /></a>
                                    </div>

                                    <div class="profile-upload-box">
                                      <div class="upload-box">
                                        <label
                                          class="btn btn-flex justify-content-center btn-primary py-0 px-0 h-30px w-80px certify-btn rounded-1 mt-2 btn-outline btn-outline-primary"
                                        >
                                          <input
                                            type="file"
                                            @change="uploadRpt"
                                            :value="reportFile"
                                          />
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
                                    <input type="text" v-model="newPt.ptNm" />
                                  </div>
                                </div>
                              </td>
                              <th>성별</th>
                              <td v-if="newPt.rrno2 !== undefined">{{ getGndr(newPt.rrno2) }}자</td>
                            </tr>

                            <tr>
                              <th>주민등록번호 <span class="text-primary">*</span></th>
                              <td>
                                <div class="item-row-box">
                                  <div class="item-cell-box">
                                    <div class="tbox">
                                      <input type="text" v-model="newPt.rrno1" />
                                    </div>
                                    <div class="unit-box mx-2 text-gray-600">-</div>
                                    <div class="tbox w-30px" style="min-width: 30px">
                                      <input
                                        type="password"
                                        v-model="newPt.rrno2"
                                        class="p-0 text-center fs-3x"
                                        maxlength="1"
                                      />
                                    </div>
                                    <div class="unit-box ms-2" style="line-height: 30px">
                                      ●●●●●●
                                    </div>
                                  </div>
                                </div>
                                <div class="item-row-box">
                                  <div class="item-note-box">* 주민등록번호 입력</div>
                                </div>
                              </td>
                              <th>나이 (만)</th>
                              <td v-if="newPt.rrno1 !== undefined && newPt.rrno2 !== undefined">
                                {{ getAge(newPt.rrno1, newPt.rrno2) }}세
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
                                    <input type="text" v-model="newPt.mpno" />
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
                                    <input type="text" v-model="newPt.telno" />
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

                                    <div class="item-note-box">* 국적 선택</div>
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
                  <!--              todo: 역학조사서를사용하지 않았다면 팝업창 뜰 일 없음                      -->
                  <!--								<a href="javascript:requestTabMove(2)" class="modal-menu-btn menu-primary">다음</a>-->
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
                          <!--  todo: 담당보건소 select 불러오기 어떤식으로 조회되는지 조사                                               -->
                          <th>담당보건소</th>
                          <td>
                            <div class="item-row-box">
                              <div class="item-cell-box">
                                <div class="sbox" style="width: 170px">
                                  <select>
                                    <option>대구광역시</option>
                                  </select>
                                </div>
                                <div class="sbox ms-3" style="width: 170px">
                                  <select>
                                    <option>보건소 선택</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div class="item-row-box">
                              <div class="item-cell-box">
                                <div class="tbox w-350px">
                                  <!---  todo: 직접선택 option -> readonly 해제 -->
                                  <input
                                    placeholder="보건소명 직접 입력(수정필요)"
                                    v-model="dsInfo.rcptPhc"
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
                          <th>기타 진단 이미지·영상 <span class="text-primary">*</span></th>
                          <td colspan="3">
                            <article class="upload-form-layout1">
                              <div class="upload-result-wrap">
                                <div class="img-upload-result">
                                  <div class="img-list">
                                    <div href="javascript:void(0)" class="img-box">
                                      <img src="/img/common/img_dummy_item1.png" alt="이미지" />
                                      <a
                                        href="javascript:void(0)"
                                        class="remove-btn"
                                        onclick="$(this).parents('.img-box').remove();"
                                      >
                                        <img src="/img/common/ic_profile_remove.svg" alt="이미지" />
                                      </a>
                                    </div>

                                    <div href="javascript:void(0)" class="img-box">
                                      <img src="/img/common/img_dummy_item1.png" alt="이미지" />
                                      <a
                                        href="javascript:void(0)"
                                        class="remove-btn"
                                        onclick="$(this).parents('.img-box').remove();"
                                      >
                                        <img src="/img/common/ic_profile_remove.svg" alt="이미지" />
                                      </a>
                                    </div>
                                  </div>
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
                    >이전</router-link
                  >
                  <router-link to="" @click="goAsgn(2)" class="modal-menu-btn menu-primary"
                    >다음</router-link
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
                                      v-model="svInfo.undrDsesCd"
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
                                      v-model="svInfo.undrDsesCd"
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
                                      v-model="svInfo.undrDsesCd"
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
                                      v-model="svInfo.undrDsesCd"
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
                                      v-model="svInfo.undrDsesCd"
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
                                      v-model="svInfo.undrDsesCd"
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
                                      v-model="svInfo.undrDsesCd"
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
                                      v-model="svInfo.undrDsesCd"
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
                                      v-model="svInfo.undrDsesCd"
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
                                      v-model="svInfo.undrDsesCd"
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
                                      v-model="svInfo.undrDsesCd"
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
                                      v-model="svInfo.undrDsesCd"
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
                                      v-model="svInfo.undrDsesCd"
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
                                        v-model="svInfo.undrDsesCd"
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
                            <div
                              class="item-cell-box pt-2"
                              style="font-size: 12px; letter-spacing: -0.05em; color: #696971"
                            >
                              * 요청 병상 유형을 선택해주세요
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
                                      value="Y"
                                      v-model="svInfo.dnrAgreYn"
                                    />
                                    <span class="txt">동의</span>
                                  </label>

                                  <label>
                                    <input
                                      type="radio"
                                      name="toggle4-1"
                                      value="N"
                                      v-model="svInfo.dnrAgreYn"
                                    />
                                    <span class="txt">비동의</span>
                                  </label>

                                  <label>
                                    <input
                                      type="radio"
                                      name="toggle4-1"
                                      value="X"
                                      v-model="svInfo.dnrAgreYn"
                                    />
                                    <span class="txt">해당없음</span>
                                  </label>
                                </div>
                              </article>
                            </div>
                            <div
                              class="item-cell-box pt-2"
                              style="font-size: 12px; letter-spacing: -0.05em; color: #696971"
                            >
                              * DNR 동의여부를 선택해주세요
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
                            <div
                              class="item-cell-box pt-2"
                              style="font-size: 12px; letter-spacing: -0.05em; color: #696971"
                            >
                              * 중증 정보를 선택해주세요
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
                    >이전</router-link
                  >
                  <router-link to="" @click="goAsgn(4)" class="modal-menu-btn menu-primary"
                    >다음</router-link
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
                                  @input="validateInput"
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
                                  @input="validateInput"
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
                                  @input="validateInput"
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
                    >이전</router-link
                  >

                  <router-link to="" @click="goAsgn(5)" class="modal-menu-btn menu-primary"
                    >병상요청완료</router-link
                  >
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
</template>

<script setup></script>

<style scoped></style>
