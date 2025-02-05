import React, { createContext, useContext, useState } from 'react';
import type { Menu, MenuCategory, MenuItem } from '../types';
import { menuService } from '../services/api/menuService';

interface MenuContextType {
  menu: Menu | null;
  loading: boolean;
  error: string | null;
  refreshMenu: () => Promise<void>;
  getCategory: (name: string) => MenuCategory | undefined;
  getMenuItem: (id: string | number) => MenuItem | undefined;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [menu, setMenu] = useState<Menu | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refreshMenu = async () => {
    try {
      setLoading(true);
      const data = await menuService.getMenu();
      setMenu(data);
      setError(null);
    } catch (err) {
      setError('Failed to load menu');
    } finally {
      setLoading(false);
    }
  };

  const getCategory = (name: string) => {
    return menu?.categories.find(
      (category) => category.name.toLowerCase() === name.toLowerCase()
    );
  };

  const getMenuItem = (id: string | number) => {
    const allItems = [
      ...menu?.categories.flatMap((category) => category.items) || [],
      ...menu?.specials || [],
    ];
    return allItems.find((item) => item.id === id);
  };

  return (
    <MenuContext.Provider
      value={{
        menu,
        loading,
        error,
        refreshMenu,
        getCategory,
        getMenuItem,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};