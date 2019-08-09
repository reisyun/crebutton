import React from 'react';

export default function useDisabled(duration) {
  const [disabled, setDisabled] = React.useState(false);

  // 시간이 지나면 상태를 false 처리
  const delay = (time, setState) => {
    setTimeout(() => {
      setState(false);
    }, time);
  };

  // 중복 클릭 방지
  const onDisabled = React.useCallback(() => {
    disabled === false && setDisabled(true);
    delay(duration, setDisabled);
  }, [disabled, duration]);

  return [disabled, onDisabled];
}
