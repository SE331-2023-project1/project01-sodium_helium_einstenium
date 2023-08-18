<script setup lang="ts">
import { useStudentStore } from '@/stores/student';
import { useAdvisorStore } from '@/stores/advisor'
import { storeToRefs } from 'pinia';
import { ref } from 'vue';


const studentStore = useStudentStore()
const advisorStore = useAdvisorStore()
const student = storeToRefs(studentStore).student
const advisor = storeToRefs(advisorStore).advisor
const id = ref(student.value?.id)
</script>
<template>
    <div v-if="student">
       
       <div id="nav">
        <router-link :to="{ name: 'student-detail', params:{id}}">Student Detail | </router-link>
        <router-link :to="{ name: 'student-add',params:{id}}">Add Student Data | </router-link>
        <router-link :to="{ name: 'student-comment',params:{id}}">Add Comment |</router-link>

       </div>
       <RouterView :student="student" :advisor="advisor" ></RouterView>
    </div>
</template>
<style scoped>
</style>