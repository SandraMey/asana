import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './yogaDescription.scss';

const YogaDescription = () => {
  const { id } = useParams();
  const [desc, setDesc] = useState([]);

  const getAllDesc = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/yoga/${id}`);
    setDesc(data);
  };
  useEffect(() => {
    getAllDesc();
  }, []);
console.log(desc);
  return (
    <div className="containerdesc">
      {desc.map((d) => (
        <div className="description">
          <div className="containerintro">
            <h1 className="titledesc">{d.title}</h1>
            <p className="introdesc">{d.intro}</p>
          </div>
          <p className="imgdesc">{d.picture}</p>
          <div className="containersub1">
            <p>{d.subtitle1}</p>
            <p>{d.subtitle2}</p>
          </div>
          <div className="containersub2">
            <p>{d.text1}</p>
            <p>{d.text2}</p>
          </div>
          <div className="containerLink">
            <Link to="/">Retour à l'accueil</Link>
          </div>
        </div>
      ))}

    </div>
  )
};

export default YogaDescription;
