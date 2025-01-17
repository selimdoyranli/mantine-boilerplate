import type { ReactNode } from 'react';
import type { ThemeKeyEnum } from '@/enums';
import type { MantineThemeOverride } from '@mantine/core';

export interface ThemeContextType {
  activeThemeKey: ThemeKeyEnum;
  setActiveThemeKey: (themeKey: ThemeKeyEnum) => void;
  theme: MantineThemeOverride;
}

export interface ThemeProviderProps {
  children: ReactNode;
}
