<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-12 text-center text-blue-800">
        College Student Services
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          @mouseenter="activeService = index"
          @mouseleave="activeService = null"
          class="p-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer"
          :class="activeService === index 
            ? 'bg-blue-600 text-white' 
            : 'bg-white text-gray-800 hover:bg-blue-100'"
        >
          <div class="flex flex-col items-center text-center">
            <component 
              :is="service.icon" 
              class="w-16 h-16 mb-6"
              :class="activeService === index ? 'text-white' : 'text-blue-600'"
            />
            <h3 class="text-xl font-semibold mb-4">
              {{ service.title }}
            </h3>
            <p 
              class="text-sm mb-4"
              :class="activeService === index ? 'text-white/80' : 'text-gray-600'"
            >
              {{ service.description }}
            </p>
            <transition name="fade">
              <div 
                v-if="activeService === index" 
                class="mt-4 text-sm text-white/80"
              >
                {{ service.details }}
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Library, 
  Laptop, 
  Lightbulb 
} from 'lucide-vue-next'

const activeService = ref(null)

const services = [
  {
    icon: GraduationCap,
    title: 'Academic Advising',
    description: 'Personalized guidance for course selection, major planning, and academic success strategies.',
    details: 'Expert advisors help students navigate academic requirements, explore majors, and develop comprehensive four-year academic plans.'
  },
  {
    icon: BookOpen,
    title: 'Career Development',
    description: 'Comprehensive support for internships, job placement, and professional skill development.',
    details: 'From resume workshops to networking events, we prepare students for successful career transitions.'
  },
  {
    icon: Users,
    title: 'Student Support Services',
    description: 'Holistic support including mental health counseling, disability services, and peer mentoring.',
    details: 'A comprehensive support network ensuring student well-being and academic success.'
  },
  {
    icon: Library,
    title: 'Research Resources',
    description: 'Advanced research facilities, digital databases, and academic research support.',
    details: 'State-of-the-art research centers and expert librarians supporting undergraduate and graduate research.'
  },
  {
    icon: Laptop,
    title: 'Technology Support',
    description: 'IT services, computer labs, and digital learning resources.',
    details: 'Cutting-edge technology access, software support, and digital learning platforms.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Center',
    description: 'Entrepreneurship programs, startup incubation, and interdisciplinary innovation labs.',
    details: 'Bridging academic knowledge with real-world innovation through collaborative research.'
  }
]
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>