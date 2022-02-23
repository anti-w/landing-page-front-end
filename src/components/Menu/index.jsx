import P from 'prop-types';
import { useState } from 'react';

import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';

import * as Styled from './styles';

import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLink } from '../NavLink';

export const Menu = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Styled.Button
        aria-label="Open/Close Menu"
        visible={visible}
        onClick={() => setVisible(true)}
      >
        {visible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Styled.Button>
      <Styled.Container
        onClick={() => setVisible(false)}
        visible={visible}
      >
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <NavLink links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLink.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};
