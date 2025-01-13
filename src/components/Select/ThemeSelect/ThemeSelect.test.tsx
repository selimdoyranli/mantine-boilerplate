import { ThemeKeyEnum } from '@/enums';
import { useThemeContext } from '@/ui/contexts/ThemeContext';
import ThemeSelect from './ThemeSelect';
import { render, screen, userEvent } from '@test-utils';
import { beforeEach, describe, it, vi } from 'vitest';

// Mock the entire ThemeContext module
vi.mock('@/ui/contexts/ThemeContext', () => ({
  useThemeContext: vi.fn(),
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('ThemeSelect', () => {
  const mockSetSelectedTheme = vi.fn();
  const mockOnChange = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    (useThemeContext as any).mockReturnValue({
      selectedTheme: ThemeKeyEnum.Base,
      setSelectedTheme: mockSetSelectedTheme,
    });
  });

  it('renders Select component with theme options', () => {
    render(<ThemeSelect />);

    expect(screen.getByText('Base Theme')).toBeInTheDocument();
    expect(screen.getByText('Alternative Theme')).toBeInTheDocument();
  });

  it('calls setSelectedTheme and onChange when theme is changed', async () => {
    render(<ThemeSelect onChange={mockOnChange} />);

    const select = screen.getByRole('textbox');
    await userEvent.click(select);

    const option = screen.getByText('Alternative Theme');
    await userEvent.click(option);

    expect(mockSetSelectedTheme).toHaveBeenCalledWith(ThemeKeyEnum.Alternative);
    expect(mockOnChange).toHaveBeenCalledWith(ThemeKeyEnum.Alternative);
  });
});
