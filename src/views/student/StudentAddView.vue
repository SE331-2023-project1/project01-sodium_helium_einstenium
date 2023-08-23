<script setup lang="ts">
import type { AdvisorInfo, StudentInfo } from '@/info'
import type { PropType } from 'vue'
import StudentAddDataForm from '@/components/StudentAddDataForm.vue'
import { useStudentStore } from '@/stores/student';
import { useRouter } from 'vue-router';
import { useMessageStore } from '@/stores/message';
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
const messageStore = useMessageStore()
function addStudentDataBtn(studentData: StudentInfo){
   console.log( studentData.id)
   store.addStudentData(studentData)
   console.log('After Add Btn ' + studentData.id)
   messageStore.updateMessage('you are kruBa'+  props.student?.name)
    setTimeout(() => {
      messageStore.resetMessage()
    }, 3000)
   router.push({name: 'student-detail', params: {id: props.student?.id}});
}
</script>
<template>
    <div v-if="student" class="mt-5">
        <StudentAddDataForm :student="student" @student-submitted="addStudentDataBtn"></StudentAddDataForm>
    </div>
    
</template>@/stores/student