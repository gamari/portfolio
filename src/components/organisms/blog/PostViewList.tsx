import React, { useEffect } from "react";
import { PostDomain } from "../../../domains/PostDomain";
import { PostType } from "../../../types/PostType";
import PostView from "../../molecules/PostView";

const PostViewList = ({ posts }: { posts: PostType[] }) => {
  return (
    <section className="overflow-hidden text-gray-600 bg-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {posts?.map((item) => {
            const post = new PostDomain(item);
            return (
              <div key={post.title}>
                <PostView
                  id={post.id}
                  title={post.title}
                  description={post.description}
                  publishedAt={post.publishedAtStr}
                  category={post.category}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PostViewList;
