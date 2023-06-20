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
              <li class="breadcrumb-item text-gray-700 fw-semibold lh-1 mx-n1 fs-6">기관정보 관리</li>
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
                  class="page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-2 m-0">의료기관
                관리</h1></li>
              <!--end::Item-->
            </ul>
            <!--end::Breadcrumb-->
            <!--begin::Title-->
            <!--end::Title-->
          </div>
          <!--end::Page title-->
          <!--begin::Actions-->
          <div class="d-flex align-items-center gap-2 gap-lg-3">
            <a href="#" class="btn btn-flex btn-sm btn-outline btn-outline-light fs-7" data-bs-toggle="modal"
               data-bs-target="#kt_modal_view_users"><i class="fa-regular fa-trash-can"></i> 삭제</a>
            <a href="#" class="btn btn-flex btn-sm btn-secondary fs-7" data-bs-toggle="modal"
               data-bs-target="#kt_modal_view_users"><i class="fa-solid fa-download"></i> 엑셀다운로드</a>
            <a href="#" class="btn btn-sm btn-flex btn-primary align-self-center px-3" data-bs-toggle="modal"
               data-bs-target="#kt_modal_invite_friends">
              <i class="fa-solid fa-plus"></i> 병상요청
            </a>
          </div>
          <!--end::Actions-->
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
                          class="fa-solid fa-plus"></i> 선택삭제</a>


                      <a @click="codeGroupReg()" class="btn btn-flex btn-xs btn-outline btn-outline-primary ms-2">
                        <i class="fa-solid fa-plus" style="color:#74AFEB;"></i> 그룹코드 추가</a>


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

                        <tr v-for="(value, idx) in codeGroupData" :key="idx" class="cursor"
                            :class="{'selected': (value['cdGrpId'] === selectedRow.cdGrpId)}"
                            @click="selectRow(value)">
                          <!--                                                <tr class="cursor">-->
                          <td>
                            <div class="cbox d-flex justify-content-center">
                              <label>
                                <input type="checkbox" :value="parseInt(idx)" v-model="checkedCodeGroups"><i></i>
                              </label>
                            </div>
                          </td>
                          <td>{{ value['cdGrpId'] }}</td>
                          <td>{{ value['cdGrpNm'] }}</td>
                          <td class="left">-</td>
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
                          class="fa-solid fa-plus"></i> 선택삭제</a>


                      <a @click="codeReg()" class="btn btn-flex btn-xs btn-outline btn-outline-primary ms-2">
                        <i class="fa-solid fa-plus" style="color:#74AFEB;"></i> 코드 추가</a>


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
                        <tr v-for="(value, idx) in codeData" :key="idx" class="cursor">
                          <td>
                            <div class="cbox d-flex justify-content-center">
                              <label>
                                <input type="checkbox" :value="idx" v-model="checkedCodes"><i></i>
                              </label>
                            </div>
                          </td>
                          <td>{{ value['cdId'] }}</td>
                          <td>{{ value['cdNm'] }}</td>
                          <td>{{ value['cdSeq'] }}</td>
                          <td class="left">{{ value['rmk'] || "-" }}</td>
                        </tr>

                        </tbody>

                      </table>
                    </div>
                  </div>

                </article>


              </div>


            </article>


            <div class="row mt-10">
              <div
                  class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"></div>
              <div class="col-12 d-flex align-items-center justify-content-center">
                <div class="dataTables_paginate paging_simple_numbers" id="kt_table_users_paginate">
                  <ul class="pagination">
                    <li class="paginate_button page-item previous disabled" id="kt_table_users_previous"><a
                        href="#" aria-controls="kt_table_users" data-dt-idx="0" tabindex="0" class="page-link"><i
                        class="previous"></i></a></li>
                    <li class="paginate_button page-item active"><a href="#" aria-controls="kt_table_users"
                                                                    data-dt-idx="1" tabindex="0"
                                                                    class="page-link">1</a></li>
                    <li class="paginate_button page-item "><a href="#" aria-controls="kt_table_users"
                                                              data-dt-idx="2" tabindex="0" class="page-link">2</a>
                    </li>
                    <li class="paginate_button page-item "><a href="#" aria-controls="kt_table_users"
                                                              data-dt-idx="3" tabindex="0" class="page-link">3</a>
                    </li>
                    <li class="paginate_button page-item next" id="kt_table_users_next"><a href="#"
                                                                                           aria-controls="kt_table_users"
                                                                                           data-dt-idx="4"
                                                                                           tabindex="0"
                                                                                           class="page-link"><i
                        class="next"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>


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

export default {
  components: {},
  name: 'ListCdGrp',
  props: {
    msg: String
  },
  async created() {

    await this.$store.dispatch("loadCodeGroupsData").then(result => (this.codeGroupData = result.data['result']))
    this.selectedRow = this.codeGroupData[0]
  },
  data() {
    return {
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
  computed: {},
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
      this.$store.dispatch("loadCodesData", this.selectedRow.cdGrpId)
          .then(response => (this.codeData = response.data['result']))
      this.allCodesSelected = false
      // console.log(this.codeData)
    }

  },
  methods: {
    selectRow(row) {
      this.selectedRow = row
    },
    codeGroupRemove() {
      let codeGroupId = ""
      for (let idx in this.checkedCodeGroups.sort((a, b) => (b - a))) {
        try {
          codeGroupId = this.codeGroupData[this.checkedCodeGroups[idx]]['cdGrpId']
          this.$store.dispatch("deleteCodeGroup", codeGroupId)
          this.codeGroupData.splice(this.checkedCodeGroups[idx], 1)
        } catch (error) {
          console.log(error)
        }

      }
      this.checkedCodeGroups = []
      if (this.codeGroupData.length) {
        this.selectedRow = this.codeGroupData[0]
      } else {
        this.selectedRow = null
      }
    },
    // TODO: implement updating data in db
    codeRemove() {
      let code
      for (let idx in this.checkedCodes.sort().reverse()) {
        try {
          code = this.codeData[this.checkedCodes[idx]]
          this.$store.dispatch("deleteCode", code)
          this.codeData.splice(this.checkedCodes[idx], 1)
        } catch (error) {
          console.log(error)
        }
      }
      this.checkedCodes = []
      console.log(this.selectedRow)
    },
    allCodeGroupsChangeState() {
      if (this.allCodeGroupsSelected) {
        this.checkedCodeGroups = []
        for (let idx in this.codeGroupData) {
          this.checkedCodeGroups.push(idx)
        }
      } else {
        this.checkedCodeGroups = []
      }
    },
    allCodesChangeState() {
      if (this.allCodesSelected) {
        this.checkedCodes = []
        for (let idx in this.codeData) {
          this.checkedCodes.push(idx)
        }
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
      this.$store.dispatch("addCode", newCode)
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
      // TODO: add codeGroup object to codeGroupData
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