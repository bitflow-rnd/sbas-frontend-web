<template>
  <div class='modal show' id='kt_modal_recommend' tabindex='-1' aria-hidden='true'>
    <div class='modal-dialog mw-1500px modal-dialog-centered'>
      <!--begin::Modal content-->
      <div class='modal-content'>
        <!--begin::Modal header-->
        <div class='modal-header px-10 py-5 d-flex justify-content-between'>
          <!--begin::Modal title-->
          <h2>대화방 생성</h2>
          <!--end::Modal title-->
          <CloseButton @close='closeModal'/>
        </div>
        <!--begin::Modal header-->

        <!--begin::Modal body-->
        <div class='modal-body scroll-y py-10 px-10'>
          <article class='table-form-layout1 pb-4'>
            <div class='form-head-box'></div>

            <div class='form-body-box'>
              <div class='table-box'>
                <table>
                  <colgroup>
                    <col style='width: 120px' />
                    <col style='width: 460px' />
                    <col style='width: 110px' />
                    <col style='width: auto' />
                  </colgroup>
                  <tbody>
                  <tr>
                    <th>주 담당지역</th>
                    <td>
                      <div class='item-cell-box'>
                        <div class='sbox w-175px'>
                          <select v-model='model.search.dstr1Cd' @change='changeDstrCd1()'>
                            <option value='' id='null'>시/도 전체</option>
                            <option v-for='(item, i) in model.cmSido' :key='i' :value='item.cdId'>
                              {{ item.cdNm }}
                            </option>
                          </select>
                        </div>

                        <div class='sbox w-175px ms-2'>
                          <select v-model='model.search.dstr2Cd' :disabled='enableSecondAddressPicker'
                                  @change='changeDstrCd2()'>
                            <option value='' id='null'>시/군/구 전체</option>
                            <option v-for='(item, i) in model.cmGugun' :key='i' :value='item.cdId'>
                              {{ item.cdNm }}
                            </option>
                          </select>
                        </div>

                        <div class='tbox w-500px with-btn ms-2'>
                          <input type='text' :readonly='!model.isFocused' @focus='model.isFocused = true'
                                 @blur='model.isFocused = false' v-model='model.search.kwd'
                                 @keyup.enter='searchUserList' placeholder='사용자 이름 또는 휴대전화번호 입력' />

                          <a @click='searchUserList' role='button' class='input-btn'>
                            <i class='fa-solid fa-magnifying-glass'></i>
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>소속기관 유형</th>
                    <td>
                      <div class='item-cell-box'>
                        <div class='cbox'>
                          <label>
                            <input v-model='model.search.instTypeCd' value='ORGN0001' type='checkbox' name='state'
                                   @change='searchUserList' /><i></i>
                            <span class='txt'>병상배정반</span>
                          </label>
                        </div>

                        <div class='cbox ms-4'>
                          <label>
                            <input v-model='model.search.instTypeCd' value='ORGN0004' type='checkbox' name='state'
                                   @change='searchUserList' /><i></i>
                            <span class='txt'>의료진</span>
                          </label>
                        </div>

                        <div class='cbox ms-4'>
                          <label>
                            <input v-model='model.search.instTypeCd' value='ORGN0003' type='checkbox' name='state'
                                   @change='searchUserList' /><i></i>
                            <span class='txt'>보건소</span>
                          </label>
                        </div>

                        <div class='cbox ms-4'>
                          <label>
                            <input v-model='model.search.instTypeCd' value='ORGN0002' type='checkbox' name='state'
                                   @change='searchUserList' /><i></i>
                            <span class='txt'>구급대</span>
                          </label>
                        </div>

                        <div class='cbox ms-4'>
                          <label>
                            <input v-model='model.search.instTypeCd' value='ORGN0005' type='checkbox' name='state'
                                   @change='searchUserList' /><i></i>
                            <span class='txt'>전산담당</span>
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>담당환자 유형</th>
                    <td colspan='3'>
                      <div class='item-cell-box'>
                        <div v-for='(code, name) in model.ptTypeCds' :key='name' class='cbox me-4'>
                          <label>
                            <input v-model='model.search.ptTypeCd' :value='name' type='checkbox' name='state'
                                   @change='searchUserList' /><i></i>
                            <span class='txt'>{{ code }}</span>
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>
          <!--end::Card toolbar-->

          <article class='table-list-layout1'>
            <div class='table-head-box pb-4'>
              <div class='head-box'>
                <div class='head-txt-box'>
                  검색결과
                  <span class='rounded-pill bg-primary text-white px-2 ms-2'>{{
                      model.userList.count
                    }}</span>
                </div>
              </div>
            </div>

            <div class='table-body-box'>
              <div class='table-box with-scroll small'>
                <table v-if='model.userList.items !== []' class='table-layout-fixed'>
                  <colgroup>
                    <col style='width: 35px' />
                    <col style='width: 90px' />
                    <col style='width: 180px' />
                    <col style='width: 100px' />
                    <col style='width: 100px' />
                    <col style='width: 100px' />
                  </colgroup>
                  <thead>
                  <tr class='small'>
                    <th>
                      <div class='cbox'>
                        <label> <input type='checkbox' class='all-chk' /><i></i> </label>
                      </div>
                    </th>
                    <th>기관유형</th>
                    <th>소속기관</th>
                    <th>이름</th>
                    <th>주 담당지역</th>
                    <th>업무</th>
                  </tr>
                  </thead>

                  <tbody>
                  <tr v-for='(item, i) in model.userList.items' :key='i'>
                    <td @click='toggleCheckbox()'>
                      <div @click='toggleCheckbox()' class='cbox'>
                        <label> <input @click='toggleCheckbox()' type='checkbox' class='all-chk' /><i></i> </label>
                      </div>
                    </td>
                    <td>{{ getInstNm(item.instTypeCd) }}</td>
                    <td class='text-start'>{{ item.instNm }}</td>
                    <td>{{ (item.userNm) }}</td>
                    <td>{{ item.dutyDstr1CdNm }}</td>
                    <td>{{ item.jobCdNm }}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          <div class='row mt-10'>
            <!--페이징처리-->
            <data-pagination
              @change='changePage'
              :data-length='model.userList.count'
            ></data-pagination>
          </div>

          <article class='modal-menu-layout1 pt-10'>
            <div class='modal-menu-list'>
              <router-link
                to=''
                @click='closeModal'
                class='modal-menu-btn menu-cancel'
              >이전
              </router-link>
