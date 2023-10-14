import React from "react";
import data from "../components/data.json";

const Article1 = () => {
  const article = data.find((article) => article.id === 1);
  return (
    <div className="main-article-container">
      <div className="article-container">
        <h1 className="main-article-title">{article.title}</h1>
        <p className="main-article-text">{article.text}</p>
      </div>
    </div>
  );
};

export default Article1;
