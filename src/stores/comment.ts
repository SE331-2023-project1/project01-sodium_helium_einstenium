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
    getCommentsByStudentId() {
      return this.comments
  },
  
}
})