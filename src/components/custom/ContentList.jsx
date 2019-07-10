import React from 'react';
import styled from 'styled-components';
import ContentItem from './ContentItem';
import color from '../../assets/images/color.svg';
import shape from '../../assets/images/shape.svg';
import effect from '../../assets/images/effect.svg';
import transform from '../../assets/images/transform.svg';

const ContentListBlock = styled.nav`
  position: relative;
  margin-top: 1.25rem;
  padding: 0 1.5rem;
`;

function ContentList() {
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
    <ContentListBlock>
      {contents.map(({ name, svg }) => (
        <ContentItem key={`content-${name}`} name={name} svg={svg} />
      ))}
    </ContentListBlock>
  );
}

export default ContentList;
