import React, { useEffect } from 'react';
import { ThemeKeyEnum } from '../src/enums';
import { useColorSchemeContext } from '../src/ui/contexts/ColorSchemeContext';
import { useThemeContext } from '../src/ui/contexts/ThemeContext';
import { addons } from '@storybook/preview-api';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';

const channel = addons.getChannel();

export function StorybookWrapper({
  children,
  themeValue,
  directionValue,
}: {
  children: React.ReactNode;
  themeValue: string;
  directionValue: 'ltr' | 'rtl';
}) {
  const { setSelectedTheme } = useThemeContext();
  const { setColorScheme } = useColorSchemeContext();

  // Theme handler
  useEffect(() => {
    const newTheme = themeValue === 'base-theme' ? ThemeKeyEnum.Base : ThemeKeyEnum.Alternative;
    setSelectedTheme(newTheme);
  }, [themeValue, setSelectedTheme]);

  // Direction handler
  useEffect(() => {
    if (directionValue) {
      document.documentElement.dir = directionValue;
    }

    return () => {
      document.documentElement.dir = 'ltr';
    };
  }, [directionValue]);

  // Color scheme handler
  useEffect(() => {
    const handleColorScheme = (isDark: boolean) => {
      setColorScheme(isDark ? 'dark' : 'light');
    };

    channel.on(DARK_MODE_EVENT_NAME, handleColorScheme);
    return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme);
  }, [setColorScheme]);

  return children;
}
