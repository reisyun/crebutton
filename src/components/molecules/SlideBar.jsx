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
  const SLIDEBAR_COUNT = 4;

  const _createBar = num => {
    let arr = [];
    // 배열에 SLIDEBAR_COUNT의 개수만큼 인자를 추가해 map 순환
    for (let i = 1; i <= num; i = i + 1) arr.push(i);
    return arr.map(num => (
      <Bar count={num} slideBar={slideBar} key={`slideBar-${num}`} />
    ));
  };

  return <SlideBarBlock>{_createBar(SLIDEBAR_COUNT)}</SlideBarBlock>;
}

export default SlideBar;
