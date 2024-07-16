<template>
  <section class="cntc-activity">
    <div class="activity-head-box">
      <div class="head-top-box">
        <article class="tabs-list-layout1">
          <div class="tabs-list full d-none">
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
                <div class="subject-box">최근활동</div>
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
              <ul class="scroll-body-box">
                <li v-for='(item, idx) in props.historyList' :key='idx'>
                  <a href="javascript:void(0)" class="item-box state-finish" role="button">
                    <div class="info-box">
                      <div class="state-box">
                        <div class="state-txt type-finish">{{ model.bedStatCd.find(code => code.cdId === item['activityDetail']).cdNm }}</div>
                      </div>

                      <div class="user-box">
                        <div class="subject-box"><b>{{ item['ptNm'] }}</b>
                          &nbsp;&nbsp;({{ item['gndr'] }}/{{ item['age'] }}세/{{ item['dstr1CdNm'] }} {{ item['dstr2CdNm'] }})</div>
<!--                        <div class="con-box">#투석 #중증 #고혈압</div>-->
                      </div>
                    </div>

                    <div class="date-box">{{ getTLDt(item['rgstDttm'], 2) }}</div>
                  </a>
                </li>
<!--                <li>-->
<!--                  <a href="javascript:void(0)" class="item-box state-finish">-->
<!--                    <div class="info-box">-->
<!--                      <div class="state-box">-->
<!--                        <div class="state-txt type-finish">승인대기</div>-->
<!--                      </div>-->

<!--                      <div class="user-box">-->
<!--                        <div class="subject-box"><b>임*선</b>&nbsp;&nbsp;(여/23세/서울특별시 송파구)</div>-->
<!--                        <div class="con-box">#준중증 #임산부</div>-->
<!--                      </div>-->
<!--                    </div>-->

<!--                    <div class="date-box">2023년 3월 1일 13시 43분</div>-->
<!--                  </a>-->
<!--                </li>-->
              </ul>
            </div>
          </article>
        </div>

        <div class="tabs-box" data-tabs="tabs2" style="display: none">
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
                    <th>아이디</th>
                    <td>
                      <div class="tbox">
                        <input type="text" readonly value="kpga@khospital.com" />
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
                        <a href="javascript:phoneChange()" class="btn d-flex small type-1"
                          >변경하기</a
                        >
                      </article>
                    </td>
                  </tr>

                  <tr>
                    <th>소셜로그인</th>
                    <td>
                      <a href="#none" class="social-btn type-kakao">
                        <i
                          style="background: url('/img/common/ic_social_kakao.svg') no-repeat center / cover;)"
                        ></i>
                        <span class="txt">카카오 인증 연동</span>
                      </a>

                      <a href="#none" class="social-btn type-kakao">
                        <i
                          style="background: url('/img/common/ic_social_kakao.svg') no-repeat center / cover;)"
                        ></i>
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
                        <col style="width: 100px" />
                        <col style="width: 150px" />
                        <col style="width: 400px" />
                        <col style="width: 200px" />
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
                        <col style="width: 100px" />
                        <col style="width: 150px" />
                        <col style="width: 400px" />
                        <col style="width: 200px" />
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
                        <col style="width: 100px" />
                        <col style="width: 150px" />
                        <col style="width: 400px" />
                        <col style="width: 200px" />
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
                            <div class="web-method-box">
                              <span class="web-method-label">GET</span
                              ><span class="web-method-url">/api/v1/hospitals</span>
                            </div>
                          </td>
                          <td>2023-07-01</td>
                        </tr>

                        <tr>
                          <td>7</td>
                          <td>300</td>
                          <td>
                            <div class="web-method-box">
                              <span class="web-method-label">POST</span
                              ><span class="web-method-url">/api/v1/hospitals</span>
                            </div>
                          </td>
                          <td>2023-07-01</td>
                        </tr>

                        <tr>
                          <td>7</td>
                          <td>403</td>
                          <td>
                            <div class="web-method-box">
                              <span class="web-method-label">GET</span
                              ><span class="web-method-url">/api/v1/hospitals</span>
                            </div>
                          </td>
                          <td>2023-07-01</td>
                        </tr>

                        <tr>
                          <td>7</td>
                          <td>200</td>
                          <td>
                            <div class="web-method-box">
                              <span class="web-method-label">GET</span
                              ><span class="web-method-url">/api/v1/hospitals</span>
                            </div>
                          </td>
                          <td>2023-07-01</td>
                        </tr>

                        <tr>
                          <td>7</td>
                          <td>200</td>
                          <td>
                            <div class="web-method-box">
                              <span class="web-method-label">GET</span
                              ><span class="web-method-url">/api/v1/hospitals</span>
                            </div>
                          </td>
                          <td>2023-07-01</td>
                        </tr>

                        <tr>
                          <td>7</td>
                          <td>200</td>
                          <td>
                            <div class="web-method-box">
                              <span class="web-method-label">GET</span
                              ><span class="web-method-url">/api/v1/hospitals</span>
                            </div>
                          </td>
                          <td>2023-07-01</td>
                        </tr>

                        <tr>
                          <td>7</td>
                          <td>200</td>
                          <td>
                            <div class="web-method-box">
                              <span class="web-method-label">GET</span
                              ><span class="web-method-url">/api/v1/hospitals</span>
                            </div>
                          </td>
                          <td>2023-07-01</td>
                        </tr>

                        <tr>
                          <td>7</td>
                          <td>200</td>
                          <td>
                            <div class="web-method-box">
                              <span class="web-method-label">GET</span
                              ><span class="web-method-url">/api/v1/hospitals</span>
                            </div>
                          </td>
                          <td>2023-07-01</td>
                        </tr>

                        <tr>
                          <td>7</td>
                          <td>200</td>
                          <td>
                            <div class="web-method-box">
                              <span class="web-method-label">GET</span
                              ><span class="web-method-url">/api/v1/hospitals</span>
                            </div>
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
</template>

<script setup>
import { defineProps, reactive } from 'vue'
import { getTLDt } from '@/util/ui'
import { useStore } from 'vuex'

const store = useStore()
const props = defineProps({
  historyList: {
    type: Array,
    required: true,
  },
})

const model = reactive({
  bedStatCd: store.getters['common/getBedAssignmentStatusCodes'],
})

</script>

<style scoped>
h2 {
  font-size: 1.7rem;
  color: #666;
  font-weight: normal;
  text-align: center;
}
.activity-head-box {
  padding: 12px 32px;
  height: 100%;
}
section.cntc-activity .activity-head-box { padding: 12px 32px; }
.view-img-box {
  border-bottom: 1px solid #666;
}
.list-body-box {
  height: 100%;
  max-height: 1000px;
}
.scroll-body-box {
  overflow-y: auto;
}
</style>
