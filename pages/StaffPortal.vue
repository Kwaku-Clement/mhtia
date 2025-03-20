<template>
    <div class="min-h-screen bg-gray-50">
      <!-- Hero Section -->
      <section class="bg-blue-950 text-white py-16 animate-fade-in">
        <div class="container mx-auto px-4">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-8 md:mb-0 animate-slide-in-left">
              <h1 class="text-4xl md:text-5xl font-bold mb-4">Staff Portal</h1>
              <p class="text-xl text-yellow-500 mb-6">Access faculty resources, administrative tools, and campus services</p>
              <a href="https://portal.healthtraining.gov.gh/login" target="_blank" rel="noopener noreferrer" 
                class="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:rotate-1">
                Access Staff Portal →
              </a>
            </div>
            <div class="md:w-1/2 animate-slide-in-right">
              <!-- <img src="/api/placeholder/600/400" alt="College faculty" class="rounded-lg shadow-xl"/> -->
            </div>
          </div>
        </div>
      </section>
  
      <!-- Faculty Resources Section -->
      <section class="py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-12 text-red-900 border-b pb-2 animate-fade-in">Faculty Resources</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Course Management -->
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-pop-in" style="animation-delay: 0.1s">
              <div class="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 animate-bounce-subtle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-center mb-2">Course Management</h3>
              <p class="text-gray-600 text-center">Create syllabi, manage grades, and organize course materials.</p>
            </div>
            
            <!-- Research Support -->
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-pop-in" style="animation-delay: 0.3s">
              <div class="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 animate-bounce-subtle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-center mb-2">Research Support</h3>
              <p class="text-gray-600 text-center">Access grant opportunities, laboratory resources, and publication services.</p>
            </div>
            
            <!-- Administrative Tools -->
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 animate-pop-in" style="animation-delay: 0.5s">
              <div class="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 animate-bounce-subtle">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-center mb-2">Administrative Tools</h3>
              <p class="text-gray-600 text-center">Manage department budgets, submit requests, and access HR resources.</p>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Faculty Directory -->
      <section class="py-16 bg-gray-100">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12 text-gray-800 animate-fade-in">Faculty Directory</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Faculty Member 1 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 animate-rise-up" style="animation-delay: 0.2s">
              <!-- <img src="/api/placeholder/400/300" alt="Dr. Sarah Johnson" class="w-full h-48 object-cover"/> -->
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-1">Dr. Sarah Johnson</h3>
                <p class="text-blue-600 mb-3">Professor of Biology</p>
                <p class="text-gray-600 mb-4">Ph.D. in Molecular Biology, Harvard University</p>
                <div class="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>sjohnson@examplecollege.edu</span>
                </div>
              </div>
            </div>
            
            <!-- Faculty Member 2 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 animate-rise-up" style="animation-delay: 0.4s">
              <!-- <img src="/api/placeholder/400/300" alt="Dr. Michael Patel" class="w-full h-48 object-cover"/> -->
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-1">Dr. Michael Patel</h3>
                <p class="text-blue-600 mb-3">Associate Professor of Computer Science</p>
                <p class="text-gray-600 mb-4">Ph.D. in Computer Science, MIT</p>
                <div class="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>mpatel@examplecollege.edu</span>
                </div>
              </div>
            </div>
            
            <!-- Faculty Member 3 -->
            <div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 animate-rise-up" style="animation-delay: 0.6s">
              <!-- <img src="/api/placeholder/400/300" alt="Dr. Emily Rodriguez" class="w-full h-48 object-cover"/> -->
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-1">Dr. Emily Rodriguez</h3>
                <p class="text-blue-600 mb-3">Professor of Psychology</p>
                <p class="text-gray-600 mb-4">Ph.D. in Clinical Psychology, Stanford University</p>
                <div class="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>erodriguez@examplecollege.edu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  // Any additional script logic for the staff portal page would go here
  </script>
  
  <style>
  /* Custom Animation Definitions */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideInLeft {
    from { transform: translateX(-50px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideInRight {
    from { transform: translateX(50px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes popIn {
    0% { transform: scale(0.6); opacity: 0; }
    70% { transform: scale(1.05); }
    100% { transform: scale(1); opacity: 1; }
  }
  
  @keyframes riseUp {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes bounceSlight {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
  
  /* Animation Classes */
  .animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
  }
  
  .animate-slide-in-left {
    animation: slideInLeft 1s ease-out forwards;
  }
  
  .animate-slide-in-right {
    animation: slideInRight 1s ease-out forwards;
  }
  
  .animate-pop-in {
    animation: popIn 0.8s ease-out forwards;
  }
  
  .animate-rise-up {
    animation: riseUp 0.8s ease-out forwards;
  }
  
  .animate-bounce-subtle {
    animation: bounceSlight 2s ease-in-out infinite;
  }
  </style>