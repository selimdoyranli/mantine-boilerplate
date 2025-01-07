import { render, screen, userEvent } from '@test-utils';
import I18nTabs from './I18nTabs';

describe('I18nTabs', () => {
  it('renders English and Turkish tabs', () => {
    render(
      <I18nTabs>
        <I18nTabs.en>English Content</I18nTabs.en>
        <I18nTabs.tr>Turkish Content</I18nTabs.tr>
      </I18nTabs>
    );

    expect(screen.getByText('🇺🇸 English')).toBeInTheDocument();
    expect(screen.getByText('🇹🇷 Türkçe')).toBeInTheDocument();
  });

  it('shows English content by default', () => {
    render(
      <I18nTabs>
        <I18nTabs.en>English Content</I18nTabs.en>
        <I18nTabs.tr>Turkish Content</I18nTabs.tr>
      </I18nTabs>
    );

    expect(screen.getByText('English Content')).toBeInTheDocument();
    expect(screen.queryByText('Turkish Content')).not.toBeInTheDocument();
  });

  it('switches between languages when tabs are clicked', async () => {
    render(
      <I18nTabs>
        <I18nTabs.en>English Content</I18nTabs.en>
        <I18nTabs.tr>Turkish Content</I18nTabs.tr>
      </I18nTabs>
    );

    // Click Turkish tab
    await userEvent.click(screen.getByText('🇹🇷 Türkçe'));
    expect(screen.getByText('Turkish Content')).toBeInTheDocument();
    expect(screen.queryByText('English Content')).not.toBeInTheDocument();

    // Click English tab
    await userEvent.click(screen.getByText('🇺🇸 English'));
    expect(screen.getByText('English Content')).toBeInTheDocument();
    expect(screen.queryByText('Turkish Content')).not.toBeInTheDocument();
  });
});
