import React from "react";
import { Link } from "react-router-dom";
import profile from "../../assets/profile.png";
import linkedin from "../../assets/linkedin.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="imgContainer">
        <img src={profile} alt=""></img>
      </div>
      <div className="containertext">
        <p>Par içi pour me contacter</p>
      </div>
      <div className="linkedin">
        <a href="https://www.linkedin.com/in/sandra-meyniel">
          <img className="icon" src={linkedin} alt="linkedIn" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
