import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('@/views/ServicesView.vue')
  },
  {
    path: '/services/:id',
    name: 'service-details',
    component: () => import('@/views/ServiceDetailsView.vue')
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/views/ProjectsView.vue')
  },
  {
    path: '/projects/:id',
    name: 'project-details',
    component: () => import('@/views/ProjectDetailsView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue')
  },
  // Admin Routes
  {
    path: '/admin/login',
    name: 'admin-login',
    component: () => import('@/views/admin/AdminLoginView.vue')
  },
  {
    path: '/admin',
    redirect: '/admin/dashboard'
  },
  {
    path: '/admin/dashboard',
    name: 'admin-dashboard',
    component: () => import('@/views/admin/AdminDashboardView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/company',
    name: 'admin-company',
    component: () => import('@/views/admin/AdminCompanyView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/services',
    name: 'admin-services',
    component: () => import('@/views/admin/AdminServicesView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/projects',
    name: 'admin-projects',
    component: () => import('@/views/admin/AdminProjectsView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/site-copy',
    name: 'admin-site-copy',
    component: () => import('@/views/admin/AdminSiteCopyView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/media',
    name: 'admin-media',
    component: () => import('@/views/admin/AdminMediaView.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

router.beforeEach((to, _from, next) => {
  if (to.meta.requiresAuth) {
    const isAuth = localStorage.getItem('saintra_admin_auth') === 'true';
    if (!isAuth) {
      return next('/admin/login');
    }
  }
  next();
});

export default router;
