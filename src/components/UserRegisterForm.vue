<template>
    <div>
        <form @submit.prevent>
            <h4>Registration</h4>
            <MyInput v-model="user.username" autocomplete="username" placeholder="Username"/>
            <MyInput v-model="user.email" placeholder="E-Mail"/>
            <MyInput v-model="user.password" autocomplete="new-password" type="password" placeholder="Password"/>
            <MyInput v-model="confirmPassword" type="password" placeholder="Confirm Password"/>
            <MyButton style="align-self: flex-end;margin-top: 15px;" @click="createUser">Register</MyButton>
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            user: {
                username: '',
                email: '',
                password: '',
            },
            confirmPassword: '',
        };
    },
    methods: {
        createUser() {
            if (this.user.password !== this.confirmPassword) {
                alert('Passwords do not match!');
                return;
            } else {
                this.$emit('createUser', this.user);
                this.user = {
                    username: '',
                    email: '',
                    password: '',
                },
                this.confirmPassword = '';         
            };
        },
    },
}
</script>

<style scoped>
    form{
        display: flex;    
        flex-direction: column;
    }
</style>