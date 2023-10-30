<template>
    <div>
        <div>
            <SectionItemWithoutButtons :section="section" :key="section.id">
                <MyButton @click="showDialog">Create Topic</MyButton>
            </SectionItemWithoutButtons>
        </div>
        <MyDialog v-model:show="dialogVisible">
            <TopicForm @createTopic="createTopic" />
        </MyDialog>
        <TopicList :topics="topics" @removeTopic="removeTopic" />
    </div>
</template>

<script>
import SectionItemWithoutButtons from '@/components/SectionItemWithoutButtons.vue';
import TopicForm from '@/components/TopicForm.vue';
import TopicList from '@/components/TopicList.vue';
import axios from 'axios';

export default {
    data() {
        return {
            section: {},
            showButtons: false,
            dialogVisible: false,
            topics: [],
            user: {},
        };
    },
    methods: {
        async fetchSection() {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/sections/${this.$route.params.id}`);
                this.section = response.data;
                console.log('Section fetched: ', this.section);
            } catch (error) {
                console.log('Error fetching section: ', error);
            }
        },
        showDialog() {
            this.dialogVisible = true;
        },
        createTopic(topic) {
            const newTopic = {
                title: topic.title,
                description: topic.description,
                section: this.section,
                user: this.user
            };
            const request = axios.post(`http://localhost:8080/api/v1/sections/${this.$route.params.id}/topics/`, newTopic)
                .then((response) => {
                    console.log('Topic created: ', response.data);
                    this.dialogVisible = false;
                    this.fetchTopics();
                })
                .catch((error) => {
                    console.log('Error creating topic: ', error);
                });
        },
        removeTopic(topic) {
            const request = axios.delete(`http://localhost:8080/api/v1/sections/${this.$route.params.id}/topics/${topic.topic_id}`)
                .then((response) => {
                    console.log('Topic deleted: ', response.data);
                    this.fetchTopics();
                })
                .catch((error) => {
                    console.log('Error deleting topic: ', error);
                });
        },
        async fetchUser() {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/users/1');
                this.user = response.data;
                console.log('User fetched: ', this.user);
            } catch (error) {
                console.log('Error fetching user: ', error);
            }
        },
        async fetchTopics() {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/sections/${this.$route.params.id}/topics/`);
                this.topics = response.data;
                console.log('Topics fetched: ', this.topics);
            } catch (error) {
                console.log('Error fetching topics: ', error);
            }
        },
    },
    mounted() {
        this.fetchSection();
        this.fetchUser();
        this.fetchTopics();
    },
    components: { SectionItemWithoutButtons, TopicForm, TopicList }
}
</script>

<style scoped></style>