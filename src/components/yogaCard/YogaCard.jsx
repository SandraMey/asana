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
              <Link to={`/yoga/${yoga.id}`} className="linkCard">
              <h3>{yoga.title}</h3>
              <img width="200" height="200" src={`${process.env.REACT_APP_API_URL}/${yoga.picture}`} alt="" />
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default YogaCard;
