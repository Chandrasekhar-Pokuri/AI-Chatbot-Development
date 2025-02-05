import React, { useState, useEffect } from 'react';
import { Menu } from '../../types';
import { menuService } from '../../services/api/menuService.ts';
import { MenuCategory } from './MenuCategory';
import { MenuItem } from './MenuItem.tsx';
import { Utensils, AlertCircle } from 'lucide-react';

export const MenuDisplay: React.FC = () => {
  const [menu, setMenu] = useState<Menu | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  useEffect(() => {
    loadMenu();
  }, []);

  const loadMenu = async () => {
    try {
      const data = await menuService.getMenu();
      setMenu(data);
      // Initially expand all categories
      setExpandedCategories(data.categories.map((cat: { name: any; }) => cat.name));
    } catch (err) {
      setError('Failed to load menu. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(name => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center py-12 px-4 text-red-500">
        <AlertCircle className="mr-2" />
        <span>{error}</span>
      </div>
    );
  }

  if (!menu) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {menu.specials.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Utensils className="text-red-500" />
            Today's Specials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menu.specials.map(item => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}

      <div className="space-y-6">
        {menu.categories.map(category => (
          <MenuCategory
            key={category.name}
            category={category}
            isExpanded={expandedCategories.includes(category.name)}
            onToggle={() => toggleCategory(category.name)}
          />
        ))}
      </div>
    </div>
  );
};