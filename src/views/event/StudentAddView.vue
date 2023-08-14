<script setup lang="ts">
import type { Information } from '@/info'
import type { PropType } from 'vue'

const props = defineProps({
    student:{
     type : Object as PropType<Information>,
     require: true
    }
})

</script>
<template>
   <p>Edit the event here</p>
   <button >Edit</button>
</template>