<script setup lang="ts">
import AdvisorCreateForm from '@/components/AdvisorCreateForm.vue'
import type { AdvisorInfo } from '@/info'
import { useAdvisorStore } from '@/stores/advisor'
import { useMessageStore } from '@/stores/message'

import { useRouter } from 'vue-router'
const router = useRouter()
const store = useAdvisorStore()
const messageStore = useMessageStore()
function createAdvisor(advisor: AdvisorInfo) {
  console.log('Before add advisor' + advisor.name)
  store.addAdvisor(advisor)
  messageStore.updateMessage('Successfully added ' + advisor.name)
  setTimeout(() => {
    messageStore.resetMessage()
  }, 3000)
  router.push({ name: 'advisor-list' })
}
</script>
<template>
  <div class="mt-5">
    <AdvisorCreateForm @create-submitted="createAdvisor"></AdvisorCreateForm>
  </div>
</template>
