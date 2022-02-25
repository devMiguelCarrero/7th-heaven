import React from "react";
import "./TransparentArea.scss";

const TransparentArea = (props) => {
  return (
    <div className={`transparent-area ${props.className && props.className}`}>
      {props.children}
    </div>
  );
};
export default TransparentArea;
