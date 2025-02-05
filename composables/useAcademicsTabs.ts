// composables/useAboutTabs.ts
export const useAcademicsTabs = () => {
    const tabs = [
      { name: 'Overview', path: '/academics/overview' },
      { name: 'Collages', path: '/academics/collages' },
      { name: 'Programmes', path: '/academics/programmes' },
      { name: 'Academic Calendar', path: '/about/calendar' },
      { name: 'Library', path: '/academics/library' },
      { name: 'Journals', path: '/academics/journals' }
    ]
    
    return { tabs }
  }