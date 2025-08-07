/** @type {import('tailwindcss').Config} */

import { COLORS } from './src/constants/colors.constant';

const borderRadius = {
  0: '0px',
  2: '2px',
  4: '4px',
  8: '8px',
  12: '12px',
  16: '16px',
  24: '24px',
  9999: '9999px',
};

const fontSize = {
  8: '8px',
  10: '10px',
  12: '12px',
  14: '14px',
  16: '16px',
  18: '18px',
  20: '20px',
  24: '24px',
  30: '30px',
  32: '32px',
  36: '36px',
  40: '40px',
  48: '48px',
  56: '56px',
  60: '60px',
  72: '72px',
};

const lineHeight = {
  10: '10px',
  12: '12px',
  14: '14px',
  16: '16px',
  18: '18px',
  20: '20px',
  22: '22px',
  24: '24px',
  26: '26px',
  28: '28px',
  30: '30px',
  32: '32px',
  38: '38px',
  40: '40px',
  44: '44px',
  48: '48px',
  56: '56px',
  60: '60px',
  64: '64px',
  72: '72px',
  90: '90px',
};

const fontWeight = {
  thin: '100',
  light: '200',
  regular: '300',
  medium: '500',
  semibold: '600',
  bold: '800',
};

module.exports = {
  presets: [require('nativewind/preset')],
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: { colors: COLORS, borderRadius, fontSize, lineHeight, fontWeight },
  },
  plugins: [],
};
