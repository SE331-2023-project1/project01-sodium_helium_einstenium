<script setup lang="ts">
import type { AdvisorInfo } from '@/info';
import type { PropType } from 'vue';

defineProps({
    createAdvisor: {
        type: Object as PropType<AdvisorInfo[]>,
        required: true
    }
})
</script>
<template>
    <div> Hello This is Test</div>
     <div class="advisor-detail" v-for="create_advisor in createAdvisor" :key="create_advisor.id">
        <div class="image-container">
            <img class="image" :src="create_advisor.image">
        </div>
        <div class="advisor-info">
            <p>Name: {{ create_advisor.name }}</p>
            <p>Surname: {{ create_advisor.surname }}</p>
        </div>
    </div>
</template>
<style scoped>

.image {
    max-width: 150px;
}

.advisor-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>