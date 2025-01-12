import { DEFAULT_PROPS } from '@/ui/components/Title/Title';
import type { TitleProps } from '@/ui/components/Title/Title.types';
import type { MantineThemeComponent } from '@mantine/core';

const Title: MantineThemeComponent = {
  defaultProps: {
    ...DEFAULT_PROPS,
    textWrap: 'balance',
  } as TitleProps,
};

export default Title;
