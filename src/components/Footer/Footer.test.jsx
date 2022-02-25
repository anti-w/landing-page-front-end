import { screen } from '@testing-library/react';
import { Footer } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Footer />', () => {
  it('should be tested', () => {
    const { container } = renderTheme(
      <Footer html={'<h1>Olá</h1>'} />,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
