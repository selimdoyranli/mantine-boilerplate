import Accordion from './Accordion';
import { render, screen } from '@test-utils';

describe('Accordion', () => {
  const mockContent = {
    label: 'Test Section',
    content: 'Test Content',
  };

  it('renders basic accordion correctly', () => {
    render(
      <Accordion>
        <Accordion.Item value="test">
          <Accordion.Control>{mockContent.label}</Accordion.Control>
          <Accordion.Panel>{mockContent.content}</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    );

    expect(screen.getByText(mockContent.label)).toBeInTheDocument();
    expect(screen.queryByText(mockContent.content)).not.toBeVisible();
  });
});
