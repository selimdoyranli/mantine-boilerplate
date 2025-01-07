import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from '@/Router';

import useTheme from '@/composables/use-theme/use-theme.composable';

export default function App() {
  const { currentTheme } = useTheme();
  
  return (
    <MantineProvider theme={currentTheme} defaultColorScheme='auto'>
      <Router />
    </MantineProvider>
  );
}
