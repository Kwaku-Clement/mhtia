<template>
  <div class="min-h-screen bg-gray-50">
    <AdmissionTabs />
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-primary mb-6 animate-fade-in">Certificate Requirements</h1>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-white rounded-lg shadow-md p-6 animate-slide-in-left">
          <h2 class="text-2xl font-semibold mb-4">Entry Requirements</h2>
          <ul class="list-disc list-inside space-y-2">
            <li>Minimum of 5 credits in relevant O-level subjects</li>
            <li>Pass in English Language and Mathematics</li>
            <li>Age: 16 years and above</li>
          </ul>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6 animate-slide-in-right">
          <h2 class="text-2xl font-semibold mb-4">Application Process</h2>
          <ol class="list-decimal list-inside space-y-2">
            <li>Complete online application form</li>
            <li>Pay application fee</li>
            <li>Submit required documents</li>
            <li>Attend interview (if required)</li>
          </ol>
        </div>
      </div>
      <div class="mt-8 bg-white rounded-lg shadow-md p-6 animate-fade-in">
        <h2 class="text-2xl font-semibold mb-4">Available Certificate Programs</h2>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div v-for="program in certificatePrograms" :key="program" class="bg-gray-100 rounded p-4 hover:bg-primary hover:text-white transition-colors duration-300">
            {{ program }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AdmissionTabs from '~/components/tabs/AdmissionTabs.vue'

const certificatePrograms = [
  'Information Technology',
  'Business Administration',
  'Hospitality Management',
  'Graphic Design',
  'Culinary Arts',
  'Early Childhood Education'
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