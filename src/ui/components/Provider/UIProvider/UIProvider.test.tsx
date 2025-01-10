import UIProvider from './UIProvider';
import { render, screen } from '@test-utils';

describe('UIProvider', () => {
  it('renders children correctly', () => {
    render(<UIProvider>Test</UIProvider>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
