// Menu Types
export interface MenuItem {
  id: string | number;
  name: string;
  category: 'APPETIZER' | 'MAIN' | 'DESSERT' | 'BEVERAGE';
  description: string;
  ingredients: string[];
  dietaryType: 'VEG' | 'NON_VEG';
  meatType?: string;
  spiceLevel: 'MILD' | 'MEDIUM' | 'HOT' | 'EXTRA_HOT';
  price: number;
  discount?: number;
  isSpecial?: boolean;
  imageUrl?: string;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export interface Menu {
  categories: MenuCategory[];
  specials: MenuItem[];
}

// Chat Types
export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
}

export interface ChatContextType extends ChatState {
  sendMessage: (content: string) => Promise<void>;
  clearChat: () => void;
}

export interface ChatRequest {
  message: string;
}

export interface ChatResponse {
  response: string;
}