<template>
    <div class="min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <section class="bg-blue-950 text-white py-16 transition-all duration-700 animate-fade-in">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-8 md:mb-0 transform transition-all duration-700 animate-slide-in-left">
              <h1 class="text-4xl md:text-5xl font-bold mb-4">Welcome to the Student Portal</h1>
              <p class="text-xl text-yellow-500 mb-6">Your gateway to academic excellence and campus resources</p>
              <a href="https://portal.healthtraining.gov.gh/login" target="_blank" rel="noopener noreferrer" 
                class="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:rotate-1 animate-pulse-slow">
                Access Student Portal →
              </a>
            </div>
            <div class="md:w-1/2 transform transition-all duration-700 animate-slide-in-right">
              <!-- <img src="/api/placeholder/600/400" alt="Students on campus" class="rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500"/> -->
            </div>
          </div>
        </div>
      </section>
  
      <!-- Features Section -->
      <section class="py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-12 text-red-900 border-b pb-2 transform transition-all duration-500 animate-fade-in">Student Resources</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Course Registration -->
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up">
              <div class="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-center mb-2">Course Registration</h3>
              <p class="text-gray-600 text-center">Register for classes, view your schedule, and manage your academic plan.</p>
            </div>
            
            <!-- Financial Aid -->
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-200">
              <div class="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-center mb-2">Financial Aid</h3>
              <p class="text-gray-600 text-center">Apply for scholarships, check your account status, and make payments.</p>
            </div>
            
            <!-- Campus Life -->
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up animation-delay-400">
              <div class="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-center mb-2">Campus Life</h3>
              <p class="text-gray-600 text-center">Discover student organizations, events, and housing options.</p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Announcements Section -->
      <section class="py-16 bg-gray-100">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12 text-gray-800 transform transition-all duration-500 animate-fade-in">Announcements</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-left">
              <h3 class="text-xl font-semibold mb-2 text-blue-600">Fall Registration Opening</h3>
              <p class="text-gray-500 mb-4">Posted on March 1, 2025</p>
              <p class="text-gray-700">Fall semester registration will open on April 15th. Please check your appointment time in the student portal. Priority registration will be available for seniors and honors students.</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-right">
              <h3 class="text-xl font-semibold mb-2 text-blue-600">New Computer Science Lab</h3>
              <p class="text-gray-500 mb-4">Posted on February 25, 2025</p>
              <p class="text-gray-700">We're excited to announce the opening of our new state-of-the-art computer science lab in the Thompson Building. The lab features 50 high-performance workstations and will be available 24/7 with student ID.</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-left animation-delay-200">
              <h3 class="text-xl font-semibold mb-2 text-blue-600">Library Hours Extended</h3>
              <p class="text-gray-500 mb-4">Posted on February 20, 2025</p>
              <p class="text-gray-700">Starting March 1st, the main library will extend its hours to remain open until 2 AM Sunday through Thursday to better accommodate student study needs.</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-in-right animation-delay-200">
              <h3 class="text-xl font-semibold mb-2 text-blue-600">Summer Research Opportunities</h3>
              <p class="text-gray-500 mb-4">Posted on February 15, 2025</p>
              <p class="text-gray-700">Applications for summer research positions are now open. Faculty members are seeking student researchers in biology, chemistry, psychology, and computer science.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  // Add custom animation classes
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideInLeft {
      from { opacity: 0; transform: translateX(-50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(50px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes pulseSlow {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    
    .animate-fade-in {
      animation: fadeIn 1s ease-out forwards;
    }
    
    .animate-slide-in-left {
      animation: slideInLeft 1s ease-out forwards;
    }
    
    .animate-slide-in-right {
      animation: slideInRight 1s ease-out forwards;
    }
    
    .animate-fade-in-up {
      animation: fadeInUp 0.8s ease-out forwards;
    }
    
    .animate-pulse-slow {
      animation: pulseSlow 2s infinite;
    }
    
    .animation-delay-200 {
      animation-delay: 0.2s;
    }
    
    .animation-delay-400 {
      animation-delay: 0.4s;
    }
  `;
  document.head.appendChild(style);
  
  // Add intersection observer to trigger animations when elements enter viewport
  document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-in-left, .animate-slide-in-right, .animate-fade-in-up');
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  });
  </script>