import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './adminDescription.scss'

const AdminDescription = () => {
  const [desc, setDesc] = useState([]);

  const getAllDesc = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/yoga`);
    setDesc(data);
  };
  useEffect(() => {
    getAllDesc();
  }, []);
  const handleClickDelete = async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/yoga/${id}`, [id]);
    getAllDesc();
  };
console.log(desc);
  return (
    <main className="admindesc">
      <h2>Liste des fiches Yoga</h2>
      <div className="containerdesc">
        {desc.map((d) => (
          <div className="description">
            <p className="pAdmin">{d.title}</p>
            <button type="button" className="buttonAdmin" onClick={() => handleClickDelete(d.id)}>Supprimer</button>
          </div>
        ))}
        <div className="containerLink">
          <Link to={`/admincreate`} className="linkAdmin">Créer une Fiche Yoga</Link>
          <Link to={`/admintag`} className="linktag">Modifier un Tag</Link>
        </div>
      </div>
    </main>
  )
};

export default AdminDescription;
