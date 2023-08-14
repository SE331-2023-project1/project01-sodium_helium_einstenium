import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import StudentDetailView from '@/views/event/StudentDetailView.vue'
import StudentLayoutView from '@/views/event/StudentLayoutView.vue'
import { useInformationStore } from '@/stores/informantion'
import InformationService from '@/services/InformationService'
import StudentAddView from '@/views/event/StudentAddView.vue'
import StudentCommentView from '@/views/event/StudentCommentView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/student/:id',
      name:  'student-layout',
      component: StudentLayoutView,
      beforeEnter: (to) => {
        const id: number = parseInt(to.params.id as string)
        const studentStore = useInformationStore()
        const advisorStore = useInformationStore()
        return InformationService.getStudentById(id)
        .then((response) => {
          studentStore.setStudent(response.data)
          InformationService.getAdvisorById(response.data.advisorId)
          .then((response) => {
            advisorStore.setAdvisor(response.data)
          })
        })
        .catch((error) => {
          console.log(error)
        })
      },
      children: [
        {
          path: '',
          name: 'student-detail',
          component: StudentDetailView
        },
        {
          path: '/student/:id/add-data',
          name: 'student-add',
          component: StudentAddView
        },
        {
          path: '/student/:id/comment',
          name: 'student-comment',
          component: StudentCommentView
        }
      ]
    }
  ]
})

export default router
