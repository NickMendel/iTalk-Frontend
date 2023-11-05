<template>
    <div v-if="topics.length > 0">
        <h4>Topics</h4>
        <div name="topic-list">
            <TopicItem v-for="topic in topics" :topic="topic" :key="topic.id" @removeTopic="$emit('removeTopic', topic)" />
        </div>
    </div>
    <div v-else>
        <h4 style="color: red;">No topics created yet</h4>
    </div>
</template>

<script>
import TopicItem from '@/components/TopicItem.vue';

export default {
    props: {
        topics: {
            type: Array,
            required: true,
        }
    },
    components: { TopicItem },
}
</script>

<style scoped></style>