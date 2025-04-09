import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'main', path: '/', component: () => import('@/views/Main.vue') },
    {
      name: 'about',
      path: '/about',
      component: () => import('@/views/About.vue'),
      children: [
        {
          name: 'technologies',
          path: '/technologies',
          component: () => import('@/views/TechnologiesPage.vue'),
        },
        {
          name: 'interests',
          path: '/interests',
          component: () => import('@/views/InterestsPage.vue'),
        },
        {
          name: 'bio',
          path: '/bio',
          component: () => import('@/views/BioPage.vue'),
        },
        {
          name: 'education',
          path: '/education',
          component: () => import('@/views/EducationPage.vue'),
        },
      ],
    },
    { name: 'projects', path: '/projects', component: () => import('@/views/Projects.vue') },
    { name: 'contact', path: '/contact', component: () => import('@/views/Contact.vue') },
    {
      name: 'navigation',
      path: '/navigation',
      component: () => import('@/views/MobileNavigation.vue'),
    },
  ],
})

export default router
