import { createRouter, createWebHistory } from 'vue-router'
import Splash from './pages/MySplash'

const routes = [
    {
        path: '/',
        name: 'splash',
        component: Splash
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router