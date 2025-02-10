<template>
  <div class="min-h-screen bg-gray-50">
    <AdmissionTabs />
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-primary mb-6 animate-fade-in">Admissions Overview</h1>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-white rounded-lg shadow-md p-6 animate-slide-in-left">
          <h2 class="text-2xl font-semibold mb-4">Our Programs</h2>
          <ul class="space-y-2">
            <li v-for="program in programs" :key="program.name" class="flex items-center">
              <Icon :name="program.icon" class="w-5 h-5 text-primary mr-2" />
              <span>{{ program.name }}</span>
            </li>
          </ul>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6 animate-slide-in-right">
          <h2 class="text-2xl font-semibold mb-4">Key Dates</h2>
          <ul class="space-y-2">
            <li v-for="date in keyDates" :key="date.event" class="flex justify-between items-center">
              <span>{{ date.event }}</span>
              <span class="font-semibold">{{ date.date }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-8 bg-white rounded-lg shadow-md p-6 animate-fade-in">
        <h2 class="text-2xl font-semibold mb-4">Admission Statistics</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="stat in admissionStats" :key="stat.label" class="text-center">
            <div class="text-4xl font-bold text-primary mb-2">{{ stat.value }}</div>
            <div class="text-sm text-gray-600">{{ stat.label }}</div>
          </div>
        </div>
      </div>
      <div class="mt-8 animate-fade-in">
        <h2 class="text-2xl font-semibold mb-4">Take a Virtual Tour</h2>
        <div class="aspect-w-16 aspect-h-9">
          <iframe 
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            class="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import AdmissionTabs from '~/components/tabs/AdmissionTabs.vue'

const programs = [
  { name: 'Certificate Programs', icon: 'mdi:certificate-outline' },
  { name: 'Diploma Programs', icon: 'mdi:school-outline' },
  { name: 'Undergraduate Programs', icon: 'mdi:account-school-outline' },
  { name: 'Graduate Programs', icon: 'mdi:book-education-outline' },
  { name: 'International Programs', icon: 'mdi:earth' }
]

const keyDates = [
  { event: 'Application Opens', date: 'January 1, 2023' },
  { event: 'Early Decision Deadline', date: 'November 1, 2023' },
  { event: 'Regular Decision Deadline', date: 'January 15, 2024' },
  { event: 'Admission Decisions Released', date: 'March 31, 2024' },
  { event: 'Enrollment Confirmation Deadline', date: 'May 1, 2024' }
]

const admissionStats = [
  { label: 'Acceptance Rate', value: '18%' },
  { label: 'International Students', value: '15%' },
  { label: 'Average GPA', value: '3.9' },
  { label: 'Student-Faculty Ratio', value: '8:1' }
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