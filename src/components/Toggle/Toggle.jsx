import React, { useContext } from 'react';
import './Toggle.css';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import { themeContext } from '../../Context';

const Toggle = () => {
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;
  const handleClick = () => {
    // debugger
    theme.dispatch({ type: 'toggle' });
  };
  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className="toggle" onClick={handleClick}>
      <Moon />
      <Sun />
      <div
        className="t-button"
        style={darkMode ? { left: '2px' } : { right: '2px' }}
      />
    </div>
  );
};

export default Toggle;
