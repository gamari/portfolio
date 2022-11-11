import React, { SVGProps } from "react";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
}

const Row = ({ Icon, title }: Props) => {
  return (
    <div className="flex items-center px-4 py-3 space-x-2 transition-all duration-200 rounded-full cursor-pointer max-w-fit hover:bg-gray-100 group">
      <Icon className="w-6 h-6" />
      <p className="hidden md:inline-flex group-hover:text-twitter">{title}</p>
    </div>
  );
};

export default Row;
