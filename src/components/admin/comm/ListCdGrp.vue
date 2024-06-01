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
                <router-link to="/dashbd" class="text-hover-primary">
                  <i class="fa-solid fa-house"></i>
                </router-link>
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
              <li class="breadcrumb-item text-gray-700 fw-semibold lh-1 mx-n1 fs-6">시스템 관리</li>
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
                  class="page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-2 m-0">공통코드
                관리</h1></li>
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
        <div class="card">
          <!--begin::Card header-->
          <!--end::Card header-->
          <!--begin::Card body-->
          <div class="card-body p-8">
            <!--begin::Table-->
            <h5>검색결과<span class="position-absolute translate-middle rounded-pill bg-primary">99+</span></h5>

            <article class="code-layout1">

              <div class="code-form-box">

                <article class="table-list-layout1">

                  <div class="table-head-box pb-4">

                    <div class="head-box">

                      <div class="head-txt-box">그룹 코드 관리</div>
                    </div>

                    <div class="option-box">
                      <a @click="codeGroupRemove()" class="btn btn-flex btn-xs btn-outline btn-outline-gray"> <i
                          class="fa-solid fa-trash-can"></i> 선택삭제</a>


                      <a @click="codeGroupReg()" class="btn btn-flex btn-xs btn-outline btn-outline-primary ms-2">
                        <i class="fa-solid fa-plus"></i> 그룹코드 추가</a>


                    </div>

                  </div>

                  <div class="table-body-box">

                    <div class="table-box with-scroll small">
                      <table>
                        <colgroup>
                          <col style="width: 50px;">
                          <col style="width: 100px;">
                          <col style="width: 100px;">
                          <col style="width: 200px;">

                        </colgroup>
                        <thead>
                        <tr class="small">
                          <th>
                            <div class="cbox">
                              <label>
                                <input @change="allCodeGroupsChangeState()" type="checkbox"
                                       class="all-chk"
                                       v-model="allCodeGroupsSelected"
                                       :disabled="codeGroupData.length === 0"><i></i>
                              </label>
                            </div>
                          </th>
                          <th>그룹코드 번호<span class="text-primary">*</span></th>
                          <th>그룹코드 명<span class="text-primary">*</span></th>
                          <th>설명</th>
                        </tr>
                        </thead>

                        <tbody id="codeGroup">

                        <tr v-show="codeGroupRegShow" id="reg">
                          <td></td>
                          <td class="vertical-top">
                            <div class="tbox">
                              <input v-model="codeGroupRegData['codeGroupNo']" type="text" placeholder="그룹코드 4자리"
                                     class="px-3" name="codeGroupNo">
                            </div>
                            <div v-show="codeGroupRegError['codeGroupNoError']" class="msg-box pt-2">
                              <span class="text-danger">그룹코드 번호를 입력해주세요</span>
                            </div>
                          </td>
                          <td class="vertical-top">
                            <div class="tbox">
                              <input v-model="codeGroupRegData['codeGroupName']" type="text" placeholder="그룹코드 명"
                                     class="px-3" name="codeGroupName">
                            </div>

                            <div v-show="codeGroupRegError['codeGroupNameError']" class="msg-box pt-2">
                              <span class="text-danger">그룹코드 명을 입력해주세요</span>
                            </div>

                          </td>
                          <td class="left vertical-top">
                            <div class="tbox d-flex">
                              <input v-model="codeGroupRegData['codeGroupDesc']" type="text" placeholder="그룹코드 설명"
                                     class="px-3" name="codeGroupDesc">
                              <a @click="codeGroupRegFinish()"
                                 class="btn btn-xs btn-flex justify-content-center btn-primary align-self-center px-3 ms-2 py-0"
                                 style="min-width:47px; height: 30px;">저장
                              </a>
                            </div>
                          </td>
                        </tr>

                        <tr v-for="codeGroup in paginatedCodeGroupData" :key="codeGroup['cdGrpId']" class="cursor"
                            :class="{'selected': (codeGroup.id.cdGrpId === selectedRow.id.cdGrpId)}"
                            @click="selectRow(codeGroup)">
                          <td>
                            <div class="cbox d-flex justify-content-center">
                              <label>
                                <input type="checkbox" :value="codeGroup" v-model="checkedCodeGroups"><i></i>
                              </label>
                            </div>
                          </td>
                          <td>{{ codeGroup.id.cdGrpId }}
                          </td>
                          <td @input="updateCellValue($event)" @blur="updateData('codeGroup', codeGroup, 'cdGrpNm')"
                              @focus="updateCellValue($event)" contenteditable>{{ codeGroup['cdGrpNm'] }}
                          </td>
                          <td @input="updateCellValue($event)" @blur="updateData('codeGroup', codeGroup, 'rmk')"
                              @focus="updateCellValue($event)" contenteditable class="left">{{ codeGroup['rmk'] }}
                          </td>
                        </tr>

                        </tbody>

                      </table>
                    </div>
                  </div>

                </article>

              </div>
              <div class="code-form-box">

                <article class="table-list-layout1">

                  <div class="table-head-box pb-4">

                    <div class="head-box">

                      <div class="head-txt-box">코드 관리</div>
                    </div>

                    <div class="option-box">
                      <a @click="codeRemove()" class="btn btn-flex btn-xs btn-outline btn-outline-gray"> <i
                          class="fa-solid fa-trash-can"></i> 선택삭제</a>


                      <a @click="codeReg()" class="btn btn-flex btn-xs btn-outline btn-outline-primary ms-2">
                        <i class="fa-solid fa-plus"></i> 코드 추가</a>


                    </div>

                  </div>

                  <div class="table-body-box">

                    <div class="table-box with-scroll small">
                      <table>
                        <colgroup>
                          <col style="width: 50px;">
                          <col style="width: 100px;">
                          <col style="width: 100px;">
                          <col style="width: 100px;">
                          <col style="width: 200px;">

                        </colgroup>
                        <thead>
                        <tr class="small">
                          <th>
                            <div class="cbox">
                              <label>
                                <input @change="allCodesChangeState()" type="checkbox"
                                       class="all-chk" v-model="allCodesSelected"
                                       :disabled="codeData.length === 0"><i></i>
                                <!--                                :checked="checkedCodes.length == codeData.length && codeData.length != 0"><i></i>-->

                              </label>
                            </div>
                          </th>
                          <th>코드 번호<span class="text-primary">*</span></th>
                          <th>코드 명<span class="text-primary">*</span></th>
                          <th>정렬순서<span class="text-primary">*</span></th>
                          <th>설명</th>
                        </tr>
                        </thead>

                        <tbody id="code">
                        <tr v-show="codeRegShow" id="reg">
                          <td></td>
                          <td class="vertical-top">
                            <div class="tbox">
                              <input v-model="codeRegData['codeNo']" type="text" placeholder="코드 8자리" class="px-3"
                                     name="codeNo"
                                     maxlength="8">
                            </div>
                            <div v-show="codeRegError['codeNoError']" class="msg-box pt-2">
                              <span class="text-danger">코드번호를 입력해주세요</span>
                            </div>
                          </td>
                          <td class="vertical-top">
                            <div class="tbox">
                              <input v-model="codeRegData['codeName']" type="text" placeholder="코드명" class="px-3"
                                     name="codeName">
                            </div>
                            <div v-show="codeRegError['codeNameError']" class="msg-box pt-2">
                              <span class="text-danger">코드명을 입력해주세요</span>
                            </div>
                          </td>
                          <td class="vertical-top">
                            <div class="tbox">
                              <input v-model="codeRegData['codeOrder']" type="text" placeholder="숫자 3자리 이하" class="px-3"
                                     name="codeOrder" maxlength="3">
                            </div>
                            <div v-show="codeRegError['codeOrderError']" class="msg-box pt-2">
                              <span class="text-danger">정렬순서를 입력해주세요</span>
                            </div>
                          </td>
                          <td class="left vertical-top">
                            <div class="tbox d-flex">
                              <input v-model="codeRegData['codeDesc']" type="text" placeholder="코드 설명" class="px-3"
                                     name="codeDesc">
                              <a @click="codeRegFinish()"
                                 class="btn btn-xs btn-flex justify-content-center btn-primary align-self-center px-3 ms-2 py-0"
                                 style="min-width:47px; height: 30px;">저장
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr v-for="code in codeData" :key="code['cdId']" class="cursor">
                          <td>
                            <div class="cbox d-flex justify-content-center">
                              <label>
                                <input type="checkbox" :value="code" v-model="checkedCodes"><i></i>
                              </label>
                            </div>
                          </td>
                          <td @input="updateCellValue($event)" @blur="updateData('code', code, 'cdId')"
                              @focus="updateCellValue($event)"
                              contenteditable>
                            {{ code['cdId'] }}
                          </td>
                          <td @input="updateCellValue($event)" @blur="updateData('code', code, 'cdNm')"
                              @focus="updateCellValue($event)"
                              contenteditable>
                            {{ code['cdNm'] }}
                          </td>
                          <td @input="updateCellValue($event)" @blur="updateData('code', code, 'cdSeq')"
                              @focus="updateCellValue($event)"
                              contenteditable>
                            {{ code['cdSeq'] }}
                          </td>
                          <td @input="updateCellValue($event)" @blur="updateData('code', code, 'rmk')"
                              @focus="updateCellValue($event)" contenteditable
                              class="left">{{ code['rmk'] }}
                          </td>
                        </tr>

                        </tbody>

                      </table>
                    </div>
                  </div>

                </article>


              </div>


            </article>


            <data-pagination @change="changePage" :next-page-buttons-count="nextPageButtonsCount"
                             :previous-page-buttons-count="previousPageButtonsCount"
                             :display-change-page-buttons-count="displayChangePageButtonsCount"
                             :display-rows-count="displayRowsCount"
                             :data-length="codeGroupData.length"></data-pagination>


            <!--end::Table-->
          </div>
          <!--end::Card body-->
        </div>
      </div>
      <!--end::Content-->
    </div>
    <!--end::Content wrapper-->
  </div>

  <!--end:::Main-->
