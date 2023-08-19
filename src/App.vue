<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from './stores/message';
import { storeToRefs } from 'pinia';
const store = useMessageStore()
const {message} = storeToRefs(store)
</script>

<template>
  <header>
    <div id="flashMessage" v-if="message">
    <h4>{{ message }}</h4>
    </div>
    <nav>
      <RouterLink :to="{name: 'student-list'}">Students</RouterLink>
      <RouterLink :to="{name: 'advisor-list'}">Advisors</RouterLink>
      <RouterLink :to="{name: 'create-advisor'}">Create Advisors</RouterLink>
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
