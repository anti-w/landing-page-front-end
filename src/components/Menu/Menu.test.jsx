import { screen, fireEvent } from '@testing-library/react';

import { Menu } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

import linksMock from '../NavLink/mock';

const logoData = {
  text: 'Logo',
  link: '#target',
};

describe('<Menu />', () => {
  it('should render Logo and Menu and match snapshot', () => {
    const { container } = renderTheme(
      <Menu links={linksMock} logoData={logoData}>
        Children
      </Menu>,
    );
    expect(
      screen.getByRole('heading', { name: 'Logo' }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('navigation', { name: 'Main menu' }),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });

  it('should render menu mobile when screen less then 768px and a button for open and close the menu', () => {
    const { container } = renderTheme(
      <Menu links={linksMock} logoData={logoData}>
        Children
      </Menu>,
    );
    const button = screen.getByLabelText('Open/Close Menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium,
    });

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(
      screen.getByLabelText('Open menu'),
    ).toBeInTheDocument();

    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.lteMedium,
    });
    expect(
      screen.getByLabelText('Close menu'),
    ).toBeInTheDocument();

    fireEvent.click(menuContainer);
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
  });

  it('should not render links', () => {
    renderTheme(<Menu logoData={logoData}>Children</Menu>);
    expect(
      screen.queryByRole('navigation', {
        name: 'Main menu',
      }).firstChild,
    ).not.toBeInTheDocument();
  });
});
