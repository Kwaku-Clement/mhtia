<template>
  <div>
    <AboutTabs />
    <div class="bg-white rounded-lg shadow p-6">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">Our Partners</h1>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div 
          v-for="partner in partners" 
          :key="partner.name" 
          class="flex flex-col items-center p-6 border border-gray-200 rounded-lg"
        >
          <div class="w-24 h-24 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
            <span class="text-gray-400">Logo</span>
          </div>
          <h3 class="text-lg font-semibold text-center">{{ partner.name }}</h3>
          <p class="text-sm text-gray-600 text-center">{{ partner.type }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AboutTabs from '~/components/tabs/AboutTabs.vue'

const partners = [
  { name: 'TechCorp', type: 'Technology Partner' },
  { name: 'GlobalServe', type: 'Service Partner' },
  { name: 'InnovatePro', type: 'Innovation Partner' },
  { name: 'SecureNet', type: 'Security Partner' }
]
</script>
