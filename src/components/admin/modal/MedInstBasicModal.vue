<template>
  <div class='tabs-box' v-show='tabidx === 0' style=''>
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
              <th rowspan='6'>
                <div>의료기관 이미지</div>

                <div class='upload-box mt-4'>
                  <label
                    class='btn btn-flex justify-content-center btn-primary py-0 px-0 h-30px w-80px certify-btn rounded-1 btn-outline btn-outline-primary'
                  >
                    <input type='file' accept='image/jpeg, image/png' @change='uploadImage' class='d-none' />
                    수정
                  </label>
                </div>
              </th>
              <td rowspan='6' class='text-start'>
                <article class='modal-profile-layout1'>
                  <div class='profile-card-box flex-column'>
                    <div
                      class='profile-view-box'
                      style='width: 220px; height: 220px'
                    >
                      <img :src='imagePreview' class='img-hspt' alt='의료기관 이미지' />
                    </div>

                    <div class='profile-upload-box d-flex align-items-center pt-4'>

                      <div class='ps-2 text-secondary fw-normal'>
                        (권장) 512x512 픽셀의 정사각형 이미지를 준비해주세요
                      </div>
                    </div>
                  </div>
                </article>
              </td>
              <th>기관ID</th>
              <td>{{ medinstDetail.hospBasicInfo.hpid }}</td>
            </tr>

            <tr>
              <th>기관명</th>
              <td>{{ medinstDetail.hospBasicInfo.dutyName }}</td>
            </tr>

            <tr>
              <th>병원분류</th>
              <td>{{ medinstDetail.hospBasicInfo.dutyDiv }}</td>
            </tr>

            <tr>
              <th>병원분류명</th>
              <td>{{ medinstDetail.hospBasicInfo.dutyDivNam }}</td>
            </tr>

            <tr>
              <th>응급의료기관분류</th>
              <td>{{ medinstDetail.hospBasicInfo.dutyEmcls }}</td>
            </tr>

            <tr>
              <th>응급의료기관분류명</th>
              <td>{{ medinstDetail.hospBasicInfo.dutyEmclsName }}</td>
            </tr>

            <tr>
              <th rowspan='6'>간이약도</th>
              <td rowspan='6' class='map-wrapper'>
                <div id='map'></div>
              </td>
            </tr>

            <tr>
              <th>대표전화</th>
              <td>{{ medinstDetail.hospBasicInfo.dutyTel1 }}</td>
            </tr>

            <tr>
              <th>응급실전화</th>
              <td>{{ medinstDetail.hospBasicInfo.dutyTel3 }}</td>
            </tr>

            <tr>
              <th>팩스번호</th>
              <td>-</td>
            </tr>

            <tr>
              <th>주소</th>
              <td>
                <div class='eclipse-line2-box'>
                  {{ medinstDetail.hospBasicInfo.dutyAddr }}
                </div>
              </td>
            </tr>

            <tr>
              <th>기관설명</th>
              <td>{{ medinstDetail.hospBasicInfo.dutyInf ?? '-' }}</td>
            </tr>

            <tr>
              <th>시작시간</th>
              <td>{{ medinstDetail.hospBasicInfo.dutyTime1s ?? '-' }}</td>

              <th>종료시간</th>
              <td>{{ medinstDetail.hospBasicInfo.dutyTime1c ?? '-' }}</td>
            </tr>

            <tr>
              <th>진료과목</th>
              <td colspan='3'>
                <article class='item-list-layout1' style='max-width: 900px'>
                  <ul class='box-7'>
                    <li v-for='items in medinstDetail.hospBasicInfo.dgidIdNameList' v-bind:key='items'>
                      <div class='item-box'>{{ items }}</div>
                    </li>
                  </ul>
                </article>
              </td>
            </tr>

            <tr>
              <th>진료시간</th>
              <td colspan='3'>
                <article class='item-list-layout1' style='max-width: 500px'>
                  <ul class='box-4'>
                    <li>
                      <div class='item-box'>
                        월요일 <span v-if='medinstDetail.hospBasicInfo.dutyTime1s === null'
                                  class='text-gray-400 ps-1'>없음</span>
                        <span v-else>{{ medinstDetail.hospBasicInfo.dutyTime1s
                                          }}~{{ (medinstDetail.hospBasicInfo.dutyTime1c) }}</span>
                      </div>
                    </li>
                    <li>
                      <div class='item-box'>
                        화요일 <span v-if='medinstDetail.hospBasicInfo.dutyTime2s === null'
                                  class='text-gray-400 ps-1'>없음</span>
                        <span v-else>{{ medinstDetail.hospBasicInfo.dutyTime2s
                                          }}~{{ (medinstDetail.hospBasicInfo.dutyTime2c) }}</span>
                      </div>
                    </li>
                    <li>
                      <div class='item-box'>
                        수요일 <span v-if='medinstDetail.hospBasicInfo.dutyTime3s === null'
                                  class='text-gray-400 ps-1'>없음</span>
                        <span v-else>{{ medinstDetail.hospBasicInfo.dutyTime3s
                                          }}~{{ (medinstDetail.hospBasicInfo.dutyTime3c) }}</span>
                      </div>
                    </li>
                    <li>
                      <div class='item-box'>
                        목요일 <span v-if='medinstDetail.hospBasicInfo.dutyTime4s === null'
                                  class='text-gray-400 ps-1'>없음</span>
                        <span v-else>{{ medinstDetail.hospBasicInfo.dutyTime4s
                                          }}~{{ (medinstDetail.hospBasicInfo.dutyTime4c) }}</span>
                      </div>
                    </li>
                    <li>
                      <div class='item-box'>
                        금요일 <span v-if='medinstDetail.hospBasicInfo.dutyTime5s === null'
                                  class='text-gray-400 ps-1'>없음</span>
                        <span v-else>{{ medinstDetail.hospBasicInfo.dutyTime5s
                                          }}~{{ (medinstDetail.hospBasicInfo.dutyTime5c) }}</span>
                      </div>
                    </li>
                    <li>
                      <div class='item-box'>
                        토요일 <span v-if='medinstDetail.hospBasicInfo.dutyTime6s === null'
                                  class='text-gray-400 ps-1'>없음</span>
                        <span v-else>{{ medinstDetail.hospBasicInfo.dutyTime6s
                                          }}~{{ (medinstDetail.hospBasicInfo.dutyTime6c) }}</span>
                      </div>
                    </li>
                    <li>
                      <div class='item-box'>
                        일요일 <span v-if='medinstDetail.hospBasicInfo.dutyTime7s === null'
                                  class='text-gray-400 ps-1'>없음</span>
                        <span v-else>{{ medinstDetail.hospBasicInfo.dutyTime7s
                                          }}~{{ (medinstDetail.hospBasicInfo.dutyTime7c) }}</span>
                      </div>
                    </li>
                    <li>
                      <div class='item-box'>
                        공휴일 <span v-if='medinstDetail.hospBasicInfo.dutyTime8s === null'
                                  class='text-gray-400 ps-1'>없음</span>
                        <span v-else>{{ medinstDetail.hospBasicInfo.dutyTime8s
                                          }}~{{ (medinstDetail.hospBasicInfo.dutyTime8c) }}</span>
                      </div>
                    </li>
                  </ul>
                </article>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <div class='table-box'>
          <table>
            <colgroup>
              <col style='width: 168px' />
              <col style='width: auto' />
              <col style='width: 168px' />
              <col style='width: auto' />

              <col style='width: 168px' />
              <col style='width: auto' />
            </colgroup>
            <tbody>
            <tr>
              <th>응급실운영여부</th>
              <td>
                <i v-if="medinstDetail.hospBasicInfo.dutyEryn === '1'">운영중</i>
                <i v-else>-</i>
              </td>

              <th>입원실가용여부</th>
              <td>
                <i v-if="medinstDetail.hospBasicInfo.dutyHayn === '1'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'
                ></i>
                <i v-else>-</i>
              </td>

              <th>병상수</th>
              <td>{{ medinstDetail.hospBasicInfo.dutyHano }}</td>
            </tr>
            </tbody>
          </table>
        </div>

        <div class='table-box'>
          <table>
            <colgroup>
              <col style='width: 168px' />
              <col style='width: auto' />
              <col style='width: 168px' />
              <col style='width: auto' />

              <col style='width: 168px' />
              <col style='width: auto' />
            </colgroup>
            <tbody>
            <tr>
              <th>가용_응급실</th>
              <td>{{ medinstDetail.hospBasicInfo.hvec ?? '-' }}</td>

              <th>가용_입원실</th>
              <td>{{ medinstDetail.hospBasicInfo.hvgc ?? '-' }}</td>

              <th>가용_수술실</th>
              <td>{{ medinstDetail.hospBasicInfo.hvoc ?? '-' }}</td>
            </tr>
            </tbody>
          </table>
        </div>

        <div class='table-box'>
          <table>
            <colgroup>
              <col style='width: 168px' />
              <col style='width: auto' />
              <col style='width: 168px' />
              <col style='width: auto' />

              <col style='width: 168px' />
              <col style='width: auto' />
            </colgroup>
            <tbody>
            <tr>
              <th>기준_병상수</th>
              <td>{{ medinstDetail.hospBasicInfo.hpbdn ?? '-' }}</td>

              <th>기준_응급실</th>
              <td>{{ medinstDetail.hospBasicInfo.hperyn ?? '-' }}</td>

              <th>기준_입원실</th>
              <td>{{ medinstDetail.hospBasicInfo.hpgryn ?? '-' }}</td>
            </tr>

            <tr>
              <th>기준_수술실</th>
              <td>{{ medinstDetail.hospBasicInfo.hpopyn ?? '-' }}</td>

              <th>기준_신경중환자실</th>
              <td>{{ medinstDetail.hospBasicInfo.hpcuyn ?? '-' }}</td>

              <th>기준_신생아중환자실</th>
              <td>{{ medinstDetail.hospBasicInfo.hpnicuyn ?? '-' }}</td>
            </tr>

            <tr>
              <th>기준_흉부중환자실</th>
              <td>{{ medinstDetail.hospBasicInfo.hpccuyn ?? '-' }}</td>

              <th>기준_일반중환자실</th>
              <td colspan='3'>{{ medinstDetail.hospBasicInfo.hpicuyn ?? '-' }}</td>
            </tr>
            </tbody>
          </table>
        </div>

        <div class='table-box'>
          <table>
            <colgroup>
              <col style='width: 168px' />
              <col style='width: auto' />
              <col style='width: 168px' />
              <col style='width: auto' />

              <col style='width: 168px' />
              <col style='width: auto' />
            </colgroup>
            <tbody>
            <tr>
              <th>중증_응급실</th>
              <td>
                <i v-if="medinstDetail.hospBasicInfo.mkioskTy25 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'
                ></i>
                <i v-else>-</i>
              </td>

              <th>중증_뇌출혈수술</th>
              <td>
                <i v-if="medinstDetail.hospBasicInfo.mkioskTy1 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'
                ></i>
                <i v-else>-</i>
              </td>

              <th>중증_뇌경색의재관류</th>
              <td>
                <i v-if="medinstDetail.hospBasicInfo.mkioskTy2 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'
                ></i>
                <i v-else>-</i>
              </td>
            </tr>

            <tr>
              <th>중증_심근경색의재관류</th>
              <td>
                <i v-if="medinstDetail.hospBasicInfo.mkioskTy3 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'
                ></i>
                <i v-else>-</i>
              </td>

              <th>중증_복부손상의수술</th>
              <td>
                <i v-if="medinstDetail.hospBasicInfo.mkioskTy4 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'
                ></i>
                <i v-else>-</i>
              </td>

              <th>중증_사지접합의수술</th>
              <td>
                <i v-if="medinstDetail.hospBasicInfo.mkioskTy5 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'
                ></i>
                <i v-else>-</i>
              </td>
            </tr>

            <tr>
              <th>중증_응급내시경</th>
              <td>
                <i v-if="medinstDetail.hospBasicInfo.mkioskTy6 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'
                ></i>
                <i v-else>-</i>
              </td>

              <th>중증_응급투석</th>
              <td>
                <i v-if="medinstDetail.hospBasicInfo.mkioskTy7 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'
                ></i>
                <i v-else>-</i>
              </td>

              <th>중증_조산산모</th>
              <td>
                <i v-if="medinstDetail.hospBasicInfo.mkioskTy8 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'
                ></i>
                <i v-else>-</i>
              </td>
            </tr>

            <tr>
              <th>중증_정신질환자</th>
              <td>
                <i v-if="medinstDetail.hospBasicInfo.mkioskTy9 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'
                ></i>
                <i v-else>-</i>
              </td>

              <th>중증_신생아</th>
              <td>
                <i v-if="medinstDetail.hospBasicInfo.mkioskTy10 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'
                ></i>
                <i v-else>-</i>
              </td>

              <th>중증_중증화상</th>
              <td>
                <i v-if="medinstDetail.hospBasicInfo.mkioskTy11 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'
                ></i>
                <i v-else>-</i>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <div class='table-box'>
          <table>
            <colgroup>
              <col style='width: 168px' />
              <col style='width: auto' />
              <col style='width: 168px' />
              <col style='width: auto' />

              <col style='width: 168px' />
              <col style='width: auto' />
            </colgroup>
            <tbody>
            <tr>
              <th>가용_신경중환자</th>
              <td>{{ medinstDetail.hospBasicInfo.hvcc ?? '-' }}</td>

              <th>가용_신생중환자</th>
              <td>{{ medinstDetail.hospBasicInfo.hvncc ?? '-' }}</td>

              <th>가용_흉부중환자</th>
              <td>{{ medinstDetail.hospBasicInfo.hvccc ?? '-' }}</td>
            </tr>

            <tr>
              <th>가용_일반중환자</th>
              <td>{{ medinstDetail.hospBasicInfo.hvicc ?? '-' }}</td>

              <th>가용_응급실 일반병상</th>
              <td>{{ medinstDetail.hospBasicInfo.o001 ?? '-' }}</td>

              <th>가용_응급실 소아 병상</th>
              <td>{{ medinstDetail.hospBasicInfo.o002 ?? '-' }}</td>
            </tr>

            <tr>
              <th>가용_응급실 음압 격리 병상</th>
              <td>{{ medinstDetail.hospBasicInfo.o003 ?? '-' }}</td>

              <th>가용_응급실 일반 격리 병상</th>
              <td>{{ medinstDetail.hospBasicInfo.o004 ?? '-' }}</td>

              <th>가용_응급전용 중환자실</th>
              <td>{{ medinstDetail.hospBasicInfo.o005 ?? '-' }}</td>
            </tr>

            <tr>
              <th>가용_내과중환자실</th>
              <td>{{ medinstDetail.hospBasicInfo.o006 ?? '-' }}</td>

              <th>가용_외과중환자실</th>
              <td>{{ medinstDetail.hospBasicInfo.o007 ?? '-' }}</td>

              <th>가용_신생아중환자실</th>
              <td>{{ medinstDetail.hospBasicInfo.o008 ?? '-' }}</td>
            </tr>

            <tr>
              <th>가용_소아 중환자실</th>
              <td>{{ medinstDetail.hospBasicInfo.o009 ?? '-' }}</td>

              <th>가용_소아응급전용 중환자실 병상</th>
              <td>{{ medinstDetail.hospBasicInfo.o010 ?? '-' }}</td>

              <th>가용_신경과중환자실</th>
              <td>{{ medinstDetail.hospBasicInfo.o011 ?? '-' }}</td>
            </tr>

            <tr>
              <th>가용_신경외과중환자실</th>
              <td>{{ medinstDetail.hospBasicInfo.o012 ?? '-' }}</td>

              <th>가용_화상중환자실</th>
              <td>{{ medinstDetail.hospBasicInfo.o013 ?? '-' }}</td>

              <th>가용_외상중환자실</th>
              <td>{{ medinstDetail.hospBasicInfo.o014 ?? '-' }}</td>
            </tr>

            <tr>
              <th>가용_심장내과 중환자실</th>
              <td>{{ medinstDetail.hospBasicInfo.o015 ?? '-' }}</td>

              <th>가용_흉부외과 중환자실</th>
              <td>{{ medinstDetail.hospBasicInfo.o016 ?? '-' }}</td>

              <th>가용_일반 중환자실</th>
              <td>{{ medinstDetail.hospBasicInfo.o017 ?? '-' }}</td>
            </tr>

            <tr>
              <th>가용_중환자실 내 음압 격리 병상</th>
              <td>{{ medinstDetail.hospBasicInfo.o018 ?? '-' }}</td>

              <th>가용_응급전용 입원실</th>
              <td>{{ medinstDetail.hospBasicInfo.o019 ?? '-' }}</td>

              <th>가용_소아응급전용 입원 병상</th>
              <td>{{ medinstDetail.hospBasicInfo.o020 ?? '-' }}</td>
            </tr>

            <tr>
              <th>가용_외상전용 입원실</th>
              <td>{{ medinstDetail.hospBasicInfo.o021 ?? '-' }}</td>

              <th>가용_수술실</th>
              <td>{{ medinstDetail.hospBasicInfo.o022 ?? '-' }}</td>

              <th>가용_외상전용 수술실</th>
              <td>{{ medinstDetail.hospBasicInfo.o023 ?? '-' }}</td>
            </tr>

            <tr>
              <th>가용_정신과 폐쇄 병상</th>
              <td>{{ medinstDetail.hospBasicInfo.o024 ?? '-' }}</td>

              <th>가용_음압 격리 병상</th>
              <td>{{ medinstDetail.hospBasicInfo.o025 ?? '-' }}</td>

              <th>가용_분만실</th>
              <td>
                <i v-if="medinstDetail.hospBasicInfo.o026 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'></i>
                <i v-else>-</i>
              </td>
            </tr>

            <tr>
              <th>가용_CT</th>
              <td>
                <i v-if="medinstDetail.hospBasicInfo.o027 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'></i>
                <i v-else>-</i>
              </td>

              <th>가용_MRI</th>
              <td>
                <i v-if="medinstDetail.hospBasicInfo.o028 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'></i>
                <i v-else>-</i>
              </td>

              <th>가용_혈관촬영기</th>
              <td>
                <i v-if="medinstDetail.hospBasicInfo.o029 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'></i>
                <i v-else>-</i>
              </td>
            </tr>

            <tr>
              <th>가용_인공호흡기</th>
              <td>
                <i v-if="medinstDetail.hospBasicInfo.o030 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'></i>
                <i v-else>-</i>
              </td>

              <th>가용_인공호흡기(소아)</th>
              <td>
                <i v-if="medinstDetail.hospBasicInfo.o031 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'></i>
                <i v-else>-</i>
              </td>

              <th>가용_인큐베이터</th>
              <td>
                <i v-if="medinstDetail.hospBasicInfo.o032 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'></i>
                <i v-else>-</i>
              </td>
            </tr>

            <tr>
              <th>가용_CRRT</th>
              <td>
                <i v-if="medinstDetail.hospBasicInfo.o033 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'></i>
                <i v-else>-</i>
              </td>

              <th>가용_ECMO</th>
              <td>
                <i v-if="medinstDetail.hospBasicInfo.o034 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'></i>
                <i v-else>-</i>
              </td>

              <th>가용_치료적 저체온 요법</th>
              <td>
                <i v-if="medinstDetail.hospBasicInfo.o035 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'></i>
                <i v-else>-</i>
              </td>
            </tr>

            <tr>
              <th>가용_화상전용 처치실</th>
              <td>
                <i v-if="medinstDetail.hospBasicInfo.o036 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'></i>
                <i v-else>-</i>
              </td>

              <th>가용_고압산소치료기</th>
              <td>
                <i v-if="medinstDetail.hospBasicInfo.o037 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'></i>
                <i v-else>-</i>
              </td>

              <th>가용_일반입원실</th>
              <td>
                <i v-if="medinstDetail.hospBasicInfo.o038 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'></i>
                <i v-else>-</i>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { defineProps, onMounted, watch } from 'vue'

