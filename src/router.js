import { createRouter, createWebHistory } from 'vue-router'
import Splash from './pages/MySplash'
import Forum from './pages/MyStandForum'

const routes = [
    {
        path: '/',
        name: 'splash',
        component: Splash
    },
    {
        path: '/forum',
        name: 'forum',
        component: Forum
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router