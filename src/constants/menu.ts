import { FaCoffee, FaIceCream } from 'react-icons/fa';
import { MdFoodBank } from 'react-icons/md';
import { MenuCategory, MenuItems } from './types';
import { createElement } from 'react';

export const menuCategories: MenuCategory[] = [
  { id: 'hot', label: 'Hot Drinks', icon: createElement(FaCoffee, { size: 16 }) },
  { id: 'cold', label: 'Cold Drinks', icon: createElement(FaIceCream, { size: 16 }) },
  { id: 'food', label: 'Food', icon: createElement(MdFoodBank, { size: 16 }) },
];

export const menuItems: MenuItems = {
  hot: [
    { name: 'Espresso', description: 'Pure coffee essence, intense and aromatic', price: 2.99, popular: true },
    { name: 'Americano', description: 'Espresso diluted with hot water', price: 3.49 },
    { name: 'Cappuccino', description: 'Equal parts espresso, steamed milk, and milk foam', price: 4.29, popular: true },
    { name: 'Latte', description: 'Espresso with steamed milk and a light layer of foam', price: 4.49 },
    { name: 'Mocha', description: 'Espresso with chocolate and steamed milk', price: 4.79 },
    { name: 'Flat White', description: 'Espresso with velvety steamed milk', price: 4.29 },
    { name: 'Macchiato', description: 'Espresso "stained" with a small amount of milk', price: 3.79 },
    { name: 'Dr.Bean Special', description: 'Our signature blend with cinnamon and vanilla', price: 5.49, popular: true },
  ],
  cold: [
    { name: 'Iced Coffee', description: 'Chilled coffee served over ice', price: 3.99 },
    { name: 'Cold Brew', description: 'Slow-steeped for 12 hours for a smooth, rich flavor', price: 4.49, popular: true },
    { name: 'Iced Latte', description: 'Espresso and cold milk over ice', price: 4.79 },
    { name: 'Frappuccino', description: 'Blended coffee with ice and your choice of flavors', price: 5.29, popular: true },
    { name: 'Iced Mocha', description: 'Espresso, chocolate, cold milk, and ice', price: 4.99 },
    { name: 'Affogato', description: 'Vanilla ice cream "drowned" with a shot of espresso', price: 5.49 },
    { name: 'Nitro Cold Brew', description: 'Cold brew infused with nitrogen for a creamy texture', price: 4.99, popular: true },
  ],
  food: [
    { name: 'Croissant', description: 'Buttery, flaky pastry', price: 3.49 },
    { name: 'Avocado Toast', description: 'Whole grain toast with smashed avocado and seasonings', price: 6.99, popular: true },
    { name: 'Blueberry Muffin', description: 'Moist muffin packed with fresh blueberries', price: 3.79 },
    { name: 'Breakfast Sandwich', description: 'Egg, cheese, and your choice of protein on a brioche bun', price: 5.99, popular: true },
    { name: 'Chocolate Chip Cookie', description: 'Freshly baked with premium chocolate', price: 2.49 },
    { name: 'Yogurt Parfait', description: 'Greek yogurt with granola and seasonal fruit', price: 4.99 },
    { name: 'Teddy Bear Cake', description: 'Our signature dessert inspired by Mr. Bean\'s teddy', price: 6.49, popular: true },
  ],
}; 