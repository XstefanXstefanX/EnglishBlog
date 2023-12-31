import React from "react";
import { Outlet, Link } from "react-router-dom";
import articles from "./data.json";

const Article = (input) => {
  const filteredArticles = articles.filter((el) => {
    if (input.input === "") {
      return el;
    } else {
      let response = el.title.toLowerCase().includes(input.input);
      return response;
    }
  });
  return (
    <div className="articles-container">
      {filteredArticles.map((article) => {
        return (
          <div className="article-container">
            <Link
              style={{ textDecoration: "none" }}
              to={`/articles/${article.url}`}
            >
              <h1 className="article-title" key={article.title}>
                {article.title}
              </h1>
              <p className="article-text" key={article.id.toString()}>
                {article.text}
              </p>
              <img
                key={article.img}
                className="article-image"
                src={article.img}
                alt="article-image"
              />
            </Link>
          </div>
        );
      })}
      <Outlet />
    </div>
  );
};

export default Article;
