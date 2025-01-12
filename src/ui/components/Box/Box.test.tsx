import Box from './Box';
import { render, screen } from '@test-utils';

describe('Box', () => {
  it('renders children correctly', () => {
    render(<Box>Content</Box>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
