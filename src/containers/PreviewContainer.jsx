import React from 'react';
import Preview from '../components/preview/Preview';
import Slidebar from '../components/preview/Slidebar';
import Button from '../components/preview/Button';
import Done from '../components/preview/Done';

function PreviewContainer() {
  return (
    <Preview>
      <Slidebar />
      <Button />
      <Done />
    </Preview>
  );
}

export default PreviewContainer;
