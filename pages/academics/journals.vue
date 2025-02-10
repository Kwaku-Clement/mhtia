<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white">
    <AcademicsTabs />
    <div class="container mx-auto px-4 py-8">
      <!-- Header Section -->
      <div class="bg-white rounded-xl shadow-lg p-8 mb-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div class="animate-fade-in-left">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Academic Journals
            </h1>
            <p class="text-xl text-gray-600 mb-6">
              Access cutting-edge research and scholarly publications
            </p>
            <!-- Search Bar -->
            <div class="relative">
              <input 
                type="text" 
                placeholder="Search journals, articles, or authors..."
                class="w-full px-4 py-3 pr-12 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
              >
              <span class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="stat in journalStats" 
                 :key="stat.label"
                 class="bg-blue-50 p-6 rounded-lg text-center transform transition-all duration-500 hover:-translate-y-2">
              <div class="text-3xl font-bold text-blue-600 mb-2">{{ stat.value }}</div>
              <div class="text-sm text-gray-600">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Featured Journals -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div v-for="journal in featuredJournals" 
             :key="journal.id"
             class="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
          <div class="h-3 bg-gradient-to-r" :class="journal.gradientClass"></div>
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-xl font-semibold text-gray-800">{{ journal.title }}</h3>
              <span class="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                {{ journal.impactFactor }} IF
              </span>
            </div>
            <p class="text-gray-600 mb-4">{{ journal.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="(tag, index) in journal.tags" 
                    :key="index"
                    class="text-sm px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                {{ tag }}
              </span>
            </div>
            <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              View Journal
            </button>
          </div>
        </div>
      </div>

      <!-- Latest Publications -->
      <div class="bg-white rounded-xl shadow-lg p-8 mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Latest Publications</h2>
        <div class="space-y-6">
          <div v-for="publication in latestPublications" 
               :key="publication.id"
               class="group border-b border-gray-100 pb-6 last:border-0 last:pb-0">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div class="md:col-span-3">
                <h3 class="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {{ publication.title }}
                </h3>
                <p class="text-gray-600 mt-2">{{ publication.abstract }}</p>
                <div class="flex flex-wrap gap-4 mt-4">
                  <span class="text-sm text-gray-500">
                    👤 {{ publication.authors.join(', ') }}
                  </span>
                  <span class="text-sm text-gray-500">
                    📅 {{ publication.date }}
                  </span>
                  <span class="text-sm text-gray-500">
                    📊 Citations: {{ publication.citations }}
                  </span>
                </div>
              </div>
              <div class="flex flex-col justify-center gap-2">
                <button class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Read Paper
                </button>
                <button class="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Submit Research -->
      <div class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 class="text-3xl font-bold text-white mb-4">Submit Your Research</h2>
            <p class="text-blue-100 mb-6">
              Share your findings with the academic community. Our peer-review process ensures the highest quality of published research.
            </p>
            <button class="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300">
              Submission Guidelines
            </button>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="metric in submissionMetrics" 
                 :key="metric.label"
                 class="bg-white/10 backdrop-blur p-4 rounded-lg text-center">
              <div class="text-2xl font-bold text-white">{{ metric.value }}</div>
              <div class="text-sm text-blue-100">{{ metric.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AcademicsTabs from '~/components/tabs/AcademicsTabs.vue'

const journalStats = ref([
  { value: '50+', label: 'Active Journals' },
  { value: '10K+', label: 'Published Papers' },
  { value: '5K+', label: 'Contributing Authors' },
  { value: '150+', label: 'Countries Reached' }
])

const featuredJournals = ref([
  {
    id: 1,
    title: 'Journal of Advanced Technology',
    description: 'Leading research in emerging technologies and innovation.',
    impactFactor: '4.2',
    gradientClass: 'from-blue-500 to-blue-600',
    tags: ['Technology', 'Innovation', 'Engineering']
  },
  {
    id: 2,
    title: 'Data Science Review',
    description: 'Cutting-edge research in data analytics and machine learning.',
    impactFactor: '3.8',
    gradientClass: 'from-green-500 to-green-600',
    tags: ['Data Science', 'AI', 'Analytics']
  },
  {
    id: 3,
    title: 'Business Management Studies',
    description: 'Contemporary research in business and management.',
    impactFactor: '3.5',
    gradientClass: 'from-purple-500 to-purple-600',
    tags: ['Business', 'Management', 'Economics']
  }
])

const latestPublications = ref([
  {
    id: 1,
    title: 'Machine Learning Applications in Healthcare',
    abstract: 'A comprehensive study of ML applications in modern healthcare systems...',
    authors: ['Dr. Sarah Chen', 'Dr. Michael Roberts'],
    date: 'Sep 15, 2025',
    citations: 45
  },
  {
    id: 2,
    title: 'Sustainable Energy Solutions',
    abstract: 'Investigating renewable energy implementation strategies...',
    authors: ['Dr. James Wilson', 'Dr. Emma Thompson'],
    date: 'Sep 12, 2025',
    citations: 32
  }
])

const submissionMetrics = ref([
  { value: '2-3', label: 'Weeks Review Time' },
  { value: '92%', label: 'Acceptance Rate' },
  { value: '100+', label: 'Expert Reviewers' },
  { value: '24/7', label: 'Support Available' }
])
</script>

<style>
@keyframes fade-in-left {
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-left {
  animation: fade-in-left 1s ease-out;
}
</style>