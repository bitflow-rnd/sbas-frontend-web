<template>
  <div class='modal show' id='kt_modal_request' tabindex='-1'>
    <!--begin::Modal dialog-->
    <div class='modal-dialog mw-1500px modal-dialog-centered'>
      <!--begin::Modal content-->
      <div class='modal-content'>
        <!--begin::Modal header-->
        <div class='modal-header px-10 pt-5 pb-0 d-flex justify-content-between'>
          <h2>병상요청</h2>
          <CloseButton @close='closeModal' />

          <article class='floating-request-box'>
            <div class='img-box'>
              <img src='/img/common/ic_request_patient.svg' alt='이미지' />
            </div>
<!--            <div v-show="ptBI === null && rptInfo === null" class="txt-box">신규 환자 등록</div>-->
            <div v-if='model.newPt.mpno' class='txt-box'>
              {{ model.newPt.ptNm }}
              <span class='text-gray-600 fw-normal'
              >({{ model.newPt.gndr }} / {{ getAge(model.newPt.rrno1, model.newPt.rrno2) }}세 /
                {{ model.newPt.bascAddr }} / {{ getTelno(model.newPt.mpno) }})</span
              >
            </div>
          </article>
        </div>

        <!--begin::Modal body-->
        <div class='modal-body scroll-y py-10 px-10'>
          <article class='request-step-layout'>
            <div class='step-list'>
              <div class='step-box' :class='{ active: model.tab === 0 }'>
                <div class='order-box'>1</div>
                <div class='info-box'>
                  <div class='subject-box'>1단계</div>
                  <div class='con-box'>
                    환자정보 입력,<br />
                    역학조사서 업로드
                  </div>
                </div>
              </div>

              <div class='step-box' :class='{ active: model.tab === 1 }'>
                <div class='order-box'>2</div>
                <div class='info-box'>
                  <div class='subject-box'>2단계</div>
                  <div class='con-box'>질병정보 입력</div>
                </div>
              </div>

              <div class='step-box' :class='{ active: model.tab === 2 }'>
                <div class='order-box'>3</div>
                <div class='info-box'>
                  <div class='subject-box'>3단계</div>
                  <div class='con-box'>중증정보 입력</div>
                </div>
              </div>

              <div class='step-box' :class='{ active: model.tab === 3 }'>
                <div class='order-box'>4</div>
                <div class='info-box'>
                  <div class='subject-box'>4단계</div>
                  <div class='con-box'>출발지·요청내용 입력</div>
                </div>
              </div>
            </div>
          </article>

          <article class='tabs-group-list-layout'>
            <div class='tabs-box' v-show='model.tab === 0'>
              <div class='d-flex justify-content-end text-danger pb-2'>* 필수 입력 항목</div>

              <div class='d-flex'>
                <div class='table-view-box' style='width: 363px'>
                  <article class='table-form-layout1 h-100'>
                    <div class='form-head-box'></div>

                    <div class='form-body-box h-100'>
                      <div class='table-box h-100'>
                        <table class='h-100'>
                          <colgroup>
                            <col style='width: 363px' />
                          </colgroup>
                          <tbody>
                          <tr>
                            <th>역학조사서 업로드 (선택)</th>
                          </tr>
                          <tr>
                            <td>
                              <article class='modal-profile-layout1'>
                                <div class='profile-card-box flex-column mx-auto' style='width: 264px'>
                                  <div class='profile-view-box' style='width: 100%; height: 264px'>
                                    <img v-if="model.newPt.attcId === null || model.newPt.attcId === ''"
                                         src='@/assets/img/img-no-img.webp' class='no-img' />
                                    <img v-if="!(model.newPt.attcId === null || model.newPt.attcId === '')" class='has-img'
                                         @click='showImageLightBox' onerror="this.src='/img/img-no-img.webp'"
                                         :src="model.epidReportImage ? model.epidReportImage:'/img/img-no-img.webp'" />
                                    <a v-if="model.newPt.attcId !== null || model.newPt.attcId === ''" @click='openRemovePopup'
                                       class='remove-btn' role='button'>
                                      <img src='/img/common/ic_profile_remove.svg' alt='이미지' />
                                    </a>
                                    <vue-easy-lightbox
                                        :visible='model.visibleRef'
                                        :imgs='model.imgsRef'
                                        :index='model.indexRef'
                                        @hide='onHide'
                                    ></vue-easy-lightbox>
                                  </div>

                                  <div class='profile-upload-box'>
                                    <div class='upload-box'>
                                      <label
                                          class='btn btn-flex justify-content-center btn-primary py-0 px-0 h-30px w-80px certify-btn rounded-1 mt-2 btn-outline btn-outline-primary'
                                      >
                                        <input type='file' @change='uploadRpt' :value='model.reportFile' />
                                        업로드
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
                <div class='table-info-box'>
                  <article class='table-form-layout1'>
                    <div class='form-head-box'></div>

                    <div class='form-body-box'>
                      <form class='table-box'>
                        <table>
                          <colgroup>
                            <col style='width: 168px' />
                            <col style='width: auto' />
                            <col style='width: 168px' />
                            <col style='width: auto' />
                          </colgroup>
                          <tbody>
                          <tr>
                            <th>환자이름 <span class='text-primary'>*</span></th>
                            <td>
                              <div class='item-row-box'>
                                <div class='item-cell-box'>
                                  <div class='tbox'>
                                    <input type='text' v-model='model.newPt.ptNm' placeholder='환자이름 입력' />
                                  </div>
                                </div>
                              </div>
                              <div v-if='validateInputStep1(0)' class='item-cell-box pt-2 text-danger' >
                                * 환자 이름을 입력해 주세요.
                              </div>
                            </td>
                            <th>성별</th>
                            <td>{{ getGndr(model.newPt.rrno2) ? getGndr(model.newPt.rrno2) + '자' : '-' }}</td>
                          </tr>

                          <tr>
                            <th>주민등록번호 <span class='text-primary'>*</span></th>
                            <td>
                              <div class='item-row-box'>
                                <div class='item-cell-box'>
                                  <div class='tbox'>
                                    <input type='text' v-model='model.newPt.rrno1'
                                           @input='filterNumericInput(0)'
                                            maxlength='6'/>
                                  </div>
                                  <div class='unit-box mx-2 text-gray-600'>-</div>
                                  <div class='tbox' style='min-width: 20px'>
                                    <input
                                        type='text'
                                        @input='filterNumericInput(0)'
                                        v-model='model.newPt.rrno2'
                                        maxlength='1'
                                    />
                                  </div>
                                </div>
                              </div>
                              <div v-if='validateInputStep1(1) || validateInputStep1(2)'
                                   class='item-cell-box pt-2 text-danger'>
                                * 주민등록번호을 입력해 주세요.
                              </div>
                            </td>
                            <th>나이 (만)</th>
                            <td>
                              {{ getAge(model.newPt.rrno1, model.newPt.rrno2) ? getAge(model.newPt.rrno1, model.newPt.rrno2) + '세' : '-'}}
                            </td>
                          </tr>

                          <tr>
                            <th rowspan='3'>주소 <span class='text-primary'>*</span></th>
                            <td rowspan='3'>
                              <div class='item-row-box'>
                                <div class='item-cell-box full'>
                                  <div class='tbox full'>
                                    <input type='text' v-model='model.newPt.zip' readonly />
                                  </div>
                                  <a
                                    @click='openAddressFinder(0)'
                                    class='btn btn-flex justify-content-center btn-primary py-0 px-0 h-30px w-80px ms-3 certify-btn rounded-1'
                                    style='min-width: 80px'
                                  >주소검색</a>
                                </div>
                              </div>

                              <div class='item-row-box'>
                                <div class='item-cell-box full'>
                                  <div class='tbox full'>
                                    <input type='text' v-model='model.newPt.bascAddr' />
                                  </div>
                                  <div class='item-note-box flex-shrink-0 ms-2 text-black'></div>
                                </div>
                              </div>

                              <div class='item-row-box'>
                                <div class='item-cell-box full'>
                                  <div class='tbox full'>
                                    <input type='text' v-model='model.newPt.detlAddr' />
                                  </div>
                                  <div class='item-note-box flex-shrink-0 ms-2 text-black'></div>
                                </div>
                              </div>

                              <div v-if='validateInputStep1(3)' class='item-cell-box pt-2 text-danger'>
                                * 기본주소를 입력해 주세요.
                              </div>
                            </td>

                            <th>휴대전화번호</th>
                            <td>
                              <div class='item-cell-box full'>
                                <div class='tbox full'>
                                  <input type='text' v-model='model.newPt.mpno'
                                         @input='filterNumericInput(1)'
                                         maxlength='11' />
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>보호자 이름</th>
                            <td>
                              <div class='item-cell-box full'>
                                <div class='tbox full'>
                                  <input type='text' v-model='model.newPt.nokNm' />
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>전화번호</th>
                            <td>
                              <div class='item-cell-box full'>
                                <div class='tbox full'>
                                  <input type='text' v-model='model.newPt.telno'
                                         @input='filterNumericInput(1)'
                                         maxlength='11' />
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>사망여부 <span class='text-primary'>*</span></th>
                            <td>
                              <div class='item-row-box'>
                                <div class='item-cell-box full justify-content-between'>
                                  <article class='toggle-list-layout2'>
                                    <div class='toggle-list'>
                                      <label>
                                        <input type='radio' name='toggle1'
                                               value='N' v-model='model.newPt.dethYn' />
                                        <span class='txt'>생존</span>
                                      </label>

                                      <label>
                                        <input type='radio' name='toggle1'
                                               value='Y' v-model='model.newPt.dethYn' />
                                        <span class='txt'>사망</span>
                                      </label>
                                    </div>
                                  </article>
                                </div>
                              </div>
                              <div v-if='validateInputStep1(4)' class='item-cell-box pt-2 text-danger'>
                                * 사망여부를 선택해 주세요.
                              </div>
                            </td>

                            <th>직업</th>
                            <td>
                              <div class='item-cell-box full'>
                                <div class='tbox full'>
                                  <input type='text' v-model='model.newPt.job' />
                                </div>
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <th>국적 <span class='text-primary'>*</span></th>
                            <td>
                              <div class='item-row-box'>
                                <div class='item-cell-box full justify-content-between'>
                                  <article class='toggle-list-layout2'>
                                    <div class='toggle-list'>
                                      <label>
                                        <input type='radio' name='nation'
                                               value='NATI0001' v-model='model.newPt.natiCd' />
                                        <span class='txt'>대한민국</span>
                                      </label>

                                      <label>
                                        <input type='radio' name='nation'
                                               value='NATI0002' v-model='model.newPt.natiCd' />
                                        <span class='txt'>직접입력</span>
                                      </label>

                                      <label>
                                        <input type='radio' name='nation'
                                               value='NATI0003' v-model='model.newPt.natiCd' />
                                        <span class='txt'>알수없음</span>
                                      </label>
                                    </div>
                                  </article>
                                </div>
                                <div class='tbox' :class="{ 'pt-2': model.newPt.natiCd === 'NATI0002' }"
                                     style='width: 211px' v-show="model.newPt.natiCd === 'NATI0002'">
                                  <input
                                    type='text'
                                    placeholder='국가명 입력'
                                    v-model='model.newPt.natiNm'
                                    :readonly="model.newPt.natiCd !== 'NATI0002'"
                                    class='nation-input'
                                  />
                                </div>
                                <div
                                  v-if='validateInputStep1(5)'
                                  class='item-cell-box pt-2 text-danger' >
                                  * 국적을 입력해 주세요.
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

              <article class='modal-menu-layout1 pt-10'>
                <div class='modal-menu-list'>
                  <a @click='isExistPt' class='modal-menu-btn menu-primary'>다음</a>
                </div>
              </article>
            </div>

            <div class='tabs-box' v-show='model.tab === 1' style='display: none'>
              <div class='d-flex justify-content-end text-danger pb-2'>* 필수 입력 항목</div>

              <article class='table-form-layout1'>
                <div class='form-head-box'></div>

                <div class='form-body-box'>
                  <div class='table-box'>
                    <table>
                      <colgroup>
                        <col style='width: 168px' />
                        <col style='width: auto' />
                        <col style='width: 168px' />
                        <col style='width: auto' />
                      </colgroup>
                      <tbody>
                      <tr>
                        <th>담당보건소</th>
                        <td>
                          <div class='item-row-box'>
                            <div class='item-cell-box'>
                              <div class='sbox' style='width: 120px'>
                                <select v-model='model.medInstInfo.dstr1Cd'
                                        :disabled='model.selectPhcType !== "select"'>
                                  <option value='null' selected>시/도 선택</option>
                                  <option v-for='(item,i) in model.cmSido' :key='i' :value='item.cdId'>
                                    {{ item.cdNm }}
                                  </option>
                                </select>
                              </div>
                              <div class='sbox ms-2' style='width: 120px'>
                                <select v-model='model.medInstInfo.dstr2Cd' @change='getMedInst'
                                        :disabled='!model.medInstInfo.dstr1Cd || model.selectPhcType !== "select"'>
                                  <option value='null' selected>시/군/구 선택</option>
                                  <option v-for='(item,i) in model.cmGugun' :key='i' :value='item.cdId'>
                                    {{ item.cdNm }}
                                  </option>
                                </select>
                              </div>
                              <div v-if='model.selectPhcType' class='sbox ms-2' style='width: 150px'>
                                <select v-model='model.selectPhcType'>
                                  <option value='select'>보건소 선택</option>
                                  <option value='direct'>직접입력</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div v-show="model.selectPhcType === 'direct'" class='item-row-box'>
                            <div class='item-cell-box'>
                              <div class='tbox w-250px'>
                                <input type='text' placeholder='보건소명 직접 입력'
                                       v-model='model.dsInfo.rcptPhc' />
                              </div>
                            </div>
                          </div>
                          <div v-show="model.selectPhcType === 'select'" class='sbox item-row-box' style='width: 250px'>
                            <select v-model='model.dsInfo.rcptPhc'>
                              <option v-for='(item,i) in model.organMedi' :key='i' :value='item.instNm'>
                                {{ item.instNm }}
                              </option>
                            </select>
                          </div>
                        </td>
                        <th>코로나19 증상 및 증후</th>
                        <td>
                          <div class='textbox'>
                              <textarea
                                  style='height: 55px'
                                  class='py-2 px-4'
                                  v-model='model.dsInfo.cv19Symp'
                              ></textarea>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>질병명</th>
                        <td>
                          <div class='item-cell-box'>
                            <div class='tbox w-350px'>
                              <input
                                  type='text'
                                  v-model='model.dsInfo.diagNm'
                                  placeholder='질병명 입력'
                              />
                            </div>
                          </div>
                        </td>
                        <th>확진검사결과</th>
                        <td>
                          <div class='item-cell-box full'>
                            <div class='tbox full'>
                              <input
                                  type='text'
                                  placeholder='검사결과 입력 예) 양성'
                                  v-model='model.dsInfo.dfdgExamRslt'
                              />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>질병급</th>
                        <td>
                          <div class='item-cell-box'>
                            <div class='tbox w-350px'>
                              <input
                                  type='text'
                                  placeholder='질병급 입력'
                                  v-model='model.dsInfo.diagGrde'
                              />
                            </div>
                          </div>
                        </td>
                        <th>발병일 / 진단일 / 신고일</th>
                        <td>
                          <div class='item-cell-box'>
                            <div class='tbox' style='width: 110px'>
                              <input type='text' placeholder='YYYY-MM-DD'
                                  v-model='model.dsInfo.occrDt' />
                            </div>

                            <a class='btn btn-flex justify-content-center btn-primary py-0 px-0 h-30px w-80px ms-3 certify-btn rounded-1'
                                style='min-width: 80px; line-height: 1.2' @click='dsDtSame'>
                              전체동일
                            </a>

                            <div class='tbox ms-3' style='width: 110px'>
                              <input type='text' placeholder='YYYY-MM-DD'
                                  v-model='model.dsInfo.diagDt' />
                            </div>
                            <div class='tbox ms-3' style='width: 110px'>
                              <input type='text' placeholder='YYYY-MM-DD'
                                  v-model='model.dsInfo.rptDt' />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>환자등분류</th>
                        <td>
                          <div class='item-cell-box'>
                            <div class='tbox w-350px'>
                              <input
                                  type='text'
                                  placeholder='환자등분류 입력'
                                  v-model='model.dsInfo.ptCatg'
                              />
                            </div>
                          </div>
                        </td>
                        <th>비고</th>
                        <td>
                          <div class='item-cell-box full'>
                            <div class='tbox full'>
                              <input
                                  type='text'
                                  placeholder='PCR 등 검사방법 외'
                                  v-model='model.dsInfo.rmk'
                              />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>입원여부 <span class='text-primary'>*</span></th>
                        <td>
                          <div class='item-cell-box full justify-content-between'>
                            <article class='toggle-list-layout2'>
                              <div class='toggle-list'>
                                <label>
                                  <input
                                      type='radio'
                                      name='toggle2-1'
                                      value='입원'
                                      v-model='model.dsInfo.admsYn'
                                  />
                                  <span class='txt'>입원</span>
                                </label>

                                <label>
                                  <input
                                      type='radio'
                                      name='toggle2-1'
                                      value='외래'
                                      v-model='model.dsInfo.admsYn'
                                  />
                                  <span class='txt'>외래</span>
                                </label>

                                <label>
                                  <input
                                      type='radio'
                                      name='toggle2-1'
                                      value='재택'
                                      v-model='model.dsInfo.admsYn'
                                  />
                                  <span class='txt'>재택</span>
                                </label>

                                <label>
                                  <input
                                      type='radio'
                                      name='toggle2-1'
                                      value='기타'
                                      v-model='model.dsInfo.admsYn'
                                  />
                                  <span class='txt'>기타</span>
                                </label>
                              </div>
                            </article>

                            <div class='item-note-box'>* 입원여부 선택</div>
                          </div>
                        </td>
                        <th>요양기관 기호 / 이름</th>
                        <td>
                          <div class='item-cell-box full'>
                            <div class='tbox' style='min-width: 205px'>
                              <input
                                  type='text'
                                  placeholder='요양기관기호 입력'
                                  v-model='model.dsInfo.instId'
                              />
                            </div>

                            <div class='tbox full ms-3'>
                              <input
                                  type='text'
                                  placeholder='요양기관명 입력'
                                  v-model='model.dsInfo.instNm'
                              />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th rowspan='3'>요양기관 주소 <span class='text-primary'>*</span></th>
                        <td rowspan='3'>
                          <div class='item-row-box'>
                            <div class='item-cell-box full'>
                              <div class='tbox full'>
                                <input
                                    type='text'
                                    readonly
                                    v-model='model.dsInfo.instZip'
                                    placeholder='우편번호'
                                />
                              </div>
                              <a
                                  @click='openAddressFinder(1)'
                                  class='btn btn-flex justify-content-center btn-primary py-0 px-0 h-30px w-80px ms-3 certify-btn rounded-1'
                                  style='min-width: 80px'
                              >주소검색</a
                              >
                            </div>
                          </div>

                          <div class='item-row-box'>
                            <div class='item-cell-box full'>
                              <div class='tbox full'>
                                <input
                                    type='text'
                                    v-model='model.dsInfo.instAddr'
                                    placeholder='기본주소 입력'
                                />
                              </div>
                            </div>
                          </div>

                          <div class='item-row-box'>
                            <div class='item-cell-box full'>
                              <div class='tbox full'>
                                <input
                                    type='text'
                                    v-model='model.dsInfo.instDetlAddr'
                                    placeholder='상세주소 입력 (선택)'
                                />
                              </div>
                            </div>
                          </div>

