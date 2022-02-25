import { screen } from '@testing-library/react';
import { Base } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Base />', () => {
  it('should be tested', () => {
    renderTheme(<Base>Chlidren</Base>);
    expect(screen.getByRole('div')).toBeInTheDocument();
  });
});
