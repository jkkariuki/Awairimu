import React from "react";
import PropTypes from "prop-types";
import "./Contact.css";

const Contact = () => {
  return (
    <div style={{ marginTop: "-210px" }} className=''>
      <div
        className='row'
        style={{
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {/* <div
        class='contact100-map'
        id='google_map'
        data-map-x='40.722047'
        data-map-y='-73.986422'
        data-pin='images/icons/map-marker.png'
        data-scrollwhell='0'
        data-draggable='1'
      ></div> */}

        <div class='col-lg-12 col-md-12'>
          <div class='contact100-form-title'>
            <span class='contact100-form-title-1'>Contact Us</span>

            <span class='contact100-form-title-2'>
              Feel free to drop us a line below!
            </span>
          </div>

          <form class='contact100-form validate-form'>
            <div
              class='wrap-input100 validate-input col-lg-6 col-md-12 col-sm-12'
              data-validate='Name is required'
            >
              <span class='label-input100'>First Name:</span>
              <input
                class='input100'
                type='text'
                name='FirstName'
                placeholder='First Name'
              />
              <span class='focus-input100'></span>
            </div>
            <div
              class='wrap-input100 validate-input col-lg-6 col-md-12 col-sm-12'
              data-validate='Last Name is required'
            >
              <span class='label-input100'>Last Name:</span>
              <input
                class='input100'
                type='text'
                name='LastName'
                placeholder='Last name'
              />
              <span class='focus-input100'></span>
            </div>

            <div
              class='wrap-input100 validate-input col-lg-6 col-md-12 col-sm-12'
              data-validate='Valid email is required: ex@abc.xyz'
            >
              <span class='label-input100'>Email:</span>
              <input
                class='input100'
                type='text'
                name='email'
                placeholder='Email addess'
              />
              <span class='focus-input100'></span>
            </div>

            <div
              class='wrap-input100 validate-input col-lg-6 col-md-12 col-sm-12'
              data-validate='Phone is required'
            >
              <span class='label-input100'>Phone:</span>
              <input
                class='input100'
                type='text'
                name='phone'
                placeholder='Phone Number'
              />
              <span class='focus-input100'></span>
            </div>

            <div
              class='wrap-input100 validate-input col-lg-12 col-md-8 col-sm-12'
              data-validate='Message is required'
            >
              <span class='label-input100'>Message:</span>
              <textarea
                class='input100'
                name='message'
                placeholder='Your Comment...'
              ></textarea>
              <span class='focus-input100'></span>
            </div>

            <div class='container-contact100-form-btn'>
              <button class='contact100-form-btn'>
                <span>
                  Submit
                  <i
                    class='fa fa-long-arrow-right m-l-7'
                    aria-hidden='true'
                  ></i>
                </span>
              </button>
            </div>
          </form>
        </div>

        <div id='dropDownSelect1'></div>
      </div>
    </div>
  );
};

export default Contact;
