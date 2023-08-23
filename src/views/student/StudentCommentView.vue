<script setup lang="ts">
import type { PropType } from 'vue';
import StudentCommentForm from '@/components/StudentCommentForm.vue';
import { useCommentStore } from '@/stores/comment';
import type { CommentInfo, StudentInfo } from '@/info';
import { useRouter } from 'vue-router';
import { useMessageStore } from '@/stores/message';
  
const router = useRouter()
const messageStore = useMessageStore()
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
    messageStore.updateMessage('you are monke'+ props.student?.name)
    setTimeout(() => {
      messageStore.resetMessage()
    }, 3000)
    router.push({name: 'student-detail', params: {id: props.student?.id}});
  }
  
  </script>
  <template>
    <div class="flex flex-col items-center mt-5">
      <div v-if="student">
        <StudentCommentForm :student="student" @comment-submitted="addComment"></StudentCommentForm>
      </div>
    </div>
  </template>