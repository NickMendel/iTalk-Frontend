<template>
    <div>
        <UserRegisterForm @createUser="createUser" />
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
                })
                .catch((error) => {
                    console.log('Error creating user: ', error);
                });
        }
    }
}
</script>

<style scoped></style>