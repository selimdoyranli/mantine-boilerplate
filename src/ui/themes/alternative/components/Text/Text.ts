import { DEFAULT_PROPS } from '@/ui/components/Text/Text';
import type { TextProps } from '@/ui/components/Text/Text.types';
import type { MantineThemeComponent } from '@mantine/core';

const Text: MantineThemeComponent = {
  defaultProps: {
    ...DEFAULT_PROPS,
    size: 'lg',
  } as TextProps,
};

export default Text;
