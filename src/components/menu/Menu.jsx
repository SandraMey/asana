import React, { useEffect, useState } from "react";
import axios from "axios";
import "./menu.scss";

const Menu = () => {
  const [tags, setTags] = useState([]);
  const getAllTags = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/tag`);
    setTags(data);
  };
  useEffect(getAllTags, []);
  console.log(tags);

  return (
    <div className="nav">
      {tags.map((tag) => (
        <div className="card">
          <h3>{tag.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Menu;
