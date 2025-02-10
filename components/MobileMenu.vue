<template>
  <div>
    <!-- Overlay with improved animation -->
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/30 z-40"
        @click="$emit('close')"
      ></div>
    </Transition>

    <!-- Sliding Menu with enhanced interactions -->
    <Transition
      name="slide-left"
      @enter="onEnter"
      @leave="onLeave"
    >
      <nav
        v-if="isOpen"
        ref="mobileMenuRef"
        class="fixed top-0 left-0 bottom-0 w-64 bg-white shadow-2xl z-50 overflow-y-auto transform will-change-transform"
      >
        <div class="container px-4 py-6">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-semibold text-gray-800">Menu</h2>
            <button
              @click="$emit('close')"
              class="text-gray-600 hover:text-gray-900 transition-colors active:scale-90"
            >
              <Icon name="heroicons:x-mark" class="w-6 h-6" />
            </button>
          </div>

          <ul class="space-y-2">
            <li
              v-for="(item, index) in menuItems"
              :key="item.label"
              class="relative"
            >
              <div
                class="group flex justify-between items-center py-3 px-2 rounded-lg transition-colors hover:bg-gray-100 active:bg-gray-200"
                @click="toggleSubmenu(index)"
              >
                <NuxtLink
                  :to="item.path || '#'"
                  @click="handleItemClick(item)"
                  class="block text-gray-700 group-hover:text-primary transition-colors flex-grow"
                >
                  {{ item.label }}
                </NuxtLink>

                <!-- Submenu Arrow with spring-like animation -->
                <button
                  v-if="item.children"
                  class="ml-2 focus:outline-none transform transition-transform active:scale-75"
                >
                  <svg
                    :class="[
                      'w-5 h-5 transition-all duration-300',
                      openSubmenus[index] ? 'rotate-180 text-primary' : 'rotate-0 text-gray-500'
                    ]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </div>

              <!-- Submenu with improved transition -->
              <Transition
                name="submenu"
                @enter="onSubmenuEnter"
                @leave="onSubmenuLeave"
              >
                <ul
                  v-if="item.children && openSubmenus[index]"
                  ref="submenuRefs"
                  class="pl-4 py-2 space-y-2 bg-gray-50 rounded-lg"
                >
                  <li
                    v-for="child in item.children"
                    :key="child.label"
                    class="transform transition-all duration-300 ease-out"
                  >
                    <NuxtLink
                      :to="child.path"
                      @click="$emit('close')"
                      class="block py-2 px-3 text-gray-600 hover:text-primary hover:bg-white/50 rounded-md transition-colors active:scale-95"
                    >
                      {{ child.label }}
                    </NuxtLink>
                  </li>
                </ul>
              </Transition>
            </li>
          </ul>
        </div>
      </nav>
    </Transition>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  menuItems: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['close'])

// References for animations
const mobileMenuRef = ref(null)
const submenuRefs = ref([])

// Initialize submenu state
const openSubmenus = ref(props.menuItems.map(() => false))

// Toggle submenu for a specific menu item
const toggleSubmenu = (index) => {
  if (props.menuItems[index].children) {
    openSubmenus.value = openSubmenus.value.map((open, i) =>
      i === index ? !open : false
    )
  }
}

// Handle item click - close other submenus if needed
const handleItemClick = (item) => {
  // If item has no children or has a path, close the menu
  if (!item.children || item.path) {
    emit('close')
  }
}

// Entrance animation
const onEnter = (el, done) => {
  el.style.transform = 'translateX(-100%)'
  el.style.opacity = '0'
  nextTick(() => {
    el.style.transition = 'transform 0.4s ease-out, opacity 0.4s ease-out'
    el.style.transform = 'translateX(0%)'
    el.style.opacity = '1'
    el.addEventListener('transitionend', done)
  })
}

// Exit animation
const onLeave = (el, done) => {
  el.style.transform = 'translateX(0%)'
  el.style.opacity = '1'
  nextTick(() => {
    el.style.transition = 'transform 0.3s ease-in, opacity 0.3s ease-in'
    el.style.transform = 'translateX(-100%)'
    el.style.opacity = '0'
    el.addEventListener('transitionend', done)
  })
}

// Submenu enter animation
const onSubmenuEnter = (el, done) => {
  el.style.height = '0'
  el.style.opacity = '0'
  el.style.paddingTop = '0'
  el.style.paddingBottom = '0'
  nextTick(() => {
    el.style.transition = 'height 0.3s ease-out, opacity 0.3s ease-out, padding 0.3s ease-out'
    el.style.height = 'auto'
    el.style.opacity = '1'
    el.style.paddingTop = '0.5rem'
    el.style.paddingBottom = '0.5rem'
    el.addEventListener('transitionend', done)
  })
}

// Submenu leave animation
const onSubmenuLeave = (el, done) => {
  el.style.height = 'auto'
  el.style.opacity = '1'
  el.style.paddingTop = '0.5rem'
  el.style.paddingBottom = '0.5rem'
  nextTick(() => {
    el.style.transition = 'height 0.3s ease-in, opacity 0.3s ease-in, padding 0.3s ease-in'
    el.style.height = '0'
    el.style.opacity = '0'
    el.style.paddingTop = '0'
    el.style.paddingBottom = '0'
    el.addEventListener('transitionend', done)
  })
}
</script>

<style scoped>
/* Fade overlay transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Prevent overscroll/bounce effect */
body {
  overscroll-behavior: contain;
}
</style>
