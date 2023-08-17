<script setup lang="ts">
import AdvisorCreateForm from '@/components/AdvisorCreateForm.vue'
import type { AdvisorInfo } from '@/info';
import { useAdvisorStore } from '@/stores/advisor';
import type { PropType } from 'vue'

defineProps({
    advisor: {
        type: Object as PropType<AdvisorInfo>,
        require: true
    }
})
const store = useAdvisorStore();
function createAdvisor(advisor: AdvisorInfo){
    store.addAdvisor(advisor)
}
</script>
<template>
        <AdvisorCreateForm :advisor?="advisor" @create-submitted="createAdvisor"></AdvisorCreateForm>
</template>