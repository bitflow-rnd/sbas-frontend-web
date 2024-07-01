<template>

  <div class='fullpage'>

    <header class='main'>
      <div class='header-wrap'>

        <h1 class='logo-box'>
          <router-link to='/'></router-link>
        </h1>

        <div class='header-menu-box d-flex'>
          <a href="https://bitflow.notion.site/1-c386cb59de4440208ec146d6968bf877?pvs=4" target='_blank' class="btn btn-flex btn-sm btn-primary my-auto fs-4 btn-mnal py-1"
          ><i class="fa-solid fa-triangle-exclamation"></i> 사용자매뉴얼</a
          >
          <router-link to='/login' class='ms-4 mt-2 header-menu-btn d-none d-md-block text-gray-700'>병상배정 시스템 로그인</router-link>
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

            </div>

            <div class='visual-view-box'>
              <img src='/img/common/main_visual_item1.svg' alt='이미지'>
            </div>

          </div>
        </div>
      </section>

    </section>


    <!-- footer start -->
    <section class='section footer fp-auto-height'>
      <footer>
        <div class='wrap'>

          <div class='footer-menu-box'>

            <div class='footer-menu-list row gx-0'>

              <router-link to='/login' class='d-none d-md-block text-center position-relative col col-4 footer-menu-btn type-primary py-1' v-if='!isMobile'>
                <div class="btn-txt-center">병상배정 시스템 로그인</div>
              </router-link>

              <a href="/d/apk.html" class='col col-6 col-md-4 footer-menu-btn'>
                <img src='/img/common/img_footer_google.svg' alt='이미지'>
              </a>

              <a href="https://bitflow.notion.site/3-2-Form-93210bffd2174e1a9835aeeadc94d777" target='_blank' class='col col-6 col-md-4 footer-menu-btn'>
                <img src='/img/common/img_footer_apple.svg' alt='이미지'>
              </a>

            </div>

            <!--
            <div class='terms row' v-if='!isMobile'>
              <div class="col col-6" role='button' @click='showModal(1)'>개인정보 취급방침</div>
              <div class="col col-6" role='button' @click='showModal(2)'>서비스 이용약관</div>
            </div>
            -->

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
            if(window.location.pathname === '/') {
              const idx = this.realIndex + 1;
              self.$nextTick(() => {
                self.$refs.curBox1.innerText = idx;
              })
            }
          },
        },

      });
    },
    setApkLink() {
      const url = import.meta.env.VITE_APP_API_URL;
      return `${url}/d/apk.html`;
    }
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
.swiper-group-box {
  width: 80%;
}
header.main {
  height: 70px !important;
}
.btn-txt-center {
  position: absolute;
  left: 50%;
  width: 100%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: fit-content;
}

.text-shadow-sm {
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

.accent-txt, .text-shadow-sm-white, .con-box {
  text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
}

section.main .swiper-group-box .navigation-box {
  margin-left: 200px;
}
section.main {
  position: relative;
  height: 100%;
}
.btn-mnal {
  line-height: 36px;
}
.inner {
  max-width: 1200px;
  left: 50%;
  transform: translateX(-50%);

}

.section.section1, .section.section2, .section.section3 {
  height: 820px;
}

#fullpage {
  position: relative;
  height: 100%;
}

.app-contents, .main {
  height: 100%;
}
.fp-tableCell {
  position: relative;
  height: 100%;
}
.inner.wrap {
  height: 800px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

footer {
  background-color: inherit;
  padding: 40px 0;
}

.section.footer {
  position: fixed;
  bottom: 0;
  z-index: 11;
  left: 50%;
  width: calc(100% - 6rem);
  transform: translateX(-50%);
}

.floating-img-box .up {
  display: block !important;
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

footer .footer-menu-box .footer-menu-list {
  justify-content: space-around;
}

.footer-menu-btn {
  font-size: 1.4rem !important;
  font-weight: normal !important;
  line-height: 1.3;
}

@media (max-width: 768.98px) {
  header.main {
    height: 50px !important;
  }
  /*
  .visual-view-box {
  .inner-wrap .visual-view-box {
    width: calc(100% - 3rem) !important;
    top: 15% !important;
    left: 50%;
    transform: translateX(-50%) !important;
  }
  */
}

@media (max-width: 1024px) {

  .inner {
    margin-left: inherit;
  }

  .section.footer {
    width: 100%;
    padding: 0 1rem;
    bottom: 70px;
    height: 50px;
    position: relative;
  }

  .section.footer > footer {
    padding: 0;
  }

  footer .footer-menu-box .footer-menu-list {
    justify-content: center;
  }
  footer .footer-menu-box .footer-menu-list .footer-menu-btn {
    width: 160px;
  }

  .footer-menu-btn + .footer-menu-btn {
    margin-left: 20px !important;
  }
  /*
section.main .swiper-group-box .visual-view-box {
*/
  .inner.wrap .visual-view-box {
    position: absolute;
    width: 86%;
    left: 7%;
    height: 425px;
    margin: 0 auto;
    top: 50% !important;
    transform: translateY(-50%);
    z-index: 0;
  }
}
</style>
