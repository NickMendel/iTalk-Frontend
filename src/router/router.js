import Home from '@/pages/Home.vue';
import { createRouter, createWebHistory } from 'vue-router';
import UserRegistration from '@/pages/UserRegistration.vue';


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

    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;