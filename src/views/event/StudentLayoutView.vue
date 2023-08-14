<script setup lang="ts">
import { useInformationStore } from '@/stores/informantion';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const store = useInformationStore()
const student = storeToRefs(store).student
const advisor = storeToRefs(store).advisor
const id = ref(student?.value?.id)
</script>
<template>
    <div v-if="student">
       
       <div id="nav">
        <router-link :to="{ name: 'student-detail', params:{id}}">Student Detail | </router-link>
        <router-link :to="{ name: 'student-add', params:{id}}">Add Student Data | </router-link>
        <router-link :to="{ name: 'student-comment', params:{id}}">Add Comment |</router-link>

       </div>
       <RouterView :student="student" :advisor="advisor"></RouterView>
    </div>
</template>
<style scoped>
</style>