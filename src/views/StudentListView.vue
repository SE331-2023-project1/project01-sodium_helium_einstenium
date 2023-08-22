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
      <div class="grid grid-cols-3 gap-3 mb-4 mt-10">
        <StudentCard v-for="student in students" :key="student.id" :student="student"></StudentCard>
      </div>

      <div class="pagination">
        <RouterLink
          :to="{ name: 'student-list', query: { page: page - 1 } }"
          rel="prev"
          v-if="page != 1"
          class="text-orange-600 hover:orange-gray-800"
          id="page-prev"
          >Prev Page</RouterLink
        >
        <RouterLink
          :to="{ name: 'student-list', query: { page: page + 1 } }"
          rel="next"
          v-if="hasNextPage"
          class="text-orange-600 hover:text-orange-800"
          id="page-next"
          >Next Page</RouterLink
        >
      </div>
  </main>
</template>
<style scoped>
.pagination {
  display: flex;
  width: 290px;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
.student {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
