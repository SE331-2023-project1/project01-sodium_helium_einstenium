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
    <div v-if="student" class="min-h-screen bg-black-100">
       <div class="bg-orange shadow-md">
            <div class="container mx-auto py-4 flex justify-center items-center">
                <router-link :to="{ name: 'student-detail' , params: { id }}" class="text-orange-500 hover:text-gray-900 mx-4 font-semibold">Student Detail</router-link>
                <router-link :to="{ name: 'student-add' , params: { id }}" class="text-orange-500 hover:text-gray-900 mx-4 font-semibold">Add Student Data</router-link>
                <router-link :to="{ name: 'student-comment' , params: { id }}" class="text-orange-500 hover:text-gray-900 mx-4 font-semibold">Add Comment</router-link>
            </div>
       </div>
       <router-view :student="student" :advisor="advisor"></router-view>
    </div>
</template>
<style scoped>
</style>

<style>
body{
    color: white;
}
</style>