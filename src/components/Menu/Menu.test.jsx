import { screen } from '@testing-library/react';
import { Menu } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Menu />', () => {
  it('should be tested', () => {
    renderTheme(<Menu>Chlidren</Menu>);
    expect(screen.getByRole('div')).toBeInTheDocument();
  });
});
