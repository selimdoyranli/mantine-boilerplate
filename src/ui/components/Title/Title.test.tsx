import Title from './Title';
import { render, screen } from '@test-utils';

describe('Title', () => {
  it('renders children correctly', () => {
    render(<Title>Hello World</Title>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('renders with correct heading level', () => {
    render(<Title order={2}>Heading</Title>);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });
});
