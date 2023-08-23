<script setup lang="ts">
import type { AdvisorInfo } from '@/info'
import { type PropType } from 'vue'

defineProps({
  advisor: {
    type: Object as PropType<AdvisorInfo>,
    require: true
  }
})
</script>
<template>
    <div class="advisor-detail" v-if="advisor">
        <div class="image-container">
            <img class="image" :src="advisor.image">
        </div>
        <div class="advisor-info mt-5">
            <p>Name: {{ advisor.name }}</p>
            <p>Surname: {{ advisor.surname }}</p>
        </div>
    </div>
  </template>

<style scoped>

.image {
    width: 300px;
    height: 200px;
}

.advisor-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>
