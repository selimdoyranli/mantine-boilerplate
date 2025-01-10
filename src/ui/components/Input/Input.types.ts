export interface InputProps {
  id?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  error?: boolean;
  required?: boolean;
  variant?: 'default' | 'filled';
  placeholder?: string;
}
