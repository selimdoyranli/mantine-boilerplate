import { useEffect, useState } from 'react';
import type { DirectionStore } from './use-direction.composable.types';

let store: DirectionStore = {
  direction: 'ltr',
};

const listeners = new Set<() => void>();

const emitChange = () => {
  listeners.forEach((listener) => listener());
};

export default function useDirection() {
  const [directionState, setDirectionState] = useState(store);

  useEffect(() => {
    const listener = () => setDirectionState({ ...store });
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  const setDirection = (direction: 'ltr' | 'rtl') => {
    store = {
      direction,
    };

    emitChange();
  };

  return {
    direction: directionState.direction,
    setDirection,
  };
}
