import Link from "next/link";
import React from "react";
import { PostType } from "../../types/PostType";

type Props = PostType;

const PostView: React.FC<Props> = ({
  id,
  title,
  publishedAt,
  description,
  category,
}) => {
  return (
    <div className="flex flex-wrap py-8 md:flex-nowrap">
      <div className="flex flex-col flex-shrink-0 mb-6 md:w-64 md:mb-0">
        <span className="font-semibold text-gray-700 title-font">
          {category ? category.name : <>カテゴリーなし</>}
        </span>
        <span className="mt-1 text-sm text-gray-500">{publishedAt}</span>
      </div>
      <div className="md:flex-grow">
        <h2 className="mb-2 text-2xl font-medium text-gray-900 title-font">
          {title}
        </h2>
        <p className="leading-relaxed">{description}</p>
        <Link href={`/blog/post/${id}`}>
          <a className="inline-flex items-center mt-4 text-indigo-500">
            記事を読む
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
  );
};

export default PostView;
