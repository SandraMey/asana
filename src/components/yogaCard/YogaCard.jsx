import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
    <main>
      <div className="containerCard">
        {yoga.map((d) => (
          <h3>{d.title}</h3>
        ))}
      </div>
    </main>
  );
};

export default YogaCard;
