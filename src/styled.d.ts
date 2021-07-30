import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      neutral: string;
      accent: string;
      dark: string;
      darkest: string;
      light: string;
      warning: string;
      bg: string;
      text: string;
    };
  }
}
