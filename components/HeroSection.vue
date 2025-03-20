<!-- components/HeroSlideshow.vue -->
<template>
  <section class="relative h-[500px] overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-primary to-transparent z-10"></div>
    
    <TransitionGroup 
      name="slide" 
      tag="div"
      class="relative h-full"
    >
      <div 
        v-for="(slide, index) in slides" 
        :key="slide.id"
        v-show="currentSlide === index"
        class="absolute inset-0"
      >
        <img
          :src="slide.image"
          :alt="slide.alt"
          class="absolute inset-0 w-full h-full object-cover transform transition-transform duration-1000"
          :class="{'scale-110': currentSlide === index}"
        />
        
        <div class="relative z-20 container mx-auto px-4 h-full flex items-end justify-center pb-16">
          <div 
            class="w-full max-w-xl bg-black/50 p-8 rounded-lg backdrop-blur-sm shadow-lg text-center transform transition-all duration-700"
            :class="{'translate-y-0 opacity-100': currentSlide === index, 'translate-y-10 opacity-0': currentSlide !== index}"
          >
            <h2 class="text-white text-3xl font-bold mb-4">{{ slide.title }}</h2>
            <p class="text-white text-xl mb-6">{{ slide.description }}</p>
            <button 
              class="text-white bg-primary px-6 py-3 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              @click="$emit('action', slide.action)"
            >
              {{ slide.buttonText }}
              <Icon name="heroicons:arrow-right" class="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </TransitionGroup>

    <!-- Navigation Dots -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
      <button
        v-for="(_, index) in slides"
        :key="index"
        @click="currentSlide = index"
        class="w-3 h-3 rounded-full transition-all duration-300"
        :class="currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'"
      ></button>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  {
    id: 1,
    image: '/images/forklift.jpg',
    alt: 'Port at night',
    title: 'Port Operations Excellence',
    description: "Southampton's cargo handling services provide a comprehensive range of port terminal operations.",
    buttonText: 'Learn More',
    action: 'learn-more'
  },
  {
    id: 2,
    image: '/images/campus.jpg',
    alt: 'Modern campus',
    title: 'State-of-the-art Facilities',
    description: 'Experience learning in our cutting-edge facilities and modern campus.',
    buttonText: 'Explore Campus',
    action: 'explore-campus'
  },
  {
    id: 3,
    image: '/images/students.jpg',
    alt: 'Students collaborating',
    title: 'Collaborative Learning',
    description: 'Join a vibrant community of learners and innovators.',
    buttonText: 'Join Us',
    action: 'apply-now'
  }, 
  {
    id: 2,
    image: '/images/campus.jpg',
    alt: 'Modern campus',
    title: 'State-of-the-art Facilities',
    description: 'Experience learning in our cutting-edge facilities and modern campus.',
    buttonText: 'Explore Campus',
    action: 'explore-campus'
  },
]

const currentSlide = ref(0)
const autoplayInterval = ref(null)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

onMounted(() => {
  autoplayInterval.value = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value)
  }
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.75s ease-in-out;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
</style>