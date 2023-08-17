<script setup lang="ts">
import type { AdvisorInfo, Information } from '@/info'
import type { PropType } from 'vue'
import StudentAddDataForm from '@/components/StudentAddDataForm.vue'
import { useStudentStore } from '@/stores/informantion';
defineProps({
    student: {
        type: Object as PropType<Information>,
        require: true
    },
    advisor: {
        type: Object as PropType<AdvisorInfo>,
        require: true
    },
    id: String
    
})
const store = useStudentStore()
function addStudentDataBtn(studentData: Information){
   store.addStudentData(studentData)
}
</script>
<template>
    <div v-if="student">
        <StudentAddDataForm :student="student" @add-student-submitted="addStudentDataBtn"></StudentAddDataForm>
    </div>
    
</template>