<template>
  <div class="container mx-auto px-4 py-8">
    <AboutTabs />
    <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div class="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
        <h1 class="text-4xl font-bold text-white mb-4 animate-fade-in">
          College Milestones
        </h1>
      </div>
      <div class="p-8">
        <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:bg-gray-200">
          <div
            v-for="(milestone, index) in milestones"
            :key="index"
            class="milestone-item relative flex items-center space-x-6 animate-slide-in"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div
              class="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold shadow-md"
            >
              {{ milestone.year }}
            </div>
            <div class="flex-1 p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                {{ milestone.title }}
              </h3>
              <p class="text-gray-600">{{ milestone.description }}</p>
              <div
                v-if="milestone.impact"
                class="mt-4 p-3 bg-blue-50 rounded-lg"
              >
                <h4 class="font-medium text-blue-800">Impact</h4>
                <p class="text-blue-600">{{ milestone.impact }}</p>
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

const milestones = ref([
  {
    year: '1950',
    title: 'College Founded',
    description: 'Established with a mission to provide quality education.',
    impact: 'Enrolled 500 students in the first year'
  },
  {
    year: '1975',
    title: 'Expansion of Campus',
    description: 'Added new buildings and facilities to accommodate growth.',
    impact: 'Increased student capacity by 2000'
  },
  {
    year: '2000',
    title: 'Introduction of Online Courses',
    description: 'Launched online programs to reach a global audience.',
    impact: 'Attracted 10,000 online learners'
  }
])
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-slide-in {
  opacity: 0;
  animation: slideIn 0.8s forwards;
}

.milestone-item:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease;
}
</style>
