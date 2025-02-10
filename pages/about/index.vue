<template>
  <div class="container mx-auto px-4 py-8">
    <AboutTabs />
    <div class="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg overflow-hidden">
      <div class="p-8 text-center">
        <h1 
          class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 animate-bounce-in"
        >
          Welcome to Our Story
        </h1>
        <p 
          class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in"
        >
          Discover the passion, innovation, and commitment that drive us to create 
          remarkable solutions that transform industries and improve lives.
        </p>
        
        <div class="mt-8 flex justify-center space-x-4">
          <button 
            @click="scrollToSection('mission')"
            class="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
          >
            Our Mission
          </button>
          <button 
            @click="scrollToSection('team')"
            class="px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
          >
            Meet Our Team
          </button>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 p-8 bg-gray-50">
        <div 
          v-for="(feature, index) in landingFeatures" 
          :key="index"
          class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
        >
          <div class="text-4xl mb-4 text-blue-500">
            <component :is="feature.icon" />
          </div>
          <h3 class="text-xl font-semibold mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  LightBulb, 
  Globe, 
  Trophy 
} from 'lucide-react'
import AboutTabs from '~/components/tabs/AboutTabs.vue'

const landingFeatures = ref([
  {
    icon: LightBulb,
    title: 'Innovation',
    description: 'Driving change through creative solutions and cutting-edge technologies.'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving clients across continents with localized, personalized support.'
  },
  {
    icon: Trophy,
    title: 'Excellence',
    description: 'Committed to delivering exceptional quality and continuous improvement.'
  }
])

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
@keyframes bounceIn {
  0% { opacity: 0; transform: scale(0.3); }
  50% { opacity: 1; transform: scale(1.05); }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-bounce-in {
  animation: bounceIn 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}
</style>