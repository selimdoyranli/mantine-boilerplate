import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const theme = create({
  base: 'light',
  brandTitle: 'ys-ui',
  brandUrl: '/',
  brandTarget: '_self',
  brandImage: '/public/logo.svg',
});

addons.setConfig({
  theme,
});
