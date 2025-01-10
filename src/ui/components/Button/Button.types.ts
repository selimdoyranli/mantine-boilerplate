import type { MantineSize } from '@mantine/core';

type ButtonVariant = 'default' | 'filled' | 'outline';
type ButtonSize = MantineSize;

export interface ButtonProps {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
