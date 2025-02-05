// composables/useAboutTabs.ts
export const useAboutTabs = () => {
    const tabs = [
      { name: 'Overview', path: '/about/overview' },
      { name: 'History', path: '/about/history' },
      { name: 'Mission', path: '/about/mission' },
      { name: 'Leadership', path: '/about/leadership' },
      { name: 'Partners', path: '/about/partners' }
    ]
    
    return { tabs }
  }