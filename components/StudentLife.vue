<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-12 text-center text-red-800 border-b pb-2 ">
        Vision, Mission, and Core Values
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
            <h3 class="text-xl font-bold mb-4">
              {{ service.title }}
            </h3>
            
            <div 
              v-if="index === 1" 
              class="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2 rounded-lg"
            >
              <div class="text-center">
                <span class="block text-sm font-bold text-cyan-600">COMPASSION</span>
              </div>
              <div class="text-center">
                <span class="block text-sm font-bold text-green-600">JUSTICE</span>
              </div>
              <div class="text-center">
                <span class="block text-sm font-bold text-purple-600">FAITHFULNESS</span>
              </div>
              <div class="text-center">
                <span class="block text-sm font-bold text-yellow-600">ONENESS</span>
              </div>
              <div class="text-center">
                <span class="block text-sm font-bold text-red-600">EXCELLENCE</span>
              </div>
            </div>

            <p 
              class="text-sm font-semibold mb-4"
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
  Library, 
  Lightbulb, 
  BookOpen, 
  Users, 
  Laptop
} from 'lucide-vue-next'

const activeService = ref(null)

const services = [
  {
    icon: Lightbulb,
    title: 'Our vision',
    description: 'To be an academic institution valued for the development of professionals with critical thinking abilities and moral character.',
    details: 'We aim to inspire students to achieve their full potential by fostering an environment of academic excellence, ethical leadership, and lifelong learning.'
  },
  {
    icon: Library,
    title: 'Core Values',
    description: '',
    details: 'Our core values guide every aspect of our institution, ensuring that we nurture a community of integrity, inclusivity, and dedication to service.'
  },
  {
    icon: GraduationCap,
    title: 'Our mission',
    description: 'Methodist Health Training Institute exists to develop competent mission-minded health professionals for compassionate service.',
    details: 'Through rigorous training, mentorship, and a commitment to holistic education, we prepare students to make meaningful contributions to the healthcare field and society.'
  },
  // {
  //   icon: Library,
  //   title: 'Research Resources',
  //   description: 'Advanced research facilities, digital databases, and academic research support.',
  //   details: 'State-of-the-art research centers and expert librarians supporting undergraduate and graduate research.'
  // },
  // {
  //   icon: Laptop,
  //   title: 'Technology Support',
  //   description: 'IT services, computer labs, and digital learning resources.',
  //   details: 'Cutting-edge technology access, software support, and digital learning platforms.'
  // },
  // {
  //   icon: Lightbulb,
  //   title: 'Innovation Center',
  //   description: 'Entrepreneurship programs, startup incubation, and interdisciplinary innovation labs.',
  //   details: 'Bridging academic knowledge with real-world innovation through collaborative research.'
  // }
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