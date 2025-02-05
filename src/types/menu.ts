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