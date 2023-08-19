<script setup lang="ts">
import router from '@/router';
import { useAdvisorStore } from '@/stores/advisor'
import { storeToRefs } from 'pinia'
const advisorStore = useAdvisorStore()
const advisor = storeToRefs(advisorStore).advisor
const id = router.currentRoute.value.params.id

</script>
<template>
  <div v-if="advisor">
    <div id="nav">
      <router-link :to="{ name: 'advisor-detail', params: { id } }">Advisor detail</router-link>
      
    </div>
    <RouterView :advisor="advisor"></RouterView>
  </div>
</template>
