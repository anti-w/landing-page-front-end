import P from 'prop-types';

import * as Styled from './styles';

import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { Text } from '../Text';

export const GridContent = ({
  title,
  html,
  background = false,
}) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <Styled.Html>
          <Text>{html}</Text>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
};
