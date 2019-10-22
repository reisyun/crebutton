import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import useDisabled from '../../lib/hooks/useDisabled';
import Button from '../atoms/Button';

const MainButtonBlock = styled(Button)`
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17.5rem;
  height: 5rem;
  border-radius: 2.5rem;
  background-color: ${props => props.color};
  color: #fff;
  font-size: 2rem;
  word-wrap: break-word;
  word-break: break-all;
  transition: background-color 0.3s;
`;

function MainButton({ text, color, onSlideBarControl }) {
  const [disabled, onDisabled] = useDisabled(4 * 200);

  const handleClick = useCallback(() => {
    onDisabled();
    onSlideBarControl();
  }, [onDisabled, onSlideBarControl]);

  return (
    <MainButtonBlock color={color} disabled={disabled} onClick={handleClick}>
      {text ? text : 'Click this'}
    </MainButtonBlock>
  );
}

MainButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onSlideBarControl: PropTypes.func.isRequired,
};

export default MainButton;
