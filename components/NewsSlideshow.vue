<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div 
        class="flex flex-col lg:flex-row gap-8 rounded-xl overflow-hidden shadow-lg 
               hover:shadow-2xl transition-all duration-500"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      >
        <!-- Image Section -->
        <div class="w-full lg:w-2/3 relative overflow-hidden group">
          <img
            src="/images/port-night.jpg"
            alt="Campus event"
            class="w-full h-[400px] object-cover transform transition-transform duration-700 
                   group-hover:scale-105"
          />
          <!-- Overlay gradient -->
          <div 
            class="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 
                   group-hover:opacity-100 transition-opacity duration-300"
          ></div>
        </div>

        <!-- Content Section -->
        <div 
          class="w-full lg:w-1/3 p-8 bg-white flex flex-col justify-center 
                 transform transition-all duration-300"
        >
          <span 
            class="text-sm text-primary font-bold tracking-wider mb-2 
                   transform transition-all duration-300 hover:text-primary-dark"
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 200, duration: 600 } }"
          >
            CAMPUS NEWS
          </span>
          
          <h3 
            class="text-2xl font-bold mb-4 text-gray-900 
                   transform transition-all duration-300 group-hover:text-primary"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 400, duration: 600 } }"
          >
            Annual Science Fair Showcases Student Innovation
          </h3>
          
          <p 
            class="text-gray-600 leading-relaxed"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 600 } }"
          >
            This year's Science Fair brought together over 200 students presenting groundbreaking projects. 
            From renewable energy solutions to AI-driven healthcare innovations, our students demonstrated 
            their commitment to addressing real-world challenges...
          </p>

          <!-- Read More Link -->
          <NuxtLink 
            to="/news/science-fair-2023" 
            class="mt-6 inline-flex items-center text-primary font-medium group/link"
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 800, duration: 600 } }"
          >
            Read Full Story 
            <Icon 
              name="heroicons:arrow-right"
              class="w-5 h-5 ml-2 transform transition-transform duration-300 
                     group-hover/link:translate-x-1"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>