<template>
    <div>
        <UserRegisterForm @createUser="createUser" />
    </div>
    <div v-if="isSuccess" class="success-message">
        <span>Account created successfully!</span>
    </div>
</template>

<script>
import UserRegisterForm from '@/components/UserRegisterForm.vue';
import MyButton from '@/components/UI/MyButton.vue';
import MyInput from '@/components/UI/MyInput.vue';
import axios from 'axios';

export default {
    components: {
        UserRegisterForm,
        MyButton,
        MyInput
    },
    data() {
        return {
            isSuccess: false,
        }
    },
    methods: {
        createUser(user) {
            const newUser = {
                username: user.username,
                email: user.email,
                password: user.password,
            };
            const request = axios.post('http://localhost:8080/api/v1/users/', newUser)
                .then((response) => {
                    console.log('User created: ', response.data);
                    this.isSuccess = true;
                })
                .catch((error) => {
                    console.log('Error creating user: ', error);
                });
        }
    }
}
</script>

<style scoped>
.success-message {
    background-color: #4caf50;
    color: white;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
}
</style>