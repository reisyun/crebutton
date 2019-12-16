import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import media from "../../lib/utils/media";
import { arrow } from "../../assets/svg";
import Convert from "../atoms/Convert";
import Name from "../atoms/Name";
import Icon from "../atoms/Icon";

const vertical = keyframes`
  from,
  to {
    margin-top: 0rem;
  }
  50% {
    margin-top: -0.5rem;
  }
`;

const PreviewConvertBlcok = styled(Convert)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.5rem 0;
`;

const StyledIcon = styled(Icon)`
  margin-left: 0.5rem;

  ${PreviewConvertBlcok}:hover & {
    animation: ${vertical} 1s infinite;

    ${media.medium`
      animation: none;
    `}
  }
`;

function PreviewConvert({ onConvertMode }) {
  return (
    <PreviewConvertBlcok onClick={onConvertMode}>
      <Name fontSize="medium">Done</Name>
      <StyledIcon icon={arrow} size="1.5rem" />
    </PreviewConvertBlcok>
  );
}

PreviewConvert.propTypes = {
  onConvertMode: PropTypes.func.isRequired
};

export default PreviewConvert;
