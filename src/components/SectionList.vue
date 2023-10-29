<template>
    <div v-if="sections.length > 0">
        <h4>Sections</h4>
        <div name="section-list">
            <SectionItemWithButtons v-for="section in sections" :section="section" :key="section.id" />
        </div>
    </div>
    <div v-else>
        <h4 style="color: red;">No sections created yet</h4>
    </div>
</template>

<script>
import SectionItemWithButtons from './SectionItemWithButtons.vue';

export default {
    components: { SectionItemWithButtons },
    props: {
        sections: {
            type: Array,
            required: true,
        }
    }

}
</script>

<style scoped></style>