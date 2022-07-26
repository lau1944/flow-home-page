import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: '/', name: 'Home', component: () => import('@/pages/HomePage.vue')
    },
    {
        path: '/policy', name: 'Policy', component: () => import('@/pages/PolicyPage.vue')
    },
    {
        path: '/terms', name: 'Terms', component: () => import('@/pages/TermsService.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router