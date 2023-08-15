<script setup lang="ts">
import type { Information } from '@/info'
import type { PropType } from 'vue'

defineProps({
    student:{
     type : Object as PropType<Information>,
     require: true
    }
})

</script>
<template>
   <p>Make the comment here</p>
   <button >Edit</button>
</template>