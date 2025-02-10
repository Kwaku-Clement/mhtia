// composables/useAboutTabs.ts
export const useAcademicsTabs = () => {
    const tabs = [
      { name: 'Overview', path: '/academics/overview' },
      { name: 'Collages', path: '/academics/colleges' },
      { name: 'Programmes', path: '/academics/programmes' },
      { name: 'Academic Calendar', path: '/academics/calendar' },
      { name: 'Library', path: '/academics/library' },
      { name: 'Journals', path: '/academics/journals' }
    ]
    
    return { tabs }
  }