<script setup lang="ts">
import type { AdvisorInfo } from '../info'
import type { PropType } from 'vue'
defineProps({
  advisor: {
    type: Object as PropType<AdvisorInfo>,
    required: true
  }
})
</script>

<template>
  <RouterLink class="advisor-link" :to="{ name: 'advisor-detail', params: { id: advisor?.id } }">
    <div class="advisor-card">
      <div class="text-center mt-24">
        <p>Name: {{ advisor.name }} {{ advisor.surname }}</p>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.advisor-card {
  padding: 20px;
  width: 250px;
  height: 250px;
  cursor: pointer;
  border: solid 1px black;
  margin-bottom: 18px;
}

.advisor-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
