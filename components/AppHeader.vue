<template>
    <header class="bg-white shadow-md">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="flex items-center">
          <img src="/images/logo.png" alt="SCH Logo" class="h-12 w-auto" />
        </NuxtLink>
        
        <nav class="hidden md:flex space-x-6">
          <NuxtLink v-for="item in menuItems" :key="item.path" :to="item.path" 
                    class="text-gray-600 hover:text-primary transition-colors">
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
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/#services' },
    { label: 'News', path: '/#news' },
    { label: 'Careers', path: '/#careers' },
    { label: 'Contact', path: '/contact' }
  ]
  </script>
  
  