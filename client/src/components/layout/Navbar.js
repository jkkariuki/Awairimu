import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <nav class='navbar navbar-expand-md bg-dark navbar-dark'>
      <Link class='navbar-brand' to='/'>
        Alice Kariuki, Your Agent
      </Link>

      <button
        class='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#collapsibleNavbar'
      >
        <span class='navbar-toggler-icon'></span>
      </button>

      <div class='collapse navbar-collapse' id='collapsibleNavbar'>
        <ul class='navbar-nav'>
          <li class='nav-item'>
            <Link class='nav-link' to='/about'>
              About
            </Link>
          </li>
          <li class='nav-item'>
            <Link class='nav-link' to='/reviews'>
              Reviews
            </Link>
          </li>
          <li class='nav-item'>
            <Link class='nav-link' to='/my-profile'>
              Dashboard
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <Link onClick={logout} class='nav-link' to='/'>
          <i className='fas fa-sign-out-alt hide-sm'>
            <span>Logout</span>
          </i>
        </Link>
      </div>
    </nav>
  );

  const guestLinks = (
    <nav class='navbar navbar-expand-md bg-dark navbar-dark'>
      <Link class='navbar-brand' to='/'>
        Alice Kariuki, Your Agent
      </Link>

      <button
        class='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#collapsibleNavbar'
      >
        <span class='navbar-toggler-icon'></span>
      </button>

      <div class='collapse navbar-collapse' id='collapsibleNavbar'>
        <ul class='navbar-nav'>
          <li class='nav-item'>
            <Link class='nav-link' to='/about'>
              About
            </Link>
          </li>
          <li class='nav-item'>
            <Link class='nav-link' to='/reviews'>
              Reviews
            </Link>
          </li>
          <li class='nav-item'>
            <Link class='nav-link' to='listings'>
              Listings
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <Link class='nav-link' to='/login'>
          Login
        </Link>
      </div>
      <div>
        <Link class='nav-link' to='/register'>
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
