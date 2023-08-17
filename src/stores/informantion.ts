import type { Information } from "@/info"
import { defineStore } from "pinia"
export const useStudentStore = defineStore('student',{
    state: () => ({
        student: null as Information | null
    }),
    actions: {
        setStudent(student: Information){
            this.student = student
        },
    }
})