import React from 'react';
import styled from 'styled-components';
import Store from '../../stores';
import useStore from '../../lib/hooks/useStore';
import Title from '../atoms/Title';
import Close from '../molecules/Close';
import TextInput from '../molecules/TextInput';

const HeaderWrapper = styled.header`
  z-index: 200;
  position: sticky;
  top: 0;
  padding: 1rem 0;
  background-color: #f1f2f6;
`;

function Header({ title }) {
  const { base } = useStore(Store);

  return (
    <Store.Consumer>
      {() => (
        <HeaderWrapper>
          {title !== 'custom' && <Close />}
          <Title>{title}</Title>
          <TextInput base={base} />
        </HeaderWrapper>
      )}
    </Store.Consumer>
  );
}

export default Header;
