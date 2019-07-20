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

function SlideBar({ slideBar, count = 4 }) {
  const _createBar = num => {
    let arr = [];
    for (let i = 1; i <= num; i = i + 1) arr.push(i);

    // 임시 배열을 만들어 갯수대로 map 순환
    return arr.map(num => (
      <Bar key={`slideBar-${num}`} count={num} slideBar={slideBar} />
    ));
  };

  return <SlideBarBlock>{_createBar(count)}</SlideBarBlock>;
}

export default SlideBar;
