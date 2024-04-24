import React from "react";
import links from "./assets/essays/essay-links.json";

const Essays = () => {
  return (
    <div className="essays-container">
      {links.map((link, key) => {
        return (
          <div className="essay" key={key}>
            <h1>title: </h1>
            <h2>author: </h2>
            <img src={link["link"]} />
          </div>
        );
      })}
    </div>
  );
};
export default Essays;
