<template>
    <div class="navbar">
        <div class="logo" @click="$router.push('/')">iTalk-Forum</div>
        <div class="navbar__btns">
            <MyButton>Home</MyButton>
            <MyButton>Forum</MyButton>
            <MyButton>Profile</MyButton>
            <MyButton>Sign in</MyButton>
            <MyButton @click="$router.push('/newRegistration')">Sign up</MyButton> 
        </div>
    </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue';
    export default {
        
    }
</script>

<style scoped>
.navbar {
    height: 50px;
    background-color: lightgray;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 10px;
}

.logo {
    color: white;
    font-size: 30px;
    font-weight: bold;
    margin-left: 10px;
    margin-top: 10px;

}

.navbar__btns {
    margin-left: auto;
    margin-right: 10px;
    margin-top: 10px;
}
</style>