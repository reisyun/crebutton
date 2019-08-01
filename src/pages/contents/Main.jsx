import React from 'react';
import { color, shape, effect, transform } from '../../assets/svg';
import ContentItem from '../../components/molecules/ContentItem';
import CustomTemplate from '../../components/templates/CustomTemplate';
import Header from '../../components/organisms/Header';

function Main() {
  const contentList = contents.map(({ name, icon }) => (
    <ContentItem name={name} icon={icon} key={`content-${name}`} />
  ));

  return (
    <CustomTemplate header={<Header title="custom" />}>
      {contentList}
    </CustomTemplate>
  );
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

export default Main;