import { SearchIcon } from "@heroicons/react/outline";
import React from "react";

const Widgets = () => {
  return (
    <div className="hidden col-span-2 px-2 mt-2 lg:inline">
      <div className="flex items-center p-3 mt-2 space-x-2 bg-gray-100 rounded-full">
        <SearchIcon className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="キーワードを検索"
          className="flex-1 bg-transparent outline-none"
        />
      </div>

      {/* TODO 機能を追加する */}
      <div>いまどうしてる</div>
    </div>
  );
};

export default Widgets;
