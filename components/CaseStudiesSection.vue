<template>
  <section class="py-16 bg-white overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center relative">
        <!-- Image Container -->
        <div 
          class="w-full lg:w-1/2 mb-12 lg:mb-0 transform transition-all duration-500 hover:scale-105"
          v-motion
          :initial="{ opacity: 0, scale: 0.8 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 800 } }"
        >
          <img
            src="/images/career.jpg"
            alt="Students on campus"
            class="w-full h-[400px] object-cover rounded-lg shadow-2xl"
          />
        </div>
        
        <!-- Text Content -->
        <div 
          class="w-full lg:w-2/3 lg:pl-16 lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 bg-white lg:bg-white/90 p-8 rounded-lg shadow-xl"
          v-motion
          :initial="{ opacity: 0, x: 100 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800 } }"
        >
          <span 
            class="text-sm text-primary font-bold uppercase tracking-wider"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 600 } }"
          >
            Educational Excellence
          </span>
          <h3 
            class="text-3xl font-bold mt-4 mb-6"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 600 } }"
          >
            Empowering Minds, Shaping Futures
          </h3>
          <p 
            class="text-gray-700 mb-6 leading-relaxed"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 800, duration: 600 } }"
          >
            At our institution, we believe in nurturing talent and fostering innovation. Our cutting-edge programs and world-class faculty ensure that students are well-equipped to face the challenges of tomorrow. From state-of-the-art laboratories to collaborative learning spaces, we provide an environment that inspires growth and creativity.
          </p>
          <a 
            href="#" 
            class="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors duration-300 group"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 1000, duration: 600 } }"
          >
            Explore Programs
            <Icon 
              name="heroicons:arrow-right" 
              class="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-2" 
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

<style scoped>
@media (min-width: 1024px) {
  .lg\:absolute.lg\:right-0 {
    right: -5%;
  }
}
</style>