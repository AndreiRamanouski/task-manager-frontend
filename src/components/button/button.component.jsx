import React from 'react';
import './button.style.scss';

const Button = ({ buttonText, color, actionOnClick }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={actionOnClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
