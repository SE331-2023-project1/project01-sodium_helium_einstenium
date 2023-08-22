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
        <textarea class="text-black" id="comment" v-model="form.comment"></textarea>
      </div>
      <div>
        <label for="date">Date:</label>
        <br>
        <input class="text-black" id="date" v-model="form.date" />
      </div>
      <div>
        <label for="professor_name">Professor Name: </label>
        <br>
        <input class="text-black" id="professor_name" v-model="form.professor_name" />
      </div>
      <input
        class="mt-5 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        type="submit"
        value="Add Comment"
      />
    </div>
  </form>
</template>
