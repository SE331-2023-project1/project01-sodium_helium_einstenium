<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from './stores/message';
import { storeToRefs } from 'pinia';
const store = useMessageStore()
const {message} = storeToRefs(store)
</script>

<template>
  <header class="bg-black-100 py-">
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
</template>

<style scoped>

@keyframes yellowfade{
  from {
    background: yellow;
  }
  to{
    background: transparent;
  }
}

#flashMessage {
  animation: yellowfade 3s ease-in-out;
}

</style>

<style>
body{
  background-color: #3d3d3d;
}
</style>