import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './adminTag.scss';

const AdminTag = () => {
  const [tags, setTags] = useState([]);

  const getTag = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/tag`,
    );
    setTags(data);
  };
  useEffect(() => {
    getTag();
  }, []);

  const handleSubmitTag = async (id) => {
    await axios.put(`${process.env.REACT_APP_API_URL}/tag/${id}`, { title: 1 });
    await getTag();
  };

  return (
    <div className="admintag">
      <h2>Liste des tag</h2>
      <div className="containertag">
        {tags.map((d) => (
          <div className="tag">
            <p className="pAdmin">{d.title}</p>
            <input type="text" placeholder="Nouveau tag" id="title" />
            <button type="button" onClick={() => handleSubmitTag(tags.id)}>Modifier</button>
          </div>
        ))}
      </div>
    </div>
  )
};

export default AdminTag;
