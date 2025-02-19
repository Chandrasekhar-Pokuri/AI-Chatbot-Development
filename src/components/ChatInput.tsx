import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="border-t bg-white p-4">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
          disabled={disabled}
        />
        <button
          type="submit"
          className={`p-3 rounded-full ${
            disabled ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
          } text-white focus:outline-none focus:ring-2 focus:ring-blue-500`}
          disabled={disabled}
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};