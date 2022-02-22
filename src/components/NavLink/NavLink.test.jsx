import { screen } from '@testing-library/react';

import { NavLink } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import mock from './mock';

describe('<NavLink />', () => {
  it('should render links', () => {
    renderTheme(<NavLink links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(
      mock.length,
    );
  });

  it('should not render links', () => {
    renderTheme(<NavLink />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it('should change direction to column when screen less then 768px', () => {
    renderTheme(<NavLink links={mock} />);
    expect(
      screen.getByText(/link 1/i).parentElement,
    ).toHaveStyleRule('flex-flow', 'column wrap', {
      media: theme.media.lteMedium,
    });
  });

  it('should match snapshot', () => {
    renderTheme(<NavLink links={mock} />);
    expect(screen.getAllByRole('link')).toMatchSnapshot();
  });
});
