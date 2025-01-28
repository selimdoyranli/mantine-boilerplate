import HomePage from './Home.page';
import { render, screen } from '@test-utils';

describe('HomePage', () => {
  it('renders page title correctly', () => {
    render(<HomePage />);
    expect(screen.getByText('ys-ui Demo')).toBeInTheDocument();
  });

  it('renders color scheme controls', () => {
    render(<HomePage />);
    expect(screen.getByText(/Color Scheme:/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Light' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Dark' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Auto' })).toBeInTheDocument();
  });

  it('renders theme controls', () => {
    render(<HomePage />);
    expect(screen.getByText(/Theme:/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Base' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Alternative' })).toBeInTheDocument();
  });

  it('renders feed cards', () => {
    render(<HomePage />);
    const feedCards = screen.getAllByText('Feed Card');
    expect(feedCards).toHaveLength(10);
    expect(screen.getAllByText('This is a feed card')).toHaveLength(10);
  });
});
