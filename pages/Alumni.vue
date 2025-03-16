<template>
    <div class="bg-gray-50 min-h-screen">
      <!-- Hero Section -->
      <section class="bg-blue-600 text-white py-16 animate-fade-in">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl md:text-5xl font-bold mb-4 animate-slide-down">Alumni Network</h1>
          <p class="text-xl md:text-2xl max-w-3xl animate-slide-up">
            Join our global community of graduates making a difference in the world.
          </p>
        </div>
      </section>
  
      <!-- Main Content -->
      <section class="container mx-auto px-4 py-12">
        <!-- Alumni Spotlight -->
        <div class="mb-16 animate-fade-in">
          <h2 class="text-3xl font-bold mb-8 text-blue-800 border-b pb-2">Alumni Spotlight</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 animate-slide-in-left">
              <div class="h-64 bg-gray-300"></div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">Dr. Sarah Johnson</h3>
                <p class="text-gray-600 mb-3">Class of 2015 - Computer Science</p>
                <p class="mb-4">
                  Leading AI research at Google, Dr. Johnson has pioneered breakthroughs in machine learning algorithms that have transformed healthcare diagnostics.
                </p>
                <div class="flex space-x-2">
                  <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Tech Leader</span>
                  <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Innovator</span>
                </div>
              </div>
            </div>
            
            <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 animate-slide-in-left" style="animation-delay: 0.2s">
              <div class="h-64 bg-gray-300"></div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">Michael Chen</h3>
                <p class="text-gray-600 mb-3">Class of 2010 - Business Administration</p>
                <p class="mb-4">
                  Founder of GreenTech Solutions, Michael has built a sustainable energy company valued at over $500 million that operates in 12 countries.
                </p>
                <div class="flex space-x-2">
                  <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Entrepreneur</span>
                  <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Sustainability</span>
                </div>
              </div>
            </div>
            
            <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 animate-slide-in-left" style="animation-delay: 0.4s">
              <div class="h-64 bg-gray-300"></div>
              <div class="p-6">
                <h3 class="text-xl font-bold mb-2">Dr. Maya Patel</h3>
                <p class="text-gray-600 mb-3">Class of 2008 - Medicine</p>
                <p class="mb-4">
                  Award-winning cardiologist and humanitarian who has established free clinics in underserved communities and pioneered minimally invasive surgical techniques.
                </p>
                <div class="flex space-x-2">
                  <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Healthcare</span>
                  <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Humanitarian</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Alumni Benefits -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold mb-8 text-blue-800 border-b pb-2 animate-fade-in">Alumni Benefits</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up">
              <h3 class="text-xl font-bold mb-3 text-blue-700">Networking Opportunities</h3>
              <p>
                Access exclusive alumni events, both virtual and in-person, to connect with fellow graduates across industries. Our annual Alumni Gala brings together distinguished graduates from around the world.
              </p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style="animation-delay: 0.2s">
              <h3 class="text-xl font-bold mb-3 text-blue-700">Career Services</h3>
              <p>
                Lifetime access to our career counseling services, job board, and professional development workshops. Alumni can also access our exclusive mentorship program to guide current students.
              </p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style="animation-delay: 0.4s">
              <h3 class="text-xl font-bold mb-3 text-blue-700">Campus Resources</h3>
              <p>
                Continue using library resources, research databases, and campus facilities. Special discounted rates for continuing education programs and professional certificates.
              </p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style="animation-delay: 0.6s">
              <h3 class="text-xl font-bold mb-3 text-blue-700">Alumni Magazine</h3>
              <p>
                Receive our quarterly alumni magazine featuring success stories, campus updates, and opportunities to stay involved with your alma mater through donations and volunteer opportunities.
              </p>
            </div>
          </div>
        </div>
        
        <!-- Upcoming Events -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold mb-8 text-blue-800 border-b pb-2 animate-fade-in">Upcoming Alumni Events</h2>
          <div class="space-y-6">
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-in-right">
              <div class="flex flex-col md:flex-row justify-between">
                <div class="mb-4 md:mb-0">
                  <h3 class="text-xl font-bold mb-2">Annual Alumni Homecoming Weekend</h3>
                  <p class="text-gray-700 mb-3">
                    Join us for a weekend of celebration, reconnection, and college spirit. Activities include campus tours, faculty lectures, and the homecoming football game.
                  </p>
                  <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">Learn more &rarr;</a>
                </div>
                <div class="text-right">
                  <p class="text-gray-600 font-medium">October 15-17, 2025</p>
                  <p class="text-blue-700 font-bold mt-2">Main Campus</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-in-right" style="animation-delay: 0.2s">
              <div class="flex flex-col md:flex-row justify-between">
                <div class="mb-4 md:mb-0">
                  <h3 class="text-xl font-bold mb-2">Tech Industry Networking Night</h3>
                  <p class="text-gray-700 mb-3">
                    Connect with alumni working in technology fields. Perfect opportunity for recent graduates and alumni looking to transition into tech.
                  </p>
                  <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">Learn more &rarr;</a>
                </div>
                <div class="text-right">
                  <p class="text-gray-600 font-medium">April 22, 2025</p>
                  <p class="text-blue-700 font-bold mt-2">Virtual Event</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-in-right" style="animation-delay: 0.4s">
              <div class="flex flex-col md:flex-row justify-between">
                <div class="mb-4 md:mb-0">
                  <h3 class="text-xl font-bold mb-2">Class of 2015 Ten-Year Reunion</h3>
                  <p class="text-gray-700 mb-3">
                    Celebrate a decade since graduation with your classmates. The weekend includes a formal dinner, campus tours, and family-friendly activities.
                  </p>
                  <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">Learn more &rarr;</a>
                </div>
                <div class="text-right">
                  <p class="text-gray-600 font-medium">June 5-7, 2025</p>
                  <p class="text-blue-700 font-bold mt-2">Alumni Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Call to Action -->
        <div class="bg-blue-600 text-white p-8 rounded-lg shadow-lg text-center animate-pulse-subtle">
          <h2 class="text-3xl font-bold mb-4">Update Your Alumni Profile</h2>
          <p class="text-xl mb-6 max-w-2xl mx-auto">
            Keep your contact information up to date to stay connected with your alma mater and fellow alumni.
          </p>
          <button class="bg-white text-blue-600 px-8 py-3 rounded-full font-bold transition-all duration-300 hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 active:scale-95 animate-bounce-subtle">
            Access Alumni Portal
          </button>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  // You can add page-specific logic here if needed
  </script>
  
  <style>
  /* Custom animations */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideDown {
    from { transform: translateY(-30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes slideUp {
    from { transform: translateY(30px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes slideInLeft {
    from { transform: translateX(-50px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes slideInRight {
    from { transform: translateX(50px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  
  @keyframes fadeInUp {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  
  @keyframes pulseSubtle {
    0% { transform: scale(1); }
    50% { transform: scale(1.02); }
    100% { transform: scale(1); }
  }
  
  @keyframes bounceSubtle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
  
  .animate-fade-in {
    animation: fadeIn 1s ease forwards;
  }
  
  .animate-slide-down {
    animation: slideDown 1s ease forwards;
  }
  
  .animate-slide-up {
    animation: slideUp 1s ease forwards;
  }
  
  .animate-slide-in-left {
    animation: slideInLeft 0.8s ease forwards;
  }
  
  .animate-slide-in-right {
    animation: slideInRight 0.8s ease forwards;
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease forwards;
  }
  
  .animate-pulse-subtle {
    animation: pulseSubtle 3s infinite;
  }
  
  .animate-bounce-subtle {
    animation: bounceSubtle 2s infinite;
  }
  </style>