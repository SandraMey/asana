import React from "react";
import { Link } from 'react-router-dom';
import "./yogaCard.scss";

const YogaCard = () => {
  return (
    <main>
      <div className="containerCard">
        <div className="card">
          Ashtanga
          <Link to={`/description`} >link</Link>
        </div>
        <div className="card2">
          Hatha
          <Link to={`/description`} >link</Link>
        </div>
        <div className="card3">
          Aérien
          <Link to={`/description`} >link</Link>
        </div>
        <div className="card4">
          Pleine conscience
          <Link to={`/description`} >link</Link>
        </div>
        <div className="card5">
          Nidra
          <Link to={`/description`} >link</Link>
        </div>
        <div className="card6">
          Yin
          <Link to={`/description`} >link</Link>
        </div>
      </div>
    </main>
  );
};

export default YogaCard;
