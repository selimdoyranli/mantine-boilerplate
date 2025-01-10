import baseTheme from '@/ui/themes/base/base.theme';
import { render as testingLibraryRender } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';

export function render(ui: React.ReactNode) {
  return testingLibraryRender(ui, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider theme={baseTheme} defaultColorScheme="auto">
        {children}
      </MantineProvider>
    ),
  });
}
