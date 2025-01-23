import { ThemeKeyEnum } from '@/enums';
import { useTheme } from '@/ui/hooks';
import ThemeSelect from './ThemeSelect';
import { render, screen, userEvent } from '@test-utils';
import { beforeEach, describe, it, vi } from 'vitest';

// Update the mock to use the correct import path and create a mock function
vi.mock('@/ui/hooks', () => ({
  useTheme: vi.fn(),
}));

describe('ThemeSelect', () => {
  const mockSetActiveThemeKey = vi.fn();
  const mockOnChange = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    // Update how we set the mock return value
    vi.mocked(useTheme).mockReturnValue({
      theme: {},
      activeThemeKey: ThemeKeyEnum.Base,
      setActiveThemeKey: mockSetActiveThemeKey,
    });
  });

  it('renders Select component with theme options', () => {
    render(<ThemeSelect />);

    expect(screen.getByText('Base Theme')).toBeInTheDocument();
    expect(screen.getByText('Alternative Theme')).toBeInTheDocument();
  });

  it('calls setActiveThemeKey and onChange when theme is changed', async () => {
    render(<ThemeSelect onChange={mockOnChange} />);

    const select = screen.getByRole('textbox');
    await userEvent.click(select);

    const option = screen.getByText('Alternative Theme');
    await userEvent.click(option);

    expect(mockSetActiveThemeKey).toHaveBeenCalledWith(ThemeKeyEnum.Alternative);
    expect(mockOnChange).toHaveBeenCalledWith(ThemeKeyEnum.Alternative);
  });
});
