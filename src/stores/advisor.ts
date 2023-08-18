import type { AdvisorInfo } from "@/info"
import { defineStore } from "pinia"
export const useAdvisorStore = defineStore('advisor',{
    state: () => ({
        advisor: null as AdvisorInfo | null,
        advisors: [] as AdvisorInfo[]
    }),
    actions: {
        setAdvisor(advisor: AdvisorInfo){
            this.advisor = advisor
        },
        addAdvisor(advisor: AdvisorInfo){
            this.$patch((state) => {
                state.advisors.push(advisor)
            })
        },
        getCreatedAdvisor(){
            return this.advisors
        },
        getCreatedAdvisorById(advisorId : number){
            return this.advisors.filter(advisor => advisor.id === advisorId)
        }
    }
})