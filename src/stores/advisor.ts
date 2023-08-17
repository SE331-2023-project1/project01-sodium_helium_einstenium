import type { AdvisorInfo } from "@/info"
import { defineStore } from "pinia"
export const useAdvisorStore = defineStore('advisor',{
    state: () => ({
        advisor: null as AdvisorInfo | null,
    }),
    actions: {
        setAdvisor(advisor: AdvisorInfo){
            this.advisor = advisor
        }
    }
})