<!--                          <div class='item-row-box'>-->
<!--                            <div class='item-cell-box'>-->
<!--                              <div class='item-note-box'>* 기본주소 입력</div>-->
<!--                            </div>-->
<!--                          </div>-->
                        </td>

                        <th>요양기관 전화번호</th>
                        <td>
                          <div class='item-cell-box full'>
                            <div class='tbox full'>
                              <input type='text' v-model='model.dsInfo.instTelno'
                                  placeholder='요양기관 전화번호 입력'
                              />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>진단의사 성명</th>
                        <td>
                          <div class='item-cell-box full'>
                            <div class='tbox full'>
                              <input type='text' v-model='model.dsInfo.diagDrNm'
                                  placeholder='진단의사 성명 입력' />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>신고기관장 성명</th>
                        <td>
                          <div class='item-cell-box full'>
                            <div class='tbox full'>
                              <input type='text' v-model='model.dsInfo.rptChfNm'
                                     placeholder='신고기관장 성명 입력' />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>기타 진단 이미지</th>
                        <td colspan='3'>
                          <article class='upload-form-layout1'>
                            <div class='upload-result-wrap'>
                              <div class='img-upload-result'>
                                <div class='img-list'>
                                  <div class='img-box' v-for='(item, idx) in model.imgUrl' :key='idx'>
                                    <img :src='item' alt='이미지' @click='showEsvyImageLightBox(item)' />
                                    <a class='remove-btn' @click='removeImage(idx)' role='button'>
                                      <img src='/img/common/ic_profile_remove.svg' alt='이미지' />
                                    </a>
                                  </div>
                                  <vue-easy-lightbox
                                    :visible='model.visibleRef'
                                    :imgs='model.imgsRef'
                                    :index='model.indexRef'
                                    @hide='onHide'
                                  ></vue-easy-lightbox>
                                </div>
                              </div>
                            </div>

                            <div class='upload-form-wrap' style='height: 70px'>
                              <div class='no-file-box'>
                                <label for='upload-image'>
                                  <div class='txt-box' role='button'>
                                    클릭해서 첨부 파일들 업로드
                                  </div>
                                </label>
                              </div>
                            </div>
                            <input type='file' id='upload-image' @change='onFileChange' hidden multiple accept='image/*'/>
                          </article>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </article>
              <article class='modal-menu-layout1 pt-10'>
                <div class='modal-menu-list'>
                  <router-link to='' @click='prevStep' class='modal-menu-btn menu-cancel'>이전
                  </router-link>
                  <router-link to='' @click='nextStep(1)' class='modal-menu-btn menu-primary'>다음
                  </router-link>
                </div>
              </article>
            </div>

            <div class='tabs-box' v-show='model.tab === 2' style='display: none'>
              <div class='d-flex justify-content-end text-danger pb-2'>* 필수 입력 항목</div>

              <article class='table-form-layout1'>
                <div class='form-head-box'></div>

                <div class='form-body-box'>
                  <form class='table-box'>
                    <table>
                      <colgroup>
                        <col style='width: 168px' />
                        <col style='width: 168px' />
                        <col style='width: auto' />
                        <col style='width: 168px' />
                        <col style='width: auto' />
                      </colgroup>
                      <tbody>
                      <tr>
                        <th>환자유형</th>
                        <td colspan='4'>
                          <div class='item-cell-box'>
                            <div class='cbox' :class="{'ms-4': idx > 0}"
                                 v-for='(item, idx) in model.ptTypeCd' :key='idx'>
                              <label>
                                <input
                                  type='checkbox'
                                  :value='item.cdId'
                                  v-model='model.svInfo.ptTypeCd'
                                /><i></i>
                                <span class='txt'>{{ item.cdNm }}</span>
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>기저질환</th>
                        <td colspan='4'>
                          <article class='cbox-list-layout'>
                            <div class='cbox-row'>
                              <div class='cbox'>
                                <label>
                                  <input
                                      type='checkbox'
                                      name='disease'
                                      value='UDDS0001'
                                      v-model='model.svInfo.undrDsesCd'
                                  /><i></i>
                                  <span class='txt'>고혈압</span>
                                </label>
                              </div>

                              <div class='cbox'>
                                <label>
                                  <input
                                      type='checkbox'
                                      name='disease'
                                      value='UDDS0002'
                                      v-model='model.svInfo.undrDsesCd'
                                  /><i></i>
                                  <span class='txt'>당뇨</span>
                                </label>
                              </div>

                              <div class='cbox'>
                                <label>
                                  <input
                                      type='checkbox'
                                      name='disease'
                                      value='UDDS0003'
                                      v-model='model.svInfo.undrDsesCd'
                                  /><i></i>
                                  <span class='txt'>고지혈증</span>
                                </label>
                              </div>

                              <div class='cbox'>
                                <label>
                                  <input
                                      type='checkbox'
                                      name='disease'
                                      value='UDDS0004'
                                      v-model='model.svInfo.undrDsesCd'
                                  /><i></i>
                                  <span class='txt'>심혈관</span>
                                </label>
                              </div>

                              <div class='cbox'>
                                <label>
                                  <input
                                      type='checkbox'
                                      name='disease'
                                      value='UDDS0005'
                                      v-model='model.svInfo.undrDsesCd'
                                  /><i></i>
                                  <span class='txt'>뇌혈관</span>
                                </label>
                              </div>
                            </div>

                            <div class='cbox-row'>
                              <div class='cbox'>
                                <label>
                                  <input
                                      type='checkbox'
                                      name='disease'
                                      value='UDDS0006'
                                      v-model='model.svInfo.undrDsesCd'
                                  /><i></i>
                                  <span class='txt'>암</span>
                                </label>
                              </div>

                              <div class='cbox'>
                                <label>
                                  <input
                                      type='checkbox'
                                      name='disease'
                                      value='UDDS0007'
                                      v-model='model.svInfo.undrDsesCd'
                                  /><i></i>
                                  <span class='txt'>만성폐질환</span>
                                </label>
                              </div>

                              <div class='cbox'>
                                <label>
                                  <input
                                      type='checkbox'
                                      name='disease'
                                      value='UDDS0008'
                                      v-model='model.svInfo.undrDsesCd'
                                  /><i></i>
                                  <span class='txt'>폐렴</span>
                                </label>
                              </div>

                              <div class='cbox'>
                                <label>
                                  <input
                                      type='checkbox'
                                      name='disease'
                                      value='UDDS0009'
                                      v-model='model.svInfo.undrDsesCd'
                                  /><i></i>
                                  <span class='txt'>신장질환</span>
                                </label>
                              </div>

                              <div class='cbox'>
                                <label>
                                  <input
                                      type='checkbox'
                                      name='disease'
                                      value='UDDS0010'
                                      v-model='model.svInfo.undrDsesCd'
                                  /><i></i>
                                  <span class='txt'>정신질환</span>
                                </label>
                              </div>
                            </div>

                            <div class='cbox-row'>
                              <div class='cbox'>
                                <label>
                                  <input
                                      type='checkbox'
                                      name='disease'
                                      value='UDDS0011'
                                      v-model='model.svInfo.undrDsesCd'
                                  /><i></i>
                                  <span class='txt'>결핵</span>
                                </label>
                              </div>

                              <div class='cbox'>
                                <label>
                                  <input
                                      type='checkbox'
                                      name='disease'
                                      value='UDDS0012'
                                      v-model='model.svInfo.undrDsesCd'
                                  /><i></i>
                                  <span class='txt'>천식 등 알레르기</span>
                                </label>
                              </div>

                              <div class='cbox'>
                                <label>
                                  <input
                                      type='checkbox'
                                      name='disease'
                                      value='UDDS0013'
                                      v-model='model.svInfo.undrDsesCd'
                                  /><i></i>
                                  <span class='txt'>면역력저하자</span>
                                </label>
                              </div>
                            </div>

                            <div class='cbox-row'>
                              <div class='d-inline-flex'>
                                <div class='cbox w-auto'>
                                  <label>
                                    <input
                                        type='checkbox'
                                        name='disease'
                                        value='UDDS0014'
                                        v-model='model.svInfo.undrDsesCd'
                                    /><i></i>
                                    <span class='txt'>기타</span>
                                  </label>
                                </div>

                                <div class='tbox d-inline-flex ms-4 w-300px'>
                                  <input
                                      type='text'
                                      placeholder='직접 입력'
                                      v-model='model.svInfo.undrDsesEtc'
                                  />
                                </div>
                              </div>
                            </div>
                          </article>
                        </td>
                      </tr>

                      <tr>
                        <th>요청 병상 유형 <span class='text-danger'>*</span></th>
                        <td colspan='4'>
                          <div class='item-cell-box full justify-content-between'>
                            <article class='toggle-list-layout2'>
                              <div class='toggle-list'>
                                <label>
                                  <input
                                      type='radio'
                                      value='BDTP0003'
                                      v-model='model.svInfo.reqBedTypeCd'
                                  />
                                  <span class='txt'>음압격리</span>
                                </label>

                                <label>
                                  <input
                                      type='radio'
                                      value='BDTP0002'
                                      v-model='model.svInfo.reqBedTypeCd'
                                  />
                                  <span class='txt'>일반격리</span>
                                </label>

                                <label>
                                  <input
                                      type='radio'
                                      value='BDTP0005'
                                      v-model='model.svInfo.reqBedTypeCd'
                                  />
                                  <span class='txt'>소아음압격리</span>
                                </label>

                                <label>
                                  <input
                                      type='radio'
                                      value='BDTP0004'
                                      v-model='model.svInfo.reqBedTypeCd'
                                  />
                                  <span class='txt'>소아일반격리</span>
                                </label>

                                <label>
                                  <input
                                      type='radio'
                                      value='BDTP0007'
                                      v-model='model.svInfo.reqBedTypeCd'
                                  />
                                  <span class='txt'>소아</span>
                                </label>

                                <label>
                                  <input
                                      type='radio'
                                      value='BDTP0006'
                                      v-model='model.svInfo.reqBedTypeCd'
                                  />
                                  <span class='txt'>일반</span>
                                </label>
                              </div>
                            </article>
                          </div>
                          <div v-if='validateInput(0)' class='item-cell-box pt-2 text-danger'>
                            * 요청 병상 유형을 선택해주세요
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>DNR 동의 여부 <span class='text-danger'>*</span></th>
                        <td colspan='4'>
                          <div class='item-cell-box full justify-content-between'>
                            <article class='toggle-list-layout2'>
                              <div class='toggle-list'>
                                <label>
                                  <input
                                      type='radio'
                                      name='toggle4-1'
                                      value='DNRA0001'
                                      v-model='model.svInfo.dnrAgreYn'
                                  />
                                  <span class='txt'>동의</span>
                                </label>

                                <label>
                                  <input
                                      type='radio'
                                      name='toggle4-1'
                                      value='DNRA0002'
                                      v-model='model.svInfo.dnrAgreYn'
                                  />
                                  <span class='txt'>비동의</span>
                                </label>

                                <label>
                                  <input
                                      type='radio'
                                      name='toggle4-1'
                                      value='DNRA0003'
                                      v-model='model.svInfo.dnrAgreYn'
                                  />
                                  <span class='txt'>해당없음</span>
                                </label>
                              </div>
                            </article>
                          </div>
                          <div v-if='validateInput(1)' class='item-cell-box pt-2 text-danger'>
                            * DNR 동의여부를 선택해주세요
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th rowspan='6'>중증도분류 <span class='text-danger'>*</span></th>
                        <td colspan='4'>
                          <div class='item-cell-box full justify-content-between'>
                            <article class='toggle-list-layout2'>
                              <div class='toggle-list'>
                                <label v-for='(item, idx) in model.svrtTypeCd' :key='idx'
                                       @click="model.svInfo.svrtIptTypeCd = 'SVIP0001'">
                                  <input
                                    type='radio'
                                    :value='item.cdId'
                                    v-model='model.svInfo.svrtTypeCd'
                                  />
                                  <span class='txt'>{{ item.cdNm }}</span>
                                </label>

