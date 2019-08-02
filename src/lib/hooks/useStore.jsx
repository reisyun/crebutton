import React from 'react';

export default function useStore(contextStore) {
  if (!contextStore.Context) {
    throw new Error('No Context defined');
  }

  const store = React.useContext(contextStore.Context);
  if (!store) {
    throw new Error('No Provider defined');
  }

  return store;
}
