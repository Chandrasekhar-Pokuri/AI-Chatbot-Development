import React from 'react';
import { ChevronDown } from 'lucide-react';
import type { MenuCategory as MenuCategoryType } from '../../types';
import { MenuItem } from './MenuItem';

interface MenuCategoryProps {
  category: MenuCategoryType;
  isExpanded?: boolean;
  onToggle?: () => void;
}

export const MenuCategory: React.FC<MenuCategoryProps> = ({
  category,
  isExpanded = true,
  onToggle,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <h2 className="text-xl font-semibold text-gray-900">{category.name}</h2>
        <ChevronDown
          size={20}
          className={`text-gray-500 transition-transform ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {category.items.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};