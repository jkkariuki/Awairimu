import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setAlert } from "../../actions/alert";
import { login } from "../../actions/auth";

import "./form.css";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login({ email, password });

    console.log("SUCCESS");
    console.log(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <div className='row'>
        <div className='col-md-5 mx-auto'>
          <div id='first'>
            <div className='myform form '>
              <div className='logo mb-3'>
                <div className='col-md-12 text-center'>
                  <h1>Login</h1>
                </div>
              </div>
              <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                  <label for='exampleInputEmail1'>Email address</label>
                  <input
                    type='email'
                    name='email'
                    className='form-control'
                    id='email'
                    aria-describedby='emailHelp'
                    placeholder='Enter email'
                    value={email}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label for='exampleInputEmail1'>Password</label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    className='form-control'
                    aria-describedby='emailHelp'
                    placeholder='Enter Password'
                    value={password}
                    onChange={e => onChange(e)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <p className='text-center'>
                    By signing up you accept our <a href='#'>Terms Of Use</a>
                  </p>
                </div>
                <div className='col-md-12 text-center '>
                  <button
                    type='submit'
                    className=' btn btn-block mybtn btn-primary tx-tfm'
                  >
                    Login
                  </button>
                </div>
                <div className='col-md-12 '>
                  <div className='login-or'>
                    <hr className='hr-or' />
                    <span className='span-or'>or</span>
                  </div>
                </div>

                <div className='form-group'>
                  <p className='text-center'>
                    Don't have account?{" "}
                    <Link to='/register' id='signup'>
                      Sign up here
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, login })(Login);
