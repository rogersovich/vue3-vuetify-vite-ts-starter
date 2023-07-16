import { useGlobal } from '@/store';
import {
  createRouter,
  createWebHistory,
  type Router,
  type NavigationGuardNext,
  type RouteLocationNormalized,
  type RouteRecordRaw,
} from 'vue-router';

// Components
// import HomeView from '@/views/HomeView.vue';

//? Layout
import AuthLayout from '@/layouts/AuthLayout.vue';

// Pinia Store

// Unimplemented in Vuetify 3.3.1
// import { goTo } from 'vuetify/lib/services/goto/index.mjs';

/** Router Rules */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/auth/login',
  },
  {
    path: '/auth',
    component: AuthLayout,
    children: [
      {
        path: '',
        redirect: '/auth/login',
      },
      {
        path: 'login',
        name: 'Login',
        component: async () => await import('@/views/auth/LoginPage.vue'),
        meta: {
          group: 'Auth',
        },
      },
      {
        path: 'register',
        name: 'Register',
        component: async () => await import('@/views/auth/RegisterPage.vue'),
        meta: {
          group: 'Auth',
        },
      },
    ],
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: async () => await import('@/views/dashboard/DashboardPage.vue'),
    meta: {
      group: 'Dashboard',
    },
  },
];

/** Vue Router */
const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  /*
  scrollBehavior: (to, _from, savedPosition) => {
    let scrollTo: number | string = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.top;
    }
    return goTo(scrollTo);
  },
  */
  routes,
});

// Global before guards
// https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards}
router.beforeEach(
  async (
    _to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    const globalStore = useGlobal();
    // Show Loading
    // comment out for https://github.com/logue/vite-vuetify-ts-starter/issues/16
    // globalStore.setLoading(true);

    // Hide snack bar
    globalStore.setMessage('');
    next();
  }
);

// Global After Hooks
// https://router.vuejs.org/guide/advanced/navigation-guards.html#global-after-hooks}
router.afterEach(() => {
  const globalStore = useGlobal();
  // Hide Loading
  globalStore.setLoading(false);
});

export default router;
