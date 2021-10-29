import styled, {css} from 'styled-components';

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    align-content: center;
    margin-right: 10%;

    @media ${theme.media.lteMedium}{
        flex-flow: column wrap;
        align-content: center;
    }
  `}
`;
