import React, { createContext as reactCreateContext } from 'react';
import { useLocalStore, useObserver } from 'mobx-react-lite';

function createContext(stores) {
  const Context = reactCreateContext({});

  const Provider = ({ children }) => {
    const value = useLocalStore(() => stores);
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  const Consumer = ({ children }) => {
    return useObserver(() => children());
  };

  return {
    Context,
    Provider,
    Consumer,
  };
}

export default createContext;
