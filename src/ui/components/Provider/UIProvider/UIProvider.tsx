import '@mantine/core/styles.css';

import useTheme from '@/composables/use-theme/use-theme.composable';
import { UIProviderProps } from './UIProvider.types';
import { DirectionProvider, MantineProvider } from '@mantine/core';

export default function UIProvider({ children }: UIProviderProps) {
  const { currentTheme } = useTheme();

  return (
    <DirectionProvider>
      <MantineProvider theme={currentTheme} defaultColorScheme="auto">
        {children}
      </MantineProvider>
    </DirectionProvider>
  );
}
