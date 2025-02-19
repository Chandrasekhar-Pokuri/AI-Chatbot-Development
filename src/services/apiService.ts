import { Message } from '../types';

interface WelcomeResponse {
  message: string;
}

interface MessageResponse {
  message: string;
}

interface MenuDTO {
  id: number;
  name: string;
  price: number;
  description: string;
}

// Ensure API base URL is correctly loaded from .env
const API_BASE_URL = import.meta.env.VITE_API_URL;

if (!API_BASE_URL) {
  console.error("❌ ERROR: VITE_API_URL is not defined. Check your .env file.");
} else {
  console.log("✅ API Base URL Loaded:", API_BASE_URL);
}

export const apiService = {
  async getWelcomeMessage(): Promise<WelcomeResponse> {
    try {
      console.log(`📡 Fetching Welcome Message from: ${API_BASE_URL}/restaurant/welcome`);
      const response = await fetch(`${API_BASE_URL}/restaurant/welcome`);
      if (!response.ok) throw new Error(`HTTP Error ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error("❌ Error in getWelcomeMessage:", error);
      throw error;
    }
  },

  async sendQuery(query: string): Promise<MessageResponse> {
    try {
      console.log(`📡 Sending Query to: ${API_BASE_URL}/restaurant/query`);
      const response = await fetch(`${API_BASE_URL}/restaurant/query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
      });
      if (!response.ok) throw new Error(`HTTP Error ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error("❌ Error in sendQuery:", error);
      throw error;
    }
  },

  async getMenu(): Promise<MenuDTO[]> {
    try {
      console.log(`📡 Fetching Menu from: ${API_BASE_URL}/menu`);
      const response = await fetch(`${API_BASE_URL}/menu`);
      if (!response.ok) throw new Error(`HTTP Error ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error("❌ Error in getMenu:", error);
      throw error;
    }
  }
};
