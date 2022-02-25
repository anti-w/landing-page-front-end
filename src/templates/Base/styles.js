import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding-top: 7rem;
    @media ${theme.media.lteMedium} {
      padding-top: 0;
    }
  `}
`;
