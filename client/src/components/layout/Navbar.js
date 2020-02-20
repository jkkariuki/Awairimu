import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <nav className='navbar navbar-expand-md bg-dark navbar-dark'>
      <Link className='navbar-brand' to='/'>
        LetsGoHomes
      </Link>

      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#collapsibleNavbar'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='collapsibleNavbar'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link className='nav-link' to='/about'>
              About
            </Link>
          </li>

          <li className='nav-item'>
            <Link className='nav-link' to='/saved'>
              Saved Listings
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <Link onClick={logout} className='nav-link' to='/'>
          <i className='fas fa-sign-out-alt hide-sm'>
            <span>Logout</span>
          </i>
        </Link>
      </div>
    </nav>
  );

  const guestLinks = (
    <nav className='navbar navbar-expand-md bg-dark navbar-dark'>
      <Link className='navbar-brand' to='/'>
        LetsGoHomes
      </Link>

      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#collapsibleNavbar'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='collapsibleNavbar'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <Link className='nav-link' to='/about'>
              About
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <Link className='nav-link' to='/login'>
          Login
        </Link>
      </div>
      <div>
        <Link className='nav-link' to='/register'>
          Register
        </Link>
      </div>
    </nav>
  );

  return (
    <Fragment>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </Fragment>
  );
};

navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(navbar);
