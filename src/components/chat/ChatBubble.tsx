import React from 'react';
import { Bot, User } from 'lucide-react';
import type { Message } from '../../types';

interface ChatBubbleProps {
  message: Message;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isBot = message.sender === 'bot';
  
  return (
    <div className={`flex items-start gap-4 ${isBot ? '' : 'flex-row-reverse'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
        isBot ? 'bg-blue-100' : 'bg-gray-100'
      }`}>
        {isBot ? (
          <Bot size={20} className="text-blue-600" />
        ) : (
          <User size={20} className="text-gray-600" />
        )}
      </div>
      <div className={`max-w-[70%] rounded-lg p-4 ${
        isBot 
          ? 'bg-white border border-blue-100 shadow-sm' 
          : 'bg-blue-600 text-white'
      }`}>
        <p className={isBot ? 'text-gray-800' : 'text-white'}>{message.content}</p>
        <span className={`text-xs ${isBot ? 'text-gray-500' : 'text-blue-100'} mt-1 block`}>
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};