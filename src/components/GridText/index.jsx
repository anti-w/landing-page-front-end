import P from 'prop-types';

import * as Styled from './styles';

import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../Text';

export const GridText = ({
  title,
  description,
  grid,
  background = false,
}) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading
          size="huge"
          uppercase
          colorDark={!background}
        >
          {title}
        </Heading>
        <Text>{description}</Text>
        <Styled.Grid>
          {grid.map((el) => (
            <Styled.GridElement key={el.title}>
              <Heading
                colorDark={!background}
                size="medium"
              >
                {el.title}
              </Heading>
              <Text>{el.description}</Text>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridText.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  background: P.bool,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
};
