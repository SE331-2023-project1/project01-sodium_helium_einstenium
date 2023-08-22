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
  dataHeader: '',
  addedData: ''
})
const emit = defineEmits(['student-submitted'])
function onSubmit() {
  if (form.addedData === '' || form.dataHeader === '') {
    alert('Please fill out the field')
    return
  }
  const studentAddData = {
    id: student.id,
    dataHeader: form.dataHeader,
    addedData: form.addedData
  }
  emit('student-submitted', studentAddData)

  form.dataHeader = ''
  form.addedData = ''
}
</script>
<template>
  <form class="student-data-form" @submit.prevent="onSubmit">
    <div class="flex flex-col items-center">
      <div>
        <label for="dataHeader"> Header of Data</label>
        <br />
        <input class="text-black" id="dataHeader" v-model="form.dataHeader" />
      </div>
      <div>
        <label for="addedData">Add Details</label> <br />
        <textarea class="text-black" id="addedData" v-model="form.addedData"></textarea>
      </div>
      <input
        class="mt-5 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        type="submit"
        value="Add Student Data"
      />
    </div>
  </form>
</template>
