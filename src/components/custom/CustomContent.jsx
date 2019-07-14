import React from 'react';
import styled from 'styled-components';
import color from '../../assets/images/color.svg';
import shape from '../../assets/images/shape.svg';
import effect from '../../assets/images/effect.svg';
import transform from '../../assets/images/transform.svg';
import CustomContentItem from './CustomContentItem';

const CustomContentBlock = styled.nav`
  position: relative;
  margin-top: 1.25rem;
  padding: 0 1.5rem;
`;

function CustomContent() {
  const contents = [
    {
      name: 'color',
      svg: color,
    },
    {
      name: 'shape',
      svg: shape,
    },
    {
      name: 'effect',
      svg: effect,
    },
    {
      name: 'transform',
      svg: transform,
    },
  ];

  return (
    <CustomContentBlock>
      {contents.map(({ name, svg }) => (
        <CustomContentItem key={`content-${name}`} name={name} svg={svg} />
      ))}
    </CustomContentBlock>
  );
}

export default CustomContent;
