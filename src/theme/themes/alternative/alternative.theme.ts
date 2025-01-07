import { MantineThemeOverride, createTheme } from '@mantine/core';

// Tokens
import colors, { primaryColor, primaryShade } from './tokens/colors/colors';
import breakpoints from './tokens/breakpoints/breakpoints';
import spacing from '@/theme/base/tokens/spacing/spacing';
import radius, { defaultRadius } from '@/theme/base/tokens/radius/radius';
import shadows from '@/theme/base/tokens/shadows/shadows';
import typography from './tokens/typography/typography';

// Components
import Button from '@/theme/base/components/Button/Button';
import Container from '@/theme/base/components/Container/Container';
import Input from '@/theme/base/components/Input/Input';

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
