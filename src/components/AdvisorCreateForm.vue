<script setup lang="ts">
import type { AdvisorInfo } from '@/info';
import { reactive, type PropType } from 'vue'
defineProps ({
    advisor: {
        type: Object as PropType<AdvisorInfo>   
    }
})
const emit = defineEmits(['create-submitted'])
const form = reactive({
    id: '',
    name: '',
    surname: '',
    image: '',
})

function onSubmit(){
if(form.id === '' || form.name === '' || form.surname === '' || form.image === ''){
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
     <input id="id" type="number" v-model="form.id" >

     <label for="name">Professor Name: </label>
     <input id="name" v-model="form.name">

     <label for="surname">Professor Surname: </label>
     <input id="surname" v-model="form.surname">

     <label for="image">Professor Image: </label>
     <input id="image" v-model="form.image">

     <input class="button border-2 bg-green-200 text-slate-950 rounded-full mt-5" type="submit" value="Submit">
    </div>
    </form>
</template>