<template>
    <div>
        <div class="login-mask">
            <form @submit.prevent="login">
                <h4>Login</h4>
                <MyInput v-model="user.username" placeholder="Username" />
                <MyInput v-model="user.password" type="password" placeholder="Password" />
                <MyButton style="align-self: center;margin-top: 15px;width: min-content;" @click="login" type="submit">Login</MyButton>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            user: {
                username: '',
                password: '',
            },
        };
    },
    methods: {
        login() {
            this.$emit('login', this.user);
            this.user = {
                username: '',
                password: '',
            };
        },
        ...mapActions('auth', ['login']),
    },

}
</script>

<style scoped></style>