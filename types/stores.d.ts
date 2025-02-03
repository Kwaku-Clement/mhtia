import type { StoreDefinition } from 'pinia';

declare module '~/stores/site' {
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
}
