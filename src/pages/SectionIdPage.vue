<template>
    <div>
        <div>
            <SectionItemWithoutButtons :section="section" :key="section.id">
                <MyButton @click="$router.push(`/sections/${section.id}`)" v-if="showButtons">Open</MyButton>
                <MyButton @click="$emit('removeSection', section)" v-if="showButtons">Delete</MyButton>
            </SectionItemWithoutButtons>
        </div>
    </div>
</template>

<script>
import SectionItemWithoutButtons from '@/components/SectionItemWithoutButtons.vue';
import axios from 'axios';

export default {
    data() {
        return {
            section: {},
            showButtons: false,
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
    },
    mounted() {
        this.fetchSection();
    },
    components: {  SectionItemWithoutButtons }
}
</script>

<style scoped></style>