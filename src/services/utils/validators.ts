import type { MenuItem } from '../../types';

export const validators = {
  /**
   * Validate email format
   */
  isValidEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  /**
   * Validate phone number format
   */
  isValidPhone: (phone: string): boolean => {
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    return phoneRegex.test(phone);
  },

  /**
   * Validate menu item data
   */
  isValidMenuItem: (item: Partial<MenuItem>): boolean => {
    if (!item.name || !item.description || !item.price) {
      return false;
    }

    if (item.price < 0) {
      return false;
    }

    if (item.discount && (item.discount < 0 || item.discount > 100)) {
      return false;
    }

    return true;
  },

  /**
   * Validate chat message
   */
  isValidMessage: (message: string): boolean => {
    return message.trim().length > 0 && message.length <= 500;
  },

  /**
   * Validate image URL
   */
  isValidImageUrl: (url: string): boolean => {
    try {
      new URL(url);
      return url.match(/\.(jpg|jpeg|png|webp|avif|gif)$/) !== null;
    } catch {
      return false;
    }
  },
};