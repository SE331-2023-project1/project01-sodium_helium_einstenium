<script setup lang="ts">
import type { Information } from '@/info';
import type { PropType } from 'vue';

defineProps({
   studentsAdd: {
    type: Object as PropType<Information[]>,
    required: true
   }
})
</script>
<template>
    <div v-for="(studentAdd, index) in studentsAdd" :key="index">
     <p>profile: {{ studentAdd.studentProfile }}</p>
     <p>{{ studentAdd.name }}  {{ studentAdd.surname }}</p>
    </div>
</template>