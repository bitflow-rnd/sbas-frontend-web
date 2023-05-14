import { createWebHashHistory, createRouter } from "vue-router";

import LayoutUser from "../components/layout/LayoutUser.vue";
import Index from "../components/Index.vue";
import MobileMain from "../components/MobileMain.vue";
import LoginView from "../components/common/LoginView.vue";
import IdfySms from "../components/common/IdfySms.vue";
import InitPw from "../components/common/InitPw.vue";
import ReqUserReg from "../components/common/ReqUserReg.vue";
import RegMyOrgan from "../components/common/RegMyOrgan.vue";
import FindId from "../components/common/FindId.vue";
import Dashbd from "../components/common/Dashbd.vue";
import DashbdAdmin from "../components/admin/dashbd/Index.vue";
import ListPatnt from "../components/user/patnt/ListPatnt.vue";
import ListAncmt from "../components/admin/comm/ListAncmt.vue";
import ListUsgTerm from "@/components/admin/comm/ListUsgTerm.vue";



// 네비게이션 가드
/*
import {
  onlyAuthAndPtNoAndGoCharm
} from "./navigationGuard"
*/


const routes = [
    {
        path: "/login",
        name: "login",
        component: LoginView,
    },
    {
        path: "/idfysms",
        name: "idfysms",
        component: IdfySms,
    },
    {
        path: "/initpw",
        name: "initpw",
        component: InitPw,
    },
    {
        path: "/requserreg",
        name: "requserreg",
        component: ReqUserReg,
    },
    {
        path: "/regmyorgan",
        name: "regmyorgan",
        component: RegMyOrgan,
    },
    {
        path: "/findid",
        name: "findid",
        component: FindId,
    },
    {
        path: "/dashbd",
        name: "dashbd",
        component: Dashbd,
    },
    {
        path: "/user",
        name: "user",
        component: LayoutUser,
        children: [
            {
                path: "/pcmain",
                name: "pcmain",
                component: FindId,
            },
            {
                path: "/momain",
                name: "momain",
                component: MobileMain,
            },
           {
                path: "",
                component: Index,
            },
            {
                path: "/patnt/list",
                name: "listpatnt",
                component: ListPatnt,
            },
        ],
    },
    {
        path: "/admin",
        name: "admin",
        component: LayoutUser,
        children: [
            {
                path: "/",
                name: "dashbd",
                component: DashbdAdmin,
            },
            {
                path: "",
                name: "dashbd",
                component: DashbdAdmin,
            },
            {
                path: "/comm/ancmt/list",
                name: "ListAncmt",
                component: ListAncmt,
            },
            {
                path: "/comm/usgterm/list",
                name: "ListUsgTerm",
                component: ListUsgTerm,
            },

        ]
    },
    {
        path: "",
        name: "login",
        component: LoginView,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
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
