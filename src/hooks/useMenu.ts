import { useState, useEffect } from 'react';
import type { Menu } from '../types';
import { menuService } from '../services/api/menuService';

export const useMenu = () => {
  const [menu, setMenu] = useState<Menu | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadMenu();
  }, []);

  const loadMenu = async () => {
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

  const refreshMenu = () => {
    loadMenu();
  };

  return {
    menu,
    loading,
    error,
    refreshMenu,
  };
};