<!-- components/SidebarNav.vue -->
<template>
  <aside 
    class="bg-[#1E2B7B] text-white h-screen fixed left-0 top-0 transition-all duration-300"
    :class="[isExpanded ? 'w-64' : 'w-20']"
  >
    <div class="p-6">
      <!-- Logo -->
      <div 
        class="transition-all duration-300 mb-8"
        :class="[isExpanded ? 'w-32' : 'w-8']"
      >
        <img 
          src="/images/logo.png" 
          alt="SCH Logo" 
          class="w-full transition-transform duration-300 hover:scale-105"
        />
      </div>

      <!-- Toggle Button -->
      <button
        @click="isExpanded = !isExpanded"
        class="absolute top-4 -right-3 bg-white text-[#1E2B7B] rounded-full p-1 
               shadow-lg transform transition-transform duration-300 
               hover:scale-110 active:scale-95"
      >
        <Icon 
          name="heroicons:chevron-left" 
          class="w-4 h-4 transition-transform duration-300"
          :class="{ 'rotate-180': !isExpanded }"
        />
      </button>

      <!-- Navigation -->
      <nav class="space-y-4">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/10 
                 transition-all duration-300 transform hover:translate-x-2 group"
        >
          <Icon 
            :name="item.icon" 
            class="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
          />
          <span 
            class="transition-all duration-300"
            :class="[isExpanded ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden']"
          >
            {{ item.label }}
          </span>
        </NuxtLink>
      </nav>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue'

const isExpanded = ref(true)

const menuItems = [
  { label: 'Home', path: '/', icon: 'heroicons:home' },
  { label: 'Services', path: '#services', icon: 'heroicons:cube' },
  { label: 'News', path: '#news', icon: 'heroicons:newspaper' },
  { label: 'Careers', path: '#careers', icon: 'heroicons:briefcase' },
  { label: 'Contact', path: '/contact', icon: 'heroicons:envelope' }
]
</script>