<!--                                <label @click="model.svInfo.svrtTypeCd = ''">-->
<!--                                  <input-->
<!--                                      type='radio'-->
<!--                                      name='toggle5-1'-->
<!--                                      value='SVIP0002'-->
<!--                                      v-model='model.svInfo.svrtIptTypeCd'-->
<!--                                  />-->
<!--                                  <span class='txt'>생체정보AI분석</span>-->
<!--                                </label>-->
                              </div>
                            </article>
                          </div>
                          <div v-if='validateInput(2)' class='item-cell-box pt-2 text-danger'>
                            * 중증 정보를 선택해주세요
                          </div>
                        </td>
                      </tr>

<!--                      <tr v-show="model.svInfo.svrtIptTypeCd === 'SVIP0002'">-->
<!--                        <th>의식상태</th>-->
<!--                        <td>-->
<!--                          <div class='item-cell-box full justify-content-between'>-->
<!--                            <article class='toggle-list-layout2'>-->
<!--                              <div class='toggle-list'>-->
<!--                                <label>-->
<!--                                  <input-->
<!--                                      type='radio'-->
<!--                                      name='toggle3-6'-->
<!--                                      value='A'-->
<!--                                      v-model='bioAnlys.avpu'-->
<!--                                  />-->
<!--                                  <span class='txt'>명료</span>-->
<!--                                </label>-->

