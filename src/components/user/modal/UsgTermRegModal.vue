<template>
  <!--begin::Modals-->
  <!--begin::Modal - 내정보-->
  <div class="modal show" id="kt_modal_edit_board" tabindex="-1" aria-hidden="true" style="">
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-1500px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>약관/방침 등록/수정</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div class="btn btn-sm btn-icon btn-active-color-primary" @click="$emit('closeModal')">
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
          <article class="table-form-layout1">
            <div class="form-head-box"></div>

            <div class="form-body-box">
              <div class="table-box">
                <table>
                  <colgroup>
                    <col style="width: 168px" />
                    <col style="width: auto" />
                    <col style="width: 168px" />
                    <col style="width: auto" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>약관구분 <span class="text-primary">*</span></th>
                      <td>
                        <div class="sbox w-175px me-5">
                          <select>
                            <option>서비스 이용약관</option>
                          </select>
                        </div>
                      </td>
                      <th>시행일 <span class="text-primary">*</span></th>
                      <td>
                        <div class="tbox w-150px with-calendar me-5">
                          <input type="text" class="date-picker" placeholder="2023-01-23" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>제목 <span class="text-primary">*</span></th>
                      <td>
                        <div class="item-cell-box full">
                          <div class="tbox full">
                            <input type="text" :value="model.title" />
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>내용 <span class="text-primary">*</span></th>
                      <td colspan="3">
                        <MdEditor v-model="model.text" />
                      </td>
                    </tr>

                    <tr>
                      <th>동의 조건 <span class="text-primary">*</span></th>
                      <td>
                        <div class="item-cell-box">
                          <div class="rbox">
                            <label>
                              <input type="radio" name="agree" checked />
                              <i></i><span class="txt">필수</span>
                            </label>
                          </div>

                          <div class="rbox ms-4">
                            <label>
                              <input type="radio" name="agree" />
                              <i></i><span class="txt">선택</span>
                            </label>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>노출 여부 <span class="text-primary">*</span></th>
                      <td>
                        <div class="item-cell-box">
                          <div class="rbox">
                            <label>
                              <input type="radio" name="public" checked />
                              <i></i><span class="txt">노출</span>
                            </label>
                          </div>

                          <div class="rbox ms-4">
                            <label>
                              <input type="radio" name="public" />
                              <i></i><span class="txt">미노출</span>
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

          <article class="modal-menu-layout1 pt-10">
            <div class="modal-menu-list">
              <a @click="$emit('closeModal')" class="modal-menu-btn menu-cancel">닫기</a>
              <a @click="$emit('closeModal')" class="modal-menu-btn menu-primary">저장</a>
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

<script setup>
import { reactive, defineProps, onMounted, watch } from 'vue'
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

const props = defineProps({
  mode: { type: String, required: true }
})

