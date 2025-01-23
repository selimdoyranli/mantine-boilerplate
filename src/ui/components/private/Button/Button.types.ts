export interface ButtonProps {
  className?: string;
  classNames?: {
    root?: string;
    loader?: string;
    inner?: string;
    section?: string;
    label?: string;
  };
  children?: React.ReactNode;
  variant?: 'default' | 'filled' | 'outline';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
