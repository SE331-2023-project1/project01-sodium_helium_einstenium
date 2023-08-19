<script setup lang="ts">
import type { AdvisorInfo, StudentInfo } from '@/info'
import type { PropType } from 'vue'
import StudentAddDataForm from '@/components/StudentAddDataForm.vue'
import { useStudentStore } from '@/stores/student';
import { useRouter } from 'vue-router';
const router = useRouter()
const props = defineProps({
    student: {
        type: Object as PropType<StudentInfo>,
        require: true
    },
    advisor: {
        type: Object as PropType<AdvisorInfo>,
        require: true
    },
    id: String
    
})
const store = useStudentStore()

function addStudentDataBtn(studentData: StudentInfo){
   console.log( studentData.id)
   store.addStudentData(studentData)
   console.log('After Add Btn ' + studentData.id)
   router.push({name: 'student-detail', params: {id: props.student?.id}});
}
</script>
<template>
    <div v-if="student">
        <StudentAddDataForm :student="student" @student-submitted="addStudentDataBtn"></StudentAddDataForm>
    </div>
    
</template>@/stores/student