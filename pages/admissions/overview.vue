<template>
  <div class="container mx-auto px-4 py-8">
    <AdmissionTabs />
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-primary mb-6 animate-fade-in">Admissions Overview</h1>
      <div class="mt-8 bg-white rounded-lg shadow-md p-6 animate-fade-in">
        <h2 class="text-2xl font-semibold mb-4">Admission Statistics</h2>
            
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="program in programs" :key="program.value" class="text-center">
            <div class="border-l-4" :class="program.color + ' pl-4'">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ program.value }}</h3>
              <p class="text-gray-600">
                {{ program.label }}
              </p>
            </div>
          </div>
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
      <div class="mt-8 grid md:grid-cols-2 gap-8">
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


        <!-- Quick Stats -->
        <!-- <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 bg-gray-50 p-4 rounded-lg">
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
        </div> -->

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
  { value: 'Registered General Nursing (RGN)', color: 'border-blue-500', label: 'Our three-year Diploma in Registered General Nursing equips students with the knowledge and practical skills required to provide high-quality patient care in diverse healthcare settings.'},
  { value: 'Registered Midwifery (RM)', color: 'border-green-500', label: 'The Registered Midwifery diploma program trains students in maternal and newborn care, emphasizing safe delivery practices and women’s health.'},
  { value: 'Post NAC/NAP Midwifery', color: 'border-purple-500', label: 'This two-year diploma program is designed for Nurse Assistant Clinicals (NAC) or Nurse Assistant Preventive (NAP) graduates, offering advanced midwifery training to enhance maternal and neonatal healthcare services.'},
  { value: 'Registered Nurse Assistant Clinicals (RNAC)', color: 'border-yellow-500', label: 'The two-year certificate program in Nurse Assistant Clinicals prepares students to support healthcare teams in patient care, emphasizing hands-on clinical training and ethical practice.'},
]

// const programs = [
//   { name: 'Registered Nurse Assistant Clinicals (RNAC) - Certificate', icon: 'mdi:certificate-outline' },
//   { name: 'Registered General Nursing (RGN) - Diploma', icon: 'mdi:school-outline' },
//   { name: 'Registered Midwifery (RM) - Diploma', icon: 'mdi:account-school-outline' },
//   { name: 'Post NAC/NAP Midwifery - Diploma', icon: 'mdi:book-education-outline' },
// ];


const keyDates = [
  { event: 'Application Opens', date: 'January 1, 2023' },
  { event: 'Early Decision Deadline', date: 'November 1, 2024' },
  { event: 'Regular Decision Deadline', date: 'January 15, 2025' },
  { event: 'Admission Decisions Released', date: 'March 31, 2025' },
  { event: 'Enrollment Confirmation Deadline', date: 'May 1, 2025' }
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