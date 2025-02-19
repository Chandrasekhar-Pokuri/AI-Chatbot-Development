export interface Message {
  id: string;
  content: string;
  type: 'user' | 'assistant';
  timestamp: Date;
}

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
}