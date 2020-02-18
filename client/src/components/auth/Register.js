import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import "./form.css";
// import { setAlert } from "../../actions/alert";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: ""
  });

  const { firstName, lastName, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match!", "danger");
      console.log("Passwords don't match");
    } else {
      register({ firstName, lastName, email, password });
      setAlert("Success!", "danger");

      console.log("SUCCESS");
      console.log(firstName, lastName, email, password);
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }
  return (
    <Fragment>
      <div className='row'>
        <div className='col-md-5 mx-auto'>
          <div id='first'>
            <div className='myform form '>
              <div className='logo mb-3'>
                <div className='col-md-12 text-center'>
                  <h1>Signup</h1>
                </div>

                <form onSubmit={e => onSubmit(e)}>
                  <div className='form-group'>
                    <label for='exampleInputEmail1'>First Name</label>
                    <input
                      type='text'
                      name='firstName'
                      className='form-control'
                      id='firstname'
                      aria-describedby='emailHelp'
                      placeholder='Enter Firstname'
                      value={firstName}
                      onChange={e => onChange(e)}
                    />
                  </div>
                  <div className='form-group'>
                    <label for='exampleInputEmail1'>Last Name</label>
                    <input
                      type='text'
                      name='lastName'
                      className='form-control'
                      id='lastname'
                      aria-describedby='emailHelp'
                      placeholder='Enter Lastname'
                      value={lastName}
                      onChange={e => onChange(e)}
                    />
                  </div>
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
                    />
                  </div>
                  <div className='form-group'>
                    <label for='exampleInputEmail1'>Re-enter Password</label>
                    <input
                      type='password'
                      name='password2'
                      className='form-control'
                      aria-describedby='emailHelp'
                      placeholder='Re-enter Password'
                      value={password2}
                      onChange={e => onChange(e)}
                    />
                  </div>
                  <div className='col-md-12 text-center mb-3'>
                    <button
                      type='submit'
                      className=' btn btn-block mybtn btn-primary tx-tfm'
                    >
                      Get Started For Free
                    </button>
                  </div>
                  <div className='col-md-12 '>
                    <div className='form-group'>
                      <p className='text-center'>
                        <Link to='/login' id='signin'>
                          Already have an account?
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
