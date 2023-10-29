<template>
    <div>
        <form @submit.prevent>
            <h4>Create a section</h4>
            <MyInput v-model="section.name" placeholder="Section name"/>
            <MyInput v-model="section.description" placeholder="Section description"/>
            <MyButton style="align-self: flex-end;margin-top: 15px;" @click="createSection">Create a section</MyButton>
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            section: {
                name: '',
                description: '',
            }
        };
    },
    methods: {
        createSection() {
            this.$emit('createSection', this.section);
            this.section = {
                name: '',
                description: '',
            };
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