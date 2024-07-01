<template>
  <section class="cntc-info-view">
    <div class="view-head-box">
      <div class="view-img-box">
        <img src="@/assets/img/img-hosp-def.jpg" alt="이미지" />
      </div>

      <div class="view-basic-box">
        <div class="item-box">
          <div class="item-info-box">
            <div class="profile-box">
              <img src="/img/common/img_profile_default.svg" alt="이미지" />
            </div>

            <div class="info-box">
              <div class="subject-box">
                <div class="subject-txt">
                  <b>{{ user['userNm'] }}</b>
                </div>
                <div class="label-txt text-primary">{{ getPmgr(user['jobCd']) }}</div>
              </div>
              <div class="con-box">
                {{ getUserBelong() }}
              </div>
            </div>
          </div>

          <div class="item-option-box">
<!--            <article class="like-btn">-->
<!--              <a href="javascript:void(0)" class="like-btn" @click="toggleLike(user['id'])">-->
<!--                <i class="fa-regular fa-star" :style = "user['isFavorite'] ? {'color' : '#74AFEB'}:{}"></i>-->
<!--                <i class="fa-solid fa-star" :style = "user['isFavorite'] ? {'color' : '#74AFEB'}:{}"></i>-->
<!--              </a>-->
<!--            </article>-->
          </div>
        </div>
      </div>
    </div>

    <div class="view-body-box">
      <article class="list-layout1">
        <div class="list-wrap">
          <div class="list-row">
            <div class="list-body-box">
              <div class="inner-item-list">
                <div class="inner-item-box">
                  <div class="subject-box">주 담당지역</div>
                  <div class="con-box">{{ user['dutyDstr1CdNm'] }}</div>
                </div>

                <div class="inner-item-box">
                  <div class="subject-box">연락처</div>
                  <div class="con-box">{{ getTelno(user['telno']) }}</div>

                  <a
                    href="javascript:void(0)"
                    class="chat-btn"
                    style="background-image: url('/img/common/ic_floating_chat.svg')"
                  ></a>
                </div>

                <div class="inner-item-box">
                  <div class="subject-box">담당 환자유형</div>
                  <div class="con-box">{{ getPtType(user['ptTypeCd']) }}</div>
                </div>

                <div class="inner-item-box">
                  <div class="subject-box">최근 활동</div>
                  <div class="con-box">{{ getTLDt(user['updtDttm'], 2) }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import { getPmgr, getPtType, getTag, getTelno, getTLDt } from '@/util/ui'
import { mapState } from 'vuex'

export default {
  name: 'ContactDetailUnit',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState( 'user', ['userInfo'])
  },
  methods: {
    getPmgr,
    getPtType,
    getTag,
    getTelno,
    getTLDt,
    getUserBelong() {
      if (this.user.ocpCd) {
        return `${this.user.ocpCd} / ${this.user.dutyDstr1CdNm} / ${this.user.instNm}`;
      } else {
        return `${this.user.dutyDstr1CdNm} / ${this.user.instNm}`;
      }
    },
    toggleLike(reqId){
      //console.log(this.userInfo.id)
      console.log(reqId)
      const request = {id:this.userInfo.id,mbrId:reqId}
      console.log(request)
      this.$store.dispatch('user/regFavUser',request)
    },
  }
}
</script>

<style scoped></style>
