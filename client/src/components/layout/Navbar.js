import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src={"/logo.png"} width="125" height="28" alt="" />
        </a>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/" className="navbar-item">
            HOME
      </Link>

      <Link to="/education" className="navbar-item">
            EDUCATION
            </Link>

            <Link to="/skill" className="navbar-item">
            SKILL
            </Link>

            <Link to="/experience" className="navbar-item">
            EXPERIENCE
            </Link>

            <Link to="/project" className="navbar-item">
            PROJECT
            </Link>

            <Link to="/skill" className="navbar-item">
            DASHBOARD
            </Link>

        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-light">
                Log in
          </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
