<script setup lang="ts">
import { useAdvisorStore } from '@/stores/advisor'
import { storeToRefs } from 'pinia'
const advisorStore = useAdvisorStore()
const advisor = storeToRefs(advisorStore).advisor


</script>
<template>
  <div v-if="advisor">
    <RouterView :advisor="advisor"></RouterView>
  </div>
</template>
