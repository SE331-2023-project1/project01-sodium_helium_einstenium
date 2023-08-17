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
  
  const store = useCommentStore();
  function addComment(comment:CommentInfo) {
    store.addComment(comment);
  }
  
  </script>
  <template>
    <div>
      <p>Make the comment here</p>

      <div v-if="student">
        <StudentCommentForm :student="student" @comment-submitted="addComment"></StudentCommentForm>
      </div>
    </div>
  </template>