import Link from "next/link";
import { useRouter } from "next/router";
import React, { FunctionComponent } from "react";

interface Props {
  title: string;
  description: string;
  url: string;
}

export const Work: FunctionComponent<Props> = ({ title, url, description }) => {
  return (
    <div className="border border-gray-500  rounded">
      <div className="bg-gray-500 p-2 text-white">{title}</div>

      <div className="w-[90%] border mx-auto mt-4 p-2 mb-1 text-sm text-gray-600">
        {description}
      </div>

      <div className="p-2 flex flex-row-reverse">
        <Link href={url}>
          <div className="bg-sky-500 cursor-pointer text-white py-2 px-3 rounded-lg">
            サイトへ
          </div>
        </Link>
      </div>
    </div>
  );
};
