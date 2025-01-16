import type { ReactNode } from 'react';

export type ColorScheme = 'light' | 'dark' | 'auto';

export interface ColorSchemeContextType {
  colorScheme: ColorScheme;
  setColorScheme: (colorScheme: ColorScheme) => void;
}

export interface ColorSchemeProviderProps {
  children: ReactNode;
}
