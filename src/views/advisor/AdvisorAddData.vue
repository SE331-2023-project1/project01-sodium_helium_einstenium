<script setup lang="ts">
import type { AdvisorInfo } from '@/info'
import type { PropType } from 'vue'

defineProps({
   advisor:{
     type : Object as PropType<AdvisorInfo>,
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