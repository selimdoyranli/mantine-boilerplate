import { render, screen, userEvent } from '@test-utils';
import ColorSchemeToggleButtonGroup from './ColorSchemeToggleButtonGroup';

describe('ColorSchemeToggleButtonGroup', () => {
  it('renders three color scheme buttons', () => {
    render(<ColorSchemeToggleButtonGroup />);

    expect(screen.getByText('Light')).toBeInTheDocument();
    expect(screen.getByText('Dark')).toBeInTheDocument();
    expect(screen.getByText('Auto')).toBeInTheDocument();
  });

  it('calls setColorScheme with correct scheme when buttons are clicked', async () => {
    render(<ColorSchemeToggleButtonGroup />);
    const user = userEvent.setup();

    // Click Light button
    await user.click(screen.getByText('Light'));

    // Click Dark button
    await user.click(screen.getByText('Dark'));

    // Click Auto button
    await user.click(screen.getByText('Auto'));
  });
});
