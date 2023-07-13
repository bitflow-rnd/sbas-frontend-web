<template>
    <div class="container fullpage">

        <header class="main">
            <div class="header-wrap">

                <h1 class="logo-box">
                    <router-link to="/" ></router-link>
                </h1>

                <div class="header-menu-box">
                    <router-link to="/login" class="header-menu-btn" >병상배정 시스템 로그인</router-link>
                </div>


            </div>
        </header>

        <section class="main" id="fullpage">
            <section class="section section1 fp-section fp-table" @wheel="handleScroll">
                <div class="fp-tableCell">
                <div class="inner wrap">

                    <div class="swiper-group-box">

                        <div class="swiper swiper-section1">

                            <ul class="swiper-wrapper">
                                <li class="swiper-slide">
                                    <div class="item-box">

                                        <div class="order-box">첫번째,</div>

                                        <div class="subject-box">
                                            코로나 19환자<br/>
                                            <span class="accent-txt">병상배정 업무 관리</span>
                                        </div>

                                        <div class="con-box">정부기관, 지역보건소, 대학병원, 의료원, 일반병원 등과<br/>
                                            협조체계를 구축하여 병상배정업무를 자세히 분석/관리할 수 있습니다.</div>

                                    </div>
                                </li>
                                <li class="swiper-slide">
                                    <div class="item-box">

                                        <div class="order-box">첫번째,</div>

                                        <div class="subject-box">
                                            코로나 19환자<br/>
                                            <span class="accent-txt">정보관리시스템 분석</span>
                                        </div>

                                        <div class="con-box">응급의료포털 E-GEN, 보건의료정보 위기대응 시스템,<br/>
                                            보건의료자원통합신고포털, 코로나19 정보관리시스템의 정보를<br/>
                                            확인하고, 활용할 수 있는 정보를 확인할 수 있습니다.</div>

                                    </div>
                                </li>
                                <li class="swiper-slide">
                                    <div class="item-box">

                                        <div class="order-box">첫번째,</div>

                                        <div class="subject-box">
                                            코로나 19환자<br/>
                                            <span class="accent-txt">임상정보 수집 및 표준화</span>
                                        </div>

                                        <div class="con-box">정부기관, 지역보건소, 대학병원, 의료원, 일반병원 등과<br/>
                                            협조체계를 구축하여 병상배정업무를 자세히 분석/관리할 수 있습니다.</div>

                                    </div>
                                </li>
                            </ul>

                        </div>

                        <div class="navigation-box">

                            <a href="" class="navigation-prev-btn"></a>
                            <div class="current-box" ref="curBox1">{{idx1}}</div>
                            <a href="" class="navigation-next-btn"></a>
                        </div>


                        <div class="visual-view-box">
                            <img src="/img/common/main_visual_item1.svg" alt="이미지">
                        </div>

                    </div>



                </div>
                </div>
            </section>

            <section class="section section2 fp-section fp-table" @wheel="handleScroll">
                <div class="fp-tableCell">
                <div class="inner wrap">

                    <div class="swiper-group-box type-reverse">

                        <div class="swiper swiper-section2">

                            <ul class="swiper-wrapper">

                                <li class="swiper-slide">
                                    <div class="item-box">

                                        <div class="order-box">두번째,</div>

                                        <div class="subject-box">
                                            중증도<br/>
                                            <span class="accent-txt">분류 알고리즘</span>
                                        </div>

                                        <div class="con-box">대학병원과 협력하여 중증도 분류 알고리즘을 개발하였습니다.<br/>
                                            학습할 데이터와 변수 검증 및 자문, 인공지능을 통해 분류된 환자의<br/>
                                            중증도를 확인, 평가 및 피드백해드립니다.</div>

                                    </div>
                                </li>


                                <li class="swiper-slide">
                                    <div class="item-box">

                                        <div class="order-box">두번째,</div>

                                        <div class="subject-box">
                                            병원/병상<br/>
                                            <span class="accent-txt">추천시스템</span>
                                        </div>

                                        <div class="con-box">심플렛폼, 레몬헬스케어 등 의료전문 IT업체와 협력하여<br/>
                                            AI관리시스템, 상황판시스템, 통합연계시스템을 개발하였습니다.<br/>
                                            실제 임상환경에서의 활용도, 각 세부기능에 대한 중요도, 효과적인<br/>
                                            중증도 분류 알고리즘을 탑재에 대한 평가 및 피드백을 제공합니다.<br/>
                                            E-GEN, 병원EMR 시스템과 연동을 위해서 중앙응급의료센터 및 각 병원<br/>
                                            실무자와 공동연구기관들의 연계를 주관하고 협업하였습니다.</div>

                                    </div>
                                </li>

                            </ul>

                        </div>

                        <div class="navigation-box">

                            <a href="" class="navigation-prev-btn"></a>
                            <div class="current-box" ref="curBox2">{{idx2}}</div>
                            <a href="" class="navigation-next-btn"></a>
                        </div>


                        <div class="visual-view-box">
                            <img src="/img/common/main_visual_item2.svg" alt="이미지">
                        </div>

                    </div>



                </div>
                </div>
            </section>

            <section class="section section3 fp-section fp-table" @wheel="handleScroll">
                <div class="fp-tableCell">
                <div class="inner wrap">

                    <div class="swiper-group-box">

                        <div class="swiper swiper-section3">

                            <ul class="swiper-wrapper">

                                <li class="swiper-slide">
                                    <div class="item-box">

                                        <div class="order-box">세번째,</div>

                                        <div class="subject-box">
                                            다기관<br/>
                                            <span class="accent-txt">시스템 운영</span>
                                        </div>

                                        <div class="con-box">시/도 기관, 대학교병원, 의료원, 일반병원을 통해 다양한 환경의
                                            시범 운영을 진행하였습니다.</div>

                                    </div>
                                </li>


                                <li class="swiper-slide">
                                    <div class="item-box">

                                        <div class="order-box">세번째,</div>

                                        <div class="subject-box">
                                            권역 네트워크를<br/>
                                            <span class="accent-txt">이용한 시스템 운영</span>
                                        </div>

                                        <div class="con-box">시/도 기관, 감염병 공동대응 협의체 및 감염병대응 협의체를 통해<br/>
                                            협의체 소속 의료기관에서 시스템을 운영 및 성능 평가를 진행하였습니다.</div>

                                    </div>
                                </li>

                                <li class="swiper-slide">
                                    <div class="item-box">

                                        <div class="order-box">세번째,</div>

                                        <div class="subject-box">
                                            도입의향조사 및<br/>
                                            <span class="accent-txt">실용실증위원회  개최</span>
                                        </div>

                                        <div class="con-box">확진조사서/환자 초기분류를 위한 선별 질문지의 정보를 수집하고,<br/>
                                            각 환자의 임상정보와 경과를 수집/표준화 합니다.</div>

                                    </div>
                                </li>
                            </ul>

                        </div>

                        <div class="navigation-box">

                            <a href="" class="navigation-prev-btn"></a>
                            <div class="current-box" ref="curBox3">{{idx3}}</div>
                            <a href="" class="navigation-next-btn"></a>
                        </div>


                        <div class="visual-view-box">
                            <img src="/img/common/main_visual_item3.svg" alt="이미지">
                        </div>

                    </div>



                </div>
                </div>
            </section>

            <section class="section footer fp-auto-height">
                <footer>
                    <div class="inner wrap">
                        <div class="footer-menu-box">

                            <div class="footer-menu-list">
                                <router-link to="/login" class="footer-menu-btn type-primary" >병상배정 시스템 로그인</router-link>
                                <a href="" class="footer-menu-btn" >
                                    <img src="/img/common/img_footer_google.svg" alt="이미지">
                                </a>
                                <a href="" class="footer-menu-btn">
                                    <img src="/img/common/img_footer_apple.svg" alt="이미지">
                                </a>
                            </div>

                            <a href="" class="footer-toggle-btn" ></a>


                        </div>
                    </div>
                </footer>

            </section>


