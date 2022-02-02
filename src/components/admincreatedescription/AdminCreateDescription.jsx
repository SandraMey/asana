import React, { useState } from 'react';
import axios from 'axios';
import "./adminCreateDescription.scss";

const AdminCreateDescription = () => {
  const [title, setTitle] = useState('');
  const [intro, setIntro] = useState('');
  const [subtitle1, setSubtitle1] = useState('');
  const [text1, setText1] = useState('');
  const [subtitle2, setSubtitle2] = useState('');
  const [text2, setText2] = useState('');
  const [id_tag, setId_tag] = useState('');
  const [picture, setPicture] = useState('');

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('intro', intro);
    formData.append('subtitle1', subtitle1);
    formData.append('text1', text1);
    formData.append('subtitle2', subtitle2);
    formData.append('text2', text2);
    formData.append('id_tag', id_tag);
    formData.append('picture', picture);
    await axios.post(`${process.env.REACT_APP_API_URL}/yoga`, formData);
  };
  return (
    <main className="adminCreate">
      <h2>Création d'une fiche Yoga</h2>
      <div className="containerYoga">
        <label
          htmlFor="title"
          id="title"
          onChange={(event) => setTitle(event.target.value)}
        >
          Nom : 
          <input type="text" placeholder="Nom" />
        </label>
        <label
          htmlFor="intro"
          id="intro"
          onChange={(event) => setIntro(event.target.value)}
        >
          Intro : 
          <textarea type="text" placeholder="Phrase d'intro"/>
        </label>
        <label
          htmlFor="subtitle1"
          id="subtitle1"
          onChange={(event) => setSubtitle1(event.target.value)}
        >
          Sous Titre : 
          <input type="text" placeholder="Qu'est ce que le '' ? " />
        </label>
        <label
          htmlFor="text1"
          id="text1"
          onChange={(event) => setText1(event.target.value)}
        >
          Texte : 
          <textarea type="text" placeholder="Explication" />
        </label>
        <label
          htmlFor="subtitle2"
          id="subtitle2"
          onChange={(event) => setSubtitle2(event.target.value)}
        >
          Sous Titre : 
          <input type="text" placeholder="Les bienfaits, un peu d'histoire... "/>
        </label>
        <label
          htmlFor="text2"
          id="text2"
          onChange={(event) => setText2(event.target.value)}
        >
          Texte : 
          <textarea type="text"  placeholder="Explication"/>
        </label>
        <label
          htmlFor="id_tag"
          id="id_tag"
          onChange={(event) => setId_tag(event.target.value)}
        >
          Tag : 
          <input type="number" />
        </label>
        <label
          htmlFor="picture"
          id="picture"
          onChange={(event) => setPicture(event.target.files[0])}
        >
          Télécharger une photo
          <input id="file" type="file" className="inputFileYoga" />
        </label>
      </div>
      <div className="containerbutton">
        <button className="buttonAdmin" type="button" onClick={handleSubmit}>
          Envoyer
        </button>
      </div>
    </main>
  );
};

export default AdminCreateDescription;
