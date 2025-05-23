<template>
  <div class="container mx-auto px-4 py-8">
    <AboutTabs />
    <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div class="bg-gradient-to-r from-green-500 to-blue-600 p-6">
        <h1 class="text-4xl font-bold text-white mb-4 animate-fade-in">
          Our Mission
        </h1>
      </div>
      <div class="p-8">
        <div class="max-w-4xl mx-auto">
          <p class="text-2xl text-gray-700 text-center mb-12 leading-relaxed animate-slide-in">
            To provide a transformative educational experience that empowers students to achieve their full potential, fostering a community of lifelong learners and responsible global citizens.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              v-for="(value, index) in coreValues"
              :key="index"
              class="bg-white p-6 rounded-xl shadow-md text-center border border-gray-100 transform transition-all duration-300 hover:scale-105"
            >
              <div class="text-5xl mb-4 text-green-500">
                <component :is="value.icon" />
              </div>
              <h3 class="text-xl font-semibold mb-3 text-gray-900">
                {{ value.title }}
              </h3>
              <p class="text-gray-600">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  BookOpen,
  Leaf,
  Target
} from 'lucide-vue-next'
import AboutTabs from '~/components/tabs/AboutTabs.vue'

const coreValues = ref([
  {
    icon: BookOpen,
    title: 'Academic Excellence',
    description: 'Promoting rigorous academic standards and innovative teaching methods.'
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'Encouraging environmentally responsible practices and sustainable development.'
  },
  {
    icon: Target,
    title: 'Community Engagement',
    description: 'Building strong relationships with local and global communities through service and collaboration.'
  }
])
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-slide-in {
  animation: slideIn 0.8s forwards;
}
</style>
