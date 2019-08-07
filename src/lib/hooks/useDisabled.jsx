import React from 'react';

export default function useDisabled(delay) {
  const [disabled, setDisabled] = React.useState(false);

  // 시간이 지나면 상태를 false 처리
  const _delay = (time, setState) => {
    setTimeout(() => {
      setState(false);
    }, time);
  };

  // 중복 클릭 방지
  const onDisabled = React.useCallback(() => {
    disabled === false && setDisabled(true);
    _delay(delay, setDisabled);
  }, [delay, disabled]);

  return { disabled, onDisabled };
}
