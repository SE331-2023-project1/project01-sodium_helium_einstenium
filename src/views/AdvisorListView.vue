<script setup lang="ts">
import AdvisorCard from '@/components/AdvisorCard.vue';
import AdvisorCreateCard from '../views/advisor/AdvisorCreateCard.vue';
import type { AdvisorInfo } from '@/info';
import AdvisorService from '@/services/AdvisorService';
import { useAdvisorStore } from '@/stores/advisor';
import type { Ref, PropType } from 'vue'
import { computed, ref } from 'vue'
defineProps({
  advisor: {
    type: Object as PropType<AdvisorInfo>
  }
})
const advisors: Ref<Array<AdvisorInfo>> = ref([])
  AdvisorService.getAdvisor().then((response) => {
    advisors.value = response.data
  })
const advisorStore = useAdvisorStore()
const createAdvisors = computed(() => advisorStore.getCreatedAdvisor())


</script>

<template>
  <main>
    <div class="advisor">
      <AdvisorCard v-for="advisor in advisors" :key="advisor.id" :advisor="advisor"></AdvisorCard>
      <AdvisorCreateCard v-for="createAdvisor in createAdvisors" :key="createAdvisor.id" :createAdvisor="createAdvisor"></AdvisorCreateCard>
    </div>
    
  </main>
</template>
<style>
.advisor {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
