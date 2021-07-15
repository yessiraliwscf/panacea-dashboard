import React from "react";

import { Link } from "react-router-dom";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

/// Image
import profile from "../../../images/profile/pic1.jpg";
import avatar from "../../../images/avatar/1.jpg";
import { Dropdown } from "react-bootstrap";
import styles from  './Header.module.css'
const Header = ({
   onNote,
   toggle,
   onProfile,
   onNotification,
   onBox,
}) => {
   let path = window.location.pathname.split("/");
   path = path[path.length - 1];
   path = path === "";

   return (
      <div className="header">
         <div className="header-content">
            <nav className="navbar navbar-expand">
               <div className="collapse navbar-collapse justify-content-between">
                  <div className="header-left">
                     <div className="search_bar dropdown show">
                        <div className="dropdown-menu p-0 m-0 show">
                          
                        </div>
                       
                     </div>
                  </div>

                  <ul className="navbar-nav header-right">
                   
                     <li className="nav-item dropdown notification_dropdown">
                        
                        <div
                           className={`dropdown-menu dropdown-menu-right ${
                              toggle === "notification" ? "show" : ""
                           }`}
                        >
                           <PerfectScrollbar
                              id="DZ_W_Notification1"
                              className={` widget-media dz-scroll p-3 height380 ${
                                 toggle === "notification"
                                    ? "ps ps--active-y"
                                    : ""
                              }`}
                           >
                              
                           </PerfectScrollbar>
                           <Link className="all-notification" to="#">
                              See all notifications{" "}
                              <i className="ti-arrow-right" />
                           </Link>
                        </div>
                     </li>
                
                     <li className="nav-item dropdown notification_dropdown">
                      
                        <div
                           className={`dropdown-menu dropdown-menu-right ${
                              toggle === "box" ? "show" : ""
                           }`}
                        >
                           <PerfectScrollbar
                              id="DZ_W_TimeLine02"
                              className={`widget-timeline dz-scroll style-1 p-3 height370 ${
                                 toggle === "box" ? "ps ps--active-y" : ""
                              }`}
                           >
                             
                           </PerfectScrollbar>
                        </div>
                     </li>

                     {path && (
                        <li className="nav-item dropdown ">
                           <Link className={`btn ${styles.btnpurple}`}  to="/new-compaign">
                              + New Policy
                           </Link>
                        </li>
                     )}
                     
                  </ul>
               </div>
            </nav>
         </div>
      </div>
   );
};

export default Header;
