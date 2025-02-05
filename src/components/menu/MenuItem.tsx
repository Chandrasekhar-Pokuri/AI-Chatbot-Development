import React from 'react';
import { Flame, Leaf, Beef } from 'lucide-react';
import type { MenuItem as MenuItemTypeDef } from '../../types';

interface MenuItemProps {
  item: MenuItemTypeDef;
}

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const getSpiceLevel = (level: string) => {
    switch (level) {
      case 'MILD':
        return 1;
      case 'MEDIUM':
        return 2;
      case 'HOT':
        return 3;
      case 'EXTRA_HOT':
        return 4;
      default:
        return 0;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      {item.imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover"
          />
          {item.isSpecial && (
            <div className="absolute top-4 right-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full">
              Special
            </div>
          )}
        </div>
      )}
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
          <div className="flex items-center gap-2">
            {item.dietaryType === 'VEG' ? (
              <Leaf size={20} className="text-green-500" />
            ) : (
              <Beef size={20} className="text-red-500" />
            )}
            <div className="flex">
              {Array.from({ length: getSpiceLevel(item.spiceLevel) }).map((_, i) => (
                <Flame
                  key={i}
                  size={16}
                  className="text-red-500"
                />
              ))}
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {item.ingredients.map((ingredient, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
            >
              {ingredient}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-4 pt-3 border-t">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-gray-900">
              ${item.price.toFixed(2)}
            </span>
            {item.discount && (
              <span className="text-sm text-red-500 font-medium">
                -{item.discount}% OFF
              </span>
            )}
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-full transition-colors">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};