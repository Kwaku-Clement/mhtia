<template>
  <div class="container mx-auto px-4 py-8">
    <AboutTabs />
    <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div class="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
        <h1 class="text-4xl font-bold text-white mb-4 animate-fade-in">
          College Milestones
        </h1>
      </div>
      <div class="p-8">
        <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:bg-gray-200">
          <div
            v-for="(milestone, index) in milestones"
            :key="index"
            class="milestone-item relative flex items-center space-x-6 animate-slide-in"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div
              class="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold shadow-md"
            >
              {{ milestone.year }}
            </div>
            <div class="flex-1 p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                {{ milestone.title }}
              </h3>
                <ul class="list-disc list-inside text-gray-600 space-y-2">
                <li v-if="milestone.description1">{{ milestone.description1 }}</li>
                <li v-if="milestone.description2">{{ milestone.description2 }}</li>
                <li v-if="milestone.description3">{{ milestone.description3 }}</li>
                </ul>
              <div
                v-if="milestone.impact"
                class="mt-4 p-3 bg-blue-50 rounded-lg"
              >
                <h4 class="font-medium text-blue-800">Impact</h4>
                <p class="text-blue-600">{{ milestone.impact }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AboutTabs from '~/components/tabs/AboutTabs.vue'

const milestones = ref([
  {
    year: '2014',
    title: 'Founded by Nana Kwadwo Attefah, originally named Nursing and Midwifery Training College-Afosu.',
    description1: 'Accredited by the Nursing and Midwifery Council of Ghana (N&MC).',
    description2: 'Started with a two-year Nurse Assistant Clinical (RNAC) programme.',
    description3: 'Introduced Post Basic Midwifery the following year.',
    impact: 'Laid the foundation for quality nursing and midwifery education in the region.'
  },
  {
    year: '2018',
    title: 'Gained accreditation from the Ghana Tertiary Education Council (GTEC).',
    description1: 'Began offering three-year diploma programmes in Registered General Nursing (RGN) and Registered Midwifery (RM).',
    description2: 'Established University affiliation with the University for Development Studies (UDS), Tamale.',
    impact: 'Expanded academic offerings and strengthened institutional credibility through university affiliation.'
  },
  {
    year: '2019',
    title: 'Acquired by the Methodist Church Ghana and renamed Methodist Health Training Institute (MHTI).',
    description1: 'Became a Christian Health Association of Ghana (CHAG) member under the Ministry of Health.',
    impact: 'Enhanced governance and operational support under the Methodist Church Ghana and CHAG.'
  },
  {
    year: '2020',
    title: 'Affiliation transitioned from UDS to Kwame Nkrumah University of Science and Technology (KNUST).',
    description: 'Became a Christian Health Association of Ghana (CHAG) member under the Ministry of Health.',
    impact: 'Strengthened academic partnerships and aligned with a prestigious university for improved educational standards.'
  },
  {
    year: 'NOW',
    title: 'Present day: Methodist Health Training Institute (MHTI).',
    description1: 'Graduates are licensed by N&MC to practice in Ghana and beyond.',
    description2: 'Operates under policies from the Methodist Church Ghana, Ministry of Health, CHAG, GTEC, N&MC, and KNUST.',
    description3: 'Implements strategic resource allocation and operational expansion for long-term success.',
    impact: 'Continues to produce competent healthcare professionals while adapting to evolving educational and healthcare needs.'
  }
])
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideIn {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-slide-in {
  opacity: 0;
  animation: slideIn 0.8s forwards;
}

.milestone-item:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease;
}
</style>
