import Home from '@/pages/Home.vue';
import { createRouter, createWebHistory } from 'vue-router';
import UserRegistration from '@/pages/UserRegistration.vue';
import ForumPage from '@/pages/ForumPage.vue';
import SectionIdPage from '@/pages/SectionIdPage.vue';
import Login from '@/pages/LoginPage.vue';
import Dashboard from '@/pages/DashboardPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/register',
        name: 'UserRegistration',
        component: UserRegistration
    },
    {   path: '/forum',
        name: 'Forum',
        component: ForumPage

    },
    {
        path: '/sections/:id',
        name: 'Section',
        component: SectionIdPage
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;