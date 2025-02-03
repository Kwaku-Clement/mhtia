<template>
    <form @submit.prevent="handleSubmit" class="max-w-2xl mx-auto p-6 space-y-6">
      <div class="space-y-2">
        <label for="email" class="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
  
      <div class="space-y-2">
        <label for="subject" class="block text-sm font-medium text-gray-700">
          Subject
        </label>
        <input
          id="subject"
          v-model="form.subject"
          type="text"
          required
          class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>
  
      <div class="space-y-2">
        <label for="message" class="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          v-model="form.message"
          rows="6"
          required
          class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
        ></textarea>
      </div>
  
      <button
        type="submit"
        :disabled="isSubmitting"
        class="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors disabled:opacity-50"
      >
        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
      </button>
    </form>
  </template>
  
  <script setup>
  const form = ref({
    email: '',
    subject: '',
    message: ''
  })
  
  const isSubmitting = ref(false)
  
  const handleSubmit = async () => {
    isSubmitting.value = true
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Reset form
      form.value = {
        email: '',
        subject: '',
        message: ''
      }
      
      alert('Message sent successfully!')
    } catch (error) {
      alert('Failed to send message. Please try again.')
    } finally {
      isSubmitting.value = false
    }
  }
  </script>
  
  