import React from "react";

const PageName = (props) => {
  return (
    <div className="page-naming">
      <h1>{props.name.split("").reverse().join("")}</h1>
      <h1>{props.name}</h1>
    </div>
  );
};

export default PageName;
