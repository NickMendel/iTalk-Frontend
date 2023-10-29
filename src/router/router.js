import Home from '@/pages/Home.vue';
import { createRouter, createWebHistory } from 'vue-router';
import UserRegistration from '@/pages/UserRegistration.vue';
import ForumPage from '@/pages/ForumPage.vue';
import SectionIdPage from '@/pages/SectionIdPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/newRegistration',
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
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;