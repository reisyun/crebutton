import React from 'react';
import styled from 'styled-components';
import ContentItem from './ContentItem';

const ContentListBlock = styled.nav`
  position: relative;
  margin-top: 1.25rem;
`;

function ContentList({ contents = [] }) {
  return (
    <ContentListBlock>
      {contents.map(({ name, svg }) => (
        <ContentItem key={`content-${name}`} name={name} svg={svg} />
      ))}
    </ContentListBlock>
  );
}

export default ContentList;
