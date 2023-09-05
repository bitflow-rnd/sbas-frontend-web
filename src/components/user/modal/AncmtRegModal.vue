<template>
  <!--begin::Modals-->
  <!--begin::Modal - 내정보-->
  <div class="modal show" id="kt_modal_edit_board" tabindex="-1">
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-1500px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>시스템 공지사항 등록/수정</h2>
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
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>공지유형 <span class="text-primary">*</span></th>
                      <td>
                        <div class="item-cell-box">
                          <div class="rbox">
                            <label>
                              <input type="radio" name="type" checked />
                              <i></i><span class="txt">일반</span>
                            </label>
                          </div>

                          <div class="rbox ms-4">
                            <label>
                              <input type="radio" name="type" />
                              <i></i><span class="txt">공지</span>
                            </label>
                          </div>
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
                      <td>
                        <MdEditor v-model="model.text" />
                      </td>
                    </tr>

                    <tr>
                      <th>첨부파일</th>
                      <td>
                        <div class="item-row-box">
                          <div class="item-cell-box">
                            <div class="upload-group-box d-flex">
                              <div class="upload-btn-box">
                                <label>
                                  <input type="file" />
                                  <span class="txt">첨부파일</span>
                                </label>
                              </div>
                              <div class="upload-note-box">
                                형식 : jpg, jpeg, png, svg, xls, xlsx, doc, docx, ppt, pptx, pdf,
                                hwp / 용량 : 최대 5MB로 등록해 주세요.
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="item-row-box">
                          <div class="file-upload-list">
                            <div class="file-upload-item">
                              <span class="txt">Project Notice.jpg</span>
                              <a href="javascript:void(0)" onclick="fileRemove(this)">
                                <i class="fa-solid fa-xmark" style="color: #74afeb"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>공지기간 <span class="text-primary">*</span></th>
                      <td>
                        <div class="item-cell-box">
                          <div class="tbox w-150px with-calendar me-5">
                            <input type="text" class="date-picker" placeholder="2023-01-23" />
                          </div>

                          <div class="sbox w-75px me-5">
                            <select>
                              <option>10</option>
                            </select>
                          </div>

                          <div class="sbox w-75px me-2">
                            <select>
                              <option>00</option>
                            </select>
                          </div>

                          <div class="unit-box mx-2 text-gray-600">~</div>

                          <div class="tbox w-150px with-calendar me-5">
                            <input type="text" class="date-picker" placeholder="2023-01-23" />
                          </div>

                          <div class="sbox w-75px me-5">
                            <select>
                              <option>10</option>
                            </select>
                          </div>

                          <div class="sbox w-75px">
                            <select>
                              <option>00</option>
                            </select>
                          </div>

                          <div class="cbox ms-5">
                            <label>
                              <input type="checkbox" name="check" /><i></i>
                              <span class="txt">종료일 무제한</span>
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

const cTitle = '시스템 업그레이드에 따른 서비스 일시중지 안내'
const cText =
  '[시스템 유지보수 안내]\n\n보다 안정화된 서비스 제공을 위해 아래와 같이 시스템 유지보수 및 점검을 진행할 예정입니다.\n' +
  '점검시간 중 홈페이지 서비스 제공이 일시 중지될 예정이오니 양해 부탁드립니다.\n' +
  '1. 점검 시간: 2023. 6. 9.(금) 20:00 ~ 6. 10.(토) 12:00\n' +
  '2. 중단 서비스: 스마트 감염병 병상배정 시스템\n' +
  '3. 점검 내용: 시스템 백업\n\n' +
  '※ 점검 시간은 작업 진행에 따라 변경될 수 있습니다.'

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
