
import '../Dashboard/Dashboard.css'
import { Link } from 'react-router-dom';


function Dashboard() {
  return (
    <div className="App">
      <div className="layer"></div>

      <a className="skip-link sr-only" href="#skip-target">Skip to content</a>
      <div className="page-flex">

        <aside className="sidebar " style={{height:"100vmax"}}>
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
                    <span className="icon document" aria-hidden="true"></span>
                    <Link to="/buyer">RFQ</Link>

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
                    <span className="icon folder" aria-hidden="true"></span>
                    <Link to="/#">Suppliers</Link>
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
                    <span className="icon image" aria-hidden="true"></span>
                    <Link to="/allquotes">Company Profile</Link>

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
                    <span className="icon paper" aria-hidden="true"></span>
                    <Link to="/postrfq">SQ</Link>


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
                    <Link to="/approved">Notification</Link>
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
                  <Link to='/SQCardDetails'>
                  <a className="show-cat-btn">
                    <span className="icon user-3" aria-hidden="true"></span>Users
                  </a>
                  </Link>
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
                  <Link to='/SQCardListing'
                  ><span className="icon setting" aria-hidden="true"></span
                  >Settings</Link>
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











          <div>



          </div>











        </div>
      </div>
    </div>
  );
}

export default Dashboard;
