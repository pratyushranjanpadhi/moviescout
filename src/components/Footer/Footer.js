import React from "react";
import { AiFillGithub } from "react-icons/ai";
import "./footer.scss";

const Footer = () => {
   return (
      <div className="footer">
         <div className="f-container">
            <div className="f-container__img-wrapper mb-small">
               <img className="f-container__logo" src="/tmdb-logo.svg" alt="logo-pic" />
               <a className="f-container__source" rel="noreferrer" target="_blank" href="https://github.com/pratyushranjanpadhi/moviescout">
                  <span>Source</span>
                  <AiFillGithub className="f-container__git" />{" "}
               </a>
            </div>
            <h3>
               Designed and Developed by{" "}
               <a target="_blank" rel="noreferrer" href="https://github.com/pratyushranjanpadhi">
                  Pratyush
               </a>
            </h3>
            <h3>Copyright &copy; movieScout 2021 | All Rights Reserved </h3>
         </div>
      </div>
   );
};

export default Footer;
