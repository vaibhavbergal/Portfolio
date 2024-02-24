import React, { forwardRef } from "react";

const Container = forwardRef(({ children, className, ...props }, ref) => {
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
});

export default Container;
