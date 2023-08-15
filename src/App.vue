<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{name: 'student-list'}">Students</RouterLink>
      <RouterLink :to="{name: 'advisor-list'}">Advisors</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
