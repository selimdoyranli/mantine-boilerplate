import React from 'react';
import UIProvider from '../src/ui/components/Provider/UIProvider/UIProvider';
import { StorybookWrapper } from './StorybookWrapper';

const parameters = {
  layout: 'fullscreen',
  options: {
    showPanel: true,
    storySort: {
      order: [
        'Getting Started',
        'UI',
        '*',
        'App',
        'Mantine Theme',
        ['Overview', 'Tokens', 'Components'],
      ],
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
    defaultValue: 'base-theme',
    toolbar: {
      title: 'Theme',
      icon: 'paintbrush',
      items: [
        { value: 'base-theme', title: 'Base Theme' },
        { value: 'alternative-theme', title: 'Alternative Theme' },
      ],
      dynamicTitle: true,
    },
  },
};

const decorators = [
  (Story, context) => {
    if (!context.globals.theme) {
      context.globals.theme = 'base-theme';
    }

    return (
      <UIProvider>
        <StorybookWrapper
          themeValue={context.globals.theme}
          directionValue={context.globals.direction}
        >
          <Story />
        </StorybookWrapper>
      </UIProvider>
    );
  },
];

export const preview = {
  parameters,
  globalTypes,
  decorators,
};

export default preview;
