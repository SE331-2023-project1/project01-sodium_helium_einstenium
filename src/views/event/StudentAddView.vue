<script setup lang="ts">
import type { AdvisorInfo, Information } from '@/info'
import type { PropType } from 'vue'

defineProps({
    student: {
        type: Object as PropType<Information>,
        require: true
    },
    advisor: {
        type: Object as PropType<AdvisorInfo>,
        require: true
    },
    id:{
        type: String
    }
})

</script>
<template>
   <p>Edit the event here</p>
   <button >Edit</button>
</template>