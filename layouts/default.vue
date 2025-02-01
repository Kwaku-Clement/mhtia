<template>
  <div :class="themeStore.theme === 'dark' ? 'dark' : ''" class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex">
    <Sidebar />
    <div class="flex-1 flex flex-col">
      <Navbar />
      <main class="flex-1">
        <slot />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Sidebar from '~/components/Sidebar.vue'
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
import { useThemeStore } from '~/stores/theme'

export default defineComponent({
  components: {
    Sidebar,
    Navbar,
    Footer
  },
  setup() {
    const themeStore = useThemeStore()
    return {
      themeStore
    }
  }
})
</script>

<style>
/* Add any custom styles here */
</style>
