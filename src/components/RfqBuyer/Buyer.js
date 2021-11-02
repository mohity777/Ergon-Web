
import'../Dashboard/Dashboard.css'


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
                <i data-feather="search" aria-hidden="true"></i>
                <input type="text" placeholder="Enter keywords ..." required />
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
     
        <main className="main" id="skip-target">
          <div className="container">
            <h2 className="main-title">Appearance</h2>
            <div className="main-content">
             
              <nav className="tab-nav">
                <ul className="tab-menu">
                  <li><a href="#general" className="active">General</a></li>
                  <li><a href="#widgets">Widgets</a></li>
                  <li><a href="#menus">Menus</a></li>
                  <li><a href="#editor">Theme editor</a></li>
                </ul>
              </nav>
            
              <article className="tab-content" id="general">
                <form className="row tab-form">
             
                  <div className="col-lg-8 tab-form-start">
                    <div className="row">
                      <div className="col-lg-5 mb-20">
                        <label>
                          <span className="tab-form__label">Website name</span>
                          <input type="text" placeholder="Enter website name" />
                        </label>
                      </div>
                      <div className="col-lg-7 mb-20">
                        <label>
                          <span className="tab-form__label"
                            >Website description</span
                          >
                          <input
                            type="text"
                            placeholder="Enter website description"
                          />
                        </label>
                      </div>
                      <div className="col-xl-5 col-xxl-4">
                        <span className="tab-form__label"
                          >Website main language</span
                        >
                        <div className="select-wrapper">
                          <select className="select transparent-btn" required>
                            <option  disabled>
                              Select main language
                            </option>
                            <option value="English">English</option>
                            <option value="French">French</option>
                            <option value="Uzbek">Uzbek</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-3 col-xxl-4">
                        <span className="tab-form__label">Default user role</span>
                        <div className="select-wrapper">
                          <select className="select transparent-btn" required>
                            <option >Author</option>
                            <option value="Editor">Editor</option>
                            <option value="Moderator">Moderator</option>
                            <option value="Admin">Admin</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-4 col-xxl-4">
                        <span className="tab-form__label">Cache clear time</span>
                        <div className="select-wrapper">
                          <select className="select transparent-btn" required>
                            <option >Every 24 hours</option>
                            <option value="Pending">Every 12 hours</option>
                            <option value="Active">Every 1 week</option>
                            <option value="Pending">Every 1 month</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
               
                  <div className="col-lg-4 tab-form-end">
                    <picture
                      ><source
                        srcSet="./img/svg/image-frame.svg"
                        type="image/webp" />
                      <img src="./img/svg/image-frame.svg" alt="user-pic"
                    /></picture>
                    <p className="tab-form-end__title">Sunshine theme lite</p>
                    <table>
                      <tr>
                        <td>Version:</td>
                        <td><span>4.9</span></td>
                      </tr>
                      <tr>
                        <td>Author:</td>
                        <td><span>Nicolay Artur</span></td>
                      </tr>
                      <tr>
                        <td>Website:</td>
                        <td>
                          <a href="##" className="link-info">www.theme.site</a>
                        </td>
                      </tr>
                      <tr>
                        <td>Last update:</td>
                        <td><span>04.05.2021</span></td>
                      </tr>
                      <tr>
                        <td>
                          <button
                            className="flat-btn transparent-btn"
                            type="button"
                          >
                            Customize
                          </button>
                        </td>
                        <td>
                          <button
                            className="flat-btn transparent-btn"
                            type="button"
                          >
                            Change
                          </button>
                        </td>
                      </tr>
                    </table>
                  </div>
                </form>
              </article>
          
              <article className="tab-content" id="widgets">
                <div className="row drag__row">
                  <div className="col-lg-8">
                    <div className="row">
                      <div className="col-lg-8">
                        <div className="drag__title">
                          <h3>Available Widgets</h3>
                          <p>
                            To activate a widget drag it to a sidebar or click
                            on it. To deactivate a widget and delete its
                            settings, drag it back.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row draggable__row drag-zone">
                   
                      <article className="draggable" draggable="true" data-item="1">
                        <div>
                          <p className="draggable__title">Search</p>
                          <p className="draggable__subtitle">
                            A search form for your site.
                          </p>
                        </div>
                        <span className="icon move" aria-hidden="true"></span>
                      </article>
                    
                      <div className="draggable" draggable="true" data-item="2">
                        <div>
                          <p className="draggable__title">Categories</p>
                          <p className="draggable__subtitle">
                            A list or dropdown of categories.
                          </p>
                        </div>
                        <span className="icon move" aria-hidden="true"></span>
                      </div>
                   
                      <div className="draggable" draggable="true" data-item="3">
                        <div>
                          <p className="draggable__title">Archives</p>
                          <p className="draggable__subtitle">
                            A monthly archive of your site’s Posts.
                          </p>
                        </div>
                        <span className="icon move" aria-hidden="true"></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                  
                    <article className="appearance-sidebar drag-zone">
                      <div className="appearance-sidebar-title">
                        <h3>Sidebar</h3>
                        <p>Add widgets here to appear in your sidebar.</p>
                      </div>
                    </article>
                    <article className="appearance-sidebar drag-zone">
                      <div className="appearance-sidebar-title">
                        <h3>Header</h3>
                        <p>Add widgets here to appear in your sidebar.</p>
                      </div>
                    </article>
                    <article className="appearance-sidebar drag-zone">
                      <div className="appearance-sidebar-title">
                        <h3>Footer</h3>
                        <p>Add widgets here to appear in your sidebar.</p>
                      </div>
                    </article>
                  </div>
                </div>
              </article>
         
              <article className="tab-content" id="menus">
                <div className="drag__title">
                  <h3>Available Widgets</h3>
                  <p>
                    To activate a widget drag it to a sidebar or click on it. To
                    deactivate a widget and delete its settings, drag it back.
                  </p>
                </div>
                <div className="drag-top-navbar drag-zone">
                  <div className="drag__title">
                    <h3>Top navbar</h3>
                    <p>Add widgets here to appear in your sidebar.</p>
                  </div>
                </div>
                <div className="row menus__row">
                  <div className="col-lg-4">
                    <div className="drag-zone">
                      <div className="drag__title drag__title--margin">
                        <h3>Pages</h3>
                        <p>All dynamic pages</p>
                      </div>
                 
                      <article className="draggable" draggable="true" data-item="1">
                        <div>
                          <p className="draggable__title">Home</p>
                          <p className="draggable__subtitle">
                            A search form for your site.
                          </p>
                        </div>
                        <span className="icon move" aria-hidden="true"></span>
                      </article>
                   
                      <article className="draggable" draggable="true" data-item="1">
                        <div>
                          <p className="draggable__title">Search</p>
                          <p className="draggable__subtitle">
                            A search form for your site.
                          </p>
                        </div>
                        <span className="icon move" aria-hidden="true"></span>
                      </article>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="drag-zone">
                      <div className="drag__title drag__title--margin">
                        <h3>Articles</h3>
                        <p>All dynamic pages</p>
                      </div>
                   
                      <article className="draggable" draggable="true" data-item="1">
                        <div>
                          <p className="draggable__title">Blog</p>
                          <p className="draggable__subtitle">
                            A search form for your site.
                          </p>
                        </div>
                        <span className="icon move" aria-hidden="true"></span>
                      </article>
                   
                      <article className="draggable" draggable="true" data-item="1">
                        <div>
                          <p className="draggable__title">About us</p>
                          <p className="draggable__subtitle">
                            A search form for your site.
                          </p>
                        </div>
                        <span className="icon move" aria-hidden="true"></span>
                      </article>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="drag-zone">
                      <div className="drag__title drag__title--margin">
                        <h3>Categories</h3>
                        <p>All dynamic pages</p>
                      </div>
                  
                      <article className="draggable" draggable="true" data-item="1">
                        <div>
                          <p className="draggable__title">Search</p>
                          <p className="draggable__subtitle">
                            A search form for your site.
                          </p>
                        </div>
                        <span className="icon move" aria-hidden="true"></span>
                      </article>
                  
                      <article className="draggable" draggable="true" data-item="1">
                        <div>
                          <p className="draggable__title">Search</p>
                          <p className="draggable__subtitle">
                            A search form for your site.
                          </p>
                        </div>
                        <span className="icon move" aria-hidden="true"></span>
                      </article>
                    </div>
                  </div>
                </div>
              </article>
         
              <article className="tab-content" id="editor">
                <div className="editor"></div>
              </article>
            </div>
          </div>
        </main>
    
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
