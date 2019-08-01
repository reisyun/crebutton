import React from 'react';
import styled from 'styled-components';
import Bar from '../atoms/Bar';

const SlideBarBlock = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

function SlideBar({ slideBar }) {
  const BAR_COUNT = 4;

  const bars = _makeArray(BAR_COUNT).map(num => (
    <Bar slideBar={slideBar} count={num} key={`slideBar-${num}`} />
  ));

  return <SlideBarBlock>{bars}</SlideBarBlock>;
}

// BAR_COUNT 개수만큼 배열에 인자를 추가
const _makeArray = count => {
  const arr = [];
  for (let i = 1; i <= count; i = i + 1) arr.push(i);

  return arr;
};

export default SlideBar;
