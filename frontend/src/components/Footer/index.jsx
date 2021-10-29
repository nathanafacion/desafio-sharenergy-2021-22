import P from 'prop-types';
import * as Styled from './styles';
import {TextComponent} from '../TextComponent';
import {SectionContainer} from '../SectionContainer';

export const Footer = ({text}) => {
  return(
      <Styled.Container>
        <SectionContainer>
           {text} 
        </SectionContainer>
      </Styled.Container>
  );
;}


Footer.propTypes = {
    text: P.string.isRequired,
};
