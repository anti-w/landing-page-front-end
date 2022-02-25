import P from 'prop-types';

import { KeyboardArrowUp } from '@styled-icons/material-outlined';

import * as Styled from './styles';

export const GoTop = () => {
  return (
    <Styled.Container
      aria-label="Go to top"
      title="Go to top"
      href="#"
    >
      <KeyboardArrowUp />
    </Styled.Container>
  );
};
