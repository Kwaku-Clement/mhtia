<template>
  <div class="container mx-auto px-4 py-8">
    <AboutTabs />
    <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div class="bg-gradient-to-r from-cyan-500 to-blue-600 p-6">
        <h1 class="text-4xl font-bold text-white mb-4 animate-fade-in">
          College Overview
        </h1>
      </div>
      <div class="p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-6">
            <h2 class="text-2xl font-semibold text-gray-900">
              About Our College
            </h2>
            <p class="text-gray-600 leading-relaxed">
              We are dedicated to providing a comprehensive education that prepares students for successful careers and meaningful lives. Our commitment to excellence is reflected in our diverse academic programs and supportive campus environment.
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div
                v-for="(stat, index) in collegeStats"
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
              v-for="(impact, index) in collegeImpacts"
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
} from 'lucide-vue-next'
import AboutTabs from '~/components/tabs/AboutTabs.vue'

const collegeStats = ref([
  { value: '5000+', label: 'Students Enrolled' },
  { value: '95%', label: 'Graduation Rate' }
])

const collegeImpacts = ref([
  {
    icon: Users,
    title: 'Student Success',
    description: 'High graduation rates and successful alumni'
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'International partnerships and study abroad programs'
  },
  {
    icon: TrendingUp,
    title: 'Research Excellence',
    description: 'Numerous research publications and grants'
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
