import React from 'react';

export default function useDisabled(duration) {
  const [disabled, setDisabled] = React.useState(false);

  // 중복 클릭 방지
  const onDisabled = React.useCallback(() => {
    // 이벤트가 오면 버튼 기능 정지 (disable = true)
    if (disabled === false) {
      setDisabled(true);
    }

    // 시간이 지나면 버튼 기능 활성 (disable = false)
    _delay(duration, setDisabled);
  }, [disabled, duration]);

  return [disabled, onDisabled];
}

const _delay = (time, setState) => {
  setTimeout(() => {
    setState(false);
  }, time);
};
