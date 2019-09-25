import React from 'react';
import { useSelector } from 'react-redux';
import Copy from '../components/organisms/Copy';

function CopyContainer() {
  const { done } = useSelector(state => state.base);

  return <Copy done={done} />;
}

export default CopyContainer;
