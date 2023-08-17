<script setup lang="ts">
import type { Information } from '@/info'
import type { PropType } from 'vue'

defineProps({
   advisor:{
     type : Object as PropType<Information>,
     require: true
    },
    id:{
      type: String
    }
})

</script>
<template>
   <p>Make the comment here</p>
   <button >Add Data</button>
</template>