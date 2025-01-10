import Input from './Input';
import { render, screen } from '@test-utils';

describe('Input', () => {
  it('renders input correctly', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
