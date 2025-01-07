import { ThemeKey } from '@/types';

export interface ThemeOption {
  value: ThemeKey;
  label: string;
}

export type ThemeOptions = ThemeOption[];
