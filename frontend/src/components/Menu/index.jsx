import P from 'prop-types'
import { Logo } from '../Logo';
import { NavLinks } from '../NavLinks';
import { SectionContainer } from '../SectionContainer';
import * as Styled from './styles'
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import {useState} from 'react'

export const Menu= ({links =[], logoData}) => {

  const [visible,setVisible] = useState(false);

    return(
      <>
        <Styled.Button visible={visible} onClick={() =>setVisible(true)}>
          {visible ? (
            <CloseIcon />
          ) : (
            <MenuIcon/>)
          }
        </Styled.Button>
        <Styled.Container visible={visible} onClick ={() => setVisible(false)}>
          <SectionContainer>
            <Styled.MenuContainer>
              <Logo {...logoData}/>
              <NavLinks links={links}/>
            </Styled.MenuContainer>
          </SectionContainer>
        </Styled.Container>
      </>
    );

};
