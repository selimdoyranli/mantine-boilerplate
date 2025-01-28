import '@mantine/core/styles.layer.css';

import { ColorSchemeProvider, ThemeProvider } from '@/ui/components/private';
import { useTheme } from '@/ui/hooks';
import type { UIProviderProps } from './UIProvider.types';
import { MantineProvider } from '@mantine/core';

function ThemedMantineProvider({ ...props }: UIProviderProps) {
  const { theme } = useTheme();

  const children = props.children;
  const defaultColorScheme = props.defaultColorScheme || 'auto';

  return (
    <MantineProvider theme={theme} defaultColorScheme={defaultColorScheme}>
      <ColorSchemeProvider>{children}</ColorSchemeProvider>
    </MantineProvider>
  );
}

export default function UIProvider({ ...props }: UIProviderProps) {
  const { children } = props;

  return (
    <ThemeProvider>
      <ThemedMantineProvider {...props}>{children}</ThemedMantineProvider>
    </ThemeProvider>
  );
}
