import React, { useCallback } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { convertMode } from "../../modules/base";
import SourceCode from "../molecules/SourceCode";
import ResultConvert from "../molecules/ResultConvert";

const ResultWrapper = styled.div`
  z-index: 999;
  overflow-y: auto;
  position: absolute;
  top: -100vh;
  width: 100%;
  height: 100vh;
  background-color: #1d1f21; /* 2f3542 */
  transition: top 0.5s ease-in-out;
`;

function Result() {
  const { done } = useSelector(state => state.base);
  const { color } = useSelector(state => state.custom);
  const dispatch = useDispatch();

  const onConvertMode = useCallback(() => {
    return dispatch(convertMode());
  }, [dispatch]);

  return (
    <ResultWrapper done={done}>
      <SourceCode color={color} />
      <ResultConvert onConvertMode={onConvertMode} />
    </ResultWrapper>
  );
}

export default Result;
