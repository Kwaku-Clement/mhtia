<template>
  <div class="container mx-auto px-4 py-8">
    <AcademicsTabs />
    <div class="container mx-auto px-4 py-8">
      <!-- Hero Section -->
      <div class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 mb-12 transform transition-all duration-500 hover:shadow-xl">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="animate-fade-in-left">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
              MHTIA Library
            </h1>
            <p class="text-xl text-blue-100 mb-6">
              Your Gateway to Knowledge and Research Excellence
            </p>
            <button 
              class="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300"
              @click="redirectToKoha">
              Search Catalog
            </button>
          </div>
          <div class="grid grid-cols-2 gap-4 animate-fade-in-right">
            <div v-for="stat in libraryStats" 
                 :key="stat.label"
                 class="bg-white/10 backdrop-blur p-4 rounded-lg text-center text-white">
              <div class="text-2xl font-bold">{{ stat.value }}</div>
              <div class="text-sm">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Access -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div v-for="(action, index) in quickActions" 
             :key="index"
             class="bg-white rounded-lg shadow-md p-6 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
          <div class="text-3xl text-blue-600 mb-4">{{ action.icon }}</div>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ action.title }}</h3>
          <p class="text-gray-600 mb-4">{{ action.description }}</p>
          <button 
            class="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
            @click="redirectToKoha">
            Access Catalog →
          </button>
        </div>
      </div>

      <!-- Hours & Access -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Library Hours</h2>
          <div class="space-y-4">
            <div v-for="(schedule, day) in hours" 
                 :key="day"
                 class="flex justify-between items-center border-b border-gray-100 py-2">
              <span class="font-medium text-gray-700">{{ day }}</span>
              <span class="text-gray-600">{{ schedule }}</span>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Digital Access</h2>
          <div class="space-y-4">
            <div v-for="resource in digitalResources"
                 :key="resource.name"
                 class="flex items-center p-4 bg-gray-50 rounded-lg transform transition-all duration-300 hover:bg-gray-100">
              <div class="text-2xl text-blue-600 mr-4">{{ resource.icon }}</div>
              <div>
                <h3 class="font-medium text-gray-800">{{ resource.name }}</h3>
                <p class="text-sm text-gray-600">{{ resource.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Resources Section -->
      <div class="bg-white rounded-xl shadow-lg p-8">
        <h2 class="text-3xl font-bold text-gray-800 mb-6">Featured Resources</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(resource, index) in featuredResources"
               :key="index"
               class="group relative overflow-hidden rounded-lg transform transition-all duration-500 hover:-translate-y-2">
            <div class="aspect-w-16 aspect-h-9 bg-gray-200"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex flex-col justify-end">
              <h3 class="text-lg font-semibold text-white">{{ resource.title }}</h3>
              <p class="text-sm text-gray-200">{{ resource.description }}</p>
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

const libraryStats = ref([
  { value: '100,000+', label: 'Books & Resources' },
  { value: '50+', label: 'Databases' },
  { value: '1,000+', label: 'Study Spaces' },
  { value: '24/7', label: 'Online Access' }
])

const quickActions = ref([
  {
    icon: '📚',
    title: 'Book Search',
    description: 'Search our extensive collection of books, journals, and digital resources.'
  },
  {
    icon: '🔖',
    title: 'Reserve Room',
    description: 'Book study rooms and collaboration spaces for your group work.'
  },
  {
    icon: '💻',
    title: 'Online Resources',
    description: 'Access our digital library and research databases remotely.'
  },
  {
    icon: '🔍',
    title: 'Library Catalog',
    description: 'Search and access the library catalog using Koha.'
  }
])

const hours = ref({
  'Monday - Friday': '8:00 AM - 10:00 PM',
  'Saturday': '9:00 AM - 6:00 PM',
  'Sunday': '10:00 AM - 4:00 PM',
  'Holidays': 'Check Schedule'
})

const digitalResources = ref([
  {
    icon: '📱',
    name: 'Mobile Access',
    description: 'Access library resources from your mobile device'
  },
  {
    icon: '🔍',
    name: 'Research Databases',
    description: 'Full access to academic journals and research papers'
  },
  {
    icon: '📖',
    name: 'E-Books',
    description: 'Thousands of e-books available for instant access'
  }
])

const featuredResources = ref([
  {
    title: 'Research Guides',
    description: 'Subject-specific research assistance'
  },
  {
    title: 'Special Collections',
    description: 'Rare books and manuscripts'
  },
  {
    title: 'Digital Archives',
    description: 'Historical documents and materials'
  },
  {
    title: 'Learning Commons',
    description: 'Collaborative learning spaces'
  }
])

const redirectToKoha = () => {
  window.open('http://195.35.8.87:8000', '_blank');
};
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

@keyframes fade-in-right {
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-left {
  animation: fade-in-left 1s ease-out;
}

.animate-fade-in-right {
  animation: fade-in-right 1s ease-out;
}
</style>