import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <i className={icon} /> {title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active" style={{ marginRight: "20px" }}>
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item active">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// If we don't pass props then its going to take it from defaultprops object
// If we pass then it will override defaultProps
//In class component we write below code using static keyword
// eg
// static defaultProps = {
//     title: "Github Finder",
//     icon: "fab fa-github",
//   };
// same goes with proptypes

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

// setting propstypes
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Navbar;
