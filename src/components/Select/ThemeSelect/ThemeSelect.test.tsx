import { render, screen } from '@test-utils';
import { userEvent } from '@testing-library/user-event';
import ThemeSelect from './ThemeSelect';
import { ThemeKeyEnum } from '@/enums';

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
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('displays default theme as initial selection', () => {
    renderThemeSelect();
    expect(screen.getByRole('combobox')).toHaveValue(ThemeKeyEnum.Default);
  });

  it('shows theme options when clicked', async () => {
    renderThemeSelect();
    const select = screen.getByRole('combobox');
    
    await userEvent.click(select);
    
    expect(screen.getByText('Default Theme')).toBeInTheDocument();
    expect(screen.getByText('Alternative Theme')).toBeInTheDocument();
  });

  it('changes theme when new option is selected', async () => {
    renderThemeSelect();
    const select = screen.getByRole('combobox');
    
    await userEvent.click(select);
    await userEvent.click(screen.getByText('Alternative Theme'));
    
    expect(select).toHaveValue(ThemeKeyEnum.Alternative);
  });
});
