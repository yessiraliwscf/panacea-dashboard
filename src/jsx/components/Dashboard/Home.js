import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Nav, Tab } from "react-bootstrap";
import styles from './Home.module.css'
import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
const ApexNagetivePosative3 = loadable(() =>
   pMinDelay(import("../charts/apexcharts/NagetivePositive3"), 500)
);
const ApexRedialBar2 = loadable(() =>
   pMinDelay(import("../charts/apexcharts/RadialBar2"), 500)
);
const LineChart7 = loadable(() =>
   pMinDelay(import("../charts/Chartjs/line7"), 0)
);

function Home() {
   return (
      <>
         <div className="form-head d-flex mb-0 mb-lg-4 align-items-start">
            <div className="mr-auto d-none d-lg-block">
               <h2 className="font-w600 mb-1">Dashboard</h2>
               <p className="mb-0">Welcome To Panacea</p>
            </div>
            <div className="d-none d-lg-flex align-items-center">
               <div className="text-right">
                  <h3 className="fs-20  mb-0">09:62 AM</h3>
                  <span className="fs-14">Monday, 3 Augusut 2020</span>
               </div>
               <Link
                  className="ml-4  p-3 rounded border text-center width60"
                  to="/"
               >
                  <i className="las la-cog scale5" />
               </Link>
            </div>
         </div>
         <div className="row">
            <div className="col-lg-12 col-xxl-12">
               <div className="row">
                  <div className="col-lg-3 col-sm-6">
                     <div className="card widget-stat ">
                        <div className="card-body p-4">
                           <div className="media align-items-center">
                              <div className="media-body">
                                 <p className="fs-18 mb-2 wspace-no">
                                 Total Payments
                                 </p>
                                 <h1 className="fs-36 font-w600  mb-0">
                                   14
                                 </h1>
                              </div>
                              <span className={`ml-3 text-white ${styles.bgPurple}`} >
                                 <i className="flaticon-381-promotion" />
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <div className="card widget-stat">
                        <div className="card-body p-4">
                           <div className="media align-items-center">
                              <div className="media-body">
                                 <p className="fs-18 mb-2 wspace-no">
                                 Manage Policy
                                 </p>
                                 <h1 className="fs-36 font-w600 d-flex align-items-center  mb-0">
                                   41
                                 </h1>
                              </div>
                              <span className={`ml-3 text-white ${styles.bgPurple}`}>
                                 <i className="flaticon-381-user-7" />
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <div className="card widget-stat">
                        <div className="card-body p-4">
                           <div className="media align-items-center">
                              <div className="media-body">
                                 <p className="fs-18 mb-2 wspace-no">
                                 Premium Coverage
                                 </p>
                                 <h1 className="fs-36 font-w600 d-flex align-items-center  mb-0">
                                 26
                                 </h1>
                              </div>
                              <span className={`ml-3 text-white ${styles.bgPurple}`}>
                                 <i className="flaticon-381-user-7" />
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                     <div className="card widget-stat">
                        <div className="card-body p-4">
                           <div className="media align-items-center">
                              <div className="media-body">
                                 <p className="fs-18 mb-2 wspace-no">
                             Donations
                                 </p>
                                 <h1 className="fs-36 font-w600 d-flex align-items-center  mb-0">
                                74
                                 </h1>
                              </div>
                              <span className={`ml-3 text-white ${styles.bgPurple}`}>
                                 <i className="flaticon-381-user-7" />
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
                 
        
                  <div className="col-xl-12">
                     <div className="card">
                        <div className="card-body d-flex flex-wrap p-0">
                           <div className="col-lg-6 col-sm-6  media spending-bx">
                              <div className="spending-icon mr-4">
                                 <i
                                    className="fa fa-caret-up"
                                    aria-hidden="true"
                                 />
                                 <span className="fs-14">+5%</span>
                              </div>
                              <div className="media-body">
                                 <p className="fs-18 mb-2">Spends Today</p>
                                 <span className="fs-34 font-w600">$5,245</span>
                              </div>
                           </div>
                           <div className="col-lg-6 col-sm-6 media spending-bx pl-2">
                              <div className="media-body text-right">
                                 <p className="fs-18 mb-2">Spends Yesterday</p>
                                 <span className="fs-34 font-w600">$4,567</span>
                              </div>
                              <div className="spending-icon ml-4">
                                 <i
                                    className="fa fa-caret-down"
                                    aria-hidden="true"
                                 />
                                 <span className="fs-14">-2%</span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                 
                  <div className="col-xl-12">
                     <div className="card">
                        <div className="card-header border-0 pb-0">
                           <h3 className="fs-20 mb-0">
                              Goal Statistic
                           </h3>
                           <Dropdown className="ml-auto">
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
                                 <Dropdown.Item className="" to="/">
                                    Info
                                 </Dropdown.Item>
                                 <Dropdown.Item
                                    className="dropdown-item "
                                    to="/"
                                 >
                                    Details
                                 </Dropdown.Item>
                              </Dropdown.Menu>
                           </Dropdown>
                        </div>
                        <div className="card-body pt-3">
                           <div className="mb-3 d-flex justify-content-center">
                              <ApexRedialBar2 height={370} />
                           </div>
                           <div className="row">
                              <div className="col-sm-4 mb-sm-0 mb-3 media">
                                 <i className="lab la-instagram gs-icon border border-secondary text-secondary mr-3" />
                                 <div className="media-body">
                                    <p className="mb-1 font-w600">Instagram</p>
                                    <span className="fs-34  font-w500">
                                       73%
                                    </span>
                                 </div>
                              </div>
                              <div className="col-sm-4 mb-sm-0 mb-3 media">
                                 <i className="lab la-facebook-f gs-icon border border-info text-info mr-3" />
                                 <div className="media-body">
                                    <p className="mb-1 font-w600">Facebook</p>
                                    <span className="fs-34  font-w500">
                                       64%
                                    </span>
                                 </div>
                              </div>
                              <div className="col-sm-4 mb-sm-0 mb-3 media">
                                 <i className="lab la-twitter gs-icon border border-success text-success mr-3" />
                                 <div className="media-body">
                                    <p className="mb-1 font-w600">Twitter</p>
                                    <span className="fs-34 font-w500">
                                       48%
                                    </span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          
         </div>
         {/* </div>
        </div>
      </div> */}
      </>
   );
}

export default Home;
