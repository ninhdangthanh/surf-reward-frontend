import React from "react";
import "./index.scss";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.5)] z-[999] flex justify-center items-center">
      <div className="loader"></div>
    </div>
  );
};

export default Loading;
