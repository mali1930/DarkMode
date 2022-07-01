import React, { useState, useEffect } from "react";
import Data from "../Data";
import Article from "./Article";

const Body = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(Data);
  });
  return (
    <>
      <div>
        {list.map((dt) => {
          return <Article key={dt.id} {...dt} />;
        })}
      </div>
    </>
  );
};

export default Body;
