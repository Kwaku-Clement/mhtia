// components/TheFooter.vue
<template>
  <footer class="bg-blue-600 text-white">
    <div class="container mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div>
          <img src="/images/logo.png" alt="SCH Logo" class="w-32 mb-6" />
          <p class="text-sm text-white/80">
            Your trusted partner in innovative solutions and services.
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
            <p>123 Business Street</p>
            <p>City, Country</p>
            <p>Phone: +1 234 567 890</p>
            <p>Email: info@example.com</p>
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
              class="bg-white text-blue-600 px-6 py-2 rounded hover:bg-white/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <!-- Social Links -->
      <div class="mt-12 flex justify-center space-x-6">
        <a 
          v-for="social in socialLinks" 
          :key="social.name"
          :href="social.url"
          :aria-label="social.name"
          class="text-white/80 hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <component :is="social.icon" class="w-6 h-6" />
        </a>
      </div>
      
      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-white/20">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p class="text-white/60 text-sm">
            &copy; {{ new Date().getFullYear() }} Your Company. All rights reserved.
          </p>
          <div class="flex space-x-6">
            <NuxtLink 
              v-for="link in legalLinks" 
              :key="link.path"
              :to="link.path"
              class="text-white/60 hover:text-white text-sm transition-colors"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const newsletterEmail = ref('')

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'News', path: '/news' },
  { label: 'Contact', path: '/contact' }
]

const socialLinks = [
  {
    name: 'Facebook',
    url: '#',
    icon: defineComponent({
      render: () => h('svg', { 
        xmlns: 'http://www.w3.org/2000/svg', 
        fill: 'currentColor',
        viewBox: '0 0 24 24'
      }, [
        h('path', { 
          d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'
        })
      ])
    })
  },
  {
    name: 'Twitter',
    url: '#',
    icon: defineComponent({
      render: () => h('svg', { 
        xmlns: 'http://www.w3.org/2000/svg', 
        fill: 'currentColor',
        viewBox: '0 0 24 24'
      }, [
        h('path', { 
          d: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'
        })
      ])
    })
  },
  {
    name: 'LinkedIn',
    url: '#',
    icon: defineComponent({
      render: () => h('svg', { 
        xmlns: 'http://www.w3.org/2000/svg', 
        fill: 'currentColor',
        viewBox: '0 0 24 24'
      }, [
        h('path', { 
          d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
        })
      ])
    })
  }
]

const legalLinks = [
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms of Service', path: '/terms' },
  { label: 'Cookie Policy', path: '/cookies' }
]

const subscribeNewsletter = async () => {
  if (!newsletterEmail.value) return
  
  try {
    // Implement newsletter subscription logic here
    console.log('Subscribing email:', newsletterEmail.value)
    alert('Thank you for subscribing!')
    newsletterEmail.value = ''
  } catch (error) {
    console.error('Newsletter subscription failed:', error)
    alert('Subscription failed. Please try again.')
  }
}
</script>