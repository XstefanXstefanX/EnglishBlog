import React from "react";
import data from "../components/data.json";

const Article2 = () => {
  const article = data.find((article) => article.id === 2);
  return (
    <div className="main-article-container">
      <h1 className="main-article-title">{article.title}</h1>
      <div className="double-element">
        <div className="main-article-img"></div>
        <div className="main-article-introduction">
          {article.textarea.introduction}
        </div>
      </div>
      <h1>Contents:</h1>
      <ul className="main-article-list">
        {article.textarea.sections.map((section) => {
          return (
            <li key={section.id}>
              <span>{section.id}.</span> {section.title}
            </li>
          );
        })}
      </ul>
      <div className="main-article-text">
        {article.textarea.sections.map((section) => {
          return (
            <section>
              <h1>{section.title}</h1>
              <p>{section.text}</p>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Article2;
