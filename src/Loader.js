import React from "react";
import spinner from "./loading.gif";
const Loader = () => {
  return (
    <div className="text-center">
      <img src={spinner} alt="" />
    </div>
  );
};

export default Loader;
