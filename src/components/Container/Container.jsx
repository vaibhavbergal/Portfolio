import React from "react";

const Container = ({ children, className, ...props }) => {
  return (
    <>
      <div
        className={`px-4 mx-2 md:w-full md:mx-auto md:max-w-7xl ${className} `}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

export default Container;
