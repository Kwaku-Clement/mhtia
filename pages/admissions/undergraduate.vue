<template>
  <div class="container mx-auto px-4 py-8">
    <AdmissionTabs />
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-primary mb-6 animate-fade-in">Undergraduate Requirements</h1>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-white rounded-lg shadow-md p-6 animate-slide-in-left">
          <h2 class="text-2xl font-semibold mb-4">Academic Requirements</h2>
          <ul class="list-disc list-inside space-y-2">
            <li>High school diploma or equivalent</li>
            <li>Minimum GPA of 3.0 on a 4.0 scale</li>
            <li>SAT or ACT scores (optional for 2023-2024)</li>
            <li>3 years of Mathematics</li>
            <li>4 years of English</li>
            <li>2 years of Science</li>
            <li>2 years of Social Studies</li>
            <li>2 years of Foreign Language</li>
          </ul>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6 animate-slide-in-right">
          <h2 class="text-2xl font-semibold mb-4">Application Checklist</h2>
          <ul class="space-y-2">
            <li v-for="(item, index) in applicationChecklist" :key="index" class="flex items-center">
              <input :id="'checkbox-' + index" type="checkbox" class="form-checkbox h-5 w-5 text-primary" />
              <label :for="'checkbox-' + index" class="ml-2">{{ item }}</label>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-8 bg-white rounded-lg shadow-md p-6 animate-fade-in">
        <h2 class="text-2xl font-semibold mb-4">Popular Undergraduate Programs</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div v-for="program in undergraduatePrograms" :key="program.name" 
               class="bg-gray-100 rounded-lg p-4 hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 cursor-pointer"
               @click="showProgramDetails(program)">
            <h3 class="font-semibold mb-2">{{ program.name }}</h3>
            <p class="text-sm">{{ program.description }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Program Details Modal -->
    <Transition name="modal">
      <div v-if="selectedProgram" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div class="bg-white rounded-lg p-6 max-w-md w-full">
          <h3 class="text-2xl font-semibold mb-4">{{ selectedProgram.name }}</h3>
          <p class="mb-4">{{ selectedProgram.fullDescription }}</p>
          <p class="font-semibold mb-2">Career Opportunities:</p>
          <ul class="list-disc list-inside mb-4">
            <li v-for="opportunity in selectedProgram.careerOpportunities" :key="opportunity">
              {{ opportunity }}
            </li>
          </ul>
          <button @click="selectedProgram = null" class="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors">
            Close
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AdmissionTabs from '~/components/tabs/AdmissionTabs.vue'

const applicationChecklist = [
  'Completed online application form',
  'Official high school transcripts',
  'SAT or ACT scores (if submitting)',
  'Letters of recommendation (2)',
  'Personal essay',
  'Application fee',
  'Proof of English proficiency (for international students)'
]

const undergraduatePrograms = [
  {
    name: 'Computer Science',
    description: 'Develop cutting-edge software and solve complex problems.',
    fullDescription: 'Our Computer Science program prepares students for careers in software development, artificial intelligence, cybersecurity, and more. You\'ll learn programming languages, algorithms, data structures, and cutting-edge technologies.',
    careerOpportunities: [
      'Software Developer',
      'Data Scientist',
      'AI Engineer',
      'Cybersecurity Analyst',
      'Cloud Computing Specialist'
    ]
  },
  {
    name: 'Business Administration',
    description: 'Learn to manage organizations and make strategic decisions.',
    fullDescription: 'Our Business Administration program provides a solid foundation in management, finance, marketing, and entrepreneurship. You\'ll develop leadership skills and gain practical experience through internships and case studies.',
    careerOpportunities: [
      'Business Manager',
      'Financial Analyst',
      'Marketing Specialist',
      'Entrepreneur',
      'Human Resources Manager'
    ]
  },
  {
    name: 'Environmental Science',
    description: 'Study the environment and develop solutions for sustainability.',
    fullDescription: 'The Environmental Science program focuses on understanding ecosystems, climate change, and sustainable practices. You\'ll engage in fieldwork, laboratory research, and policy analysis to address pressing environmental challenges.',
    careerOpportunities: [
      'Environmental Consultant',
      'Conservation Scientist',
      'Sustainability Coordinator',
      'Environmental Policy Analyst',
      'Renewable Energy Specialist'
    ]
  }
]

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