const cTitle = '스마트병상배정시스템 이용약관'
const cText =
  '제1장 총칙\n' +
  '\n\n제 1 조 (목적)\n' +
  "① 본 이용약관(이하 '약관')은 스마트병상배정시스템 사이트 (이하 'SBAS')가 제공하는 모든 서비스(이하 '서비스')의 이용조건 및 절차, 이용자와 스마트병상배정시스템의 권리, 의무 및 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.\n" +
  '② 이 약관은 한국산업기술스마트병상배정시스템(www.keit.re.kr), 산업기술지원(itech.keit.re.kr), 국가균형발전종합정보시스템(www.nabis.go.kr), 실시간통합연구비관리시스템(www.rcms.go.kr), 산업기술개발장비(www.etube.re.kr), 연구지원전문가교육과정(academy.keit.re.kr), 산업기술R&amp;D종합정보시스템(www.ernd.go.kr) 홈페이지 이용 기본 약관에 적용됩니다.\n' +
  '\n\n제 2 조 (약관의 효력과 변경)\n' +
  '① 스마트병상배정시스템은 이 약관의 내용과 주소지, 관리자의 성명, 개인정보보호 담당자의 성명, 연락처(전화, 팩스, 전자우편 주소 등) 등을 이용자가 알 수 있도록 스마트병상배정시스템의 초기 서비스화면에 게시합니다.\n' +
  '② 스마트병상배정시스템은 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 약관의규제에관한법률, 전기통신기본법, 전기통신사업법, 정보통신윤리위원회심의규정, 정보통신윤리강령, 프로그램보호법 등 관계법령을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.\n' +
  '③ 스마트병상배정시스템은 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 스마트병상배정시스템의 초기화면에 그 적용일자 7일이전부터 적용일자 전일까지 공지하며, 적용일에 효력이 발생합니다.\n' +
  '④ 변경된 약관의 부지로 인한 회원의 피해는 스마트병상배정시스템에서 책임지지 않습니다.\n' +
  '⑤ 회원은 변경된 약관에 동의하지 않을 경우 탈퇴(해지) 할 수 있으며, 변경된 약관의 효력 발생일로부터 7일이내에 거부의사를 표시하지 아니하고 서비스를 계속 사용할 경우 변경된 약관에 동의한 것으로 간주합니다.\n' +
  '\n\n제 3 조 (용어의 정의)\n' +
  '① 본 약관에서 사용하는 용어의 정의는 다음과 같습니다.\n' +
  '(1) 이용자 : 본 약관에 따라 스마트병상배정시스템이 제공하는 서비스를 받는 자를 말합니다.\n' +
  '(2) 이용계약 : 서비스 이용과 관련하여 스마트병상배정시스템과 이용자간에 체결하는 계약을 말합니다.\n' +
  '(3) 회원 : 스마트병상배정시스템에 개인정보를 제공하고, 서비스를 이용하기 위해 스마트병상배정시스템과 이용계약을 체결하려고 하는 자를 말합니다.\n' +
  '(4) 이용자번호(ID) : 이용자의 식별과 이용자의 서비스 이용을 위하여 이용자가 선정하고 스마트병상배정시스템이 부여하는 문자와 숫자의 조합을 말합니다.\n' +
  '(5) 비밀번호 : 이용자가 등록회원과 동일인인지 신원을 확인하고 통신상의 자신의 개인정보보호를 위하여 이용자 자신이 선정한 문자와 숫자의 조합을 말합니다.\n' +
  '(6) 탈퇴(해지) : 스마트병상배정시스템 또는 이용자가 이용계약을 해약하는 것을 말합니다.\n' +
  '② 본 약관에서 사용하는 용어의 정의는 제1항에서 정하는 것을 제외하고는 관계법령, 개별서비스에 대한 별도약관 및 이용규정에서 정의합니다.\n' +
  '\n\n제 2 장 이용계약의 성립 및 해지\n' +
  '\n\n제 4 조 (이용계약의 성립)\n' +
  '① 이용계약은 이용자가 본 약관 내용에 대한 동의와 이용신청에 대하여 스마트병상배정시스템의 이용승낙으로 성립합니다.\n' +
  "② 본 이용약관에 대한 동의는 이용신청 당시 해당 스마트병상배정시스템 웹의 '동의함' 을 선택함으로써 의사표시를 합니다.\n" +
  "③ 이용고객이 이 약관에 따라 서비스 이용을 신청을 하는 것은 스마트병상배정시스템이 제정한 '개인정보보호방침', '저작권정책' 등 각종 정책에 대해 동의한 것으로 간주됩니다. ('개인정보보호방침', '저작권정책'에 관한 자세한 내용은 스마트병상배정시스템에서 확인하시기 바랍니다).\n" +
  '\n\n제 5 조 (개인정보의 보호 및 사용)\n' +
  '① 스마트병상배정시스템은 관계법령이 정하는 바에 따라 이용자 등록정보를 포함한 이용자의 개인정보를 보호하기 위해 노력합니다.\n' +
  '② 이용자 개인정보는 관련법령 및 스마트병상배정시스템의 개인정보 보호방침이 적용됩니다. 단, 스마트병상배정시스템이 운영하는 웹페이지에 포함된 링크 또는 배너를 클릭하여 다른 사이트로 옮겨갈 경우 스마트병상배정시스템의 개인정보 보호방침이 적용되지 않습니다.\n' +
  '③ 스마트병상배정시스템의 회원 정보는 다음과 같이 수집, 사용, 관리, 보호됩니다.\n' +
  '(1) 개인정보의 수집 : 스마트병상배정시스템은 회원가입 시 회원이 제공하는 정보를 통하여 회원의 정보를 수집합니다. 또한, 이용자의 동의 없이 주민등록번호, 외국인등록번호 등 고유식별정보를 수집·보관하지 않습니다.\n' +
  '(2) 개인정보의 사용 : 국가기관의 요구 또는 기타 관계법령에서 정한 절차에 따른 요청이 있는 경우를 제외하고 스마트병상배정시스템 서비스 제공과 관련하여 수집된 회원의 신상정보를 본인의 승낙 없이 제3자에게 누설, 배포하지 않습니다.\n' +
  '(3) 개인정보의 관리 : 회원은 개인정보의 보호 및 관리를 위하여 수시로 회원의 개인정보를 수정/삭제할 수 있습니다. 수신되는 정보 중 불필요하다고 생각되는 부분도 변경/조정할 수 있습니다.\n' +
  '(4) 개인정보의 보호 : 회원의 개인정보는 오직 회원만이 열람/수정/삭제 할 수 있으며, 이는 전적으로 회원의 이용자ID와 비밀번호에 의해 관리되고 있습니다. 따라서 타인에게 회원의 이용자ID와 비밀번호를 알려주어서는 안되며, 작업 종료 시에는 반드시 로그아웃 하고, 웹 브라우저의 창을 닫아야 합니다.(이는 타인과 컴퓨터를 공유하는 인터넷 카페나 도서관 같은 공공장소에서 컴퓨터를 사용하는 경우에 회원의 정보보호를 위하여 필요한 사항입니다)\n'

let model = reactive({
  title: '',
  text: ''
})

onMounted(() => {
  updateContents()
})

watch(
  () => props.mode,
  (first, second) => {
    console.log('first second', first, second)
    updateContents()
  }
)

function updateContents() {
  if (props.mode === 'reg') {
    model.title = ''
    model.text = ''
  } else {
    model.title = cTitle
    model.text = cText
  }
}
</script>

<style scoped></style>
