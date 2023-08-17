import type { CommentInfo } from '@/info';
import { defineStore } from 'pinia';

export const useCommentStore = defineStore('comment',{
  state: () => ({
    comments : [] as CommentInfo[]
  }),
  actions: {
    addComment(comment: CommentInfo){
      console.log(this.comments)
      this.$patch((state) => {
       state.comments.push(comment);
       console.log(state)
    });
    },
    getCommentsByStudentId(studentId:string) {
      return this.comments.filter(comment => comment.student_id === studentId);
  }
}
})