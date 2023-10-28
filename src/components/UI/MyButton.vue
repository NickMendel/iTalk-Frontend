<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'MyButton',
    }
</script>

<style scoped>
.btn {
    padding: 10px 15px;
    background: none;
    color: dimgray;
    border: 1px solid slategray;
    margin-bottom: 10px;
}
</style>