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
        <p>Comment From : {{comment.professor_name }}</p>
        <p>{{comment.comment}}</p>
        <h4>Date: {{ comment.date }}</h4>
    </div>
</template>