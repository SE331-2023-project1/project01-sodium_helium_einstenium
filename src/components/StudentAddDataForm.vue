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
        <br>
        <input id="dataHeader" v-model="form.dataHeader" />
      </div>
      <div>
        <label for="addedData">Add Details</label> <br> <input id="addedData" v-model="form.addedData" />
      </div>
      <input
        class="button border-2 bg-green-200 text-slate-950 rounded-full mt-5"
        type="submit"
        value="Submit"
      />
    </div>
  </form>
</template>
