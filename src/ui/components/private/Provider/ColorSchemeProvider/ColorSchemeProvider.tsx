import { createContext, useContext } from 'react';
import type { ColorSchemeContextType, ColorSchemeProviderProps } from './ColorSchemeProvider.types';
import { useMantineColorScheme } from '@mantine/core';

const ColorSchemeContext = createContext<ColorSchemeContextType | undefined>(undefined);

export function useColorScheme() {
  const context = useContext(ColorSchemeContext);
  if (context === undefined) {
    throw new Error('useColorScheme must be used within a ColorSchemeProvider');
  }
  return context;
}

export default function ColorSchemeProvider({ children }: ColorSchemeProviderProps) {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <ColorSchemeContext.Provider
      value={{
        colorScheme,
        setColorScheme,
      }}
    >
      {children}
    </ColorSchemeContext.Provider>
  );
}
