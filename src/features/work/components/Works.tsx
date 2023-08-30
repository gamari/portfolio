import React from "react";

import { Work } from "./Work";
import { SectionTitle } from "../../base/components/SectionTitle";

const Works = () => {
  return (
    <div className="section">
      <SectionTitle label="製作物一覧" />
      <div className="section-content grid grid-cols-1 md:grid-cols-3 mt-10 gap-3">
        <Work
          title="チュートリアルMaker"
          url="https://tutorial-maker-iota.vercel.app/"
          description="チュートリアルMakerはAIを活用した講座自動生成アプリです。"
        />

        <Work
          title="PageMaker"
          url="https://page-maker-seven.vercel.app/"
          description="画面を自動生成してくれるアプリです。"
        />

        <Work
          title="SNSクローン"
          url="https://sns-nextjs-front-completed.vercel.app/"
          description="SNSの基本的な機能を備えたサイトです。"
        />
      </div>
    </div>
  );
};

export default Works;
