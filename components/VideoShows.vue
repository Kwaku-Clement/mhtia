<template>
  <section class="relative py-16 bg-gray-50 overflow-hidden mb-16">
    <!-- Full-width Video Background with Border -->
    <div class="absolute inset-0 w-full h-full p-4">
      <div class="relative w-full h-full rounded-2xl border-4 border-white shadow-2xl overflow-hidden">
        <video
          class="w-full h-[110%] object-cover"
          autoplay
          loop
          muted
          playsinline
        >
          <source src="/videos/RKellyftRihanna-GodMercy.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <!-- Overlay Gradient -->
        <div 
          class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent
                 opacity-60"
        ></div>
      </div>
    </div>

    <!-- Content -->
    <div class="container relative mx-auto px-4 z-10">
      <div 
        class="max-w-2xl mx-auto text-center text-white"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 1000 } }"
      >
        <h2 class="text-4xl font-bold mb-4 drop-shadow-lg">Join Our College</h2>
        <p class="text-xl mb-8 drop-shadow-md">
          Experience the future of port operations with cutting-edge technology and a 
          dynamic work environment.
        </p>
        <a 
          href="#" 
          class="inline-block bg-primary text-white px-8 py-3 rounded-full 
                 hover:bg-primary-dark transition-colors duration-300 shadow-lg"
        >
          Check our Admission requirements
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional script needed for basic functionality
</script>

<style scoped>
/* Optional: Add smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>