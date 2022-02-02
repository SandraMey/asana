import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Menu from '../menu/Menu'
import "./yogaCard.scss";

const YogaCard = () => {
  const [yoga, setYoga] = useState([]);
  const getAllYoga = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/yoga`);
    setYoga(data);
  };
  useEffect(() => {
    getAllYoga();
  }, []);
  console.log(yoga);
  return (
    <>
      <Menu />
      <main className="home">
        <div className="containerCard">
          {yoga.map((yoga) => (
            <div className="card">
              <h3>{yoga.title}</h3>
              <img src={`${process.env.REACT_APP_API_URL}/yoga/${yoga.picture}`} alt={yoga.title} />
              <Link to={`/yoga/${yoga.id}`}>Lien</Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default YogaCard;
