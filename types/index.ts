export interface NavItem {
  id: number | string;
  title: string;
  path: string;
  children?: NavItem[];
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt?: string;
}

export interface Service {
  id: number | string;
  title: string;
  icon: string;
  description: string;
}
