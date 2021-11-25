import React from 'react'

type Props = {
  type?: "submit" | "button";
  children: React.ReactNode;
};

const Button: React.FC<Props> = ({ type = "button", children }) => {
  return (
    <button type={type}>
      {children}
    </button>
  )
}

export default Button
