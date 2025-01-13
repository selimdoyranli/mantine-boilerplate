import { ThemeKeyEnum } from '@/enums';
import baseTheme from '@/ui/themes/base/base.theme';

export type ThemeStore = {
  selectedTheme: ThemeKeyEnum;
  currentTheme: typeof baseTheme;
};
