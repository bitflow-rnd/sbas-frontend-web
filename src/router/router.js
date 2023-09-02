import {createRouter, createWebHistory} from 'vue-router'

import LayoutUser from '@/components/layout/LayoutUser.vue'
import MobileMain from '@/components/MobileMain.vue'
import LoginView from '@/components/common/LoginView.vue'
import IdfySms from '@/components/common/IdfySms.vue'
import InitPw from '@/components/common/InitPw.vue'
import ReqUserReg from '@/components/common/ReqUserReg.vue'
import RegMyOrgan from '@/components/common/RegMyOrgan.vue'
import FindId from '@/components/common/FindId.vue'
import ListPatnt from '@/components/user/patnt/ListPatnt.vue'
import ListAncmt from '@/components/admin/comm/ListAncmt.vue'
import ListUsgTerm from '@/components/admin/comm/ListUsgTerm.vue'
import ListBed from '@/components/user/bedasgn/ListBed.vue'
import ListBedNoData from '@/components/user/bedasgn/ListBedNoData.vue'
import ListCntc from '@/components/user/cntc/ListCntc.vue'
import DetlCntc1 from '@/components/user/cntc/DetlCntc1.vue'
import ListFirestatn from '@/components/admin/organ/ListFirestatn.vue'
import ListFirestatnNoData from '@/components/admin/organ/ListFirestatnNoData.vue'
import ListUser from '@/components/admin/user/ListUser.vue'
import ListChnl from '@/components/user/chnl/ListChnl.vue'
import ListChnlBak from '@/components/user/chnl/ListChnlBak.vue'
import DashbdView from '@/components/common/DashbdView.vue'
import ListCdGrp from '@/components/admin/comm/cd/ListCdGrp.vue'
import ListMedInst from '@/components/admin/organ/ListMedInst.vue'
import LandingPage from '@/components/landing/LandingPage.vue'
import SvrtDashbd from '@/components/user/svrt/SvrtDashbd.vue'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: LoginView,
    },
    {
        path: '/idfysms',
        name: 'idfysms',
        component: IdfySms,
    },
    {
        path: '/initpw',
        name: 'initpw',
        component: InitPw,
    },
    {
        path: '/requserreg',
        name: 'requserreg',
        component: ReqUserReg,
    },
    {
        path: '/regmyorgan',
        name: 'regmyorgan',
        component: RegMyOrgan,
    },
    {
        path: '/findid',
        name: 'findid',
        component: FindId,
    },
    {
        path: '/dashbd',
        name: 'dashbd',
        component: DashbdView,
    },
    {
        path: '/user',
        name: 'user',
        component: LayoutUser,
        children: [
            {
                path: '/dashbd',
                name: 'dashbd',
                component: DashbdView,
            },
            {
                path: 'pcmain',
                name: 'pcmain',
                component: FindId,
            },
            {
                path: 'momain',
                name: 'momain',
                component: MobileMain,
            },
            {
                path: 'patnt/list',
                name: 'listpatnt',
                component: ListPatnt,
            },
            {
                path: 'bedasgn/list',
                name: 'listbed',
                component: ListBed,
            },
            {
                path: 'bedasgn/list/nodata',
                name: 'listbednodata',
                component: ListBedNoData,
            },
            /*연락처*/
            {
                path: 'cntc/list',
                name: 'ListCntc',
                component: ListCntc,
            },
            {
                path: 'cntc/detl1',
                name: 'DetlCntc',
                component: DetlCntc1,
            },
            {
                path: 'chnl/list',
                name: 'listchnl',
                component: ListChnl,
            },
            {
                path: 'chnl/listbak',
                name: 'listchnlbak',
                component: ListChnlBak,
            },
            {
                path: 'svrt/dashbd',
                name: 'svrt',
                component: SvrtDashbd,
            },
        ],
    },
    {
        path: '/admin',
        name: 'admin',
        component: LayoutUser,
        children: [
            {
                path: 'comm/ancmt/list',
                name: 'ListAncmt',
                component: ListAncmt,
            },
            {
                path: 'comm/usgterm/list',
                name: 'ListUsgTerm',
                component: ListUsgTerm,
            },
            {
                path: 'organ/firestatn/list',
                name: 'ListFirestatn',
                component: ListFirestatn,
            },
            {
                path: 'organ/firestatn/list/nodata',
                name: 'ListFirestatnNoData',
                component: ListFirestatnNoData,
            },
            {
                path: 'organ/medinst/list',
                name: 'ListMedInst',
                component: ListMedInst,
            },
            {
                path: 'user/list',
                name: 'ListUser',
                component: ListUser,
            },
            {
                path: 'comm/cd/cdgrp/list',
                name: 'ListCdGrp',
                component: ListCdGrp,
            },

        ]
    },
    {
        path: '',
        name: 'landing',
        component: LandingPage,
    }
];

const router = createRouter({
    history: createWebHistory(),
    // base: process.env.BASE_URL,
    routes: routes,
    scrollBehavior() {
        // always scroll to top
        return { top: 0 }
    },
});

router.afterEach((to, from) => {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
});

export default router
