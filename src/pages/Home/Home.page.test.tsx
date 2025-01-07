import { render, screen } from '@test-utils';
import HomePage from './Home.page';

describe('HomePage', () => {
  it('renders welcome banner', () => {
    render(<HomePage />);
    expect(screen.getByText(/mantine-boilerplate/)).toBeInTheDocument();
  });

  it('renders theme select', () => {
    render(<HomePage />);
    expect(screen.getByText('Theme Select')).toBeInTheDocument();
  });
});
