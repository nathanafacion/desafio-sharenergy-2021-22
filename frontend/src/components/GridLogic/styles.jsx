import styled, {css} from 'styled-components';
import {Title} from '../Heading/styles';

export const Container = styled.div`
  ${({theme}) => css`
    display:grid;
    grid-template-columns: 3fr;
    align-items: center;
    color: ${theme.colors.mediumGray}
    gap: ${theme.spacings.large};

    @media ${theme.media.lteMedium}{
      grid-template-columns: 3fr;
      text-align: center;
    }

    ${Title}{
      margin-bottom: ${theme.spacings.xlarge};
    }
  `}
`;

export const TextContainer = styled.div`
  ${({theme}) => css`
    color: ${theme.colors.mediumGray}
    @media ${theme.media.lteMedium}{
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width:100%;
  `}
`;

export const Resultados =  styled.div`
  ${({theme}) => css`
  font-size: ${theme.font.sizes.medium};
  color: ${theme.colors.black};
  background-color:'blue';
  `}
`;

export const Description =  styled.span`
  ${({theme}) => css`
  font-size: ${theme.font.sizes.medium};
  color: ${theme.colors.black};
  `}
`;
