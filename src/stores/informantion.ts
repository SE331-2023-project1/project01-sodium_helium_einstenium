import type { Information } from "@/info"
import type { AdvisorInfo } from "@/info"
import { defineStore } from "pinia"
export const useInformationStore = defineStore('student',{
    state: () => ({
        student: null as Information | null,
        advisor: null as AdvisorInfo | null,
    }),
    actions: {
        setStudent(student: Information){
            this.student = student
        },
        setAdvisor(advisor: AdvisorInfo){
            this.advisor = advisor
        }
    }
})