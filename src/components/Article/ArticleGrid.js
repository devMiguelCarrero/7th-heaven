import React from "react";
import "./ArticleGrid.scss";
import Article from "./Article";
import Cloud from "../../assets/img/Cloud_Portrait.jpg";
import Tifa from "../../assets/img/Tifa_Portrait.jpg";
import Barret from "../../assets/img/Barret_Portrait.jpg";

const ArticleGrid = (props) => {
  return (
    <div className="seven-article-grid-container">
      <div className="seven-article-grid">
        <Article>
          <img className="article-img" src={Cloud} />
        </Article>
        <Article>
          <img className="article-img" src={Barret} />
        </Article>
        <Article>
          <img className="article-img" src={Tifa} />
        </Article>
      </div>
    </div>
  );
};
export default ArticleGrid;
