// Components
import Accordion from './components/Accordion/Accordion';
import Button from './components/Button/Button';
import Container from './components/Container/Container';
import Input from './components/Input/Input';
// Tokens
import breakpoints from './tokens/breakpoints/breakpoints';
import colors, { primaryColor, primaryShade } from './tokens/colors/colors';
import radius, { defaultRadius } from './tokens/radius/radius';
import shadows from './tokens/shadows/shadows';
import spacing from './tokens/spacing/spacing';
import typography from './tokens/typography/typography';
import { createTheme, MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  breakpoints,
  colors,
  primaryColor,
  primaryShade,
  spacing,
  radius,
  defaultRadius,
  shadows,
  ...typography,
  components: {
    Accordion,
    Button,
    Container,
    Input,
  },
};

const alternativeTheme = createTheme(theme);

export default alternativeTheme;
