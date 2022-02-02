import React, { useEffect, useState } from 'react';
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
    <div className="admindesc">
      <h2>Mes description</h2>
      <div className="containerdesc">
        {desc.map((d) => (
          <div className="description">
            <p>{d.title}</p>
            <p>{d.intro}</p>
            <p>{d.picture}</p>
            <p>{d.subtitle1}</p>
            <p>{d.subtitle2}</p>
            <p>{d.text1}</p>
            <p>{d.text2}</p>
            <button type="button" onClick={() => handleClickDelete(d.id)}>Supprimer</button>
          </div>
        ))}

      </div>
    </div>
  )
};

export default AdminDescription;
