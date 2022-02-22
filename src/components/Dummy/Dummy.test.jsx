import { screen } from '@testing-library/react';
import { Teste } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Teste />', () => {
  it('should be tested', () => {
    renderTheme(<Teste>Chlidren</Teste>);
    expect(screen.getByRole('div')).toBeInTheDocument();
  });
});
