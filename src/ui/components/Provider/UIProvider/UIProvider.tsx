import '@mantine/core/styles.css';

import useDirection from '@/composables/use-direction/use-direction.composable';
import useTheme from '@/composables/use-theme/use-theme.composable';
import { UIProviderProps } from './UIProvider.types';
import { DirectionProvider, MantineProvider } from '@mantine/core';

export default function UIProvider({ children }: UIProviderProps) {
  const { currentTheme } = useTheme();
  const { direction } = useDirection();

  return (
    <DirectionProvider initialDirection={direction}>
      <div dir={direction} style={{ width: '100%', height: '100%' }}>
        <MantineProvider theme={currentTheme} defaultColorScheme="auto">
          {children}
        </MantineProvider>
      </div>
    </DirectionProvider>
  );
}
