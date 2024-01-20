import React from "react";

const ContainerLayout = ({ children, className }) => {
  return <div className={`custom-container ${className}`}>{children}</div>;
};

export default ContainerLayout;
