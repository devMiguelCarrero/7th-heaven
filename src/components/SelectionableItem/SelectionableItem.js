import React from "react";
import "./SelectionableItem.scss";
import Cursor from "../../assets/img/FF7Cursor.png";

const SelectionableItem = (props) => {
  return (
    <div
      className={`seven-selectionable-item ${
        props.className != undefined && props.className
      }`}
    >
      {props.children}
    </div>
  );
};
export default SelectionableItem;
