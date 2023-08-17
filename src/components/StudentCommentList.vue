<script setup lang="ts">
import type { CommentInfo } from '@/info';
import type { PropType } from 'vue'
defineProps({
    comments:{
        type: Object as PropType<CommentInfo[]>,
        required: true
    }
})

</script>
<template>
    <div v-for="(comment,index) in comments" :key="index">
        <p>{{comment.student_id}}</p>
        <p>{{comment.student_name}}</p>
        <p>{{comment.student_surname}}</p>
        <p>{{comment.comment}}</p>
    </div>
</template>