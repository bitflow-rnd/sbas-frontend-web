<template>
  <div class='modal show' id='kt_modal_recommend' tabindex='-1'>
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
                          <select v-model='model.search.dstr2Cd' :disabled='enableSecondAddressPicker()'
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
                      model.userCnt
                    }}</span>
                </div>
              </div>
            </div>

            <div class='table-body-box'>
              <div class='table-box with-scroll small'>
                <table v-if='model.userList !== []' class='table-layout-fixed'>
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
                  <tr v-for='(item, i) in model.userList' :key='i'>
                    <td>
                      <div class='cbox'>
                        <label> <input @click='toggleCheckbox(item)' type='checkbox' class='all-chk' :checked='model.checkedUsers.has(item.id)' /><i></i> </label>
                      </div>
                    </td>
                    <td>{{ getInstNm(item.instTypeCd) }}</td>
                    <td class='text-start'>{{ item.instNm }}</td>
                    <td>{{ (item.userNm) }}</td>
                    <td>{{ item.dutyDstr1CdNm }}&nbsp;{{ item.dutyDstr2Cd ? item.dutyDstr2CdNm : ''}}</td>
                    <td>{{ item.jobCdNm }}</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          <div class='row mt-2'>
            <!--페이징처리-->
            <data-pagination
              @change='changePage'
              :data-length='model.userCnt'
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
              <router-link to='' @click='openPopup' class='modal-menu-btn menu-primary'
              >생성
              </router-link>
            </div>
          </article>
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Content-->
    </div>
  </div>

  <article v-show="model.showPopup" class="popup popup-assignment-request1" style="">
    <div class="popup-wrapper">
      <div class="popup-contents">
        <div class="popup-head-box py-5 px-10">
          <div class="head-tit-box">대화방 생성</div>
          <closeButton @close='closePopup'/>
        </div>

        <div class="popup-body-box py-5 px-10">
          <div class='d-flex flex-column'>

            <div class=''>
              <article class='table-form-layout1'>
                <div class='form-body-box'>
                  <div class='table-box'>
                    <table>
                      <colgroup>
                        <col style='width: 127px' />
                        <col style='width: auto' />
                      </colgroup>
                      <tbody>
                      <tr>
                        <th>대화방 이름</th>
                        <td>
                          <div class='tbox full'>
                            <input v-model='model.tkrmNm'
                                   placeholder='대화방 이름 입력' class='tkrmNm-input' />
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>

        <div class="popup-foot-box py-5 px-10">
          <article class="modal-menu-layout1">
            <div class="modal-menu-list">
              <router-link
                to=''
                @click='closePopup'
                class='modal-menu-btn menu-cancel'
              >취소
              </router-link>
              <router-link to="" @click.once="makeChatRoom" class="modal-menu-btn menu-primary"
              >확인
              </router-link>
            </div>
          </article>
        </div>
      </div>
    </div>
  </article>

  <SbasAlert :is-alert='model.isAlert' :err-msg='model.errMsg' :cnc-btn='false'
             @confirm-alert='confirmAlert' />

</template>

<script setup>
import { computed, defineEmits, defineProps, onMounted, reactive, watch } from 'vue'
import { API_PROD } from '@/util/constantURL'
import { axios_cstm } from '@/util/axios_cstm'
import { useStore } from 'vuex'
import DataPagination from '@/components/user/unit/DataPagination.vue'
import CloseButton from '@/components/common/CloseButton.vue'
import SbasAlert from '@/components/common/SbasAlert.vue'

const props = defineProps({})
const emits = defineEmits(['closeModal', 'returnToList'])
const store = useStore()

const model = reactive({
  userList: [],
  userCnt: 0,
  cmSido: [],
  cmGugun: null,
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
  page: 1,
  tkrmNm: null,
  userIdList: [],
  userNmList: [],
  checkedUsers: new Set(),
  showPopup: false,
})

onMounted(() => {
  init()
})

watch(() => model.search.dstr1Cd, async () => {
  if (model.search.dstr1Cd) {
    await store.dispatch('admin/getGuGun', model.search.dstr1Cd)
  }
})

watch(() => store.getters['admin/getGuGun'],
  (newGuGun) => {
    model.cmGugun = newGuGun
  }
)

function init() {
  store.dispatch('admin/getSido')
  model.cmSido = store.getters['admin/getCmSido']
  searchUserList()
}

const filterData = computed(() => {
  let params = {};
  if (model.search.dstr1Cd) params = { ...params, dstr1Cd: model.search.dstr1Cd }
  if (model.search.dstr2Cd) params = { ...params, dstr2Cd: model.search.dstr2Cd }
  if (model.search.kwd) {
    params = { ...params, userNm: model.search.kwd }
    params = { ...params, telno: model.search.kwd }
  }
  if (model.search.instTypeCd.length !== 0) {
    params = { ...params, instTypeCd: model.search.instTypeCd.join(',') }
  }
  if (model.search.ptTypeCd.length !== 0) {
    params = { ...params, ptTypeCd: model.search.ptTypeCd.join(',') }
  }

  return params
})

function searchUserList() {
  const url = `${API_PROD}/api/v1/admin/user/users`
  const data = {
    page: model.page,
    ...filterData.value,
  }

  axios_cstm()
    .get(url, {params: data})
    .then((res) => {
      console.log(res, '사용자목록')
      if (res.data?.code === '00') {
        model.userList = res.data.result.items
        model.userCnt = res.data.result.count
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
  model.search['dstr2Cd'] = ''
  searchUserList()
}

function changeDstrCd2() {
  searchUserList()
}

function toggleCheckbox(user) {
  // 체크 해제
  if (model.checkedUsers.has(user.id)) {
    model.checkedUsers.delete(user.id);
    model.userIdList = model.userIdList.filter(id => id !== user.id); // ID 제거
    model.userNmList = model.userNmList.filter(name => name !== user.userNm); // 이름 제거
  } else {
    // 체크
    model.checkedUsers.add(user.id);
    model.userIdList.push(user.id); // ID 추가
    model.userNmList.push(user.userNm); // 이름 추가
  }
}

function changePage(page) {
  model.page = page
  searchUserList()
}

function makeChatRoom() {
  const myInfo = store.getters['user/getUserInfo']
  const url = `${API_PROD}/api/v1/private/talk/group`
  const data = {
    id: myInfo.id,
    userNm: myInfo.userNm,
    tkrmNm: model.tkrmNm,
    userIdList: model.userIdList,
    userNmList: model.userNmList,
  }

  axios_cstm().post(url, data)
    .then((response) => {
      if (response.data.code === '00') {
        model.isAlert = true
        model.errMsg = '대화방이 생성되었습니다.'
        model.tkrmNm = null
        model.userIdList = []
      }
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

function openPopup() {
  model.showPopup = true
}

function closePopup() {
  model.showPopup = false
  model.tkrmNm = null
}

function closeModal() {
  emits('closeModal')
}

function confirmAlert() {
  model.isAlert = false
  closeModal()
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

.tkrmNm-input {
  height: 40px !important;
}

</style>