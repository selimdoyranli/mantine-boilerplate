import Text from './Text';
import { render, screen } from '@test-utils';

describe('Text', () => {
  it('renders children correctly', () => {
    render(<Text>Sample text</Text>);
    expect(screen.getByText('Sample text')).toBeInTheDocument();
  });

  it('applies correct size class', () => {
    render(<Text size="xl">Large text</Text>);
    const text = screen.getByText('Large text');
    expect(text).toHaveClass('mantine-Text-root');
  });
});
