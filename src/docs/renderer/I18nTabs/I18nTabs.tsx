import Box from '@/ui/components/Box/Box';
import Tabs from '@/ui/components/Tabs/Tabs';
import classes from './I18nTabs.module.css';
import type { I18nTabPanelProps, I18nTabsProps } from './I18nTabs.types';

const I18nTabs: React.FC<I18nTabsProps> & {
  en: React.FC<I18nTabPanelProps>;
  tr: React.FC<I18nTabPanelProps>;
} = ({ children }) => (
  <Tabs defaultValue="en" classNames={classes}>
    <Tabs.List>
      <Tabs.Tab value="en">🇺🇸 English</Tabs.Tab>
      <Tabs.Tab value="tr">🇹🇷 Türkçe</Tabs.Tab>
    </Tabs.List>

    {children}
  </Tabs>
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
