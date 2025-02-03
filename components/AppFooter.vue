<template>
    <footer class="bg-primary text-white">
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div>
            <img src="/images/logo.png" alt="SCH Logo" class="w-32 mb-6" />
            <p class="text-sm text-white/80">
              Southampton's leading port terminal operators providing comprehensive cargo handling services.
            </p>
          </div>
          
          <!-- Quick Links -->
          <div>
            <h4 class="text-lg font-bold mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li v-for="link in quickLinks" :key="link.path">
                <NuxtLink :to="link.path" 
                   class="text-white/80 hover:text-white transition-colors">
                  {{ link.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          
          <!-- Contact Info -->
          <div>
            <h4 class="text-lg font-bold mb-4">Contact Us</h4>
            <address class="not-italic text-white/80 space-y-2">
              <p>123 Port Street</p>
              <p>Southampton, UK</p>
              <p>Phone: +123 456 0789</p>
              <p>Email: info@sch.com</p>
            </address>
          </div>
          
          <!-- Newsletter -->
          <div>
            <h4 class="text-lg font-bold mb-4">Newsletter</h4>
            <form @submit.prevent="subscribeNewsletter" class="space-y-4">
              <input
                type="email"
                v-model="newsletterEmail"
                placeholder="Your email address"
                class="w-full px-4 py-2 rounded bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button
                type="submit"
                class="bg-white text-primary px-6 py-2 rounded hover:bg-white/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <!-- Bottom Bar -->
        <div class="mt-12 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
          <p>&copy; {{ new Date().getFullYear() }} SCH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/#services' },
    { label: 'News', path: '/#news' },
    { label: 'Careers', path: '/#careers' },
    { label: 'Contact', path: '/contact' }
  ]
  
  const newsletterEmail = ref('')
  
  const subscribeNewsletter = async () => {
    // Implement newsletter subscription logic
    alert('Thank you for subscribing!')
    newsletterEmail.value = ''
  }
  </script>
  
  