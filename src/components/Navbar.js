import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Navbar() {
  const amount = useSelector(state=> state.amount);
  return (
    <>
      <div>
        <nav className="navbar  navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Daily Bank
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
              <button className="btn btn-danger" disabled={true}>
                Bank Money : {amount}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
