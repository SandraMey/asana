import React, { useEffect, useState } from "react";
import axios from "axios";
import "./adminTag.scss";

const AdminTag = () => {
  const [tags, setTags] = useState([]);
  const [title, setTitle] = useState("");

  const getTag = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/tag`);
    setTags(data);
  };
  useEffect(() => {
    getTag();
  }, []);

  const handleClickModify = async (e, id) => {
    e.preventDefault();
    const values = { title };
    await axios.put(`${process.env.REACT_APP_API_URL}/tag/1`, values);
    await getTag();
  };
  const handleClickModify2 = async (e, id) => {
    e.preventDefault();
    const values = { title };
    await axios.put(`${process.env.REACT_APP_API_URL}/tag/2`, values);
    await getTag();
  };
  const handleClickModify3 = async (e, id) => {
    e.preventDefault();
    const values = { title };
    await axios.put(`${process.env.REACT_APP_API_URL}/tag/3`, values);
    await getTag();
  };

  return (
    <div className="admintag">
      <h2>Liste des tag</h2>
      <div className="containertag">
        {tags.map((tag) => (
          <div className="tag">
            <p className="pAdmin">{tag.title}</p>
          </div>
        ))}
      </div>
        <form>
          <label htmlFor="title">Tag 1 : 
            <input
              id="title"
              type="text"
              placeholder="Nouveau tag"
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <button className="buttonhandle" type="submit" onClick={handleClickModify}>
            Modifier
          </button>
        </form>
        <form>
          <label htmlFor="title">Tag 2 : 
            <input
              id="title"
              type="text"
              placeholder="Nouveau tag"
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <button className="buttonhandle" type="submit" onClick={handleClickModify2}>
            Modifier
          </button>
        </form>
        <form>
          <label htmlFor="title">Tag 3 : 
            <input
              id="title"
              type="text"
              placeholder="Nouveau tag"
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <button className="buttonhandle" type="submit" onClick={handleClickModify3}>
            Modifier
          </button>
        </form>

    </div>
  );
};

export default AdminTag;
