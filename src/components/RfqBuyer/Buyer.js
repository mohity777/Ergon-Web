
import '../Dashboard/Dashboard.css'
import './Buyer.css'

function BuyerDashboard() {
  return (
    <div className="App">
      <div className="layer"></div>

      <a className="skip-link sr-only" href="#skip-target">Skip to content</a>
      <div className="page-flex">

        <aside className="sidebar">
          <div className="sidebar-start">
            <div className="sidebar-head">
              <a href="/" className="logo-wrapper" title="Home">
                <span className="sr-only">Home</span>
                <span className="icon logo" aria-hidden="true"></span>
                <div className="logo-text">
                  <span className="logo-title">Elegant</span>
                  <span className="logo-subtitle">Dashboard</span>
                </div>
              </a>
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
                  <a className="active" href="/"
                  ><span className="icon home" aria-hidden="true"></span
                  >Dashboard</a
                  >
                </li>
                <li>
                  <a className="show-cat-btn" href="##">
                    <span className="icon document" aria-hidden="true"></span>RFQ

                  </a>
                  <ul className="cat-sub-menu">
                    <li>
                      <a href="posts.html">All Posts</a>
                    </li>
                    <li>
                      <a href="new-post.html">Add new post</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="show-cat-btn" href="##">
                    <span className="icon folder" aria-hidden="true"></span>Suppliers
                    <span className="category__btn transparent-btn" title="Open list">
                      <span className="sr-only">Open list</span>
                      <span className="icon arrow-down" aria-hidden="true"></span>
                    </span>
                  </a>
                  <ul className="cat-sub-menu">
                    <li>
                      <a href="categories.html">All categories</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="show-cat-btn" href="##">
                    <span className="icon image" aria-hidden="true"></span>Company Profile

                  </a>
                  <ul className="cat-sub-menu">
                    <li>
                      <a href="media-01.html">Media-01</a>
                    </li>
                    <li>
                      <a href="media-02.html">Media-02</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="show-cat-btn" href="##">
                    <span className="icon paper" aria-hidden="true"></span>SQ


                  </a>
                  <ul className="cat-sub-menu">
                    <li>
                      <a href="pages.html">All pages</a>
                    </li>
                    <li>
                      <a href="new-page.html">Add new page</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="comments.html">
                    <span className="icon message" aria-hidden="true"></span>
                    Notificationssu
                  </a>
                  <span className="msg-counter">7</span>
                </li>
              </ul>
              <span className="system-menu__title">system</span>
              <ul className="sidebar-body-menu">
                <li>
                  <a href="appearance.html"
                  ><span className="icon edit" aria-hidden="true"></span
                  >Appearance</a
                  >
                </li>
                <li>
                  <a className="show-cat-btn" href="##">
                    <span className="icon category" aria-hidden="true"></span
                    >Extentions


                  </a>
                  <ul className="cat-sub-menu">
                    <li>
                      <a href="extention-01.html">Extentions-01</a>
                    </li>
                    <li>
                      <a href="extention-02.html">Extentions-02</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="show-cat-btn" href="##">
                    <span className="icon user-3" aria-hidden="true"></span>Users

                  </a>
                  <ul className="cat-sub-menu">
                    <li>
                      <a href="users-01.html">Users-01</a>
                    </li>
                    <li>
                      <a href="users-02.html">Users-02</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="##"
                  ><span className="icon setting" aria-hidden="true"></span
                  >Settings</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-footer">
            <a href="##" className="sidebar-user">
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
            </a>
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
                    <li><a href="##">English</a></li>
                    <li><a href="##">French</a></li>
                    <li><a href="##">Uzbek</a></li>
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
                      <a href="##">
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
                      </a>
                    </li>
                    <li>
                      <a href="##">
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
                      </a>
                    </li>
                    <li>
                      <a href="##">
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
                      </a>
                    </li>
                    <li>
                      <a className="link-to-page" href="##"
                      >Go to Notifications page</a
                      >
                    </li>
                  </ul>
                </div>
                <div className="nav-user-wrapper">
                  <button
                    href="##"
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
                      <a href="##">
                        <i data-feather="user" aria-hidden="true"></i>
                        <span>Profile</span>
                      </a>
                    </li>
                    <li>
                      <a href="##">
                        <i data-feather="settings" aria-hidden="true"></i>
                        <span>Account settings</span>
                      </a>
                    </li>
                    <li>
                      <a className="danger" href="##">
                        <i data-feather="log-out" aria-hidden="true"></i>
                        <span>Log out</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>

          <div className="header2" >
            <div class="sort-bar">
              <div class="sort-bar-start">
               <p className="Suppliers">Suppliers</p>
              </div>
              <div class="sort-bar-end">
              <div class="sort-bar-start">
              <div class="search-wrapper">
                <i data-feather="search" aria-hidden="true"></i>
                <input type="text" placeholder="Search" required/>
              </div>
            </div>
            <a class="primary-default-btn sideRfq" href="##"><i data-feather="plus"></i>Create New RFQ</a>
              </div>
            </div>

            <form class="sort-bar">

              <div class="sort-bar-end">
                <div class="select-wrapper">
                <nav class="tab-nav">
                <ul class="tab-menu">
                  <li><a href="/#">General</a></li>
                  <li><a href="#widgets">Widgets</a></li>
                  <li><a href="#menus">Menus</a></li>
                  <li><select class="select transparent-btn" style={{marginLeft:"9vmax"}} required>
                  <option selected disabled>All dates</option>
                  <option value="2.03.2014">2.03.2014</option>
                  <option value="5.06.2014">5.06.2014</option>
                  <option value="2.03.2021">2.03.2021</option>
                </select></li>
                <li> <div class="select-wrapper">
                <select class="select transparent-btn" required>
                  <option selected disabled>All categories</option>
                  <option value="Wellness">Wellness</option>
                  <option value="UX-design">UX design</option>
                  <option value="Interaction">Interaction</option>
                  <option value="2.03.2021">Interaction</option>
                </select>
              </div></li>
                <li> <div class="select-wrapper">
                <select class="select transparent-btn" required>
                  <option selected disabled>Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Active">Active</option>
                  <option value="Pending">Pending</option>
                </select>
              </div></li>
                <li> <div class="select-wrapper">
                <button class="filter-btn select transparent-btn">
                  <i data-feather="filter" aria-hidden="true"></i>
                  <span>Filter</span>
                </button>
              </div></li>
              
                </ul>
              </nav>
                  </div>
                  
               
               
               
              </div>
            </form>


          </div>

          <div>

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
            <div className="header4">

              <div className="col downBar">
                <div className=""><p>Add to favourites</p></div>
                <div className="">
                  <p>Capabilities <span className="welding"> <td><span class="badge-active">Welding</span></td></span> <span className="welding"> <td><span class="badge-active">Forging</span></td></span> </p>
                </div>
              </div>

            </div>
          </div>










          <footer className="footer">
            <div className="container footer--flex">
              <div className="footer-start">
                <p>
                  2021 © Elegant Dashboard -
                  <a
                    href="elegant-dashboard.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >elegant-dashboard.com</a
                  >
                </p>
              </div>
              <ul className="footer-end">
                <li><a href="##">About</a></li>
                <li><a href="##">Support</a></li>
                <li><a href="##">Puchase</a></li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default BuyerDashboard;
