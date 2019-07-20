import React from 'react';
import { Link } from 'react-router-dom';
import { color, shape, effect, transform } from '../assets/svg';
import ContentItem from '../components/molecules/ContentItem';

function Main() {
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

  return contents.map(({ name, svg }) => (
    <Link key={name} to={`/${name}`}>
      <ContentItem key={`content-${name}`} name={name} svg={svg} />
    </Link>
  ));
}

export default Main;
