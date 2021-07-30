import { DefaultTheme } from 'styled-components';

const COLORS = {
  neutral: '#93b1bf',
  accent: '#bf5764',
  dark: '#2d616d',
  darkest: '#1F3F47',
  light: '#f2f6fa',
  warning: '#e27f57',
};

export const darkTheme: DefaultTheme = {
  colors: {
    ...COLORS,
    bg: COLORS.dark,
    text: COLORS.light,
  },
};

export const lightTheme: DefaultTheme = {
  colors: {
    ...COLORS,
    bg: COLORS.light,
    text: COLORS.dark,
  },
};
