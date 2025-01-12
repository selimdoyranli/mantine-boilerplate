import { DEFAULT_PROPS } from '@/ui/components/Anchor/Anchor';
import type { AnchorProps } from '@/ui/components/Anchor/Anchor.types';
import type { MantineThemeComponent } from '@mantine/core';

const Anchor: MantineThemeComponent = {
  defaultProps: {
    ...DEFAULT_PROPS,
  } as AnchorProps,
};

export default Anchor;
