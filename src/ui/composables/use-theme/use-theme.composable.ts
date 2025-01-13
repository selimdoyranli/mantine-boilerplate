import { useEffect, useState } from 'react';
import { ThemeKeyEnum } from '@/enums';
import alternativeTheme from '@/ui/themes/alternative/alternative.theme';
import baseTheme from '@/ui/themes/base/base.theme';
import type { ThemeStore } from './use-theme.composable.types';

let store: ThemeStore = {
  selectedTheme: ThemeKeyEnum.Base,
  currentTheme: baseTheme,
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
      currentTheme: theme === ThemeKeyEnum.Alternative ? alternativeTheme : baseTheme,
    };
    emitChange();
  };

  return {
    selectedTheme: themeState.selectedTheme,
    currentTheme: themeState.currentTheme,
    setSelectedTheme,
  };
}
