import type { Information } from "@/info"
import { defineStore } from "pinia"
export const useStudentStore = defineStore('student',{
    state: () => ({
        student: null as Information | null,
        students: [] as Information[]
    }),
    actions: {
        setStudent(student: Information){
            this.student = student
        },
        
        addStudentData(studentData: Information){
            this.$patch((state) => {
                state.students.push(studentData)
            })
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