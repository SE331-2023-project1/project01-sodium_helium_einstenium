<script setup lang="ts">
import type { AdvisorInfo } from '../info'
import type { PropType } from 'vue'
defineProps({
    
  createAdvisors: {
    type: Object as PropType<AdvisorInfo[]>,
    required: true
  }
})
</script>

<template>
  <div class="advisor-card" v-for="(createAdvisor,index) in createAdvisors" :key="index">
    <RouterLink class="advisor-link" :to="{ name: 'advisor-detail', params: {id: createAdvisor?.id}}">
    <p> Name: {{ createAdvisor.name}}  {{ createAdvisor.surname }}</p>
    </RouterLink>
  </div>
</template>
<style>
.advisor-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: solid 1px black;
  margin-bottom: 18px;
}

.advisor-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>