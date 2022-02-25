import React from "react";
import SelectionableItem from "../SelectionableItem/SelectionableItem";
import "./Article.scss";

const Article = (props) => {
  return (
    <div className="seven-article">
      <SelectionableItem className="seven-article__content">{props.children}</SelectionableItem>
    </div>
  );
};
export default Article;
