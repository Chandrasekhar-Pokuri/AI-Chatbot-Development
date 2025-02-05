import React from 'react';
import { Bot, User } from 'lucide-react';
import { Message } from '../../types';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.sender === 'bot';
  
  return (
    <div className={`flex items-start gap-4 ${isBot ? '' : 'flex-row-reverse'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
        isBot ? 'bg-red-100' : 'bg-gray-100'
      }`}>
        {isBot ? <Bot size={20} className="text-red-500" /> : <User size={20} className="text-gray-600" />}
      </div>
      <div className={`max-w-[70%] rounded-lg p-4 ${
        isBot ? 'bg-gray-50' : 'bg-gray-100'
      }`}>
        <p className="text-gray-800">{message.content}</p>
        <span className="text-xs text-gray-500 mt-1">
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};