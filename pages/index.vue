<template>
  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <div class="px-4 py-6 sm:px-0">
      <Slideshow />
      <div class="border-4 border-dashed border-gray-200 dark:border-gray-700 rounded-lg h-96 mt-6">
        <!-- Hero Section -->
        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">Methodist Health Training Institute, MHTI</h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">Welcome to MHTI</p>
          </div>
          <div class="border-t border-gray-200 dark:border-gray-700">
            <dl>
              <div class="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">About Us</dt>
                <dd class="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
                  The Methodist Health Training Institute (MHTI) is a renowned institution dedicated to providing quality education in the field of health sciences. Our mission is to train competent and compassionate healthcare professionals who will make a significant impact on the healthcare industry.
                </dd>
              </div>
              <div class="bg-white dark:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Courses</dt>
                <dd class="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
                  We offer a wide range of courses in health sciences, including nursing, pharmacy, medical laboratory technology, and more.
                </dd>
              </div>
              <div class="bg-gray-50 dark:bg-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Contact Us</dt>
                <dd class="mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2">
                  For more information, please contact us at info@mhti.edu.gh or visit our campus.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Slideshow from '~/components/Slideshow.vue'

export default defineComponent({
  components: {
    Slideshow
  }
})
</script>

<style>
/* Add any custom styles here */
</style>
