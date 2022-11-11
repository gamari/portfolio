import { RefreshIcon } from "@heroicons/react/outline";
import React from "react";

const Timeline = () => {
  return (
    <div className="col-span-7 lg:col-span-5">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">ホーム</h1>
        <RefreshIcon className="w-8 h-8 transition-all duration-500 ease-out cursor-pointer active:scale-125 hover:rotate-180 text-twitter" />
      </div>
    </div>
  );
};

export default Timeline;
