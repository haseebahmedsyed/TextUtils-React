import React from 'react'
import PropTypes from 'prop-types'
// import{Link}from "react-router-dom";



export default function Navbar(props) {

  return (
    <div>

      <nav className={`navbar navbar-expand-lg navbar-${props.mode==='light'?'light':'dark'} bg-${props.mode==='light'?'light':'dark'}`}>
        <div className="container-fluid">
          <a className="navbar-brand" style={props.mode==='light'?{color:'black'}:{color :"white"}} href="/">{props.title}</a>
          <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" style={props.mode==='light'?{color:'black'}:{color :"white"}} aria-current="page" href='/txtBar'>{props.home}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/acc">Accordion</a>
              </li>

            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" style={props.mode==='light'?{color:'black'}:{color :"white"}} htmlFor="flexSwitchCheckDefault">Dark Mode Enabled</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  // title : PropTypes.string, //the title shouldn't other tha string.
  title: PropTypes.string.isRequired, //the title shouldn't other tha string and is compulsory.
  home: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: "UnTitle",
  home: "No Home"
}