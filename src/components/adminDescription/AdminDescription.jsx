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
      <h2>Liste des Yoga</h2>
      <div className="containerdesc">
        {desc.map((d) => (
          <div className="description">
            <p>{d.title}</p>
            <button type="button" onClick={() => handleClickDelete(d.id)}>Supprimer</button>
          </div>
        ))}
          <Link to={`/admincreate`}>Créer une Fiche Yoga</Link>
      </div>
    </main>
  )
};

export default AdminDescription;
