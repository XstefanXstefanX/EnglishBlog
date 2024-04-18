import React from "react";
import links from "./assets/essays/essay-links.json";

const Poetry = () => {
  return (
    <div className="essays-container">
      {links.map((link) => {
        return (
          <div className="essay">
            <h1>title: {link["title"]}</h1>
            <h2>author: {link["author"]}</h2>
            <a href={link["link"]}>
              <img src={link["link"]} />
            </a>{" "}
          </div>
        );
      })}
    </div>
  );
};
export default Poetry;
