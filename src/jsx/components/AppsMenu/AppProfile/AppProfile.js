import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
//** Import Image */
import profile01 from "../../../../images/profile/1.jpg";
import profile02 from "../../../../images/profile/2.jpg";
import profile03 from "../../../../images/profile/3.jpg";
import profile04 from "../../../../images/profile/4.jpg";
import profile05 from "../../../../images/profile/5.jpg";
import profile06 from "../../../../images/profile/6.jpg";
import profile07 from "../../../../images/profile/7.jpg";
import profile08 from "../../../../images/profile/8.jpg";
import profile09 from "../../../../images/profile/9.jpg";
import profile from "../../../../images/profile/profile.png";
import { Dropdown, Button, Modal } from "react-bootstrap";
import MessengerImg from './img/messenger.png'
import RegistrationImg from './img/registration.png'
import EarnMoneyImg from './img/earn-money.png'
import PageTitle from "../../../layouts/PageTitle";

import { SRLWrapper } from "simple-react-lightbox";
import styles from './AppProfile.module.css'
const AppProfile = () => {
   const [activeToggle, setActiveToggle] = useState("posts");
   const [sendMessage, setSendMessage] = useState(false);

   const [replay, setReplay] = useState(false);

   const options = {
      settings: {
         overlayColor: "#000000",
      },
   };
   return (
      <Fragment>
       <div className="mr-auto d-none d-lg-block">
               <h2 className=" font-w600 text-white">Profile</h2>
             
            </div>

         <div className="row">
         <div className="col-xl-4 col-lg-12 col-xxl-12 col-sm-12">
                  <div className="card overflow-hidden">
                     <div
                        className="text-center p-5 overlay-box"
                      
                     >
                        <img
                           src={profile}
                           width={100}
                           className="img-fluid rounded-circle"
                           alt="profile"
                        />
                        <h3 className="mt-3 mb-0 text-white">Deangelo Sena</h3>
                     </div>
                     <div className="card-body">
                        <div className="row text-center">
                           <div className="col-6">
                              <div className="bgl-primary rounded p-3">
                                 <h4 className="mb-0">Male</h4>
                                 <small>Patient Gender</small>
                              </div>
                           </div>
                           <div className="col-6">
                              <div className="bgl-primary rounded p-3">
                                 <h4 className="mb-0">Age: 24</h4>
                                 <small>Years Old</small>
                              </div>
                           </div>
                           
                           <div className="col-6 mt-5">
                              <div className="bgl-primary rounded p-3">
                                 <h4 className="mb-0">Email</h4>
                                 <small>deangelsane@gmail.com</small>
                              </div>
                           </div>
                           <div className="col-6 mt-5">
                              <div className="bgl-primary rounded p-3">
                                 <h4 className="mb-0">Contact Number</h4>
                                 <small>+49 7412547164</small>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="card-footer mt-0">
                        <button className={`btn  btn-lg btn-block ${styles.btnpurple }`}>
                           View Profile
                        </button>
                     </div>
                  </div>
               </div>
         <div className="col-xl-8 col-lg-8 col-xxl-8 col-sm-12">
                  <div className="card overflow-hidden">
                     <div
                        className="text-left p-5 overlay-box"
                      
                     >
                      <h1>Referrals</h1>
                        <h5 className="mt-3 mb-0 text-white">Invite your friends to Panacea. If they sign up, you and your friend will earn % commission.</h5>
                     </div>
                     <div className="card-body">
                        <div className="row text-center">
                           <div className="col-4">
                           <img style={{maxWidth: "50px", background: "white"}} className="img-fluid" src={MessengerImg} />
                           <h5>Send Invitaton</h5>
                           </div>
                           <div className="col-4">
                           <img style={{maxWidth: "50px", background: "white"}} className="img-fluid" src={RegistrationImg} />
                           <h5>Registration</h5>
                           </div>
                           
                           <div className="col-4 ">
                           <img style={{maxWidth: "50px", background: "white"}} className="img-fluid" src={EarnMoneyImg} />
                           <h5>Earn Commission</h5>
                           </div>
                           <div className="col-6 mt-5">
                              <div className="bgl-primary rounded p-3">
                                 <h4 className="mb-0">Contact Number</h4>
                                 <small>+49 7412547164</small>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="card-footer mt-0">
                        <button className={`btn  btn-lg btn-block ${styles.btnpurple }`}>
                           View Profile
                        </button>
                     </div>
                  </div>
               </div>
         </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </Fragment>
    
   );
};

export default AppProfile;
