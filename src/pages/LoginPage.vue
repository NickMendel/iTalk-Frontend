<template>
    <div>
        <MyDialog v-model:show="dialogVisible">
            <LoginForm @login="login"/>
        </MyDialog>
    </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import axios from 'axios';

export default {
    components: { LoginForm },
    data() {
        return {
            dialogVisible: true,
        }
    },
    methods: {
        login(user) {
            const loginUser = {
                username: user.username,
                password: user.password,
            };

            const request = axios.post('http://localhost:3000/auth/login', loginUser) 
                .then((response) => {
                    console.log('Login successful: ', response.data);
                    localStorage.setItem('token', response.data.accessToken);
                    
                    sleep(1000);
                    //this.$router.push('/dashboard');
                })
                .catch((error) => {
                    console.log('Error logging in: ', error);
                });
        },
    }
}
</script>

<style scoped></style>