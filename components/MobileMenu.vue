<template>
    <Transition name="slide-down">
      <nav v-if="isOpen" class="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-50">
        <div class="container mx-auto px-4 py-4">
          <ul class="space-y-4">
            <li v-for="item in menuItems" :key="item.path">
              <NuxtLink :to="item.path" @click="$emit('close')"
                        class="block text-gray-600 hover:text-primary transition-colors">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </Transition>
  </template>
  
  <script setup>
  defineProps({
    isOpen: Boolean,
    menuItems: Array
  })
  
  defineEmits(['close'])
  </script>
  
  <style scoped>
  .slide-down-enter-active,
  .slide-down-leave-active {
    transition: transform 0.3s ease-out;
  }
  
  .slide-down-enter-from,
  .slide-down-leave-to {
    transform: translateY(-100%);
  }
  </style>
  
  