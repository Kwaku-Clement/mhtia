<template>
  <div class="container mx-auto px-4 py-8">
    <AdmissionTabs />
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-primary mb-6 animate-fade-in">International Students Admission</h1>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-white rounded-lg shadow-md p-6 animate-slide-in-left">
          <h2 class="text-2xl font-semibold mb-4">Admission Requirements</h2>
          <ul class="list-disc list-inside space-y-2">
            <li>Completed application form</li>
            <li>Official transcripts (translated if not in English)</li>
            <li>Proof of English proficiency (TOEFL, IELTS, etc.)</li>
            <li>Copy of passport</li>
            <li>Financial statement</li>
            <li>Health insurance</li>
          </ul>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6 animate-slide-in-right">
          <h2 class="text-2xl font-semibold mb-4">Application Process</h2>
          <ol class="list-decimal list-inside space-y-2">
            <li>Submit online application</li>
            <li>Pay application fee</li>
            <li>Send required documents</li>
            <li>Await application review</li>
            <li>Receive admission decision</li>
            <li>Apply for student visa</li>
          </ol>
        </div>
      </div>
      <div class="mt-8 bg-white rounded-lg shadow-md p-6 animate-fade-in">
        <h2 class="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div class="space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" class="border-b border-gray-200 pb-4">
            <button 
              @click="toggleFAQ(index)" 
              class="flex justify-between items-center w-full text-left font-semibold focus:outline-none"
            >
              <span>{{ faq.question }}</span>
              <Icon :name="faq.isOpen ? 'heroicons:chevron-up' : 'heroicons:chevron-down'" class="w-5 h-5" />
            </button>
            <Transition name="fade">
              <p v-if="faq.isOpen" class="mt-2 text-gray-600">{{ faq.answer }}</p>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import AdmissionTabs from '~/components/tabs/AdmissionTabs.vue'

const faqs = ref([
  {
    question: "What is the application deadline for international students?",
    answer: "The application deadline for international students is typically 3 months before the start of the semester. Please check our academic calendar for specific dates.",
    isOpen: false
  },
  {
    question: "Do I need to take an English proficiency test?",
    answer: "Yes, if English is not your first language, you need to provide proof of English proficiency through tests like TOEFL or IELTS.",
    isOpen: false
  },
  {
    question: "Are there any scholarships available for international students?",
    answer: "Yes, we offer various scholarships for international students based on academic merit and financial need. Check our scholarship page for more information.",
    isOpen: false
  },
  {
    question: "Can I work while studying?",
    answer: "International students may be eligible to work part-time on campus. Off-campus work is subject to visa regulations and may require additional permits.",
    isOpen: false
  }
])

const toggleFAQ = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-slide-in-left {
  animation: slideInLeft 1s ease-out;
}

.animate-slide-in-right {
  animation: slideInRight 1s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInLeft {
  from { transform: translateX(-50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes slideInRight {
  from { transform: translateX(50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>