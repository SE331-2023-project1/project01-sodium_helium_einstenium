<script setup lang="ts">
import { mergeProps, type PropType } from 'vue';
import StudentCommentForm from '@/components/StudentCommentForm.vue';
import { useCommentStore } from '@/stores/comment';
import type { CommentInfo, StudentInfo } from '@/info';
import { useRouter } from 'vue-router';
  
const router = useRouter()

 const props = defineProps({
    student: {
      type: Object as PropType<StudentInfo>,
      required: true
    },
    id: String,
  });
  
  const store = useCommentStore();
  function addComment(comment:CommentInfo) {
    store.addComment(comment);
    router.push({name: 'student-detail', params: {id: props.student?.id}});
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