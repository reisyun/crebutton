import React from 'react';

function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = React.useState(false);

  React.useEffect(() => {
    // targetKey를 누를 시 keyPressed = True
    const downHandler = e => {
      if (e.key === targetKey) {
        setKeyPressed(true);
      }
    };
    // targetKey를 땔 시 keyPressed = False
    const upHandler = e => {
      if (e.key === targetKey) {
        setKeyPressed(false);
      }
    };

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, [targetKey]);

  return keyPressed;
}

export default useKeyPress;
