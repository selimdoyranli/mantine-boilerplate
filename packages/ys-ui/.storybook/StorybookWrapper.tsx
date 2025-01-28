import React, { useEffect } from 'react';
import { ThemeKeyEnum } from '../src/ui/enums';
import { useColorScheme, useTheme } from '../src/ui/hooks';
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
  const { setActiveThemeKey } = useTheme();
  const { setColorScheme } = useColorScheme();
  const setStoryDirection = (direction: 'ltr' | 'rtl') => {
    document.documentElement.querySelectorAll('.sb-story')?.forEach((story) => {
      story.setAttribute('dir', direction);
    });

    document.querySelectorAll('#storybook-root')?.forEach((story) => {
      story.setAttribute('dir', direction);
    });
  };

  // Theme handler
  useEffect(() => {
    if (themeValue === 'base-theme') {
      setActiveThemeKey('base');
    }

    if (themeValue === 'alternative-theme') {
      setActiveThemeKey(ThemeKeyEnum.Alternative);
    }
  }, [themeValue, setActiveThemeKey]);

  // Direction handler
  useEffect(() => {
    if (directionValue) {
      setStoryDirection(directionValue);
    }

    return () => {
      setStoryDirection('ltr');
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
