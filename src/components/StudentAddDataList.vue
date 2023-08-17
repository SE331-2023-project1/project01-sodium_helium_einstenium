<script setup lang="ts">
import type { StudentInfo } from '@/info';
import type { PropType } from 'vue';

defineProps({
   studentsAdd: {
    type: Object as PropType<StudentInfo[]>,
    required: true
   }
})
</script>
<template>
    <div v-for="(studentAdd, index) in studentsAdd" :key="index">
     <p>{{ studentAdd.dataHeader}} :  {{ studentAdd.addedData }}</p>
  
    </div>
</template>