import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors:{
      green: string;
      green_dark: string;
      green_light: string;
      heading: string;
      body_dark: string;
      body_light: string;
      background: string;
      shape: string;
      white: string;
      gray: string;
      blue: string;
      blue_light: string;
      red: string;
    },
    fonts: {
      heading: string;
      text: string;
      complement: string;
    }
  }
}