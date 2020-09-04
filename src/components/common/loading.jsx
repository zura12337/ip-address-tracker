import React from "react";

const Loading = () => {
  return (
    <>
      <div className="loading">
        <svg>
          <circle cx="45" cy="45" r="27"></circle>
        </svg>
      </div>
      <div className="black-bg"></div>
    </>
  );
};

export default Loading;
