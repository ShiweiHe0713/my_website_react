import React from "react";

const sizeClasses = {
  txtOutfitRegular25: "font-normal font-outfit",
  txtOutfitBold80: "font-bold font-outfit",
  txtOutfitRegular11: "font-normal font-outfit",
  txtOutfitRegular12: "font-normal font-outfit",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular25: "font-inter font-normal",
  txtOutfitBold15: "font-bold font-outfit",
  txtInterRegular18: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
