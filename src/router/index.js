import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('@/views/MainPage.vue'),
    beforeEnter: (to, from, next) => {
      if (!store.getters.logined) {
        alert('로그인이 필요합니다');
        next('/login');
        return;
      }
      next();
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginPage.vue'),
    beforeEnter: (to, from, next) => {
      if (store.getters.logined) {
        next('/main');
        return;
      }
      next();
    },
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('@/views/SignupPage.vue'),
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import('@/views/PostAddPage.vue'),
    meta: { auth: true },
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: () => import('@/views/PostEditPage.vue'),
    meta: { auth: true },
  },
  {
    path: '*',
    component: () => import('@/views/NotFoundPage.vue'),
  },
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.logined) {
    alert('로그인이 필요합니다!');
    next('/login');
    return;
  }
  next();
});
export default router;
