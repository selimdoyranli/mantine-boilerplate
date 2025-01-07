import { ThemeKeyEnum } from '@/enums';
import defaultTheme from '@/theme/themes/default/default.theme';

export type ThemeStore = {
  selectedTheme: ThemeKeyEnum;
  currentTheme: typeof defaultTheme;
};
