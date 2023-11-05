<template>
    <div class="topic">
        <div>
            <div><strong>Title:</strong> {{ topic.title }}</div>
            <div><strong>Description:</strong> {{ topic.description }}</div>
        </div>
        <div class="topic__btns">
            <MyButton @click="$emit('removeTopic', topic)">Delete</MyButton>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        topic: {
            type: Object,
            required: true,
        }
    },
}
</script>

<style scoped>
.topic {
    border: 2px solid teal;
    padding: 15px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.topic__btns {
    display: flex;
}
</style>