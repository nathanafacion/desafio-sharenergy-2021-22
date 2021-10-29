import styled, {css} from 'styled-components';
import {Container as TextComponent} from '../TextComponent/styles';
import {Container as SectionContainer} from '../SectionContainer/styles';

export const Container = styled.footer`
  ${({theme}) => css`
    text-align: center;
    border-topo: 0.1rem solid ${theme.colors.mediumGray};

    p {
      color: inherit;
      text-decoration:none;
      text-align: center;
    }

    > ${TextComponent}{
      font-size: ${theme.font.sizes.small};
      text-align: center;

      padding: ${theme.spacings.small};
    }

    > ${SectionContainer}{
      text-align: center;
      padding: ${theme.spacings.small};
    }

  `}
`;
