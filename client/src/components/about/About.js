import React from "react";
import PropTypes from "prop-types";
import logo from "../../img/logo.jpg";

import Akariuki from "../../img/Akariuki.jpg";
const About = props => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#2E86C1"
        }}
        class='jumbotron jumbotron-fluid'
      >
        <div class='container'>
          <h1 class='display-4'>About</h1>
        </div>
      </div>
      <div style={{ marginTop: "70px" }} className='container'>
        <div className='row'>
          <div
            style={{ marginTop: "20px" }}
            className='col-lg-4 col-md-4 col-sm-12'
          >
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni
            </p>
          </div>
          <div
            style={{ marginTop: "20px" }}
            className='col-lg-4 col-md-4 col-sm-12'
          >
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni
            </p>
          </div>
          <div
            style={{ marginTop: "20px" }}
            className='col-lg-4 col-md-4 col-sm-12 center-sm'
          >
            <div style={{ width: "200px", margin: "0 auto" }} className='card'>
              <img className='card-img-top' src={logo} alt='Card image' />
              <div className='card-body'>
                <p style={{ color: "black" }} className='card-title'>
                  City Group
                </p>
                <p>Remax Realtors</p>
                <form>
                  <div className='form-group'>
                    <textarea
                      className='form-control input-sm'
                      name='formData'
                      rows='2'
                      id='comment'
                      placeholder='Contact Me'
                      // required
                    ></textarea>
                  </div>
                  <button type='submit' className='btn btn-primary'>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {};

export default About;
