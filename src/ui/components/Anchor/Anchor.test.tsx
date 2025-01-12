import Anchor from './Anchor';
import { render, screen } from '@test-utils';

describe('Anchor', () => {
  it('renders children correctly', () => {
    render(<Anchor href="#">Click me</Anchor>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders with correct href', () => {
    render(<Anchor href="https://example.com">Link</Anchor>);
    expect(screen.getByText('Link')).toHaveAttribute('href', 'https://example.com');
  });
});
