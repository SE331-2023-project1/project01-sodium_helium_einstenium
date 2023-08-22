<script setup lang="ts">
import type { AdvisorInfo } from '@/info'

import { reactive, type PropType } from 'vue'
defineProps({
  advisor: {
    type: Object as PropType<AdvisorInfo>
  }
})
const emit = defineEmits(['create-submitted'])
const form = reactive({
  id: '',
  name: '',
  surname: '',
  image: ''
})

function onSubmit() {
  if (form.id === '' || form.name === '' || form.surname === '' || form.image === '') {
    alert('Please complete all blank field')
    return
  }
  const createAdvisor = {
    id: form.id,
    name: form.name,
    surname: form.surname,
    image: form.image
  }
  emit('create-submitted', createAdvisor)
  form.id = ''
  form.name = ''
  form.surname = ''
  form.image = ''
}
</script>
<template>
  <form class="create-advisor" @submit.prevent="onSubmit">
    <div class="flex flex-col items-center">
      <label for="id">Professor Id: </label>
      <input min="1" placeholder="Ex: 123" class="text-black" id="id" type="number" v-model="form.id" />

      <label for="name">Professor Name: </label>
      <input placeholder=" Ex: Yanwarut" class="text-black" id="name" v-model="form.name" />

      <label for="surname">Professor Surname: </label>
      <input placeholder=" Ex: Suksawat" class="text-black" id="surname" v-model="form.surname" />

      <label for="image">Professor Image: </label>
      <input  placeholder=" Image Link" class="text-black" id="image" v-model="form.image" />

      <input
        class="mt-5 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        type="submit"
        value="Create Advisor"
      />
    </div>
  </form>
</template>
