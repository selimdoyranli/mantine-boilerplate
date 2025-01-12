import '@mantine/core/styles.css';

import useTheme from '@/composables/use-theme/use-theme.composable';
import { DirectionProvider, MantineProvider } from '@mantine/core';

export default function UIProvider({ children }: { children: React.ReactNode }) {
  const { currentTheme } = useTheme();

  return (
    <DirectionProvider>
      <MantineProvider theme={currentTheme} defaultColorScheme="auto">
        {children}
      </MantineProvider>
    </DirectionProvider>
  );
}
