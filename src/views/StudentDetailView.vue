<script setup lang="ts">
import type { Information } from '@/info';
import InformationService from '@/services/InformationService';
import { ref } from 'vue';


const student = ref<Information | null> (null)
const props = defineProps({
    id: String
})
InformationService.getStudentById(Number(props.id))
.then((response) => {
    student.value = response.data
})
.catch((error) => {
    console.log(error)
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
   <p>{{ student.teacher }}</p>
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