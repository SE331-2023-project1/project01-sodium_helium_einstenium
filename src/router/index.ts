import { createRouter, createWebHistory } from 'vue-router'
import StudentListView from '../views/StudentListView.vue'
import AdvisorListView from '../views/AdvisorListView.vue'
import CreatAdvisorView from '../views/CreateAdvisorView.vue'
import StudentDetailView from '@/views/student/StudentDetailView.vue'
import StudentLayoutView from '@/views/student/StudentLayoutView.vue'
import { useStudentStore } from '@/stores/student'
import StudentService from '@/services/StudentService'
import StudentAddView from '@/views/student/StudentAddView.vue'
import StudentCommentView from '@/views/student/StudentCommentView.vue'
import AdvisorLayoutView from '@/views/advisor/AdvisorLayoutView.vue'
import AdvisorDetail from '@/views/advisor/AdvisorDetail.vue'
import AdvisorAddData from '@/views/advisor/AdvisorAddData.vue'
import AdvisorService from '@/services/AdvisorService'
import { useAdvisorStore } from '@/stores/advisor'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'student-list',
      component: StudentListView,
      props: (route) => ({page: parseInt(route.query?.page as string || '1') })
    },
    {
      path: '/advisor',
      name: 'advisor-list',
      component: AdvisorListView
    },
    {
      path: '/create-advisor',
      name: 'create-advisor',
      component: CreatAdvisorView
    },
    {
      path: '/',
      name:  'student-layout',
      component: StudentLayoutView,
      props: true,
      beforeEnter: (to) => {
        const id: number = parseInt(to.params.id as string)
        const studentStore = useStudentStore()
        const advisorStore = useAdvisorStore()
        return StudentService.getStudentById(id)
        .then((response) => {
          studentStore.setStudent(response.data)
          AdvisorService.getAdvisorById(response.data.id)
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
          path: '/student/:id',
          name: 'student-detail',
          component: StudentDetailView,
          props:true
        },
        {
          path: '/add-data/:id',
          name: 'student-add',
          component: StudentAddView,
          props: true
        },
        {
          path: '/comment/:id',
          name: 'student-comment',
          component: StudentCommentView,
          props:true
        }
      ]
    },
    {
      path: '/',
      name: 'advisor-layout',
      component: AdvisorLayoutView,
      beforeEnter: (to) => {
        const id: number = parseInt(to.params.id as string)
        const advisorStore = useAdvisorStore()
        return AdvisorService.getAdvisorById(id)
        .then((response) => {
          advisorStore.setAdvisor(response.data)
        }).catch((error) => {
          console.log(error)
        })
      },
      children: [
        {
          path: '/advisor/:id',
          name: 'advisor-detail',
          component: AdvisorDetail,
          props: true
        },
        {
          path: '/advior-add/:id',
          name: 'advisor-add',
          component: AdvisorAddData,
          props: true
        }
      ]
    }
  ]
})

export default router
