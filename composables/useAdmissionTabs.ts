// composables/useAdmissionTabs.ts
export const useAdmissionTabs = () => {
    const tabs = [
      { name: 'Overview', path: '/admissions/overview' },
      { name: 'Certificate', path: '/admissions/certificate' },
      { name: 'Diploma', path: '/admissions/diploma' },
      { name: 'Undegraduate', path: '/admissions/undergraduate' },
      { name: 'Internation Admission', path: '/admissions/international' },
    ]
    
    return { tabs }
  }