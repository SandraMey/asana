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
console.log(yogaCard.picture);
  return (
    <div className="containerdesc">
        <div className="description">
          <div className="containerintro">
            <h1 className="titledesc">{yogaCard.title}</h1>
            <p className="introdesc">{yogaCard.intro}</p>
          </div>
          <img className='imgdesc' width="200"src={`${process.env.REACT_APP_API_URL}/${yogaCard.picture}`} alt={yogaCard.title} />
          <div className="containersub1">
            <h2 className="subtitledesc">{yogaCard.subtitle1}</h2>
            <p className="pdesc">{yogaCard.text1}</p>
          </div>
          <div className="containersub2">
            <h2 className="subtitledesc">{yogaCard.subtitle2}</h2>
            <p className="pdesc">{yogaCard.text2}</p>
          </div>
          <div className="containerLink">
            <Link to="/" className='linkHome'>Retour à l'accueil</Link>
          </div>
        </div>
    </div>
  )
};

export default YogaDescription;
