import React from "react";
import Body from "../Comp/Body";

const Article = ({ id, title, date, length, snippet }) => {
  return (
    <>
      <div>
        <Body />
        <h1>{title}</h1>
        <p>{date}</p>
        <p>{length}</p>
        <p>{snippet}</p>
      </div>
    </>
  );
};

export default Article;
