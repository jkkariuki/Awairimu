import React, { useState } from "react";
import PropTypes from "prop-types";
import { contactMsg } from "../../../actions/profile";
import { setAlert } from "../../../actions/alert";
import Alert from "../Alert";
import logo from "../../../img/logo.jpeg";
import { connect } from "react-redux";
import "./ContactForm.css";

const ContactForm = ({ contactMsg, placeHolder, listingId, setAlert }) => {
  const [formData, setFormData] = useState({
    message: ""
  });

  const { message } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    contactMsg({ listingId, message });
    setFormData({ ...formData, message: " " });
  };

  return (
    <div
      style={{ textAlign: "center", margin: "" }}
      className='col-lg-3 offset-lg-1 col-md-4 col-sm-7'
      id='contactForm'
    >
      <div className='card'>
        <img
          className='card-img-top'
          src={logo}
          alt='placeholder'
          style={{ height: "200px", width: "100%" }}
        />
        <div className='card-body'>
          <p style={{ color: "black" }} className='card-title'>
            LetGoHomes{" "}
          </p>
          <p>Remax Realtors</p>
          <form onSubmit={e => onSubmit(e)}>
            <div className='form-group'>
              <textarea
                className='form-control input-sm'
                name='message'
                value={message}
                rows='2'
                id='comment'
                placeholder={placeHolder}
                onChange={e => onChange(e)}
                required
              ></textarea>
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </div>
      <Alert />
    </div>
  );
};

ContactForm.propTypes = {
  contactMsg: PropTypes.func.isRequired,
  listingId: PropTypes.string,
  placeHolder: PropTypes.string.isRequired
};

export default connect(null, { contactMsg, setAlert })(ContactForm);
