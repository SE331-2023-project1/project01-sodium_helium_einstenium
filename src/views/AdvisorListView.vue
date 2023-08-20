<script setup lang="ts">
import AdvisorCard from '@/components/AdvisorCard.vue';
import AdvisorCreateCard from '../views/advisor/AdvisorCreateCard.vue';
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
    <div class="advisor">
      <AdvisorCard v-for="advisor in advisors" :key="advisor.id" :advisor="advisor"></AdvisorCard>
      <AdvisorCreateCard v-for="createAdvisor in createAdvisors" :key="createAdvisor.id" :createAdvisor="createAdvisor"></AdvisorCreateCard>
    </div>
  
  </main>
</template>
<style scoped>
.advisor {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}
#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
