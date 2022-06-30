import React from "react";

const Works = () => {
  return (
    <div className="section">
      <h2 className="section-title">Works</h2>
      <div className="section-content grid grid-cols-3">
        <Work />
        <Work />
        <Work />
      </div>
    </div>
  );
};

const Work = () => {
  return (
    <div>
      <h2>work1</h2>
      <div>test</div>
    </div>
  );
};

export default Works;
