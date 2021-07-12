import React, { useState } from "react";
import { Link } from "react-router-dom";


import { Dropdown, Nav, Tab } from "react-bootstrap";

import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import BasicDatatable from "./../../table/BasicDatatable";
import LineChart8 from "../../charts/Chartjs/line3";
import styles from './PostDetails.module.css'
const PostDetails = () => {

   return (
      <div>
         <div>
            <div className="page-titles">
            <div className="mr-auto d-none d-lg-block">
               <h2 className=" font-w600 text-white">Your Policy</h2>
             
            </div>
            </div>
          
            <div className="row">
            <div className="col-xl-6 col-xxl-6">
                     <div className="card" id="user-activity">
                        <Tab.Container defaultActiveKey="monthly">
                           <div className="card-header pb-0 d-block d-sm-flex border-0">
                              <h3 className="fs-20  mb-0">
                           Total Summary
                              </h3>
                              <div className="card-action card-tabs mt-3 mt-sm-0">
                                 <Nav
                                    as="ul"
                                    className="nav nav-tabs"
                                    role="tablist"
                                 >
                                    <Nav.Item as="li" className="nav-item">
                                       <Nav.Link
                                          className="nav-link"
                                          eventKey="monthly"
                                          role="tab"
                                       >
                                          Monthly
                                       </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                       <Nav.Link
                                          className="nav-link"
                                          eventKey="weekly"
                                          role="tab"
                                       >
                                          Weekly
                                       </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li" className="nav-item">
                                       <Nav.Link
                                          className="nav-link"
                                          eventKey="today"
                                          role="tab"
                                       >
                                          Today
                                       </Nav.Link>
                                    </Nav.Item>
                                 </Nav>
                              </div>
                           </div>
                           <div className="card-body">
                              <div className="d-sm-flex mb-4 d-block justify-content-between align-items-center">
                                 <div className>
                                    <h1 className=" mb-1 font-w600">
                                       867,123k
                                    </h1>
                                    <svg
                                       className="mr-2"
                                       width={18}
                                       height={10}
                                       viewBox="0 0 26 13"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          d="M26 13L13 5.68248e-07L0 13"
                                          fill="#52B141"
                                       />
                                    </svg>
                                    <span className="text-primary fs-14">
                                       +9% from last month
                                    </span>
                                 </div>
                                 <Link
                                    to="/analytics"
                                    className="text-primary btn border mt-sm-0 mt-3"
                                 >
                                    Download CSV
                                 </Link>
                              </div>
                              <Tab.Content
                                 className="tab-content"
                                 id="myTabContent"
                              >
                                 <div className="row">
                                 <div className="col-md-6">
                     <div  className="card widget-stat ">
                        <div className={`card-body p-4 ${styles.lightPurpleBackground}`} >
                           <div  className="media align-items-center">
                              <div className="media-body">
                                 <p className="fs-18 mb-2 wspace-no">
                                    Total Campaign
                                 </p>
                                 <h1 className="fs-36 font-w600 text-black mb-0">
                                    67,124
                                 </h1>
                              </div>
                              <span className={`ml-3  text-white ${styles.darkNavyBG}`} >
                                 <i className="flaticon-381-promotion" />
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="col-md-6">
                     <div className="card widget-stat">
                        <div  className={`card-body p-4 ${styles.lightPurpleBackground}`}>
                           <div className="media align-items-center">
                              <div className="media-body">
                                 <p className="fs-18 mb-2 wspace-no">
                                    Total Audience
                                 </p>
                                 <h1 className="fs-36 font-w600 d-flex align-items-center text-black mb-0">
                                    412,531
                                 </h1>
                              </div>
                              <span className={`ml-3  text-white ${styles.darkNavyBG}`}>
                                 <i className="flaticon-381-user-7" />
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="card widget-stat">
                        <div  className={`card-body p-4 ${styles.lightPurpleBackground}`}>
                           <div className="media align-items-center">
                              <div className="media-body">
                                 <p className="fs-18 mb-2 wspace-no">
                                    Spends Yesterday
                                 </p>
                                 <h1 className="fs-36 font-w600 text-black mb-0">
                                    $4,567
                                 </h1>
                              </div>
                              <span className={`ml-3  text-white ${styles.darkNavyBG}`}>
                                 <i className="fa fa-usd" />
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
                  
                  <div className="col-md-6">
                     <div className="card widget-stat">
                        <div className={`card-body p-4 ${styles.lightPurpleBackground}`}>
                           <div className="media align-items-center">
                              <div className="media-body">
                                 <p className="fs-18 mb-2 wspace-no">
                                    Spends Today
                                 </p>
                                 <h1 className="fs-36 font-w600 text-black mb-0">
                                    $5,245
                                 </h1>
                              </div>
                              <span className={`ml-3  text-white ${styles.darkNavyBG}`}>
                                 <i className="flaticon-381-calendar-1" />
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
                                 </div>
                     
               
                
                              </Tab.Content>
                           </div>
                        </Tab.Container>
                     </div>
                  </div>
                  <div className="col-xl-6">
                     <div className="card">
                        <div className="card-header border-0">
                           <h3 className="fs-20 mb-0">
                              🔥 Most Performed 
                           </h3>
                           <Dropdown className=" ml-auto">
                              <Dropdown.Toggle
                                 variant=""
                                 className="icon-false btn-link p-0"
                              >
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    version="1.1"
                                 >
                                    <g
                                       stroke="none"
                                       strokeWidth={1}
                                       fill="none"
                                       fillRule="evenodd"
                                    >
                                       <rect
                                          x={0}
                                          y={0}
                                          width={24}
                                          height={24}
                                       />
                                       <circle
                                          fill="#000000"
                                          cx={12}
                                          cy={5}
                                          r={2}
                                       />
                                       <circle
                                          fill="#000000"
                                          cx={12}
                                          cy={12}
                                          r={2}
                                       />
                                       <circle
                                          fill="#000000"
                                          cx={12}
                                          cy={19}
                                          r={2}
                                       />
                                    </g>
                                 </svg>
                              </Dropdown.Toggle>
                              <Dropdown.Menu className="dropdown-menu-right">
                                 <Dropdown.Item
                                   
                                    to="/analytics"
                                 >
                                    Info
                                 </Dropdown.Item>
                                 <Dropdown.Item
                                 
                                    to="/analytics"
                                 >
                                    Details
                                 </Dropdown.Item>
                              </Dropdown.Menu>
                           </Dropdown>
                        </div>
                        <div className="card-body pb-0 d-block">
                           <div className="row mb-4 border-bottom sp10 align-items-center">
                              <div className="mb-4 col-md-7 col-sm-6 col-xxl-5">
                                 <p className="text-primary mb-1">#ADS001245</p>
                                 <h3 className="fs-18 mb-2 text-ov">
                                    <Link
                                     
                                       to="/social-network-campaign"
                                    >
                                       50% OFF Floor Lamp Get it Now!
                                    </Link>
                                 </h3>
                                
                              </div>
                              <div className="d-flex col-md-5 col-sm-6 col-xxl-7 align-items-center justify-content-between">
                                 <div className="d-flex mb-4 align-items-center">
                                    <svg
                                       className="mr-3 mw-28"
                                       width={28}
                                       height={28}
                                       viewBox="0 0 28 28"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          d="M7.875 15.75H2.625C2.14175 15.75 1.75 16.1418 1.75 16.625V25.375C1.75 25.8582 2.14175 26.25 2.625 26.25H7.875C8.35825 26.25 8.75 25.8582 8.75 25.375V16.625C8.75 16.1418 8.35825 15.75 7.875 15.75Z"
                                          fill="#C6A564"
                                       />
                                       <path
                                          d="M25.375 8.75H20.125C19.6418 8.75 19.25 9.14175 19.25 9.625V25.375C19.25 25.8582 19.6418 26.25 20.125 26.25H25.375C25.8582 26.25 26.25 25.8582 26.25 25.375V9.625C26.25 9.14175 25.8582 8.75 25.375 8.75Z"
                                          fill="#C6A564"
                                       />
                                       <path
                                          d="M16.625 1.75H11.375C10.8918 1.75 10.5 2.14175 10.5 2.625V25.375C10.5 25.8582 10.8918 26.25 11.375 26.25H16.625C17.1082 26.25 17.5 25.8582 17.5 25.375V2.625C17.5 2.14175 17.1082 1.75 16.625 1.75Z"
                                          fill="#C6A564"
                                       />
                                    </svg>
                                    <div>
                                       <h3 className="fs-20 mb-0">
                                          $63.04
                                       </h3>
                                       <span className="fs-14">Conversion</span>
                                    </div>
                                 </div>
                                 <div className="d-flex mb-4 align-items-center">
                                    <svg
                                       className="mr-3 mw-28"
                                       width={28}
                                       height={28}
                                       viewBox="0 0 28 28"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <g clipPath="url(#clip1)">
                                          <path
                                             d="M14.0001 18.3131C16.3808 18.3131 18.3108 16.3831 18.3108 14.0024C18.3108 11.6217 16.3808 9.69177 14.0001 9.69177C11.6194 9.69177 9.68945 11.6217 9.68945 14.0024C9.68945 16.3831 11.6194 18.3131 14.0001 18.3131Z"
                                             fill="#46A985"
                                          />
                                          <path
                                             d="M27.5705 12.8083C24.257 8.80427 19.2413 4.95001 14.0001 4.95001C8.75776 4.95001 3.74086 8.80697 0.429583 12.8083C-0.143194 13.5002 -0.143194 14.5046 0.429583 15.1964C1.26208 16.2024 3.00735 18.1444 5.33834 19.8412C11.2089 24.1147 16.7783 24.1242 22.6618 19.8412C24.9928 18.1444 26.738 16.2024 27.5705 15.1964C28.1416 14.5059 28.1446 13.5025 27.5705 12.8083ZM14.0001 7.96747C17.3279 7.96747 20.035 10.6746 20.035 14.0024C20.035 17.3302 17.3279 20.0373 14.0001 20.0373C10.6722 20.0373 7.96514 17.3302 7.96514 14.0024C7.96514 10.6746 10.6722 7.96747 14.0001 7.96747Z"
                                             fill="#46A985"
                                          />
                                       </g>
                                       <defs>
                                          <clipPath id="clip1">
                                             <rect
                                                width={28}
                                                height={28}
                                                fill="white"
                                             />
                                          </clipPath>
                                       </defs>
                                    </svg>
                                    <div>
                                       <h3 className="fs-20 mb-0">
                                          5,412k
                                       </h3>
                                       <span className="fs-14">Viewers</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="row mb-4 border-bottom sp10 align-items-center">
                              <div className="mb-4 col-md-7 col-sm-6 col-xxl-5">
                                 <p className="text-primary mb-0">#ADS001245</p>
                                 <h3 className="fs-18 mb-3 text-ov">
                                    <Link
                                      
                                       to="/social-network-campaign"
                                    >
                                       $632 Target Gift Card on New Ye..
                                    </Link>
                                 </h3>
                                
                              </div>
                              <div className="d-flex col-md-5 col-sm-6 col-xxl-7 align-items-center justify-content-between">
                                 <div className="d-flex mb-4 align-items-center">
                                    <svg
                                       className="mr-3 mw-28"
                                       width={28}
                                       height={28}
                                       viewBox="0 0 28 28"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          d="M7.875 15.75H2.625C2.14175 15.75 1.75 16.1418 1.75 16.625V25.375C1.75 25.8582 2.14175 26.25 2.625 26.25H7.875C8.35825 26.25 8.75 25.8582 8.75 25.375V16.625C8.75 16.1418 8.35825 15.75 7.875 15.75Z"
                                          fill="#C6A564"
                                       />
                                       <path
                                          d="M25.375 8.75H20.125C19.6418 8.75 19.25 9.14175 19.25 9.625V25.375C19.25 25.8582 19.6418 26.25 20.125 26.25H25.375C25.8582 26.25 26.25 25.8582 26.25 25.375V9.625C26.25 9.14175 25.8582 8.75 25.375 8.75Z"
                                          fill="#C6A564"
                                       />
                                       <path
                                          d="M16.625 1.75H11.375C10.8918 1.75 10.5 2.14175 10.5 2.625V25.375C10.5 25.8582 10.8918 26.25 11.375 26.25H16.625C17.1082 26.25 17.5 25.8582 17.5 25.375V2.625C17.5 2.14175 17.1082 1.75 16.625 1.75Z"
                                          fill="#C6A564"
                                       />
                                    </svg>
                                    <div>
                                       <h3 className="fs-20 mb-0">
                                          $21.51
                                       </h3>
                                       <span className="fs-14">Conversion</span>
                                    </div>
                                 </div>
                                 <div className="d-flex mb-4 align-items-center">
                                    <svg
                                       className="mr-3 mw-28"
                                       width={28}
                                       height={28}
                                       viewBox="0 0 28 28"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <g clipPath="url(#clip2)">
                                          <path
                                             d="M14.0001 18.3131C16.3808 18.3131 18.3108 16.3831 18.3108 14.0024C18.3108 11.6217 16.3808 9.69177 14.0001 9.69177C11.6194 9.69177 9.68945 11.6217 9.68945 14.0024C9.68945 16.3831 11.6194 18.3131 14.0001 18.3131Z"
                                             fill="#46A985"
                                          />
                                          <path
                                             d="M27.5705 12.8083C24.257 8.80427 19.2413 4.95001 14.0001 4.95001C8.75776 4.95001 3.74086 8.80697 0.429583 12.8083C-0.143194 13.5002 -0.143194 14.5046 0.429583 15.1964C1.26208 16.2024 3.00735 18.1444 5.33834 19.8412C11.2089 24.1147 16.7783 24.1242 22.6618 19.8412C24.9928 18.1444 26.738 16.2024 27.5705 15.1964C28.1416 14.5059 28.1446 13.5025 27.5705 12.8083ZM14.0001 7.96747C17.3279 7.96747 20.035 10.6746 20.035 14.0024C20.035 17.3302 17.3279 20.0373 14.0001 20.0373C10.6722 20.0373 7.96514 17.3302 7.96514 14.0024C7.96514 10.6746 10.6722 7.96747 14.0001 7.96747Z"
                                             fill="#46A985"
                                          />
                                       </g>
                                       <defs>
                                          <clipPath id="clip2">
                                             <rect
                                                width={28}
                                                height={28}
                                                fill="white"
                                             />
                                          </clipPath>
                                       </defs>
                                    </svg>
                                    <div>
                                       <h3 className="fs-20 mb-0">
                                          2,415k
                                       </h3>
                                       <span className="fs-14">Viewers</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="row mb-4 sp10 align-items-center">
                              <div className="mb-4 col-md-7 col-sm-6 col-xxl-5">
                                 <p className="text-primary mb-0">#ADS001245</p>
                                 <h3 className="fs-18 mb-3 text-ov">
                                    <Link
                                     
                                       to="/social-network-campaign"
                                    >
                                       50% OFF Floor Lamp Get it Now!
                                    </Link>
                                 </h3>
                               
                              </div>
                              <div className="d-flex col-md-5 col-sm-6 col-xxl-7 align-items-center justify-content-between">
                                 <div className="d-flex mb-4 align-items-center">
                                    <svg
                                       className="mr-3 mw-28"
                                       width={28}
                                       height={28}
                                       viewBox="0 0 28 28"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <path
                                          d="M7.875 15.75H2.625C2.14175 15.75 1.75 16.1418 1.75 16.625V25.375C1.75 25.8582 2.14175 26.25 2.625 26.25H7.875C8.35825 26.25 8.75 25.8582 8.75 25.375V16.625C8.75 16.1418 8.35825 15.75 7.875 15.75Z"
                                          fill="#C6A564"
                                       />
                                       <path
                                          d="M25.375 8.75H20.125C19.6418 8.75 19.25 9.14175 19.25 9.625V25.375C19.25 25.8582 19.6418 26.25 20.125 26.25H25.375C25.8582 26.25 26.25 25.8582 26.25 25.375V9.625C26.25 9.14175 25.8582 8.75 25.375 8.75Z"
                                          fill="#C6A564"
                                       />
                                       <path
                                          d="M16.625 1.75H11.375C10.8918 1.75 10.5 2.14175 10.5 2.625V25.375C10.5 25.8582 10.8918 26.25 11.375 26.25H16.625C17.1082 26.25 17.5 25.8582 17.5 25.375V2.625C17.5 2.14175 17.1082 1.75 16.625 1.75Z"
                                          fill="#C6A564"
                                       />
                                    </svg>
                                    <div>
                                       <h3 className="fs-20 mb-0">
                                          $67.44
                                       </h3>
                                       <span className="fs-14">Conversion</span>
                                    </div>
                                 </div>
                                 <div className="d-flex mb-4 align-items-center">
                                    <svg
                                       className="mr-3 mw-28"
                                       width={28}
                                       height={28}
                                       viewBox="0 0 28 28"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg"
                                    >
                                       <g clipPath="url(#clip3)">
                                          <path
                                             d="M14.0001 18.3131C16.3808 18.3131 18.3108 16.3831 18.3108 14.0024C18.3108 11.6217 16.3808 9.69177 14.0001 9.69177C11.6194 9.69177 9.68945 11.6217 9.68945 14.0024C9.68945 16.3831 11.6194 18.3131 14.0001 18.3131Z"
                                             fill="#46A985"
                                          />
                                          <path
                                             d="M27.5705 12.8083C24.257 8.80427 19.2413 4.95001 14.0001 4.95001C8.75776 4.95001 3.74086 8.80697 0.429583 12.8083C-0.143194 13.5002 -0.143194 14.5046 0.429583 15.1964C1.26208 16.2024 3.00735 18.1444 5.33834 19.8412C11.2089 24.1147 16.7783 24.1242 22.6618 19.8412C24.9928 18.1444 26.738 16.2024 27.5705 15.1964C28.1416 14.5059 28.1446 13.5025 27.5705 12.8083ZM14.0001 7.96747C17.3279 7.96747 20.035 10.6746 20.035 14.0024C20.035 17.3302 17.3279 20.0373 14.0001 20.0373C10.6722 20.0373 7.96514 17.3302 7.96514 14.0024C7.96514 10.6746 10.6722 7.96747 14.0001 7.96747Z"
                                             fill="#46A985"
                                          />
                                       </g>
                                       <defs>
                                          <clipPath id="clip3">
                                             <rect
                                                width={28}
                                                height={28}
                                                fill="white"
                                             />
                                          </clipPath>
                                       </defs>
                                    </svg>
                                    <div>
                                       <h3 className="fs-20 text-white mb-0">
                                          7,345k
                                       </h3>
                                       <span className="fs-14">Viewers</span>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <BasicDatatable />
           </div>
         </div>
      </div>
   );
};

export default PostDetails;
