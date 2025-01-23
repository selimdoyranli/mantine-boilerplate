import type { ReactNode } from 'react';
import type { MantineThemeOverride } from '@mantine/core';

export interface ThemeContextType {
  activeThemeKey: 'base' | 'alternative';
  setActiveThemeKey: (themeKey: 'base' | 'alternative') => void;
  theme: MantineThemeOverride;
}

export interface ThemeProviderProps {
  children: ReactNode;
}
