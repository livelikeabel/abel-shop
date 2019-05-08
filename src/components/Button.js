import React from 'react';

const BUTTON_STYLE = { width: '80px', height: '30px', background: '#027dbf', color: '#f6f6f6'}

const Button = ({children, onClick}) => {
  return <button onClick={onClick} style={BUTTON_STYLE}>{children}</button>
};

export default Button;