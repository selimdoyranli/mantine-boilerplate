import { render, screen } from '@test-utils';
import I18nTabs from './I18nTabs';

describe('I18nTabs', () => {
  it('renders successfully', () => {
    render(
      <I18nTabs>
        <I18nTabs.en>English Content</I18nTabs.en>
        <I18nTabs.tr>Turkish Content</I18nTabs.tr>
      </I18nTabs>
    );

    expect(screen.getByText('🇺🇸 English')).toBeInTheDocument();
  });
});
