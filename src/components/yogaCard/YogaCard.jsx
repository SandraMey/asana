import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./yogaCard.scss";

const YogaCard = () => {
  const [yoga, setYoga] = useState([]);
  const handleChangeAll = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/yoga`);
    setYoga(data);
  };
  useEffect(() => {
    handleChangeAll();
  }, []);
  const handleChangeDynamique = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/tag/1/yoga`);
    setYoga(data);
  };
  useEffect(() => {
    handleChangeDynamique();
  }, []);
  const handleChangeDoux = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/tag/2/yoga`);
    setYoga(data);
  };
  useEffect(() => {
    handleChangeDynamique();
  }, []);
  const handleChangMéditation = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/tag/3/yoga`);
    setYoga(data);
  };
  useEffect(() => {
    handleChangeDynamique();
  }, []);
  return (
    <main className="home">
      <div className="nav">
        <div className="all" onClick={handleChangeAll} role="presentation">
          <h3>All</h3>
        </div>
        <div className="all" onClick={handleChangeDynamique} role="presentation">
          <h3>Dynamique</h3>
        </div>
        <div className="all" onClick={handleChangeDoux} role="presentation">
          <h3>Doux</h3>
        </div>
        <div className="all" onClick={handleChangMéditation} role="presentation">
          <h3>Méditation</h3>
        </div>
      </div>
      <div className="home">
        <div className="containerCard">
          {yoga.map((yoga) => (
            <div className="card">
              <Link to={`/yoga/${yoga.id}`} className="linkCard">
                <div className="containertext">
                  <h3>{yoga.title}</h3>
                </div>
                <img
                  src={`${process.env.REACT_APP_API_URL}/${yoga.picture}`}
                  alt={yoga.title}
                  className="yogapicture"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default YogaCard;
