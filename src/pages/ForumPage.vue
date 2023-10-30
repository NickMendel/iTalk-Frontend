<template>
    <div>
        <div>
            <SectionForm @createSection="createSection" />
        </div>
        <div>
            <SectionList :sections="sections" @removeSection="removeSection"/>
        </div>
    </div>
</template>

<script>
import SectionForm from '@/components/SectionForm.vue';
import SectionList from '@/components/SectionList.vue';
import axios from 'axios';
export default {
    components: {
        SectionForm,
        SectionList
    },
    data() {
        return {
            sections: [],
        };
    },
    methods: {
        createSection(section) {
            const newSection = {
                name: section.name,
                description: section.description,
            };
            const request = axios.post('http://localhost:8080/api/v1/sections/', newSection)
                .then((response) => {
                    console.log('Section created: ', response.data);
                    this.fetchSections();
                })
                .catch((error) => {
                    console.log('Error creating section: ', error);
                });
        },
        removeSection(section) {
            const request = axios.delete(`http://localhost:8080/api/v1/sections/${section.id}`)
                .then((response) => {
                    console.log('Section deleted: ', response.data);
                    this.fetchSections();
                })
                .catch((error) => {
                    console.log('Error deleting section: ', error);
                });
        },
        async fetchSections() {
            try {
                const response = await axios.get('http://localhost:8080/api/v1/sections/');
                this.sections = response.data;
                console.log('Sections fetched: ', this.sections);
            } catch (error) {
                console.log('Error fetching sections: ', error);
            }

        },
    },
    mounted() {
        this.fetchSections();
        },
}
</script>

<style scoped></style>