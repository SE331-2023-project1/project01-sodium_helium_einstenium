<script setup lang="ts">
import type { StudentInfo } from '@/info'
import { reactive, type PropType } from 'vue'

const { student } = defineProps({
  student: {
    type: Object as PropType<StudentInfo>,
    required: true
  }
})
const form = reactive({
  professor_name: '',
  comment: '',
  date: ''
})

const emit = defineEmits(['comment-submitted'])
function onSubmit() {
  if (form.comment === '') {
    alert('Comment is incomplete. Please fill out the field.')
    return
  }
  const studentComment = {
    student_id: student.id,
    student_name: student.name,
    student_surname: student.surname,
    comment: form.comment,
    date: form.date,
    professor_name: form.professor_name
  }
  emit('comment-submitted', studentComment)
  form.comment = ''
  form.date = ''
  form.professor_name = ''
}
</script>
<template>
  <form class="comment-form" @submit.prevent="onSubmit">
    <div class="flex flex-col items-center">
      <div>
        <label for="comment">Add Comment</label>
        <br>
        <input id="comment" v-model="form.comment">
      </div>
      <div>
        <label for="date">Date:</label>
        <br>
        <input id="date" v-model="form.date" />
      </div>
      <div>
        <label for="professor_name">Professor Name: </label>
        <br>
        <input id="professor_name" v-model="form.professor_name" />
      </div>
      <input
        class="button border-2 bg-green-200 text-slate-950 rounded-full mt-5"
        type="submit"
        value="Submit"
      />
    </div>
  </form>
</template>
