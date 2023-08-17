import type { StudentInfo } from "@/info"
import { defineStore } from "pinia"
export const useStudentStore = defineStore('student',{
    state: () => ({
        student: null as StudentInfo | null,
        students: [] as StudentInfo[]
    }),
    actions: {
        setStudent(student: StudentInfo){
            this.student = student
        },
        
        addStudentData(studentData: StudentInfo) {
            this.$patch((state) => {
              state.students.push(studentData)
            });
          },
        getStudentData(){
            const result = this.students
            return result
        },
        getStudentDataById(studentId: number){
          return this.students.filter(studentData => studentData.id == studentId)
        }
    }
})