<!--            <aside class="floating-box">
                <div class="floating-img-box">
                    <img src="/img/common/img_scroll_down.svg" alt="이미지" class="down">
                    <img src="/img/common/img_scroll_up.svg" alt="이미지" class="up">
                </div>
            </aside>-->

        </section>
        <aside class="floating-box">
            <div class="floating-img-box">
                <img v-if="!pageUp" src="/img/common/img_scroll_down.svg" alt="이미지" class="down">
                <img v-if="pageUp" src="/img/common/img_scroll_up.svg" alt="이미지" class="up">
            </div>
        </aside>
    </div>
</template>
<script>
import $ from 'jquery'
import {getScreenPixelSize} from '@/util/ui'
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'
import 'fullpage.js/dist/jquery.fullpage'
import 'fullpage.js/dist/jquery.fullpage.css'


export default {
    components: {
    },
    name: 'LandingPage',
    props: {
        msg: String
    },
    mounted() {
        this.height = getScreenPixelSize();
        if(!this.isFullpage){
            this.initFullPage()
            this.isFullpage = true
        }
        this.initSection1Swiper();
        this.initSection2Swiper();
        this.initSection3Swiper();
    },
    beforeUnmount() {
        $.fn.fullpage.destroy('all');
        $('#fullpage').remove();
        this.isFullpage=false
    },
    data() {
        return {
            isFullpage:false,
            sections:['section1','section2','section3','footer'],
            curruntSection:'',
            height: null,
            pageUp :false,
            idx1: 1,
            idx2: 1,
            idx3: 1,
        }
    },
    methods:{
        initFullPage(){
            const self = this;
            $('#fullpage').fullpage({
                navigation: true,

                // eslint-disable-next-line no-unused-vars
                onLeave: function (index,nextIndex, direct){
                    self.pageUp = index === 4;
                },
                afterLoad: function (anchor,index){
                    self.pageUp = index === 4;
                }
            });
        },
        handleScroll(event){
            const fullPageInstance = $('#fullpage').fullpage;
            if(event.deltaY > 0){
                fullPageInstance.moveSectionDown()
            }else{
                fullPageInstance.moveSectionUp()
            }
        },
        initSection1Swiper() {
            const self = this;
            this.section1Swiper = new Swiper('.swiper-section1', {
                loop: true,
                autoplay: {
                    delay: 3000,
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
        initSection2Swiper() {
            const self = this;
            this.section2Swiper = new Swiper('.swiper-section2', {
                loop: true,
                autoplay: {
                    delay: 3000,
                },
                navigation: {
                    prevEl: '.section2 .navigation-prev-btn',
                    nextEl: '.section2 .navigation-next-btn',
                },
                on: {
                    slideChange(){
                        const idx = this.realIndex +1;
                        self.$nextTick(()=>{
                            self.$refs.curBox2.innerText = idx;
                        })
                    },
                },

            });
        },
        initSection3Swiper() {
            const self = this;
            this.section3Swiper = new Swiper('.swiper-section3', {
                loop: true,
                autoplay: {
                    delay: 3000,
                },
                navigation: {
                    prevEl: '.section3 .navigation-prev-btn',
                    nextEl: '.section3 .navigation-next-btn',
                },
                on: {
                    slideChange(){
                        const idx = this.realIndex +1;
                        self.$nextTick(()=>{
                            self.$refs.curBox3.innerText = idx;
                        })
                    },
                },

            });
        },
    }
}
</script>
<style scoped>
@import "./css/reset.css";
@import "./css/style.css";
@import "./css/swiper.min.css";
@import "./css/jquery.fullpage.css";


.section.section1,.section.section2,.section.section3 {
    height: 820px;
}
.fp-tableCell{
    height: 800px;
}
.section.footer{
    z-index: 11;
}
.container{
    padding-bottom: 0;
}
.fp-watermark{
    display: none;
}
.floating-img-box .up {
    display: block !important;
}
</style>