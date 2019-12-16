import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Bar from "../atoms/Bar";

const SlideBarBlock = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

function SlideBar({ slideBar }) {
  const BAR_COUNT = 4;

  const bars = range(BAR_COUNT).map(num => (
    <Bar slideBar={slideBar} count={num} key={`slideBar-${num}`} />
  ));

  return <SlideBarBlock>{bars}</SlideBarBlock>;
}

const range = length => Array.from({ length }, (_, i) => i);

SlideBar.propTypes = {
  slideBar: PropTypes.bool.isRequired
};

export default SlideBar;
