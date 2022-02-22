import { screen } from '@testing-library/react';
import { Text } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Text />', () => {
  it('should render a text as components children', () => {
    renderTheme(<Text>Children</Text>);
    expect(
      screen.getByText('Children'),
    ).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <Text>Children</Text>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
