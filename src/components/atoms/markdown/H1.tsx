import React from "react";

const H1 = ({ node, ...props }: any) => {
  return <h1 className="text-4xl">{props.children}</h1>;
};

export default H1;
