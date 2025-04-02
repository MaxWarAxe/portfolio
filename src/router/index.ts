import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {name: 'main', path: '/', component: ()=> import('@/views/Main.vue')},
    {name: 'about', path: '/about', component: ()=> import('@/views/About.vue')},
    {name: 'projects', path: '/projects', component: ()=> import('@/views/Projects.vue')},
    {name: 'contact', path: '/contact', component: ()=> import('@/views/Contact.vue')},
    
  ],
})

export default router
