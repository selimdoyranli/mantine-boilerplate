import React, { useEffect } from 'react';
import { addons } from '@storybook/preview-api';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import { ThemeKeyEnum } from '../src/enums';
import { MantineProvider, DirectionProvider, useMantineColorScheme } from '@mantine/core';
import '@mantine/core/styles.css';

import useTheme from '../src/composables/use-theme/use-theme.composable';

const channel = addons.getChannel();

function ColorSchemeWrapper({ children }: { children: React.ReactNode }) {
  const { setColorScheme } = useMantineColorScheme();
  const handleColorScheme = (value: boolean) => setColorScheme(value ? 'dark' : 'light');

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, handleColorScheme);
    return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme);
  }, [channel]);

  return children;
}

const parameters = {
  layout: 'fullscreen',
  options: {
    showPanel: true,
    storySort: {
      order: ['Getting Started', 'UI', '*', 'Mantine Theme', ['Overview', 'Tokens', 'Components']]
    },
  },
};

const globalTypes = {
  direction: {
    description: 'Direction',
    defaultValue: 'ltr',
    toolbar: {
      title: 'Direction',
      icon: 'transfer',
      items: [
        { value: 'ltr', title: 'LTR', icon: 'arrowrightalt' },
        { value: 'rtl', title: 'RTL', icon: 'arrowleftalt' },
      ],
      dynamicTitle: true,
    },
  },
  theme: {
    description: 'Theme',
    defaultValue: localStorage.getItem('storybook-theme') || 'default-theme',
    toolbar: {
      title: 'Theme',
      icon: 'paintbrush',
      items: [
        { value: 'default-theme', title: 'Default Theme' },
        { value: 'alternative-theme', title: 'Alternative Theme' },
      ],
      dynamicTitle: true,
    },
  },
};

const decorators = [
  (Story, context) => {
    const dir = context.globals.direction || 'ltr';
    
    return (
      <DirectionProvider initialDirection={dir}>
        <div dir={dir} style={{ width: '100%', height: '100%' }}>
          {Story()}
        </div>
      </DirectionProvider>
    );
  },
  (renderStory: any) => <ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>,
  (Story, context) => {
    const { currentTheme, setSelectedTheme } = useTheme();
    const themeType = context.globals.theme;
    
    useEffect(() => {
      if (themeType) {
        localStorage.setItem('storybook-theme', themeType);
        setSelectedTheme(themeType === 'default-theme' ? ThemeKeyEnum.Default : ThemeKeyEnum.Alternative);
      }
    }, [themeType]);

    return (
      <MantineProvider theme={currentTheme} defaultColorScheme='auto'>
        {Story()}
      </MantineProvider>
    );
  },
];

const preview = {
  parameters,
  globalTypes,
  decorators,
};

export default preview;


