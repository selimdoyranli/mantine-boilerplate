import UIProvider from '@/ui/components/Provider/UIProvider/UIProvider';
import { render as testingLibraryRender } from '@testing-library/react';

export function render(ui: React.ReactNode) {
  return testingLibraryRender(ui, {
    wrapper: ({ children }: { children: React.ReactNode }) => <UIProvider>{children}</UIProvider>,
  });
}
