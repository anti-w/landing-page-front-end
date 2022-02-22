import P from 'prop-types';
import * as Styled from './styles';

export const Teste = ({ children }) => {
  return (
    <Styled.Container>
      <>{children}</>
    </Styled.Container>
  );
};

Teste.propTypes = {
  children: P.node.isRequired,
};
