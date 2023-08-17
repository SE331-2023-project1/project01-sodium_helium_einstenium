<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue'
import type { Information } from '@/info'
import InformationService from '@/services/InformationService'
import type { Ref } from 'vue'
import { ref, computed } from 'vue'
import { onBeforeRouteUpdate } from 'vue-router'
const totalEvent = ref<number>(0)
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})
const perPage = ref<number>(5)

const students: Ref<Array<Information>> = ref([])
InformationService.getStudent(perPage.value, props.page).then((response) => {
  students.value = response.data
  totalEvent.value = response.headers['x-total-count']
})

const hasNextPage = computed(() => {
  //first calculate the total page
  const totalPages = Math.ceil(totalEvent.value / perPage.value)
  return props.page.valueOf() < totalPages
})
onBeforeRouteUpdate((to, from, next) => {
  const toPage = Number(to.query.page)

  InformationService.getStudent(5, toPage).then((response) => {
    students.value = response.data
    totalEvent.value = response.headers['x-total-count']
    next()
  }).catch((error) => {
    console.log(error)
  })
})


</script>

<template>
  <main>
    <div class="student">
      <StudentCard v-for="student in students" :key="student.id" :student="student"></StudentCard>
    </div>
    <div class="pagination">
      <RouterLink :to="{ name: 'student-list', query: { page: page - 1 } }" rel="prev" v-if="page != 1"
        >Prev Page</RouterLink
      >
      <RouterLink
        :to="{ name: 'student-list', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
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
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
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
