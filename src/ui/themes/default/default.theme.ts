import { createTheme, MantineThemeOverride } from '@mantine/core';
// Components
import Button from '@/ui/components/Button/Button.mantine.theme';
import Container from '@/ui/components/Container/Container';
import Input from '@/ui/components/Input/Input';
import breakpoints from '@/ui/tokens/breakpoints/breakpoints';
// Tokens
import colors, { primaryColor, primaryShade } from '@/ui/tokens/colors/colors';
import radius, { defaultRadius } from '@/ui/tokens/radius/radius';
import shadows from '@/ui/tokens/shadows/shadows';
import spacing from '@/ui/tokens/spacing/spacing';
import typography from '@/ui/tokens/typography/typography';

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

const defaultTheme = createTheme(theme);

export default defaultTheme;
