<template>
    <div class="bg-white dark:bg-gray-800 shadow-lg w-64 transform transition-transform duration-300 ease-in-out" :class="isOpen ? 'translate-x-0' : '-translate-x-full'" @click="toggleSidebar">
      <div class="p-4">
        <h1 class="text-xl font-bold">MHTI</h1>
        <nav class="mt-6">
          <a href="#" class="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">Home</a>
          <a href="#" class="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">About</a>
          <a href="#" class="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">Courses</a>
          <a href="#" class="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">Contact</a>
        </nav>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import { useSidebarStore } from '@/stores/sidebar'
  
  export default defineComponent({
    setup() {
      const sidebarStore = useSidebarStore()
      return {
        isOpen: sidebarStore.isOpen,
        toggleSidebar: sidebarStore.toggleSidebar
      }
    }
  })
  </script>
  
  <style>
  /* Add any custom styles here */
  </style>
  