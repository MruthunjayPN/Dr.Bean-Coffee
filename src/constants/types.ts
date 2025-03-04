import { ReactElement } from 'react';

export interface SocialLink {
  icon: ReactElement;
  href: string;
  label: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  label: string;
  icon: ReactElement;
}

export interface MenuItems {
  [key: string]: MenuItem[];
} 