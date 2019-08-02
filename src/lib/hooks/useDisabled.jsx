import React from 'react';

export default function useDisabled(time) {
  const [disabled, setDisabled] = React.useState(false);

  // 중복 클릭 방지
  const onDisabled = () => {
    disabled === false && setDisabled(true);

    setTimeout(() => {
      setDisabled(false);
    }, time);
  };

  return { disabled, onDisabled };
}
