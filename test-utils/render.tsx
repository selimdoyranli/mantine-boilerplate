import { render as testingLibraryRender } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';

import defaultTheme from '@/theme/themes/default/default.theme';

export function render(ui: React.ReactNode) {
  return testingLibraryRender(ui, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider theme={defaultTheme} defaultColorScheme='auto'>{children}</MantineProvider>
    ),
  });
}
