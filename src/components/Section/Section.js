import React from "react";
import "./Section.scss";

const sevenSection = (props) => {
  return (
    <section className={`container section-container ${props.className && props.className}`}>
      {props.children}
    </section>
  );
};
export default sevenSection;
