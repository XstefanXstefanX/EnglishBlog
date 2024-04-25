import React from "react";
import Article from "../components/Article.jsx";
import SearchBar from "../components/SearchBar.jsx";
import PageName from "../components/PageName.jsx";

const Articles = () => {
  return (
    <div>
      <PageName name="Articles" />
      <SearchBar />
      <Article />
    </div>
  );
};

export default Articles;
