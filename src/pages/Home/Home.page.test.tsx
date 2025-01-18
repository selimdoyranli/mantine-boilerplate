import HomePage from './Home.page';
import { render, screen } from '@test-utils';
import { BrowserRouter } from 'react-router-dom';

describe('HomePage', () => {
  const renderWithRouter = () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
  };

  it('renders welcome banner', () => {
    renderWithRouter();
    expect(screen.getByText(/mantine-boilerplate/)).toBeInTheDocument();
  });

  it('renders theme select', () => {
    renderWithRouter();
    expect(screen.getByText('Theme Select')).toBeInTheDocument();
  });

  it('renders buttons', () => {
    renderWithRouter();
    expect(screen.getAllByText('Button')).toHaveLength(3);
  });
});
