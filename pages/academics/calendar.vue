<template>
  <div class="container mx-auto px-4 py-8">
    <AcademicsTabs />
    <div class="container mx-auto px-4 py-8">
      <!-- Header Section -->
      <div class="text-center mb-12 animate-fade-in-down">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Academic Calendar
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Stay up to date with important academic dates and events
        </p>
      </div>

      <!-- Quick Links -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <button v-for="period in academicPeriods" 
                :key="period.name"
                @click="selectedPeriod = period.name"
                :class="[
                  'p-4 rounded-lg transition-all duration-300 text-left',
                  selectedPeriod === period.name 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white text-gray-600 hover:bg-blue-50'
                ]">
          <div class="font-semibold">{{ period.name }}</div>
          <div class="text-sm" :class="selectedPeriod === period.name ? 'text-blue-100' : 'text-gray-500'">
            {{ period.date }}
          </div>
        </button>
      </div>

      <!-- Calendar Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <!-- Monthly Calendar -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl">
            <div class="flex justify-between items-center mb-6">
              <button class="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                ← Previous
              </button>
              <h2 class="text-2xl font-bold text-gray-800">September 2025</h2>
              <button class="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                Next →
              </button>
            </div>
            <div class="grid grid-cols-7 gap-2">
              <!-- Week Days -->
              <div v-for="day in weekDays" 
                   :key="day" 
                   class="text-center text-gray-600 font-medium py-2">
                {{ day }}
              </div>
              <!-- Calendar Days -->
              <div v-for="date in calendarDays" 
                   :key="date.day"
                   :class="[
                     'aspect-square rounded-lg p-2 transition-all duration-300',
                     date.isToday ? 'bg-blue-600 text-white' : 'hover:bg-blue-50',
                     date.hasEvent ? 'font-bold' : ''
                   ]">
                <div class="text-center">{{ date.day }}</div>
                <div v-if="date.hasEvent" class="w-1.5 h-1.5 bg-blue-400 rounded-full mx-auto mt-1"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Upcoming Events -->
        <div class="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
          <div class="space-y-4">
            <div v-for="event in upcomingEvents" 
                 :key="event.id"
                 class="group p-4 rounded-lg bg-gray-50 transform transition-all duration-300 hover:bg-blue-50 hover:-translate-x-2">
              <div class="flex items-start gap-4">
                <div class="min-w-[60px] text-center">
                  <div class="text-2xl font-bold text-blue-600">{{ event.day }}</div>
                  <div class="text-sm text-gray-600">{{ event.month }}</div>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {{ event.title }}
                  </h3>
                  <p class="text-sm text-gray-600">{{ event.description }}</p>
                  <div class="mt-2 flex gap-2">
                    <span class="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                      {{ event.type }}
                    </span>
                    <span class="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                      {{ event.time }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Important Dates -->
      <div class="bg-white rounded-xl shadow-lg p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Important Dates</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(dates, category) in importantDates" 
               :key="category"
               class="space-y-4">
            <h3 class="font-semibold text-gray-800">{{ category }}</h3>
            <div v-for="date in dates" 
                 :key="date.event"
                 class="flex justify-between items-center py-2 border-b border-gray-100">
              <span class="text-gray-600">{{ date.event }}</span>
              <span class="text-sm font-medium text-blue-600">{{ date.date }}</span>
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

const selectedPeriod = ref('Fall 2025')

const academicPeriods = ref([
  { name: 'Fall 2025', date: 'Sep - Dec' },
  { name: 'Winter 2026', date: 'Jan - Apr' },
  { name: 'Spring 2026', date: 'May - Jun' },
  { name: 'Summer 2026', date: 'Jul - Aug' }
])

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const calendarDays = ref(Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  isToday: i + 1 === 15,
  hasEvent: [5, 12, 15, 22, 28].includes(i + 1)
})))

const upcomingEvents = ref([
  {
    id: 1,
    day: '15',
    month: 'Sep',
    title: 'Fall Semester Begins',
    description: 'First day of classes for Fall 2025',
    type: 'Academic',
    time: '8:00 AM'
  },
  {
    id: 2,
    day: '22',
    month: 'Sep',
    title: 'Research Symposium',
    description: 'Annual research presentation event',
    type: 'Event',
    time: '10:00 AM'
  },
  {
    id: 3,
    day: '28',
    month: 'Sep',
    title: 'Course Add/Drop Deadline',
    description: 'Last day to modify course schedule',
    type: 'Deadline',
    time: '11:59 PM'
  }
])

const importantDates = ref({
  'Registration': [
    { event: 'Course Registration Opens', date: 'Aug 15' },
    { event: 'Late Registration Deadline', date: 'Sep 20' }
  ],
  'Academic Deadlines': [
    { event: 'Add/Drop Period Ends', date: 'Sep 28' },
    { event: 'Withdrawal Deadline', date: 'Nov 15' }
  ],
  'Examinations': [
    { event: 'Midterm Exams Begin', date: 'Oct 15' },
    { event: 'Final Exams Begin', date: 'Dec 10' }
  ]
})
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