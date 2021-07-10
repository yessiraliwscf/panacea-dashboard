import React, { Component } from 'react'

/// Link
import { Link } from 'react-router-dom'

/// Scroll
import PerfectScrollbar from 'react-perfect-scrollbar'

/// Menu
import MetisMenu from 'metismenujs'

///
// import drump from "../../../images/card/drump.png";

class MM extends Component {
  componentDidMount() {
    this.$el = this.el
    this.mm = new MetisMenu(this.$el)
  }
  componentWillUnmount() {
    // this.mm("dispose");
    // console.log(this.mm);
  }
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    )
  }
}

class SideBar extends Component {
  /// Open menu
  componentDidMount() {
    // sidebar open/close
    var btn = document.querySelector('.nav-control')
    var aaa = document.querySelector('#main-wrapper')

    function toggleFunc() {
      return aaa.classList.toggle('menu-toggle')
    }

    btn.addEventListener('click', toggleFunc)

    //sidebar icon Heart blast
    var handleheartBlast = document.querySelector('.heart')

    function heartBlast() {
      return handleheartBlast.classList.toggle('heart-blast')
    }

    handleheartBlast.addEventListener('click', heartBlast)
  }
  render() {
    /// Path
    var path = window.location.pathname
    path = path.split('/')
    path = path[path.length - 1]

    /// Active menu
    let deshBoard = [
        '',
        'analytics',
        'campaign',
        'social-network-campaign',
        'spendings',
        'new-compaign',
      ],
      app = [
        'app-profile',
        'app-calender',
        'email-compose',
        'email-inbox',
        'email-read',
        'ecom-product-grid',
        'ecom-product-list',
        'ecom-product-list',
        'ecom-product-order',
        'ecom-checkout',
        'ecom-invoice',
        'ecom-customers',
        'post-details',
        'ecom-product-detail',
      ],
      email = ['email-compose', 'email-inbox', 'email-read'],
      shop = [
        'ecom-product-grid',
        'ecom-product-list',
        'ecom-product-list',
        'ecom-product-order',
        'ecom-checkout',
        'ecom-invoice',
        'ecom-customers',
        'ecom-product-detail',
      ],
      charts = [
        'chart-rechart',
        'chart-flot',
        'chart-chartjs',
        'chart-chartist',
        'chart-sparkline',
        'chart-apexchart',
      ],
      bootstrap = [
        'ui-accordion',
        'ui-badge',
        'ui-alert',
        'ui-button',
        'ui-modal',
        'ui-button-group',
        'ui-list-group',
        'ui-media-object',
        'ui-card',
        'ui-carousel',
        'ui-dropdown',
        'ui-popover',
        'ui-progressbar',
        'ui-tab',
        'ui-typography',
        'ui-pagination',
        'ui-grid',
      ],
      plugins = [
        'uc-select2',
        'uc-nestable',
        'uc-sweetalert',
        'uc-toastr',
        'uc-noui-slider',
        'map-jqvmap',
      ],
      widget = ['widget-basic'],
      forms = [
        'form-element',
        'form-wizard',
        'form-editor-summernote',
        'form-pickers',
        'form-validation-jquery',
      ],
      table = ['table-bootstrap-basic', 'table-datatable-basic'],
      pages = [
        'page-register',
        'page-login',
        'page-lock-screen',
        'page-error-400',
        'page-error-403',
        'page-error-404',
        'page-error-500',
        'page-error-503',
      ],
      error = [
        'page-error-400',
        'page-error-403',
        'page-error-404',
        'page-error-500',
        'page-error-503',
      ]
    return (
      <div className="deznav">
        <PerfectScrollbar className="deznav-scroll">
          <MM className="metismenu" id="menu">
            <li className={`${deshBoard.includes(path) ? 'mm-active' : ''}`}>
              <Link className="has-arrow ai-icon" to="#" aria-expanded="false">
                <i className="flaticon-381-networking"></i>
                <span className="nav-text">Dashboard</span>
              </Link>
              <ul aria-expanded="false">
                <li>
                  <Link to="/" className={`${path === '' ? 'mm-active' : ''}`}>
                    Dashboard
                  </Link>
                </li>
              </ul>
            </li>
            <li className={`${app.includes(path) ? 'mm-active' : ''}`}>
              <Link className="has-arrow ai-icon" to="/post-details" aria-expanded="false">
                <i className="flaticon-381-television"></i>
                <span className="nav-text">Your Policy</span>
              </Link>
         
            </li>
            <li className={`${charts.includes(path) ? 'mm-active' : ''}`}>
              <Link className="has-arrow ai-icon" to="/social-network-campaign" aria-expanded="false">
                <i className="flaticon-381-network"></i>
                <span className="nav-text">Donations</span>
              </Link>
           
            </li>
            <li className={`${bootstrap.includes(path) ? 'mm-active' : ''}`}>
              <Link className="has-arrow ai-icon" to="/app-profile" aria-expanded="false">
                <i class="flaticon-381-settings-2"></i>
                <span className="nav-text">Profile</span>
              </Link>
             
            </li>
            <li className={`${plugins.includes(path) ? 'mm-active' : ''}`}>
              <Link className="has-arrow ai-icon" to="/uc-select2" aria-expanded="false">
                <i class="flaticon-381-notepad"></i>
                <span className="nav-text">Activity</span>
              </Link>
             
            </li>
            <li className={`${widget.includes(path) ? 'mm-active' : ''}`}></li>
            <li className={`${forms.includes(path) ? 'mm-active' : ''}`}>
              <ul aria-expanded="false">
                <li>
                  <Link
                    className={`${
                      path === 'form-editor-summernote' ? 'mm-active' : ''
                    }`}
                    to="/form-editor-summernote"
                  >
                    Summernote
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === 'form-pickers' ? 'mm-active' : ''}`}
                    to="/form-pickers"
                  >
                    Pickers
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === 'form-validation-jquery' ? 'mm-active' : ''
                    }`}
                    to="/form-validation-jquery"
                  >
                    Jquery Validate
                  </Link>
                </li>
              </ul>
            </li>
            <li className={`${table.includes(path) ? 'mm-active' : ''}`}>
              <ul aria-expanded="false">
                <li>
                  <Link
                    className={`${
                      path === 'table-bootstrap-basic' ? 'mm-active' : ''
                    }`}
                    to="/table-bootstrap-basic"
                  >
                    Bootstrap
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === 'table-datatable-basic' ? 'mm-active' : ''
                    }`}
                    to="/table-datatable-basic"
                  >
                    Datatable
                  </Link>
                </li>
              </ul>
            </li>
            <li className={`${pages.includes(path) ? 'mm-active' : ''}`}>
              <ul aria-expanded="false">
                <li>
                  <Link to="/page-register">Register</Link>
                </li>
                <li>
                  <Link to="/page-login">Login</Link>
                </li>
                <li className={`${error.includes(path) ? 'mm-active' : ''}`}>
                  <Link className="has-arrow" to="#" aria-expanded="false">
                    Error
                  </Link>
                  <ul aria-expanded="false">
                    <li>
                      <Link
                        className={`${
                          path === 'page-error-400' ? 'mm-active' : ''
                        }`}
                        to="/page-error-400"
                      >
                        Error 400
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === 'page-error-403' ? 'mm-active' : ''
                        }`}
                        to="/page-error-403"
                      >
                        Error 403
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === 'page-error-404' ? 'mm-active' : ''
                        }`}
                        to="/page-error-404"
                      >
                        Error 404
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === 'page-error-500' ? 'mm-active' : ''
                        }`}
                        to="/page-error-500"
                      >
                        Error 500
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === 'page-error-503' ? 'mm-active' : ''
                        }`}
                        to="/page-error-503"
                      >
                        Error 503
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    className={`${
                      path === 'page-lock-screen' ? 'mm-active' : ''
                    }`}
                    to="/page-lock-screen"
                  >
                    Lock Screen
                  </Link>
                </li>
              </ul>
            </li>
          </MM>
          <div className="copyright">
            <p className="fs-14 font-w200">
              <strong className="font-w400">Panacea</strong> ©
              2021 All Rights Reserved
            </p>
            <p>
              Made with <span class="heart"></span>
            </p>
          </div>
        </PerfectScrollbar>
      </div>
    )
  }
}

export default SideBar
