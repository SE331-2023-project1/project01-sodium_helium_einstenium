<script setup lang="ts">
import { useAdvisorStore } from '@/stores/advisor';
import { computed } from 'vue';
import router from '@/router';
const advisorStore = useAdvisorStore();
const advisorId = Number(router.currentRoute.value.params.id);
const createAdvisor = computed(() => advisorStore.getCreatedAdvisorById(advisorId));
</script>

<template>
  <div class="advisor-created-detail mt-5">
    <div v-for="advisor in createAdvisor" :key="advisor.id">
      <div class="image-container">
        <img class="image" :src="advisor.image">
      </div>
      <div class="advisor-info mt-5">
        <p>Name: {{ advisor.name }}</p>
        <p>Surname: {{ advisor.surname }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>

.image {
  width: 300px;
    height: 200px;
}

.advisor-created-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>
