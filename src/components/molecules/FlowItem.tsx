import React from "react";

type Props = {
  number: number;
  title: string;
  content: string;
  skill: string;
};

const FlowItem: React.FC<Props> = ({ number, title, content, skill }) => {
  return (
    <div className="relative flex max-w-4xl pt-10 pb-20 mx-auto sm:items-center">
      <div className="absolute inset-0 flex items-center justify-center w-6 h-full">
        <div className="w-1 h-full bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white rounded-full bg-zinc-800 sm:mt-0 title-font">
        {number}
      </div>
      <div className="flex flex-col items-start flex-1 flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row">
        {/* Content */}
        <div className="flex-1 flex-grow w-full mt-6 sm:pl-6 sm:mt-0">
          <h2 className="mb-1 text-xl font-medium text-gray-900 title-font">
            {title}
          </h2>
          <p className="text-lg leading-relaxed">{content}</p>
          <div className="mt-4 text-lg leading-relaxed">
            <div>【スキル】</div>
            <div>{skill}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowItem;
