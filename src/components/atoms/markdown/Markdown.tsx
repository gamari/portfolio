import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  content: string;
};

const Markdown: React.FC<Props> = ({ content }) => {
  return (
    <div className="max-w-2xl mx-auto markdown">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Markdown;
