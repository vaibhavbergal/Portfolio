import React from "react";

const Container = ({ children }) => {
  return (
    <>
      <div className="px-4 mx-2 md:w-full md:mx-auto h-28 md:max-w-7xl">
        {children}
      </div>
    </>
  );
};

export default Container;
