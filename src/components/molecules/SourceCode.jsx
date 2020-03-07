import React from "react";
import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// import styled from "styled-components";
// import Code from "../atoms/Code";

// const SourceCodeBLlock = styled.pre`
//   padding: 1.5rem;
//   word-wrap: normal;
//   white-space: pre-line;
// `;

/**FIX */

function SourceCode({ color }) {
  const codeString = `button {
  width: 280px;
  height: 80px;
  border-radius: 40px;
  background: ${color};
  color: #fff;
  font-size: 2rem;
}`;

  return (
    <SyntaxHighlighter language="css" style={atomDark}>
      {codeString}
    </SyntaxHighlighter>
  );
}

export default SourceCode;
