<template>
  <header
    class="bg-white shadow-md top-0 z-40 transition-all duration-500 ease-in-out"
    :class="{
      'shadow-lg': isScrolled,
      'py-3': !isScrolled,
      'py-2': isScrolled
    }"
  >
    <div class="container bg-blue-600 mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-6">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="text-white hover:text-red-300 transition-all duration-500 ease-in-out transform hover:scale-105 active:scale-95
                 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5
                 after:bg-red-300 after:transform after:scale-x-0 after:transition-transform
                 after:duration-500 hover:after:scale-x-100"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- Mobile Menu Button -->
      <button
        @click="isMobileMenuOpen = !isMobileMenuOpen"
        class="md:hidden transform transition-all duration-500 ease-in-out hover:rotate-180 active:scale-90"
      >
        <Icon
          :name="isMobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'"
          class="w-6 h-6 text-white hover:text-red-300 transition-colors"
        />
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-500 ease-in-out"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-96 opacity-100"
      leave-active-class="transition-all duration-500 ease-in-out"
      leave-from-class="max-h-96 opacity-100"
      leave-to-class="max-h-0 opacity-0"
    >
      <nav v-if="isMobileMenuOpen" class="md:hidden bg-blue-600 px-4 py-2">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="block py-2 text-white hover:text-red-300 transition-all duration-500 ease-in-out
                 transform hover:translate-x-2"
          @click="isMobileMenuOpen = false"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const menuItems = [
  { label: 'Student Portal', path: 'StudentPortal' },
  { label: 'Staff Portal', path: '/StaffPortal' },
  { label: 'Alumni', path: '/Alumni' },
  { label: 'Careers', path: '/Careers' },
];
</script>