<!--              <router-link to='' @click='openAprvPopup' class='modal-menu-btn menu-primary'-->
<!--              >배정요청-->
<!--              </router-link-->
<!--              >-->
            </div>
          </article>
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Content-->
    </div>
  </div>

  <SbasAlert :is-alert='model.isAlert' :err-msg='model.errMsg' :cnc-btn='false'
             @confirm-alert='confirmAlert' />

</template>

<script setup>
import { defineEmits, defineProps, onMounted, reactive } from 'vue'
import { getTag, getTelno, openAddressFinder, TimestampToDateWithDot } from '@/util/ui'
import { API_PROD } from '@/util/constantURL'
import { axios_cstm } from '@/util/axios_cstm'
import { useStore } from 'vuex'
import DataPagination from '@/components/user/cpnt/DataPagination.vue'
import CloseButton from '@/components/common/CloseButton.vue'
import SbasAlert from '@/components/common/SbasAlert.vue'

const props = defineProps({})
const emits = defineEmits(['closeModal', 'returnToList'])
const store = useStore()

const model = reactive({
  userList: [],
  cmSido: [],
  search: {
    dstr1Cd: '',
    dstr2Cd: '',
    kwd: '',
    instTypeCd: [],
    ptTypeCd: [],
  },
  ptTypeCds: {
    'PTTP0001': '일반',
    'PTTP0002': '소아',
    'PTTP0003': '투석',
    'PTTP0004': '산모',
    'PTTP0005': '수술',
    'PTTP0006': '인공호흡기 사용',
    'PTTP0007': '적극적 치료요청',
    'PTTP0008': '신생아'
  },
  usrDetail: null,
  isFocused: false,
  page: 1
})

onMounted(() => {
  init()
})

function init() {
  store.dispatch('admin/getSido')
  model.cmSido = store.getters['admin/getCmSido']
  searchUserList()
}

function searchUserList() {
  const url = `${API_PROD}/api/v1/admin/user/users`
  return axios_cstm()
    .get(url)
    .then((res) => {
      console.log(res, '사용자목록')
      if (res.data?.code === '00') {
        model.userList = res.data.result
        model.page = 1
      }
    }).catch((e) => {
      console.log(e)
    })
}

function enableSecondAddressPicker() {
  return model.search['dstr1Cd'] === ''
}

function changeDstrCd1() {
  getSecondAddress(model.search['dstr1Cd'])
  model.search['dstr2Cd'] = ''
  searchUserList()
}

function changeDstrCd2() {
  searchUserList()
}


function makeChatRoom() {
  const myInfo = store.getters['user/getUserInfo']
  const url = `${API_PROD}/api/v1/private/talk/group`
  const data = {
    id: myInfo.id,
  }

  axios_cstm().post(url, data)
    .then((response) => {
      model.mode = 'message'
      tab1.value.classList.remove('active')
      tab2.value.classList.add('active')
    })
    .catch((error) => {
      console.log(error)
    })
}

function getInstNm(code) {
  if (code === 'ORGN0001') {
    return '병상배정반'
  } else if (code === 'ORGN0002') {
    return '구급대'
  } else if (code === 'ORGN0003') {
    return '보건소'
  } else if (code === 'ORGN0004') {
    return '의료기관'
  } else if (code === 'ORGN0005') {
    return '전산담당'
  } else {
    return '기타'
  }
}

function getSecondAddress(address) {
  if (address) {
    this.$store.dispatch('admin/getGuGun', address)
  }
}

function closeModal() {
  emits('closeModal')
}

function confirmAlert() {
  model.isAlert = false
}

</script>

<style>
.modal.show {
  background-color: rgba(0, 0, 0, 0.4);
  display: block;
}

.modal-backdrop .fade {
  opacity: 0.4 !important;
  display: block !important;
}

.modal-dialog {
  margin-top: 50px;
  margin-bottom: 50px;
}

</style>