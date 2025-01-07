import { render, screen } from '@test-utils';
import WelcomeBanner from './WelcomeBanner';

describe('Welcome component', () => {
  it('has correct Vite guide link', () => {
    render(<WelcomeBanner />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/vite/'
    );
  });
});
