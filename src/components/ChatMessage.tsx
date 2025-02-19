import React from 'react';
import { Utensils } from 'lucide-react';
import { Message } from '../types';
import clsx from 'clsx';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isAssistant = message.type === 'assistant';
  const isUser = message.type === 'user';
  const time = message.timestamp.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  if (isUser) {
    return (
      <div className="flex justify-end mb-4">
        <div className="bg-blue-600 text-white rounded-lg py-2 px-4 max-w-[80%]">
          <p>{message.content}</p>
          <p className="text-xs text-blue-100 mt-1">{time}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3 mb-4">
      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
        <Utensils className="w-6 h-6 text-blue-600" />
      </div>
      <div className="bg-white rounded-lg py-2 px-4 max-w-[80%] shadow-sm">
        <p className="text-gray-800">{message.content}</p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  );
};