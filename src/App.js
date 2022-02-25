import "./frameworks/psone.css/PSone.css";
import "./normalize.scss";
import MainContainer from "./components/MainContainer/MainContainer";
import Section from "./components/Section/Section";
import Menu from "./components/Menu/Menu";
import React from "react";
import TransparentArea from "./components/TransparentArea/TransparentArea";
import Item from "./components/Item/Item";
import ArticleGrid from "./components/Article/ArticleGrid";

const App = () => {
  return (
    <MainContainer>
      <Section className="section-container--index-section">
        <ArticleGrid></ArticleGrid>
      </Section>
      <TransparentArea className="transparent-area--index-section">
        <Section className="section-container--main-menu-section">
          <Menu />
        </Section>
        <TransparentArea>
          <Section className="section-container--main-menu-section">
            <Item>
              <p>Time: 123123</p>
              <p>Gil: 12</p>
            </Item>
          </Section>
          <Section className="section-container--footer-title-section">
            <Item>
              <p>The 7th Heaven</p>
            </Item>
          </Section>
        </TransparentArea>
      </TransparentArea>
    </MainContainer>
  );
};
export default App;
