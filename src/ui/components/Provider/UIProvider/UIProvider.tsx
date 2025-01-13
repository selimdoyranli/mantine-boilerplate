import '@mantine/core/styles.css';

import { DirectionProvider } from '@/ui/contexts/DirectionContext';
import { ThemeProvider, useThemeContext } from '@/ui/contexts/ThemeContext';
import { UIProviderProps } from './UIProvider.types';
import { MantineProvider } from '@mantine/core';

function ThemedMantineProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeContext();

  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      {children}
    </MantineProvider>
  );
}

export default function UIProvider({ children }: UIProviderProps) {
  return (
    <ThemeProvider>
      <DirectionProvider>
        <ThemedMantineProvider>{children}</ThemedMantineProvider>
      </DirectionProvider>
    </ThemeProvider>
  );
}
