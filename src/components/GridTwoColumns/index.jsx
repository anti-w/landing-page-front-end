import P from 'prop-types';

import * as Styled from './styles';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { Text } from '../Text';

export const GridTwoColumns = ({
  title,
  text,
  srcImg,
  background = false,
  sectionId = '',
}) => {
  return (
    <SectionBackground
      sectionId={sectionId}
      background={background}
    >
      <Styled.Container background={background}>
        <Styled.TextContainer>
          <Heading uppercase colorDark={!background}>
            {title}
          </Heading>
          <Text>{text}</Text>
        </Styled.TextContainer>
        <Styled.ImgContainer>
          <Styled.Image src={srcImg} alt={title} />
        </Styled.ImgContainer>
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumns.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  srcImg: P.string.isRequired,
  background: P.bool,
  sectionId: P.string,
};
