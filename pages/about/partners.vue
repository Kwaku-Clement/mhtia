<template>
  <div class="container mx-auto px-4 py-8">
    <AboutTabs />
    <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div class="bg-gradient-to-r from-purple-500 to-pink-600 p-6">
        <h1 class="text-4xl font-bold text-white mb-4 animate-fade-in">
          Our Strategic Partners
        </h1>
      </div>
      <div class="p-8">
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div 
            v-for="partner in partners" 
            :key="partner.name" 
            class="partner-card transform transition-all duration-300 hover:scale-105"
          >
            <div class="bg-gray-100 rounded-lg p-6 text-center">
              <div class="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                <img 
                  :src="partner.logo" 
                  :alt="partner.name" 
                  class="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 class="text-lg font-semibold text-gray-900 mb-2">
                {{ partner.name }}
              </h3>
              <p class="text-sm text-gray-600">{{ partner.type }}</p>
              <div class="mt-4">
                <button 
                  @click="showPartnerDetails(partner)"
                  class="px-4 py-2 bg-purple-500 text-white rounded-full text-sm hover:bg-purple-600 transition-colors"
                >
                  Learn More
                </button>
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
import AboutTabs from '~/components/tabs/AboutTabs.vue'

const partners = ref([
  { 
    name: 'TechCorp', 
    type: 'Technology Partner',
    logo: '/placeholder-techcorp.png',
    description: 'Leading provider of cutting-edge technological solutions.'
  },
  { 
    name: 'GlobalServe', 
    type: 'Service Partner',
    logo: '/placeholder-globalserve.png',
    description: 'Worldwide service integration and support network.'
  },
  { 
    name: 'InnovatePro', 
    type: 'Innovation Partner',
    logo: '/placeholder-innovatepro.png',
    description: 'Collaborative innovation and research platform.'
  },
  { 
    name: 'SecureNet', 
    type: 'Security Partner',
    logo: '/placeholder-securenet.png',
    description: 'Advanced cybersecurity and data protection solutions.'
  }
])

const showPartnerDetails = (partner) => {
  // Placeholder for partner details modal or navigation
  alert(`${partner.name}: ${partner.description}`)
}
</script>

<style scoped>
.partner-card {
  @apply bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}
</style>