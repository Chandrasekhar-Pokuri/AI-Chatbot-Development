import type { ChatRequest, ChatResponse } from '../../types';
import { API_URL } from '../../constants/api';

export const chatApi = {
  async sendMessage(message: string): Promise<ChatResponse> {
    const request: ChatRequest = { message };
    
    const response = await fetch(`${API_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    return response.json();
  },
};