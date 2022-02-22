import { screen } from '@testing-library/react';

import { theme } from '../../styles/theme';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Heading />', () => {
  it('should render with default value', () => {
    renderTheme(<Heading>texto</Heading>);
    const heading = screen.getByRole('heading', {
      name: 'texto',
    });
    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.fonts.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase>texto</Heading>);
    const heading = screen.getByRole('heading', {
      name: 'texto',
    });
    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(
      <Heading as="h6">texto</Heading>,
    );
    const heading = screen.getByRole('heading', {
      name: 'texto',
    });
    const h6 = container.querySelector('h6');

    expect(h6.tagName.toLowerCase()).toBe('h6');
  });

  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>texto</Heading>);
    const heading = screen.getByRole('heading', {
      name: 'texto',
    });
    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render a heading with small size', () => {
    renderTheme(<Heading size="small">texto</Heading>);
    const heading = screen.getByRole('heading', {
      name: 'texto',
    });
    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.medium,
    });
  });

  it('should render a heading with medium size', () => {
    renderTheme(<Heading size="medium">texto</Heading>);
    const heading = screen.getByRole('heading', {
      name: 'texto',
    });
    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.large,
    });
  });

  it('should render a heading with big size', () => {
    renderTheme(<Heading size="big">texto</Heading>);
    const heading = screen.getByRole('heading', {
      name: 'texto',
    });
    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.xlarge,
    });
  });

  it('should render a heading with huge size', () => {
    renderTheme(<Heading size="huge">texto</Heading>);
    const heading = screen.getByRole('heading', {
      name: 'texto',
    });
    expect(heading).toHaveStyle({
      'font-size': theme.fonts.sizes.xhuge,
    });
  });

  it('should decrease font-size on heading when screen less than 768px', () => {
    renderTheme(<Heading size="huge">texto</Heading>);
    const heading = screen.getByRole('heading', {
      name: 'texto',
    });
    expect(heading).toHaveStyleRule(
      'font-size',
      theme.fonts.sizes.xlarge,
      {
        media: theme.media.lteMedium,
      },
    );
  });
});
