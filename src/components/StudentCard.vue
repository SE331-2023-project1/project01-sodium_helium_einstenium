<script setup lang="ts">
import type { StudentInfo } from '../info'
import type { PropType } from 'vue'
defineProps({
  student: {
    type: Object as PropType<StudentInfo>,
    required: true
  }
})
</script>

<template>
   <RouterLink class="student-link" :to="{ name: 'student-detail', params: {id: student?.id}}">
  <div class="student-card">
    <div class="text-center mt-20">
    <span> Student ID: {{ student.studentID }}</span>
    <p> Name: {{ student.name }}  {{ student.surname }}</p>
  </div>
  </div>
</RouterLink>
</template>


<style scoped>
.student-card {
  padding: 20px;
  width: 250px;
  height: 250px;
  cursor: pointer;
  border: solid 1px black;
  margin-bottom: 18px;
}

.student-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

</style>
