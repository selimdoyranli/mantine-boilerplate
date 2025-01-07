import { MantineTheme } from '@mantine/core';

type MantineTypographyTheme = Pick<
  MantineTheme,
  'fontFamily' | 'fontFamilyMonospace' | 'fontSizes' | 'lineHeights' | 'headings'
>;

const headings: MantineTypographyTheme['headings'] = {
  fontFamily: 'Poppins, Montserrat, sans-serif',
  fontWeight: '700',
  textWrap: 'balance',
  sizes: {
    h1: { fontSize: '3rem', lineHeight: '1.4', fontWeight: '700' },
    h2: { fontSize: '2.5rem', lineHeight: '1.45', fontWeight: '700' },
    h3: { fontSize: '2rem', lineHeight: '1.5', fontWeight: '700' },
    h4: { fontSize: '1.75rem', lineHeight: '1.55', fontWeight: '700' },
    h5: { fontSize: '1.5rem', lineHeight: '1.6', fontWeight: '700' },
    h6: { fontSize: '1.25rem', lineHeight: '1.65', fontWeight: '700' },
  },
};

const typography: MantineTypographyTheme = {
  fontFamily: 'Inter, Open Sans, system-ui, -apple-system, sans-serif',
  fontFamilyMonospace: 'Fira Code, JetBrains Mono, Consolas, Monaco, monospace',
  fontSizes: {
    xs: '0.875rem',
    sm: '1rem',
    md: '1.125rem',
    lg: '1.25rem',
    xl: '1.5rem',
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
