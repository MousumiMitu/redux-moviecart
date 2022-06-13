import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg light-blue">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            MovieList
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto ">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>

              <Link className="nav-link" to="/">
                <img
                  src="/images/profile-user.png"
                  alt=""
                  className=" user-icon "
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
