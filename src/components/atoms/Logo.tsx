import React from "react";
import { MdOutlineComputer } from "react-icons/md";

type Props = {
  className?: string;
};

const Logo: React.FC<Props> = ({ className }) => {
  return (
    <>
      <MdOutlineComputer className={`${className}`} />
    </>
  );
};

export default Logo;
