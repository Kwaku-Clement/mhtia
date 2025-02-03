<template>
    <aside class="w-64 bg-[#1E2B7B] text-white h-screen fixed left-0 top-0">
      <div class="p-6">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web1.jpg-QHlYr0SEcMc4q3nTZjICWpAaane1iX.jpeg" alt="SCH Logo" class="w-32 mb-8" />
        
        <nav class="space-y-4">
          <a v-for="item in menuItems" 
             :key="item.path"
             :href="item.path"
             class="flex items-center space-x-3 p-2 rounded hover:bg-white/10 transition-colors">
            <component :is="item.icon" class="w-5 h-5" />
            <span>{{ item.label }}</span>
          </a>
        </nav>
      </div>
    </aside>
  </template>
  
  <script setup>
  const menuItems = [
    { label: 'Home', path: '/', icon: 'HomeIcon' },
    { label: 'Services', path: '#services', icon: 'PackageIcon' },
    { label: 'News', path: '#news', icon: 'NewspaperIcon' },
    { label: 'Careers', path: '#careers', icon: 'BriefcaseIcon' },
    { label: 'Contact', path: '/contact', icon: 'MailIcon' }
  ]
  </script>
  
  