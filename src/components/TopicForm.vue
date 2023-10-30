<template>
    <div>
        <form @submit.prevent>
            <h4>Create topic</h4>
            <MyInput v-model="topic.title" placeholder="Title" />
            <MyInput v-model="topic.description" type="text" placeholder="Description" />
            <MyButton style="align-self: flex-end;margin-top: 15px;" @click="createTopic">Create topic</MyButton>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            topic: {
                title: '',
                description: '',
            }
        }
    },
    methods: {
        createTopic() {
            this.$emit('createTopic', this.topic);
            this.topic = {
                title: '',
                description: '',
            }
        }
    }

}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}
</style>