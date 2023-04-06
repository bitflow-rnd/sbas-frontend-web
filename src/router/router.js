import {createWebHashHistory, createRouter} from "vue-router";

const routes = [
    {

    }
];

const router = createRouter({
    history: createWebHashHistory(),
    // base: process.env.BASE_URL,
    routes: routes,
    scrollBehavior()
    {
        // always scroll to top
        return {top: 0}
    },
});

export default router