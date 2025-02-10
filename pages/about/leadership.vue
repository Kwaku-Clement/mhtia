<template>
  <div class="container mx-auto px-4 py-8">
    <AboutTabs />
    <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div class="bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
        <h1 class="text-4xl font-bold text-white mb-4 animate-fade-in">
          Leadership Team
        </h1>
      </div>
      <div class="p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="leader in leaders" 
            :key="leader.name" 
            class="team-card transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div class="relative">
              <div class="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  :src="leader.photo" 
                  :alt="leader.name" 
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                {{ leader.position }}
              </div>
            </div>
            <div class="text-center mt-8 p-4">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                {{ leader.name }}
              </h3>
              <p class="text-gray-600 mb-4">{{ leader.bio }}</p>
              <div class="flex justify-center space-x-4">
                <a 
                  v-for="social in leader.socials" 
                  :key="social.platform"
                  :href="social.link"
                  target="_blank"
                  class="text-gray-500 hover:text-blue-500 transition-colors"
                >
                  <component :is="social.icon" size="24" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { LinkedIn, Twitter, GitHub } from 'lucide-react'
import AboutTabs from '~/components/tabs/AboutTabs.vue'

const leaders = ref([
  {
    name: 'Jane Doe',
    position: 'CEO',
    bio: 'Visionary leader with 15+ years of tech industry experience.',
    photo: '/placeholder-jane.jpg',
    socials: [
      { platform: 'LinkedIn', icon: LinkedIn, link: '#' },
      { platform: 'Twitter', icon: Twitter, link: '#' }
    ]
  },
  {
    name: 'John Smith',
    position: 'CTO',
    bio: 'Technology expert driving innovation and digital transformation.',
    photo: '/placeholder-john.jpg',
    socials: [
      { platform: 'LinkedIn', icon: LinkedIn, link: '#' },
      { platform: 'GitHub', icon: GitHub, link: '#' }
    ]
  },
  {
    name: 'Sarah Johnson',
    position: 'COO',
    bio: 'Operations strategist ensuring seamless business execution.',
    photo: '/placeholder-sarah.jpg',
    socials: [
      { platform: 'LinkedIn', icon: LinkedIn, link: '#' },
      { platform: 'Twitter', icon: Twitter, link: '#' }
    ]
  }
])
</script>

<style scoped>
.team-card {
  transition: all 0.3s ease;
  background: linear-gradient(to bottom, #f9fafb, #f3f4f6);
  border-radius: 1rem;
  padding: 1.5rem;
}
</style>