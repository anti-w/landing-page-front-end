import P from 'prop-types';

import * as Styled from './styles';

import { Heading } from '../Heading';
import { Text } from '../Text';
import { SectionBackground } from '../SectionBackground';

export const GridImage = ({
  title,
  description,
  grid,
  background = false,
}) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading as="h2" colorDark={!background}>
          {title}
        </Heading>
        <Text>{description}</Text>
      </Styled.Container>
      <Styled.Grid>
        {grid.map((el) => (
          <Styled.GridElement key={el.altText}>
            <Styled.Image
              alt={el.altText}
              src={el.srcImg}
            />
          </Styled.GridElement>
        ))}
      </Styled.Grid>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  background: P.bool,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImg: P.string.isRequired,
    }),
  ).isRequired,
};
