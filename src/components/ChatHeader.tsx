import React from 'react';
import { Utensils } from 'lucide-react';

export const ChatHeader: React.FC = () => {
  return (
    <div className="border-b bg-white py-4 px-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <Utensils className="w-8 h-8 text-blue-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Restaurant Assistant</h1>
          <p className="text-gray-500">Ask me anything about our restaurant</p>
        </div>
      </div>
    </div>
  );
};