<template>
  <div class="container mx-auto px-4 py-8">
    <AboutTabs />
    <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div class="bg-gradient-to-r from-cyan-500 to-blue-600 p-6">
        <h1 class="text-4xl font-bold text-white mb-4 animate-fade-in">
          Company Overview
        </h1>
      </div>
      <div class="p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-6">
            <h2 class="text-2xl font-semibold text-gray-900">
              Who We Are
            </h2>
            <p class="text-gray-600 leading-relaxed">
              We are a pioneering technology company dedicated to creating innovative solutions 
              that drive digital transformation across industries. With a commitment to excellence 
              and customer success, we've been at the forefront of technological advancement.
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div 
                v-for="(stat, index) in companyStats" 
                :key="index"
                class="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <div class="text-3xl font-bold text-blue-600">
                  {{ stat.value }}
                </div>
                <div class="text-sm text-gray-600">
                  {{ stat.label }}
                </div>
              </div>
            </div>
          </div>
          <div class="space-y-6">
            <h2 class="text-2xl font-semibold text-gray-900">
              Our Impact
            </h2>
            <div 
              v-for="(impact, index) in companyImpacts" 
              :key="index"
              class="bg-white border border-gray-100 rounded-lg p-4 flex items-center space-x-4 hover:shadow-md transition-shadow"
            >
              <div class="text-3xl text-blue-500">
                <component :is="impact.icon" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">{{ impact.title }}</h3>
                <p class="text-gray-600">{{ impact.description }}</p>
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
  Users, 
  Globe, 
  TrendingUp, 
  Award 
} from 'lucide-react'
import AboutTabs from '~/components/tabs/AboutTabs.vue'

const companyStats = ref([
  { value: '1000+', label: 'Global Customers' },
  { value: '200%', label: 'Annual Growth' }
])

const companyImpacts = ref([
  {
    icon: Users,
    title: 'Customer Reach',
    description: 'Serving clients across 50+ countries'
  },
  {
    icon: Globe,
    title: 'Global Presence',
    description: 'Offices in 5 continents'
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: '15+ patents filed'
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