<!--                                <label>-->
<!--                                  <input-->
<!--                                      type='radio'-->
<!--                                      name='toggle3-6'-->
<!--                                      value='V'-->
<!--                                      v-model='bioAnlys.avpu'-->
<!--                                  />-->
<!--                                  <span class='txt'>비명료</span>-->
<!--                                </label>-->
<!--                              </div>-->
<!--                            </article>-->
<!--                          </div>-->
<!--                        </td>-->
<!--                        <th>산소 투여 여부</th>-->
<!--                        <td>-->
<!--                          <div class='item-cell-box full justify-content-between'>-->
<!--                            <article class='toggle-list-layout2'>-->
<!--                              <div class='toggle-list'>-->
<!--                                <label>-->
<!--                                  <input-->
<!--                                      type='radio'-->
<!--                                      name='toggle3-7'-->
<!--                                      value='Y'-->
<!--                                      v-model='bioAnlys.o2Apply'-->
<!--                                  />-->
<!--                                  <span class='txt'>투여</span>-->
<!--                                </label>-->

<!--                                <label>-->
<!--                                  <input-->
<!--                                      type='radio'-->
<!--                                      name='toggle3-7'-->
<!--                                      value='N'-->
<!--                                      v-model='bioAnlys.o2Apply'-->
<!--                                  />-->
<!--                                  <span class='txt'>비투여</span>-->
<!--                                </label>-->
<!--                              </div>-->
<!--                            </article>-->
<!--                          </div>-->
<!--                        </td>-->
<!--                      </tr>-->

