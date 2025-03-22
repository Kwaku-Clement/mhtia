<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Educational Content Section -->
      <div class="bg-white p-6 rounded-lg shadow-lg space-y-6">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Discover Our Educational Programs</h2>
        
        <!-- College Information Sections -->
          <div class="border-l-4 border-blue-500 pl-4">
            <p class="text-gray-600">
              Please feel free to reach out to us through our contact information provided below. Whether you have inquiries, feedback, or require assistance, our team is here to help. We value your communication and strive to provide prompt and helpful responses to all queries.
            </p>
          </div>
        <div class="mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194154846816!3d37.77492977975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f0e2c1b1%3A0x4a0b8f1b8b8b8b8b!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <!-- Contact Form Section -->
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Contact Us</h2>
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div v-for="(field, index) in formFields" :key="field.id" class="space-y-2">
            <label :for="field.id" class="block text-sm font-medium text-gray-700">
              {{ field.label }}
            </label>
            <input
              v-if="field.type !== 'textarea'"
              :id="field.id"
              v-model="form[field.id]"
              :type="field.type"
              required
              class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            />
            <textarea
              v-else
              :id="field.id"
              v-model="form[field.id]"
              rows="6"
              required
              class="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 transform active:scale-95"
          >
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>

          <div
            v-if="submissionStatus"
            :class="[
              'text-center p-4 rounded-md transition-all duration-300',
              submissionStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            ]"
          >
            {{ submissionStatus.message }}
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formFields = [
  { id: 'name', label: 'Full Name', type: 'text' },
  { id: 'email', label: 'Email Address', type: 'email' },
  { id: 'subject', label: 'Subject', type: 'text' },
  { id: 'message', label: 'Message', type: 'textarea' }
]

const form = reactive({
  name: '',
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
    
    submissionStatus.value = { 
      success: true, 
      message: 'Thank you for your message! Our admissions team will contact you shortly.' 
    }
  } catch (error) {
    submissionStatus.value = { 
      success: false, 
      message: 'Failed to send message. Please try again or contact admissions@college.edu' 
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>