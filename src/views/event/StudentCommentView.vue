<script setup lang="ts">
  import { computed, type PropType } from 'vue';
  import StudentCommentForm from '@/components/StudentCommentForm.vue';
  import StudentCommentList from '@/components/StudentCommentList.vue';
  import { useCommentStore } from '@/stores/comment';
  import { useRouter } from 'vue-router';
import type { CommentInfo, Information } from '@/info';
  
 defineProps({
    student: {
      type: Object as PropType<Information>,
      required: true
    },
    id: String,
  });
  
  const router = useRouter();
  const studentId = router.currentRoute.value.params.id.toString();
  const store = useCommentStore();
  function addComment(comment:CommentInfo) {
    console.log(comment)
    store.addComment(comment);
  }
  const comments = computed(() => store.getCommentsByStudentId(studentId));
  </script>
  <template>
    <div>
      <p>Make the comment here</p>
      <StudentCommentList v-if="comments.length" :comments="comments"></StudentCommentList>
      <div v-if="student">
        <StudentCommentForm :student="student" @comment-submitted="addComment"></StudentCommentForm>
      </div>
    </div>
  </template>