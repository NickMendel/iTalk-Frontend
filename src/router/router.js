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
    {
        path: '/forum',
        name: 'Forum',
        component: ForumPage,
        meta: {
            requiresAuth: true
        }

    },
    {
        path: '/sections/:id',
        name: 'Section',
        component: SectionIdPage,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: {
            requiresAuth: true
        }
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

router.beforeEach((to, frrom, next) => {
    if (to.meta.requiresAuth && !store.getters.isLoggedIn) {
        next('/login');
    } else {
        next();
    }
});

export default router;