<script setup lang="ts">
import type { AdvisorInfo } from '@/info'
import { useAdvisorStore } from '@/stores/advisor';
import { computed, type PropType } from 'vue'
import AdvisorCreatedDetail from '@/components/AdvisorCreatedDetail.vue'


defineProps({
  advisor: {
    type: Object as PropType<AdvisorInfo>,
    require: true
  }
})

const advisorStore = useAdvisorStore()
const createAdvisors = computed(() => advisorStore.getCreatedAdvisor())

</script>
<template>
    <div class="advisor-detail" v-if="advisor">
        <div class="image-container">
            <img class="image" :src="advisor.image">
        </div>
        <div class="advisor-info">
            <p>Name: {{ advisor.name }}</p>
            <p>Surname: {{ advisor.surname }}</p>
        </div>
    </div>
    <AdvisorCreatedDetail v-if="createAdvisors.length" :createAdvisors="createAdvisors"></AdvisorCreatedDetail>
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
