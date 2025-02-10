<template>
  <div class="container mx-auto px-4 py-8">
    <AcademicsTabs />
    <div class="container mx-auto px-4 py-8">
      <!-- Hero Section -->
      <div class="transform transition-all duration-500 hover:scale-[1.02]">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="relative h-64 bg-blue-600">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>
            <div class="absolute inset-0 flex flex-col justify-center px-8">
              <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-down">
                Welcome to MHTIA
              </h1>
              <p class="text-xl text-blue-100 max-w-2xl animate-fade-in-up">
                Shaping Tomorrow's Leaders Through Excellence in Education
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div v-for="(stat, index) in stats" 
             :key="index"
             class="bg-white p-6 rounded-lg shadow-md transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
          <div class="text-3xl font-bold text-blue-600 mb-2">{{ stat.number }}</div>
          <div class="text-gray-600">{{ stat.label }}</div>
        </div>
      </div>

      <!-- Features Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div class="bg-white rounded-lg shadow-md p-6 transform transition-all duration-500 hover:shadow-xl">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p class="text-gray-600 leading-relaxed">
            To nurture future leaders through comprehensive education and practical experience, fostering innovation and excellence in every field of study.
          </p>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6 transform transition-all duration-500 hover:shadow-xl">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p class="text-gray-600 leading-relaxed">
            To be a globally recognized institution that sets new standards in education, research, and innovation while maintaining our commitment to societal development.
          </p>
        </div>
      </div>

      <!-- News & Updates -->
      <div class="mt-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Latest Updates</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(news, index) in newsUpdates" 
               :key="index"
               class="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
            <div class="h-48 bg-gray-200"></div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ news.title }}</h3>
              <p class="text-gray-600">{{ news.excerpt }}</p>
              <button class="mt-4 text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300">
                Read More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AcademicsTabs from '~/components/tabs/AcademicsTabs.vue'

const stats = ref([
  { number: '15,000+', label: 'Alumni Worldwide' },
  { number: '200+', label: 'Expert Faculty' },
  { number: '30+', label: 'Academic Programs' }
])

const newsUpdates = ref([
  {
    title: 'New Research Center Opening',
    excerpt: 'State-of-the-art facility for advanced technological research opening next month.'
  },
  {
    title: 'International Conference 2025',
    excerpt: 'Annual technology and innovation conference featuring global speakers.'
  },
  {
    title: 'Student Achievement',
    excerpt: 'MHTIA students win national robotics competition.'
  }
])
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