<template>
  <div
    class="sticky top-16 z-30 bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-500 ease-in-out"
    :class="{
      'shadow-xl': isScrolled,
      'py-4': !isScrolled,
      'py-2': isScrolled
    }"
  >
    <nav class="container mx-auto px-4 overflow-x-auto">
      <div class="flex justify-start md:justify-center items-center space-x-2 md:space-x-4 min-w-max">
        <NuxtLink
          v-for="tab in tabs"
          :key="tab.path"
          :to="tab.path"
          class="relative px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-500 ease-in-out
                 hover:scale-105 active:scale-95 group"
          :class="[
            $route.path === tab.path
              ? 'bg-blue-500 text-white shadow-md hover:bg-blue-600'
              : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
          ]"
        >
          {{ tab.name }}
          <span
            class="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 opacity-0
                   group-hover:opacity-10 transition-opacity duration-500 ease-in-out"
          ></span>
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const tabs = [
  { name: 'Overview', path: '/academics/overview' },
  { name: 'Colleges', path: '/academics/colleges' },
  { name: 'Programs', path: '/academics/programs' },
  { name: 'Calendar', path: '/academics/calendar' },
  // { name: 'e-Library', path: '/academics/library' },
  // { name: 'e-Learning', path: '/academics/leasr' },
  { name: 'Journals', path: '/academics/journals' }
]
</script>
