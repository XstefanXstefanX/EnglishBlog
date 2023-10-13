import { React, useState } from "react";
import Article from "./Article.jsx";

const SearchBar = () => {
  const [inputText, setInputText] = useState("");
  const handleInput = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div className="search-container">
      <input
        type="text"
        label="Search"
        placeholder="Search"
        onChange={handleInput}
        className="search-bar"
      />
      <Article input={inputText} />
    </div>
  );
};

export default SearchBar;

{
}
