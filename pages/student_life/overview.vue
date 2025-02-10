<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-center mb-8 text-green-800">
      Student Life
    </h1>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="(category, index) in studentLifeCategories" 
        :key="index"
        class="bg-white shadow-md rounded-lg p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        <div class="text-4xl mb-4 text-center text-green-600">
          <component :is="category.icon" />
        </div>
        <h2 class="text-2xl font-semibold text-center mb-4 text-gray-800">
          {{ category.title }}
        </h2>
        <p class="text-gray-600 text-center mb-4">
          {{ category.description }}
        </p>
        <div class="text-center">
          <button 
            @click="exploreCategory(category)"
            class="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  Users, 
  BookOpen, 
  Coffee, 
  Home, 
  Globe, 
  Star 
} from 'lucide-vue-next'

const studentLifeCategories = ref([
  {
    title: 'Clubs & Organizations',
    description: 'Join 100+ student-led groups and expand your horizons.',
    icon: Users
  },
  {
    title: 'Academic Resources',
    description: 'Libraries, study spaces, and academic support services.',
    icon: BookOpen
  },
  {
    title: 'Campus Dining',
    description: 'Diverse dining options and meal plans.',
    icon: Coffee
  },
  {
    title: 'Housing',
    description: 'Modern, comfortable living spaces on and off campus.',
    icon: Home
  },
  {
    title: 'Global Opportunities',
    description: 'Study abroad and international exchange programs.',
    icon: Globe
  },
  {
    title: 'Campus Events',
    description: 'Exciting activities, workshops, and social gatherings.',
    icon: Star
  }
])

const exploreCategory = (category) => {
  // Implement navigation or modal for each category
  console.log('Exploring:', category.title)
}
</script>