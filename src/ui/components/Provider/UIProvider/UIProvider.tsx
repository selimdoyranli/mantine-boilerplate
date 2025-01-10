import '@mantine/core/styles.css';

import useTheme from '@/composables/use-theme/use-theme.composable';
import { MantineProvider } from '@mantine/core';

export default function UIProvider({ children }: { children: React.ReactNode }) {
  const { currentTheme } = useTheme();

  return (
    <MantineProvider theme={currentTheme} defaultColorScheme="auto">
      {children}
    </MantineProvider>
  );
}
