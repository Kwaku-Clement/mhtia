<template>
  <header
    class="bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-50 transition-all duration-500 ease-in-out"
    :class="{
      'shadow-lg': isScrolled,
      'py-4': !isScrolled,
      'py-2': isScrolled
    }"
  >
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="flex items-center transform transition-all duration-500 ease-in-out"
          :class="{ 'scale-90': isScrolled }"
        >
          <img
            src="/images/logo.png"
            alt="MHTIA Logo"
            class="h-12 w-auto transition-all duration-500 ease-in-out"
            :class="{ 'h-10': isScrolled }"
          />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex space-x-6">
          <div
            v-for="(item, index) in menuItems"
            :key="index"
            class="relative group"
          >
            <!-- Single Link -->
            <NuxtLink
              v-if="!item.children"
              :to="item.path"
              class="text-gray-700 hover:text-red-500 transition-all duration-500 ease-in-out
                     flex items-center transform hover:scale-105 active:scale-95
                     px-3 py-2 rounded-md hover:bg-red-50"
            >
              {{ item.label }}
            </NuxtLink>

            <!-- Dropdown Trigger -->
            <button
              v-else
              class="text-gray-700 hover:text-red-500 transition-all duration-500 ease-in-out
                     flex items-center transform hover:scale-105 active:scale-95
                     px-3 py-2 rounded-md hover:bg-red-50 group"
            >
              {{ item.label }}
              <svg
                class="w-4 h-4 ml-1 transform transition-transform duration-500 ease-in-out group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>

            <!-- Dropdown Menu -->
            <div
              v-if="item.children"
              class="absolute left-0 mt-2 w-64 rounded-lg bg-white shadow-xl opacity-0 invisible
                     group-hover:opacity-100 group-hover:visible transform group-hover:translate-y-0
                     translate-y-2 transition-all duration-500 ease-out z-50"
            >
              <div class="py-2 rounded-lg bg-white/80 backdrop-blur-sm">
                <NuxtLink
                  v-for="(child, childIndex) in item.children"
                  :key="childIndex"
                  :to="child.path"
                  class="block px-4 py-2.5 text-gray-700 hover:text-red-500 hover:bg-red-50
                         transition-all duration-500 ease-in-out transform hover:translate-x-2"
                >
                  {{ child.label }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-500 ease-in-out
                 transform hover:scale-105 active:scale-95"
          aria-label="Toggle Menu"
        >
          <svg
            class="w-6 h-6 text-gray-700"
            :class="{ 'rotate-90': isMobileMenuOpen }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="isMobileMenuOpen"
        class="lg:hidden"
      >
        <nav class="py-4 space-y-2">
          <div
            v-for="(item, index) in menuItems"
            :key="index"
            class="relative"
          >
            <!-- Single Link -->
            <NuxtLink
              v-if="!item.children"
              :to="item.path"
              class="block px-4 py-2.5 text-gray-700 hover:text-red-500 hover:bg-red-50
                     rounded-lg transition-all duration-500 ease-in-out"
              @click="isMobileMenuOpen = false"
            >
              {{ item.label }}
            </NuxtLink>

            <!-- Dropdown Section -->
            <template v-else>
              <button
                @click="toggleMobileSubmenu(index)"
                class="w-full px-4 py-2.5 text-left text-gray-700 hover:text-red-500
                       hover:bg-red-50 rounded-lg transition-all duration-500 ease-in-out flex justify-between
                       items-center"
              >
                {{ item.label }}
                <svg
                  class="w-4 h-4 transform transition-transform duration-500 ease-in-out"
                  :class="{ 'rotate-180': openMobileMenus[index] }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>

              <div
                v-show="openMobileMenus[index]"
                class="mt-2 ml-4 space-y-2"
              >
                <NuxtLink
                  v-for="(child, childIndex) in item.children"
                  :key="childIndex"
                  :to="child.path"
                  class="block px-4 py-2 text-gray-600 hover:text-red-500 hover:bg-red-50
                         rounded-lg transition-all duration-500 ease-in-out"
                  @click="isMobileMenuOpen = false"
                >
                  {{ child.label }}
                </NuxtLink>
              </div>
            </template>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const openMobileMenus = ref({})

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const toggleMobileSubmenu = (index) => {
  openMobileMenus.value[index] = !openMobileMenus.value[index]
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

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
    ]
  },
  {
    label: 'Academics',
    children: [
      { label: 'Overview', path: '/academics/overview' },
      { label: 'Colleges', path: '/academics/colleges' },
      { label: 'Programs', path: '/academics/programs' },
      { label: 'Academic Calendar', path: '/academics/calendar' },
      { label: 'Library', path: '/academics/library' },
      { label: 'MHTIA Journals', path: '/academics/journals' }
    ]
  },
  { label: 'Research', path: '/research/overview' },
  { label: 'News', path: '/news/overview' },
  { label: 'Student Life', path: '/student_life/overview' }
]
</script>
