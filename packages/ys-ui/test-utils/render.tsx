import { UIProvider } from '@/ui';
import { render as testingLibraryRender } from '@testing-library/react';

export function render(ui: React.ReactNode) {
  return testingLibraryRender(ui, {
    wrapper: ({ children }: { children: React.ReactNode }) => <UIProvider>{children}</UIProvider>,
  });
}
