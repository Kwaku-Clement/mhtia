<template>
  <div class="container mx-auto px-4 py-8">
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
        <div class="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div v-for="program in certificatePrograms" :key="program.name" class="bg-gray-100 rounded p-4 hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer"
               @click="showProgramDetails(program)">
            {{ program.name }}
          </div>
        </div>
      </div>
    </div>
    
    <!-- Program Details Modal -->
    <Transition name="modal">
      <div v-if="selectedProgram" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-lg p-6 max-w-md w-full">
          <h3 class="text-2xl font-semibold mb-4">{{ selectedProgram.name }}</h3>
          <p class="mb-4">{{ selectedProgram.description }}</p>
          <p class="font-semibold">Duration: {{ selectedProgram.duration }}</p>
          <button @click="selectedProgram = null" class="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors">
            Close
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import AdmissionTabs from '~/components/tabs/AdmissionTabs.vue'

const certificatePrograms = [
  { 
    name: 'Registered Nurse Assistant Clinicals (RNAC)', 
    duration: '2 years', 
    description: 'Prepares students to provide essential patient care and support healthcare teams in hospitals and clinics.' 
  }
];

const selectedProgram = ref(null)

const showProgramDetails = (program) => {
  selectedProgram.value = program
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

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>