<script setup lang="ts">
import type { Information } from '@/info';
import { type PropType } from 'vue';

defineProps({
    student: {
        type: Object as PropType<Information>,
        require: true
    },
    advisor: {
        type: Object as PropType<Information>,
        require: true
    }
})
</script>
<template>
<div class="student-detail" v-if="student">
    <div class="image-container">
        <img class="image" :src="student.image">
    </div>
   <div class="student-info">
    <span> {{ student.studentID }}</span>
   <p>{{ student.name }}  {{ student.surname }}</p>
   <p>{{ advisor?.name }}  {{ advisor?.surname }}</p>
   </div>
  
</div>
</template>

<style scoped>
.image {
    max-width: 150px;
}
.student-detail {
   display: flex;
   flex-direction: column;
   align-items: center;
}

</style>