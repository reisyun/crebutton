import React from 'react';
import styled from 'styled-components';

const ContentItemBlock = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;

  &:first-child {
    padding-top: 0;
  }
`;
const ContentName = styled.span`
  font-size: 1.75rem;
  text-transform: uppercase;
`;
const ContentIcon = styled.object.attrs({
  type: 'image/svg+xml',
})`
  width: 100px;
  height: 100px;
`;

function ContentItem({ name, svg }) {
  return (
    <ContentItemBlock>
      <ContentName>{name}</ContentName>
      <ContentIcon data={svg} />
    </ContentItemBlock>
  );
}

export default ContentItem;
