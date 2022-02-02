import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './yogaDescription.scss';

const YogaDescription = () => {
  const { id } = useParams();
  const [yogaCard, setYogaCard] = useState([]);

  const getAllDesc = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/yoga/${id}`,
    );
    setYogaCard(data);
  };
  useEffect(() => {
    getAllDesc();
  }, []);
console.log(yogaCard);
  return (
    <div className="containerdesc">
        <div className="description">
          <div className="containerintro">
            <h1 className="titledesc">{yogaCard.title}</h1>
            <p className="introdesc">{yogaCard.intro}</p>
          </div>
          <p className="imgdesc">{yogaCard.picture}</p>
          <div className="containersub1">
            <p>{yogaCard.subtitle1}</p>
            <p>{yogaCard.subtitle2}</p>
          </div>
          <div className="containersub2">
            <p>{yogaCard.text1}</p>
            <p>{yogaCard.text2}</p>
          </div>
          <div className="containerLink">
            <Link to="/">Retour à l'accueil</Link>
          </div>
        </div>

    </div>
  )
};

export default YogaDescription;
