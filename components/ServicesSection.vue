<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-primary text-sm font-bold mb-8 text-center">OUR SERVICES</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="p-8 bg-white rounded-lg shadow-md flex flex-col items-center text-center group hover:bg-primary transition-colors duration-300 cursor-pointer"
          :class="{ 'bg-primary': service.active }"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: index * 100 } }"
        >
          <div class="w-12 h-12 mb-4">
            <Icon 
              :name="service.icon" 
              :class="[
                'w-full h-full transition-colors duration-300',
                service.active ? 'text-white' : 'text-primary',
                'group-hover:text-white'
              ]" 
            />
          </div>
          <h3 
            class="font-medium mb-2 transition-colors duration-300"
            :class="[
              service.active ? 'text-white' : 'text-primary',
              'group-hover:text-white'
            ]"
          >
            {{ service.title }}
          </h3>
          <p 
            class="text-sm transition-colors duration-300"
            :class="[
              service.active ? 'text-white/80' : 'text-gray-500',
              'group-hover:text-white/80'
            ]"
          >
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';

const services = [
  {
    icon: 'lucide:anchor',
    title: 'Mooring',
    description: 'Port services',
    active: false
  },
  {
    icon: 'lucide:plane',
    title: 'Project',
    description: 'Specialist handling',
    active: false
  },
  {
    icon: 'lucide:warehouse',
    title: 'Warehousing',
    description: 'Storage solutions',
    active: false
  },
  {
    icon: 'lucide:truck',
    title: 'RORO High & Heavy',
    description: 'Specialist solutions',
    active: false
  },
  {
    icon: 'lucide:car',
    title: 'RORO Cars',
    description: 'Vehicle services',
    active: false
  },
  {
    icon: 'lucide:ship',
    title: 'Cruise',
    description: 'Passenger operations',
    active: false
  }
]
</script>