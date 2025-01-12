import { ThemeKey } from '@/types';

export interface ThemeSelectProps {
  onChange?: (value: string) => void;
}

export interface ThemeOption {
  value: ThemeKey;
  label: string;
}

export type ThemeOptions = ThemeOption[];
