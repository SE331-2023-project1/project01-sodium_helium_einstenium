<script setup lang="ts">
import type { StudentInfo } from '@/info';
import type { AdvisorInfo } from '@/info'
import router from '@/router';
import { useStudentStore } from '@/stores/student';
import { computed, type PropType } from 'vue';
import StudentAddDataList from '@/components/StudentAddDataList.vue';
import { useCommentStore } from '@/stores/comment';
import StudentCommentList from '@/components/StudentCommentList.vue';
defineProps({
    student: {
        type: Object as PropType<StudentInfo>,
        require: true
    },
    advisor: {
        type: Object as PropType<AdvisorInfo>,
    }
})
const studentStore = useStudentStore()
const commentStore = useCommentStore()
const studentId = router.currentRoute.value.params.id
const studentsAdd = computed(() => studentStore.getStudentDataById(Number(router.currentRoute.value.params.id)))
const comments = computed(() => commentStore.getCommentByStudentId(studentId.toString()));
console.log(comments)
console.log(studentsAdd)
</script>
<template>
<div class="student-detail" v-if="student">
    <div class="image-container">
        <img class="image" :src="student.image">
    </div>
   <div class="student-info">
    <span> {{ student.studentID }}</span>
    <p>{{ student.name }}  {{ student.surname }}</p>
    <ul v-for="course in student.courses" :key="course">
    <li>{{ course }}</li>
    </ul>
   <RouterLink :to="{ name: 'advisor-detail', params:{ id: advisor?.id } }">{{ advisor?.name }}  {{ advisor?.surname }}</RouterLink>
   </div>
   <StudentAddDataList v-if="studentsAdd.length" :studentsAdd="studentsAdd"></StudentAddDataList>

   <StudentCommentList v-if="comments.length" :comments="comments"></StudentCommentList>
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
</style>@/stores/student