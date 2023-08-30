import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: any;
};

const Button: React.FC<Props> = ({ children, onClick = () => {} }) => {
  return (
    <button className="px-3 py-2 text-white bg-blue-600" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
