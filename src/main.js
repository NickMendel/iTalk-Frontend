import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import store from '@/store'
import components from '@/components/UI';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api/v1';

axios.interceptors.request.use(
    config => {
        const token = store.state.token;
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
    });


app.use(store).use(router).mount('#app')
