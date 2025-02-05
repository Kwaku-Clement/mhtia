<script setup lang="ts">
import NavBar from '~/components/NavBar.vue';

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <NavBar />
    <main class="flex-grow">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

