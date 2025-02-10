<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-center mb-8 text-blue-800 animate-fade-in">
      Campus News
    </h1>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="(article, index) in newsArticles" 
        :key="index" 
        class="bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
      >
        <img 
          :src="article.image" 
          :alt="article.title" 
          class="w-full h-48 object-cover"
        />
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-2 text-gray-800">
            {{ article.title }}
          </h2>
          <p class="text-gray-600 mb-4">
            {{ article.excerpt }}
          </p>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-500">
              {{ article.date }}
            </span>
            <button 
              @click="readMore(article)"
              class="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newsArticles = ref([
  {
    title: 'Breakthrough Research in Quantum Computing',
    excerpt: 'Our university researchers make significant advances in quantum technology.',
    image: '/api/placeholder/600/400',
    date: 'February 10, 2025'
  },
  {
    title: 'New Sustainability Initiative Launched',
    excerpt: 'Comprehensive campus-wide program to reduce carbon footprint.',
    image: '/api/placeholder/600/400',
    date: 'January 15, 2025'
  },
  {
    title: 'International Student Exchange Program Expands',
    excerpt: 'Partnering with 5 new universities across different continents.',
    image: '/api/placeholder/600/400',
    date: 'March 1, 2025'
  }
])

const readMore = (article) => {
  // Implement modal or navigation to full article
  console.log('Read more about:', article.title)
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>