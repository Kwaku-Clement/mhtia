<template>
  <div>
    <AboutTabs />
    <div class="bg-white rounded-lg shadow p-6">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">Leadership Team</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="leader in leaders" :key="leader.name" class="text-center">
          <div class="w-32 h-32 mx-auto rounded-full bg-gray-200 mb-4"></div>
          <h3 class="text-lg font-semibold text-gray-900">{{ leader.name }}</h3>
          <p class="text-gray-600">{{ leader.position }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AboutTabs from '~/components/tabs/AboutTabs.vue'

const leaders = [
  { name: 'Jane Doe', position: 'CEO' },
  { name: 'John Smith', position: 'CTO' },
  { name: 'Sarah Johnson', position: 'COO' }
]
</script>
