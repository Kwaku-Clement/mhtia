<template>
  <div class="container mx-auto px-4 py-8">
    <AcademicsTabs />
    <div class="container mx-auto px-4 py-8">
      <!-- Header Section -->
      <div class="text-center mb-12 animate-fade-in-down">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Colleges
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our diverse range of colleges, each dedicated to excellence in their respective fields
        </p>
      </div>

      <!-- Quick Navigation -->
      <div class="flex flex-wrap gap-4 mb-8 justify-center">
        <button v-for="category in categories" 
                :key="category"
                @click="selectedCategory = category"
                :class="[
                  'px-6 py-2 rounded-full transition-all duration-300',
                  selectedCategory === category 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white text-gray-600 hover:bg-blue-50'
                ]">
          {{ category }}
        </button>
      </div>

      <!-- Colleges Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div v-for="college in filteredColleges" 
             :key="college.id"
             class="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
          <div class="relative h-48">
            <div class="absolute inset-0 bg-gradient-to-r" :class="college.gradientClass"></div>
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-white text-5xl">{{ college.icon }}</span>
            </div>
          </div>
          <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ college.name }}</h2>
            <p class="text-gray-600 mb-4">{{ college.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="(department, index) in college.departments" 
                    :key="index"
                    class="text-sm px-3 py-1 bg-gray-100 text-gray-600 rounded-full">
                {{ department }}
              </span>
            </div>
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="text-center p-3 bg-gray-50 rounded-lg">
                <div class="text-2xl font-bold text-blue-600">{{ college.students }}+</div>
                <div class="text-sm text-gray-600">Students</div>
              </div>
              <div class="text-center p-3 bg-gray-50 rounded-lg">
                <div class="text-2xl font-bold text-blue-600">{{ college.faculty }}+</div>
                <div class="text-sm text-gray-600">Faculty</div>
              </div>
            </div>
            <button class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <!-- Research Centers -->
      <div class="bg-white rounded-xl shadow-lg p-8 mb-12">
        <h2 class="text-3xl font-bold text-gray-800 mb-8">Research Centers</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="center in researchCenters" 
               :key="center.id"
               class="p-6 bg-gray-50 rounded-lg transform transition-all duration-500 hover:-translate-y-2">
            <div class="text-3xl text-blue-600 mb-4">{{ center.icon }}</div>
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ center.name }}</h3>
            <p class="text-gray-600">{{ center.description }}</p>
          </div>
        </div>
      </div>

      <!-- College Rankings -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div class="bg-white rounded-xl shadow-lg p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Rankings & Recognition</h2>
          <div class="space-y-6">
            <div v-for="ranking in rankings" 
                 :key="ranking.category"
                 class="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div class="text-3xl text-blue-600">{{ ranking.position }}</div>
              <div>
                <div class="font-semibold text-gray-800">{{ ranking.category }}</div>
                <div class="text-sm text-gray-600">{{ ranking.organization }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-xl shadow-lg p-8">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
          <div class="space-y-4">
            <div v-for="event in collegeEvents" 
                 :key="event.id"
                 class="flex gap-4 p-4 bg-gray-50 rounded-lg">
              <div class="text-center min-w-[60px]">
                <div class="text-xl font-bold text-blue-600">{{ event.day }}</div>
                <div class="text-sm text-gray-600">{{ event.month }}</div>
              </div>
              <div>
                <h3 class="font-semibold text-gray-800">{{ event.title }}</h3>
                <p class="text-sm text-gray-600">{{ event.description }}</p>
                <div class="mt-2">
                  <span class="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                    {{ event.type }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- College Life -->
      <div class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 class="text-3xl font-bold text-white mb-4">Experience College Life</h2>
            <p class="text-blue-100 mb-6">
              Join our vibrant community and experience world-class education, research opportunities, and campus life.
            </p>
            <div class="flex gap-4">
              <button class="bg-white text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                Schedule a Visit
              </button>
              <button class="border border-white text-white px-6 py-2 rounded-lg hover:bg-white/10 transition-colors duration-300">
                Virtual Tour
              </button>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="feature in collegeFeatures" 
                 :key="feature.label"
                 class="bg-white/10 backdrop-blur p-4 rounded-lg text-center">
              <div class="text-2xl font-bold text-white">{{ feature.value }}</div>
              <div class="text-sm text-blue-100">{{ feature.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import AcademicsTabs from '~/components/tabs/AcademicsTabs.vue'

const selectedCategory = ref('All Colleges')

const categories = ['All Colleges', 'Engineering', 'Business', 'Science', 'Arts']

const colleges = ref([
  {
    id: 1,
    name: 'College of Engineering',
    description: 'Leading innovation in engineering education and research.',
    icon: '⚡',
    gradientClass: 'from-blue-500 to-blue-600',
    departments: ['Mechanical', 'Electrical', 'Computer Science'],
    students: 3000,
    faculty: 150,
    category: 'Engineering'
  },
  {
    id: 2,
    name: 'Business School',
    description: 'Shaping future business leaders and entrepreneurs.',
    icon: '📈',
    gradientClass: 'from-green-500 to-green-600',
    departments: ['Finance', 'Marketing', 'Management'],
    students: 2500,
    faculty: 120,
    category: 'Business'
  },
  {
    id: 3,
    name: 'College of Sciences',
    description: 'Advancing scientific research and discovery.',
    icon: '🔬',
    gradientClass: 'from-purple-500 to-purple-600',
    departments: ['Physics', 'Chemistry', 'Biology'],
    students: 2000,
    faculty: 100,
    category: 'Science'
  }
])

const filteredColleges = computed(() => {
  if (selectedCategory.value === 'All Colleges') {
    return colleges.value
  }
  return colleges.value.filter(college => college.category === selectedCategory.value)
})

const researchCenters = ref([
  {
    id: 1,
    name: 'AI Research Center',
    description: 'Advanced research in artificial intelligence and machine learning.',
    icon: '🤖'
  },
  {
    id: 2,
    name: 'Biotech Hub',
    description: 'Cutting-edge biotechnology research facility.',
    icon: '🧬'
  },
  {
    id: 3,
    name: 'Energy Institute',
    description: 'Sustainable energy solutions research.',
    icon: '⚡'
  },
  {
    id: 4,
    name: 'Digital Innovation Lab',
    description: 'Digital transformation and innovation research.',
    icon: '💻'
  }
])

const rankings = ref([
  {
    position: '#5',
    category: 'Engineering Programs',
    organization: 'Global University Rankings 2025'
  },
  {
    position: '#8',
    category: 'Business Education',
    organization: 'International Business Schools Review'
  },
  {
    position: '#12',
    category: 'Research Output',
    organization: 'Academic Excellence Index'
  }
])

const collegeEvents = ref([
  {
    id: 1,
    day: '15',
    month: 'Sep',
    title: 'Engineering Open House',
    description: 'Explore our engineering programs and facilities',
    type: 'Open House'
  },
  {
    id: 2,
    day: '22',
    month: 'Sep',
    title: 'Business Leadership Summit',
    description: 'Annual gathering of business leaders and alumni',
    type: 'Conference'
  },
  {
    id: 3,
    day: '28',
    month: 'Sep',
    title: 'Science Fair 2025',
    description: 'Showcase of student research projects',
    type: 'Exhibition'
  }
])

const collegeFeatures = ref([
  { value: '100+', label: 'Student Clubs' },
  { value: '50+', label: 'Research Labs' },
  { value: '95%', label: 'Employment Rate' },
  { value: '40+', label: 'Partner Universities' }
])
</script>

<style>
@keyframes fade-in-down {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fade-in-down 1s ease-out;
}
</style>