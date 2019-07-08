import React from 'react';
import styled, { css } from 'styled-components';

const SlidebarBlock = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const Bar = styled.span`
  ${props => css`
    flex-grow: 1;
    height: 100vh;
    font-size: 0;
    background-color: #2f3542;
    transform-origin: top;
    transform: scaleY(${props.slide});
    transition: transform 0.3s ease-in-out;

    &:nth-child(${props.count}) {
      transition-delay: ${props.count * 0.1}s;
    }
  `};
`;

function Slidebar() {
  /* Slidebar count */
  const BAR_COUNT = 4;

  const _createBar = (count = 4) => {
    // 임시 배열을 만들어 갯수대로 map 순환
    let arr = [];
    for (let i = 1; i <= count; i = i + 1) arr.push(i);

    return arr.map(num => (
      <Bar key={`slidebar-${num}`} count={num} slide={1} />
    ));
  };

  return <SlidebarBlock>{_createBar(BAR_COUNT)}</SlidebarBlock>;
}

export default Slidebar;
