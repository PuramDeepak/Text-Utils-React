import React from 'react'
import PropTypes from 'prop-types'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-1">
              <a  className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            {/* <Link className="nav-link active" to="/about">About</Link> */}
          </ul>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light' ?'  Enable Dark Mode':'  Enable Light Mode'}</label>
          </div>
          {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary mx-2" type="submit">Search</button>
        </form> */}
        </div>
      </div>
    </nav>
  )
}

// Navbar.propTypes = {
//   title: PropTypes.string,
//   aboutText: PropTypes.string
// }

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About'
};
