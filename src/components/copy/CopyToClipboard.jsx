import React from 'react';
import styled from 'styled-components';

const CopyToClipboardBlock = styled.span`
  cursor: pointer;
  transform: translateY(0);
  color: #fff;
  font-size: 5rem;
  font-weight: 700;
  text-transform: uppercase;
  text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);

  &:active {
    transform: translateY(0.25rem);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const { useState } = React;

function CopyToClipboard() {
  const [copied, setCopied] = useState(true);
  const handleResult = () => setCopied(false);

  return (
    <CopyToClipboardBlock onClick={handleResult}>
      {copied ? 'copy' : 'copied'}
    </CopyToClipboardBlock>
  );
}

export default CopyToClipboard;
