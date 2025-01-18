import { MantineTheme, rem } from '@mantine/core';

type MantineTypographyTheme = Pick<
  MantineTheme,
  'fontFamily' | 'fontFamilyMonospace' | 'fontSizes' | 'lineHeights' | 'headings'
>;

const headings: MantineTypographyTheme['headings'] = {
  fontFamily: 'Greycliff CF, sans-serif',
  fontWeight: '700',
  textWrap: 'balance',
  sizes: {
    h1: { fontSize: rem(34), lineHeight: '1.4', fontWeight: '700' },
    h2: { fontSize: rem(28), lineHeight: '1.45', fontWeight: '700' },
    h3: { fontSize: rem(22), lineHeight: '1.5', fontWeight: '700' },
    h4: { fontSize: rem(18), lineHeight: '1.55', fontWeight: '700' },
    h5: { fontSize: rem(16), lineHeight: '1.6', fontWeight: '700' },
    h6: { fontSize: rem(14), lineHeight: '1.65', fontWeight: '700' },
  },
};

const typography: MantineTypographyTheme = {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  fontFamilyMonospace:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20),
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
