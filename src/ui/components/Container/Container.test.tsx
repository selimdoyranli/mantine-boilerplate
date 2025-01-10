import Container from './Container';
import { render, screen } from '@test-utils';

describe('Container', () => {
  it('renders children correctly', () => {
    render(<Container>Test</Container>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
