import React from 'react';
import styled from 'styled-components';

const CopyClipboardBlock = styled.span`
  cursor: pointer;
  transform: translateY(0);
  color: #fff;
  font-size: 5rem;
  font-weight: 700;
  text-transform: uppercase;
  text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  transition-property: text-shadow, transform;
  transition-duration: 0.1s;

  &:active {
    transform: translateY(0.25rem);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const { useState } = React;

function CopyClipboard() {
  const [copied, setCopied] = useState(true);

  const handleResult = () => {
    setCopied(false);

    setTimeout(() => {
      setCopied(true);
    }, 1000);
  };

  return (
    <CopyClipboardBlock onClick={handleResult}>
      {copied ? 'copy' : 'copied'}
    </CopyClipboardBlock>
  );
}

export default CopyClipboard;
