import type { I18nTabsProps, I18nTabPanelProps } from './I18nTabs.types';

import { MantineProvider, Tabs, Box } from '@mantine/core';
import classes from './I18nTabs.module.css';

const I18nTabs: React.FC<I18nTabsProps> & {
  en: React.FC<I18nTabPanelProps>;
  tr: React.FC<I18nTabPanelProps>;
} = ({ children }) => (
  <MantineProvider>
    <Tabs defaultValue="en" classNames={classes}>
      <Tabs.List>
        <Tabs.Tab value="en">🇺🇸 English</Tabs.Tab>
        <Tabs.Tab value="tr">🇹🇷 Türkçe</Tabs.Tab>
      </Tabs.List>

      {children}
    </Tabs>
  </MantineProvider>
);

I18nTabs.en = ({ children }) => (
  <Tabs.Panel value="en">
    <Box>{children}</Box>
  </Tabs.Panel>
);

I18nTabs.tr = ({ children }) => (
  <Tabs.Panel value="tr">
    <Box>{children}</Box>
  </Tabs.Panel>
);

export default I18nTabs;
