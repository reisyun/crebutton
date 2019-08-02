import React from 'react';
import styled, { css } from 'styled-components';
import Store from '../../stores';
import useStore from '../../lib/hooks/useStore';
import CopyButton from '../molecules/CopyButton';

const CopyWrapper = styled.section`
  z-index: 999;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f2f6;
  opacity: 0;
  visibility: hidden;
  transition-property: opacity, visibility;
  transition-duration: 0.5s, 0.5s;

  ${props =>
    props.done &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

function Copy() {
  const { base } = useStore(Store);

  return (
    <Store.Consumer>
      {() => (
        <CopyWrapper done={base.done}>
          <CopyButton />
        </CopyWrapper>
      )}
    </Store.Consumer>
  );
}

export default Copy;
