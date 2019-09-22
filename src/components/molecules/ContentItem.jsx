import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from '../../lib/utils/media';
import Name from '../atoms/Name';
import Icon from '../atoms/Icon';

const ContentItemBlock = styled.span`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -1.5rem;
    width: 0;
    height: 6.25rem;
    background-color: #489cea;
    border-radius: 0 0.25rem 0.25rem 0;
    transition: width 0.2s ease-out;
  }

  &:hover::before {
    width: 0.25rem;
  }

  ${media.medium`
    &::before {
      content: none;
    }
  `}
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

  ${media.medium`
    filter: none;

    &:hover {
      filter: none;
    }
  `}
`;

function ContentItem({ name, icon, onPageTransition }) {
  return (
    <ContentItemBlock onClick={onPageTransition}>
      <Link to={`/${name}`} key={name}>
        <StyledName fontSize="large">
          {name}
          <Icon icon={icon} size="6.25rem" />
        </StyledName>
      </Link>
    </ContentItemBlock>
  );
}

ContentItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onPageTransition: PropTypes.func.isRequired,
};

export default ContentItem;
