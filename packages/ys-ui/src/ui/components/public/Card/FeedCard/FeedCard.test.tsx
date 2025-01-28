import FeedCard from './FeedCard';
import { render, screen } from '@test-utils';

describe('FeedCard', () => {
  const defaultProps = {
    title: 'Test Title',
    description: 'Test Description',
    image: 'test-image.jpg',
  };

  it('renders with default props', () => {
    render(<FeedCard {...defaultProps} />);

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
    expect(screen.getByAltText(defaultProps.title)).toHaveAttribute('src', defaultProps.image);
    expect(screen.getByText('Trending')).toBeInTheDocument();
    expect(screen.getByText('Read more')).toBeInTheDocument();
  });

  it('renders with default image when image prop is not provided', () => {
    const propsWithoutImage = {
      title: 'Test Title',
      description: 'Test Description',
    };

    render(<FeedCard {...propsWithoutImage} />);

    expect(screen.getByAltText(propsWithoutImage.title)).toHaveAttribute(
      'src',
      'https://loremflickr.com/600/250'
    );
  });

  it('applies custom className', () => {
    const customProps = {
      ...defaultProps,
      className: 'custom-class',
    };

    render(<FeedCard {...customProps} />);

    expect(document.querySelector('.custom-class')).toBeInTheDocument();
  });
});
