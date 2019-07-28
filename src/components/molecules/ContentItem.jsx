import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Name from '../atoms/Name';
import Icon from '../atoms/Icon';

const ContentItemBlock = styled.span`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -1.5rem;
    width: 0rem;
    height: 100px;
    background-color: #489cea;
    border-radius: 0 4px 4px 0;
    transition: width 0.2s ease-out;
  }

  &:hover::before {
    width: 4px;
  }
`;
const StyledName = styled(Name)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  filter: grayscale(100%);
  transition: filter 0.2s ease-out;

  &:hover {
    filter: grayscale(0%);
  }
`;

function ContentItem({ name, icon }) {
  return (
    <ContentItemBlock>
      <Link to={`/${name}`} key={name}>
        <StyledName fontSize="large">
          {name}
          <Icon icon={icon} size="6.25rem" />
        </StyledName>
      </Link>
    </ContentItemBlock>
  );
}

export default ContentItem;
