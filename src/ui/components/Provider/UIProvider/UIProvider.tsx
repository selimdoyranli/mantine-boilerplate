import '@mantine/core/styles.css';

import { ColorSchemeProvider } from '@/ui/contexts/ColorSchemeContext';
import { DirectionProvider } from '@/ui/contexts/DirectionContext';
import { ThemeProvider, useThemeContext } from '@/ui/contexts/ThemeContext';
import type { UIProviderProps } from './UIProvider.types';
import { MantineProvider } from '@mantine/core';

function ThemedMantineProvider({ ...props }: UIProviderProps) {
  const { theme } = useThemeContext();

  const children = props.children;
  const defaultColorScheme = props.defaultColorScheme || 'auto';

  return (
    <MantineProvider theme={theme} defaultColorScheme={defaultColorScheme}>
      <ColorSchemeProvider>
        <DirectionProvider>{children}</DirectionProvider>
      </ColorSchemeProvider>
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
