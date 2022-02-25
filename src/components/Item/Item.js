import React from "react";
import "./Item.scss";

const sevenItem = (props) => {
  return (
    <div className={`seven-item ${props.className && props.className}`}>
      {props.children}
    </div>
  );
};
export default sevenItem;
