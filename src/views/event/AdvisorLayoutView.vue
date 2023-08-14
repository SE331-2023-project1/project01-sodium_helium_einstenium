<script setup lang="ts">
import { useInformationStore } from '@/stores/informantion'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
const store = useInformationStore()
const advisor = storeToRefs(store).advisor
const id = ref(advisor?.value?.id)
</script>
<template>
  <div v-if="advisor">
    <div id="nav">
      <router-link :to="{ name: 'advisor-detail', params: { id } }">Advisor detail</router-link>
      <router-link :to="{ name: 'advisor-add', params: { id } }">Advisor data</router-link>
    </div>
    <RouterView :advisor="advisor"></RouterView>
  </div>
</template>
