import type { Menu, MenuCategory, MenuItem } from '../../types';
import { API_URL } from '../../constants/api';

export const menuService = {
  async getMenu(): Promise<Menu> {
    const response = await fetch(`${API_URL}/menu`);
    if (!response.ok) {
      throw new Error('Failed to fetch menu');
    }
    return response.json();
  },

  async getCategories(): Promise<MenuCategory[]> {
    const response = await fetch(`${API_URL}/menu/categories`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    return response.json();
  },

  async getSpecials(): Promise<MenuItem[]> {
    const response = await fetch(`${API_URL}/menu/specials`);
    if (!response.ok) {
      throw new Error('Failed to fetch specials');
    }
    return response.json();
  }
};