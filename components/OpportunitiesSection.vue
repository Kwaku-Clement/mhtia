<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center gap-12">
        <!-- Text Content -->
        <div 
          class="w-full lg:w-1/2 pr-0 lg:pr-8"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
        >
          <span 
            class="text-sm text-primary font-bold inline-block transform transition-all duration-300 
                   hover:scale-105"
          >
            ACADEMIC OPPORTUNITIES
          </span>
          
          <h3 
            class="text-3xl font-bold mt-4 mb-4 transform transition-all duration-300 
                   hover:text-primary"
          >
            Research Assistant Positions
          </h3>
          
          <p class="text-gray-600 mb-6 leading-relaxed">
            Join our cutting-edge research teams and contribute to groundbreaking studies. 
            We're seeking passionate graduate students for Research Assistant roles across various 
            departments. This is your chance to work alongside renowned faculty, gain invaluable 
            experience, and make a real impact in your field of study.
          </p>
          
          <a 
            href="#" 
            class="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white font-medium 
                   transform transition-all duration-300 hover:bg-primary-dark hover:scale-105 
                   active:scale-95 group shadow-md hover:shadow-lg"
          >
            Explore Positions
            <Icon 
              name="heroicons:arrow-right"
              class="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

        <!-- Image -->
        <div 
          class="w-full lg:w-1/2"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :enter="{ opacity: 1, x: 0, transition: { duration: 800 } }"
        >
          <div class="relative overflow-hidden rounded-2xl shadow-xl group">
            <img
              src="/images/forklift.jpg"
              alt="Students in research lab"
              class="w-full h-[300px] lg:h-[400px] object-cover transform transition-all duration-500 
                     group-hover:scale-105"
            />
            <div 
              class="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 
                     group-hover:opacity-100 transition-opacity duration-300"
            >
              <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h4 class="text-xl font-bold mb-2">State-of-the-Art Facilities</h4>
                <p class="text-sm">Access cutting-edge equipment and resources for your research</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>