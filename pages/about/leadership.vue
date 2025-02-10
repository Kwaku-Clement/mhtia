<template>
  <div class="container mx-auto px-4 py-8">
    <AboutTabs />
    <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div class="bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
        <h1 class="text-4xl font-bold text-white mb-4 animate-fade-in">
          Our Faculty
        </h1>
      </div>
      <div class="p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="faculty in facultyMembers"
            :key="faculty.name"
            class="bg-white rounded-xl shadow-md border border-gray-100 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div class="relative">
              <div class="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  :src="faculty.photo"
                  :alt="faculty.name"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                {{ faculty.position }}
              </div>
            </div>
            <div class="text-center mt-8 p-4">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                {{ faculty.name }}
              </h3>
              <p class="text-gray-600 mb-4">{{ faculty.bio }}</p>
              <div class="flex justify-center space-x-4">
                <a
                  v-for="social in faculty.socials"
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
import { 
  LinkedinIcon, 
  TwitterIcon, 
  GithubIcon 
} from 'lucide-vue-next'
import AboutTabs from '~/components/tabs/AboutTabs.vue'

const facultyMembers = ref([
  {
    name: 'Dr. Alice Smith',
    position: 'Professor of Physics',
    bio: 'Expert in quantum mechanics with 20+ years of teaching experience.',
    photo: '/placeholder-alice.jpg',
    socials: [
      { platform: 'LinkedIn', icon: LinkedinIcon, link: 'https://linkedin.com/in/alicesmith' },
      { platform: 'Twitter', icon: TwitterIcon, link: 'https://twitter.com/alicesmith' }
    ]
  },
  {
    name: 'Dr. Robert Johnson',
    position: 'Associate Professor of Computer Science',
    bio: 'Specialist in artificial intelligence and machine learning.',
    photo: '/placeholder-robert.jpg',
    socials: [
      { platform: 'LinkedIn', icon: LinkedinIcon, link: 'https://linkedin.com/in/robertjohnson' },
      { platform: 'GitHub', icon: GithubIcon, link: 'https://github.com/robertjohnson' }
    ]
  },
  {
    name: 'Dr. Emily Davis',
    position: 'Assistant Professor of Biology',
    bio: 'Researcher in molecular biology with a focus on genetic engineering.',
    photo: '/placeholder-emily.jpg',
    socials: [
      { platform: 'LinkedIn', icon: LinkedinIcon, link: 'https://linkedin.com/in/emilydavis' },
      { platform: 'Twitter', icon: TwitterIcon, link: 'https://twitter.com/emilydavis' }
    ]
  }
])
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}
</style>