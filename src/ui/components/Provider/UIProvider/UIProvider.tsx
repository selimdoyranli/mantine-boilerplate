import '@mantine/core/styles.css';

import { ColorSchemeProvider } from '@/ui/contexts/ColorSchemeContext';
import { DirectionProvider } from '@/ui/contexts/DirectionContext';
import { ThemeProvider, useThemeContext } from '@/ui/contexts/ThemeContext';
import { UIProviderProps } from './UIProvider.types';
import { MantineProvider } from '@mantine/core';

function ThemedMantineProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeContext();

  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}

export default function UIProvider({ children }: UIProviderProps) {
  return (
    <ThemeProvider>
      <MantineProvider>
        <ColorSchemeProvider>
          <DirectionProvider>
            <ThemedMantineProvider>{children}</ThemedMantineProvider>
          </DirectionProvider>
        </ColorSchemeProvider>
      </MantineProvider>
    </ThemeProvider>
  );
}