</template>

<script>
import DataPagination from "@/components/user/cpnt/DataPagination.vue"

export default {
  components: {
    DataPagination
  },
  name: 'ListCdGrp',
  props: {
    msg: String
  },
  async created() {

    await this.$store.dispatch("admin/loadCodeGroupsData").then(result => (this.codeGroupData = result.data['result']))
    this.selectedRow = this.codeGroupData[0]
  },
  data() {
    return {
      displayRowsCount: 10,
      displayChangePageButtonsCount: 10,
      previousPageButtonsCount: 4,
      nextPageButtonsCount: 4,
      codeCellValue: "",
      page: 1,
      selectedRow: {},
      allCodeGroupsSelected: false,
      allCodesSelected: false,
      codeRegShow: false,
      codeRegError: {
        codeNoError: false,
        codeNameError: false,
        codeOrderError: false
      },
      codeRegData: {
        codeNo: "",
        codeName: "",
        codeOrder: "",
        codeDesc: ""
      },
      codeGroupRegShow: false,
      codeGroupRegError: {
        codeGroupNoError: false,
        codeGroupNameError: false
      },
      codeGroupRegData: {
        codeGroupNo: "",
        codeGroupName: "",
        codeGroupDesc: ""
      },
      checkedCodeGroups: [],
      checkedCodes: [],
      codeGroupData: [],
      codeData: []
    }
  },
  computed: {
    startIndex() {
      return (this.page - 1) * this.displayRowsCount;
    },
    endIndex() {
      return this.page * this.displayRowsCount;
    },
    paginatedCodeGroupData() {
      return this.codeGroupData.slice(this.startIndex, this.endIndex)
    }
  },
  watch: {
    checkedCodeGroups() {
      this.allCodeGroupsSelected = this.checkedCodeGroups.length === this.codeGroupData.length;
      if (!this.codeGroupData.length) {
        this.allCodeGroupsSelected = false
      }
    },
    checkedCodes() {
      this.allCodesSelected = this.checkedCodes.length === this.codeData.length;
      if (!this.codeData.length) {
        this.allCodesSelected = false
      }
    },
    selectedRow() {
      if (!this.selectedRow) {
        this.codeData = []
      }
      this.$store.dispatch("admin/loadCodesData", this.selectedRow.id.cdGrpId)
          .then(response => (this.codeData = response.data['result']))
      this.allCodesSelected = false
      this.checkedCodes = []
    }

  },
  methods: {
    updateCellValue($event) {
      this.codeCellValue = $event.target.innerText
    },
    updateData(type, code, changedField) {
      if (code[changedField] != this.codeCellValue) {
        let newObject = {...code}
        newObject[changedField] = this.codeCellValue
        switch (type) {
          case 'code':
            this.$store.dispatch("admin/modifyCode", newObject)
            this.codeData[this.codeData.findIndex(val => val === code)][changedField] = this.codeCellValue
            break
          case 'codeGroup':
            this.$store.dispatch("admin/modifyCodeGroup", newObject)
            this.codeGroupData[this.codeGroupData.findIndex(val => val === code)][changedField] = this.codeCellValue
            break
        }
      }
    },
    changePage(newPage) {
      this.page = newPage
      this.selectedRow = this.codeGroupData[this.startIndex]
    },
    selectRow(row) {
      this.selectedRow = row
    },
    codeGroupRemove() {
      this.checkedCodeGroups.forEach(
          codeGroup => {
            try {
              console.log(codeGroup)
              this.$store.dispatch("admin/deleteCodeGroup", codeGroup['cdGrpId'])
            } catch (error) {
              console.log(error)
            }
          }
      )
      this.codeGroupData = this.codeGroupData.filter(cdGrp => !this.checkedCodeGroups.includes(cdGrp))

      this.checkedCodeGroups = []
      if (this.codeGroupData.length) {
        this.selectedRow = this.codeGroupData[this.startIndex]
      } else {
        this.selectedRow = null
      }
    },
    codeRemove() {
      this.checkedCodes.forEach(
          code => {
            try {
              this.$store.dispatch("admin/deleteCode", code)
            } catch (error) {
              console.log(error)
            }
          }
      )
      this.codeData = this.codeData.filter(cd => !this.checkedCodes.includes(cd))
      this.checkedCodes = []
    },
    allCodeGroupsChangeState() {
      if (this.allCodeGroupsSelected) {
        this.checkedCodeGroups = []
        this.codeGroupData.forEach(codeGroup => this.checkedCodeGroups.push(codeGroup))
      } else {
        this.checkedCodeGroups = []
      }
    },
    allCodesChangeState() {
      if (this.allCodesSelected) {
        this.checkedCodes = []
        this.codeData.forEach(code => this.checkedCodes.push(code))
      } else {
        this.checkedCodes = []
      }
    },
    codeReg() {
      this.codeRegShow = !this.codeRegShow
      this.cleanCodeRegForm()
    },
    codeRegFinish() {
      this.codeRegError['codeNoError'] = !this.codeRegData['codeNo']
      this.codeRegError['codeNameError'] = !this.codeRegData['codeName']
      this.codeRegError['codeOrderError'] = !this.codeRegData['codeOrder']
      if (Object.values(this.codeRegError).some(err => err)) {
        return
      }
      const newCode = {
        cdGrpId: this.selectedRow.cdGrpId,
        cdGrpNm: this.selectedRow.cdGrpNm,
        cdId: this.codeRegData['codeNo'],
        cdNm: this.codeRegData['codeName'],
        cdSeq: this.codeRegData['codeOrder']
      }
      this.$store.dispatch("admin/addCode", newCode)
      this.codeData.push(newCode)
      this.codeReg()
    },
    codeGroupReg() {
      this.codeGroupRegShow = !this.codeGroupRegShow
      this.cleanCodeGroupRegForm()
    },
    codeGroupRegFinish() {
      this.codeGroupRegError['codeGroupNoError'] = !this.codeGroupRegData['codeGroupNo']
      this.codeGroupRegError['codeGroupNameError'] = !this.codeGroupRegData['codeGroupName']
      if (Object.values(this.codeGroupRegError).some(err => err)) {
        return
      }
      const newCodeGroup = {
        cdGrpId: this.codeGroupRegData['codeGroupNo'],
        cdGrpNm: this.codeGroupRegData['codeGroupName'],
        rmk: this.codeGroupRegData['codeGroupDesc']
      }
      this.$store.dispatch("admin/addCodeGroup", newCodeGroup)
      this.codeGroupReg()
    },
    cleanCodeRegForm() {
      this.codeRegError['codeNoError'] = false
      this.codeRegError['codeNameError'] = false
      this.codeRegError['codeOrderError'] = false
      this.codeRegData['codeNo'] = ""
      this.codeRegData['codeName'] = ""
      this.codeRegData['codeOrder'] = ""
      this.codeRegData['codeDesc'] = ""
    },
    cleanCodeGroupRegForm() {
      this.codeGroupRegError['codeGroupNoError'] = false
      this.codeGroupRegError['codeGroupNameError'] = false
      this.codeGroupRegData['codeGroupNo'] = ""
      this.codeGroupRegData['codeGroupName'] = ""
      this.codeGroupRegData['codeGroupDesc'] = ""
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
