import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  category?: string;
  title?: string;
  url?: string;
  children?: ReactNode;
};

const Card: React.FC<Props> = ({ category, title, url = "", children }) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full overflow-hidden border-2 border-gray-200 rounded-lg border-opacity-60">
        <Image
          className="object-cover object-center w-full lg:h-48 md:h-36"
          src="https://dummyimage.com/720x400"
          alt="blog"
        />
        <div className="p-6">
          <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">
            {category}
          </h2>
          <h1 className="mb-3 text-lg font-medium text-gray-900 title-font">
            {title}
          </h1>
          <div className="mb-3 leading-relaxed">{children}</div>
          <div className="flex flex-wrap items-center ">
            <Link href={url}>
              <a className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0">
                見る
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
