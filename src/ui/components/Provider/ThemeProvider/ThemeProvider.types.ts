import type { ReactNode } from 'react';
import type { ThemeKeyEnum } from '@/enums';
import type baseTheme from '@/ui/themes/base/base.theme';

export interface ThemeContextType {
  selectedTheme: ThemeKeyEnum;
  setSelectedTheme: (theme: ThemeKeyEnum) => void;
  theme: typeof baseTheme;
}

export interface ThemeProviderProps {
  children: ReactNode;
}
