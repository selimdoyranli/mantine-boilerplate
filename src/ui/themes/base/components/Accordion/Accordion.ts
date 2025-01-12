import { DEFAULT_PROPS } from '@/ui/components/Accordion/Accordion';
import type { AccordionProps } from '@/ui/components/Accordion/Accordion.types';
import type { MantineThemeComponent } from '@mantine/core';

const Accordion: MantineThemeComponent = {
  defaultProps: {
    ...DEFAULT_PROPS,
  } as AccordionProps,
};

export default Accordion;
