import React from "react";
import "./ArticlePart.scss";

const ArticlePart = (props) => {
  return (
    <div
      className={`seven-article-part ${props.className ? props.className : ""}`}
    >
      {props.children}
    </div>
  );
};
export default ArticlePart;
