<template>
    <header class="bg-white shadow-md">
      <div class="container bg-blue-600 mx-auto px-4 py-4 flex justify-between items-center">
        
        <nav class="hidden md:flex space-x-6">
          <NuxtLink v-for="item in menuItems" :key="item.path" :to="item.path" 
                    class="text-white hover:text-red-300 transition-colors">
            {{ item.label }}
          </NuxtLink>
        </nav>
        
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="md:hidden">
          <Icon v-if="!isMobileMenuOpen" name="heroicons:bars-3" class="w-6 h-6" />
          <Icon v-else name="heroicons:x-mark" class="w-6 h-6" />
        </button>
      </div>
      
      <MobileMenu :is-open="isMobileMenuOpen" :menu-items="menuItems" @close="isMobileMenuOpen = false" />
    </header>
  </template>
  
  <script setup>
  const isMobileMenuOpen = ref(false)
  
  const menuItems = [
    { label: 'Student Portal', path: '/' },
    { label: 'Staff Portal', path: '/#services' },
    { label: 'Alumni', path: '/#news' },
    { label: 'Careers', path: '/#careers' },
  ]
  </script>
  
  