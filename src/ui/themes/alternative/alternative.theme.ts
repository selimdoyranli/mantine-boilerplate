// Components
import Accordion from './components/Accordion/Accordion';
import Anchor from './components/Anchor/Anchor';
import Box from './components/Box/Box';
import Button from './components/Button/Button';
import Container from './components/Container/Container';
import Input from './components/Input/Input';
import Select from './components/Select/Select';
import Text from './components/Text/Text';
import Title from './components/Title/Title';
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
    Anchor,
    Box,
    Button,
    Container,
    Input,
    Select,
    Title,
    Text,
  },
};

const alternativeTheme = createTheme(theme);

export default alternativeTheme;