<!--                      <tr v-show="svInfo.svrtIptTypeCd === 'SVIP0002'">-->
<!--                        <th>체온(℃)</th>-->
<!--                        <td>-->
<!--                          <div class='item-cell-box full'>-->
<!--                            <div class='tbox full'>-->
<!--                              <input type='number' placeholder='' v-model='bioAnlys.bdTemp' />-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </td>-->
<!--                        <th>맥박(회/분)</th>-->
<!--                        <td>-->
<!--                          <div class='item-cell-box full'>-->
<!--                            <div class='tbox full'>-->
<!--                              <input type='number' placeholder='' v-model='bioAnlys.pulse' />-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </td>-->
<!--                      </tr>-->

<!--                      <tr v-show="svInfo.svrtIptTypeCd === 'SVIP0002'">-->
<!--                        <th>분당호흡수(회/분)</th>-->
<!--                        <td>-->
<!--                          <div class='item-cell-box full'>-->
<!--                            <div class='tbox full'>-->
<!--                              <input type='number' placeholder='' v-model='bioAnlys.breath' />-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </td>-->
<!--                        <th>산소포화도(%)</th>-->
<!--                        <td>-->
<!--                          <div class='item-cell-box full'>-->
<!--                            <div class='tbox full'>-->
<!--                              <input type='number' placeholder='' v-model='bioAnlys.spo2' />-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </td>-->
<!--                      </tr>-->

<!--                      <tr v-show="svInfo.svrtIptTypeCd === 'SVIP0002'">-->
<!--                        <th>수축기혈압(mmHg)</th>-->
<!--                        <td>-->
<!--                          <div class='item-cell-box full'>-->
<!--                            <div class='tbox full'>-->
<!--                              <input type='number' placeholder='' v-model='bioAnlys.sbp' />-->
<!--                            </div>-->
<!--                          </div>-->
<!--                        </td>-->
<!--                        <td colspan='2'></td>-->
<!--                      </tr>-->

<!--                      <tr v-show="svInfo.svrtIptTypeCd === 'SVIP0002'">-->
<!--                        <td colspan='4'>-->
<!--                          <article class='analysis-layout1'>-->
<!--                            <div class='analysis-submit-box'>-->
<!--                              <a @click='regBioAnlys' class='analysis-submit-btn'>분석</a>-->
<!--                              <div class='submit-note-box'>-->
<!--                                * 생체정보를 모두 입력하신 경우 AI 분석이 가능합니다-->
<!--                              </div>-->
<!--                            </div>-->

<!--                            <div class='analysis-result-box'>-->
<!--                              <div class='result-box'>-->
<!--                                <div class='subject-box'>중증도 분석 결과 :</div>-->
<!--                                <div class='con-box text-primary'>중증</div>-->
<!--                              </div>-->

<!--                              <div class='result-box'>-->
<!--                                <div class='subject-box'>NEWs Score :</div>-->
<!--                                <div class='con-box text-primary'>20</div>-->
<!--                              </div>-->
<!--                            </div>-->

