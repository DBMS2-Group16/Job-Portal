import React from "react";
import "./Footer.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import image from "./logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        {/* <div>
          <img src={image} alt="logo" className="footerLogo" />
          <h3>Connect with us</h3>
          <span className="footerIcons">
            <AiFillFacebook />
            <AiFillInstagram />
            <AiOutlineTwitter />
            <AiFillLinkedin />
          </span>
        </div> */}
        {/* <div>
          <h3>Useful Links</h3>
          <p>Home</p>
          <p>Jobs</p>
          <p>Companies</p>
          <p>Profile</p>
         
        </div>
        <div>
          <h3>Need help?</h3>
          <p>About us</p>
          <p>Help center</p>
          <p>Summons/Notices</p>
          <p>Grievances</p>
         
        </div> */}
        {/* <div>
          <h3>Our Policies</h3>
          <p>Career</p>
          <p>Fraud alert</p>
          <p>Trust & safety</p>
          <p>Terms and Conditions</p>
        </div> */}
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
