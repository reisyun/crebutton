import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { pageTransition } from '../../modules/base';
import { color, shape, effect, transform } from '../../assets/svg';
import ContentItem from '../../components/molecules/ContentItem';

const ContentWrapper = styled.nav`
  display: flex;
  flex-direction: column;
`;

function Content() {
  const dispatch = useDispatch();

  const onPageTransition = useCallback(() => {
    return dispatch(pageTransition());
  }, [dispatch]);

  const contentList = contents.map(({ name, icon }) => (
    <ContentItem
      name={name}
      icon={icon}
      onPageTransition={onPageTransition}
      key={`content-${name}`}
    />
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
