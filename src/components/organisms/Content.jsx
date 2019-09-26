import React from 'react';
import styled from 'styled-components';
import { color, shape, effect, transform } from '../../assets/svg';
import ContentItem from '../../components/molecules/ContentItem';

const ContentWrapper = styled.nav`
  display: flex;
  flex-direction: column;
`;

function Content() {
  const contentList = contents.map(({ name, icon }) => (
    <ContentItem name={name} icon={icon} key={`content-${name}`} />
  ));

  return <ContentWrapper>{contentList}</ContentWrapper>;
}

const contents = [
  {
    name: 'color',
    icon: color,
  },
  {
    name: 'shape',
    icon: shape,
  },
  {
    name: 'effect',
    icon: effect,
  },
  {
    name: 'transform',
    icon: transform,
  },
];

export default Content;
