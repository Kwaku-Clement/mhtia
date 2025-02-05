<template>
  <div>
    <AboutTabs />
    <div class="bg-white rounded-lg shadow p-6">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">Our History</h1>
      <div class="space-y-8">
        <div v-for="(milestone, index) in milestones" :key="index" class="flex gap-4">
          <div class="flex-shrink-0 w-24 font-bold text-blue-600">
            {{ milestone.year }}
          </div>
          <div>
            <h3 class="font-semibold text-gray-900">{{ milestone.title }}</h3>
            <p class="text-gray-600">{{ milestone.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import AboutTabs from '~/components/tabs/AboutTabs.vue'

const milestones = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'Started with a vision to transform the industry.'
  },
  {
    year: '2022',
    title: 'Global Expansion',
    description: 'Opened offices in Europe and Asia.'
  },
  {
    year: '2024',
    title: 'Innovation Award',
    description: 'Recognized for breakthrough technologies.'
  }
]
</script>
