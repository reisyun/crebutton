import React from 'react';
import styled from 'styled-components';

const CustomContentBlock = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  filter: grayscale(100%);
  transition: filter 0.2s ease-out;

  &:first-child {
    padding-top: 0;
  }
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
  &:hover {
    filter: grayscale(0%);

    &::before {
      width: 4px;
    }
  }
`;
const Name = styled.span`
  font-size: 1.75rem;
  font-weight: 500;
  text-transform: uppercase;
`;
const Icon = styled.img.attrs(props => ({
  src: props.svg,
}))`
  width: 100px;
  height: 100px;
`;

function CustomContent({ name, svg }) {
  return (
    <CustomContentBlock>
      <Name>{name}</Name>
      <Icon svg={svg} />
    </CustomContentBlock>
  );
}

export default CustomContent;
