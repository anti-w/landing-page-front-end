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
  sectionId = '',
}) => {
  return (
    <SectionBackground
      background={background}
      sectionId={sectionId}
    >
      <Styled.Container>
        <Heading
          size="huge"
          as="h2"
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
                as="h3"
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
  sectionId: P.string,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    }),
  ).isRequired,
};
