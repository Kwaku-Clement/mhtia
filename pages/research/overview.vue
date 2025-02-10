<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-center mb-8 text-purple-800">
      Research & Innovation
    </h1>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="(project, index) in researchProjects" 
        :key="index"
        class="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        <div class="h-48 overflow-hidden">
          <img 
            :src="project.image" 
            :alt="project.title" 
            class="w-full h-full object-cover"
          />
        </div>
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-2 text-gray-800">
            {{ project.title }}
          </h2>
          <div class="flex items-center mb-4">
            <span class="text-sm text-purple-600 bg-purple-100 px-3 py-1 rounded-full mr-2">
              {{ project.department }}
            </span>
            <span class="text-sm text-gray-500">
              {{ project.fundingSource }}
            </span>
          </div>
          <p class="text-gray-600 mb-4">
            {{ project.description }}
          </p>
          <div class="flex justify-between items-center">
            <button 
              @click="viewProjectDetails(project)"
              class="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const researchProjects = ref([
  {
    title: 'AI-Driven Climate Change Modeling',
    department: 'Computer Science',
    fundingSource: 'National Science Foundation',
    description: 'Advanced machine learning techniques to predict climate change impacts.',
    image: '/api/placeholder/600/400'
  },
  {
    title: 'Sustainable Urban Design',
    department: 'Architecture',
    fundingSource: 'Urban Innovation Grant',
    description: 'Developing eco-friendly urban planning strategies for future cities.',
    image: '/api/placeholder/600/400'
  },
  {
    title: 'Precision Medicine Research',
    department: 'Biomedical Engineering',
    fundingSource: 'Health Research Institute',
    description: 'Personalized treatment approaches using genetic analysis.',
    image: '/api/placeholder/600/400'
  }
])

const viewProjectDetails = (project) => {
  // Implement modal or detailed view for research project
  console.log('Viewing project details:', project.title)
}
</script>