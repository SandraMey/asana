import React, { useEffect, useState } from "react";
import axios from "axios";
import "./menu.scss";

const Menu = () => {
  const [tag, setTag] = useState([]);
  const getAllTag = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/tag`);
    setTag(data);
  };
  useEffect(() => {
    getAllTag();
  }, []);

  const handleClick1 = async () => {
    await axios.get(`${process.env.REACT_APP_API_URL}/tag/1/yoga`);
  };
  const handleClick2 = async () => {
    await axios.get(`${process.env.REACT_APP_API_URL}/tag/2/yoga`);
  };
  const handleClick3 = async () => {
    await axios.get(`${process.env.REACT_APP_API_URL}/tag/3/yoga`);
  };

  return (
    <div className="nav">
        <ul>
          <li>
            <a href="">All</a>
          </li>
          <li>
            <a href="">Dynamique</a>
          </li>
          <li>
            <a href="">Doux</a>
          </li>
          <li>
            <a href="">Méditation</a>
          </li>
        </ul>
    </div>
  );
};

export default Menu;
