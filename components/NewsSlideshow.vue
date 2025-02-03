<template>
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row">
          <div class="w-full md:w-2/3 relative">
            <img
              :src="currentSlide.image"
              :alt="currentSlide.title"
              class="w-full h-[400px] object-cover"
            />
            <div class="absolute bottom-0 left-0 flex space-x-2 p-4">
              <button @click="previousSlide" class="w-10 h-10 bg-white flex items-center justify-center">
                <Icon name="heroicons:chevron-left" class="w-6 h-6" />
              </button>
              <button @click="nextSlide" class="w-10 h-10 bg-white flex items-center justify-center">
                <Icon name="heroicons:chevron-right" class="w-6 h-6" />
              </button>
            </div>
          </div>
          <div class="w-full md:w-1/3 p-8 bg-white">
            <span class="text-sm text-primary font-bold">LATEST NEWS</span>
            <h3 class="text-2xl font-bold mt-4 mb-4">{{ currentSlide.title }}</h3>
            <p class="text-gray-600">{{ currentSlide.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const slides = ref([
    {
      image: '/images/port-night.jpg',
      title: 'SCH on Par with special service for Azamara guests',
      description: 'Working together insights with care is essential for success. We provide a special experience for Azamara that allows for seamless transitions to Southampton...'
    },
    // Add more slides here
  ])
  
  const currentSlideIndex = ref(0)
  
  const currentSlide = computed(() => slides.value[currentSlideIndex.value])
  
  const nextSlide = () => {
    currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.value.length
  }
  
  const previousSlide = () => {
    currentSlideIndex.value = currentSlideIndex.value === 0 
      ? slides.value.length - 1 
      : currentSlideIndex.value - 1
  }
  
  // Auto-advance slides
  let slideInterval
  onMounted(() => {
    slideInterval = setInterval(nextSlide, 5000)
  })
  
  onUnmounted(() => {
    if (slideInterval) clearInterval(slideInterval)
  })
  </script>
  
  