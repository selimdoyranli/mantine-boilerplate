import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { ThemeKeyEnum } from '@/enums';
import alternativeTheme from '@/ui/themes/alternative/alternative.theme';
import baseTheme from '@/ui/themes/base/base.theme';

interface ThemeContextType {
  selectedTheme: ThemeKeyEnum;
  setSelectedTheme: (theme: ThemeKeyEnum) => void;
  theme: typeof baseTheme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [selectedTheme, setSelectedTheme] = useState<ThemeKeyEnum>(ThemeKeyEnum.Base);

  const theme = useMemo(
    () => (selectedTheme === ThemeKeyEnum.Base ? baseTheme : alternativeTheme),
    [selectedTheme]
  );

  console.log('theme', theme);

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

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}
