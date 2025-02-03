import { defineStore } from 'pinia';
import type { NavItem, NewsItem, Service } from '~/types';

interface State {
  isSidebarOpen: boolean;
  isSearchOpen: boolean;
  isDarkMode: boolean;
  currentLanguage: string;
  searchQuery: string;
  navigation: NavItem[];
  services: Service[];
  news: NewsItem[];
  quickLinks: NavItem[];
}

export const useSiteStore = defineStore('site', {
  state: (): State => ({
    isSidebarOpen: false,
    isSearchOpen: false,
    isDarkMode: false,
    currentLanguage: 'en',
    searchQuery: '',
    navigation: [
      {
        id: 1,
        title: 'Our Services',
        path: '/services',
        children: [
          { id: 'srv1', title: 'Mooring', path: '/services/mooring' },
          { id: 'srv2', title: 'Project Cargo', path: '/services/project-cargo' },
          { id: 'srv3', title: 'Warehousing', path: '/services/warehousing' },
          { id: 'srv4', title: 'RORO Services', path: '/services/roro' },
          { id: 'srv5', title: 'Cruise Operations', path: '/services/cruise' },
        ],
      },
    ],
    services: [
      {
        id: 1,
        title: 'Mooring',
        icon: 'mooring',
        description: 'Professional vessel mooring services',
      },
      {
        id: 2,
        title: 'Project Cargo',
        icon: 'cargo',
        description: 'Heavy lift and oversized cargo handling',
      },
    ],
    news: [
      {
        id: 1,
        title: 'SCH Achieves New Milestone in Cruise Operations',
        date: '2024-02-01',
        image: '/images/cruise-ship.jpg',
        excerpt: 'Successfully handled record number of cruise passengers...',
      },
    ],
    quickLinks: [
      { id: 1, title: 'Safety Guidelines', path: '/safety' },
      { id: 2, title: 'Port Schedule', path: '/schedule' },
      { id: 3, title: 'Documentation', path: '/docs' },
    ],
  }),

  actions: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    toggleSearch() {
      this.isSearchOpen = !this.isSearchOpen;
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      if (process.client) {
        document.documentElement.classList.toggle('dark');
      }
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    },
    closeSearch() {
      this.isSearchOpen = false;
    },
  },
});
