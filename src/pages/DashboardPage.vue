<template>
    <div>
        <h1>Dashboard</h1>
    </div>
</template>

<script>
    export default {
        beforeRouteEnter(to, from, next) {
            if (!store.getters['auth/isLoggendIn']) {
                next({ path: '/login' })
            } else {
                next()
            }
        }
    }
</script>

<style scoped>

</style>