<script setup lang="ts">
import AdvisorCard from '@/components/AdvisorCard.vue';
import AdvisorCreateCard from '@/components/AdvisorCreateCard.vue';
import type { AdvisorInfo } from '@/info';
import AdvisorService from '@/services/AdvisorService';
import { useAdvisorStore } from '@/stores/advisor';
import type { Ref } from 'vue'
import { computed, ref } from 'vue'
const advisors: Ref<Array<AdvisorInfo>> = ref([])
AdvisorService.getAdvisor().then((response) => {
    advisors.value = response.data
  })
const advisorStore = useAdvisorStore()
const createAdvisors = computed(() => advisorStore.getCreatedAdvisor())


</script>

<template>
  <main>
    <div class="flex flex-col items-center">
      <div class="grid grid-cols-3 gap-4 mt-32">
      <AdvisorCard v-for="advisor in advisors" :key="advisor.id" :advisor="advisor"></AdvisorCard>
      <AdvisorCreateCard v-for="createAdvisor in createAdvisors" :key="createAdvisor.id" :createAdvisor="createAdvisor"></AdvisorCreateCard>
    </div>
  
    </div>
  
  </main>
</template>
