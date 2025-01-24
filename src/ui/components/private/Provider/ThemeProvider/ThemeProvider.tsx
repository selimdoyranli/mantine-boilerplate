import { createContext, useContext, useMemo, useState } from 'react';
import { ThemeKeyEnum } from '@/ui/enums';
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
  const [activeThemeKey, setActiveThemeKey] = useState<'base' | 'alternative'>('base');

  const theme = useMemo(() => {
    if (activeThemeKey === ThemeKeyEnum.Base) {
      return baseTheme;
    }

    if (activeThemeKey === ThemeKeyEnum.Alternative) {
      return alternativeTheme;
    }

    return baseTheme;
  }, [activeThemeKey]);

  return (
    <ThemeContext.Provider
      value={{
        activeThemeKey,
        setActiveThemeKey,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
