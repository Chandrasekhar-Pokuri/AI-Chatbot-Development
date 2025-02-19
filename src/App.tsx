import React, { useState, useEffect } from 'react';
import { ChatHeader } from './components/ChatHeader';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { Message } from './types';
import { apiService } from './services/apiService';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWelcomeMessage = async () => {
      try {
        const response = await apiService.getWelcomeMessage();
        setMessages([
          {
            id: '1',
            content: response.message,
            type: 'assistant',
            timestamp: new Date(),
          },
          {
            id: '2',
            content: 'How can I help you today? You can ask about:\n- Full menu\n- Vegetarian options\n- Vegan options\n- Gluten-free options\n- Spice levels\n- Today\'s specials',
            type: 'assistant',
            timestamp: new Date(),
          },
        ]);
      } catch (error) {
        console.error('Error fetching welcome message:', error);
        setMessages([
          {
            id: '1',
            content: 'Welcome to our Restaurant Assistant!',
            type: 'assistant',
            timestamp: new Date(),
          },
        ]);
      }
    };

    fetchWelcomeMessage();
  }, []);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      type: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const response = await apiService.sendQuery(content);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response.message,
        type: 'assistant',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error processing message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm sorry, I couldn't process your request. Please try again.",
        type: 'assistant',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto h-screen flex flex-col">
        <ChatHeader />
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {loading && (
            <div className="flex items-center justify-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          )}
        </div>
        <ChatInput onSendMessage={handleSendMessage} disabled={loading} />
      </div>
    </div>
  );
}

export default App;