<template>
  <div>
    <AboutTabs />
    <div class="bg-white rounded-lg shadow p-6">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">Company Overview</h1>
      <p class="text-gray-600 leading-relaxed mb-4">
        We are a leading innovator committed to delivering exceptional value.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div class="bg-blue-50 p-6 rounded-lg">
          <h3 class="text-xl font-semibold text-blue-900 mb-2">Our Impact</h3>
          <p class="text-blue-800">Serving over 1000+ customers globally</p>
        </div>
        <div class="bg-green-50 p-6 rounded-lg">
          <h3 class="text-xl font-semibold text-green-900 mb-2">Growth</h3>
          <p class="text-green-800">200% year-over-year expansion</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import AboutTabs from '~/components/tabs/AboutTabs.vue'
</script>