import { createTheme, MantineThemeOverride } from '@mantine/core';
// Components
import Button from '@/theme/base/components/Button/Button';
import Container from '@/theme/base/components/Container/Container';
import Input from '@/theme/base/components/Input/Input';
import breakpoints from '@/theme/base/tokens/breakpoints/breakpoints';
// Tokens
import colors, { primaryColor, primaryShade } from '@/theme/base/tokens/colors/colors';
import radius, { defaultRadius } from '@/theme/base/tokens/radius/radius';
import shadows from '@/theme/base/tokens/shadows/shadows';
import spacing from '@/theme/base/tokens/spacing/spacing';
import typography from '@/theme/base/tokens/typography/typography';

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
