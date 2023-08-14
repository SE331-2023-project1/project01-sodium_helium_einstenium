<script setup lang="ts">
import type { Information } from '../info'
import type { PropType } from 'vue'
const props = defineProps({
  student: {
    type: Object as PropType<Information>,
    required: true
  }
})
</script>

<template>
  <div class="student-card">
    
    <span> Student ID: {{ student.studentID }}</span>
    <p> Name: {{ student.name }}</p>
    <p> Surname: {{ student.surname }}</p>
  </div>
</template>

<style scoped>
.student-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: solid 1px black;
  margin-bottom: 18px;
}

.student-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

</style>