onMounted(() => {
  loadNaverMapAsync()
})

watch(() => props.medinstDetail, async () => {
  loadNaverMapAsync()
})

const props = defineProps({
  imagePreview: String,
  medinstDetail: Object,
  tabidx: Number,
  uploadImage: Function
})

function loadNaverMapAsync() {
  // 네이버 지도 생성 // 35.9561644!4d128.5653029
  const map = new window.naver.maps.Map('map', {
    center: new window.naver.maps.LatLng(props.medinstDetail.hospBasicInfo.wgs84Lat, props.medinstDetail.hospBasicInfo.wgs84Lon),
    zoom: 15,
    zoomControlOptions: {
      style: window.naver.maps.ZoomControlStyle.SMALL,
      position: window.naver.maps.Position.TOP_RIGHT
    }
  })
  new window.naver.maps.Marker({
    position: new window.naver.maps.LatLng(props.medinstDetail.hospBasicInfo.wgs84Lat, props.medinstDetail.hospBasicInfo.wgs84Lon),
    map: map
  })
}

</script>

<style scoped>
.map-wrapper {
  padding: 0;
  height: 400px;
  position: relative;
}

#map {
  position: relative !important;
  width: 480px;
  height: 400px;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  border: 1px solid #555;
  max-width: 100%;
}

.img-hspt {
  filter: grayscale(1);
}
article.modal-profile-layout1 .profile-card-box .profile-view-box {
  overflow: hidden;
}
article.modal-profile-layout1 .profile-card-box .profile-view-box > img {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
}
</style>