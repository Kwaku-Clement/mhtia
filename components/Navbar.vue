<template>
    <header class="bg-white dark:bg-gray-800 shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <img class="h-8 w-auto sm:h-10" src="/images/logo.png" alt="Logo">
          </div>
          <div class="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <a href="#" class="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" class="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#" class="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium">Courses</a>
            <a href="#" class="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
          <button @click="toggleTheme" class="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600" aria-label="Toggle theme">
            <svg v-if="themeStore.theme === 'light'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import { useThemeStore } from '~/stores/theme'
  
  export default defineComponent({
    setup() {
      const themeStore = useThemeStore()
      const toggleTheme = () => {
        themeStore.toggleTheme()
      }
      return {
        themeStore,
        toggleTheme
      }
    }
  })
  </script>
  
  <style>
  /* Add any custom styles here */
  </style>
  