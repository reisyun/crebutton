import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Header from '../../components/organisms/Header';

const Custom = styled.section`
  overflow-y: auto;
  height: inherit;
`;
const Container = styled.div`
  margin-top: 1.5rem;
  padding: 0 1.5rem;

  ${props =>
    props.icon &&
    css`
      &::before {
        content: '';
        opacity: 0.25;
        position: absolute;
        right: 1.5rem;
        bottom: 1.5rem;
        width: 15rem;
        height: 15rem;
        background-image: url('${props.icon}');
      }
    `}
`;

function CustomTemplate({ children, title, icon }) {
  return (
    <Custom>
      {title && <Header title={title} />}
      <Container icon={icon}>{children}</Container>
    </Custom>
  );
}

CustomTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  icon: PropTypes.string,
};

export default CustomTemplate;
