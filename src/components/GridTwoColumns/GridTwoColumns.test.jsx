import { screen } from '@testing-library/react';

import { GridTwoColumns } from '.';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<GridTwoColumns />', () => {
  it('should match a snapshot of a grid with two columns', () => {
    const { container } = renderTheme(
      <GridTwoColumns {...mock} />,
    );
    expect(container).toMatchSnapshot();
  });
});
