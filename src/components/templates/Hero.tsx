import React, { ReactNode } from "react";

import { AiOutlineArrowDown } from "react-icons/ai";

const Hero = ({
  title,
  children,
}: {
  title?: string;
  children?: ReactNode;
}) => {
  return (
    <div className="relative hero">
      <div className="hero-title">{title}</div>
      {children}
      <AiOutlineArrowDown className="absolute w-10 h-10 bottom-10 animate-bounce" />
    </div>
  );
};

export default Hero;
