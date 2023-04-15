import { createWebHashHistory, createRouter } from "vue-router";

// home
import LayoutMain from "../components/layout/LayoutMain.vue";
import Index from "../components/Index.vue";

// 네비게이션 가드
/*
import {
  onlyAuthAndPtNoAndGoCharm
} from "./navigationGuard"
*/

const routes = [
    {
        path: "",
        name: "main",
        component: LayoutMain,
        children: [
            {
                path: "main",
                name: "main",
                component: Index,
            },
            {
                path: "",
                component: Index,
            },
        ],
    },
    {
        path: "",
        name: "index",
        component: Index,
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
