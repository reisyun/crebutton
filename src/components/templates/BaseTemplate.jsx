import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useSelector } from "react-redux";
import media from "../../lib/utils/media";

const Base = styled.main`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  height: 100vh;

  ${media.medium`
    flex-direction: column;
    height: auto;
  `}
`;
const Viewer = styled.section`
  position: relative;
  top: ${props => (props.done ? "100vh" : "0vh")};
  width: 100%;
  transition: top 0.5s ease-in-out;
`;
const Panel = styled.section`
  z-index: 200;
  position: relative;
  width: 80%;
  height: 100vh;
  background-color: #f1f2f6;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

  ${media.medium`
    width: 100%;
    box-shadow: none;
  `}
`;

function BaseTemplate({ viewer, panel }) {
  const { done } = useSelector(state => state.base);

  return (
    <Base>
      <Viewer done={done}>{viewer}</Viewer>
      <Panel>{panel}</Panel>
    </Base>
  );
}

BaseTemplate.propTypes = {
  viewer: PropTypes.element.isRequired,
  panel: PropTypes.element.isRequired
};

export default BaseTemplate;
