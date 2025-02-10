<template>
  <div class="container mx-auto px-4 py-8">
    <AdmissionTabs />
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-primary mb-6 animate-fade-in">Welcome to Admissions</h1>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-white rounded-lg shadow-md p-6 animate-slide-in-left">
          <h2 class="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul class="space-y-2">
            <li v-for="(reason, index) in reasons" :key="index" class="flex items-start">
              <Icon :name="reason.icon" class="w-5 h-5 text-primary mr-2 mt-1" />
              <span>{{ reason.text }}</span>
            </li>
          </ul>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6 animate-slide-in-right">
          <h2 class="text-2xl font-semibold mb-4">Admission Process</h2>
          <ol class="list-decimal list-inside space-y-2">
            <li>Choose your program</li>
            <li>Check the requirements</li>
            <li>Prepare your documents</li>
            <li>Submit your application</li>
            <li>Pay the application fee</li>
            <li>Wait for the decision</li>
          </ol>
        </div>
      </div>
      <div class="mt-8 bg-white rounded-lg shadow-md p-6 animate-fade-in">
        <h2 class="text-2xl font-semibold mb-4">Upcoming Admission Events</h2>
        <div class="space-y-4">
          <div v-for="event in events" :key="event.date" 
               class="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-gray-100 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300">
            <div>
              <h3 class="font-semibold">{{ event.title }}</h3>
              <p>{{ event.description }}</p>
            </div>
            <div class="mt-2 sm:mt-0">
              <span class="font-semibold">{{ event.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import AdmissionTabs from '~/components/tabs/AdmissionTabs.vue'

const reasons = [
  { icon: 'mdi:school', text: 'Accredited programs recognized worldwide' },
  { icon: 'mdi:account-group', text: 'Diverse and inclusive community' },
  { icon: 'mdi:teach', text: 'Experienced and dedicated faculty' },
  { icon: 'mdi:laptop', text: 'State-of-the-art facilities and resources' },
  { icon: 'mdi:handshake', text: 'Strong industry partnerships for internships and job placements' }
]

const events = [
  { title: 'Open Day', description: 'Explore our campus and meet faculty', date: 'June 15, 2023' },
  { title: 'Virtual Info Session', description: 'Learn about our programs online', date: 'July 1, 2023' },
  { title: 'Application Workshop', description: 'Get help with your application', date: 'July 10, 2023' }
]
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
</style>