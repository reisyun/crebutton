import React from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import useDisabled from "../../lib/hooks/useDisabled";
import useToggle from "../../lib/hooks/useToggle";
import Button from "../atoms/Button";

const CopyButtonBlock = styled(Button)`
  color: ${props => (props.disabled ? "#54a0ff" : "#fff")};
  font-size: 5rem;
  font-weight: 700;
  text-transform: uppercase;
  text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  transform: translateY(0);
  transition-property: text-shadow, transform;
  transition-duration: 150ms;

  &:active {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    transform: translateY(0.25rem);
  }
`;

function CopyButton() {
  const [disabled, onDisabled] = useDisabled(2000);
  const [copied, setCopied] = useToggle(false);

  const handleCopy = () => {
    setCopied(!copied);
  };

  return (
    <CopyToClipboard text={codeString} onCopy={handleCopy}>
      <CopyButtonBlock disabled={disabled} onClick={onDisabled}>
        {disabled ? "COPIED" : "COPY"}
      </CopyButtonBlock>
    </CopyToClipboard>
  );
}

/** FIX */
const codeString = `button {
  width: 280px;
  height: 80px;
  border-radius: 40px;
  background: #489cea;
  color: #fff;
  font-size: 2rem;
}`;

export default CopyButton;
