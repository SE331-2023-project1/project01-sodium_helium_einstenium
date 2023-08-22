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
      <div class="grid grid-cols-3 gap-4 mt-32">
        <StudentCard v-for="student in students" :key="student.id" :student="student"></StudentCard>
      </div>

      <div class="flex space-x-72">
        <div
          v-if="page != 1"
          class="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            class="w-3.5 h-3.5 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          <RouterLink :to="{ name: 'student-list', query: { page: page - 1 } }" rel="prev"
            >Prev Page</RouterLink
          >
        </div>
        <div
          v-if="hasNextPage"
          class="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <RouterLink :to="{ name: 'student-list', query: { page: page + 1 } }" rel="next"
            >Next Page</RouterLink
          >
          <svg
            class="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </div>
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
