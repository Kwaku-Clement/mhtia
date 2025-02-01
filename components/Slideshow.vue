<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
        <img :src="slide.images" :alt="slide.alt" class="w-full h-64 object-cover">
      </div>
    </div>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

export default defineComponent({
  data() {
    return {
      slides: [
        { images: '/images/slide1.jpg', alt: 'Slide 1' },
        { images: '/images/slide2.jpg', alt: 'Slide 2' },
        { images: '/images/slide3.jpg', alt: 'Slide 3' }
      ]
    };
  },
  mounted() {
    new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }
});
</script>

<style>
/* Add any custom styles here */
</style>