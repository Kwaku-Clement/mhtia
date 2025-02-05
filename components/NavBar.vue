<template>
  <header 
    class="bg-white shadow-md sticky top-0 z-40 transition-all duration-300"
    :class="{ 
      'shadow-lg': isScrolled,
      'py-3': !isScrolled,
      'py-2': isScrolled
    }"
  >
    <div class="container mx-auto px-4 flex justify-between items-center">
      <NuxtLink 
        to="/" 
        class="flex items-center transform transition-all duration-300"
        :class="{ 'scale-90': isScrolled }"
      >
        <img 
          src="/images/logo.png" 
          alt="MHTIA Logo" 
          class="h-12 w-auto transition-all duration-300"
          :class="{ 'h-10': isScrolled }"
        />
      </NuxtLink>
      
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-6">
  <div
    v-for="(item, index) in menuItems"
    :key="index"
    class="relative group"
  >
    <NuxtLink 
      v-if="!item.children"
      :to="item.path"
      class="text-black hover:text-red-300 transition-all duration-300 flex items-center 
             transform hover:scale-105 active:scale-95"
    >
      {{ item.label }}
    </NuxtLink>

    <button
      v-else
      class="text-black hover:text-red-300 transition-all duration-300 flex items-center 
             transform hover:scale-105 active:scale-95 group-hover:text-red-300"
    >
      {{ item.label }}
      <svg
        class="w-4 h-4 ml-1 transform transition-transform group-hover:rotate-180"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
    
    <!-- Existing dropdown logic remains the same -->
    <Transition 
      name="dropdown"
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-95 translate-y-2"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 translate-y-2"
    >
      <div
        v-if="item.children"
        class="absolute hidden group-hover:block z-50 bg-white shadow-lg rounded-md mt-2 py-2 w-64 
               origin-top-left transform"
      >
        <NuxtLink
          v-for="(child, childIndex) in item.children"
          :key="childIndex"
          :to="child.path"
          class="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-red-300 
                 transition-colors active:bg-gray-200 transform active:scale-95"
        >
          {{ child.label }}
        </NuxtLink>
      </div>
    </Transition>
  </div>
</nav>
      
      <!-- Mobile Menu Toggle with Interactive Animation -->
      <button 
        @click="toggleMobileMenu" 
        class="md:hidden transform transition-all duration-300 active:scale-75 hover:rotate-12"
      >
        <Icon 
          name="heroicons:bars-3" 
          class="w-6 h-6 text-gray-700 hover:text-red-300 transition-colors"
        />
      </button>
    </div>
    
    <MobileMenu
      :is-open="isMobileMenuOpen"
      :menu-items="menuItems"
      @close="closeMobileMenu"
    />
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Reactive state for mobile menu
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)

// Method to toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Method to close mobile menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Scroll-based header animation
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

// Add scroll event listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// Remove scroll event listener
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const menuItems = [
  {
    label: 'About MHTIA',
    children: [
      { label: 'Overview', path: '/about/overview' },
      { label: 'History', path: '/about/history' },
      { label: 'Mission and Vision', path: '/about/mission' },
      { label: 'Leadership & Directorates', path: '/about/leadership' },
      { label: 'Affiliates and Partners', path: '/about/partners' }
    ]
  },
  {
    label: 'Admissions',
    children: [
      { label: 'Overview', path: '/admissions/overview' },
      { label: 'Certificate', path: '/admissions/certificate' },
      { label: 'Diploma', path: '/admissions/diploma' },
      { label: 'Undergraduate', path: '/admissions/undergraduate' },
      { label: 'International Admissions', path: '/admissions/international' },
      { label: 'Distance & Continuing', path: '/admissions/distance-continuing' }
    ]
  },

  {
    label: 'Academics',
    children: [
      { label: 'Overview', path: '/academics/overview' },
      { label: 'Colleges', path: '/academics/colleges' },
      { label: 'Programmes', path: '/academics/programmes' },
      { label: 'Academic Calendar', path: '/academics/calendar' },
      { label: 'Library', path: '/academics/library' },
      { label: 'MHTIA Journals', path: '/academics/journals' }
    ]
  },
  { label: "Research", path: "/research/overview" },
  { label: "News", path: "/news/overview" },
  { label: "Student Life", path: "/student_life/overview" },
]
</script>

<style scoped>
/* Dropdown transition */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(10px);
}

/* Hover and active states */
.group:hover .group-hover\:block {
  display: block;
}
</style>