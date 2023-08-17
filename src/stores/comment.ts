import type { CommentInfo } from '@/info';
import { defineStore } from 'pinia';

export const useCommentStore = defineStore('comment',{
  state: () => ({
    comments : [] as CommentInfo[]
  }),
  actions: {
    addComment(comment: CommentInfo){
      this.$patch((state) => {
       state.comments.push(comment);
    });
    },
    getComments() {
      const result = this.comments
      console.log(result)
      return result
  },
  getCommentByStudentId(studentId: string){
    return this.comments.filter(comment => comment.student_id == studentId)
  }
  
}
})