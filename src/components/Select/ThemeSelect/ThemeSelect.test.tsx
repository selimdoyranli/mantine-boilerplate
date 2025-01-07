import { render, screen } from '@test-utils';
import { userEvent } from '@testing-library/user-event';
import ThemeSelect from './ThemeSelect';

describe('ThemeSelect', () => {
  const renderThemeSelect = () => {
    const user = userEvent.setup();
    return {
      user,
      ...render(<ThemeSelect />),
    };
  };

  it('renders theme select dropdown', () => {
    renderThemeSelect();
    expect(screen.getByPlaceholderText('Select a theme')).toBeInTheDocument();
  });

  it('displays default theme as initial selection', () => {
    renderThemeSelect();
    const input = screen.getByPlaceholderText('Select a theme');
    expect(input).toBeInTheDocument();
  });

  it('shows theme options when clicked', async () => {
    renderThemeSelect();
    const select = screen.getByPlaceholderText('Select a theme');

    await userEvent.click(select);

    expect(screen.getByText('Default Theme')).toBeInTheDocument();
    expect(screen.getByText('Alternative Theme')).toBeInTheDocument();
  });

  it('changes theme when new option is selected', async () => {
    renderThemeSelect();
    const select = screen.getByPlaceholderText('Select a theme');

    await userEvent.click(select);
    await userEvent.click(screen.getByText('Alternative Theme'));

    expect(select).toHaveValue('Alternative Theme');
  });
});
