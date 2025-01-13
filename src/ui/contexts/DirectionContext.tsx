import { createContext, ReactNode, useContext, useState } from 'react';

type Direction = 'ltr' | 'rtl';

interface DirectionContextType {
  direction: Direction;
  setDirection: (direction: Direction) => void;
}

const DirectionContext = createContext<DirectionContextType | undefined>(undefined);

export function DirectionProvider({ children }: { children: ReactNode }) {
  const [direction, setDirection] = useState<Direction>('ltr');

  return (
    <DirectionContext.Provider
      value={{
        direction,
        setDirection,
      }}
    >
      <div dir={direction} style={{ width: '100%', height: '100%' }}>
        {children}
      </div>
    </DirectionContext.Provider>
  );
}

export function useDirectionContext() {
  const context = useContext(DirectionContext);
  if (context === undefined) {
    throw new Error('useDirectionContext must be used within a DirectionProvider');
  }
  return context;
}
