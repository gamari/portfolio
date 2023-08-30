import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  title?: string;
  className?: string;
};

const Section: React.FC<Props> = ({ children, title, className }) => {
  return (
    <div className={`bg-white ${className}`}>
      <div className="container mx-auto">
        <div className="pt-10 mb-4 text-2xl font-bold text-center text-gray-800 lg:text-3xl md:mb-6">
          {title}
        </div>

        <div className="section-content">{children}</div>
      </div>
    </div>
  );
};

export default Section;
