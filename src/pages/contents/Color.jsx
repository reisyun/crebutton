import React from "react";
import { color } from "../../assets/svg";
import CustomTemplate from "../../components/templates/CustomTemplate";

import styled from "styled-components";
import { useDispatch } from "react-redux";
import { colorPicker } from "../../modules/custom";
const { useCallback } = React;

const Container = styled.div`
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: center;
`;
const Item = styled.div`
  cursor: pointer;
  margin: 8px;
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background: ${props => props.color};
`;

function Color() {
  const dispatch = useDispatch();

  const onChangeColor = useCallback(
    e => {
      const itemColor = e.target.attributes.color.value;
      return dispatch(colorPicker(itemColor));
    },
    [dispatch]
  );

  const picker = colors.map(c => (
    <Item key={c} color={c} onClick={onChangeColor} />
  ));

  return (
    <CustomTemplate title="color" icon={color}>
      <Container>{picker}</Container>
    </CustomTemplate>
  );
}

const colors = [
  "#e84393",
  "#fd79a8",
  "#d63031",
  "#ff7675",
  "#e17055",
  "#fab1a0",
  "#fdcb6e",
  "#ffeaa7",
  "#00b894",
  "#55efc4",
  "#00cec9",
  "#81ecec",
  "#0984e3",
  "#74b9ff",
  "#6c5ce7",
  "#a29bfe",
  "#dfe6e9",
  "#b2bec3",
  "#636e72",
  "#2d3436"
];

export default Color;
