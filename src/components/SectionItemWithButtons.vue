<template>
    <div class="section">
        <div @click="$router.push(`/sections/${section.id}`)">
            <div><strong>Name:</strong> {{ section.name }}</div>
            <div><strong>Description:</strong> {{ section.description }}</div>
        </div>
        <div class="section__btns">
            <MyButton @click="$emit('removeSection', section)">Delete</MyButton>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        section: {
            type: Object,
            required: true,
        }
    },        
}
</script>

<style scoped>
.section {
    border: 2px solid teal;
    padding: 15px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.section__btns {
    display: flex;
}
</style>