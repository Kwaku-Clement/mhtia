<template>
  <div class="container mx-auto px-4 py-8">
    <AcademicsTabs />
    <div class="container mx-auto px-4 py-8">
      <!-- Header Section -->
      <div class="text-center mb-12 transform transition-all duration-500">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-down">
          Academic Programs
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up">
          Discover our comprehensive range of programs designed to prepare you for success
        </p>
      </div>

      <!-- Program Categories -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button v-for="category in categories" 
                :key="category"
                @click="selectedCategory = category"
                :class="[
                  'px-6 py-2 rounded-full transition-all duration-300',
                  selectedCategory === category 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white text-gray-600 hover:bg-blue-50'
                ]">
          {{ category }}
        </button>
      </div>

      <!-- Programs Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="program in filteredPrograms" 
             :key="program.id"
             class="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
          <div class="h-48 bg-gradient-to-r from-blue-500 to-blue-700 relative">
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-white text-4xl">{{ program.icon }}</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ program.name }}</h3>
            <p class="text-gray-600 mb-4">{{ program.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="(tag, index) in program.tags" 
                    :key="index"
                    class="text-sm px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                {{ tag }}
              </span>
            </div>
            <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <!-- Application Section -->
      <div class="mt-16 bg-white rounded-xl shadow-lg p-8 transform transition-all duration-500 hover:shadow-xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Ready to Apply?</h2>
            <p class="text-gray-600 mb-6">
              Take the first step towards your future. Our admissions team is here to help you through the application process.
            </p>
            <button class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Start Application
            </button>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="(stat, index) in applicationStats" 
                 :key="index"
                 class="bg-blue-50 p-4 rounded-lg text-center">
              <div class="text-2xl font-bold text-blue-600">{{ stat.number }}</div>
              <div class="text-sm text-gray-600">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import AcademicsTabs from '~/components/tabs/AcademicsTabs.vue'

const categories = ['All Programs', 'Undergraduate', 'Graduate', 'Doctoral']
const selectedCategory = ref('All Programs')

const programs = ref([
  {
    id: 1,
    name: 'Computer Science',
    description: 'Learn advanced computing principles and software development.',
    category: 'Undergraduate',
    icon: '💻',
    tags: ['Programming', 'AI', 'Software Engineering']
  },
  {
    id: 2,
    name: 'Data Science',
    description: 'Master the art of extracting insights from complex data.',
    category: 'Graduate',
    icon: '📊',
    tags: ['Analytics', 'Machine Learning', 'Big Data']
  },
  {
    id: 3,
    name: 'Artificial Intelligence',
    description: 'Research and develop cutting-edge AI solutions.',
    category: 'Doctoral',
    icon: '🤖',
    tags: ['Deep Learning', 'Robotics', 'Neural Networks']
  },
  // Add more programs as needed
])

const applicationStats = ref([
  { number: '95%', label: 'Graduate Employment Rate' },
  { number: '80+', label: 'Partner Companies' },
  { number: '40+', label: 'Countries Represented' },
  { number: '24/7', label: 'Support Available' }
])

const filteredPrograms = computed(() => {
  if (selectedCategory.value === 'All Programs') {
    return programs.value
  }
  return programs.value.filter(program => program.category === selectedCategory.value)
})
</script>

<style>
@keyframes fade-in-down {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fade-in-down 1s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 1s ease-out;
}
</style>