import React from "react";
import "./ArticleGrid.scss";
import Article from "./Article";
import Cloud from "../../assets/img/Cloud_Portrait.png";
import Tifa from "../../assets/img/Tifa_Portrait.jpg";
import Barret from "../../assets/img/Barret_Portrait.jpg";
import Aeris from "../../assets/img/Aeris_Portrait.png";
import RedXIII from "../../assets/img/RedXIII_Portrait.png";
import Cid from "../../assets/img/Cid_Portrait.png";
import ArticlePart from "./ArticlePart";

const ArticleGrid = (props) => {
  return (
    <div className="seven-article-grid-container">
      <div className="seven-article-grid">
        <Article>
          <ArticlePart>
            <img className="article-img" src={Cloud} />
          </ArticlePart>
          <ArticlePart className="seven-article-part--excerpt">
            <h2 className="seven-grid-title">Cloud</h2>
            <p>
              Cloud Strife is the protagonist of Final Fantasy VII, Final
              Fantasy VII Remake, and Final Fantasy VII: Advent Children. He
              also appears...
            </p>
          </ArticlePart>
          <ArticlePart></ArticlePart>
        </Article>
        <Article>
          <img className="article-img" src={Barret} />
        </Article>
        <Article>
          <img className="article-img" src={Tifa} />
        </Article>
        <Article>
          <img className="article-img" src={Aeris} />
        </Article>
        <Article>
          <img className="article-img" src={RedXIII} />
        </Article>
        <Article>
          <img className="article-img" src={Cid} />
        </Article>
      </div>
    </div>
  );
};
export default ArticleGrid;
