import { GridImage } from '.';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<GridImage />', () => {
  it('should render with background and match snapshot', () => {
    const { container } = renderTheme(
      <GridImage {...mock} />,
    );
    expect(container).toMatchSnapshot();
  });
  it('should render without background and match snapshot', () => {
    const { container } = renderTheme(
      <GridImage {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
