import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import GenrePage from "@/pages/GenrePage.vue";
import CatalogGenrePage from "@/pages/CatalogGenrePage.vue";

const routes = [
    { path: '/', component: MainPage },
    { path: '/genre', component: CatalogGenrePage },
    { path: '/about', component: AboutPage },
    { path: '/genre/:genre', component: GenrePage, props: true },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router