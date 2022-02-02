import React, { useEffect, useState } from "react";
import axios from "axios";
import "./menu.scss";

const Menu = () => {
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
