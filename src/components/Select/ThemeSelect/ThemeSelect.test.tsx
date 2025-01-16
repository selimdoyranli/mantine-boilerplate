import { ThemeKeyEnum } from '@/enums';
import { useTheme } from '@/ui/components/Provider/ThemeProvider/ThemeProvider';
import ThemeSelect from './ThemeSelect';
import { render, screen, userEvent } from '@test-utils';
import { beforeEach, describe, it, vi } from 'vitest';

// Mock the entire ThemeProvider module
vi.mock('@/ui/components/Provider/ThemeProvider/ThemeProvider', () => ({
  useTheme: vi.fn(),
  default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('ThemeSelect', () => {
  const mockSetSelectedTheme = vi.fn();
  const mockOnChange = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    (useTheme as any).mockReturnValue({
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
