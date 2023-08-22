<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue'
import type { StudentInfo } from '@/info'
import StudentService from '@/services/StudentService'
import type { Ref } from 'vue'
import { ref, computed } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
const totalEvent = ref<number>(0)
const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  perPage: {
    type: Number,
    required: true
  }
})

const students: Ref<Array<StudentInfo>> = ref([])
StudentService.getStudent(props.perPage, props.page).then((response) => {
  students.value = response.data
  totalEvent.value = response.headers['x-total-count']
})

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvent.value / props.perPage)
  return props.page.valueOf() < totalPages
})
onBeforeRouteUpdate((to, from, next) => {
  const toPage = Number(to.query.page)

  StudentService.getStudent(props.perPage, toPage)
    .then((response) => {
      students.value = response.data
      totalEvent.value = response.headers['x-total-count']
      next()
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <main>
    <div class="flex flex-col items-center">
      <div class="grid grid-cols-3 gap-4 mt-40">
        <StudentCard v-for="student in students" :key="student.id" :student="student"></StudentCard>
      </div>

      <div class="flex space-x-72">
        <div class="">
        <RouterLink
          :to="{ name: 'student-list', query: { page: page - 1 } }"
          rel="prev"
          v-if="page != 1"
          class="text-gray-600 hover:text-gray-800 border-2 bg-red-200 border-gray-500 rounded-full text-center"
          >Prev Page</RouterLink
        ></div>
        <div><RouterLink
          :to="{ name: 'student-list', query: { page: page + 1 } }"
          rel="next"
          v-if="hasNextPage"
          class="text-gray-600 hover:text-gray-800 border-2 bg-green-200 border-gray-500 rounded-full text-center"
          >Next Page</RouterLink
        ></div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.pagination {
  display: flex;
  width: 290px;
}
</style>
