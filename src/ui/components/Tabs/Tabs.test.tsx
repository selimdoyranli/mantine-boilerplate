import Tabs from './Tabs';
import { render, screen } from '@test-utils';

describe('Tabs', () => {
  const mockContent = {
    tab: 'Test Tab',
    panel: 'Test Panel Content',
  };

  it('renders basic tabs correctly', () => {
    render(
      <Tabs defaultValue="test">
        <Tabs.List>
          <Tabs.Tab value="test">{mockContent.tab}</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="test">{mockContent.panel}</Tabs.Panel>
      </Tabs>
    );

    expect(screen.getByText(mockContent.tab)).toBeInTheDocument();
    expect(screen.getByText(mockContent.panel)).toBeInTheDocument();
  });
});
