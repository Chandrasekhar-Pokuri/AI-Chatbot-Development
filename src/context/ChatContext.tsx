import React, { createContext, useState } from 'react';
import type { Message, ChatContextType, ChatState } from '../types';
import { chatApi } from '../services/api/chatApi';

export const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<ChatState>({
    messages: [],
    isLoading: false,
  });

  const sendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true,
    }));

    try {
      const response = await chatApi.sendMessage(content);
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response.response,
        sender: 'bot',
        timestamp: new Date(),
      };

      setState(prev => ({
        isLoading: false,
        messages: [...prev.messages, botMessage],
      }));
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I apologize, but I'm having trouble connecting to the server. Please try again later.",
        sender: 'bot',
        timestamp: new Date(),
      };

      setState(prev => ({
        isLoading: false,
        messages: [...prev.messages, errorMessage],
      }));
    }
  };

  const clearChat = () => {
    setState({ messages: [], isLoading: false });
  };

  return (
    <ChatContext.Provider value={{ ...state, sendMessage, clearChat }}>
      {children}
    </ChatContext.Provider>
  );
};