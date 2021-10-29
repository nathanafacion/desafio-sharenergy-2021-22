import styled, {css} from 'styled-components';
import {Title} from '../Heading/styles';
import {Title as HeadingContainer} from '../Heading/styles';

export const Container = styled.div`
  ${({theme}) => css`
    margin-top: 4.8rem;
    display:grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: ${theme.spacings.large};

    @media ${theme.media.lteMedium}{
      grid-template-columns: 1fr;
      text-align: center;
    }

    ${Title}{
      margin-bottom: ${theme.spacings.xlarge};
    }
  `}
`;

export const LegendTitle =  styled.span`
  ${({theme}) => css`
  display: block;
  font-weight: bold;
  font-size: 1.6rem;
  color: ${theme.colors.white};
  `}
`;


export const Legend =  styled.span`
  ${({theme}) => css`
  display: block;
  font-size: 1.2rem;
  color: ${theme.colors.white};
  `}
`;

export const Description =  styled.div`
  ${({theme}) => css`
  font-size: ${theme.font.sizes.medium};
  color: ${theme.colors.black};
  background-color:'blue';
  margin-bottom:3.2rem;
  `}
`;

export const TextContainer = styled.div`
  ${({theme}) => css`
    @media ${theme.media.lteMedium}{
      margin-bottom: ${theme.spacings.large};
    }
  `}
`;
