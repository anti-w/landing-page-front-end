import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    font-size: ${theme.fonts.sizes.small};
    text-align: center;
  `}
`;
