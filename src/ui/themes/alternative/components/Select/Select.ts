import { DEFAULT_PROPS } from '@/ui/components/Select/Select';
import type { SelectProps } from '@/ui/components/Select/Select.types';
import type { MantineThemeComponent } from '@mantine/core';

const Select: MantineThemeComponent = {
  defaultProps: {
    ...DEFAULT_PROPS,
    size: 'xl',
  } as SelectProps,
};

export default Select;
