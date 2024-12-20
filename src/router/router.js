import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/common/LoginView.vue')
  },
  {
    path: '/initpw',
    name: 'initpw',
    component: () => import('@/components/common/InitPw.vue')
  },
  {
    path: '/requserreg',
    name: 'requserreg',
    component: () => import('@/components/common/ReqUserReg.vue')
  },
  {
    path: '/regmyorgan',
    name: 'regmyorgan',
    component: () => import('@/components/common/RegMyOrgan.vue')
  },
  {
    path: '/findid',
    name: 'findid',
    component: () => import('@/components/common/FindId.vue')
  },
  {
    path: '/dashbd',
    name: 'dashbd',
    component: () => import('@/components/user/dsbd/DashbdView.vue')
  },
  {
    path: '/comm',
    name: 'comm',
    component: () => import('@/components/layout/NoLayout.vue'),
    children: [
      {
        path: 'usgterm',
        name: 'usgterm',
        component: () => import('@/components/common/UsageTerm.vue')
      },
      {
        path: 'prvinfopolc',
        name: 'prvinfopolc',
        component: () => import('@/components/common/PrivateInfoPolicy.vue')
      },
    ],
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/components/layout/LayoutUser.vue'),
    children: [
      {
        path: '/dashbd',
        name: 'dashbd',
        component: () => import('@/components/user/dsbd/DashbdView.vue')
      },
      {
        path: 'patnt/list',
        name: 'listpatnt',
        component: () => import('@/components/user/list/ListPatnt.vue')
      },
      {
        path: 'bedasgn/list',
        name: 'listbed',
        component: () => import('@/components/user/list/ListBed.vue')
      },
      {
        path: 'bedasgn/list/nodata',
        name: 'listbednodata',
        component: () => import('@/components/user/list/ListBedNoData.vue')
      },
      /*연락처*/
      {
        path: 'cntc/list',
        name: 'ListCntc',
        component: () => import('@/components/user/list/ListCntc.vue')
      },
      {
        path: 'cntc/detl1',
        name: 'DetlCntc',
        component: () => import('@/components/user/detl/DetlCntc1.vue')
      },
      {
        path: 'svrt/dashbd',
        name: 'svrt',
        component: () => import('@/components/user/dsbd/SvrtDashbd.vue')
      },
      {
        path: 'svrt/list',
        name: 'svrtList',
        component: () => import('@/components/user/list/ListSvrt.vue')
      },
      {
        path: 'medinst/list',
        name: 'listmedinst',
        component: () => import('@/components/admin/ListMedInst.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/components/layout/LayoutUser.vue'),
    children: [
      {
        path: 'comm/ancmt/list',
        name: 'ListAncmt',
        component: () => import('@/components/admin/ListAncmt.vue')
      },
      {
        path: 'comm/usgterm/list',
        name: 'ListUsgTerm',
        component: () => import('@/components/admin/ListUsgTerm.vue')
      },
      {
        path: 'organ/firestatn/list',
        name: 'ListFirestatn',
        component: () => import('@/components/admin/ListFirestatn.vue')
      },
      {
        path: 'organ/firestatn/list/nodata',
        name: 'ListFirestatnNoData',
        component: () => import('@/components/admin/ListFirestatnNoData.vue')
      },
      {
        path: 'organ/medinst/list',
        name: 'ListMedInst',
        component: () => import('@/components/admin/ListMedInst.vue')
      },
      {
        path: 'user/list',
        name: 'ListUser',
        component: () => import('@/components/admin/ListUser.vue')
      },
      {
        path: 'comm/cd/cdgrp/list',
        name: 'ListCdGrp',
        component: () => import('@/components/admin/ListCdGrp.vue')
      }
    ]
  },
  {
    path: '',
    name: 'landing',
    component: () => import('@/components/landing/LandingPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  // base: process.env.BASE_URL,
  routes: routes,
  scrollBehavior() {
    return { top: 0 } // always scroll to top
  }
})

router.afterEach((to, from) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  to.meta.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
})

export default router
