import Select from './Select';
import { render, screen } from '@test-utils';

describe('Select', () => {
  const mockData = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
  ];

  it('renders with label correctly', () => {
    render(<Select data={mockData} label="Test Label" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('renders with placeholder correctly', () => {
    render(<Select data={mockData} placeholder="Select an option" />);
    expect(screen.getByPlaceholderText('Select an option')).toBeInTheDocument();
  });

  it('renders with error message', () => {
    render(<Select data={mockData} error="Error message" />);
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });
});
