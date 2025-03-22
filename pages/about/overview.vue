<template>
  <div class="container mx-auto px-4 py-8">
    <AboutTabs />
    <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div class="bg-gradient-to-r from-cyan-500 to-blue-600 p-6">
        <h1 class="text-4xl font-bold text-white mb-4 animate-fade-in">
          College Overview
        </h1>
      </div>
      <div class="p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-6">
            <h2 class="text-2xl font-semibold text-gray-900">
              About Our College
            </h2>
            <p class="text-gray-600 leading-relaxed">
              The Methodist Health Training Institute (MHTI), located in Afosu, Eastern Region, Ghana, was established
              in 2014 by Nana Kwadwo Attefah. Initially accredited by the Nursing and Midwifery Council of Ghana (N&MC),
              it started with a two-year Nurse Assistant Clinical programme and later introduced a Post Basic Midwifery
              programme.
            </p>
            <p class="text-gray-600 leading-relaxed">
              By 2018, after training 563 enrolled nurses and 35 midwives, the institution gained accreditation from the
              Ghana Tertiary Education Council (GTEC) to offer three-year diploma programmes in Registered General
              Nursing and Registered Midwifery. It was initially affiliated with the University for Development Studies
              (UDS) but later transitioned to Kwame Nkrumah University of Science and Technology (KNUST).
            </p>
            <p class="text-gray-600 leading-relaxed">
              In 2019, the Methodist Church Ghana acquired the institution, renaming it Methodist Health Training
              Institute (MHTI). It became a Christian Health Association of Ghana (CHAG) member and now operates under
              the Ministry of Health.
            </p>
            <p class="text-gray-600 leading-relaxed">
              The institute follows policies from the Methodist Church Ghana, Ministry of Health, CHAG, GTEC, N&MC, and
              KNUST. All graduates are registered and licensed to practice in Ghana and beyond.
              <br />
              The institute's strategic plan focuses on resource allocation, operational expansion, and staff efficiency
              to achieve its long-term and short-term objectives.
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="(stat, index) in collegeStats" :key="index"
                class="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors">
                <div class="text-3xl font-bold text-blue-600">
                  {{ stat.value }}
                </div>
                <div class="text-sm text-gray-600">
                  {{ stat.label }}
                </div>
              </div>
            </div>
          </div>
          <div class="space-y-6">
            <h2 class="text-2xl font-semibold text-gray-900">
              Programmes Offered
            </h2>
            <div v-for="(impact, index) in collegeImpacts" :key="index"
              class="bg-white border border-gray-100 rounded-lg p-4 flex items-center space-x-4 hover:shadow-md transition-shadow">
              <div class="text-3xl text-blue-500">
                <component :is="impact.icon" />
              </div>
              <div>
                <h3 class="font-semibold text-gray-900">{{ impact.title }}</h3>
                <p class="text-gray-600">{{ impact.description }}</p>
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
import {
  Users,
  Globe,
  TrendingUp,
  Award
} from 'lucide-vue-next'
import AboutTabs from '~/components/tabs/AboutTabs.vue'

const collegeStats = ref([
  { value: '2000+', label: 'Students Trained' },
  { value: '95%', label: 'Graduation Rate' }
])

const collegeImpacts = ref([
  {
    icon: Users,
    title: 'Diploma in Registered Midwifery (RM) – 3 years',
    description: 'This 3-year program provides in-depth training in midwifery, preparing students to deliver quality maternal and newborn care, with a strong emphasis on practical skills and community health.'
  },
  {
    icon: Globe,
    title: 'Diploma in Registered General Nursing (RGN) – 3 years',
    description: 'A 3-year intensive course designed to train students in general nursing practices, enabling them to provide holistic healthcare services, with a focus on patient-centered care and clinical excellence.'
  },
  {
    icon: TrendingUp,
    title: 'Diploma in Post NAC/NAP Midwifery – 2 years',
    description: 'A 2-year specialized program for Nurse Assistants, offering advanced training to transition into midwifery roles with practical expertise, leadership skills, and a commitment to maternal health.'
  },
  {
    icon: Award,
    title: 'Certificate in Registered Nurse Assistant Clinicals (RNAC) – 2 years',
    description: 'This 2-year foundational course equips students with the skills to assist in clinical nursing practices with professionalism and care, fostering a strong ethical foundation and teamwork abilities.'
  }
])
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}
</style>
