import type { MenuItem } from '../../types';

export const formatters = {
  /**
   * Format currency amount
   */
  currency: (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  },

  /**
   * Format date to local string
   */
  date: (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  },

  /**
   * Format time to local string
   */
  time: (date: Date): string => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  },

  /**
   * Format menu item price with discount
   */
  menuItemPrice: (item: MenuItem): string => {
    const price = item.price;
    const discount = item.discount;

    if (!discount) {
      return formatters.currency(price);
    }

    const discountedPrice = price * (1 - discount / 100);
    return `${formatters.currency(discountedPrice)} (${discount}% off)`;
  },

  /**
   * Format spice level to display text
   */
  spiceLevel: (level: MenuItem['spiceLevel']): string => {
    return level.toLowerCase().replace('_', ' ');
  },

  /**
   * Format dietary type to display text
   */
  dietaryType: (type: MenuItem['dietaryType']): string => {
    return type === 'VEG' ? 'Vegetarian' : 'Non-Vegetarian';
  },
};