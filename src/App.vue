<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from './stores/message';
import { storeToRefs } from 'pinia';
const store = useMessageStore()
const {message} = storeToRefs(store)
</script>

<template>
  <header class="bg-black-100 py-2">
    <div id="flashMessage" v-if="message" class="bg-yellow-200 animate-yellowfade p-2">
    <h4 class="text-yellow-800">{{ message }}</h4>
    </div>
    <nav class="flex justify-center space-x-4 p-4 border-b-2 border-black">
      <RouterLink :to="{name: 'student-list'}" class="text-orange-600 hover:text-orange-800 text-lg font-bold"> Students </RouterLink>
      <RouterLink :to="{name: 'advisor-list'}" class="text-orange-600 hover:text-orange-800 text-lg font-bold"> Advisors </RouterLink>
      <RouterLink :to="{name: 'create-advisor'}" class="text-orange-600 hover:text-orange-800 text-lg font-bold"> Create Advisors </RouterLink>
    </nav>
  </header>
  <RouterView />
  <div class="fixed inset-x-0 bottom-0 h-8 bg-black shadow-inner">
    <div class="flex items-center justify-center mt-2"><div class="text-orange-600"> © </div>  Copyright 2023 Sodium_Helium_Einstenium. All rights reserved.</div>
  </div>
</template>

<style scoped>

@keyframes orangefade{
  from {
    background: orange;
  }
  to{
    background: transparent;
  }
}

#flashMessage {
  animation: orangefade 3s ease-in-out;
}

</style>

<style>
body{
  background-color: #3d3d3d;
}
</style>