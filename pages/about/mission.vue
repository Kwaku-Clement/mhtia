<template>
  <div>
    <AboutTabs />
    <div class="bg-white rounded-lg shadow p-6">
      <h1 class="text-3xl font-bold text-gray-900 mb-6">Our Mission</h1>
      <p class="text-xl text-gray-600 mb-8">
        To empower businesses through innovative solutions while maintaining the highest
        standards of sustainability and ethical practices.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="border border-gray-200 rounded-lg p-6">
          <h3 class="text-lg font-semibold mb-3">Innovation</h3>
          <p class="text-gray-600">Pushing boundaries and creating possibilities</p>
        </div>
        <div class="border border-gray-200 rounded-lg p-6">
          <h3 class="text-lg font-semibold mb-3">Sustainability</h3>
          <p class="text-gray-600">Committed to environmental responsibility</p>
        </div>
        <div class="border border-gray-200 rounded-lg p-6">
          <h3 class="text-lg font-semibold mb-3">Excellence</h3>
          <p class="text-gray-600">Delivering outstanding results consistently</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AboutTabs from '~/components/tabs/AboutTabs.vue'
</script>