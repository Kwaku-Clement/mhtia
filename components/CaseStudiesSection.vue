<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <!-- Image Container -->
        <div 
          class="w-full lg:w-1/2 mb-12 lg:mb-0"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
        >
          <div class="relative overflow-hidden rounded-2xl shadow-xl group">
            <img
              src="/images/career.jpg"
              alt="Students on campus"
              class="w-full h-[300px] lg:h-[400px] object-cover transform transition-all duration-500 group-hover:scale-105"
            />
            <div 
              class="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300"
            >
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 class="text-xl font-bold mb-2">Academic Excellence</h4>
                <p class="text-sm">World-class education and innovative learning environments</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Text Content -->
        <div 
          class="w-full lg:w-1/2 pr-0 lg:pr-8"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
        >
          <span 
            class="text-sm text-primary font-bold inline-block transform transition-all duration-300 
                  hover:scale-105 uppercase"
          >
            Educational Excellence
          </span>
          <h3 
            class="text-3xl font-bold mt-4 mb-4 transform transition-all duration-300 
                  hover:text-primary"
          >
            Empowering Minds, Shaping Futures
          </h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            At our institution, we believe in nurturing talent and fostering innovation. Our cutting-edge programs and world-class faculty ensure that students are well-equipped to face the challenges of tomorrow. From state-of-the-art laboratories to collaborative learning spaces, we provide an environment that inspires growth and creativity.
          </p>
          <a 
            href="#" 
            class="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white font-medium 
                  transform transition-all duration-300 hover:bg-primary-dark hover:scale-105 
                  active:scale-95 group shadow-md hover:shadow-lg"
          >
            Explore Programs
            <Icon 
              name="heroicons:arrow-right" 
              class="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" 
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