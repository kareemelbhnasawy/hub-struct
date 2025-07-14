/** @type {import('tailwindcss').Config} */

const colors = {
  light:{
    primary: '#4f46e5',
    secondary: '#22c55e',
    backgroundLight: '#FFFFFF',
    backgroundDark: '#1E1E1E',
    textLight: '#333333',
    textDark: '#EEEEEE',
    success: '#22c55e',
    warning: '#eab308',
    error: '#ef4444',
    info: '#3b82f6',
    grayLight: '#F5F5F5',
    grayDark: '#2D2D2D',
  },
  dark:{
    primary: '#4f46e5',
    secondary: '#22c55e',
    backgroundLight: '#FFFFFF',
    backgroundDark: '#1E1E1E',
    textLight: '#333333',
    textDark: '#EEEEEE',
    success: '#22c55e',
    warning: '#eab308',
    error: '#ef4444',
    info: '#3b82f6',
    grayLight: '#F5F5F5',
    grayDark: '#2D2D2D',
  }
};

module.exports = {
  presets: [require('nativewind/preset')],
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {colors},
  },
  plugins: [],
};
