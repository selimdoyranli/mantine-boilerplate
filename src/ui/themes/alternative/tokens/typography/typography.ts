import { MantineTheme, rem } from '@mantine/core';

type MantineTypographyTheme = Pick<
  MantineTheme,
  'fontFamily' | 'fontFamilyMonospace' | 'fontSizes' | 'lineHeights' | 'headings'
>;

const headings: MantineTypographyTheme['headings'] = {
  fontFamily: 'Poppins, Montserrat, sans-serif',
  fontWeight: '700',
  textWrap: 'balance',
  sizes: {
    h1: { fontSize: rem(42), lineHeight: '1.4', fontWeight: '700' },
    h2: { fontSize: rem(36), lineHeight: '1.45', fontWeight: '700' },
    h3: { fontSize: rem(30), lineHeight: '1.5', fontWeight: '700' },
    h4: { fontSize: rem(26), lineHeight: '1.55', fontWeight: '700' },
    h5: { fontSize: rem(22), lineHeight: '1.6', fontWeight: '700' },
    h6: { fontSize: rem(18), lineHeight: '1.65', fontWeight: '700' },
  },
};

const typography: MantineTypographyTheme = {
  fontFamily: 'Inter, Open Sans, system-ui, -apple-system, sans-serif',
  fontFamilyMonospace: 'Fira Code, JetBrains Mono, Consolas, Monaco, monospace',
  fontSizes: {
    xs: rem(14),
    sm: rem(16),
    md: rem(18),
    lg: rem(20),
    xl: rem(24),
  },
  lineHeights: {
    xs: '1.4',
    sm: '1.45',
    md: '1.55',
    lg: '1.6',
    xl: '1.65',
  },
  headings,
};

export default typography;
