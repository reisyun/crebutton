import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';

const CopyButtonBlock = styled(Button)`
  color: #fff;
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
  const [copied, setCopied] = useState(true);
  const handleResult = () => setCopied(!copied);

  return (
    <CopyButtonBlock onClick={handleResult}>
      {copied ? 'copy' : 'copied'}
    </CopyButtonBlock>
  );
}

export default CopyButton;
