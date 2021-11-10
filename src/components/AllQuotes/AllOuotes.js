import React from 'react'

import '../Dashboard/Dashboard.css'
import '../RfqBuyer/Buyer.css'
import { Link } from 'react-router-dom';

const AllOuotes = (props) => {
    return (
        <div className="App">
        <div className="layer"></div>
  
        <Link className="skip-link sr-only" to="#skip-target">Skip to content</Link>
        <div className="page-flex">
  
          <aside className="sidebar">
            <div className="sidebar-start">
              <div className="sidebar-head">
                <Link to="/" className="logo-wrapper" title="Home">
                  <span className="sr-only">Home</span>
                  <span className="icon logo" aria-hidden="true"></span>
                  <div className="logo-text">
                    <span className="logo-title">Elegant</span>
                    <span className="logo-subtitle">Dashboard</span>
                  </div>
                </Link>
                <button
                  className="sidebar-toggle transparent-btn"
                  title="Menu"
                  type="button"
                >
                  <span className="sr-only">Toggle menu</span>
                  <span className="icon menu-toggle" aria-hidden="true"></span>
                </button>
              </div>
              <div className="sidebar-body">
                <ul className="sidebar-body-menu">
                  <li>
                    <Link className="active" to="/"
                    ><span className="icon home" aria-hidden="true"></span
                    >Dashboard</Link
                    >
                  </li>
                  <li>
                    <Link className="show-cat-btn" to="##">
                      <span className="icon document" aria-hidden="true"></span>RFQ
  
                    </Link>
                    <ul className="cat-sub-menu">
                      <li>
                        <Link to="posts.html">All Posts</Link>
                      </li>
                      <li>
                        <Link to="new-post.html">Add new post</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link className="show-cat-btn" to="##">
                      <span className="icon folder" aria-hidden="true"></span>
                     <Link to='buyer'> Suppliers</Link>
                      <span className="category__btn transparent-btn" title="Open list">
                        <span className="sr-only">Open list</span>
                        <span className="icon arrow-down" aria-hidden="true"></span>
                      </span>
                    </Link>
                    <ul className="cat-sub-menu">
                      <li>
                        <Link to="categories.html">All categories</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link className="show-cat-btn" to="##">
                      <span className="icon image" aria-hidden="true"></span>Company Profile
  
                    </Link>
                    <ul className="cat-sub-menu">
                      <li>
                        <Link to="media-01.html">Media-01</Link>
                      </li>
                      <li>
                        <Link to="media-02.html">Media-02</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link className="show-cat-btn" to="##">
                      <span className="icon paper" aria-hidden="true"></span>
                      <Link to='Screw'> SQ</Link>
  
                    </Link>
                    <ul className="cat-sub-menu">
                      <li>
                        <Link to="pages.html">All pages</Link>
                      </li>
                      <li>
                        <Link to="new-page.html">Add new page</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="comments.html">
                      <span className="icon message" aria-hidden="true"></span>
                      <Link to="/allquotes">Notification ssu</Link>
                    </Link>
                    <span className="msg-counter">7</span>
                  </li>
                </ul>
                <span className="system-menu__title">system</span>
                <ul className="sidebar-body-menu">
                  <li>
                    <Link to="appearance.html"
                    ><span className="icon edit" aria-hidden="true"></span
                    >Appearance</Link
                    >
                  </li>
                  <li>
                    <Link className="show-cat-btn" to="##">
                      <span className="icon category" aria-hidden="true"></span
                      >Extentions
  
  
                    </Link>
                    <ul className="cat-sub-menu">
                      <li>
                        <Link to="extention-01.html">Extentions-01</Link>
                      </li>
                      <li>
                        <Link to="extention-02.html">Extentions-02</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link className="show-cat-btn" to="##">
                      <span className="icon user-3" aria-hidden="true"></span>Users
  
                    </Link>
                    <ul className="cat-sub-menu">
                      <li>
                        <Link to="users-01.html">Users-01</Link>
                      </li>
                      <li>
                        <Link to="users-02.html">Users-02</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="##"
                    ><span className="icon setting" aria-hidden="true"></span
                    >Settings</Link
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div className="sidebar-footer">
              <Link to="##" className="sidebar-user">
                <span className="sidebar-user-img">
                  <picture
                  ><source
                      srcSet="./img/avatar/avatar-illustrated-01.webp"
                      type="image/webp" />
                    <img
                      src="./img/avatar/avatar-illustrated-01.png"
                      alt="User name"
                    /></picture>
                </span>
                <div className="sidebar-user-info">
                  <span className="sidebar-user__title">Nafisa Sh.</span>
                  <span className="sidebar-user__subtitle">Support manager</span>
                </div>
              </Link>
            </div>
          </aside>
          <div className="main-wrapper">
  
            <nav className="main-nav--bg">
              <div className="container main-nav">
                <div className="main-nav-start">
                  <div className="search-wrapper">
  
                  </div>
                </div>
                <div className="main-nav-end">
                  <button
                    className="sidebar-toggle transparent-btn"
                    title="Menu"
                    type="button"
                  >
                    <span className="sr-only">Toggle menu</span>
                    <span className="icon menu-toggle--gray" aria-hidden="true"></span>
                  </button>
                  <div className="lang-switcher-wrapper">
                    <button className="lang-switcher transparent-btn" type="button">
                      EN
                      <i data-feather="chevron-down" aria-hidden="true"></i>
                    </button>
                    <ul className="lang-menu dropdown">
                      <li><Link to="##">English</Link></li>
                      <li><Link to="##">French</Link></li>
                      <li><Link to="##">Uzbek</Link></li>
                    </ul>
                  </div>
                  <button
                    className="theme-switcher gray-circle-btn"
                    type="button"
                    title="Switch theme"
                  >
                    <span className="sr-only">Switch theme</span>
                    <i className="sun-icon" data-feather="sun" aria-hidden="true"></i>
                    <i className="moon-icon" data-feather="moon" aria-hidden="true"></i>
                  </button>
                  <div className="notification-wrapper">
                    <button
                      className="gray-circle-btn dropdown-btn"
                      title="To messages"
                      type="button"
                    >
                      <span className="sr-only">To messages</span>
                      <span
                        className="icon notification active"
                        aria-hidden="true"
                      ></span>
                    </button>
                    <ul className="users-item-dropdown notification-dropdown dropdown">
                      <li>
                        <Link to="##">
                          <div className="notification-dropdown-icon info">
                            <i data-feather="check"></i>
                          </div>
                          <div className="notification-dropdown-text">
                            <span className="notification-dropdown__title"
                            >System just updated</span
                            >
                            <span className="notification-dropdown__subtitle"
                            >The system has been successfully upgraded. Read more
                              here.</span
                            >
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="##">
                          <div className="notification-dropdown-icon danger">
                            <i data-feather="info" aria-hidden="true"></i>
                          </div>
                          <div className="notification-dropdown-text">
                            <span className="notification-dropdown__title"
                            >The cache is full!</span
                            >
                            <span className="notification-dropdown__subtitle"
                            >Unnecessary caches take up a lot of memory space and
                              interfere ...</span
                            >
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link to="##">
                          <div className="notification-dropdown-icon info">
                            <i data-feather="check" aria-hidden="true"></i>
                          </div>
                          <div className="notification-dropdown-text">
                            <span className="notification-dropdown__title"
                            >New Subscriber here!</span
                            >
                            <span className="notification-dropdown__subtitle"
                            >A new subscriber has subscribed.</span
                            >
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link className="link-to-page" to="##"
                        >Go to Notifications page</Link
                        >
                      </li>
                    </ul>
                  </div>
                  <div className="nav-user-wrapper">
                    <button
                      to="##"
                      className="nav-user-btn dropdown-btn"
                      title="My profile"
                      type="button"
                    >
                      <span className="sr-only">My profile</span>
                      <span className="nav-user-img">
                        <picture
                        ><source
                            srcSet="./img/avatar/avatar-illustrated-02.webp"
                            type="image/webp" />
                          <img
                            src="./img/avatar/avatar-illustrated-02.png"
                            alt="User name"
                          /></picture>
                      </span>
                    </button>
                    <ul className="users-item-dropdown nav-user-dropdown dropdown">
                      <li>
                        <Link to="##">
                          <i data-feather="user" aria-hidden="true"></i>
                          <span>Profile</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="##">
                          <i data-feather="settings" aria-hidden="true"></i>
                          <span>Account settings</span>
                        </Link>
                      </li>
                      <li>
                        <Link className="danger" to="##">
                          <i data-feather="log-out" aria-hidden="true"></i>
                          <span>Log out</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
  
            <div className="header2" >
              <div class="sort-bar">
                <div class="sort-bar-start">
                <p>Rfq/</p>
                 <p className="Suppliers">FabriCation Screw</p>
                </div>
                <div class="sort-bar-end">
                <div class="sort-bar-start">
                <div class="search-wrapper">
                  <i data-feather="search" aria-hidden="true"></i>
                  <input type="text" placeholder="Search" required/>
                </div>
              </div>
              <Link class="primary-default-btn sideRfq" to="##"><i data-feather="plus"></i>Create New RFQ</Link>
                </div>
              </div>
  
              <form class="sort-bar">
  
                <div class="sort-bar-end">
                  <div class="select-wrapper">
                  <nav class="tab-nav">
                  <ul class="tab-menu">
                    <div className="d-flex">
                    <div className="d-flex sideline">
                    <div>
                    All Quotes <span>(0)</span>
                    </div>
                    <div>
                    All Quotes <span>(0)</span>
                    </div>
                    <div>
                    All Quotes <span>(0)</span>
                    </div>
                    <div>
                    All Quotes <span>(0)</span>
                    </div>
                    </div>
                    <div className="d-flex">d</div>
                    
                    </div>
                    
                
                  </ul>
                </nav>
                    </div>
                    
                    
                 
                 
                 
                </div>
              </form>
  
  
            </div>
  
            <div>
            <div className="header5" style={{ justifyContent:"space-evenly",alignSelf:"center"}}> 
  
          
              <div>Suppliers</div>
              <div className=" amount">
              <span>Quote Amount</span>
              <span>Quote Amount</span>
              <span>Quote Amount</span>
              </div>
            

          </div>
  
              <div className="header3">
                <div className="main-div">
                  <div className="div2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/2048px-LEGO_logo.svg.png" alt="" />
  
                  </div>
  
                  <div className="div3">
                    <p className="service">Shree om Techno Service</p>
                    <div>
                      <p className="vendor">Vendor Id :1234</p>
                      <p className="vendor">Location: Mumbai ,Thane ,42230</p>
                      <p className="vendor">Experience : 15 Years</p>
                    </div>
                  </div>
                </div>
  
                <div className="sideDiv">
                  <p class="sideDivContent">Po Complete 30</p>
                  <p class="sideDivContent">open Rfq 0</p>
                  <p class="sideDivContent">Request rfq 30</p>
  
  
                </div>
  
              </div>
             
            </div>
  
  
  
  
  
  
  
  
  
  
            <footer className="footer">
              <div className="container footer--flex">
                <div className="footer-start">
                  <p>
                    2021 © Elegant Dashboard -
                    <Link
                      to="elegant-dashboard.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >elegant-dashboard.com </Link>
                  </p>
                </div>
                <ul className="footer-end">
                  <li><Link to="##">About</Link></li>
                  <li><Link to="##">Support</Link></li>
                  <li><Link to="##">Puchase</Link></li>
                </ul>
              </div>
            </footer>
          </div>
        </div>
      </div>
    )
}

export default AllOuotes
