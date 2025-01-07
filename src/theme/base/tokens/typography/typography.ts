import { MantineTheme } from "@mantine/core";

type MantineTypographyTheme = Pick<MantineTheme, 
  | 'fontFamily'
  | 'fontFamilyMonospace'
  | 'fontSizes'
  | 'lineHeights'
  | 'headings'
>;

const headings: MantineTypographyTheme["headings"] = {
  fontFamily: 'Greycliff CF, sans-serif',
  fontWeight: '700',
  textWrap: 'balance',
  sizes: {
    h1: { fontSize: '2.125rem', lineHeight: '1.4', fontWeight: '700' },
    h2: { fontSize: '1.625rem', lineHeight: '1.45', fontWeight: '700' },
    h3: { fontSize: '1.375rem', lineHeight: '1.5', fontWeight: '700' },
    h4: { fontSize: '1.125rem', lineHeight: '1.55', fontWeight: '700' },
    h5: { fontSize: '1rem', lineHeight: '1.6', fontWeight: '700' },
    h6: { fontSize: '0.875rem', lineHeight: '1.65', fontWeight: '700' },
  },
};

const typography: MantineTypographyTheme = {
  fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  fontFamilyMonospace: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
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
