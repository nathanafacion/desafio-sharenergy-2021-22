import P from 'prop-types';
import {Link} from 'react-router-dom';
import * as Styled from './styles';
import {Heading} from '../Heading';

export const Logo =({text, srcImg='',link}) => {

  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>
      {!!srcImg && <img src={srcImg} alt={text} />}
      {!srcImg && text}
      </Styled.Container>
    </Heading>
  );

};

Logo.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};
