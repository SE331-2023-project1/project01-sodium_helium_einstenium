<script setup lang="ts">
import type { Information } from '@/info';
import { reactive, type PropType } from 'vue'
const { student } = defineProps({
    student: {
        type: Object as PropType<Information>,
        required: true
    }
})
const form = reactive({
    studentProfile: ''
})
const emit = defineEmits(['add-student-submitted'])
function onSubmit(){
    if(form.studentProfile === ''){
        alert('Please fill out the field')
        return
    }
    const studentAddData = {
        student_id: student.id,
        student_name: student.name,
        student_surname: student.surname,
        studentProfile: form.studentProfile
    }
    emit('add-student-submitted', studentAddData)

    form.studentProfile = '';
}
</script>
<template>
    <form class="student-data-form" @submit.prevent="onSubmit">
        <div>
            <label for="studentProfile">Add Details</label>
            <textarea id="studentProfile" v-model="form.studentProfile"></textarea>
            <input class="button" type="submit" value="Submit">
        </div>
    </form>
</template>