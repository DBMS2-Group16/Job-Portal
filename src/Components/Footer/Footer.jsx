import React from "react";
import "./Footer.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="hey">
          <h3>Team Members</h3>
          <p>Hamza</p>
          {/* <p>sabka bap</p> */}
          <p>Ranveer</p>
          <p>Prajwal</p>
          <p>Ruchika</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
