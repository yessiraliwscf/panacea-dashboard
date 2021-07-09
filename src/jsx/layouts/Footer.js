import React from "react";
import { Link } from "react-router-dom";
import styles from './Footer.module.css'
const Footer = () => {
   return (
      <div className={`footer ${styles.marginTop}`}>
         <div className="copyright">
            {/* <p>
               Copyright © Designed &amp; Developed by{" "}
               <a href="http://dexignzone.com/" target="_blank">
                 WSCF
               </a>{" "}
               2021
            </p> */}
         </div>
      </div>
   );
};

export default Footer;
