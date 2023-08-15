<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue';
import type { Information } from '@/info';
import InformationService from '@/services/InformationService'
import type { Ref } from 'vue'
import { ref } from 'vue'

const students: Ref<Array<Information>> = ref([])
  InformationService.getStudent().then((response) => {
    students.value = response.data
  })

</script>

<template>
  <main>
    <div class="student">
      <StudentCard v-for="student in students" :key="student.id" :student="student"></StudentCard>
    </div>

  </main>
</template>
<style>
.student {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
