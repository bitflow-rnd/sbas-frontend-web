<template>

  <div class='fullpage'>

    <header class='main'>
      <div class='header-wrap'>

        <h1 class='logo-box'>
          <router-link to='/'></router-link>
        </h1>

        <div class='header-menu-box'>
          <router-link to='/login' class='header-menu-btn' v-if='!isMobile'>병상배정 시스템 로그인</router-link>
        </div>

      </div>

    </header>

    <section class='main' id='fullpage'>

      <section class='section section1 fp-section fp-table'> <!--  @wheel="handleScroll" -->

        <div class='fp-tableCell'>

          <div class='inner wrap'>

            <div class='swiper-group-box'>

              <div class='swiper swiper-section1'>

                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">

                  <!-- Slides -->
                  <div class="swiper-slide">

                    <div class='item-box'>

                      <div class='order-box'>첫번째,</div>

                      <div class='subject-box'>
                        코로나 19환자<br />
                        <span class='accent-txt'>병상배정 업무 관리</span>
                      </div>

                      <div class='con-box'>정부기관, 지역보건소, 대학병원, 의료원, 일반병원 등과<br />
                        협조체계를 구축하여 병상배정업무를 자세히 분석/관리할 수 있습니다.
                      </div>
                      <div class='con-box'>응급의료포털 E-GEN, 보건의료정보 위기대응 시스템,<br />
                        보건의료자원통합신고포털, 코로나19 정보관리시스템의 정보를<br />
                        연계 활용합니다.
                      </div>

                    </div>

                  </div>


                  <!-- Slides -->
                  <div class="swiper-slide">

                    <div class='item-box'>

                      <div class='order-box'>두번째,</div>

                      <div class='subject-box'>
                        중증도<br />
                        <span class='accent-txt'>분류 알고리즘</span>
                      </div>

                      <div class='con-box'>AI 중증도 분류 알고리즘이 탑재되어,<br />
                        인공지능을 통해 분류된 입원한 환자의 중증도 심각성<br />
                        추이를 예측 및 확인합니다.
                      </div>

                    </div>

                  </div>

                  <!-- Slides -->
                  <div class="swiper-slide">

                    <div class='item-box'>

                      <div class='order-box'>세번째,</div>

                      <div class='subject-box'>
                        병원/병상<br />
                        <span class='accent-txt'>추천시스템</span>
                      </div>

                      <div class='con-box'>의료 전문 IT업체와의 협업으로<br />
                        병상배정 추천, 관리, 상황판 및 통합연계시스템을 개발하였습니다.<br />
                        실제 임상환경에서의 활용도, 각 세부기능에 대한 중요도, 효과적인<br />
                        중증도 분류 알고리즘을 탑재에 대한 평가 및 피드백을 제공합니다.<br />
                        E-GEN, 병원EMR 시스템과 연계 및 확장을 도모하고 있습니다.
                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div class='navigation-box'>
                <a href='' class='navigation-prev-btn'></a>
                <div class='current-box' ref='curBox1'>{{ idx1 }}</div>
                <a href='' class='navigation-next-btn'></a>
              </div>


              <div class='visual-view-box'>
                <img src='/img/common/main_visual_item1.svg' alt='이미지'>
              </div>

            </div>

          </div>
        </div>
      </section>

    </section>


    <!-- footer start -->
    <section class='section footer fp-auto-height'>
      <footer>
        <div class='inner wrap'>
          <div class='footer-menu-box'>

            <div class='footer-menu-list'>
              <router-link to='/login' class='footer-menu-btn type-primary' v-if='!isMobile'>병상배정 시스템 로그인</router-link>
              <a href="javascript:alert('준비중입니다');" class='footer-menu-btn'>
                <img src='/img/common/img_footer_google.svg' alt='이미지'>
              </a>
              <a href="javascript:alert('준비중입니다');" class='footer-menu-btn'>
                <img src='/img/common/img_footer_apple.svg' alt='이미지'>
              </a>
            </div>

            <div class='terms'>
              <div role='button' @click='showModal(1)'>개인정보 취급방침</div>
              <div role='button' @click='showModal(2)'>서비스 이용약관</div>
            </div>

          </div>
        </div>
      </footer>

    </section>
    <!-- footer end -->

    <private-info-policy v-if='modalNo===1' @hideModal='showModal(0)' />
    <usage-term v-if='modalNo===2' @hideModal='showModal(0)' />

  </div>

</template>

<script>
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import MobileDetect from 'mobile-detect'
import UsageTerm from '@/components/common/UsageTerm.vue'
import PrivateInfoPolicy from '@/components/common/PrivateInfoPolicy.vue'

export default {
  components: {
    PrivateInfoPolicy,
    UsageTerm,
  },
  name: 'LandingPage',
  props: {
    msg: String
  },
  mounted() {
    const md = new MobileDetect(window.navigator.userAgent)
    if (md.mobile()) {
      this.isMobile = true
    } else {
      this.isMobile = false
    }
    this.initSection1Swiper();
  },
  data() {
    return {
      isMobile: true,
      isFullpage: false,
      sections: ['section1', 'section2', 'section3'],
      curruntSection: '',
      height: null,
      pageUp: false,
      idx1: 1,
      idx2: 1,
      idx3: 1,
      modalNo: 0
    }
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log('slide change');
    },
    checkMobile() {
      // if mobile => alert('모바일 앱을 다운로드해주세요') else /login
    },
    showModal(num) {
      this.modalNo = num
    },
    initSection1Swiper() {
      const self = this;
      this.section1Swiper = new Swiper('.swiper-section1', {
        loop: true,
        autoplay: {
          delay: 5000,
        },
        navigation: {
          prevEl: '.section1 .navigation-prev-btn',
          nextEl: '.section1 .navigation-next-btn',
        },
        on: {
          slideChange(){
            const idx = this.realIndex +1;
            self.$nextTick(()=>{
              self.$refs.curBox1.innerText = idx;
            })
          },
        },

      });
    },
  }
}
</script>

<style>
@import "./css/reset.css";
@import "./css/style.css";
@import "./css/jquery.fullpage.css";

div.fullpage {
  height: 100%;
}

body, .app-root {
  background-color: white;
}

section.main {
  position: relative;
  height: 100%;
}

.inner {
  max-width: 1440px;
  margin-left: calc(50% - 720px);
}

.section.section1, .section.section2, .section.section3 {
  height: 820px;
}

.fp-tableCell {
  height: 800px;
}

footer {
  background-color: inherit;
}

.section.footer {
  position: fixed;
  bottom: 0;
  z-index: 11;
  left: 0;
  width: 100%;
}

.floating-img-box .up {
  display: block !important;
}

@media (max-width: 1024px) {
  .inner {
    margin-left: inherit;
  }

  footer {
    bottom: 20px;
  }

  footer .footer-menu-box .footer-menu-list .footer-menu-btn {
    width: 160px;
  }

  .footer-menu-btn + .footer-menu-btn {
    margin-left: 20px !important;
  }

  section.main .swiper-group-box .visual-view-box {
    position: absolute;
    top: 200px;
    z-index: 0;
  }
}
.terms > div {
  width: 250px; line-height: 32px;
  border: 3px solid #aaa;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 6px;
  background-color: rgba(255,255,255,0.5);
  padding: 3px 5px;
  text-align: center;
  margin-left: 1.5rem; }
.terms > div + div { margin-top: 1rem; }
</style>