<!--                            <div class='analysis-note-box'>-->
<!--                              <div-->
<!--                                  class='pt-2'-->
<!--                                  style='font-size: 12px; letter-spacing: -0.05em; color: #696971'-->
<!--                              >-->
<!--                                * 중증도 분석 A.I 시스템의 분석 값 입니다-->
<!--                              </div>-->
<!--                            </div>-->
<!--                          </article>-->
<!--                        </td>-->
<!--                      </tr>-->
                      </tbody>
                    </table>
                  </form>
                </div>
              </article>

              <article class='modal-menu-layout1 pt-10'>
                <div class='modal-menu-list'>
                  <router-link to='' @click='prevStep' class='modal-menu-btn menu-cancel'
                  >이전
                  </router-link>
                  <router-link to='' @click='nextStep(2)' class='modal-menu-btn menu-primary'
                  >다음
                  </router-link>
                </div>
              </article>
            </div>

            <div class='tabs-box' v-show='model.tab === 3' style='display: none'>
              <div class='d-flex justify-content-end text-danger pb-2'>* 필수 입력 항목</div>

              <article class='table-form-layout1'>
                <div class='form-head-box'></div>

                <div class='form-body-box'>
                  <form class='table-box'>
                    <table>
                      <colgroup>
                        <col style='width: 168px' />
                        <col style='width: auto' />
                        <col style='width: 168px' />
                        <col style='width: auto' />
                      </colgroup>
                      <tbody>
                      <tr>
                        <th :rowspan="model.spInfo.dprtDstrTypeCd === 'DPTP0002' ? 2 : 1">
                          배정요청 지역 <span class='text-danger'>*</span>
                        </th>
                        <td :rowspan="model.spInfo.dprtDstrTypeCd === 'DPTP0002' ? 2 : 1">
                          <div class='item-cell-box full' style=''>
                            <div class='sbox w-350px'>
                              <select>
                                <option>대구광역시</option>
                              </select>
                            </div>
                          </div>
                          <div v-if='validateInput(3)' class='item-cell-box pt-2 text-danger' >
                            * 배정요청 지역을 선택해주세요
                          </div>
                        </td>

                        <th v-show="model.spInfo.dprtDstrTypeCd !== 'DPTP0002'" style=''>
                          보호자 1 연락처
                        </th>
                        <td v-show="model.spInfo.dprtDstrTypeCd !== 'DPTP0002'" style=''>
                          <div class='item-cell-box full'>
                            <div class='tbox full'>
                              <input
                                  type='text'
                                  placeholder='보호자1 연락처 입력'
                                  @input='filterNumericInput(2)'
                                  maxlength='11'
                                  v-model='model.spInfo.nok1Telno'
                              />
                            </div>
                          </div>
                        </td>

                        <th v-show="model.spInfo.dprtDstrTypeCd === 'DPTP0002'">
                          원내배정 여부 <span class='text-danger'>*</span>
                        </th>
                        <td v-show="model.spInfo.dprtDstrTypeCd === 'DPTP0002'">
                          <div class='item-cell-box full justify-content-between'>
                            <article class='toggle-list-layout2'>
                              <div class='toggle-list'>
                                <label>
                                  <input
                                    type='radio'
                                    value='N'
                                    v-model='model.spInfo.inhpAsgnYn'
                                  />
                                  <span class='txt'>전원요청</span>
                                </label>

                                <label>
                                  <input
                                    type='radio'
                                    value='Y'
                                    v-model='model.spInfo.inhpAsgnYn'
                                  />
                                  <span class='txt'>원내배정</span>
                                </label>
                              </div>
                            </article>
                          </div>
                          <div v-if='validateInput(4)' class='item-cell-box pt-2 text-danger'>
                            * 원내배정 여부를 선택해주세요
                          </div>
                        </td>
                      </tr>
                      <tr v-if="model.spInfo.dprtDstrTypeCd === 'DPTP0002'">
                        <!-- 출발지 병원 -->
                        <th>진료과</th>
                        <td>
                          <div class='item-cell-box full'>
                            <div class='tbox full'>
                              <input
                                  type='text'
                                  placeholder='진료과 입력'
                                  v-model='model.spInfo.deptNm'
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th :rowspan="model.spInfo.dprtDstrTypeCd === 'DPTP0002' ? 2 : 1">
                          환자 출발지<span class='text-danger'>*</span>
                        </th>
                        <td :rowspan="model.spInfo.dprtDstrTypeCd === 'DPTP0002' ? 2 : 1">
                          <div class='item-cell-box full justify-content-between'>
                            <article class='toggle-list-layout2'>
                              <div class='toggle-list'>
                                <label @click='setSpAddr(0)'>
                                  <input
                                      type='radio'
                                      value='DPTP0001'
                                      v-model='model.spInfo.dprtDstrTypeCd'
                                  />
                                  <span class='txt'>자택</span>
                                </label>

                                <label @click='setSpAddr(1)'>
                                  <input
                                      type='radio'
                                      value='DPTP0002'
                                      v-model='model.spInfo.dprtDstrTypeCd'
                                  />
                                  <span class='txt'>병원</span>
                                </label>

                                <label>
                                  <input
                                      type='radio'
                                      value='DPTP0003'
                                      v-model='model.spInfo.dprtDstrTypeCd'
                                  />
                                  <span class='txt'>기타지역</span>
                                </label>
                              </div>
                            </article>
                          </div>
                          <div v-if='validateInput(5)' class='item-cell-box pt-2 text-danger'>
                            * 환자 출발지 유형을 선택해주세요
                          </div>
                        </td>
                        <th v-show="model.spInfo.dprtDstrTypeCd !== 'DPTP0002'">보호자 2 연락처</th>
                        <td v-show="model.spInfo.dprtDstrTypeCd !== 'DPTP0002'">
                          <div class='item-cell-box full'>
                            <div class='tbox full'>
                              <input
                                  type='text'
                                  placeholder='보호자 2 연락처 입력'
                                  @input='filterNumericInput(2)'
                                  maxlength='11'
                                  v-model='model.spInfo.nok2Telno'
                              />
                            </div>
                          </div>
                        </td>
                        <!-- 출발지 병원 -->
                        <th v-show="model.spInfo.dprtDstrTypeCd === 'DPTP0002'">담당의</th>
                        <td v-show="model.spInfo.dprtDstrTypeCd === 'DPTP0002'">
                          <div class='item-cell-box full'>
                            <div class='tbox full'>
                              <input
                                  type='text'
                                  placeholder='담당의 이름 입력'
                                  v-model='model.spInfo.spclNm'
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <!-- 출발지 병원 -->
                      <tr v-if="model.spInfo.dprtDstrTypeCd === 'DPTP0002'">
                        <th>전화번호</th>
                        <td>
                          <div class='item-cell-box full'>
                            <div class='tbox full'>
                              <input
                                  type='text'
                                  placeholder='연락 전화번호 입력'
                                  @input='filterNumericInput(2)'
                                  maxlength='11'
                                  v-model='model.spInfo.chrgTelno'
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>출발지 주소</th>
                        <td>
                          <div class='item-row-box'>
                            <div class='item-cell-box full'>
                              <div class='tbox full'>
                                <input
                                    type='text'
                                    v-model='model.spInfo.dprtDstrZip'
                                    readonly
                                    placeholder='우편번호'
                                />
                              </div>
                              <a
                                  @click='openAddressFinder(2)'
                                  class='btn btn-flex justify-content-center btn-primary py-0 px-0 h-30px w-80px ms-3 certify-btn rounded-1'
                                  style='min-width: 80px'
                              >주소검색</a>
                            </div>
                          </div>

                          <div class='item-row-box'>
                            <div class='item-cell-box full'>
                              <div class='tbox full'>
                                <input
                                    type='text'
                                    placeholder='기본주소 입력'
                                    v-model='model.spInfo.dprtDstrBascAddr'
                                    readonly
                                />
                              </div>
                            </div>
                          </div>

                          <div class='item-row-box'>
                            <div class='item-cell-box full'>
                              <div class='tbox full'>
                                <input
                                    type='text'
                                    placeholder='상세주소 입력 (선택)'
                                    v-model='model.spInfo.dprtDstrDetlAddr'
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <th>요청 메시지</th>
                        <td>
                          <div class='item-cell-box full'>
                            <div class='textbox full'>
                                <textarea
                                    style='height: 85px'
                                    class='py-2 px-4'
                                    v-model='model.spInfo.msg'
                                ></textarea>
                            </div>
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </article>
              <article class='modal-menu-layout1 pt-10'>
                <div class='modal-menu-list'>
                  <router-link to='' @click='prevStep' class='modal-menu-btn menu-cancel'
                  >이전
                  </router-link>

                  <router-link to='' @click='uploadEsvyImg' class='modal-menu-btn menu-primary'
                  >병상요청완료
                  </router-link>
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

  <!-- TODO 단계별로 컴포넌트 분리  -->
  <SbasAlert :is-alert='model.isAlert' :err-msg='model.errMsg' :cnc-btn='false'
             @confirm-alert='closeModal' />

  <SbasAlert :is-alert='model.confirmAlert' :err-msg='model.errMsg'
             @confirm-alert='closePopup' />

  <SbasAlert :is-alert='model.epidConfirmAlert' :err-msg='model.errMsg' :cnc-btn='true'
             @alertClose='closePopup' @confirm-alert='removeRpt' />

  <!--환자정보 존재 -->
  <exist-patnt-modal v-if='model.openExistPtModal && model.existPt'
                     :exist-pt='model.existPt' :new-pt='model.newPt'
                     @closePopup='closePopup' @closeExistPt='closeExistPtModal' />

</template>

<script setup>
import { defineEmits, defineProps, onMounted, reactive, watch } from 'vue'
import CloseButton from '@/components/common/CloseButton.vue'
import { getAge, getTelno, getGndr } from '@/util/ui'
import { API_PROD } from '@/util/constantURL'
import { axios_cstm, isLoading } from '@/util/axios_cstm'
import { useStore } from 'vuex'
import SbasAlert from '@/components/common/SbasAlert.vue'
import ExistPatntModal from '@/components/user/modal/ExistPatntModal.vue'
import axios from 'axios'
import { registerNewPt } from '@/store/modules/patnt'

const props = defineProps({
  ptId: null,
})
const emits = defineEmits(['closePatntRequest', 'closeDetailModal'])
const store = useStore()

const model = reactive({
  tab: 0,
  epidReportImage: null,
  visibleRef: false,
  imgsRef: '',
  indexRef: 0,
  newPt: {
    ptNm: null, gndr: null, rrno1: null, rrno2: null,
    dethYn: null, natiCd: null, natiNm: null,
    dstr1Cd: null, dstr2Cd: null, telno: null, picaVer: null,
    nokNm: null, mpno: null, job: null, attcId: null,
    bascAddr: null, detlAddr: null, zip: null,
    undrDsesCd: [], undrDsesEtc: null,
  },
  rptInfo: null,
  reportFile: null,
  ptId: '',
  existPt: null,
  openExistPtModal: false,
  selectPhcType: 'select',
  medInstInfo: {
    dstr1Cd: null,
    dstr2Cd: null,
  },
  ptTypeCd: store.getters['common/getPatientType'],
  svrtTypeCd: store.getters['common/getSeverityType'],
  cmSido: store.getters['admin/getCmSido'],
  cmGugun: null,
  organMedi: null,
  dsInfo: {
    ptId: props.ptId, rcptPhc: null,
    diagNm: null, diagGrde: null, cv19Symp: null,
    occrDt: null, diagDt: null, rptDt: null,
    dfdgExamRslt: null, ptCatg: null, admsYn: null, rmk: null,
    instNm: null, instId: null, instTelno: null, instZip: null,
    instBascAddr: null, instDetlAddr: null, instAddr: null,
    diagDrNm: null, rptChfNm: null, diagAttcId: null, esvyAttcId: null,
  },
  svInfo: {
    ptId: props.ptId,
    ptTypeCd: [],
    undrDsesCd: [],
    reqBedTypeCd: null,
    dnrAgreYn: null,
    svrtIptTypeCd: 'SVIP0001',
    svrtTypeCd: null,
    undrDsesEtc: null,
  },
  spInfo: {
    ptId: props.ptId,
    dprtDstrTypeCd: null,
    dprtDstrBascAddr: null,
    dprtDstrDetlAddr: null,
    dprtDstrZip: null,
    nok1Telno: null,
    nok2Telno: null,
    inhpAsgnYn: 'N',
    reqDstr1Cd: '27',
    reqDstr2Cd: null,
    deptNm: null,
    chrgTelno: null,
    spclNm: null,
    msg: null,
  },
  isAlert: false,
  confirmAlert: false,
  epidConfirmAlert: false,
  errMsg: '',
  showErrorMsg: false,
  diagImgFiles: [],
  imgUrl: [],
})

