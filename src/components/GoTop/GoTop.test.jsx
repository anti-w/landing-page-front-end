import { screen } from '@testing-library/react';
import { GoTop } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<GoTop />', () => {
  it('should render a button to go to the aplication top', () => {
    const { container } = renderTheme(
      <GoTop>Chlidren</GoTop>,
    );
    expect(
      screen.getByRole('link', { name: 'Go to top' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Go to top' }),
    ).toHaveAttribute('href', '#');
    expect(container).toMatchSnapshot();
  });
});
