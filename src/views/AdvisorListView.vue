<script setup lang="ts">
import AdvisorCard from '@/components/AdvisorCard.vue';
import type { AdvisorInfo } from '@/info';
import InformationService from '@/services/InformationService'
import type { Ref } from 'vue'
import { ref } from 'vue'

const advisors: Ref<Array<AdvisorInfo>> = ref([])
  InformationService.getAdvisor().then((response) => {
    advisors.value = response.data
  })

</script>

<template>
  <main>
    <div class="advisor">
      <AdvisorCard v-for="advisor in advisors" :key="advisor.id" :advisor="advisor"></AdvisorCard>
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
