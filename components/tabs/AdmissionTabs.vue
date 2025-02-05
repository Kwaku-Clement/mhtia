<!-- components/AdmissionTabs.vue -->
<template>
  <div 
    class="bg-neutral-200 shadow-lg transition-all duration-300 py-3"
    :class="{ 
      'shadow-xl': isScrolled,
      'py-3': !isScrolled,
      'py-2': isScrolled
    }"
  >
    <nav class="container mx-auto flex justify-center items-center space-x-8">
      <NuxtLink
        v-for="tab in tabs"
        :key="tab.path"
        :to="tab.path"
        class="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300"
        :class="[
          $route.path === tab.path
            ? 'bg-blue-600 text-white'
            : 'bg-neutral-200 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
        ]"
      >
        {{ tab.name }}
      </NuxtLink>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useAdmissionTabs } from '~/composables/useAdmissionTabs'

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

const { tabs } = useAdmissionTabs()
</script>