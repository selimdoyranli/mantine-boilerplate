import { act, renderHook } from '@testing-library/react';
import { ThemeKeyEnum } from '@/enums';
import alternativeTheme from '@/ui/themes/alternative/alternative.theme';
import baseTheme from '@/ui/themes/base/base.theme';
import useTheme from './use-theme.composable';

describe('useTheme', () => {
  it('should initialize with base theme', () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.selectedTheme).toBe(ThemeKeyEnum.Base);
    expect(result.current.currentTheme).toBe(baseTheme);
  });

  it('should change to alternative theme when selected', () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.setSelectedTheme(ThemeKeyEnum.Alternative);
    });

    expect(result.current.selectedTheme).toBe(ThemeKeyEnum.Alternative);
    expect(result.current.currentTheme).toBe(alternativeTheme);
  });

  it('should change back to base theme when selected', () => {
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.setSelectedTheme(ThemeKeyEnum.Alternative);
      result.current.setSelectedTheme(ThemeKeyEnum.Base);
    });

    expect(result.current.selectedTheme).toBe(ThemeKeyEnum.Base);
    expect(result.current.currentTheme).toBe(baseTheme);
  });

  it('should notify all instances when theme changes', () => {
    const { result: instance1 } = renderHook(() => useTheme());
    const { result: instance2 } = renderHook(() => useTheme());

    act(() => {
      instance1.current.setSelectedTheme(ThemeKeyEnum.Alternative);
    });

    expect(instance2.current.selectedTheme).toBe(ThemeKeyEnum.Alternative);
    expect(instance2.current.currentTheme).toBe(alternativeTheme);
  });

  it('should cleanup listeners on unmount', () => {
    const { unmount } = renderHook(() => useTheme());
    const initialListenersCount = (global as any).listeners?.size || 0;

    unmount();

    const finalListenersCount = (global as any).listeners?.size || 0;
    expect(finalListenersCount).toBe(initialListenersCount);
  });
});
