import React from 'react';
import { Bot } from 'lucide-react';
import { ChatProvider } from './context/ChatContext';
import { ChatBubble } from './components/chat/ChatBubble';
import { ChatInput } from './components/chat/ChatInput';
import { Loading } from './components/common/Loading';
import { useChat } from './hooks/useChat';

const ChatContainer: React.FC = () => {
  const { messages, isLoading, sendMessage } = useChat();

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <Bot size={24} className="text-blue-600" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">AI Assistant</h1>
            <p className="text-sm text-gray-500">Ask me anything about our restaurant</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Bot size={32} className="text-blue-600" />
              </div>
              <h2 className="text-lg font-medium text-gray-900 mb-2">
                Welcome to our Restaurant Assistant!
              </h2>
              <p className="text-gray-500">
                How can I help you today? You can ask about our menu, make reservations, or get information about our services.
              </p>
            </div>
          ) : (
            messages.map((message) => (
              <ChatBubble key={message.id} message={message} />
            ))
          )}
          {isLoading && <Loading />}
        </div>
      </div>

      {/* Input Area */}
      <div className="border-t bg-white px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <ChatProvider>
      <ChatContainer />
    </ChatProvider>
  );
}

export default App;