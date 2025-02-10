<template>
  <form @submit.prevent="handleSubmit" class="max-w-2xl mx-auto p-6 space-y-6 bg-white shadow-xl rounded-lg">
    <div 
      v-for="(field, index) in formFields" 
      :key="field.id"
      class="space-y-2"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: index * 200, duration: 800 } }"
    >
      <label :for="field.id" class="block text-sm font-medium text-gray-700">
        {{ field.label }}
      </label>
      <input
        v-if="field.type !== 'textarea'"
        :id="field.id"
        v-model="form[field.id]"
        :type="field.type"
        required
        class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
      />
      <textarea
        v-else
        :id="field.id"
        v-model="form[field.id]"
        rows="6"
        required
        class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
      ></textarea>
    </div>

    <button
      type="submit"
      :disabled="isSubmitting"
      class="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors disabled:opacity-50 transform active:scale-95"
      v-motion
      :initial="{ opacity: 0, y: 20 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: formFields.length * 200, duration: 800 } }"
    >
      {{ isSubmitting ? 'Sending...' : 'Send Message' }}
    </button>

    <Transition name="fade">
      <div v-if="submissionStatus" :class="['text-center p-4 rounded-md', submissionStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800']">
        {{ submissionStatus.message }}
      </div>
    </Transition>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formFields = [
  { id: 'email', label: 'Email Address', type: 'email' },
  { id: 'subject', label: 'Subject', type: 'text' },
  { id: 'message', label: 'Message', type: 'textarea' }
]

const form = reactive({
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submissionStatus = ref(null)

const handleSubmit = async () => {
  isSubmitting.value = true
  submissionStatus.value = null
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Reset form
    Object.keys(form).forEach(key => form[key] = '')
    
    submissionStatus.value = { success: true, message: 'Message sent successfully!' }
  } catch (error) {
    submissionStatus.value = { success: false, message: 'Failed to send message. Please try again.' }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>