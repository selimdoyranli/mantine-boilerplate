import { createTheme, MantineThemeOverride } from '@mantine/core';
import Container from '@/ui/components/Container/Container';
import Input from '@/ui/components/Input/Input';
import radius, { defaultRadius } from '@/ui/tokens/radius/radius';
import shadows from '@/ui/tokens/shadows/shadows';
import spacing from '@/ui/tokens/spacing/spacing';
// Components
import Button from './components/Button/Button.extend';
import breakpoints from './tokens/breakpoints/breakpoints';
// Tokens
import colors, { primaryColor, primaryShade } from './tokens/colors/colors';
import typography from './tokens/typography/typography';

export const theme: MantineThemeOverride = {
  colors,
  primaryColor,
  primaryShade,
  breakpoints,
  spacing,
  radius,
  defaultRadius,
  shadows,
  ...typography,
  components: {
    Button,
    Container,
    Input,
  },
};

const alternativeTheme = createTheme(theme);

export default alternativeTheme;
