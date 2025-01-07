import { useEffect, useState } from 'react';
import { ThemeKeyEnum } from '@/enums';
import alternativeTheme from '@/theme/themes/alternative/alternative.theme';
import defaultTheme from '@/theme/themes/default/default.theme';
import type { ThemeStore } from './use-theme.composable.types';

let store: ThemeStore = {
  selectedTheme: ThemeKeyEnum.Default,
  currentTheme: defaultTheme,
};

const listeners = new Set<() => void>();

const emitChange = () => {
  listeners.forEach((listener) => listener());
};

export default function useTheme() {
  const [themeState, setThemeState] = useState(store);

  useEffect(() => {
    const listener = () => setThemeState({ ...store });
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  const setSelectedTheme = (theme: ThemeKeyEnum) => {
    store = {
      selectedTheme: theme,
      currentTheme: theme === ThemeKeyEnum.Alternative ? alternativeTheme : defaultTheme,
    };
    emitChange();
  };

  return {
    selectedTheme: themeState.selectedTheme,
    currentTheme: themeState.currentTheme,
    setSelectedTheme,
  };
}
