<script setup lang="ts">
import type { AdvisorInfo } from '@/info'
import type { PropType } from 'vue'
import AdvisorDetail from '@/components/AdvisorDetail.vue';
 defineProps({
  advisor: {
    type: Object as PropType<AdvisorInfo>,
    required: true
  },
})
</script>
<template>
   <AdvisorDetail v-if="advisor" :advisor="advisor"></AdvisorDetail>
</template>