onMounted(() => {
  if (props.ptId) {
    getBasicInfo(props.ptId)
  }
  store.dispatch('admin/getSido')
})

watch(() => model.medInstInfo.dstr1Cd, async () => {
  if (model.medInstInfo.dstr1Cd) {
    await store.dispatch('admin/getGuGun', model.medInstInfo.dstr1Cd)
  }
})

watch(() => store.getters['admin/getGuGun'],
  (newGuGun) => {
    model.cmGugun = newGuGun
  }
)

function getBasicInfo(ptId) {
  const url = `${API_PROD}/api/v1/private/patient/basicinfo/${ptId}`
  axios_cstm()
    .get(url)
    .then((response) => {
      const data = response.data
      if (data.code === '00') {
        model.newPt = data.result
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

function getMedInst() {
  let data = model.medInstInfo
  data['instTypeCd'] = 'ORGN0003'
  const url = `${API_PROD}/api/v1/public/organ/codes`

  axios_cstm().get(url, { params: data })
    .then((response) => {
      if (response.data.code === '00') {
        model.organMedi = response.data.result.items
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

function uploadRpt(event) {
  const fileInput = event.target
  const file = fileInput.files[0]

  const formData = new FormData()
  formData.append('param1', 'epidreport')
  formData.append('param2', file)

  const token = sessionStorage.getItem('userToken')
  const url = `${API_PROD}/api/v1/private/patient/upldepidreport`
  isLoading.value = true
  axios
    .post(url, formData, {
      headers: { Authorization: `Bearer ${token}` }
    }).then((response) => {
      const data = response.data
      if (data.code === '00') {
        //역조서 이미지 미리보기 만들기
        const reader = new FileReader()
        reader.onload = (e) => {
          model.epidReportImage = e.target.result
        }
        reader.readAsDataURL(file)

        model.errMsg =
          '역학조사서 파일 기반으로\n환자정보를 자동입력 하였습니다.\n내용을 확인해주세요.'
        model.confirmAlert = true

        setPatientInfo(data.result)
        setDsInfo(data.result)
      }
    }).catch((error) => {
      console.log(error)
    }).finally(() => {
      isLoading.value = false
    })
}

function setPatientInfo(result) {
  model.newPt.ptNm = result.ptNm
  model.newPt.rrno1 = result.rrno1
  model.newPt.rrno2 = result.rrno2
  model.newPt.gndr = result.gndr
  model.newPt.natiCd = 'NATI0001'
  model.newPt.natiNm = result.natiNm
  model.newPt.telno = result.telno
  model.newPt.dstr1Cd = result.dstr1Cd
  model.newPt.dstr2Cd = result.dstr2Cd
  model.newPt.bascAddr = result.baseAddr
  model.newPt.detlAddr = result.dtlAddr
  model.newPt.zip = result.zip
  model.newPt.mpno = result.mpno
  model.newPt.nokNm = result.nokNm
  model.newPt.job = result.job
  model.newPt.attcId = result.attcId
  model.newPt.dethYn = result.dethYn === '생존' ? 'N' : 'Y'
}

function setDsInfo(result) {
  model.dsInfo.rcptPhc = result.rcptPhc
  model.dsInfo.diagNm = result.diagNm
  model.dsInfo.diagGrde = result.diagGrde
  model.dsInfo.cv19Symp = result.cv19Symp
  model.dsInfo.occrDt = result.occrDt
  model.dsInfo.diagDt = result.diagDt
  model.dsInfo.rptDt = result.rptDt
  model.dsInfo.dfdgExamRslt = result.dfdgExamRslt
  model.dsInfo.ptCatg = result.ptCatg
  model.dsInfo.admsYn = result.admsYn
  model.dsInfo.rptType = result.rptType
  model.dsInfo.rmk = result.rmk
  model.dsInfo.instNm = result.instNm
  model.dsInfo.instId = result.instId
  model.dsInfo.instTelno = result.instTelno
  model.dsInfo.instAddr = result.instAddr
  model.dsInfo.diagDrNm = result.diagDrNm
  model.dsInfo.rptChfNm = result.rptChfNm
}

function openRemovePopup() {
  model.epidConfirmAlert = true
  model.errMsg = '역학조사서를 삭제하시겠습니까?'
}

function removeRpt() {
  const url = `${API_PROD}/api/v1/private/patient/delepidreport/${model.newPt.attcId}`
  axios_cstm().post(url)
    .then((response) => {
      if (response.data.code === '00') {
        setPatientInfo(null)
        setDsInfo(null)
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

function isExistPt() {
  if (validateFormStep1()) {
    const url = `${API_PROD}/api/v1/private/patient/exist`
    const request = model.newPt
    model.newPt.gndr = getGndr(model.newPt.rrno2)
    axios_cstm().post(url, request)
      .then((response) => {
        const data = response.data
        if (data.code === '00') {
          if (data.result.isExist) {
            model.openExistPtModal = true
            model.existPt = data.result.items
            model.dsInfo.ptId = data.result.items.ptId
            model.svInfo.ptId = data.result.items.ptId
            model.spInfo.ptId = data.result.items.ptId
            getEsvyInfo()
          } else {
            register()
          }
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

function register() {
  registerNewPt(model.newPt, () => {
    model.errMsg = '환자 정보가\n등록되었습니다.'
    model.dsInfo.ptId = data.result
    model.svInfo.ptId = data.result
    model.spInfo.ptId = data.result
    model.confirmAlert = true
    model.tab = model.tab + 1
  })
}

function saveInfo() {
  let data = model.dsInfo
  const url = `${API_PROD}/api/v1/private/patient/regdisesinfo`
  axios_cstm().post(url, data)
    .then((response) => {
      if (response.data.code === '00') {
        bedRequest()
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

function bedRequest() {
  let data = {
    svrInfo: { ...model.svInfo,
      ptTypeCd: model.svInfo.ptTypeCd.length > 0 ? model.svInfo.ptTypeCd.join(';') : null,
      undrDsesCd: model.svInfo.undrDsesCd.length > 0 ? model.svInfo.undrDsesCd.join(';') : null,
    },
    dprtInfo: model.spInfo,
  }
  if (data.svrInfo.ptTypeCd.length === 0) {
    data.svrInfo.ptTypeCd = null
  }
  const url = `${API_PROD}/api/v1/private/patient/bedassignreq`
  axios_cstm().post(url, data)
    .then((response) => {
      if (response.data.code === '00') {
        model.isAlert = true
        model.errMsg = "병상요청이 완료되었습니다."
        closeAll()
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

function nextStep(idx) {
  if (idx === 2) {
    if(validateFormStep3()) {
      model.tab = model.tab + 1
    }
  } else {
    model.tab = model.tab + 1
  }
}

function prevStep() {
  model.tab = model.tab - 1
}

function showImageLightBox() {
  model.imgsRef = model.epidReportImage
  model.visibleRef = true
}

function onHide() {
  model.visibleRef = false
}

function closeModal() {
  emits('closePatntRequest')
}

function closeAll() {
  emits('closePatntRequest')
  emits('closeDetailModal')
}

function onFileChange(event) {
  console.log('업로드 이벤트', event.target.files)
  const selectedFiles = Array.from(event.target.files)

  // 이미지 파일만 필터링
  const imageFiles = selectedFiles.filter(file => file.type.startsWith('image/'))
  if (imageFiles.length < selectedFiles.length) {
    model.confirmAlert = true
    model.errMsg = '이미지 파일만 업로드 가능합니다.'
  }

  // 업로드할 이미지의 총 개수가 5개를 넘지 않도록 제어
  const totalFiles = imageFiles.length + model.diagImgFiles.length
  if (totalFiles > 5) {
    model.confirmAlert = true
    model.errMsg = '이미지 파일은 최대 5개까지 업로드 가능합니다.'
  }

  // 이미지 파일들을 배열에 추가 (최대 5개까지만)
  imageFiles.forEach(file => {
    if (model.diagImgFiles.length < 5) {  // 파일이 5개 이하일 때만 추가
      model.diagImgFiles.push(file)

      // 이미지 미리보기 생성
      const reader = new FileReader()
      reader.onload = function(e) {
        // 이미지 미리보기 URL을 model에 추가
        model.imgUrl.push(e.target.result)
      }
      reader.readAsDataURL(file) // 파일을 읽어서 Data URL로 변환
    }
  })
}

function uploadEsvyImg() {
  if (validateFormStep4()) {
    const formData = new FormData()
    formData.append('param1', 'esvyImage')
    model.diagImgFiles.forEach(file => {
      formData.append('param2', file)
    })

    const url = `${API_PROD}/api/v1/private/common/upload`
    const headers = {}
    const token = sessionStorage.getItem('userToken')
    headers.Authorization = `Bearer ${token}`
    isLoading.value = true
    if (model.diagImgFiles.length > 0) {
      axios({
        method: 'post',
        url: url,
        data: formData,
        headers: headers,
      }).then((response) => {
        const data = response.data
        if (data.code === '00') {
          model.dsInfo.diagAttcId = data.result.attcId.join(';')
          saveInfo()
        }
      }).catch((e) => {
        console.log(e)
      }).finally(() => {
        isLoading.value = false
      })
    } else {
      saveInfo()
    }
  }
}

function getEsvyInfo() {
  const ptId = props.ptId
  if (ptId) {
    const url = `${API_PROD}/api/v1/private/patient/esvyinfo/${ptId}`
    axios_cstm().get(url)
      .then((response) => {
        const data = response.data
        if (data.code === '00' && data.result !== null) {
          model.dsInfo = data.result
          if (model.dsInfo.diagAttcId !== null || model.dsInfo.diagAttcId !== '') {
            model.dsInfo.diagAttcId.split(';').forEach(attcId => {
              readImage(attcId)
            })
          }
        }
      })
  }
}

function readImage(attcId) {
  const url = `${API_PROD}/api/v1/private/common/image/${attcId}`
  axios({
    method: 'get',
    url: url,
    responseType: 'arraybuffer'
  }).then((response) => {
    const blob = new Blob([response.data], { type: 'image/jpeg' })
    const file = new File([blob], `image_${attcId}.jpg`, { type: 'image/jpeg' })
    model.imgUrl.push(URL.createObjectURL(blob))
    model.diagImgFiles.push(file)
  })
}

function showEsvyImageLightBox(image) {
  model.imgsRef = image
  model.visibleRef = true
}

function removeImage(index) {
  model.imgUrl.splice(index, 1)
  model.diagImgFiles.splice(index, 1)
}

function openAddressFinder(idx) {
  new daum.Postcode({
    oncomplete: function(data) {
      if (idx === 0) {
        model.newPt.zip = data.zonecode
        model.newPt.bascAddr = data.address
      } else if (idx === 1) {
        model.dsInfo.instZip = data.zonecode
        model.dsInfo.instBascAddr = data.address
        model.dsInfo.instAddr = data.address
      } else if (idx === 2) {
        model.spInfo.dprtDstrZip = data.zonecode
        model.spInfo.dprtDstrBascAddr = data.address
      }
    }
  }).open()
}

function dsDtSame() {
  model.dsInfo.diagDt = model.dsInfo.occrDt
  model.dsInfo.rptDt = model.dsInfo.occrDt
}

function setSpAddr(idx) {
  if (idx === 0) {
    /* 자택 주소*/
    model.spInfo.dprtDstrZip = model.newPt.zip
    model.spInfo.dprtDstrBascAddr = model.newPt.bascAddr
    model.spInfo.dprtDstrDetlAddr = model.newPt.detlAddr
  } else if (idx === 1) {
    /*병원 주소 */
    model.spInfo.dprtDstrZip = model.dsInfo.instZip
    model.spInfo.dprtDstrBascAddr = model.dsInfo.instAddr
    model.spInfo.dprtDstrDetlAddr = model.dsInfo.instDetlAddr
  }
}

function filterNumericInput(idx) {
  if (idx === 0) {
    model.newPt.rrno1 = model.newPt.rrno1.replace(/[^0-9]/g, '')
    model.newPt.rrno2 = model.newPt.rrno2.replace(/[^0-9]/g, '')
  } else if (idx === 1) {
    model.newPt.mpno = model.newPt.mpno.replace(/[^0-9]/g, '')
    model.newPt.telno = model.newPt.telno.replace(/[^0-9]/g, '')
  } else if (idx === 2) {
    model.spInfo.nok1Telno = model.spInfo.nok1Telno.replace(/[^0-9]/g, '')
    model.spInfo.nok2Telno = model.spInfo.nok2Telno.replace(/[^0-9]/g, '')
    model.spInfo.chrgTelno = model.spInfo.chrgTelno.replace(/[^0-9]/g, '')
  }
}

function validateInput(idx) {
  if (idx === 0) {
    return (model.svInfo.reqBedTypeCd === null || model.svInfo.reqBedTypeCd === '') && model.showErrorMsg
  } else if (idx === 1) {
    return (model.svInfo.dnrAgreYn === null || model.svInfo.dnrAgreYn === '') && model.showErrorMsg
  } else if (idx === 2) {
    return (model.svInfo.svrtTypeCd === null || model.svInfo.svrtTypeCd === '') && model.showErrorMsg
  } else if (idx === 3) {
    return (model.spInfo.reqDstr1Cd === null || model.spInfo.reqDstr1Cd === '') && model.showErrorMsg
  } else if (idx === 4) {
    return (model.spInfo.inhpAsgnYn === null || model.spInfo.inhpAsgnYn === '') && model.showErrorMsg
  } else if (idx === 5) {
    return (model.spInfo.dprtDstrTypeCd === null || model.spInfo.dprtDstrTypeCd === '') && model.showErrorMsg
  }
}

function validateInputStep1(idx) {
  if (idx === 0) {
    return (model.newPt.ptNm === null || model.newPt.ptNm === '') && model.showErrorMsg
  } else if (idx === 1) {
    return (model.newPt.rrno1 === null || model.newPt.rrno1 === '') && model.showErrorMsg
  } else if (idx === 2) {
    return (model.newPt.rrno2 === null || model.newPt.rrno2 === '') && model.showErrorMsg
  } else if (idx === 3) {
    return (model.newPt.bascAddr === null || model.newPt.bascAddr === '') && model.showErrorMsg
  } else if (idx === 4) {
    return (model.newPt.dethYn === null || model.newPt.dethYn === '') && model.showErrorMsg
  } else if (idx === 5) {
    return (model.newPt.natiCd === null || model.newPt.natiCd === '') && model.showErrorMsg
  }
}

function validateFormStep1() {
  const data = model.newPt
  const requiredFields = {
    ptNm: { idx: 0 },
    rrno1: { idx: 1 },
    rrno2: { idx: 2 },
    bascAddr: { idx: 3 },
    dethYn: { idx: 4 },
    natiCd: { idx: 5 },
  }

  for (const field in requiredFields) {
    let showErrorMsg = false
    if (!data[field]) {
      showErrorMsg = true
      model.showErrorMsg = showErrorMsg
      return false
    }
  }
  return true
}

function validateFormStep3() {
  const data = model.svInfo
  const requiredFields = {
    reqBedTypeCd: { idx: 0 },
    dnrAgreYn: { idx: 1 },
    svrtTypeCd: { idx: 2 },
  }

  for (const field in requiredFields) {
    let showErrorMsg = false
    if (!data[field]) {
      showErrorMsg = true
      model.showErrorMsg = showErrorMsg
      return false
    }
  }
  return true
}

function validateFormStep4() {
  const data = model.spInfo
  const requiredFields = {
    reqDstr1Cd: { idx: 0 },
    inhpAsgnYn: { idx: 1 },
    dprtDstrTypeCd: { idx: 2 },
  }

  for (const field in requiredFields) {
    let showErrorMsg = false
    if (!data[field]) {
      showErrorMsg = true
      model.showErrorMsg = showErrorMsg
      return false
    }
  }
  return true
}

function closeExistPtModal() {
  model.openExistPtModal = false
  model.tab = model.tab + 1
}

function closePopup() {
  model.confirmAlert = false
  model.openExistPtModal = false
  model.epidConfirmAlert = false
}

</script>

<style scoped>

.modal {
  --bs-modal-width: 98%;
  display: block;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

</style>