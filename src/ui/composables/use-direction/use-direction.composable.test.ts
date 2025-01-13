import useDirection from './use-direction.composable';
import { act, renderHook } from '@testing-library/react';

describe('useDirection', () => {
  it('should initialize with ltr direction', () => {
    const { result } = renderHook(() => useDirection());

    expect(result.current.direction).toBe('ltr');
  });

  it('should change to rtl direction when set', () => {
    const { result } = renderHook(() => useDirection());

    act(() => {
      result.current.setDirection('rtl');
    });

    expect(result.current.direction).toBe('rtl');
  });

  it('should change back to ltr direction when set', () => {
    const { result } = renderHook(() => useDirection());

    act(() => {
      result.current.setDirection('rtl');
      result.current.setDirection('ltr');
    });

    expect(result.current.direction).toBe('ltr');
  });

  it('should notify all instances when direction changes', () => {
    const { result: instance1 } = renderHook(() => useDirection());
    const { result: instance2 } = renderHook(() => useDirection());

    act(() => {
      instance1.current.setDirection('rtl');
    });

    expect(instance2.current.direction).toBe('rtl');
  });

  it('should cleanup listeners on unmount', () => {
    const { unmount } = renderHook(() => useDirection());
    const initialListenersCount = (global as any).listeners?.size || 0;

    unmount();

    const finalListenersCount = (global as any).listeners?.size || 0;
    expect(finalListenersCount).toBe(initialListenersCount);
  });
});
