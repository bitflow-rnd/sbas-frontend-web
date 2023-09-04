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
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <!--end::Svg Icon-->
              </li>
              <!--end::Item-->
              <!--begin::Item-->
              <li class="breadcrumb-item text-gray-500 mx-n1">
                <h1
                  class="page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-2 m-0"
                >
                  연락처/메시지
                </h1>
              </li>
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
        <div class="card overflow-hidden">
          <section class="cntc-dashboard">
            <section class="cntc-message-board">
              <div class="board-head-box">
                <div class="head-top-box">
                  <article class="tabs-list-layout1">
                    <div class="tabs-list">
                      <a href="javascript:void(0)" class="tabs-btn active">
                        <span class="txt">연락처</span>
                        <span class="cnt bg-primary">17</span>
                      </a>

                      <a href="javascript:void(0)" class="tabs-btn">
                        <span class="txt">메시지</span>
                      </a>
                    </div>
                  </article>
                </div>

                <div class="head-mid-box">
                  <div class="input-group-box d-flex flex-center">
                    <div class="option-box">
                      <article class="toggle-list-layout1">
                        <div class="toggle-list">
                          <label>
                            <input type="radio" name="toggle1" checked />
                            <span class="txt">내지역</span>
                          </label>

                          <label>
                            <input type="radio" name="toggle1" />
                            <span class="txt">전국</span>
                          </label>
                        </div>
                      </article>
                    </div>
                    <div class="input-box">
                      <input type="text" placeholder="이름, 휴대폰번호 또는 소속기관명" />
                      <a href="javascript:void(0)" class="input-btn">
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="head-bottom-box">
                  <article class="check-list-layout1">
                    <div class="list-box">
                      <div class="item-box d-inline-flex flex-center justify-content-center">
                        <label>
                          <input type="checkbox" />
                          <span class="txt">보건소</span>
                        </label>
                      </div>
                      <div class="item-box">
                        <label>
                          <input type="checkbox" />
                          <span class="txt">병상배정반</span>
                        </label>
                      </div>
                      <div class="item-box">
                        <label>
                          <input type="checkbox" />
                          <span class="txt">의료진</span>
                        </label>
                      </div>
                      <div class="item-box">
                        <label>
                          <input type="checkbox" />
                          <span class="txt">구급대</span>
                        </label>
                      </div>
                      <div class="item-box">
                        <label>
                          <input type="checkbox" />
                          <span class="txt">전산</span>
                        </label>
                      </div>
                    </div>
                  </article>
                </div>
              </div>

              <div class="board-body-box">
                <div class="list-wrap">
                  <div class="list-group-box">
                    <div class="list-head-box" :class="{ hide: listBoxesHide['organization'] }">
                      <a
                        href="javascript:void(0)"
                        class="head-box d-flex flex-center justify-content-between"
                        @click="listBoxesHide['organization'] = !listBoxesHide['organization']"
                      >
                        <div class="head-tit-box">내 연락처</div>
                        <!-- 내 조직 -->
                        <i class="fa-solid fa-angle-down" style="color: #9fa1ab"></i>
                        <i class="fa-solid fa-angle-up" style="color: #9fa1ab"></i>
                      </a>
                    </div>

                    <div class="list-body-box">
                      <div
                        v-for="(user, idx) in usersList.items"
                        :key="idx"
                        role="button"
                        class="item-box"
                        @click="selectedUser = user"
                        :style="user === selectedUser ? { 'background-color': '#74AFEB22' } : {}"
                      >
                        <div class="item-info-box">
                          <div class="profile-box">
                            <img src="/img/common/img_profile_default.svg" alt="이미지" />
                          </div>

                          <div class="info-box">
                            <div class="subject-box">
                              {{ `${user['userNm']} ${user['ocpCd']}` }}
                            </div>
                            <div class="con-box">
                              {{ `${user['jobCd']} / ${user['dutyDstr1Cd']} / ${user['instNm']}` }}
                            </div>
                          </div>
                        </div>

                        <div class="item-option-box"></div>
                      </div>
                    </div>
                  </div>

                  <div class="list-group-box d-none">
                    <div class="list-head-box" :class="{ hide: listBoxesHide['request'] }">
                      <a
                        href="javascript:void(0)"
                        class="head-box d-flex flex-center justify-content-between"
                        @click="listBoxesHide['request'] = !listBoxesHide['request']"
                      >
                        <div class="head-tit-box">등록요청</div>
                        <i class="fa-solid fa-angle-down" style="color: #9fa1ab"></i>
                        <i class="fa-solid fa-angle-up" style="color: #9fa1ab"></i>
                      </a>
                    </div>
                    <div class="list-head-box" :class="{ hide: listBoxesHide['favourite'] }">
                      <a
                        href="javascript:void(0)"
                        class="head-box d-flex flex-center justify-content-between"
                        @click="listBoxesHide['favourite'] = !listBoxesHide['favourite']"
                      >
                        <div class="head-tit-box">즐겨찾기</div>
                        <i class="fa-solid fa-angle-down" style="color: #9fa1ab"></i>
                        <i class="fa-solid fa-angle-up" style="color: #9fa1ab"></i>
                      </a>
                    </div>
                    <div class="list-head-box" :class="{ hide: listBoxesHide['mayKnow'] }">
                      <a
                        href="javascript:void(0)"
                        class="head-box d-flex flex-center justify-content-between"
                        @click="listBoxesHide['mayKnow'] = !listBoxesHide['mayKnow']"
                      >
                        <div class="head-tit-box">알 수도 있는 사람</div>
                        <i class="fa-solid fa-angle-down" style="color: #9fa1ab"></i>
                        <i class="fa-solid fa-angle-up" style="color: #9fa1ab"></i>
                      </a>
                    </div>

                    <div class="list-body-box"></div>
                  </div>
                </div>

                <div class="list-menu-box d-flex justify-content-center pt-8">
                  <a
                    href="#none"
                    class="btn btn-flex bg-primary text-white rounded-pill"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_user_invite"
                    >사용자 초대</a
                  >
                </div>
              </div>
            </section>

            <!-- contact detail -->
            <no-contact-detail-unit v-if="!selectedUser" />
            <contact-detail-unit v-if="selectedUser" :user="selectedUser" />
            <!-- contact detail -->

            <!-- contact detail right -->
            <no-contact-detail-right-unit v-if="!selectedUser" />
            <contact-detail-right-unit v-if="selectedUser" />
            <!-- contact detail right -->
          </section>
        </div>
      </div>
      <!--end::Content-->
    </div>
    <!--end::Content wrapper-->
  </div>
  <!--end:::Main-->
</template>

<script>
import { mapState } from 'vuex'
import ContactDetailUnit from '@/components/user/unit/ContactDetailUnit'
import NoContactDetailUnit from '@/components/user/unit/NoContactDetailUnit'
import NoContactDetailRightUnit from '@/components/user/unit/NoContactDetailRightUnit'
import ContactDetailRightUnit from '@/components/user/unit/ContactDetailRightUnit'

export default {
  components: {
    ContactDetailRightUnit,
    NoContactDetailRightUnit,
    ContactDetailUnit,
    NoContactDetailUnit
  },
  name: 'ListCntc',
  props: {
    msg: String
  },
  mounted() {},
  data() {
    return {
      selectedUser: '',
      listBoxesHide: {
        request: false,
        favourite: false,
        organization: false,
        mayKnow: false
      }
    }
  },
  computed: {
    ...mapState('user', ['usersList'])
  },
  watch: {},
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cntc-message-board .item-box:hover {
  background-color: #74afeb22;
}
</style>
