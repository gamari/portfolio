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
          title="チュートリアルMaker"
          url="https://tutorial-maker-iota.vercel.app/"
          description="チュートリアルMakerはAIを活用した講座自動生成アプリです。"
        />
      </div>
    </div>
  );
};

export default Works;
