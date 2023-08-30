import React from "react";
import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";

const SocialMedias = () => {
  return (
    <div className="flex items-center justify-center ">
      <a
        href="https://twitter.com/Marine765_"
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <AiFillTwitterCircle className="w-10 h-10 text-[#1da1f2]" />
      </a>
      <a
        href="https://github.com/gamari"
        target={"_blank"}
        rel="noopener noreferrer"
      >
        <AiFillGithub className="w-10 h-10" />
      </a>
    </div>
  );
};

export default SocialMedias;
