import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, shape, effect, transform } from '../../static/svg';
import ContentItem from '../../components/molecules/ContentItem';

const ContentWrapper = styled.nav`
  display: flex;
  flex-direction: column;
`;

function Content({ onPageTransition }) {
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

Content.propTypes = {
  onPageTransition: PropTypes.func.isRequired,
};

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
