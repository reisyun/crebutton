import React from 'react';

export default function useToggle(initialValue) {
  const [value, setValue] = React.useState(initialValue);

  const toggle = React.useCallback(() => {
    setValue(!value);
  }, [value]);

  return [value, toggle];
}