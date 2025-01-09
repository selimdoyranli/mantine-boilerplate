import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import useTheme from '@/composables/use-theme/use-theme.composable';

export default function UIProvider({ children }: { children: React.ReactNode }) {
  const { currentTheme } = useTheme();

  return (
    <MantineProvider theme={currentTheme} defaultColorScheme="auto">
      {children}
    </MantineProvider>
  );
}
