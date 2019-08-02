import React from 'react';
import styled from 'styled-components';
import Store from '../../stores';
import useStore from '../../lib/hooks/useStore';
import SourceCode from '../molecules/SourceCode';
import ResultConvert from '../molecules/ResultConvert';

const ResultWrapper = styled.section`
  overflow-y: auto;
  position: relative;
  margin-top: ${props => (props.done ? '0vh' : '-100vh')};
  height: inherit;
  background-color: #2f3542;
  transition: margin-top 0.5s ease-in-out;
`;

function Result() {
  const { base } = useStore(Store);

  return (
    <Store.Consumer>
      {() => (
        <ResultWrapper done={base.done}>
          <SourceCode />
          <ResultConvert onConvertMode={base.onConvertMode} />
        </ResultWrapper>
      )}
    </Store.Consumer>
  );
}

export default Result;
