import { createContext, useContext, useMemo, useState } from 'react';
import { ThemeKeyEnum } from '@/enums';
import alternativeTheme from '@/ui/themes/alternative/alternative.theme';
import baseTheme from '@/ui/themes/base/base.theme';
import type { ThemeContextType, ThemeProviderProps } from './ThemeProvider.types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [selectedTheme, setSelectedTheme] = useState<ThemeKeyEnum>(ThemeKeyEnum.Base);

  const theme = useMemo(
    () => (selectedTheme === ThemeKeyEnum.Base ? baseTheme : alternativeTheme),
    [selectedTheme]
  );

  return (
    <ThemeContext.Provider
      value={{
        selectedTheme,
        setSelectedTheme,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
