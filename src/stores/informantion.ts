import type { Information } from "@/info"
import { defineStore } from "pinia"
export const useInformationStore = defineStore('student',{
    state: () => ({
        student: null as Information | null,
        advisor: null as Information | null
    }),
    actions: {
        setStudent(student: Information){
            this.student = student
        },
        setAdvisor(advisor: Information){
            this.advisor = advisor
        }
    }
})