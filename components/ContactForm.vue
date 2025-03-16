<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Educational Content Section -->
      <div class="bg-white p-6 rounded-lg shadow-lg space-y-6">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Discover Our Educational Programs</h2>
        
        <!-- College Information Sections -->
        <div class="space-y-8">
          <div class="border-l-4 border-blue-500 pl-4">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Academic Excellence</h3>
            <p class="text-gray-600">
              Our institution offers cutting-edge programs in Computer Science, Engineering, 
              Business Administration, and Liberal Arts with a focus on practical experience 
              and industry collaboration.
            </p>
          </div>

          <div class="border-l-4 border-green-500 pl-4">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Student Life</h3>
            <p class="text-gray-600">
              Engage in a vibrant campus community with over 50+ student organizations, 
              state-of-the-art facilities, and numerous opportunities for personal growth 
              and leadership development.
            </p>
          </div>

          <div class="border-l-4 border-purple-500 pl-4">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Career Support</h3>
            <p class="text-gray-600">
              Access comprehensive career services including internship placements, 
              job fairs, resume workshops, and networking events with industry leaders.
            </p>
          </div>

          <div class="border-l-4 border-yellow-500 pl-4">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">Research Opportunities</h3>
            <p class="text-gray-600">
              Participate in groundbreaking research projects alongside distinguished faculty 
              members across various disciplines and contribute to innovative solutions.
            </p>
          </div>
        </div>

        <!-- Quick Stats -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 bg-gray-50 p-4 rounded-lg">
          <div class="text-center">
            <span class="block text-2xl font-bold text-blue-600">95%</span>
            <span class="text-sm text-gray-600">Graduate Employment</span>
          </div>
          <div class="text-center">
            <span class="block text-2xl font-bold text-green-600">200+</span>
            <span class="text-sm text-gray-600">Course Options</span>
          </div>
          <div class="text-center">
            <span class="block text-2xl font-bold text-purple-600">15:1</span>
            <span class="text-sm text-gray-600">Student-Faculty Ratio</span>
          </div>
          <div class="text-center">
            <span class="block text-2xl font-bold text-yellow-600">50+</span>
            <span class="text-sm text-gray-600">Student Clubs</span>
          </div>
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